"use client";

import { useState } from "react";
import { site, formatNaira } from "@/lib/site";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function MenuSection() {
  const [active, setActive] = useState(0);
  const category = site.menu.categories[active];

  return (
    <section id="menu" className="relative overflow-hidden bg-beige py-24 sm:py-32">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={site.menu.eyebrow}
          title={site.menu.title}
          intro={site.menu.intro}
          align="center"
        />

        <Reveal delay={100}>
          <div
            role="tablist"
            aria-label="Menu categories"
            className="mt-12 flex flex-wrap justify-center gap-2 sm:gap-3"
          >
            {site.menu.categories.map((cat, i) => (
              <button
                key={cat.label}
                role="tab"
                id={`tab-${i}`}
                aria-selected={active === i}
                aria-controls={`panel-${i}`}
                onClick={() => setActive(i)}
                className={`rounded-full px-4 py-2.5 text-sm font-medium transition-all sm:px-5 ${
                  active === i
                    ? "bg-forest text-cream-soft"
                    : "border border-forest/15 bg-cream-soft text-muted hover:border-forest/50 hover:text-forest"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p className="mt-4 text-center font-sans text-xs font-semibold uppercase tracking-[0.25em] text-peach-dark">
            {category.note}
          </p>
        </Reveal>

        <div
          key={category.label}
          role="tabpanel"
          id={`panel-${active}`}
          aria-labelledby={`tab-${active}`}
          className="animate-menu-in mt-10 grid gap-x-14 gap-y-3 md:grid-cols-2"
        >
          {category.items.map((item) => (
            <div
              key={item.name}
              className="group border-b border-forest/10 py-4 transition-colors hover:border-forest/40"
            >
              <div className="flex items-baseline gap-3">
                <h3 className="font-display text-lg font-medium text-ink transition-colors group-hover:text-forest">
                  {item.name}
                </h3>
                {item.tag && (
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                      item.tag === "Chef's"
                        ? "bg-forest/10 text-forest"
                        : item.tag === "Spicy"
                          ? "bg-peach/15 text-peach-dark"
                          : "bg-beige/70 text-muted"
                    }`}
                  >
                    {item.tag}
                  </span>
                )}
                <span
                  className="mx-1 flex-1 border-b border-dotted border-forest/15"
                  aria-hidden="true"
                />
                <p className="font-display text-lg text-forest">
                  {formatNaira(item.price)}
                </p>
              </div>
              <p className="mt-1 text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center font-display text-lg italic text-forest">
          {site.menu.closing}
        </p>
      </div>
    </section>
  );
}