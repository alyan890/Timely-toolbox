import type { Metadata } from "next";
import Link from "next/link";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { business } from "@/data/business";
import { appointmentHref } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Service Areas",
  description: `Automotive repair and specialty services based in ${business.city}, ${business.state}. Travel outside the service area is available for $${business.pricing.travelFeePerMile} per mile.`
};

export default function ServiceAreasPage() {
  const { pricing } = business;

  return (
    <main>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Service Areas" }]}
        eyebrow="Service Areas"
        title="Where We Work"
        intro={`The Timely Toolbox is based in ${business.city} and serves local drivers, families and businesses.`}
      >
        <Link href={appointmentHref} className="button-primary group gap-2">
          Request an Appointment
          <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
        </Link>
      </PageHero>

      <ServiceArea />

      <section aria-labelledby="travel-heading" className="bg-white py-20 sm:py-24">
        <div className="container-content grid gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="relative h-full overflow-hidden rounded-[10px] bg-dark-surface p-7 text-white sm:p-8">
              <span className="absolute left-0 top-0 h-[5px] w-[90px] -translate-x-2 -skew-x-[35deg] bg-primary" aria-hidden="true" />
              <h2 id="travel-heading" className="heading-display text-[2.25rem] text-white">
                Outside the Area?
              </h2>
              <p className="mt-4 font-body text-base leading-7 text-white/75">
                Travel outside the service area is available for a fee of{" "}
                <strong className="text-white">${pricing.travelFeePerMile} per mile</strong>. Mention your location in
                the request form and we&apos;ll let you know what&apos;s possible.
              </p>
            </div>
          </Reveal>
          <Reveal className="h-full" delay={100}>
            <div className="relative h-full overflow-hidden rounded-[10px] border border-border bg-background p-7 sm:p-8">
              <span className="absolute left-0 top-0 h-[5px] w-[90px] -translate-x-2 -skew-x-[35deg] bg-secondary" aria-hidden="true" />
              <h2 className="heading-display text-[2.25rem]">Appointment-Based Service</h2>
              <p className="mt-4 font-body text-base leading-7 text-muted-foreground">
                This isn&apos;t a walk-in shop. Send a text or an appointment request, and you&apos;ll get a reply to
                confirm a time once availability is checked.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
