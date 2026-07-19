import { NextRequest, NextResponse } from "next/server";

/**
 * Step 2 of the Decap/Sveltia CMS GitHub OAuth flow: GitHub redirects here
 * with a one-time `code`. We exchange it for an access token server-side
 * (the client secret never reaches the browser), then hand the token to the
 * CMS window via the postMessage handshake the CMS expects:
 *
 *   popup → opener:  "authorizing:github"
 *   opener → popup:  (any message, acknowledging)
 *   popup → opener:  "authorization:github:success:{json}"
 */
export async function GET(request: NextRequest) {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  const clientSecret = process.env.OAUTH_GITHUB_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    return new NextResponse("GitHub OAuth env vars are not configured.", {
      status: 500,
    });
  }

  const code = request.nextUrl.searchParams.get("code");
  const state = request.nextUrl.searchParams.get("state");
  const expectedState = request.cookies.get("oauth_state")?.value;

  let payload: { token?: string; error?: string };
  if (!code || !state || !expectedState || state !== expectedState) {
    payload = { error: "Invalid OAuth state. Please close this window and try signing in again." };
  } else {
    const tokenResponse = await fetch(
      "https://github.com/login/oauth/access_token",
      {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
      }
    );
    const data = (await tokenResponse.json()) as {
      access_token?: string;
      error_description?: string;
    };
    payload = data.access_token
      ? { token: data.access_token }
      : { error: data.error_description ?? "GitHub did not return a token." };
  }

  const status = payload.token ? "success" : "error";
  const content = JSON.stringify(
    payload.token ? { token: payload.token, provider: "github" } : { error: payload.error }
  );

  const html = `<!doctype html>
<html>
  <body>
    <p>Signing in… you can close this window if it does not close itself.</p>
    <script>
      (function () {
        function deliver(e) {
          window.opener.postMessage(
            "authorization:github:${status}:" + ${JSON.stringify(content)},
            e.origin
          );
          window.removeEventListener("message", deliver);
        }
        window.addEventListener("message", deliver, false);
        window.opener.postMessage("authorizing:github", "*");
      })();
    </script>
  </body>
</html>`;

  const response = new NextResponse(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
  response.cookies.delete("oauth_state");
  return response;
}
