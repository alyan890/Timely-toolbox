import {
  BuildingIcon,
  HeartIcon,
  MedalIcon,
  PulseIcon
} from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { business } from "@/data/business";

const icons = {
  medal: MedalIcon,
  building: BuildingIcon,
  pulse: PulseIcon,
  heart: HeartIcon
} as const;

export function WhyChooseUs() {
  const { pricing } = business;
  const prices = [
    { value: `$${pricing.laborRatePerHour}`, unit: "/hr", label: "Labor rate" },
    {
      value: `$${pricing.diagnosticsFrom}`,
      unit: "",
      label: "Diagnostics starting price, includes a general inspection"
    },
    { value: `$${pricing.travelFeePerMile}`, unit: "/mile", label: "Travel fee outside the service area" }
  ];

  return (
    <section aria-labelledby="why-heading" className="bg-white pt-20 sm:pt-24">
      <div className="container-content">
        <Reveal>
          <SectionHeading id="why-heading" eyebrow="Why Choose Us" title="Done Right. Explained Clearly." />
        </Reveal>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {business.trustPoints.map((point, index) => {
            const Icon = icons[point.icon];
            return (
              <li key={point.title}>
                <Reveal className="h-full" delay={index * 70}>
                  <div className="relative h-full overflow-hidden rounded-[10px] border border-border px-5 py-6">
                    <span
                      className={`absolute left-0 top-0 h-[5px] w-[70px] -translate-x-2 -skew-x-[35deg] ${
                        index % 2 === 0 ? "bg-primary" : "bg-secondary"
                      }`}
                      aria-hidden="true"
                    />
                    <Icon size={32} className="text-foreground" />
                    <h3 className="mt-4 font-heading text-2xl font-extrabold uppercase italic leading-none text-foreground">
                      {point.title}
                    </h3>
                    <p className="mt-2 font-body text-sm leading-6 text-muted-foreground">{point.text}</p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Pricing band: confirmed figures only */}
      <div className="relative mt-20 overflow-hidden bg-graphite text-white">
        <span
          className="absolute -top-[20%] right-[120px] hidden lg:block h-[140%] w-[60px] -skew-x-[25deg] bg-primary"
          aria-hidden="true"
        />
        <span
          className="absolute -top-[20%] right-[70px] hidden lg:block h-[140%] w-[22px] -skew-x-[25deg] bg-secondary"
          aria-hidden="true"
        />
        <div className="container-content relative grid gap-7 py-12 lg:grid-cols-[1.1fr_repeat(3,1fr)] lg:items-center lg:pr-56">
          <div>
            <h3 className="heading-display text-[2rem] text-white lg:text-[2.625rem]">
              Straightforward Pricing
            </h3>
            <p className="mt-2.5 font-body text-sm leading-6 text-white/65">
              Every repair gets an estimate before work begins.
            </p>
          </div>
          {prices.map((price) => (
            <div key={price.label} className="border-l-2 border-white/15 pl-5">
              <p className="font-heading text-[3.375rem] font-extrabold italic leading-none">
                {price.value}
                {price.unit ? <span className="text-[1.375rem] text-white/60">{price.unit}</span> : null}
              </p>
              <p className="mt-1.5 max-w-[14rem] font-body text-[13px] leading-5 text-white/70">
                {price.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
