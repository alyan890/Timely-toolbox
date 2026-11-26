import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { appointmentHref } from "@/data/navigation";
import { fleetService } from "@/data/services";

export function FleetPreview() {
  return (
    <section aria-labelledby="fleet-preview-heading" className="overflow-hidden bg-dark-surface text-white">
      <div className="container-content grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-[1fr_1.05fr]">
        <Reveal>
          <p className="eyebrow">Fleet Services</p>
          <h2
            id="fleet-preview-heading"
            className="heading-display mt-3.5 text-[2.75rem] text-white sm:text-5xl lg:text-[4rem]"
          >
            Keep Your Business <span className="text-secondary">Moving.</span>
          </h2>
          <p className="mt-5 max-w-lg font-body text-base leading-7 text-white/70">
            {fleetService.description}
          </p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {fleetService.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2.5 font-body text-[15px] font-medium text-white/90">
                <span className="mt-1 h-3.5 w-3.5 shrink-0 -skew-x-[15deg] bg-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href={fleetService.href} className="button-primary group gap-2">
              Fleet Services
              <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">
                →
              </span>
            </Link>
            <Link href={appointmentHref} className="button-on-dark">
              Talk About Your Fleet
            </Link>
          </div>
        </Reveal>

        <Reveal delay={120} className="px-3.5 pb-3.5">
          <div className="fleet-frame">
            <div className="fleet-frame-image relative aspect-[4/3] overflow-hidden rounded">
              <Image
                src={fleetService.image}
                alt={fleetService.imageAlt}
                style={{ objectPosition: fleetService.imagePosition }}
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
