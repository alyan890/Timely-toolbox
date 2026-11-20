"use client";

import { useEffect, useState, type FormEvent } from "react";
import { InfoIcon } from "@/components/ui/Icons";
import { serviceOptions } from "@/data/services";

type Status = "idle" | "sending" | "success" | "error";

function todayIso() {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  return now.toISOString().slice(0, 10);
}

export function AppointmentForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [startedAt, setStartedAt] = useState(0);
  const [minDate, setMinDate] = useState<string | undefined>(undefined);

  useEffect(() => {
    setStartedAt(Date.now());
    setMinDate(todayIso());
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, startedAt })
      });
      const result = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error ?? "Something went wrong. Please try again.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  const labelClass = "mb-1.5 block font-body text-[13px] font-semibold text-foreground";

  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-white p-6 shadow-subtle sm:p-7">
      <span
        className="absolute inset-x-0 top-0 h-[5px] bg-[linear-gradient(90deg,var(--color-primary)_70%,var(--color-secondary)_70%)]"
        aria-hidden="true"
      />
      <h3 className="heading-display text-[2rem]">Appointment Request</h3>
      <div className="mt-3 flex gap-2.5 rounded-lg border border-secondary/45 bg-secondary/15 px-3.5 py-3 font-body text-[13px] leading-5 text-graphite">
        <InfoIcon size={18} className="mt-px shrink-0" />
        <p>
          <strong>This is a request, not a confirmed booking.</strong> We&apos;ll check
          availability and contact you to confirm.
        </p>
      </div>

      {status === "success" ? (
        <div className="mt-6 rounded-lg border border-border bg-background p-5" role="status">
          <p className="font-heading text-2xl font-extrabold uppercase italic text-foreground">
            Request received
          </p>
          <p className="mt-2 font-body text-sm leading-6 text-muted-foreground">
            Thanks! We&apos;ll review your request, check availability and get back to you to
            confirm a time.
          </p>
          <button
            type="button"
            className="button-secondary mt-4"
            onClick={() => setStatus("idle")}
          >
            Send another request
          </button>
        </div>
      ) : (
        <form className="mt-6 grid gap-3.5 sm:grid-cols-2" onSubmit={handleSubmit} noValidate={false}>
          {/* Honeypot: hidden from people, often filled in by spam bots. */}
          <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
            <label htmlFor="company">Company</label>
            <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <div>
            <label htmlFor="name" className={labelClass}>Name *</label>
            <input id="name" name="name" className="field" autoComplete="name" required maxLength={100} />
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>Phone *</label>
            <input id="phone" name="phone" type="tel" className="field" autoComplete="tel" required maxLength={40} />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className={labelClass}>Email</label>
            <input id="email" name="email" type="email" className="field" autoComplete="email" maxLength={200} />
          </div>
          <div>
            <label htmlFor="vehicle" className={labelClass}>Vehicle (year, make, model) *</label>
            <input id="vehicle" name="vehicle" className="field" placeholder="e.g. 2018 Ford F-150" required maxLength={120} />
          </div>
          <div>
            <label htmlFor="service" className={labelClass}>Service needed *</label>
            <select id="service" name="service" className="field" required defaultValue="">
              <option value="" disabled>
                Choose a service
              </option>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="preferredDate" className={labelClass}>Preferred date</label>
            <input id="preferredDate" name="preferredDate" type="date" className="field" min={minDate} />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className={labelClass}>What&apos;s going on?</label>
            <textarea
              id="message"
              name="message"
              className="field min-h-[100px] resize-y"
              placeholder="Describe the symptoms, warning lights or work you need"
              maxLength={2000}
            />
          </div>

          {status === "error" ? (
            <p className="font-body text-sm font-semibold text-primary sm:col-span-2" role="alert">
              {errorMessage}
            </p>
          ) : null}

          <button
            type="submit"
            className="button-primary group gap-2 sm:col-span-2 disabled:cursor-wait disabled:opacity-70"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Send Request"}
            {status === "sending" ? null : (
              <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">
                →
              </span>
            )}
          </button>
          <p className="font-body text-xs text-muted-foreground sm:col-span-2">
            * Required. Your details are used only to respond to your request. See our{" "}
            <a href="/privacy" className="font-semibold text-foreground underline underline-offset-2 hover:text-primary">
              Privacy Policy
            </a>
            .
          </p>
        </form>
      )}
    </div>
  );
}
