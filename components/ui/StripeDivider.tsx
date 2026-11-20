/** Red / blue / black angled "speed stripes" on the top or bottom edge of a section. */
export function StripeDivider({ position = "top" }: { position?: "top" | "bottom" }) {
  return (
    <div
      className={`pointer-events-none absolute inset-x-0 z-10 h-2 overflow-hidden ${
        position === "top" ? "top-0" : "bottom-0"
      }`}
      aria-hidden="true"
    >
      <span className="absolute -left-[2%] top-0 h-full w-[46%] -skew-x-[35deg] bg-primary" />
      <span className="absolute left-[46%] top-0 h-full w-[9%] -skew-x-[35deg] bg-secondary" />
      <span className="absolute left-[57%] top-0 h-full w-[3%] -skew-x-[35deg] bg-foreground" />
    </div>
  );
}
