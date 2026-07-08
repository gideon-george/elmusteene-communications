import type { LucideIcon } from "lucide-react";
import {
  Banknote,
  Fingerprint,
  Monitor,
  Plug,
  Wrench,
} from "lucide-react";
import { WA_MESSAGES } from "./whatsapp";

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
 * The four service pillars from the client's content blueprint, plus
 * BVN Registration & Processing (added at the client's request).
 * Copy comes from brand-assets/brief/mmb.docx — edit wording here.
 */
export const SERVICES: Service[] = [
  {
    slug: "cyber-cafe",
    title: "Cyber Café & Digital Portals",
    short:
      "High-speed browsing, exam & portal registrations, result checking and full document processing.",
    intro:
      "Comfortable workstations and fast internet for everything you need to get done online.",
    bullets: [
      {
        heading: "High-Speed Internet Access",
        detail: "Comfortable workstations for browsing, research, and downloads.",
      },
      {
        heading: "Exam & Portal Registrations",
        detail:
          "Hassle-free registration for JAMB, WAEC, NECO, and other online recruitment/admission portals.",
      },
      {
        heading: "Result Checking",
        detail: "Quick checking and printing of examination results.",
      },
      {
        heading: "Document Processing",
        detail:
          "Professional typing, scanning, photocopying, laminating, and spiral binding.",
      },
    ],
    icon: Monitor,
    image: {
      src: "/images/services/internet-browsing-stations.jpg",
      alt: "People browsing the internet at computer workstations",
    },
    waMessage: WA_MESSAGES.cyberCafe,
  },
  {
    slug: "repairs",
    title: "Computer Repairs & Maintenance",
    short:
      "Hardware fixes, software troubleshooting and speed-boosting upgrades for laptops and desktops.",
    intro:
      "Your devices are handled by skilled repair professionals — from cracked screens to slow systems.",
    bullets: [
      {
        heading: "Hardware Fixes",
        detail:
          "Laptop/Desktop screen replacements, battery swaps, keyboard repairs, and charging port fixes.",
      },
      {
        heading: "Software Troubleshooting",
        detail:
          "Operating system installation (Windows/Mac), virus removal, and essential software setup.",
      },
      {
        heading: "System Upgrades",
        detail:
          "Speed up slow computers with RAM upgrades and Solid State Drive (SSD) installations.",
      },
    ],
    icon: Wrench,
    image: {
      src: "/images/services/repair-toolkit-open.jpg",
      alt: "Precision computer repair toolkit with screwdriver bits, tweezers and pry tools",
    },
    waMessage: WA_MESSAGES.repairs,
  },
  {
    slug: "accessories",
    title: "Computer Accessories Shop",
    short:
      "Quality tech gear in stock: storage, peripherals, chargers, audio and laptop bags.",
    intro: "Get quality tech gear right when you need it. We stock:",
    bullets: [
      {
        heading: "Storage",
        detail: "USB Flash Drives & External Hard Drives.",
      },
      {
        heading: "Peripherals & Power",
        detail: "Mice, Keyboards, and Laptop Chargers/Power Adapters.",
      },
      {
        heading: "Audio & Cables",
        detail: "Earphones, Headphones, and Extension Cables.",
      },
      {
        heading: "Media & Protection",
        detail: "Blank CDs/DVDs and Laptop Sleeves/Bags.",
      },
    ],
    icon: Plug,
    image: {
      src: "/images/services/accessories-shelf-shop.jpg",
      alt: "Accessories shelf stocked with packaged computer gear inside the Elmusteene shop",
    },
    waMessage: WA_MESSAGES.accessories,
  },
  {
    slug: "pos-financial",
    title: "POS & Financial Services",
    short:
      "Skip the bank queues — cash withdrawals and deposits, transfers, bills, airtime and data.",
    intro: "Skip the long bank queues. Visit our in-shop POS hub for:",
    bullets: [
      {
        heading: "Cash Withdrawals & Deposits",
        detail: "Instant cash withdrawals and deposits.",
      },
      {
        heading: "Money Transfers",
        detail: "Inter-bank money transfers.",
      },
      {
        heading: "Bill Payments",
        detail: "Utility bill payments (Electricity, DSTV/GOTV, etc.).",
      },
      {
        heading: "Top-Ups",
        detail: "Airtime and mobile data top-ups.",
      },
    ],
    icon: Banknote,
    image: {
      src: "/images/services/pos-terminal-naira-cash.jpg",
      alt: "Hand keying an amount into a POS terminal beside bundles of naira notes",
    },
    waMessage: WA_MESSAGES.pos,
  },
  {
    slug: "bvn",
    title: "BVN Registration & Processing",
    short:
      "Support with Bank Verification Number (BVN) enrollment, updates and retrieval.",
    intro:
      "Part of our financial services desk — get help with your Bank Verification Number:",
    bullets: [
      {
        heading: "BVN Enrollment",
        detail: "Assistance with new Bank Verification Number registration.",
      },
      {
        heading: "Modification / Update",
        detail: "Support with correcting or updating your BVN details.",
      },
      {
        heading: "Retrieval",
        detail: "Help retrieving a forgotten or lost BVN.",
      },
    ],
    icon: Fingerprint,
    image: {
      src: "/images/services/proprietor-cash-records.jpg",
      alt: "Staff member carefully recording a customer transaction at the service desk",
    },
    waMessage: WA_MESSAGES.bvn,
    // TODO(owner): confirm any fees, requirements and processing details for
    // BVN services before publishing specifics. None are stated on the site.
    note: "Ask us on WhatsApp or visit the shop for current requirements and details.",
  },
];
