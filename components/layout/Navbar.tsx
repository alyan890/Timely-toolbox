"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { appointmentHref, mainNavigation } from "@/data/navigation";

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu after navigating and when Escape is pressed.
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <nav
        aria-label="Primary navigation"
        className="container-content flex min-h-20 items-center justify-between gap-6"
      >
        <Link
          href="/"
          className="shrink-0 rounded-sm"
          aria-label="The Timely Toolbox home"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/images/logo.png"
            alt="The Timely Toolbox"
            width={142}
            height={114}
            sizes="90px"
            className="h-14 w-auto object-contain sm:h-16"
            preload
          />
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {mainNavigation.map((item) => {
            const isActive = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative py-2 font-body text-sm font-semibold transition-colors hover:text-primary ${
                  isActive
                    ? "text-primary after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-primary"
                    : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href={appointmentHref} className="button-primary ml-1">
            Request an Appointment
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="sr-only">
            {isOpen ? "Close navigation menu" : "Open navigation menu"}
          </span>
          <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
            <span className="h-0.5 w-full bg-current" />
            <span className="h-0.5 w-full bg-current" />
            <span className="h-0.5 w-full bg-current" />
          </span>
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`${isOpen ? "block" : "hidden"} max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-border bg-white lg:hidden`}
      >
        <div className="container-content flex flex-col gap-1 py-4">
          {mainNavigation.map((item) => {
            const isActive = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-md px-3 py-3 font-body text-base font-semibold hover:bg-background hover:text-primary ${
                  isActive ? "bg-background text-primary" : "text-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href={appointmentHref}
            className="button-primary mt-3 w-full"
            onClick={() => setIsOpen(false)}
          >
            Request an Appointment
          </Link>
        </div>
      </div>
    </header>
  );
}
