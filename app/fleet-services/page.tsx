import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/ui/CtaBand";
import { CheckIcon } from "@/components/ui/Icons";
import { PageHero } from "@/components/ui/PageHero";
import { PricingNote } from "@/components/ui/PricingNote";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { appointmentHref } from "@/data/navigation";
import { fleetService } from "@/data/services";

export const metadata: Metadata = {
  title: "Fleet Services & Maintenance Management",
  description:
    "Repair and maintenance management for business vehicles in Maricopa, Arizona. Keep work vans, trucks and company cars on the road with The Timely Toolbox."
};

const vehicleTypes = ["Work vans", "Pickup trucks", "Company cars", "Service vehicles"];

const steps = [
  {
    title: "Tell Us About Your Fleet",
    text: "Share how many vehicles you run, what they are and how they're used."
  },
  {
    title: "Plan the Maintenance",
    text: "Agree on a maintenance schedule that fits around your working hours."
  },
  {
    title: "Service & Repairs",
    text: "Vehicles are inspected, maintained and repaired, with estimates before work."
  },
  {
    title: "Records & Updates",
    text: "Clear communication and service records for each vehicle."
  }
];

export default function FleetServicesPage() {
  return (
    <main>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Fleet Services" }]}
        eyebrow="Fleet Services"
        title={
          <>
            Keep Your Business <span className="text-primary">Moving.</span>
          </>
        }
        intro={fleetService.description}
        image={fleetService.image}
        imageAlt={fleetService.imageAlt}
      >
        <Link href={appointmentHref} className="button-primary group gap-2">
          Talk About Your Fleet
          <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
        </Link>
      </PageHero>

      <section aria-labelledby="fleet-offer-heading" className="bg-dark-surface py-20 text-white sm:py-24">
        <div className="container-content grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <SectionHeading
              id="fleet-offer-heading"
              align="left"
              tone="dark"
              eyebrow="Built for Business"
              title="Less Downtime. More Time on the Job."
              intro="Every vehicle that's off the road costs your business money. Fleet service focuses on keeping maintenance on schedule and catching problems early."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {fleetService.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 font-body text-[15px] font-medium text-white/90">
                  <span className="mt-1 h-3.5 w-3.5 shrink-0 -skew-x-[15deg] bg-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-[10px] border border-white/10 bg-graphite p-6 sm:p-7">
              <p className="font-heading text-[1.75rem] font-extrabold uppercase italic leading-none">Vehicles We Support</p>
              <ul className="mt-5 grid grid-cols-2 gap-3">
                {vehicleTypes.map((type) => (
                  <li key={type} className="flex items-center gap-2.5 font-body text-[15px] text-white/85">
                    <CheckIcon size={18} className="shrink-0 text-secondary" />
                    {type}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="fleet-steps-heading" className="bg-background py-20 sm:py-24">
        <div className="container-content">
          <Reveal>
            <SectionHeading id="fleet-steps-heading" eyebrow="How It Works" title="Fleet Service, Step by Step" />
          </Reveal>
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.title}>
                <Reveal className="h-full" delay={index * 80}>
                  <div className="relative h-full overflow-hidden rounded-[10px] border border-border bg-white p-6">
                    <span className="outline-number font-heading text-[3.375rem] font-extrabold italic leading-none" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 font-heading text-2xl font-extrabold uppercase italic leading-none text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 font-body text-sm leading-6 text-muted-foreground">{step.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-label="Fleet pricing" className="bg-white py-20 sm:py-24">
        <div className="container-content grid gap-8 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[10px]">
              <Image
                src="/images/service-engine-repair.webp"
                alt="Technician working under the hood of a vehicle"
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <PricingNote />
            <p className="mt-5 font-body text-sm leading-6 text-muted-foreground">
              Running several vehicles? Mention your fleet size in the request form and we&apos;ll get back to you to talk
              through scheduling.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand title="Let's Talk About Your Fleet" text="Send a request with your fleet details and we'll get back to you to plan the next step." />
    </main>
  );
}
