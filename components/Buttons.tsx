import { Phone } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { PRIMARY_PHONE } from "@/lib/business";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
} as const;

/** Green WhatsApp CTA — the site's primary action. */
export function WhatsAppButton({
  href,
  children = "Chat on WhatsApp",
  size = "md",
  className = "",
}: {
  href: string;
  children?: React.ReactNode;
  size?: keyof typeof sizes;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizes[size]} bg-whatsapp text-navy-dark hover:bg-[#1FBF5B] focus-visible:outline-whatsapp ${className}`}
    >
      <WhatsAppIcon className={size === "lg" ? "h-5 w-5" : "h-4 w-4"} />
      {children}
    </a>
  );
}

/** Call CTA. `tone` adapts it to light or navy surfaces. */
export function CallButton({
  phone = PRIMARY_PHONE,
  children,
  size = "md",
  tone = "light",
  className = "",
}: {
  phone?: { display: string; e164: string };
  children?: React.ReactNode;
  size?: keyof typeof sizes;
  tone?: "light" | "dark" | "solid";
  className?: string;
}) {
  const tones = {
    light:
      "border border-navy/20 bg-white text-navy hover:border-navy hover:bg-navy hover:text-white focus-visible:outline-navy",
    dark: "border border-white/30 text-white hover:bg-white hover:text-navy focus-visible:outline-white",
    solid: "bg-electric text-white hover:bg-electric-dark focus-visible:outline-electric",
  } as const;
  return (
    <a
      href={`tel:${phone.e164}`}
      className={`${base} ${sizes[size]} ${tones[tone]} ${className}`}
    >
      <Phone className={size === "lg" ? "h-5 w-5" : "h-4 w-4"} aria-hidden="true" />
      {children ?? `Call ${phone.display}`}
    </a>
  );
}
