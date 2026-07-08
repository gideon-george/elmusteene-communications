# Brand Notes — Elmusteene Communications

## Identity

- **Wordmark**: "Elmusteene." (Sora bold, navy, electric-blue full stop) with
  "COMMUNICATIONS" letter-spaced beneath. Rendered as text in
  `components/Wordmark.tsx` — no image file needed, crisp at any size.
- **Monogram / favicon**: an "E" on a navy rounded square with an
  electric-blue signal dot (`app/icon.svg`).

## Palette

| Role | Colour | Hex |
| --- | --- | --- |
| Primary (trust, tech) | Deep navy blue | `#0F2C59` (dark variant `#0A1F40`) |
| Accent (links, highlights) | Bright electric blue | `#2E7DFF` (text-on-light variant `#1E63D6`) |
| Background | Clean light grey | `#F5F7FA`, white cards |
| Text | Charcoal | `#161A20`; secondary grey `#5B6472` |
| WhatsApp CTAs **only** | WhatsApp green | `#25D366` |

Contrast notes: body text on white/canvas passes AA; white on navy passes AA;
electric blue is darkened to `#1E63D6` when used as text on white so links
stay readable; text on the WhatsApp green buttons is near-black navy
(`#0A1F40`) rather than white for AA contrast.

## Typography

- Headings: **Sora** (via `next/font`)
- Body/UI: **Inter** (via `next/font`)

## Content honesty rules (agreed constraints)

Only real, supplied information is on the site: the brief's copy, the four
service pillars, BVN support (client-requested addition), the address, both
phone numbers, and the hours. **Nothing invented** — no prices, laptop specs
or conditions, fees, timelines, owner name/bio, founding date, reviews,
ratings, or social handles.

Laptop cards intentionally say "Specs & price on request" until the owner
supplies real details (see `lib/laptops.ts` — optional `specs`/`price`
fields are ready).

## Open TODOs (waiting on the owner)

1. **Domain** — `siteUrl` in `lib/business.ts` is a placeholder
   (`elmusteene-hub.vercel.app`); update when the real domain exists.
2. **Google Maps pin** — map is centred on "Potiskum Road, Azare"; replace
   `MAPS_EMBED_URL` with the exact-pin embed URL when available.
3. **Owner name / bio / founding year** — About page has a marked TODO;
   current copy only describes what the photos visibly show.
4. **Laptop specs & prices** — add per-unit in `lib/laptops.ts`.
5. **BVN specifics** — no fees, timelines or agent-status claims are made;
   confirm details before adding any.
6. **Social media handles** — none supplied; `BUSINESS.socials` is empty and
   nothing renders until it's filled.
7. **Contact form backend** — the form opens WhatsApp with the message
   pre-filled (no server). Hook up a form service later if email is wanted.

## Asset notes

- Photos were supplied via WhatsApp (`brand-assets/Musty/`, git-ignored) and
  copied into `public/images/` with descriptive kebab-case names. Captions/alt
  text describe only what is visible.
- **One supplied photo was NOT used**: the "technician with multimeter"
  image carries a visible stock-photo watermark (Dreamstime). Using it would
  look untrustworthy (and is unlicensed). The repairs pillar uses the clean
  toolkit photo instead.
- Three photos (computer lab, people at workstations, POS terminal with
  naira, repair toolkits) appear to be stock/web images supplied by the
  client rather than shop photos — they are used only in generic illustrative
  roles, never presented as "our shop". The About page uses only genuine
  workspace photos.
- The two videos are hand-held portrait clips of laptops being demonstrated
  on the shop desk. They are self-hosted on the Laptops page with poster
  frames, muted, `playsInline`, looped, `preload="none"` (lazy), and pause
  when scrolled off-screen. No audio ever autoplays.

## SEO

- Per-page titles + descriptions, OpenGraph tags, `sitemap.xml`, `robots.txt`.
- `LocalBusiness` JSON-LD (name, address, phone, opening hours) in the root
  layout (`components/JsonLd.tsx`) for Google local results.
