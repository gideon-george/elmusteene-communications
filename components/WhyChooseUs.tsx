import { Layers, ShieldCheck, Tag, Wrench } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/** The real "Why Choose Us?" points from the client brief. */
const POINTS = [
  {
    icon: Layers,
    title: "All-in-One Convenience",
    detail:
      "Save time by handling your internet tasks, banking, and tech repairs in a single visit.",
  },
  {
    icon: Wrench,
    title: "Expert Technicians",
    detail: "Your devices are handled by skilled repair professionals.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Transactions",
    detail: "Safe, fast, and reliable POS cash handling.",
  },
  {
    icon: Tag,
    title: "Affordable Quality",
    detail: "Competitive pricing on all tech accessories and services.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-navy py-16 sm:py-20" aria-labelledby="why-choose-us">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            tone="dark"
            eyebrow="Why Choose Us?"
            title="A local tech hub you can rely on"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map(({ icon: Icon, title, detail }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="h-full rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-electric/20 text-electric">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
