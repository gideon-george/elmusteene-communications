import Link from "next/link";
import { Clock, MapPin, Phone } from "lucide-react";
import Wordmark from "./Wordmark";
import WhatsAppIcon from "./WhatsAppIcon";
import { BUSINESS, MAPS_DIRECTIONS_URL } from "@/lib/business";
import { waLink } from "@/lib/whatsapp";

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/laptops", label: "Laptops & Computers" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact & Location" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto grid max-w-content gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Wordmark tone="dark" linked={false} />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            {BUSINESS.tagline}
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/60">
            Quick Links
          </h2>
          <ul className="mt-4 space-y-2">
            {QUICK_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-white/85 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/60">
            Visit Us
          </h2>
          <address className="mt-4 space-y-3 text-sm not-italic text-white/85">
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-electric" aria-hidden="true" />
              <a
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                {BUSINESS.address.full}
              </a>
            </p>
            <p className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-electric" aria-hidden="true" />
              <span>
                {BUSINESS.hours.days}: {BUSINESS.hours.open} – {BUSINESS.hours.close}
                <br />
                {BUSINESS.hours.closed}: Closed
              </span>
            </p>
          </address>
        </div>

        <div>
          <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/60">
            Talk to Us
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            {BUSINESS.phones.map((phone) => (
              <li key={phone.e164} className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <a
                  href={`tel:${phone.e164}`}
                  className="inline-flex items-center gap-2 text-white/85 hover:text-white"
                >
                  <Phone className="h-4 w-4 text-electric" aria-hidden="true" />
                  {phone.display}
                </a>
                <a
                  href={waLink(
                    "Hello Elmusteene Communications! I have an enquiry about your services.",
                    phone.waNumber
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-whatsapp hover:text-white"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp
                </a>
              </li>
            ))}
          </ul>
          {/* TODO(owner): social media links go here once handles are confirmed. */}
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-content px-4 py-5 text-xs text-white/60 sm:px-6">
          © {new Date().getFullYear()} {BUSINESS.name}, {BUSINESS.address.full}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
