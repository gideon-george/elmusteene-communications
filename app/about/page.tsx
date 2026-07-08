import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactBand from "@/components/ContactBand";
import { WhatsAppButton, CallButton } from "@/components/Buttons";
import { WA_GENERAL } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Elmusteene Communications bridges the digital gap in Azare, Bauchi State — one hub for cyber café services, computer repairs, POS banking, accessories and laptops.",
};

/**
 * Real workspace photos with honest captions — these show what is visibly
 * true: a hands-on operation, careful record-keeping, real stock on shelves.
 */
const WORKSPACE_PHOTOS = [
  {
    src: "/images/about/proprietor-working-calculator.jpg",
    alt: "Team member working at the service desk with a laptop and desk calculator",
    caption: "Hands-on at the service desk",
  },
  {
    src: "/images/about/proprietor-cash-records.jpg",
    alt: "Team member carefully recording a cash transaction in the ledger beside a laptop",
    caption: "Every transaction carefully recorded",
  },
  {
    src: "/images/about/proprietor-accessories-shelf.jpg",
    alt: "Team member at the desk with the shop's stocked accessories shelf behind",
    caption: "Real stock, on real shelves",
  },
  {
    src: "/images/about/proprietor-processing-documents.jpg",
    alt: "Team member processing customer documents at a laptop",
    caption: "Document processing, done properly",
  },
  {
    src: "/images/about/proprietor-blue-at-laptop.jpg",
    alt: "Team member concentrating on work at a laptop in the shop",
    caption: "Personal attention on every job",
  },
  {
    src: "/images/about/proprietor-smiling-phone.jpg",
    alt: "Team member smiling while replying to a customer message on the phone",
    caption: "Quick to reply — try us on WhatsApp",
  },
];

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
                  src="/images/about/proprietor-at-desk.jpg"
                  alt="The proprietor seated at the service desk inside the shop"
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
