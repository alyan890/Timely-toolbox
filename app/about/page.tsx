import type { Metadata } from "next";
import Link from "next/link";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CtaBand } from "@/components/ui/CtaBand";
import { CalendarCheckIcon, ChatIcon, CheckIcon, PulseIcon } from "@/components/ui/Icons";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { appointmentHref } from "@/data/navigation";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The Timely Toolbox is an appointment-based automotive repair business in Maricopa, Arizona, offering one-on-one service, honest estimates and careful work."
};

const approach = [
  {
    title: "Diagnose First",
    text: "The real cause is found before parts are replaced, so you only pay for the repairs your vehicle needs.",
    Icon: PulseIcon
  },
  {
    title: "Talk to Your Technician",
    text: "No front counter and no hand-offs. You speak directly with the person working on your vehicle.",
    Icon: ChatIcon
  },
  {
    title: "Appointment-Based",
    text: "Each vehicle gets dedicated time. Requests are reviewed personally and confirmed once availability is checked.",
    Icon: CalendarCheckIcon
  },
  {
    title: "Estimates Before Work",
    text: "You know what's being done and why before any repair begins. No surprise work.",
    Icon: CheckIcon
  }
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        eyebrow="About The Timely Toolbox"
        title="A Trusted Auto Repair Shop in Maricopa, AZ."
        intro="The Timely Toolbox is an appointment-based automotive repair and specialty services business. Every vehicle gets one-on-one attention, honest communication and careful work."
        image="/images/Focused Mechanic in a Modern Garage.png"
        imageAlt="Technician working under the hood of a vehicle"
      >
        <Link href={appointmentHref} className="button-primary group gap-2">
          Request an Appointment
          <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
        </Link>
      </PageHero>

      <section aria-labelledby="story-heading" className="bg-background py-20 sm:py-24">
        <div className="container-content grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <Reveal>
            <SectionHeading
              id="story-heading"
              align="left"
              eyebrow="Our Story"
              title="Personal Service, Done Right."
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-5 font-body text-base leading-8 text-muted-foreground">
              <p>
                The Timely Toolbox was built around a simple idea: car repair should be clear, honest and personal.
                Instead of a busy front counter, you work directly with the technician who diagnoses and repairs your
                vehicle.
              </p>
              <p>
                Because the business is appointment-based, each vehicle gets proper, focused time. That means careful
                diagnosis, clear explanations and repairs done right the first time.
              </p>
              <p>
                Alongside everyday repair and maintenance, The Timely Toolbox takes on fleet vehicles and specialty
                work, from custom builds and fabrication to broken bolt extractions, plus motorcycles and tractors when
                the schedule allows.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="approach-heading" className="bg-white py-20 sm:py-24">
        <div className="container-content">
          <Reveal>
            <SectionHeading id="approach-heading" eyebrow="Our Approach" title="How We Take Care of You" />
          </Reveal>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {approach.map(({ title, text, Icon }, index) => (
              <li key={title}>
                <Reveal className="h-full" delay={index * 70}>
                  <div className="relative h-full overflow-hidden rounded-[10px] border border-border bg-white p-6">
                    <span
                      className={`absolute left-0 top-0 h-[5px] w-[70px] -translate-x-2 -skew-x-[35deg] ${
                        index % 2 === 0 ? "bg-primary" : "bg-secondary"
                      }`}
                      aria-hidden="true"
                    />
                    <span className="grid h-[52px] w-[52px] -skew-x-[10deg] place-items-center rounded-lg bg-foreground text-white">
                      <Icon className="skew-x-[10deg]" />
                    </span>
                    <h3 className="mt-5 font-heading text-2xl font-extrabold uppercase italic leading-none text-foreground">
                      {title}
                    </h3>
                    <p className="mt-2 font-body text-sm leading-6 text-muted-foreground">{text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <HowItWorks />
      <WhyChooseUs />
      <CtaBand />
    </main>
  );
}
