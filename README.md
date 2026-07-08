# Elmusteene Communications — Website

Website for **Elmusteene Communications**, an all-in-one digital services hub on
Potiskum Road, Azare, Bauchi State, Nigeria: cyber café, computer repairs,
POS/financial services, computer accessories, and laptops for sale.

This is a **local service business site** — the primary actions are
**Chat on WhatsApp**, **Call**, and **Visit us** (there is no shopping cart).

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Framer Motion](https://www.framer.com/motion/) for subtle scroll animations
- [lucide-react](https://lucide.dev/) icons
- Fully static output — deploys to Vercel (zero config) or any static host

## Getting started

```bash
npm install
npm run dev        # development server at http://localhost:3000
npm run build      # production build
npm start          # serve the production build
```

To deploy on Vercel: push this repo to GitHub, import it at vercel.com, done.
No environment variables are required.

## Project structure

```
app/               Pages: / (home), /services, /laptops, /about, /contact
                   plus sitemap.ts, robots.ts and the favicon (icon.svg)
components/        Reusable UI (navbar, footer, buttons, gallery, form, …)
lib/               ALL editable content lives here (see below)
public/images/     Photos grouped by use: hero/, services/, laptops/, about/
public/videos/     Self-hosted short clips + their poster images
brand-assets/      The client's original brief and raw photos (git-ignored)
```

---

## Editing guide (no coding experience needed)

All the day-to-day content lives in three small files in `lib/`. Edit the text
between quotes, save, and the whole site updates.

### Change phone numbers, address or hours

Open **`lib/business.ts`**. Everything is at the top:

- Phone numbers: edit the `phones` list. Keep both formats in sync —
  `display` (what visitors see) and `e164`/`waNumber` (used by call and
  WhatsApp links; Nigerian numbers drop the leading 0 and start with 234).
- Address: edit the `address` block.
- Hours: edit the `hours` block (also update `schemaOpens`/`schemaCloses`,
  which Google reads — 24-hour format).
- When the real domain is registered, update `siteUrl`.

### Edit services

Open **`lib/services.ts`**. Each service is a block with a `title`, `intro`,
bullet points (`heading` + `detail`), a photo and a pre-filled WhatsApp
message. Edit the text or add/remove bullets; the Services page and homepage
cards update automatically.

### Add or edit laptop listings

Open **`lib/laptops.ts`**. Each laptop looks like this:

```ts
{
  name: "Dell laptop",
  image: "/images/laptops/dell-laptop-open-display.jpg",
  alt: "Slim Dell laptop open on the shop desk",
},
```

To add a new laptop: copy a photo into `public/images/laptops/` (use simple
lowercase names with hyphens), then copy one of these blocks and update it.

**To show real specs and prices later**, add the optional fields — they appear
on the card automatically:

```ts
{
  name: "Dell laptop",
  image: "/images/laptops/dell-laptop-open-display.jpg",
  alt: "Slim Dell laptop open on the shop desk",
  specs: "Intel Core i7 · 16GB RAM · 512GB SSD",   // optional
  price: "₦450,000",                                // optional
},
```

Until those are filled in, cards say "Specs & price on request".

### Swap photos

Replace the file in `public/images/...` keeping the same filename, or add a
new file and update the path in the matching `lib/` data file (or page).
Please also update the `alt` text so it describes the new photo — screen
readers and Google both use it.

### Change the pre-filled WhatsApp messages

Open **`lib/whatsapp.ts`** — every button's pre-filled text is in the
`WA_MESSAGES` list.

### Google Map pin

The contact page currently centres the map on "Potiskum Road, Azare". Once
the shop has an exact pin on Google Maps, open the pin → Share → *Embed a map*
→ copy the URL from the iframe code, and paste it as `MAPS_EMBED_URL` in
`lib/business.ts`.

---

See **BRAND_NOTES.md** for the brand palette, honest-content rules, and the
list of TODOs awaiting real information from the owner.
