import Reveal from "@/components/Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p className="flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-[0.3em] text-forest">
          {align === "center" && (
            <span className="hidden h-px w-8 bg-forest/60 sm:block" aria-hidden="true" />
          )}
          <span>{eyebrow}</span>
          <span className="h-px w-8 bg-forest/60" aria-hidden="true" />
        </p>
      )}
      <h2
        className={`mt-4 font-display text-4xl leading-[1.05] font-medium tracking-tight sm:text-5xl ${
          light ? "text-cream-soft" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-base leading-relaxed ${
            light ? "text-cream-soft/80" : "text-muted"
          }`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}