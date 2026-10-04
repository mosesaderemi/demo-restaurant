import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-svh items-center overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={site.hero.image}
          alt=""
          fetchPriority="high"
          className="animate-kenburns h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e231c] via-[#0f261d]/55 to-[#10271e]/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e231c]/70 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-32 sm:px-8">
        <h1 className="max-w-4xl font-display text-5xl font-medium leading-[1.02] tracking-tight text-cream text-shadow-soft sm:text-7xl lg:text-8xl">
          {site.hero.headline.map((line, i) => (
            <span key={line} className="block">
              {i === 2 ? <em className="text-peach-light">{line}</em> : line}
            </span>
          ))}
        </h1>

        <p className="mt-7 max-w-xl text-lg leading-relaxed text-cream-soft/85 text-shadow-soft">
          {site.hero.sub}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#reservation"
            className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-sm font-semibold text-cream-soft transition-colors hover:bg-forest-dark"
          >
            Reserve a Table
            <span aria-hidden="true">→</span>
          </a>
          <a
            href="#menu"
            className="inline-flex items-center gap-2 rounded-full border border-cream-soft/40 bg-[#0f261d]/30 px-7 py-3.5 text-sm font-semibold text-cream-soft backdrop-blur-sm transition-colors hover:border-peach hover:text-peach-light"
          >
            Explore Menu
          </a>
        </div>

        <p className="mt-12 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-cream-soft/70">
          <span className="h-px w-10 bg-peach/70" aria-hidden="true" />
          {site.hero.meta}
        </p>
      </div>
    </section>
  );
}