import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { StripeDivider } from "@/components/ui/StripeDivider";

export type Crumb = { label: string; href?: string };

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  crumbs: Crumb[];
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
};

/** Header for inner pages: breadcrumb, italic title, intro and an angled photo. */
export function PageHero({ eyebrow, title, intro, crumbs, image, imageAlt = "", children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className={`grid ${image ? "lg:min-h-[480px] lg:grid-cols-[1.05fr_1fr]" : ""}`}>
        <div
          className={`container-content flex flex-col justify-center pb-14 pt-10 sm:pb-16 ${
            image ? "lg:ml-auto lg:mr-0 lg:max-w-[42rem] lg:pr-10" : "lg:pb-20"
          }`}
        >
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 font-body text-xs font-semibold text-muted-foreground">
              {crumbs.map((crumb, index) => (
                <li key={crumb.label} className="flex items-center gap-1.5">
                  {index > 0 ? <span aria-hidden="true">/</span> : null}
                  {crumb.href ? (
                    <Link href={crumb.href} className="transition-colors hover:text-primary">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-foreground">
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <p className="eyebrow mt-8">{eyebrow}</p>
          <h1 className="heading-display mt-3 max-w-2xl text-[2.75rem] sm:text-6xl lg:text-[4.25rem]">{title}</h1>
          <div className="mt-5 max-w-xl font-body text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {intro}
          </div>
          {children ? <div className="mt-8">{children}</div> : null}
        </div>

        {image ? (
          <div className="relative min-h-[260px] sm:min-h-[340px]">
            <div className="absolute inset-0 [clip-path:polygon(0_12%,100%_0,100%_100%,0_100%)] lg:[clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]">
              <Image src={image} alt={imageAlt} fill preload sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover" />
            </div>
            <svg
              className="absolute inset-0 hidden h-full w-full lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="18,0 21,0 3,100 0,100" fill="var(--color-primary)" />
              <polygon points="23,0 24.5,0 6.5,100 5,100" fill="var(--color-secondary)" />
            </svg>
          </div>
        ) : null}
      </div>
      {image ? null : <StripeDivider position="bottom" />}
    </section>
  );
}
