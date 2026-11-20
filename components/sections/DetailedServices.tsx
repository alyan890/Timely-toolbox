import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { StripeDivider } from "@/components/ui/StripeDivider";
import { mainServices } from "@/data/services";

export function DetailedServices() {
  return (
    <section
      id="detailed-services"
      aria-labelledby="detailed-services-heading"
      className="relative bg-white py-20 sm:py-24"
    >
      <StripeDivider />
      <div className="container-content">
        <Reveal>
          <SectionHeading
            id="detailed-services-heading"
            eyebrow="What We Fix"
            title="Professional Service for Every Vehicle"
            intro="From a warning light to a full repair, every job starts with finding the real cause. Explore each service to see what's involved."
          />
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
  );
}
