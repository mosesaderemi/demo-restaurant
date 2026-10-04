import { site } from "@/lib/site";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <p className="flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-[0.3em] text-forest">
              <span className="h-px w-8 bg-forest/60" aria-hidden="true" />
              {site.about.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] font-medium tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
              {site.about.title}
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-6 space-y-5">
              {site.about.body.map((p) => (
                <p key={p} className="text-base leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <ul className="mt-9 flex flex-wrap gap-3">
              {site.about.badges.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-2 rounded-full border border-forest/30 bg-forest/5 px-4 py-2 text-sm font-medium text-forest"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-peach" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={120} className="relative">
          <div className="overflow-hidden rounded-t-[3rem] rounded-b-[9rem]">
            <img
              src={site.about.image}
              alt={site.about.imageAlt}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>

          <div
            className="absolute -right-6 -top-6 hidden h-32 w-32 items-center justify-center sm:flex"
            aria-hidden="true"
          >
            <svg viewBox="0 0 100 100" className="animate-spin-slow h-full w-full">
              <defs>
                <path
                  id="badge-circle"
                  d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                />
              </defs>
              <circle cx="50" cy="50" r="48" className="fill-cream-soft stroke-forest/30" />
              <text className="fill-forest text-[8.5px] font-semibold uppercase tracking-[0.22em]">
                <textPath href="#badge-circle">
                  Fresh ingredients · Made to order · Warm hospitality ·
                </textPath>
              </text>
            </svg>
            <span className="absolute font-display text-2xl text-peach">✦</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}