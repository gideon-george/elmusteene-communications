import type { LucideIcon } from "lucide-react";
import {
  Banknote,
  Fingerprint,
  Monitor,
  Plug,
  Sparkles,
  Wrench,
} from "lucide-react";
import data from "@/content/services.json";

export type Service = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  bullets: { heading: string; detail: string }[];
  icon: LucideIcon;
  image: { src: string; alt: string };
  waMessage: string;
  /** Optional note rendered under the card (used for BVN honesty note). */
  note?: string;
};

/**
 * Icons stay in code (the CMS can't store React components). Services are
 * matched by slug; a service added through /admin with a new slug gets the
 * fallback icon until a mapping is added here.
 */
const ICONS: Record<string, LucideIcon> = {
  "cyber-cafe": Monitor,
  repairs: Wrench,
  accessories: Plug,
  "pos-financial": Banknote,
  bvn: Fingerprint,
};

const FALLBACK_ICON: LucideIcon = Sparkles;

/**
 * Service pillars — copy lives in content/services.json, editable by the
 * owner through the /admin content manager.
 */
export const SERVICES: Service[] = data.services.map((s) => ({
  slug: s.slug,
  title: s.title,
  short: s.short,
  intro: s.intro,
  bullets: s.bullets,
  icon: ICONS[s.slug] ?? FALLBACK_ICON,
  image: s.image,
  waMessage: s.whatsappMessage,
  note: s.note || undefined,
}));
