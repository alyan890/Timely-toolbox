import type { ReactNode, SVGProps } from "react";
import type { SpecialtyIconName } from "@/data/services";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Svg({ size = 24, children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export const ChatIcon = (props: IconProps) => (
  <Svg {...props}>
    <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z" />
  </Svg>
);

export const PhoneIcon = (props: IconProps) => (
  <Svg {...props}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
  </Svg>
);

export const CalendarCheckIcon = (props: IconProps) => (
  <Svg {...props}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M16 3v4M8 3v4M3 10h18M9 15l2 2 4-4" />
  </Svg>
);

export const CarIcon = (props: IconProps) => (
  <Svg {...props}>
    <path d="M5 17h14M6 17l1.5-5h9L18 17M7 17v2M17 17v2M8.5 12 10 8h4l1.5 4" />
  </Svg>
);

export const MedalIcon = (props: IconProps) => (
  <Svg {...props}>
    <circle cx="12" cy="9" r="6" />
    <path d="m8.5 14-1.5 8 5-3 5 3-1.5-8" />
  </Svg>
);

export const BuildingIcon = (props: IconProps) => (
  <Svg {...props}>
    <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" />
  </Svg>
);

export const PulseIcon = (props: IconProps) => (
  <Svg {...props}>
    <path d="M3 13h4l2-6 4 12 3-8h5" />
  </Svg>
);

export const HeartIcon = (props: IconProps) => (
  <Svg {...props}>
    <path d="M12 21s-7-4.5-7-11a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 6.5-7 11-7 11Z" />
  </Svg>
);

export const CheckIcon = (props: IconProps) => (
  <Svg {...props}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </Svg>
);

export const AlertIcon = (props: IconProps) => (
  <Svg {...props}>
    <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
    <path d="M12 9v4M12 17h.01" />
  </Svg>
);

export const InfoIcon =(props: IconProps) => (
  <Svg {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v5M12 16h.01" />
  </Svg>
);

export const PinIcon = ({ size = 16, ...props }: IconProps) => (
  <svg
    width={size}
    height={size * 1.25}
    viewBox="0 0 24 30"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M12 0C5.4 0 0 5.2 0 11.7 0 20.4 12 30 12 30s12-9.6 12-18.3C24 5.2 18.6 0 12 0Zm0 16a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Z" />
  </svg>
);

const specialtyPaths: Record<SpecialtyIconName, ReactNode> = {
  build: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4 2.6-2.6Z" />,
  install: (
    <>
      <path d="M3 17h18M5 17l2-5h10l2 5" />
      <path d="M12 3v6M9 6l3 3 3-3" />
    </>
  ),
  weld: (
    <>
      <path d="M4 20 14 10M14 10l3-3 3 3-3 3-3-3Z" />
      <path d="M7 6l1 2M4 9l2 1M10 4l.5 2" />
    </>
  ),
  bolt: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
    </>
  ),
  motorcycle: (
    <>
      <circle cx="5" cy="16" r="3" />
      <circle cx="19" cy="16" r="3" />
      <path d="M5 16l4-7h5l3 7M12 9l2-3h3" />
    </>
  ),
  tractor: (
    <>
      <circle cx="7" cy="16" r="4" />
      <circle cx="18" cy="17" r="3" />
      <path d="M7 12V6h6l2 6h3v5M3 12h8" />
    </>
  )
};

export function SpecialtyIcon({ name, ...props }: IconProps & { name: SpecialtyIconName }) {
  return <Svg {...props}>{specialtyPaths[name]}</Svg>;
}
