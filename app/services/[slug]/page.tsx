import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CtaBand } from "@/components/ui/CtaBand";
import { AlertIcon, CheckIcon } from "@/components/ui/Icons";
import { PageHero } from "@/components/ui/PageHero";
import { PricingNote } from "@/components/ui/PricingNote";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { appointmentHref } from "@/data/navigation";
import { serviceDetails } from "@/data/serviceDetails";
import { getMainService, mainServices } from "@/data/services";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return mainServices.map((service) => ({ slug: service.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getMainService(slug);
  return service
    ? { title: `${service.title} in Maricopa, AZ`, description: serviceDetails[slug]?.intro ?? service.description }
    : {};
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = getMainService(slug);
  const details = serviceDetails[slug];

  if (!service || !details) {
    notFound();
  }

  const index = mainServices.indexOf(service);
  const related = mainServices.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <main>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.title }]}
        eyebrow={`Service ${String(index + 1).padStart(2, "0")}`}
        title={service.title}
        intro={details.intro}
        image={service.image}
        imageAlt={service.imageAlt}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href={appointmentHref} className="button-primary group gap-2">
            Request an Appointment
            <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
          </Link>
          <Link href="/services" className="button-secondary">
            All Services
          </Link>
        </div>
      </PageHero>

      <section aria-labelledby="service-details-heading" className="bg-background py-20 sm:py-24">
        <h2 id="service-details-heading" className="sr-only">
          {service.title} details
        </h2>
        <div className="container-content grid gap-6 lg:grid-cols-[1fr_1fr_0.9fr]">
          <Reveal className="h-full">
            <div className="h-full rounded-[10px] border border-border bg-white p-6 sm:p-7">
              <p className="font-heading text-[1.75rem] font-extrabold uppercase italic leading-none text-foreground">
                {details.signsTitle ?? "Signs to Watch For"}
              </p>
              <ul className="mt-5 space-y-3">
                {details.signs.map((sign) => (
                  <li key={sign} className="flex gap-3 font-body text-[15px] leading-6 text-graphite">
                    <AlertIcon size={20} className="mt-0.5 shrink-0 text-primary" />
                    {sign}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal className="h-full" delay={80}>
            <div className="h-full rounded-[10px] bg-dark-surface p-6 text-white sm:p-7">
              <p className="font-heading text-[1.75rem] font-extrabold uppercase italic leading-none">What We Do</p>
              <ul className="mt-5 space-y-3">
                {details.work.map((item) => (
                  <li key={item} className="flex gap-3 font-body text-[15px] leading-6 text-white/85">
                    <CheckIcon size={20} className="mt-0.5 shrink-0 text-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal className="h-full" delay={160}>
            <PricingNote className="h-full bg-white" />
          </Reveal>
        </div>
      </section>

      <HowItWorks />

      <section aria-labelledby="related-heading" className="bg-white py-20 sm:py-24">
        <div className="container-content">
          <Reveal>
            <SectionHeading id="related-heading" eyebrow="More Services" title="Other Ways We Can Help" />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {related.map((item) => (
              <Reveal key={item.slug} className="h-full">
                <ServiceCard service={item} index={mainServices.indexOf(item)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
