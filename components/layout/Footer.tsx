import Image from "next/image";
import Link from "next/link";
import { business, getCallHref, getTextHref } from "@/data/business";
import { appointmentHref, mainNavigation } from "@/data/navigation";
import { mainServices } from "@/data/services";

export function Footer() {
  const textHref = getTextHref();
  const callHref = getCallHref();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark-surface text-white">
      <div className="container-content grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:py-16">
        <div>
          <Link href="/" className="inline-block rounded-sm" aria-label="The Timely Toolbox home">
            {/* The logo file is black; invert it for the dark footer. */}
            <Image
              src="/images/logo.png"
              alt="The Timely Toolbox"
              width={142}
              height={114}
              sizes="120px"
              className="h-20 w-auto object-contain invert"
            />
          </Link>
          <p className="mt-5 max-w-xs font-body text-sm leading-6 text-white/70">
            Appointment-based automotive repair and specialty services in{" "}
            {business.city}, {business.state}.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="font-heading text-lg font-bold uppercase italic tracking-wide text-white">
            Explore
          </h2>
          <ul className="mt-4 space-y-2">
            {[...mainNavigation, { label: "Service Areas", href: "/service-areas" }].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-body text-sm text-white/75 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Service links">
          <h2 className="font-heading text-lg font-bold uppercase italic tracking-wide text-white">
            Services
          </h2>
          <ul className="mt-4 space-y-2">
            {mainServices.map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="font-body text-sm text-white/75 transition-colors hover:text-white"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-heading text-lg font-bold uppercase italic tracking-wide text-white">
            Get in Touch
          </h2>
          <ul className="mt-4 space-y-2 font-body text-sm text-white/75">
            <li>
              {business.city}, {business.state}
            </li>
            {business.phone && callHref ? (
              <li>
                <a href={callHref} className="transition-colors hover:text-white">
                  {business.phone}
                </a>
              </li>
            ) : null}
            {business.email ? (
              <li>
                <a href={`mailto:${business.email}`} className="transition-colors hover:text-white">
                  {business.email}
                </a>
              </li>
            ) : null}
            {business.hours ? <li>{business.hours}</li> : null}
          </ul>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            {textHref ? (
              <a href={textHref} className="button-primary">
                Text Us
              </a>
            ) : null}
            <Link
              href={appointmentHref}
              className={textHref ? "button-on-dark" : "button-primary"}
            >
              Request an Appointment
            </Link>
          </div>
          {business.social.length > 0 ? (
            <ul className="mt-6 flex gap-4">
              {business.social.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-content flex flex-col gap-3 py-6 font-body text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.name}. All rights reserved.{" "}
            <Link href="/privacy" className="underline-offset-2 transition-colors hover:text-white hover:underline">
              Privacy Policy
            </Link>
          </p>
          <p className="font-semibold uppercase italic tracking-[0.25em] text-white/80">
            {business.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
