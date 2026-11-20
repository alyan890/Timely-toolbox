import { CalendarCheckIcon, CarIcon, ChatIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    title: "Text or Request",
    text: "Send a text, call, or fill in the request form with your vehicle and what's going on.",
    Icon: ChatIcon,
    iconClass: "bg-foreground text-white"
  },
  {
    title: "We Confirm a Time",
    text: "We check availability personally and get back to you to confirm your appointment.",
    Icon: CalendarCheckIcon,
    iconClass: "bg-primary text-white"
  },
  {
    title: "Back on the Road",
    text: "Your vehicle is diagnosed and repaired with care, and you're kept in the loop on the work.",
    Icon: CarIcon,
    iconClass: "bg-secondary text-dark-surface"
  }
];

export function HowItWorks() {
  return (
    <section aria-labelledby="how-it-works-heading" className="bg-background py-20">
      <div className="container-content">
        <Reveal>
          <SectionHeading
            id="how-it-works-heading"
            eyebrow="How It Works"
            title="Simple. Personal. On Your Schedule."
          />
        </Reveal>
        <ol className="mt-11 grid gap-5 lg:grid-cols-3">
          {steps.map(({ title, text, Icon, iconClass }, index) => (
            <li key={title}>
              <Reveal className="h-full" delay={index * 100}>
                <div className="relative h-full overflow-hidden rounded-[10px] border border-border bg-white px-6 pb-7 pt-7">
                  <span
                    className={`grid h-[52px] w-[52px] -skew-x-[10deg] place-items-center rounded-lg ${iconClass}`}
                  >
                    <Icon className="skew-x-[10deg]" />
                  </span>
                  <h3 className="mt-5 font-heading text-[1.625rem] font-extrabold uppercase italic leading-none text-foreground">
                    {title}
                  </h3>
                  <p className="relative z-10 mt-2 max-w-[17rem] font-body text-sm leading-6 text-muted-foreground">
                    {text}
                  </p>
                  <span
                    className="pointer-events-none absolute -bottom-1.5 right-3.5 font-heading text-[5.75rem] font-extrabold italic leading-[0.8] text-background [-webkit-text-stroke:1px_var(--color-border)]"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
