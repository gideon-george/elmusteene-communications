import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Laptop, Package } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactBand from "@/components/ContactBand";
import { WhatsAppButton, CallButton } from "@/components/Buttons";
import { BUSINESS } from "@/lib/business";
import { SERVICES } from "@/lib/services";
import { getLaptops } from "@/lib/laptops";
import { waLink, WA_GENERAL, WA_MESSAGES } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: `${BUSINESS.name} — Cyber Café, Computer Repairs, POS & Accessories in Azare`,
  description: BUSINESS.intro,
};

export default function HomePage() {
  // First two gallery units illustrate the laptops teaser strip, so the strip
  // updates automatically when the owner posts new stock via /admin.
  const teaserLaptops = getLaptops().slice(0, 2);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-navy-dark">
        <Image
          src="/images/hero/cafe-workstations.jpg"
          alt="Rows of computer workstations ready for browsing at a cyber café"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-navy-dark/60 via-navy-dark/40 to-navy-dark"
        />
        <div className="relative mx-auto max-w-content px-4 py-24 text-center sm:px-6 sm:py-32">
          <Reveal>
            <p className="mx-auto inline-block rounded-full bg-electric/15 px-4 py-1.5 text-sm font-semibold text-electric ring-1 ring-electric/30">
              Potiskum Road, Azare — Bauchi State
            </p>
            <h1 className="mx-auto mt-6 max-w-3xl font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Welcome to Elmusteene Communications
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
              {BUSINESS.tagline}
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <WhatsAppButton href={WA_GENERAL} size="lg" />
              <CallButton size="lg" tone="dark" />
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold text-white underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Our Services
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Intro ────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20" aria-label="About Elmusteene Communications">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <Reveal>
            <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-ink sm:text-xl">
              At <strong className="font-semibold text-navy">Elmusteene Communications</strong>,
              we bridge the digital gap. Whether you need high-speed internet browsing, a laptop
              repair, essential computer accessories, or quick financial transactions,
              we&apos;ve got you covered under one roof.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Services overview ────────────────────────────────────────── */}
      <section className="bg-canvas py-16 sm:py-20" aria-labelledby="services-overview">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="What we do"
              title="Everything digital, under one roof"
              lead="Four service pillars — plus BVN support — built around what Azare actually needs day to day."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.slug} delay={i * 0.06} className="h-full">
                  <Link
                    href={`/services#${service.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-light text-electric-dark transition-colors group-hover:bg-electric group-hover:text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 font-heading text-lg font-semibold text-navy">
                      {service.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                      {service.short}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-electric-dark">
                      Learn more
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </Reveal>
              );
            })}

            {/* Laptops teaser card completes the grid */}
            <Reveal delay={SERVICES.length * 0.06} className="h-full">
              <Link
                href="/laptops"
                className="group flex h-full flex-col rounded-2xl bg-navy p-6 shadow-sm transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric/20 text-electric">
                  <Laptop className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-white">
                  Laptops &amp; Computers for Sale
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/75">
                  Dell, Lenovo, HP and more in stock — singles or bulk. Browse the gallery and
                  enquire on WhatsApp.
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-electric">
                  See the gallery
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Laptops teaser strip ─────────────────────────────────────── */}
      <section className="py-16 sm:py-20" aria-labelledby="laptops-teaser">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="grid grid-cols-2 gap-4">
                {teaserLaptops.map((laptop, i) => (
                  <div
                    key={laptop.image}
                    className={`relative aspect-[3/4] overflow-hidden rounded-2xl ${i === 1 ? "mt-8" : ""}`}
                  >
                    <Image
                      src={laptop.image}
                      alt={laptop.alt}
                      fill
                      sizes="(min-width: 1024px) 17rem, 50vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex items-center gap-2 text-electric-dark">
                <Package className="h-5 w-5" aria-hidden="true" />
                <p className="text-sm font-semibold uppercase tracking-[0.18em]">In stock now</p>
              </div>
              <h2
                id="laptops-teaser"
                className="mt-3 font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl"
              >
                Laptops &amp; computers, singles or bulk
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                We stock laptops from brands like Dell, Lenovo and HP — browse the photos, then
                message us for current options, specs and prices. Buying for a school, office or
                resale? Bulk stock is available too.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <WhatsAppButton href={waLink(WA_MESSAGES.laptop)}>
                  Enquire on WhatsApp
                </WhatsAppButton>
                <Link
                  href="/laptops"
                  className="inline-flex items-center gap-2 rounded-full border border-navy/20 px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
                >
                  View the gallery
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <ContactBand />
    </>
  );
}
