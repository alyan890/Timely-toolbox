import Image from "next/image";
import Link from "next/link";
import type { MainService } from "@/data/services";

/** Numbered service card with angled photo and red/blue hover sweep. */
export function ServiceCard({ service, index }: { service: MainService; index: number }) {
  return (
    <article className="card-sweep group relative flex h-full flex-col overflow-hidden rounded-[10px] border border-border bg-card transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgb(23_23_23/0.10)]">
      <div className="service-card-media relative aspect-[16/10] overflow-hidden bg-dark-surface">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 400px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col px-6 pb-6 pt-4">
        <div className="flex items-center gap-3.5">
          <span
            className="outline-number shrink-0 font-heading text-[3.375rem] font-extrabold italic leading-[0.85] transition-colors duration-300 group-hover:text-primary"
            aria-hidden="true"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="border-l border-border pl-3.5 font-heading text-[1.75rem] font-extrabold uppercase italic leading-[0.95] text-foreground">
            {service.title}
          </h3>
        </div>
        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label={`Common ${service.title.toLowerCase()} work`}>
          {service.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border bg-background px-2.5 py-1 font-body text-xs font-semibold text-graphite"
            >
              {tag}
            </li>
          ))}
        </ul>
        <p className="mt-3 flex-1 font-body text-sm leading-6 text-muted-foreground">{service.description}</p>
        <Link
          href={service.href}
          className="stretched-link mt-5 inline-flex w-fit items-center gap-1.5 font-body text-sm font-bold text-primary"
        >
          Explore Service
          <span className="sr-only">: {service.title}</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
