import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { PricingNote } from "@/components/ui/PricingNote";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { appointmentHref } from "@/data/navigation";
import { fleetService, mainServices, specialtyServices } from "@/data/services";

export const metadata: Metadata = {
  title: "Automotive Services",
  description:
    "Engine repair, diagnostics, electrical, brakes, suspension and general maintenance in Maricopa, Arizona. Appointment-based service from The Timely Toolbox."
};

const moreServices = [
  {
    title: "Fleet Services",
    text: fleetService.description,
    href: fleetService.href,
    image: fleetService.image,
    imageAlt: fleetService.imageAlt
  },
  {
    title: "Specialty Services",
    text: "Custom builds, aftermarket installations, welding, broken bolt extractions, plus motorcycle and tractor repairs.",
    href: "/specialty-services",
    image: specialtyServices[0].image,
    imageAlt: specialtyServices[0].imageAlt
  }
];

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        eyebrow="Our Services"
        title="Complete Automotive Solutions"
        intro="Diagnosis first, then the right repair. Explore the services below or send a request describing what your vehicle is doing."
        image="/images/real-general-repair.webp"
        imageAlt="Technician working under the hood of a red Lincoln"
      >
        <Link href={appointmentHref} className="button-primary group gap-2">
          Request an Appointment
          <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
        </Link>
      </PageHero>

      <section aria-labelledby="all-services-heading" className="bg-background py-20 sm:py-24">
        <div className="container-content">
          <Reveal>
            <SectionHeading id="all-services-heading" eyebrow="What We Fix" title="Automotive Repair & Maintenance" />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {mainServices.map((service, index) => (
              <Reveal key={service.slug} className="h-full" delay={(index % 3) * 80}>
                <ServiceCard service={service} index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="more-services-heading" className="bg-white py-20 sm:py-24">
        <div className="container-content">
          <Reveal>
            <SectionHeading id="more-services-heading" eyebrow="Beyond Repairs" title="Fleet & Specialty Work" />
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {moreServices.map((item, index) => (
              <Reveal key={item.href} delay={index * 100} className="h-full">
                <article className="group relative isolate flex h-full min-h-[300px] items-end overflow-hidden rounded-[10px] bg-graphite text-white">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 1023px) 100vw, 50vw"
                    className="-z-20 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgb(17_19_21/0.97)_0%,rgb(17_19_21/0.82)_40%,rgb(17_19_21/0.2)_100%)]"
                    aria-hidden="true"
                  />
                  <div className="p-6 [text-shadow:0_2px_12px_rgb(0_0_0/0.6)] sm:p-8">
                    <h3 className="font-heading text-[2.25rem] font-extrabold uppercase italic leading-none">{item.title}</h3>
                    <p className="mt-3 max-w-md font-body text-sm leading-6 text-white/80">{item.text}</p>
                    <Link href={item.href} className="stretched-link mt-4 inline-flex items-center gap-1.5 font-body text-sm font-bold">
                      Explore {item.title}
                      <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <PricingNote className="mx-auto max-w-2xl" />
          </Reveal>
        </div>
      </section>

      <HowItWorks />
      <CtaBand />
    </main>
  );
}
