import { getImageProps } from "next/image";
import Link from "next/link";
import { PinIcon } from "@/components/ui/Icons";
import { getTextHref } from "@/data/business";
import { appointmentHref } from "@/data/navigation";

const heroAlt = "Black muscle car against the Arizona desert and mountains";

export function Hero() {
  const textHref = getTextHref();
  // Art direction: a dedicated portrait image on mobile, landscape on larger
  // screens. getImageProps lets both go through Next.js image optimization.
  // No preload here: it would fetch the desktop image on phones too.
  // The <img> is eager with high fetch priority instead.
  const common = { alt: heroAlt, sizes: "100vw", loading: "eager" as const };
  const {
    props: { srcSet: mobileSrcSet }
  } = getImageProps({
    ...common,
    src: "/images/hero-mobile.webp",
    width: 941,
    height: 1672,
    quality: 75
  });
  const {
    props: { srcSet: desktopSrcSet, ...desktopImgProps }
  } = getImageProps({
    ...common,
    src: "/images/hero-desktop.webp",
    width: 1672,
    height: 941,
    quality: 75
  });

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[680px] overflow-hidden sm:min-h-[720px] lg:min-h-[calc(100vh-80px)] lg:max-h-[860px]"
    >
      <picture className="absolute inset-0 -z-20 block">
        <source media="(max-width: 768px)" srcSet={mobileSrcSet} sizes="100vw" />
        <source media="(min-width: 769px)" srcSet={desktopSrcSet} sizes="100vw" />
        <img
          {...desktopImgProps}
          alt={heroAlt}
          fetchPriority="high"
          className="h-full w-full object-cover object-[64%_center] sm:object-center"
        />
      </picture>
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-white/95 via-white/75 to-transparent lg:hidden"
        aria-hidden="true"
      />

      <div className="container-content relative flex min-h-[680px] items-center py-20 sm:min-h-[720px] lg:min-h-[calc(100vh-80px)] lg:py-24">
        <div className="max-w-xl">
          <p className="eyebrow mb-5 flex items-center gap-2">
            <PinIcon size={14} />
            Maricopa, Arizona
          </p>
          <h1
            id="hero-heading"
            className="heading-display max-w-lg pr-2 text-6xl leading-[0.88] sm:text-7xl lg:text-8xl"
          >
            Precision service.
            <span className="block text-primary">Personal attention.</span>
          </h1>
          <p className="mt-7 max-w-md font-body text-base leading-7 text-graphite sm:text-lg">
            Professional automotive repair and specialty services delivered
            with the care your vehicle deserves.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href={appointmentHref} className="button-primary group gap-2">
              Request an Appointment
              <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
            </Link>
            {textHref ? (
              <a href={textHref} className="button-secondary group gap-2">
                Text Us
                <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
              </a>
            ) : (
              <Link href="/contact#text-us" className="button-secondary group gap-2">
                Text Us
                <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
