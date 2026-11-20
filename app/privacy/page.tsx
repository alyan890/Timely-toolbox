import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How The Timely Toolbox LLC handles the information you send through this website.",
  robots: { index: false }
};

// Plain-language starter policy. Have the owner review it before launch.
const sections = [
  {
    title: "Information You Send Us",
    body: [
      "When you submit an appointment request, we receive the details you enter: your name, phone number, email address (if provided), vehicle details, the service you need, your preferred date and any notes.",
      "We use this information only to respond to your request, check availability, confirm appointments and communicate with you about your vehicle."
    ]
  },
  {
    title: "How It's Stored",
    body: [
      "Appointment requests are delivered to the business by email and kept in a private record so we can follow up. We do not sell, rent or share your information with third parties for marketing."
    ]
  },
  {
    title: "Texts and Calls",
    body: [
      "If you text or call us, your number and messages are used only to communicate with you about your request or service."
    ]
  },
  {
    title: "Website Basics",
    body: [
      "Like most websites, our hosting provider may keep standard technical logs (such as browser type and pages visited) to keep the site secure and working."
    ]
  },
  {
    title: "Your Choices",
    body: [
      "You can ask us to update or delete the information you've sent by contacting the business directly."
    ]
  }
];

export default function PrivacyPage() {
  return (
    <main>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
        eyebrow="Privacy"
        title="Privacy Policy"
        intro={`How ${business.name} handles the information you send through this website.`}
      />
      <section className="bg-background py-16 sm:py-20">
        <div className="container-content max-w-3xl space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-heading text-[1.75rem] font-extrabold uppercase italic leading-none text-foreground">
                {section.title}
              </h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="mt-3 font-body text-base leading-7 text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
