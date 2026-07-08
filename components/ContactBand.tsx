import { Clock, MapPin, Phone } from "lucide-react";
import Reveal from "./Reveal";
import { WhatsAppButton } from "./Buttons";
import { BUSINESS, MAPS_DIRECTIONS_URL, PRIMARY_PHONE, SECONDARY_PHONE } from "@/lib/business";
import { WA_GENERAL } from "@/lib/whatsapp";

/**
 * Address / hours / call block used on the homepage — many customers will
 * simply want to walk in, so this is deliberately prominent.
 */
export default function ContactBand() {
  return (
    <section className="bg-canvas py-16 sm:py-20" aria-labelledby="visit-us">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-sm">
            <div className="grid gap-px bg-navy/10 sm:grid-cols-3">
              <div className="bg-white p-7">
                <MapPin className="h-6 w-6 text-electric-dark" aria-hidden="true" />
                <h3 className="mt-3 font-heading text-lg font-semibold text-navy">Visit Us</h3>
                <address className="mt-2 text-sm not-italic leading-relaxed text-muted">
                  {BUSINESS.address.full}
                </address>
                <a
                  href={MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-semibold text-electric-dark hover:underline"
                >
                  Get directions →
                </a>
              </div>

              <div className="bg-white p-7">
                <Clock className="h-6 w-6 text-electric-dark" aria-hidden="true" />
                <h3 className="mt-3 font-heading text-lg font-semibold text-navy">
                  Business Hours
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {BUSINESS.hours.days}
                  <br />
                  {BUSINESS.hours.open} – {BUSINESS.hours.close}
                  <br />
                  {BUSINESS.hours.closed}: Closed
                </p>
              </div>

              <div className="bg-white p-7">
                <Phone className="h-6 w-6 text-electric-dark" aria-hidden="true" />
                <h3 className="mt-3 font-heading text-lg font-semibold text-navy">Call Now</h3>
                <p className="mt-2 space-y-1 text-sm leading-relaxed">
                  <a
                    href={`tel:${PRIMARY_PHONE.e164}`}
                    className="block font-semibold text-navy hover:text-electric-dark"
                  >
                    {PRIMARY_PHONE.display}
                  </a>
                  <a
                    href={`tel:${SECONDARY_PHONE.e164}`}
                    className="block font-semibold text-navy hover:text-electric-dark"
                  >
                    {SECONDARY_PHONE.display}
                  </a>
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-4 bg-navy px-7 py-6 sm:flex-row">
              <p id="visit-us" className="text-center font-heading text-lg font-semibold text-white sm:text-left">
                Prefer to chat? We reply fast on WhatsApp.
              </p>
              <WhatsAppButton href={WA_GENERAL} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
