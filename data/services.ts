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
  /** CSS object-position to keep the subject in frame when cropped. */
  imagePosition?: string;
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
    image: "/images/real-engine-repair.webp",
    imageAlt: "Gloved hands working on an engine during a repair",
    tags: ["Check-engine lights", "Leaks", "Misfires"],
    description:
      "Rough running, misfires, leaks or warning lights: we track down the cause and repair it properly."
  },
  {
    slug: "automotive-diagnostics",
    title: "Automotive Diagnostics",
    shortTitle: "Diagnostics",
    href: "/services/automotive-diagnostics",
    image: "/images/real-diagnostics.webp",
    imageAlt: "Inspection scope screen used to diagnose an engine",
    tags: ["Scan & test", "From $125", "General inspection"],
    description:
      "Scan tools and hands-on testing to find the real problem before any parts are replaced."
  },
  {
    slug: "electrical-repair",
    title: "Electrical Diagnostics & Repair",
    shortTitle: "Electrical Repair",
    href: "/services/electrical-repair",
    image: "/images/real-electrical.webp",
    imageAlt: "Vehicle wiring harness opened up for electrical repair",
    tags: ["Starting & charging", "Wiring", "Batteries"],
    description:
      "No-starts, dead batteries, charging faults and wiring issues traced and repaired."
  },
  {
    slug: "brake-services",
    title: "Brake Services",
    shortTitle: "Brakes",
    href: "/services/brake-services",
    image: "/images/real-brakes.webp",
    imageAlt: "Brake rotor and caliper on a vehicle during a brake job",
    tags: ["Pads & rotors", "Calipers", "Brake fluid"],
    description:
      "Inspection and repair for squeaks, grinding, pulling or a soft pedal, so you stop with confidence."
  },
  {
    slug: "suspension-steering",
    title: "Suspension & Steering",
    shortTitle: "Suspension & Steering",
    href: "/services/suspension-steering",
    image: "/images/real-suspension.webp",
    imageAlt: "New strut assemblies ready to install",
    tags: ["Shocks & struts", "Ball joints", "Tie rods"],
    description:
      "Clunks, wandering and uneven tire wear corrected for a safer, smoother ride."
  },
  {
    slug: "general-automotive-repair",
    title: "General Repair & Maintenance",
    shortTitle: "General Repair",
    href: "/services/general-automotive-repair",
    image: "/images/real-general-repair.webp",
    imageAlt: "Technician working under the hood of a red Lincoln",
    tags: ["Oil & fluids", "Belts & hoses", "Inspections"],
    description:
      "Everyday maintenance and repairs that keep your vehicle reliable and on the road."
  }
];

export const fleetService = {
  title: "Fleet Services & Maintenance Management",
  href: "/fleet-services",
  image: "/images/real-fleet-police-car.webp",
  imageAlt: "Police fleet vehicle in the shop for service",
  imagePosition: "50% 62%",
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
    image: "/images/custom-build-classic-chevy.webp",
    imageAlt: "Restored red classic Chevrolet flatbed truck",
    description:
      "Planning and building automotive projects with a custom direction, from concept to completion.",
    tile: "featured"
  },
  {
    slug: "aftermarket-installations",
    title: "Aftermarket Installations",
    href: "/specialty-services#aftermarket-installations",
    image: "/images/aftermarket-intake-install.webp",
    imagePosition: "50% 40%",
    imageAlt: "Red Banks Monster-Ram intake installed in a diesel truck engine bay",
    description:
      "Installing selected aftermarket parts and upgrades, done right the first time.",
    tile: "wide"
  },
  {
    slug: "welding-fabrication",
    title: "Welding & Fabrication",
    href: "/specialty-services#welding-fabrication",
    image: "/images/real-fabrication.webp",
    imageAlt: "Custom welded stainless piping and fabricated fuel cell on a project vehicle",
    description: "Fabrication and welding for repairs and custom projects.",
    tile: "standard"
  },
  {
    slug: "broken-bolt-extractions",
    title: "Broken Bolt Extractions",
    href: "/specialty-services#broken-bolt-extractions",
    image: "/images/real-bolt-extraction.webp",
    imageAlt: "Broken bolt removed from an intake manifold",
    description: "Careful removal of broken and seized fasteners.",
    tile: "standard"
  },
  {
    slug: "motorcycle-repairs",
    title: "Motorcycle Repairs",
    href: "/specialty-services#motorcycle-repairs",
    image: "/images/real-motorcycle.webp",
    imageAlt: "Black sport motorcycle on a stand in the shop",
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
