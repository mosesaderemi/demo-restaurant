import { site } from "@/lib/site";
import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <p className="flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-[0.3em] text-forest">
              <span className="h-px w-8 bg-forest/60" aria-hidden="true" />
              {site.contact.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] font-medium tracking-tight text-ink sm:text-5xl">
              {site.contact.title}
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              {site.contact.body}
            </p>
          </Reveal>

          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            <Reveal delay={80}>
              <div className="rounded-2xl border border-beige bg-cream-soft p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-muted">
                  Call us
                </p>
                <a
                  href={site.contact.phoneHref}
                  className="mt-2 block font-display text-xl text-forest transition-colors hover:text-forest-dark"
                >
                  {site.contact.phoneDisplay}
                </a>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="rounded-2xl border border-beige bg-cream-soft p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-muted">
                  Write to us
                </p>
                <a
                  href={site.contact.emailHref}
                  className="mt-2 block break-all font-display text-xl text-forest transition-colors hover:text-forest-dark"
                >
                  {site.contact.email}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="mt-5 rounded-2xl border border-beige bg-cream-soft p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-muted">
                Opening hours
              </p>
              <dl className="mt-3 space-y-1.5">
                {site.contact.hours.map((h) => (
                  <div key={h.label} className="flex items-baseline justify-between gap-4">
                    <dt className="text-sm text-muted">{h.label}</dt>
                    <dd className="text-sm font-medium text-ink">{h.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="relative">
          <div className="relative h-full min-h-[26rem] overflow-hidden rounded-t-[6rem] rounded-b-2xl border border-beige bg-beige">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle at center, rgba(23,63,53,0.18) 1px, transparent 1px)",
                backgroundSize: "26px 26px",
              }}
              aria-hidden="true"
            />
            <svg
              className="absolute inset-0 h-full w-full text-forest/10"
              viewBox="0 0 600 600"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M-20 180 C 140 120, 240 320, 620 200" fill="none" stroke="currentColor" strokeWidth="10" />
              <path d="M180 -20 C 220 160, 80 260, 200 620" fill="none" stroke="currentColor" strokeWidth="7" />
              <path d="M420 -20 C 380 200, 520 320, 460 620" fill="none" stroke="currentColor" strokeWidth="7" />
            </svg>
            <div className="relative z-10 flex h-full flex-col items-center justify-center p-8 text-center">
              <span className="relative flex h-16 w-16 items-center justify-center">
                <span
                  className="absolute h-full w-full animate-ping rounded-full bg-forest/25"
                  aria-hidden="true"
                />
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest font-display text-xl text-cream-soft">
                  ✦
                </span>
              </span>
              <p className="mt-6 font-display text-3xl text-ink">Find your way to us</p>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
                Follow the light and the smell of something wonderful. We will be
                easy to find, and exact directions come with your reservation confirmation.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}