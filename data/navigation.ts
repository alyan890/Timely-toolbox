export type NavItem = {
  label: string;
  href: string;
};

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Fleet Services", href: "/fleet-services" },
  { label: "Specialty Services", href: "/specialty-services" },
  { label: "Contact", href: "/contact" }
];

export const appointmentHref = "/contact#appointment";
