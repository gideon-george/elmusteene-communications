"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { WhatsAppButton } from "./Buttons";
import { waLink, WA_MESSAGES } from "@/lib/whatsapp";
import { LAPTOPS } from "@/lib/laptops";

/**
 * Responsive laptop grid with click-to-enlarge lightbox.
 * Cards show only what is visible in the photo (brand, form factor) plus any
 * owner-confirmed specs/price from lib/laptops.ts — nothing is invented.
 */
export default function LaptopGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setOpenIndex((i) =>
        i === null ? null : (i + dir + LAPTOPS.length) % LAPTOPS.length
      ),
    []
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, step]);

  const active = openIndex === null ? null : LAPTOPS[openIndex];

  return (
    <>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {LAPTOPS.map((laptop, i) => (
          <li
            key={laptop.image}
            className="group overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`Enlarge photo: ${laptop.alt}`}
              className="relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-electric"
            >
              <Image
                src={laptop.image}
                alt={laptop.alt}
                fill
                priority={i < 2}
                sizes="(min-width: 1024px) 24rem, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </button>
            <div className="p-5">
              <h3 className="font-heading text-lg font-semibold text-navy">{laptop.name}</h3>
              {laptop.specs ? (
                <p className="mt-1 text-sm text-muted">{laptop.specs}</p>
              ) : (
                <p className="mt-1 text-sm text-muted">
                  Specs &amp; price on request — ask us on WhatsApp.
                </p>
              )}
              {laptop.price && (
                <p className="mt-1 text-base font-semibold text-electric-dark">{laptop.price}</p>
              )}
              <div className="mt-4">
                <WhatsAppButton href={waLink(WA_MESSAGES.laptop)}>
                  Enquire on WhatsApp
                </WhatsAppButton>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={active.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-dark/90 p-4 backdrop-blur-sm"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close enlarged photo"
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              <X className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous photo"
              className="absolute left-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:left-6"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next photo"
              className="absolute right-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:right-6"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <figure
              className="max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[70vh] w-[min(90vw,64rem)]">
                <Image
                  src={active.image}
                  alt={active.alt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>
              <figcaption className="mt-3 text-center text-sm text-white/85">
                {active.name} — {active.alt}
              </figcaption>
            </figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
