import type { MetadataRoute } from "next";
import { business } from "@/data/business";
import { mainServices } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "/",
    "/about",
    "/services",
    ...mainServices.map((service) => service.href),
    "/fleet-services",
    "/specialty-services",
    "/service-areas",
    "/contact",
    "/privacy"
  ];

  return pages.map((path) => ({
    url: `${business.domain}${path === "/" ? "" : path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path === "/privacy" ? 0.2 : 0.7
  }));
}
