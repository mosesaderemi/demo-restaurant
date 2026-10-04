import { site } from "@/lib/site";
import Reveal from "@/components/Reveal";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={site.finalCta.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e231c] via-[#0f261d]/70 to-[#122a20]/40" />
      </div>

      <Reveal className="relative mx-auto flex min-h-[30rem] max-w-4xl flex-col items-center justify-center px-5 py-28 text-center sm:px-8">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-peach-light">
          {site.finalCta.kicker}
        </p>
        <h2 className="mt-5 font-display text-5xl font-medium leading-[1.02] tracking-tight text-cream text-shadow-soft sm:text-7xl lg:text-8xl">
          {site.finalCta.headlinePrimary}
          <span className="block text-peach-light italic">
            {site.finalCta.headlineAccent}
          </span>
        </h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#reservation"
            className="inline-flex items-center gap-2 rounded-full bg-cream-soft px-8 py-4 text-sm font-semibold text-forest transition-colors hover:bg-beige"
          >
            Reserve a Table
            <span aria-hidden="true">→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-cream-soft/40 px-8 py-4 text-sm font-semibold text-cream-soft transition-colors hover:border-peach hover:text-peach-light"
          >
            Get in touch
          </a>
        </div>
      </Reveal>
    </section>
  );
}