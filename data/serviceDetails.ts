/**
 * Page content for each main service and specialty service.
 * Draft copy: no prices, warranties or brand claims beyond what the owner
 * has confirmed. Review with the owner before launch.
 */

export type ServiceDetail = {
  intro: string;
  signsTitle?: string;
  signs: string[];
  work: string[];
};

export const serviceDetails: Record<string, ServiceDetail> = {
  "engine-repair": {
    intro:
      "When your engine runs rough, loses power, leaks or lights up the dashboard, the goal is simple: find the real cause and fix it right. Every engine job starts with a proper diagnosis, so you only pay for the repairs your vehicle actually needs.",
    signs: [
      "Check-engine light on or flashing",
      "Rough idle, misfires or hesitation",
      "Oil or coolant leaks",
      "Overheating or loss of power",
      "Knocking, ticking or unusual smoke"
    ],
    work: [
      "Diagnosis of engine performance concerns",
      "Ignition, fuel and air-intake repairs",
      "Gasket, seal and leak repairs",
      "Cooling-system repairs",
      "Timing components and engine maintenance items"
    ]
  },
  "automotive-diagnostics": {
    intro:
      "Guessing gets expensive. Diagnostics combine scan-tool data with hands-on testing to pinpoint what's actually wrong before any parts are replaced. Diagnostics start at $125 and include a general inspection of your vehicle.",
    signs: [
      "Warning lights on the dashboard",
      "Problems that come and go",
      "No-start or hard-start conditions",
      "Drop in fuel economy or performance",
      "An issue another shop couldn't find"
    ],
    work: [
      "Trouble-code and live-data review",
      "Hands-on testing of components and circuits",
      "General vehicle inspection included",
      "Clear explanation of findings",
      "A written estimate before any repairs"
    ]
  },
  "electrical-repair": {
    intro:
      "Modern vehicles depend on dozens of circuits, sensors and modules. Electrical problems are often intermittent and hard to track down, so they're traced step by step and repaired at the source, not covered up.",
    signs: [
      "No-start or slow cranking",
      "Battery that keeps going dead",
      "Dim or flickering lights",
      "Accessories or gauges not working",
      "Fuses that keep blowing"
    ],
    work: [
      "Battery, starter and charging-system testing",
      "Parasitic battery-drain diagnosis",
      "Wiring and connector repair",
      "Lighting and accessory circuits",
      "Sensor and module circuit diagnosis"
    ]
  },
  "brake-services": {
    intro:
      "Your brakes are your most important safety system. A thorough inspection shows exactly what needs attention now and what can wait, so you can stop with confidence without paying for work you don't need.",
    signs: [
      "Squealing or grinding when braking",
      "Vehicle pulls to one side",
      "Soft, low or spongy pedal",
      "Vibration through the pedal or wheel",
      "Brake warning light on"
    ],
    work: [
      "Complete brake inspection",
      "Brake pad and rotor replacement",
      "Caliper and hardware service",
      "Brake fluid service",
      "Brake line and hose repair"
    ]
  },
  "suspension-steering": {
    intro:
      "Worn suspension and steering parts affect handling, braking and tire life. Each component is inspected and checked for play, so the right parts are replaced and your vehicle drives straight and smooth again.",
    signs: [
      "Clunks or knocks over bumps",
      "Loose or wandering steering",
      "Uneven or rapid tire wear",
      "Excessive bouncing or body roll",
      "Vehicle sits lower on one corner"
    ],
    work: [
      "Suspension and steering inspection",
      "Shock and strut replacement",
      "Ball joints, tie rods and control arms",
      "Bushings and sway-bar links",
      "Steering component repair"
    ]
  },
  "general-automotive-repair": {
    intro:
      "Regular maintenance is the easiest way to avoid big repair bills. From routine service to everyday repairs, your vehicle gets careful, consistent attention that keeps it reliable.",
    signsTitle: "Good Times to Book",
    signs: [
      "Due for an oil change or service",
      "Maintenance reminder on the dash",
      "Fluid spots under the vehicle",
      "Squealing belts or worn wipers",
      "Before a road trip"
    ],
    work: [
      "Oil and filter changes",
      "Fluid checks and services",
      "Belts and hoses",
      "Filters, wipers and bulbs",
      "Multi-point inspections"
    ]
  }
};

export type SpecialtyDetail = {
  intro: string;
  examples: string[];
};

export const specialtyDetails: Record<string, SpecialtyDetail> = {
  "custom-builds": {
    intro:
      "Have a project in mind? Custom builds start with a conversation about your goals, budget and timeline, then move forward step by step with clear updates along the way.",
    examples: [
      "Project planning and consultation",
      "Engine and drivetrain work",
      "Fabrication for custom fitment",
      "Progress updates as the build moves forward"
    ]
  },
  "aftermarket-installations": {
    intro:
      "Upgrades only perform as well as they're installed. Aftermarket parts are fitted carefully and checked after installation, so they work the way they should.",
    examples: [
      "Intake and exhaust upgrades",
      "Lighting and accessory installs",
      "Suspension upgrades",
      "Bolt-on performance parts"
    ]
  },
  "welding-fabrication": {
    intro:
      "When a part doesn't exist, breaks or needs to fit something custom, welding and fabrication fill the gap, from repairs to one-off pieces for your project.",
    examples: [
      "Exhaust repairs and custom exhaust work",
      "Brackets and mounts",
      "Repairs to cracked or broken metal parts",
      "Custom fabrication for projects"
    ]
  },
  "broken-bolt-extractions": {
    intro:
      "A snapped or seized bolt can stop a repair cold. Careful extraction removes it without damaging the part around it, so the job can move forward.",
    examples: [
      "Seized and rusted bolts",
      "Snapped bolts and studs",
      "Stripped thread repair",
      "Exhaust manifold studs"
    ]
  },
  "motorcycle-repairs": {
    intro:
      "Motorcycle repairs are available subject to scheduling availability. Send a request with your bike's details and what's going on, and we'll let you know when it can be worked in.",
    examples: [
      "Diagnosis of running problems",
      "Brake service",
      "Electrical repairs",
      "General maintenance"
    ]
  },
  "tractor-repairs": {
    intro:
      "Tractor repairs are available subject to scheduling availability. Tell us about your tractor and the problem, and we'll confirm whether and when it can be scheduled.",
    examples: [
      "Diagnosis of running problems",
      "Starting and charging systems",
      "Electrical repairs",
      "General repairs and maintenance"
    ]
  }
};
