import Link from "next/link";

/**
 * Text wordmark: "Elmusteene" as the primary word with "COMMUNICATIONS"
 * letter-spaced beneath. `tone` flips colours for use on dark surfaces.
 */
export default function Wordmark({
  tone = "light",
  linked = true,
}: {
  /** "light" = on light background (navy text); "dark" = on navy background */
  tone?: "light" | "dark";
  linked?: boolean;
}) {
  const mark = (
    <span className="inline-flex flex-col leading-none">
      <span
        className={`font-heading text-xl font-bold tracking-tight ${
          tone === "light" ? "text-navy" : "text-white"
        }`}
      >
        Elmusteene
        <span className="text-electric">.</span>
      </span>
      <span
        className={`mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.28em] ${
          tone === "light" ? "text-muted" : "text-white/70"
        }`}
      >
        Communications
      </span>
    </span>
  );

  if (!linked) return mark;

  return (
    <Link
      href="/"
      aria-label="Elmusteene Communications — home"
      className="rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric"
    >
      {mark}
    </Link>
  );
}
