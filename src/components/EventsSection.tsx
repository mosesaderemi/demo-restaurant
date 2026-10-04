"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import Reveal from "@/components/Reveal";

type EventForm = {
  name: string;
  email: string;
  type: string;
  date: string;
  guests: string;
  message: string;
};

const initial: EventForm = {
  name: "",
  email: "",
  type: site.events.eventTypes[0],
  date: "",
  guests: "",
  message: "",
};

const inputCls =
  "w-full rounded-lg border border-beige bg-cream px-4 py-3 text-sm text-ink placeholder:text-muted/50 transition-colors focus:border-forest focus:outline-none";

export default function EventsSection() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<EventForm>(initial);
  const [errors, setErrors] = useState<Partial<EventForm>>({});
  const [sent, setSent] = useState(false);

  const close = () => {
    setOpen(false);
    setSent(false);
    setTimeout(() => setForm(initial), 300);
  };

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const setField = (key: keyof EventForm, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Partial<EventForm> = {};
    if (!form.name.trim()) next.name = "Please add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "A valid email helps us reply.";
    if (!form.date) next.date = "Pick a rough date.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  return (
    <section className="relative py-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-t-[6rem] rounded-b-2xl">
            <img
              src={site.events.image}
              alt={site.events.imageAlt}
              loading="lazy"
              className="h-[26rem] w-full object-cover sm:h-[30rem]"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#0e231c] via-[#0f261d]/55 to-[#122a20]/20"
              aria-hidden="true"
            />
            <div className="absolute inset-0 flex flex-col items-start justify-end p-8 sm:p-14">
              <p className="px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-peach-light">
                {site.events.eyebrow}
              </p>
              <h2 className="mt-3 max-w-2xl font-display text-4xl leading-[1.05] font-medium text-cream-soft sm:text-6xl">
                {site.events.title}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-cream-soft/85">
                {site.events.body}
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-cream-soft px-7 py-3.5 text-sm font-semibold text-forest transition-colors hover:bg-beige"
                >
                  Plan an Event
                  <span aria-hidden="true">→</span>
                </button>
                <ul className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-cream-soft/80 sm:text-sm">
                  {site.events.occasions.map((o) => (
                    <li key={o} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-peach/80" aria-hidden="true" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Plan an event"
          className="fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto bg-[#0e231c]/85 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <div
            className="animate-pop-in relative my-8 w-full max-w-xl rounded-3xl border border-beige bg-cream-soft p-6 shadow-2xl sm:p-9"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close event inquiry"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-beige text-xl text-ink transition-colors hover:border-forest hover:text-forest"
            >
              ×
            </button>

            {sent ? (
              <div className="flex flex-col items-center py-14 text-center" role="status">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-forest/40 font-display text-3xl text-forest">
                  ✓
                </span>
                <h3 className="mt-6 font-display text-3xl text-ink">
                  {site.events.success}
                </h3>
                <p className="mt-3 max-w-sm text-muted">{site.events.successSub}</p>
                <button
                  type="button"
                  onClick={close}
                  className="mt-8 text-sm font-semibold text-forest underline-offset-4 hover:underline"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-display text-3xl text-ink">{site.events.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Tell us a little about your event and our team will be in touch.
                </p>

                <form onSubmit={onSubmit} noValidate className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="ev-name"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.18em] text-muted"
                    >
                      Name
                    </label>
                    <input
                      id="ev-name"
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setField("name", e.target.value)}
                      className={`${inputCls} ${errors.name ? "border-peach-dark" : ""}`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs font-medium text-peach-dark" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="ev-email"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.18em] text-muted"
                    >
                      Email
                    </label>
                    <input
                      id="ev-email"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => setField("email", e.target.value)}
                      className={`${inputCls} ${errors.email ? "border-peach-dark" : ""}`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs font-medium text-peach-dark" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="ev-type"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.18em] text-muted"
                    >
                      Event type
                    </label>
                    <select
                      id="ev-type"
                      value={form.type}
                      onChange={(e) => setField("type", e.target.value)}
                      className={inputCls}
                    >
                      {site.events.eventTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="ev-date"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.18em] text-muted"
                    >
                      Rough date
                    </label>
                    <input
                      id="ev-date"
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      value={form.date}
                      onChange={(e) => setField("date", e.target.value)}
                      className={`${inputCls} ${errors.date ? "border-peach-dark" : ""}`}
                    />
                    {errors.date && (
                      <p className="mt-1.5 text-xs font-medium text-peach-dark" role="alert">
                        {errors.date}
                      </p>
                    )}
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="ev-guests"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.18em] text-muted"
                    >
                      Expected guests
                    </label>
                    <input
                      id="ev-guests"
                      type="text"
                      placeholder="e.g. 20"
                      value={form.guests}
                      onChange={(e) => setField("guests", e.target.value)}
                      className={inputCls}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="ev-message"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.18em] text-muted"
                    >
                      Anything else?
                    </label>
                    <textarea
                      id="ev-message"
                      rows={4}
                      placeholder="Cake, music, seating, a surprise..."
                      value={form.message}
                      onChange={(e) => setField("message", e.target.value)}
                      className={`${inputCls} resize-none`}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-8 py-4 text-sm font-semibold text-cream-soft transition-colors hover:bg-forest-dark"
                    >
                      Send Inquiry
                      <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}