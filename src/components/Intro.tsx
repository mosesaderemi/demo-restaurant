import { site } from "@/lib/site";
import Reveal from "@/components/Reveal";

export default function Intro() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative order-2 lg:order-1">
          <div
            className="absolute -left-4 -top-4 h-28 w-28 rounded-tl-[3rem] border-t border-l border-forest/40"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-t-[9rem] rounded-b-2xl">
            <img
              src={site.intro.image}
              alt={site.intro.imageAlt}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div
            className="absolute -bottom-4 -right-4 h-28 w-28 rounded-br-[3rem] border-b border-r border-forest/40"
            aria-hidden="true"
          />
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-[0.3em] text-forest">
              <span className="h-px w-8 bg-forest/60" aria-hidden="true" />
              {site.intro.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] font-medium tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
              {site.intro.title}
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-6 space-y-5">
              {site.intro.body.map((p) => (
                <p key={p} className="text-base leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-9 font-display text-2xl italic text-forest">
              &ldquo;{site.intro.signature}&rdquo;
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 rounded-full border border-forest/50 px-6 py-3 text-sm font-semibold text-forest transition-colors hover:bg-forest hover:text-cream-soft"
              >
                See the menu
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="#reservation"
                className="inline-flex items-center gap-2 px-2 text-sm font-semibold text-forest transition-colors hover:text-forest-dark"
              >
                Reserve a table
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}