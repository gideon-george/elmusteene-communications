import Image from "next/image";
import { WhatsAppButton, CallButton } from "./Buttons";
import Reveal from "./Reveal";
import { waLink } from "@/lib/whatsapp";
import type { Service } from "@/lib/services";

/**
 * Full service pillar section for the /services page: photo on one side,
 * icon + real bullet copy + CTAs on the other. `flip` alternates the layout.
 */
export default function ServiceCard({
  service,
  flip = false,
}: {
  service: Service;
  flip?: boolean;
}) {
  const Icon = service.icon;

  return (
    <Reveal>
      <article
        id={service.slug}
        className="grid items-center gap-8 rounded-3xl border border-navy/10 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-2 lg:gap-12"
      >
        <div className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${flip ? "lg:order-2" : ""}`}>
          <Image
            src={service.image.src}
            alt={service.image.alt}
            fill
            sizes="(min-width: 1024px) 34rem, 100vw"
            className="object-cover"
          />
        </div>

        <div className={flip ? "lg:order-1" : ""}>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-light text-electric-dark">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </div>
          <h2 className="mt-4 font-heading text-2xl font-bold text-navy sm:text-3xl">
            {service.title}
          </h2>
          <p className="mt-2 text-muted">{service.intro}</p>

          <ul className="mt-5 space-y-3">
            {service.bullets.map((b) => (
              <li key={b.heading} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-electric"
                />
                <p className="text-sm leading-relaxed text-ink sm:text-base">
                  <strong className="font-semibold text-navy">{b.heading}:</strong>{" "}
                  {b.detail}
                </p>
              </li>
            ))}
          </ul>

          {service.note && <p className="mt-4 text-sm italic text-muted">{service.note}</p>}

          <div className="mt-6 flex flex-wrap gap-3">
            <WhatsAppButton href={waLink(service.waMessage)} />
            <CallButton />
          </div>
        </div>
      </article>
    </Reveal>
  );
}
