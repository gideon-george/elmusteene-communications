/** Eyebrow + title + optional lead paragraph, used to open every section. */
export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`text-sm font-semibold uppercase tracking-[0.18em] ${
            tone === "light" ? "text-electric-dark" : "text-electric"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-2 font-heading text-3xl font-bold tracking-tight sm:text-4xl ${
          tone === "light" ? "text-navy" : "text-white"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            tone === "light" ? "text-muted" : "text-white/75"
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
