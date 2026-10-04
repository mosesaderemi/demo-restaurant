"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Lightbox from "@/components/Lightbox";

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={site.gallery.eyebrow}
          title={site.gallery.title}
          intro={site.gallery.intro}
          align="center"
        />

        <div className="mt-14 columns-2 gap-4 [column-fill:_balance] sm:columns-3 lg:columns-4 lg:gap-5">
          {site.gallery.items.map((item, i) => (
            <Reveal key={item.src} delay={(i % 4) * 80} className="mb-4 break-inside-avoid lg:mb-5">
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Open image: ${item.caption}`}
                className="group relative block w-full overflow-hidden rounded-xl"
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  loading="lazy"
                  className={`${item.aspect} w-full object-cover transition-transform duration-700 group-hover:scale-105`}
                />
                <div
                  className="absolute inset-0 flex items-end bg-gradient-to-t from-[#0e231c]/85 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <p className="text-sm font-medium text-cream-soft">{item.caption}</p>
                </div>
                <span
                  className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-forest/90 text-cream-soft opacity-0 backdrop-blur-sm transition-opacity duration-400 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active !== null && (
        <Lightbox
          images={site.gallery.items.map(({ src, caption }) => ({ src, caption }))}
          index={active}
          onClose={() => setActive(null)}
          onNavigate={setActive}
        />
      )}
    </section>
  );
}