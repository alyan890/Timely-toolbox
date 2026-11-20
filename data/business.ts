/**
 * Single source of truth for business details.
 *
 * Values set to `null` (or empty lists) have not been confirmed by the
 * business owner yet. Components must hide anything that depends on a
 * missing value instead of showing placeholder text.
 */

export type SocialLink = {
  label: string;
  href: string;
};

export const business = {
  name: "The Timely Toolbox LLC",
  shortName: "The Timely Toolbox",
  tagline: "Drive Safe. Stay on the Road.",
  domain: "https://www.thetimelytoolbox.com", // confirm www vs. non-www before launch
  city: "Maricopa",
  state: "Arizona",
  stateCode: "AZ",

  // Unconfirmed — fill in once supplied by the owner.
  phone: null as string | null, // display format, e.g. "(520) 555-0100"
  smsPhone: null as string | null, // if texts go to a different number
  email: null as string | null,
  hours: null as string | null,
  social: [] as SocialLink[],

  // Confirmed service areas only. Add nearby cities once the owner confirms them.
  serviceAreas: ["Maricopa, AZ"],

  // Reported by the owner. Exact certification areas, years and dealer
  // details still need confirming before adding specifics or logos.
  trustPoints: [
    {
      icon: "medal",
      title: "ASE Certified",
      text: "Certified training applied to every repair."
    },
    {
      icon: "building",
      title: "Dealer Trained",
      text: "Dealer-level training and repair procedures."
    },
    {
      icon: "pulse",
      title: "Advanced Diagnostics",
      text: "Finding the real cause before replacing parts."
    },
    {
      icon: "heart",
      title: "Honest & Dependable",
      text: "Clear estimates and no surprise work."
    }
  ],

  pricing: {
    laborRatePerHour: 125,
    diagnosticsFrom: 125,
    travelFeePerMile: 1
  }
} as const;

function digitsOnly(value: string) {
  return value.replace(/[^\d+]/g, "");
}

/** `tel:` link, or null when no phone number has been confirmed. */
export function getCallHref() {
  return business.phone ? `tel:${digitsOnly(business.phone)}` : null;
}

/** `sms:` link, or null when no texting number has been confirmed. */
export function getTextHref() {
  const number = business.smsPhone ?? business.phone;
  return number ? `sms:${digitsOnly(number)}` : null;
}
