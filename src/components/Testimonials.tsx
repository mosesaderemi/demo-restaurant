"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";
import SectionHeading from "@/components/SectionHeading";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = site.testimonials.items.length;
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback(
    (i: number) => setIndex((i + total) % total),
    [total]
  );

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 7000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, total]);

  const current = site.testimonials.items[index];

  return (
    <section className="relative overflow-hidden bg-beige py-24 sm:py-32">
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <SectionHeading
          eyebrow={site.testimonials.eyebrow}
          title={site.testimonials.title}
          intro={site.testimonials.intro}
          align="center"
        />

        <div
          className="mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div
            key={index}
            className="animate-fade-slide rounded-3xl border border-forest/10 bg-cream-soft px-6 py-10 sm:px-12"
            role="group"
            aria-roledescription="testimonial"
            aria-label={`Testimonial ${index + 1} of ${total}`}
          >
            <div
              className="flex justify-center gap-1 text-forest"
              aria-label={`Rated ${current.rating} out of 5`}
            >
              {Array.from({ length: 5 }).map((_, s) => (
                <svg
                  key={s}
                  viewBox="0 0 20 20"
                  className={`h-5 w-5 ${
                    s < current.rating ? "fill-forest" : "fill-beige"
                  }`}
                  aria-hidden="true"
                >
                  <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                </svg>
              ))}
            </div>

            <blockquote className="mt-6">
              <p className="font-display text-2xl leading-snug text-ink sm:text-3xl">
                &ldquo;{current.quote}&rdquo;
              </p>
            </blockquote>

            <p className="mt-7 font-display text-xl text-forest">
              {current.name}
            </p>
            <p className="mt-1 text-sm text-muted">{current.role}</p>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-forest/25 text-ink transition-colors hover:border-forest hover:text-forest"
            >
              ‹
            </button>
            <div className="flex gap-2.5" role="tablist" aria-label="Choose testimonial">
              {site.testimonials.items.map((t, i) => (
                <button
                  key={t.name}
                  role="tab"
                  type="button"
                  aria-selected={i === index}
                  aria-label={`Testimonial ${i + 1}`}
                  onClick={() => go(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-7 bg-forest" : "w-2 bg-forest/25 hover:bg-forest/50"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-forest/25 text-ink transition-colors hover:border-forest hover:text-forest"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}