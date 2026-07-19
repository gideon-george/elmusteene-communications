import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactBand from "@/components/ContactBand";
import { WhatsAppButton, CallButton } from "@/components/Buttons";
import { WA_GENERAL } from "@/lib/whatsapp";
import { ABOUT_PORTRAIT, WORKSPACE_PHOTOS } from "@/lib/galleries";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Elmusteene Communications bridges the digital gap in Azare, Bauchi State — one hub for cyber café services, computer repairs, POS banking, accessories and laptops.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-canvas py-16 sm:py-20">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="About Us"
              title="Bridging the digital gap in Azare"
              lead="Elmusteene Communications is a one-stop digital hub on Potiskum Road — cyber café, repair bench, accessories shop and POS desk, all in one place."
            />
          </Reveal>
        </div>
      </section>

      <section className="py-4 sm:py-8" aria-label="Who we are">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="relative aspect-[3/4] max-h-[34rem] overflow-hidden rounded-3xl">
                <Image
                  src={ABOUT_PORTRAIT.src}
                  alt={ABOUT_PORTRAIT.alt}
                  fill
                  sizes="(min-width: 1024px) 34rem, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-navy">
                A real shop, run with personal service
              </h2>
              {/*
                TODO(owner): add the owner's name, background and the year the
                business was founded here — none of these were supplied, so
                the copy below sticks to what the photos visibly show.
              */}
              <div className="mt-4 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
                <p>
                  Walk into our shop on Potiskum Road and you&apos;ll find a working hub, not a
                  kiosk: browsing stations, a repair bench, stocked accessory shelves and a POS
                  desk where transactions are handled carefully and recorded properly.
                </p>
                <p>
                  Whether it&apos;s a JAMB registration, a dead laptop, a new charger or an urgent
                  cash withdrawal, you deal directly with the people who do the work — and we
                  treat every job like it matters, because here it does.
                </p>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <WhatsAppButton href={WA_GENERAL} />
                <CallButton />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="workspace-heading">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Meet us"
              title="Inside our workspace"
              lead="A few honest snapshots from the shop floor."
            />
          </Reveal>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WORKSPACE_PHOTOS.map((photo, i) => (
              <li key={photo.src}>
                <Reveal
                  delay={(i % 3) * 0.07}
                  className="h-full overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm"
                >
                  <figure>
                    <div className="relative aspect-[3/4]">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(min-width: 1024px) 24rem, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="px-5 py-4 text-sm font-medium text-navy">
                      {photo.caption}
                    </figcaption>
                  </figure>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <WhyChooseUs />
      <ContactBand />
    </>
  );
}
