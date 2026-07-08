import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ContactBand from "@/components/ContactBand";
import { SERVICES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services — Cyber Café, Repairs, Accessories, POS & BVN",
  description:
    "Cyber café & digital portals, computer repairs & maintenance, computer accessories, POS & financial services, and BVN registration support — all under one roof in Azare, Bauchi State.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-canvas py-16 sm:py-20">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Our Services"
              title="Four pillars, one trusted hub"
              lead="From browsing and exam registrations to repairs, accessories, POS banking and BVN support — handle it all in a single visit."
            />
          </Reveal>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-content space-y-8 px-4 sm:px-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.slug} service={service} flip={i % 2 === 1} />
          ))}
        </div>
      </section>

      <ContactBand />
    </>
  );
}
