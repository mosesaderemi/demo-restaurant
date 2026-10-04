import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-cream-soft/10 bg-forest">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-soft/40 font-display text-xl text-cream-soft"
                aria-hidden="true"
              >
                {site.monogram}
              </span>
              <span className="font-display text-2xl font-medium tracking-tight text-cream-soft">
                {site.name}
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream-soft/80">
              {site.footer.description}
            </p>
            <ul className="mt-7 flex flex-wrap gap-3">
              {site.footer.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={`${site.name} on ${s.label}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-soft/20 font-sans text-xs font-semibold text-cream-soft/85 transition-colors hover:border-peach hover:text-peach-light"
                  >
                    {s.label === "X" ? "X" : s.label.slice(0, 1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cream-soft/50">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-cream-soft/80 transition-colors hover:text-peach-light"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cream-soft/50">
              Contact
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-cream-soft/80">
              <li>
                <a
                  href={site.contact.phoneHref}
                  className="transition-colors hover:text-peach-light"
                >
                  {site.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={site.contact.emailHref}
                  className="transition-colors hover:text-peach-light"
                >
                  {site.contact.email}
                </a>
              </li>
              {site.contact.hours.map((h) => (
                <li key={h.label} className="text-xs text-cream-soft/60">
                  {h.label}: {h.value}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream-soft/15 pt-8 sm:flex-row">
          <p className="text-xs text-cream-soft/60">
            © 2026 {site.name}. All rights reserved.
          </p>
          <a
            href={site.footer.creditHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group text-xs text-cream-soft/60 transition-colors hover:text-peach-light"
          >
            {site.footer.credit.replace("neche_codes", "")}
            <span className="font-semibold text-peach-light group-hover:underline">
              neche_codes
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}