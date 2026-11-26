import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { specialtyServices, type SpecialtyService } from "@/data/services";

const tileSpan: Record<SpecialtyService["tile"], string> = {
  featured: "md:min-h-0 xl:col-span-2 xl:row-span-2",
  wide: "xl:col-span-2",
  standard: ""
};

function SpecialtyTile({ service }: { service: SpecialtyService }) {
  const isFeatured = service.tile === "featured";

  return (
    <article
      className={`tile group relative isolate flex h-full min-h-[260px] items-end md:min-h-[220px] overflow-hidden rounded-[10px] text-white bg-graphite ${isFeatured ? "tile-featured" : ""}`}
    >
              <Image
          src={service.image}
          alt={service.imageAlt}
          style={service.imagePosition ? { objectPosition: service.imagePosition } : undefined}
          fill
          sizes={isFeatured ? "(max-width: 1099px) 100vw, 50vw" : "(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 50vw"}
          className="-z-20 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      {/* Two dark fades (bottom + left) keep the white text readable on any photo. */}
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgb(17_19_21/0.97)_0%,rgb(17_19_21/0.86)_32%,rgb(17_19_21/0.35)_62%,rgb(17_19_21/0.08)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(17_19_21/0.6)_0%,transparent_65%)] transition-opacity duration-300 group-hover:opacity-100 md:opacity-80"
        aria-hidden="true"
      />
      {service.byAvailability ? (
        <span className="absolute left-4 top-4 rounded bg-secondary px-2.5 py-1 font-body text-[11px] font-bold uppercase tracking-[0.08em] text-dark-surface">
          By availability
        </span>
      ) : null}
      <div className="w-full p-5 [text-shadow:0_2px_12px_rgb(0_0_0/0.65)] sm:p-6">
        <h3
          className={`font-heading font-extrabold uppercase italic leading-[0.95] ${
            isFeatured ? "text-[2.25rem] xl:text-[2.875rem]" : "text-[1.875rem]"
          }`}
        >
          {service.title}
        </h3>
        <p className="tile-description mt-2 max-w-md font-body text-sm leading-6 text-white/80">
          {service.description}
        </p>
        <Link
          href={service.href}
          className="stretched-link mt-3 inline-flex items-center gap-1.5 font-body text-[13px] font-bold text-white"
        >
          Explore<span className="sr-only">: {service.title}</span>
          <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}

export function SpecialtyPreview() {
  return (
    <section aria-labelledby="specialty-preview-heading" className="bg-background py-20 sm:py-24">
      <div className="container-content">
        <Reveal>
          <SectionHeading
            id="specialty-preview-heading"
            eyebrow="Specialty Services"
            title="Beyond Everyday Repair"
            intro="Custom projects, fabrication and specialty vehicles. Select a service to learn more."
          />
        </Reveal>
        <div className="mt-12 grid gap-3.5 md:auto-rows-[230px] md:grid-cols-2 xl:auto-rows-[240px] xl:grid-cols-4">
          {specialtyServices.map((service, index) => (
            <Reveal
              key={service.slug}
              className={`h-full ${tileSpan[service.tile]}`}
              delay={(index % 4) * 70}
            >
              <SpecialtyTile service={service} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/specialty-services" className="button-secondary group gap-2">
            All Specialty Services
            <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
