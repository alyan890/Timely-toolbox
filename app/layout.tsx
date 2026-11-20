import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { Navbar } from "@/components/layout/Navbar";
import { business } from "@/data/business";
import "./globals.css";

const headingFont = Barlow_Condensed({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap"
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(business.domain),
  title: {
    default: "The Timely Toolbox LLC",
    template: "%s | The Timely Toolbox LLC"
  },
  description:
    "Professional automotive repair and specialty services in Maricopa, Arizona.",
  applicationName: "The Timely Toolbox LLC",
  openGraph: {
    type: "website",
    siteName: "The Timely Toolbox LLC",
    locale: "en_US"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} flex min-h-screen flex-col pb-[76px] lg:pb-0`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:font-body focus:text-sm focus:font-semibold focus:shadow-subtle"
        >
          Skip to content
        </a>
        <Navbar />
        <div id="main-content" className="flex-1">
          {children}
        </div>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
