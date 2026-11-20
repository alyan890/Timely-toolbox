import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact & Appointment Requests",
  description:
    "Text, call or send an appointment request to The Timely Toolbox in Maricopa, Arizona. Requests are confirmed personally once availability is checked."
};

export default function ContactPage() {
  return (
    <main>
      <ContactSection isPage />
    </main>
  );
}
