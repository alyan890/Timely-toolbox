import type { ReactNode } from "react";

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "center" | "left";
  tone?: "light" | "dark";
  as?: "h1" | "h2";
  className?: string;
};

/** Eyebrow label + italic display heading + optional intro, used by every section. */
export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  align = "center",
  tone = "light",
  as: Heading = "h2",
  className = ""
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-xl"} ${className}`}>
      {centered ? (
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-primary sm:w-16" aria-hidden="true" />
          <p className="eyebrow whitespace-nowrap">{eyebrow}</p>
          <span className="h-px w-12 bg-primary sm:w-16" aria-hidden="true" />
        </div>
      ) : (
        <p className="eyebrow">{eyebrow}</p>
      )}
      <Heading
        id={id}
        className={`heading-display mt-3 text-[2.5rem] sm:text-5xl lg:text-[3.5rem] ${
          tone === "dark" ? "text-white" : ""
        }`}
      >
        {title}
      </Heading>
      {intro ? (
        <p
          className={`mt-5 font-body text-base leading-7 ${
            centered ? "mx-auto max-w-2xl" : ""
          } ${tone === "dark" ? "text-white/70" : "text-muted-foreground"}`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
