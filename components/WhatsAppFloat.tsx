import WhatsAppIcon from "./WhatsAppIcon";
import { WA_GENERAL } from "@/lib/whatsapp";

/** Floating WhatsApp bubble, fixed bottom-right on every page. */
export default function WhatsAppFloat() {
  return (
    <a
      href={WA_GENERAL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Elmusteene Communications on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
