import { BUSINESS, PRIMARY_PHONE, SECONDARY_PHONE } from "./business";

/**
 * Build a wa.me link with a pre-filled message.
 * Defaults to the primary line; pass `SECONDARY_PHONE.waNumber` to target
 * the second line.
 */
export function waLink(message: string, waNumber: string = PRIMARY_PHONE.waNumber): string {
  return `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
}

/** General enquiry — used by the header button and the floating bubble. */
export const WA_GENERAL = waLink(BUSINESS.whatsappMessages.general);

/** Second line, same general enquiry — offered on the contact page. */
export const WA_GENERAL_LINE_2 = waLink(
  BUSINESS.whatsappMessages.general,
  SECONDARY_PHONE.waNumber
);

/**
 * Pre-filled laptop enquiry messages (owner-editable in content/business.json
 * via /admin). Each service pillar's message lives with the service itself in
 * content/services.json.
 */
export const WA_MESSAGES = {
  laptop: BUSINESS.whatsappMessages.laptop,
  laptopBulk: BUSINESS.whatsappMessages.laptopBulk,
} as const;
