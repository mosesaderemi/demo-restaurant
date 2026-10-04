import { site } from "@/lib/site";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Experience() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={site.experience.eyebrow}
          title={site.experience.title}
          intro={site.experience.intro}
          align="center"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {site.experience.points.map((point, i) => (
            <Reveal key={point.title} delay={(i % 3) * 100}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-beige bg-cream-soft p-7 transition-colors duration-500 hover:border-forest/40">
                <span
                  className="pointer-events-none absolute -right-3 -top-4 font-display text-7xl font-medium text-beige transition-colors duration-500 group-hover:text-forest/10"
                  aria-hidden="true"
                >
                  {String(point.n).padStart(2, "0")}
                </span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-forest/40 font-display text-sm text-forest">
                  {String(point.n).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-xl font-medium text-ink">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {point.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}