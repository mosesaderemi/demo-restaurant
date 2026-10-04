import { site, formatNaira } from "@/lib/site";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function SignatureDishes() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={site.favourites.eyebrow}
            title={site.favourites.title}
            intro={site.favourites.note}
          />
          <Reveal delay={150} className="shrink-0">
            <a
              href="#menu"
              className="inline-flex items-center gap-2 rounded-full border border-forest/50 px-6 py-3 text-sm font-semibold text-forest transition-colors hover:bg-forest hover:text-cream-soft"
            >
              Full menu
              <span aria-hidden="true">→</span>
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {site.favourites.dishes.map((dish, i) => (
            <Reveal key={dish.name} delay={(i % 3) * 100}>
              <article
                className={`group ${i % 3 === 1 ? "lg:translate-y-10" : ""}`}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={dish.image}
                    alt={dish.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#0e231c]/55 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  <span className="absolute left-4 top-4 font-display text-sm text-cream-soft/90">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="absolute right-4 top-4 rounded-full bg-forest/85 px-3 py-1 font-sans text-xs font-semibold text-cream-soft backdrop-blur-sm">
                    {formatNaira(dish.price)}
                  </p>
                </div>

                <h3 className="mt-5 font-display text-2xl font-medium tracking-tight text-ink transition-colors group-hover:text-forest">
                  {dish.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {dish.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}