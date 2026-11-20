import Link from "next/link";
import type { ReactNode } from "react";

type ServiceIconName =
  | "engine"
  | "diagnostics"
  | "electrical"
  | "brakes"
  | "suspension"
  | "general";

type Service = {
  name: string;
  icon: ServiceIconName;
  color: "red" | "blue";
  href: string;
};

const services: Service[] = [
  { name: "Engine Repair", icon: "engine", color: "red", href: "/services/engine-repair" },
  { name: "Diagnostics", icon: "diagnostics", color: "blue", href: "/services/automotive-diagnostics" },
  { name: "Electrical Repair", icon: "electrical", color: "red", href: "/services/electrical-repair" },
  { name: "Brakes", icon: "brakes", color: "blue", href: "/services/brake-services" },
  { name: "Suspension & Steering", icon: "suspension", color: "red", href: "/services/suspension-steering" },
  { name: "General Repair", icon: "general", color: "blue", href: "/services/general-automotive-repair" }
];

function ServiceIcon({ name }: { name: ServiceIconName }) {
  const commonProps = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 2
  };

  const icons: Record<ServiceIconName, ReactNode> = {
    engine: (
      <>
        <path {...commonProps} d="M5 10h3l2-3h5l2 3h2l2 2v5h-3v2h-3v-2h-5v2H5v-2H3v-5l2-2Z" />
        <path {...commonProps} d="M10 10h4M8 13h8M19 11V8h2" />
      </>
    ),
    diagnostics: (
      <>
        <path {...commonProps} d="M3 13h4l2-6 4 12 3-8h5" />
        <path {...commonProps} d="M4 19h16" />
      </>
    ),
    electrical: (
      <path
        fill="currentColor"
        d="m14.7 2-9 12h6.2L10.3 22l8-13h-5.8L14.7 2Z"
      />
    ),
    brakes: (
      <>
        <circle {...commonProps} cx="12" cy="12" r="8.5" />
        <circle {...commonProps} cx="12" cy="12" r="3" />
        <path {...commonProps} d="M12 3.5v3M20.5 12h-3M12 20.5v-3M3.5 12h3M17.8 6.2l-2.1 2.1" />
      </>
    ),
    suspension: (
      <>
        <path {...commonProps} d="m7 4 10 4-10 4 10 4-10 4" />
        <path {...commonProps} d="M5 3v18M19 3v18" />
      </>
    ),
    general: (
      <>
        <path {...commonProps} d="M14 6a5 5 0 0 0-6.6 6.6L3 17v4h4l4.4-4.4A5 5 0 0 0 18 10" />
        <path {...commonProps} d="m15 4 5 5M6 18h.01" />
      </>
    )
  };

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className="h-11 w-11"
      viewBox="0 0 24 24"
    >
      {icons[name]}
    </svg>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const colorClass = service.color === "red" ? "text-primary" : "text-secondary";

  return (
    <Link
      href={service.href}
      className="flex h-28 flex-col items-center justify-center rounded-lg border border-border bg-card px-3 py-3 text-center transition duration-200 hover:-translate-y-[3px] hover:border-[#d3d7db] hover:shadow-[0_10px_24px_rgb(23_23_23/0.08)]"
    >
      <div className={colorClass}>
        <ServiceIcon name={service.icon} />
      </div>
      <span className="mt-2 max-w-[10rem] font-body text-sm font-bold leading-tight text-foreground sm:text-base">
        {service.name}
      </span>
    </Link>
  );
}

export function Services() {
  return (
    <section
      id="our-services"
      aria-labelledby="services-heading"
      className="bg-background py-8 sm:py-10 lg:py-11"
    >
      <div className="container-content">
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-primary sm:w-20" aria-hidden="true" />
          <p className="eyebrow whitespace-nowrap">Our Services</p>
          <span className="h-px w-16 bg-primary sm:w-20" aria-hidden="true" />
        </div>
        <h2
          id="services-heading"
          className="mt-2 text-center font-heading text-3xl font-bold leading-none text-foreground sm:text-4xl"
        >
          Complete Automotive Solutions
        </h2>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-6">
          {services.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
