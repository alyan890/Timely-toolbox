export type MainService = {
  slug: string;
  title: string;
  /** Short label used in the six-icon bar. */
  shortTitle: string;
  href: string;
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
  description: string;
  image: string;
  imageAlt: string;
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
    image: "/images/service-engine-repair.webp",
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
    image: "/images/service-diagnostics.webp",
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
    image: "/images/service-electrical.webp",
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
    image: "/images/service-brakes.webp",
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
    image: "/images/service-suspension.webp",
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
    image: "/images/service-general-repair.webp",
    imageAlt: "Brake rotor, caliper, pads and suspension parts laid out in the workshop",
    tags: ["Oil & fluids", "Belts & hoses", "Inspections"],
    description:
      "Everyday maintenance and repairs that keep your vehicle reliable and on the road."
  }
];

export const fleetService = {
  title: "Fleet Services & Maintenance Management",
  href: "/fleet-services",
  image: "/images/fleet-services.webp",
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
    image: "/images/specialty-custom-builds.webp",
    imageAlt: "Custom Mustang build in a garage",
    description:
      "Planning and building automotive projects with a custom direction, from concept to completion.",
    tile: "featured"
  },
  {
    slug: "aftermarket-installations",
    title: "Aftermarket Installations",
    href: "/specialty-services#aftermarket-installations",
    image: "/images/specialty-aftermarket.webp",
    imageAlt: "Technician fitting a carbon-fiber front splitter",
    description:
      "Installing selected aftermarket parts and upgrades, done right the first time.",
    tile: "wide"
  },
  {
    slug: "welding-fabrication",
    title: "Welding & Fabrication",
    href: "/specialty-services#welding-fabrication",
    image: "/images/specialty-welding.webp",
    imageAlt: "Welded stainless exhaust, turbo and intercooler parts in the workshop",
    description: "Fabrication and welding for repairs and custom projects.",
    tile: "standard"
  },
  {
    slug: "broken-bolt-extractions",
    title: "Broken Bolt Extractions",
    href: "/specialty-services#broken-bolt-extractions",
    image: "/images/specialty-bolt-extraction.webp",
    imageAlt: "Bolt extractor removing a rusted, broken bolt from an engine part",
    description: "Careful removal of broken and seized fasteners.",
    tile: "standard"
  },
  {
    slug: "motorcycle-repairs",
    title: "Motorcycle Repairs",
    href: "/specialty-services#motorcycle-repairs",
    image: "/images/specialty-motorcycle.webp",
    imageAlt: "Motorcycle with brake rotor, shock and engine parts on a workshop bench",
    description: "Motorcycle repair, subject to scheduling availability.",
    byAvailability: true,
    tile: "wide"
  },
  {
    slug: "tractor-repairs",
    title: "Tractor Repairs",
    href: "/specialty-services#tractor-repairs",
    image: "/images/specialty-tractor.webp",
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
