/**
 * Single source of truth for business facts (name, address, phones, hours).
 * Edit values HERE and they update everywhere on the site — header, footer,
 * contact page, JSON-LD structured data and WhatsApp links.
 */

export const BUSINESS = {
  name: "Elmusteene Communications",
  tagline:
    "Your Trusted Hub for Cyber Café Services, Computer Tech, POS Banking, and Accessories.",
  intro:
    "At Elmusteene Communications, we bridge the digital gap. Whether you need high-speed internet browsing, a laptop repair, essential computer accessories, or quick financial transactions, we've got you covered under one roof.",

  address: {
    street: "Potiskum Road",
    city: "Azare",
    state: "Bauchi State",
    country: "Nigeria",
    /** One-line display version */
    full: "Potiskum Road, Azare, Bauchi State, Nigeria",
  },

  /**
   * Phone lines — both are also on WhatsApp.
   * `display` is what visitors see; `e164` powers tel: and wa.me links.
   */
  phones: [
    { display: "0706 501 0455", e164: "+2347065010455", waNumber: "2347065010455" },
    { display: "0706 445 5213", e164: "+2347064455213", waNumber: "2347064455213" },
  ],

  hours: {
    display: "Mon – Sat: 8:00 AM – 7:00 PM · Sunday: Closed",
    days: "Monday – Saturday",
    open: "8:00 AM",
    close: "7:00 PM",
    closed: "Sunday",
    /** schema.org OpeningHoursSpecification values */
    schemaDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    schemaOpens: "08:00",
    schemaCloses: "19:00",
  },

  // Live GitHub Pages URL.
  // TODO(owner): replace with the real production domain when it is registered.
  siteUrl: "https://gideon-george.github.io/elmusteene-communications",

  // TODO(owner): add real social media handles when available. None were
  // supplied, so no social links are shown anywhere on the site yet.
  socials: [] as { label: string; href: string }[],
} as const;

export const PRIMARY_PHONE = BUSINESS.phones[0];
export const SECONDARY_PHONE = BUSINESS.phones[1];

/**
 * Google Maps embed centred on the address (search-by-query embed, no API key).
 * TODO(owner): once the exact shop pin exists on Google Maps, replace this
 * with the "Share > Embed a map" iframe URL for the pinned location.
 */
export const MAPS_EMBED_URL =
  "https://www.google.com/maps?q=" +
  encodeURIComponent(BUSINESS.address.full) +
  "&output=embed";

export const MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(BUSINESS.address.full);
