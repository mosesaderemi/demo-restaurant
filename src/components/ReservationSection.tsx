"use client";

import { useMemo, useState } from "react";
import { site } from "@/lib/site";
import Reveal from "@/components/Reveal";

type FormState = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  occasion: string;
  request: string;
};

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "19:00",
  guests: "2",
  occasion: site.reservation.occasions[0],
  request: "",
};

const timeSlots = [
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
];

const guests = ["1", "2", "3", "4", "5", "6", "7", "8+"];

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.18em] text-muted"
      >
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs font-medium text-peach-dark" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

const inputCls =
  "w-full rounded-lg border border-beige bg-cream px-4 py-3 text-sm text-ink placeholder:text-muted/50 transition-colors focus:border-forest focus:outline-none";

export default function ReservationSection() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const minDate = useMemo(() => new Date().toISOString().split("T")[0], []);

  const setField = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = "Please add your name.";
    if (!form.email.trim()) next.email = "An email is needed for confirmation.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "That email does not look right.";
    if (form.phone && !/^[+\d][\d\s().-]{6,}$/.test(form.phone.trim()))
      next.phone = "Enter a valid phone number.";
    if (!form.date) next.date = "Pick a date for your visit.";
    else if (form.date < minDate) next.date = "That date has already passed.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const onReset = () => {
    setForm(initial);
    setSubmitted(false);
    setErrors({});
  };

  return (
    <section
      id="reservation"
      className="relative bg-forest py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-stretch gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.15fr]">
        <Reveal className="relative hidden overflow-hidden rounded-t-[9rem] rounded-b-3xl lg:block">
          <img
            src="https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1200&auto=format&fit=crop"
            alt="An elegantly set table awaiting guests"
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/40 to-transparent"
            aria-hidden="true"
          />
          <div className="absolute bottom-0 left-0 right-0 p-10">
            <p className="font-display text-3xl leading-snug text-cream-soft">
              The best tables go fast.
              <span className="block text-peach-light">Yours is still waiting.</span>
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-[0.3em] text-peach-light">
              <span className="h-px w-8 bg-peach/70" aria-hidden="true" />
              {site.reservation.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] font-medium tracking-tight text-cream-soft sm:text-5xl">
              {site.reservation.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-cream-soft/85">
              {site.reservation.body}
            </p>
          </Reveal>

          <div className="mt-9 rounded-3xl border border-cream-soft/15 bg-cream-soft p-6 sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center py-10 text-center" role="status">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-forest/40 font-display text-3xl text-forest">
                  ✓
                </span>
                <h3 className="mt-6 font-display text-3xl text-ink">
                  {site.reservation.success}
                </h3>
                <p className="mt-3 max-w-sm text-muted">
                  {site.reservation.successSub}
                </p>
                <p className="mt-6 rounded-full bg-beige/70 px-5 py-2 text-sm text-ink">
                  {form.name} · {form.guests}{" "}
                  {form.guests === "1" ? "guest" : "guests"} · {form.date} ·{" "}
                  {form.time}
                </p>
                <button
                  type="button"
                  onClick={onReset}
                  className="mt-8 text-sm font-semibold text-forest underline-offset-4 hover:underline"
                >
                  Make another reservation
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" htmlFor="res-name" error={errors.name}>
                  <input
                    id="res-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setField("name", e.target.value)}
                    className={`${inputCls} ${errors.name ? "border-peach-dark" : ""}`}
                  />
                </Field>
                <Field label="Email" htmlFor="res-email" error={errors.email}>
                  <input
                    id="res-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setField("email", e.target.value)}
                    className={`${inputCls} ${errors.email ? "border-peach-dark" : ""}`}
                  />
                </Field>
                <Field label="Phone (optional)" htmlFor="res-phone" error={errors.phone}>
                  <input
                    id="res-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+234 ..."
                    value={form.phone}
                    onChange={(e) => setField("phone", e.target.value)}
                    className={`${inputCls} ${errors.phone ? "border-peach-dark" : ""}`}
                  />
                </Field>
                <Field label="Guests" htmlFor="res-guests">
                  <select
                    id="res-guests"
                    name="guests"
                    value={form.guests}
                    onChange={(e) => setField("guests", e.target.value)}
                    className={inputCls}
                  >
                    {guests.map((g) => (
                      <option key={g} value={g}>
                        {g} {g === "1" ? "guest" : "guests"}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Date" htmlFor="res-date" error={errors.date}>
                  <input
                    id="res-date"
                    name="date"
                    type="date"
                    min={minDate}
                    value={form.date}
                    onChange={(e) => setField("date", e.target.value)}
                    className={`${inputCls} ${errors.date ? "border-peach-dark" : ""}`}
                  />
                </Field>
                <Field label="Time" htmlFor="res-time">
                  <select
                    id="res-time"
                    name="time"
                    value={form.time}
                    onChange={(e) => setField("time", e.target.value)}
                    className={inputCls}
                  >
                    {timeSlots.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Occasion" htmlFor="res-occasion">
                  <select
                    id="res-occasion"
                    name="occasion"
                    value={form.occasion}
                    onChange={(e) => setField("occasion", e.target.value)}
                    className={inputCls}
                  >
                    {site.reservation.occasions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Special requests" htmlFor="res-request">
                  <input
                    id="res-request"
                    name="request"
                    type="text"
                    placeholder="Anything we should know?"
                    value={form.request}
                    onChange={(e) => setField("request", e.target.value)}
                    className={inputCls}
                  />
                </Field>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-8 py-4 text-sm font-semibold text-cream-soft transition-colors hover:bg-forest-dark"
                  >
                    Request Reservation
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}