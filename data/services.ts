export type ServiceIconName =
  | "engine"
  | "diagnostics"
  | "electrical"
  | "brakes"
  | "suspension"
  | "general";

export type SpecialtyIconName =
  | "build"
  | "install"
  | "weld"
  | "bolt"
  | "motorcycle"
  | "tractor";

export type MainService = {
  slug: string;
  title: string;
  /** Short label used in the six-icon bar. */
  shortTitle: string;
  href: string;
  icon: ServiceIconName;
  image: string;
  imageAlt: string;
  /** Typical jobs shown as small tags on the card. */
  tags: string[];
  description: string;
};

export type SpecialtyService = {
  slug: string;
  title: string;
  href: string;
  icon: SpecialtyIconName;
  description: string;
  image?: string;
  imageAlt?: string;
  byAvailability?: boolean;
  /** Tile size in the homepage mosaic. */
  tile: "featured" | "wide" | "standard";
};

export const mainServices: MainService[] = [
  {
    slug: "engine-repair",
    title: "Engine Repair",
    shortTitle: "Engine Repair",
    href: "/services/engine-repair",
    icon: "engine",
    image: "/images/Precision Auto Repair in Action.png",
    imageAlt: "Technician tightening engine components under an open hood",
    tags: ["Check-engine lights", "Leaks", "Misfires"],
    description:
      "Rough running, misfires, leaks or warning lights: we track down the cause and repair it properly."
  },
  {
    slug: "automotive-diagnostics",
    title: "Automotive Diagnostics",
    shortTitle: "Diagnostics",
    href: "/services/automotive-diagnostics",
    icon: "diagnostics",
    image: "/images/Mechanic Performing Advanced Vehicle Diagnostics.png",
    imageAlt: "Technician using a diagnostic scan tool on a vehicle",
    tags: ["Scan & test", "From $125", "General inspection"],
    description:
      "Scan tools and hands-on testing to find the real problem before any parts are replaced."
  },
  {
    slug: "electrical-repair",
    title: "Electrical Diagnostics & Repair",
    shortTitle: "Electrical Repair",
    href: "/services/electrical-repair",
    icon: "electrical",
    image: "/images/Precision Battery Diagnostics in the Workshop.png",
    imageAlt: "Technician testing a vehicle battery with a multimeter",
    tags: ["Starting & charging", "Wiring", "Batteries"],
    description:
      "No-starts, dead batteries, charging faults and wiring issues traced and repaired."
  },
  {
    slug: "brake-services",
    title: "Brake Services",
    shortTitle: "Brakes",
    href: "/services/brake-services",
    icon: "brakes",
    image: "/images/Precision Brake Workshop Repair.png",
    imageAlt: "Technician working on a brake rotor and caliper",
    tags: ["Pads & rotors", "Calipers", "Brake fluid"],
    description:
      "Inspection and repair for squeaks, grinding, pulling or a soft pedal, so you stop with confidence."
  },
  {
    slug: "suspension-steering",
    title: "Suspension & Steering",
    shortTitle: "Suspension & Steering",
    href: "/services/suspension-steering",
    icon: "suspension",
    image: "/images/Precision Suspension Repair.png",
    imageAlt: "Technician repairing suspension components on a lifted vehicle",
    tags: ["Shocks & struts", "Ball joints", "Tie rods"],
    description:
      "Clunks, wandering and uneven tire wear corrected for a safer, smoother ride."
  },
  {
    slug: "general-automotive-repair",
    title: "General Repair & Maintenance",
    shortTitle: "General Repair",
    href: "/services/general-automotive-repair",
    icon: "general",
    image: "/images/High-Performance Brake Parts Workshop Display.png",
    imageAlt: "Brake rotor, caliper, pads and suspension parts laid out in the workshop",
    tags: ["Oil & fluids", "Belts & hoses", "Inspections"],
    description:
      "Everyday maintenance and repairs that keep your vehicle reliable and on the road."
  }
];

export const fleetService = {
  title: "Fleet Services & Maintenance Management",
  href: "/fleet-services",
  image: "/images/Fleet Maintenance in Action.png",
  imageAlt: "Technician with a clipboard inspecting a row of fleet vans",
  description:
    "Repair and maintenance management for business vehicles, so your fleet spends less time down and more time on the job.",
  highlights: [
    "Scheduled maintenance planning",
    "Diagnostics & repair",
    "Service records per vehicle",
    "Direct line to your technician"
  ]
};

// Specialty services live on one overview page for now. Individual pages
// are added once each service has enough real content.
export const specialtyServices: SpecialtyService[] = [
  {
    slug: "custom-builds",
    title: "Custom Builds",
    href: "/specialty-services#custom-builds",
    icon: "build",
    image: "/images/Neon Garage Mustang Build.png",
    imageAlt: "Custom Mustang build in a garage",
    description:
      "Planning and building automotive projects with a custom direction, from concept to completion.",
    tile: "featured"
  },
  {
    slug: "aftermarket-installations",
    title: "Aftermarket Installations",
    href: "/specialty-services#aftermarket-installations",
    icon: "install",
    image: "/images/Focused Mechanic Fitting Carbon-Fiber Splitter.png",
    imageAlt: "Technician fitting a carbon-fiber front splitter",
    description:
      "Installing selected aftermarket parts and upgrades, done right the first time.",
    tile: "wide"
  },
  {
    slug: "welding-fabrication",
    title: "Welding & Fabrication",
    href: "/specialty-services#welding-fabrication",
    icon: "weld",
    image: "/images/High-Performance Turbo Parts Showcase.png",
    imageAlt: "Welded stainless exhaust, turbo and intercooler parts in the workshop",
    description: "Fabrication and welding for repairs and custom projects.",
    tile: "standard"
  },
  {
    slug: "broken-bolt-extractions",
    title: "Broken Bolt Extractions",
    href: "/specialty-services#broken-bolt-extractions",
    icon: "bolt",
    image: "/images/Rusty Bolt Extraction Workshop Close-Up.png",
    imageAlt: "Bolt extractor removing a rusted, broken bolt from an engine part",
    description: "Careful removal of broken and seized fasteners.",
    tile: "standard"
  },
  {
    slug: "motorcycle-repairs",
    title: "Motorcycle Repairs",
    href: "/specialty-services#motorcycle-repairs",
    icon: "motorcycle",
    image: "/images/Motorcycle Parts on a Workshop Bench.png",
    imageAlt: "Motorcycle with brake rotor, shock and engine parts on a workshop bench",
    description: "Motorcycle repair, subject to scheduling availability.",
    byAvailability: true,
    tile: "wide"
  },
  {
    slug: "tractor-repairs",
    title: "Tractor Repairs",
    href: "/specialty-services#tractor-repairs",
    icon: "tractor",
    image: "/images/Sunset Tractor Parts Workshop.png",
    imageAlt: "Red farm tractor at sunset with alternator, starter and clutch parts",
    description: "Tractor repair, subject to scheduling availability.",
    byAvailability: true,
    tile: "wide"
  }
];

export function getMainService(slug: string) {
  return mainServices.find((service) => service.slug === slug);
}

/** Options for the appointment form's "service needed" field. */
export const serviceOptions = [
  ...mainServices.map((service) => service.title),
  "Fleet Services",
  ...specialtyServices.map((service) => service.title),
  "Not sure / Other"
];
