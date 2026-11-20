import Link from "next/link";
import { getCallHref, getTextHref } from "@/data/business";
import { appointmentHref } from "@/data/navigation";

/** Dark closing call-to-action used at the bottom of inner pages. */
export function CtaBand({
  title = "Ready to Get Back on the Road?",
  text = "Send a request with your vehicle details. We'll check availability and confirm a time that works."
}: {
  title?: string;
  text?: string;
}) {
  const textHref = getTextHref();
  const callHref = getCallHref();

  return (
    <section className="relative overflow-hidden bg-dark-surface text-white" aria-label="Request an appointment">
      <span className="absolute -top-[20%] right-[110px] hidden h-[140%] w-[56px] -skew-x-[25deg] bg-primary lg:block" aria-hidden="true" />
      <span className="absolute -top-[20%] right-[62px] hidden h-[140%] w-[20px] -skew-x-[25deg] bg-secondary lg:block" aria-hidden="true" />
      <div className="container-content relative flex flex-col gap-8 py-16 lg:flex-row lg:items-center lg:justify-between lg:pr-56">
        <div className="max-w-2xl">
          <h2 className="heading-display text-[2.5rem] text-white sm:text-5xl">{title}</h2>
          <p className="mt-4 font-body text-base leading-7 text-white/70">{text}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link href={appointmentHref} className="button-primary group gap-2">
            Request an Appointment
            <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
          </Link>
          {textHref ? (
            <a href={textHref} className="button-on-dark">Text Us</a>
          ) : null}
          {callHref ? (
            <a href={callHref} className="button-on-dark">Call Us</a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
