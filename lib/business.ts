/**
 * Business facts — loaded from content/business.json, which the owner edits
 * through the /admin content manager (or directly in the file). This module
 * derives every display/technical format the site needs (grouped phone
 * display, tel:/wa.me numbers, schema.org opening hours) so the owner only
 * ever types plain values like "07065010455" or "8:00 AM".
 */

import data from "@/content/business.json";

export type Phone = { display: string; e164: string; waNumber: string };

const WEEK = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

/** "07065010455" → "0706 501 0455"; anything unexpected passes through. */
function formatPhoneDisplay(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 11) {
    return `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7)}`;
  }
  return raw;
}

/** "07065010455" → "+2347065010455" (Nigerian local format). */
function toE164(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (raw.trim().startsWith("+")) return `+${digits}`;
  if (digits.startsWith("0")) return `+234${digits.slice(1)}`;
  return `+${digits}`;
}

function toPhone(entry: { number: string }): Phone {
  const e164 = toE164(entry.number);
  return {
    display: formatPhoneDisplay(entry.number),
    e164,
    waNumber: e164.slice(1),
  };
}

/** "8:00 AM" → "08:00", "7:00 PM" → "19:00"; falls back to the input. */
function to24h(time: string): string {
  const m = time.trim().match(/^(\d{1,2})(?::(\d{2}))?\s*(AM|PM)?$/i);
  if (!m) return time;
  let hour = Number(m[1]) % 12;
  if (m[3]?.toUpperCase() === "PM") hour += 12;
  return `${String(hour).padStart(2, "0")}:${m[2] ?? "00"}`;
}

/** "Monday – Saturday" → ["Monday", ..., "Saturday"]; falls back to Mon–Sat. */
function parseDayRange(days: string): string[] {
  const named = WEEK.filter((d) => days.toLowerCase().includes(d.toLowerCase()));
  if (named.length === 2) {
    const [start, end] = [WEEK.indexOf(named[0]), WEEK.indexOf(named[1])];
    if (start <= end) return WEEK.slice(start, end + 1);
  }
  if (named.length > 0) return named;
  return WEEK.slice(0, 6);
}

/** "Monday – Saturday" → "Mon – Sat" for the compact hours line. */
function abbreviateDays(days: string): string {
  return WEEK.reduce((s, d) => s.replace(d, d.slice(0, 3)), days);
}

const phones = data.phones.map(toPhone);
const addressFull = `${data.address.street}, ${data.address.city}, ${data.address.state}, ${data.address.country}`;

export const BUSINESS = {
  name: data.name,
  tagline: data.tagline,
  intro: data.intro,
  address: { ...data.address, full: addressFull },
  phones,
  hours: {
    display: `${abbreviateDays(data.hours.days)}: ${data.hours.open} – ${data.hours.close} · ${data.hours.closed}: Closed`,
    days: data.hours.days,
    open: data.hours.open,
    close: data.hours.close,
    closed: data.hours.closed,
    schemaDays: parseDayRange(data.hours.days),
    schemaOpens: to24h(data.hours.open),
    schemaCloses: to24h(data.hours.close),
  },
  siteUrl: data.siteUrl,
  socials: data.socials as { label: string; href: string }[],
  whatsappMessages: data.whatsappMessages,
};

export const PRIMARY_PHONE = phones[0];
export const SECONDARY_PHONE = phones[1] ?? phones[0];

/**
 * Google Maps embed centred on the address (search-by-query embed, no API key).
 * TODO(owner): once the exact shop pin exists on Google Maps, replace this
 * with the "Share > Embed a map" iframe URL for the pinned location.
 */
export const MAPS_EMBED_URL =
  "https://www.google.com/maps?q=" +
  encodeURIComponent(addressFull) +
  "&output=embed";

export const MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(addressFull);
