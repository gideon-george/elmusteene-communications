import { PRIMARY_PHONE, SECONDARY_PHONE } from "./business";

/**
 * Build a wa.me link with a pre-filled message.
 * Defaults to the primary line; pass `SECONDARY_PHONE.waNumber` to target
 * the second line.
 */
export function waLink(message: string, waNumber: string = PRIMARY_PHONE.waNumber): string {
  return `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
}

/** General enquiry — used by the header button and the floating bubble. */
export const WA_GENERAL = waLink(
  "Hello Elmusteene Communications! I have an enquiry about your services."
);

/** Second line, same general enquiry — offered on the contact page. */
export const WA_GENERAL_LINE_2 = waLink(
  "Hello Elmusteene Communications! I have an enquiry about your services.",
  SECONDARY_PHONE.waNumber
);

/** Context-specific pre-filled messages, one per service pillar. */
export const WA_MESSAGES = {
  cyberCafe:
    "Hi Elmusteene! I need help with browsing, an exam/portal registration or document processing.",
  repairs: "Hi Elmusteene! I'd like to book a computer/laptop repair.",
  accessories:
    "Hi Elmusteene! I'm looking for a computer accessory — is it in stock?",
  pos: "Hi Elmusteene! I'd like to make a POS transaction (withdrawal, transfer, bills or top-up).",
  bvn: "Hi Elmusteene! I need help with BVN enrollment, update or retrieval.",
  laptop:
    "Hi Elmusteene! I'm interested in a laptop I saw on your site — please share available options, specs and prices.",
  laptopBulk:
    "Hi Elmusteene! I'm interested in buying laptops in bulk — please share what's available.",
} as const;
