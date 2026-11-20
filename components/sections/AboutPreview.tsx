import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const facts = [
  "Appointment-based",
  "One-on-one service",
  "Diagnostics from $125",
  "Text-friendly"
];

export function AboutPreview() {
  return (
    <section
      aria-labelledby="about-preview-heading"
      className="grid overflow-hidden bg-white lg:min-h-[520px] lg:grid-cols-[1.05fr_1fr]"
    >
      <div className="relative min-h-[320px]">
        <div className="absolute inset-0 [clip-path:polygon(0_0,100%_0,100%_88%,0_100%)] lg:[clip-path:polygon(0_0,90%_0,72%_100%,0_100%)]">
          <Image
            src="/images/Focused Mechanic in a Modern Garage.png"
            alt="Technician working under the hood of a vehicle"
            fill
            sizes="(max-width: 1023px) 100vw, 55vw"
            className="object-cover"
          />
        </div>
        {/* Red and blue slash along the angled photo edge (desktop only) */}
        <svg
          className="absolute inset-0 hidden h-full w-full lg:block"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="91,0 95,0 77,100 73,100" fill="var(--color-primary)" />
          <polygon points="96.5,0 98.5,0 80.5,100 78.5,100" fill="var(--color-secondary)" />
        </svg>
      </div>

      <Reveal className="flex max-w-xl flex-col justify-center px-5 pb-16 pt-12 sm:px-10 lg:py-16 lg:pl-2 lg:pr-14">
        <p className="eyebrow">About The Timely Toolbox</p>
        <h2
          id="about-preview-heading"
          className="heading-display mt-3.5 text-[2.5rem] sm:text-5xl lg:text-[3.5rem]"
        >
          A Trusted Auto Repair Shop in Maricopa, AZ.
        </h2>
        <p className="mt-5 font-body text-base leading-7 text-muted-foreground">
          The Timely Toolbox is an appointment-based automotive repair business.
          You deal directly with the technician who works on your vehicle: no
          front counter, no hand-offs, just honest communication and careful
          work.
        </p>
        <ul className="mt-6 grid grid-cols-2 gap-3">
          {facts.map((fact, index) => (
            <li
              key={fact}
              className={`border-l-[3px] py-1 pl-3 font-body text-sm font-semibold text-foreground ${
                index % 2 === 0 ? "border-primary" : "border-secondary"
              }`}
            >
              {fact}
            </li>
          ))}
        </ul>
        <Link href="/about" className="button-primary group mt-8 w-fit gap-2">
          Learn More
          <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">
            →
          </span>
        </Link>
      </Reveal>
    </section>
  );
}
