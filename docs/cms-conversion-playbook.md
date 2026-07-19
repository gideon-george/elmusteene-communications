# Playbook: Convert a static Next.js site to Vercel + Sveltia CMS

A reusable prompt for giving any hard-coded Next.js site an owner-friendly
`/admin` content manager, with edits stored as git commits (no database, no
paid services). Written after converting the Elmusteene Communications site —
use that repo as the reference implementation.

## The prompt (paste into Claude Code on the target repo)

```
Convert this Next.js site so the business owner can edit content themselves
through a CMS at /admin, deployed on Vercel. Use the git-based approach:
Sveltia CMS (Decap-compatible) with the GitHub backend, where every save is a
commit that triggers a Vercel redeploy. Follow these steps:

1. CONTENT EXTRACTION — Move all owner-editable content (business facts,
   service/product listings, photo galleries, repeated copy) out of
   components/lib files into a top-level content/ directory:
   - Single documents (business info, settings) → one JSON file each.
   - Repeating things the owner will add/remove (products, posts, listings)
     → a folder with one JSON file per entry, so the CMS shows a "New" button.
   - Store values in the simplest form the owner could type (raw local phone
     number, "8:00 AM") and write typed loader modules in lib/ that derive
     every technical format the site needs (display grouping, tel:/wa.me
     numbers, schema.org hours). Keep the loaders' exported names/shapes
     identical to what components already import so page code barely changes.
   - GOTCHA: files read with fs only work in server components. JSON that
     client components import must use static `import data from "@/content/x.json"`.
     For folder collections read with fs, load in the page (server) and pass
     down as props; client components may `import type` from the loader.
   - GOTCHA: React components (e.g. icons) can't live in JSON. Keep an
     icon-by-slug map in code with a sensible fallback for new entries.

2. ADMIN UI — Add public/admin/index.html loading Sveltia CMS from
   https://unpkg.com/@sveltia/cms/dist/sveltia-cms.js (type=module), plus
   public/admin/config.yml:
   - backend: name: github, repo: <owner>/<repo>, branch: <branch>,
     base_url: <production URL>, auth_endpoint: api/auth
   - media_folder: public/images/uploads, public_folder: /images/uploads
   - One folder collection per repeating type (format: json, create: true,
     identifier_field + sortable order field); one "files" collection for
     settings documents. Give every field a plain-English label and hint
     written for a non-technical owner. Add editor: preview: false on
     settings.
   - Add a redirect in next.config: /admin → /admin/index.html.

3. OAUTH — Add two route handlers implementing the Decap/Sveltia GitHub
   OAuth flow, so the site is its own auth gateway (no third-party service):
   - app/api/auth/route.ts: redirect to github.com/login/oauth/authorize
     with client_id, scope repo,user, a random state stored in an httpOnly
     cookie, and redirect_uri <origin>/api/callback.
   - app/api/callback/route.ts: verify state, exchange the code for a token
     server-side, then return an HTML page that performs the postMessage
     handshake: popup sends "authorizing:github" to window.opener, waits for
     any reply, then sends "authorization:github:success:{token,provider}"
     (or :error:) back to the reply's origin.
   - Credentials from env vars OAUTH_GITHUB_CLIENT_ID / _SECRET; add
     .env.example documenting them.

4. VERCEL CONVERSION — Remove static-host workarounds: output: "export",
   basePath, custom image loaders, trailingSlash, and any GitHub Pages
   workflow. API routes require the Node runtime (default on Vercel).

5. VERIFY — next build && next lint clean; run the dev server and check
   every page renders identically from the new content files (phone
   formats, JSON-LD, counts of listed items) and that /admin boots to the
   Sveltia sign-in screen with no console errors.

6. DOCS — Write an OWNER_GUIDE.md in plain English (how to log in, post a
   listing, edit info; honesty rules about not inventing specs/prices), and
   add the one-time setup steps to the README.
```

## One-time setup after the code lands (per site, done by you)

1. Push the repo to GitHub and import it at vercel.com. Note the production
   URL.
2. Create a GitHub OAuth App (Settings → Developer settings → OAuth Apps):
   Homepage = production URL; callback = `<production URL>/api/callback`.
3. In Vercel → Settings → Environment Variables set
   `OAUTH_GITHUB_CLIENT_ID` and `OAUTH_GITHUB_CLIENT_SECRET`; redeploy.
4. Make `base_url`/`site_url` in `public/admin/config.yml` (and any
   `siteUrl` in content) match the production URL exactly; commit.
5. Create/collect the owner's free GitHub account and add it as a repo
   collaborator; they accept the email invite, then sign in at `/admin`.
6. Test: log in at `/admin`, edit something small, confirm the commit
   appears in the repo and the site redeploys.

## Known trade-offs

- Owner login is a GitHub account (one-time setup friction for
  non-technical owners; walk them through it once).
- Each save = one commit + one Vercel build (~1–2 min to go live). Fine for
  shop-scale editing; not for high-frequency publishing.
- Uploaded photos are committed to the repo — fine at small-business scale;
  keep an eye on repo size if the owner uploads hundreds of large photos.
