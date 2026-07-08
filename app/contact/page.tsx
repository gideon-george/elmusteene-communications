import type { Metadata } from "next";
import { Clock, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import {
  BUSINESS,
  MAPS_DIRECTIONS_URL,
  MAPS_EMBED_URL,
} from "@/lib/business";
import { waLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact & Location",
  description: `Visit ${BUSINESS.name} on ${BUSINESS.address.full}. Call or WhatsApp ${BUSINESS.phones[0].display} / ${BUSINESS.phones[1].display}. Open ${BUSINESS.hours.days}, ${BUSINESS.hours.open} – ${BUSINESS.hours.close}.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-canvas py-16 sm:py-20">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Contact & Location"
              title="Come and see us — or just say hello"
              lead="We're on Potiskum Road in Azare. Chat on WhatsApp, call either line, or walk in during business hours."
            />
          </Reveal>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="mx-auto grid max-w-content gap-10 px-4 sm:px-6 lg:grid-cols-2">
          {/* Details column */}
          <Reveal>
            <div className="space-y-6">
              <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-electric-light text-electric-dark">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="font-heading text-lg font-semibold text-navy">Address</h2>
                    <address className="mt-1 text-sm not-italic leading-relaxed text-muted">
                      {BUSINESS.address.full}
                    </address>
                    <a
                      href={MAPS_DIRECTIONS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-sm font-semibold text-electric-dark hover:underline"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-electric-light text-electric-dark">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-heading text-lg font-semibold text-navy">
                      Phone &amp; WhatsApp
                    </h2>
                    <ul className="mt-3 space-y-3">
                      {BUSINESS.phones.map((phone) => (
                        <li
                          key={phone.e164}
                          className="flex flex-wrap items-center gap-2"
                        >
                          <a
                            href={`tel:${phone.e164}`}
                            className="inline-flex items-center gap-2 rounded-full border border-navy/15 px-4 py-2 text-sm font-semibold text-navy hover:border-navy"
                          >
                            <Phone className="h-4 w-4" aria-hidden="true" />
                            {phone.display}
                          </a>
                          <a
                            href={waLink(
                              "Hello Elmusteene Communications! I have an enquiry about your services.",
                              phone.waNumber
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-navy-dark hover:bg-[#1FBF5B]"
                          >
                            <WhatsAppIcon className="h-4 w-4" />
                            WhatsApp
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-electric-light text-electric-dark">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="font-heading text-lg font-semibold text-navy">
                      Business Hours
                    </h2>
                    <dl className="mt-2 space-y-1 text-sm text-muted">
                      <div className="flex gap-3">
                        <dt className="font-medium text-ink">{BUSINESS.hours.days}:</dt>
                        <dd>
                          {BUSINESS.hours.open} – {BUSINESS.hours.close}
                        </dd>
                      </div>
                      <div className="flex gap-3">
                        <dt className="font-medium text-ink">{BUSINESS.hours.closed}:</dt>
                        <dd>Closed</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form column */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="font-heading text-xl font-bold text-navy">Send an enquiry</h2>
              <p className="mt-1 text-sm text-muted">
                Fill this in and it opens WhatsApp with your message ready to send.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section aria-label="Map to Elmusteene Communications" className="bg-canvas py-16 sm:py-20">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-navy/10 shadow-sm">
              {/*
                TODO(owner): once the shop has an exact pin on Google Maps,
                replace MAPS_EMBED_URL in lib/business.ts with the
                "Share > Embed a map" URL for the pinned location.
              */}
              <iframe
                src={MAPS_EMBED_URL}
                title={`Map showing ${BUSINESS.name} on ${BUSINESS.address.full}`}
                width="100%"
                height="420"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="block w-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
