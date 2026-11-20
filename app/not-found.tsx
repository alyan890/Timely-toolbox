import Link from "next/link";
import { appointmentHref } from "@/data/navigation";

export default function NotFound() {
  return (
    <main className="container-content py-20 sm:py-28">
      <p className="eyebrow">Page not found</p>
      <h1 className="heading-display mt-4 max-w-3xl text-5xl sm:text-7xl">
        This page is still in the shop.
      </h1>
      <p className="mt-6 max-w-2xl font-body text-lg leading-8 text-muted-foreground">
        The page you were looking for is not available yet. Head back to the
        homepage or send us an appointment request.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="button-primary">
          Back to Home
        </Link>
        <Link href={appointmentHref} className="button-secondary">
          Request an Appointment
        </Link>
      </div>
    </main>
  );
}
