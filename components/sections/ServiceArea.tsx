import { PinIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { business } from "@/data/business";

export function ServiceArea() {
  const [primaryArea, ...otherAreas] = business.serviceAreas;

  return (
    <section aria-labelledby="service-area-heading" className="bg-background py-20 sm:py-24">
      <div className="container-content grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Service Area</p>
          <h2
            id="service-area-heading"
            className="heading-display mt-3.5 text-[2.5rem] sm:text-5xl lg:text-[3.5rem]"
          >
            Proudly Serving {business.city}, {business.state}
          </h2>
          <p className="mt-5 max-w-lg font-body text-base leading-7 text-muted-foreground">
            Based in {business.city} and serving local drivers and businesses.
            Outside the service area? Ask us. A travel fee of $
            {business.pricing.travelFeePerMile} per mile applies.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2.5">
            <li className="rounded-full border border-primary bg-primary px-3.5 py-2 font-body text-sm font-semibold text-white">
              {primaryArea}
            </li>
            {otherAreas.map((area) => (
              <li
                key={area}
                className="rounded-full border border-border bg-white px-3.5 py-2 font-body text-sm font-semibold text-foreground"
              >
                {area}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mx-auto aspect-square w-full max-w-[440px]" aria-hidden="true">
            <div className="absolute inset-0 rounded-full border border-dashed border-foreground/20" />
            <div className="absolute inset-[16%] rounded-full border border-secondary/50 bg-secondary/[0.08]" />
            <div className="absolute inset-[34%] rounded-full border-2 border-secondary bg-secondary/[0.16]" />
            <PinIcon
              size={34}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full text-primary"
            />
            <p className="absolute left-1/2 top-[calc(50%+12px)] -translate-x-1/2 whitespace-nowrap font-heading text-[1.625rem] font-extrabold uppercase italic text-foreground">
              {business.city}
            </p>
            <p className="absolute bottom-[4%] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-border bg-white px-2.5 py-1 font-body text-xs text-muted-foreground">
              Outside area: ${business.pricing.travelFeePerMile}/mile
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
