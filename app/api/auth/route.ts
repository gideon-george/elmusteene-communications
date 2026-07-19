import { NextRequest, NextResponse } from "next/server";

/**
 * Step 1 of the Decap/Sveltia CMS GitHub OAuth flow (this project acts as its
 * own OAuth gateway, so no third-party auth service is needed).
 *
 * /admin opens this route in a popup; we send the user to GitHub's consent
 * screen with a random `state` (stored in a short-lived cookie to block CSRF).
 * GitHub redirects back to /api/callback, which finishes the handshake.
 *
 * Requires env vars (set in Vercel → Project → Settings → Environment
 * Variables): OAUTH_GITHUB_CLIENT_ID, OAUTH_GITHUB_CLIENT_SECRET.
 */
export async function GET(request: NextRequest) {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  if (!clientId) {
    return new NextResponse(
      "OAUTH_GITHUB_CLIENT_ID is not configured on the server.",
      { status: 500 }
    );
  }

  const state = crypto.randomUUID();
  const authorizeUrl = new URL("https://github.com/login/oauth/authorize");
  authorizeUrl.searchParams.set("client_id", clientId);
  authorizeUrl.searchParams.set("scope", "repo,user");
  authorizeUrl.searchParams.set("state", state);
  authorizeUrl.searchParams.set(
    "redirect_uri",
    new URL("/api/callback", request.nextUrl.origin).toString()
  );

  const response = NextResponse.redirect(authorizeUrl);
  response.cookies.set("oauth_state", state, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 600,
    path: "/",
  });
  return response;
}
