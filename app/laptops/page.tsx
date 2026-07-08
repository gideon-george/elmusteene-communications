import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import LaptopGallery from "@/components/LaptopGallery";
import VideoPlayer from "@/components/VideoPlayer";
import ContactBand from "@/components/ContactBand";
import { WhatsAppButton, CallButton } from "@/components/Buttons";
import { waLink, WA_MESSAGES } from "@/lib/whatsapp";
import { STOCK_PHOTOS } from "@/lib/laptops";

export const metadata: Metadata = {
  title: "Laptops & Computers for Sale",
  description:
    "Browse laptops in stock at Elmusteene Communications, Azare — Dell, Lenovo, HP and more, available as singles or in bulk. Enquire on WhatsApp for current options, specs and prices.",
};

export default function LaptopsPage() {
  return (
    <>
      <section className="bg-canvas py-16 sm:py-20">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Laptops & Computers"
              title="In stock and ready to go"
              lead="A selection of what's currently on our shelves. Message us on WhatsApp for available options, specs and prices — photos show real units in the shop."
            />
          </Reveal>
        </div>
      </section>

      <section className="pb-16 sm:pb-20" aria-label="Laptop gallery">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <Reveal>
            <LaptopGallery />
          </Reveal>
        </div>
      </section>

      {/* Up-close videos from the shop */}
      <section className="bg-canvas py-16 sm:py-20" aria-labelledby="video-heading">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Up close"
              title="See the machines for yourself"
              lead="Short clips from the shop floor — real units being checked and demonstrated."
            />
          </Reveal>
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:gap-6">
            <Reveal>
              <div className="aspect-[9/16] overflow-hidden rounded-2xl border border-navy/10 bg-navy-dark shadow-sm">
                <VideoPlayer
                  src="/videos/workspace-clip-1.mp4"
                  poster="/videos/workspace-clip-1-poster.jpg"
                  label="Short clip of a Dell laptop being demonstrated on the shop desk"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="aspect-[9/16] overflow-hidden rounded-2xl border border-navy/10 bg-navy-dark shadow-sm">
                <VideoPlayer
                  src="/videos/workspace-clip-2.mp4"
                  poster="/videos/workspace-clip-2-poster.jpg"
                  label="Short clip of a laptop being turned and inspected on the shop desk"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Bulk stock band */}
      <section className="py-16 sm:py-20" aria-labelledby="bulk-heading">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="grid grid-cols-2 gap-4">
                {STOCK_PHOTOS.map((photo) => (
                  <div
                    key={photo.image}
                    className="relative aspect-[3/4] overflow-hidden rounded-2xl"
                  >
                    <Image
                      src={photo.image}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 1024px) 17rem, 50vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                id="bulk-heading"
                className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl"
              >
                Need more than one?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                Bulk and wholesale stock is available for schools, offices, NGOs and resellers.
                Tell us what you need and we&apos;ll let you know what&apos;s currently in stock.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <WhatsAppButton href={waLink(WA_MESSAGES.laptopBulk)}>
                  Ask about bulk stock
                </WhatsAppButton>
                <CallButton />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
