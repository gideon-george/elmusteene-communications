# Elmusteene Communications — Website

Website for **Elmusteene Communications**, an all-in-one digital services hub on
Potiskum Road, Azare, Bauchi State, Nigeria: cyber café, computer repairs,
POS/financial services, computer accessories, and laptops for sale.

This is a **local service business site** — the primary actions are
**Chat on WhatsApp**, **Call**, and **Visit us** (there is no shopping cart).

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router) + TypeScript, deployed on Vercel
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Framer Motion](https://www.framer.com/motion/) for subtle scroll animations
- [lucide-react](https://lucide.dev/) icons
- [Sveltia CMS](https://github.com/sveltia/sveltia-cms) at `/admin` — Git-based
  content manager so the owner can post content without touching code

## Getting started

```bash
npm install
npm run dev        # development server at http://localhost:3000
npm run build      # production build
npm start          # serve the production build
```

## Project structure

```
app/               Pages: / (home), /services, /laptops, /about, /contact
                   plus /api/auth + /api/callback (CMS GitHub login),
                   sitemap.ts, robots.ts and the favicon (icon.svg)
components/        Reusable UI (navbar, footer, buttons, gallery, form, …)
content/           ALL editable content (JSON) — what /admin reads & writes
  business.json      name, tagline, address, phones, hours, WhatsApp messages
  services.json      the service pillars
  galleries.json     about-page photos and bulk-stock photos
  laptops/           one JSON file per laptop for sale
lib/               Typed loaders that derive display formats from content/
public/images/     Photos grouped by use: hero/, services/, laptops/, about/,
                   uploads/ (photos added through /admin land here)
public/admin/      The content manager (Sveltia CMS) + its config.yml
public/videos/     Self-hosted short clips + their poster images
brand-assets/      The client's original brief and raw photos (git-ignored)
```

## Content management (/admin)

The site has a content manager at **`/admin`** — see **OWNER_GUIDE.md** for
the owner-facing instructions. Every save in /admin is a git commit to this
repo, which triggers a Vercel redeploy (live in ~1–2 minutes).

### One-time setup (developer)

1. **Deploy on Vercel** — import this repo at vercel.com. No build settings
   needed. Note the production URL.
2. **Create a GitHub OAuth App** — github.com → Settings → Developer settings
   → OAuth Apps → New:
   - Homepage URL: `https://<production-url>`
   - Authorization callback URL: `https://<production-url>/api/callback`
3. **Set env vars in Vercel** (Project → Settings → Environment Variables),
   then redeploy:
   - `OAUTH_GITHUB_CLIENT_ID`
   - `OAUTH_GITHUB_CLIENT_SECRET`
4. **Match the domain in the repo** — `base_url`/`site_url` in
   `public/admin/config.yml` and `siteUrl` in `content/business.json` must be
   the production URL.
5. **Invite the owner** — the owner needs a (free) GitHub account added as a
   repo **collaborator** (Settings → Collaborators). They sign in to /admin
   with that account.

### Content conventions

- Phone numbers are stored in plain local format (`07065010455`);
  `lib/business.ts` derives the display grouping, `tel:` and `wa.me` formats.
- Hours are stored as plain text (`8:00 AM`); schema.org values are derived.
- Laptop `specs`/`price` stay **empty** unless the owner has confirmed real
  details (honesty rule — see BRAND_NOTES.md). Empty means the card shows
  "Specs & price on request".
- Service icons live in code (`lib/services.ts`), matched by slug.

### Google Map pin

The contact page centres the map on "Potiskum Road, Azare". Once the shop has
an exact pin on Google Maps: open the pin → Share → *Embed a map* → copy the
URL from the iframe code, and paste it as `MAPS_EMBED_URL` in
`lib/business.ts`.

---

See **BRAND_NOTES.md** for the brand palette, honest-content rules, and the
list of TODOs awaiting real information from the owner.
See **docs/cms-conversion-playbook.md** for the reusable recipe this
conversion followed (static site → Vercel + Sveltia CMS).
