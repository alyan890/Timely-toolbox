import { business } from "@/data/business";

/** Compact pricing facts (confirmed figures only). */
export function PricingNote({ className = "" }: { className?: string }) {
  const { pricing } = business;

  return (
    <div className={`relative overflow-hidden rounded-[10px] border border-border bg-background p-6 ${className}`}>
      <span className="absolute left-0 top-0 h-[5px] w-[70px] -translate-x-2 -skew-x-[35deg] bg-primary" aria-hidden="true" />
      <p className="font-heading text-[1.5rem] font-extrabold uppercase italic leading-none text-foreground">
        Straightforward Pricing
      </p>
      <ul className="mt-4 space-y-2 font-body text-sm leading-6 text-muted-foreground">
        <li>
          <strong className="text-foreground">${pricing.laborRatePerHour}/hour</strong> labor rate
        </li>
        <li>
          <strong className="text-foreground">Diagnostics from ${pricing.diagnosticsFrom}</strong>, including a general inspection
        </li>
        <li>
          <strong className="text-foreground">${pricing.travelFeePerMile}/mile</strong> travel fee outside the service area
        </li>
        <li>Every repair gets an estimate before work begins.</li>
      </ul>
    </div>
  );
}
