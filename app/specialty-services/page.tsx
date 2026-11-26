import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/ui/CtaBand";
import { CheckIcon } from "@/components/ui/Icons";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { appointmentHref } from "@/data/navigation";
import { specialtyDetails } from "@/data/serviceDetails";
import { specialtyServices } from "@/data/services";

export const metadata: Metadata = {
  title: "Specialty Services",
  description:
    "Custom builds, aftermarket installations, welding and fabrication, broken bolt extractions, plus motorcycle and tractor repairs in Maricopa, Arizona."
};

export default function SpecialtyServicesPage() {
  return (
    <main>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Specialty Services" }]}
        eyebrow="Specialty Services"
        title="Beyond Everyday Repair"
        intro="Custom projects, fabrication and specialty vehicles. Jump to a service below, or send a request describing your project."
      >
        <ul className="flex flex-wrap gap-2" aria-label="Jump to a specialty service">
          {specialtyServices.map((service) => (
            <li key={service.slug}>
              <a
                href={`#${service.slug}`}
                className="inline-flex rounded-full border border-border bg-background px-3 py-1.5 font-body text-[13px] font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {service.title}
              </a>
            </li>
          ))}
        </ul>
      </PageHero>

      <div className="bg-background">
        {specialtyServices.map((service, index) => {
          const details = specialtyDetails[service.slug];
          const reversed = index % 2 === 1;

          return (
            <section
              key={service.slug}
              id={service.slug}
              aria-labelledby={`${service.slug}-heading`}
              className={`scroll-mt-6 py-16 sm:py-20 ${index % 2 === 0 ? "bg-background" : "bg-white"}`}
            >
              <div className="container-content grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                <Reveal className={reversed ? "lg:order-2" : ""}>
                  <div className="relative aspect-[3/2] overflow-hidden rounded-[10px] bg-graphite">
                                          <Image
                        src={service.image}
                        alt={service.imageAlt}
          style={service.imagePosition ? { objectPosition: service.imagePosition } : undefined}
                        fill
                        sizes="(max-width: 1023px) 100vw, 50vw"
                        className="object-cover"
                      />
                    {service.byAvailability ? (
                      <span className="absolute left-4 top-4 rounded bg-secondary px-2.5 py-1 font-body text-[11px] font-bold uppercase tracking-[0.08em] text-dark-surface">
                        By availability
                      </span>
                    ) : null}
                  </div>
                </Reveal>
                <Reveal delay={100}>
                  <span className="outline-number font-heading text-[3.375rem] font-extrabold italic leading-none" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2
                    id={`${service.slug}-heading`}
                    className="heading-display mt-2 text-[2.5rem] sm:text-5xl"
                  >
                    {service.title}
                  </h2>
                  <p className="mt-4 font-body text-base leading-7 text-muted-foreground">{details?.intro ?? service.description}</p>
                  {details ? (
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {details.examples.map((example) => (
                        <li key={example} className="flex gap-2.5 font-body text-[15px] leading-6 text-graphite">
                          <CheckIcon size={20} className="mt-0.5 shrink-0 text-primary" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <Link href={appointmentHref} className="button-primary group mt-8 gap-2">
                    {service.byAvailability ? "Ask About Availability" : "Request This Service"}
                    <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
                  </Link>
                </Reveal>
              </div>
            </section>
          );
        })}
      </div>

      <CtaBand title="Have a Project in Mind?" text="Tell us about your vehicle and what you'd like done. We'll get back to you to talk it through." />
    </main>
  );
}
