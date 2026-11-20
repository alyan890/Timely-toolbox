import Link from "next/link";
import { getCallHref, getTextHref } from "@/data/business";
import { appointmentHref } from "@/data/navigation";

/** Fixed Text / Call / Request bar on phones and tablets. */
export function MobileActionBar() {
  const textHref = getTextHref();
  const callHref = getCallHref();
  const columns = 1 + (textHref ? 1 : 0) + (callHref ? 1 : 0);

  return (
    <nav
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white/95 px-3 pb-[calc(0.625rem+env(safe-area-inset-bottom))] pt-2.5 shadow-[0_-8px_24px_rgb(0_0_0/0.08)] backdrop-blur lg:hidden"
    >
      <div
        className={`mx-auto grid max-w-xl gap-2 ${
          columns === 3 ? "grid-cols-[1fr_1fr_1.4fr]" : columns === 2 ? "grid-cols-2" : "grid-cols-1"
        }`}
      >
        {textHref ? (
          <a href={textHref} className="button-secondary min-h-[46px] px-2.5">
            Text
          </a>
        ) : null}
        {callHref ? (
          <a href={callHref} className="button-secondary min-h-[46px] px-2.5">
            Call
          </a>
        ) : null}
        <Link href={appointmentHref} className="button-primary min-h-[46px] px-2.5">
          {columns === 1 ? "Request an Appointment" : "Request"}
        </Link>
      </div>
    </nav>
  );
}
