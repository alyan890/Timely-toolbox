import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { ChatIcon, PhoneIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { business, getCallHref, getTextHref } from "@/data/business";

export function ContactSection({ isPage = false }: { isPage?: boolean }) {
  const textHref = getTextHref();
  const callHref = getCallHref();
  const quickContacts = [
    textHref
      ? { label: "Text Us", detail: business.smsPhone ?? business.phone, href: textHref, Icon: ChatIcon, iconClass: "bg-primary" }
      : null,
    callHref
      ? { label: "Call Us", detail: business.phone, href: callHref, Icon: PhoneIcon, iconClass: "bg-foreground" }
      : null
  ].filter((item) => item !== null);

  return (
    <section
      id="appointment"
      aria-labelledby="contact-heading"
      className={`scroll-mt-4 bg-white ${isPage ? "pb-20 pt-14 sm:pb-24 sm:pt-16" : "py-20 sm:py-24"}`}
    >
      <div className="container-content">
        <Reveal>
          <SectionHeading
            id="contact-heading"
            as={isPage ? "h1" : "h2"}
            eyebrow="Get in Touch"
            title="Request an Appointment"
            intro="The fastest way to reach us is a text. Prefer a form? Send a request and we'll get back to you."
          />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div id="text-us" className="grid scroll-mt-24 content-start gap-3.5">
              {quickContacts.map(({ label, detail, href, Icon, iconClass }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 rounded-[10px] border border-border bg-background p-5 transition hover:translate-x-1 hover:border-primary"
                >
                  <span className={`grid h-[52px] w-[52px] shrink-0 place-items-center rounded-lg text-white ${iconClass}`}>
                    <Icon />
                  </span>
                  <span>
                    <span className="block font-heading text-[1.625rem] font-extrabold uppercase italic leading-none text-foreground">
                      {label}
                    </span>
                    <span className="mt-1 block font-body text-sm text-muted-foreground">{detail}</span>
                  </span>
                </a>
              ))}

              <div className="rounded-[10px] bg-dark-surface p-5 text-white">
                <p className="font-heading text-[1.375rem] font-extrabold uppercase italic">
                  Appointment-Based
                </p>
                <p className="mt-2 font-body text-[13px] leading-6 text-white/70">
                  Requests are reviewed personally. We&apos;ll confirm a time that works once
                  availability is checked.
                </p>
                {business.hours ? (
                  <p className="mt-2 font-body text-[13px] text-white/85">{business.hours}</p>
                ) : null}
              </div>

              <div className="rounded-[10px] border border-border p-5">
                <p className="font-heading text-[1.375rem] font-extrabold uppercase italic text-foreground">
                  Good to Know
                </p>
                <ul className="mt-2 space-y-1.5 font-body text-[13px] leading-5 text-muted-foreground">
                  <li>Labor rate: ${business.pricing.laborRatePerHour}/hour</li>
                  <li>Diagnostics from ${business.pricing.diagnosticsFrom}, including a general inspection</li>
                  <li>Travel fee: ${business.pricing.travelFeePerMile}/mile outside the service area</li>
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <AppointmentForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
