import { permanentRedirect } from "next/navigation";
import { specialtyServices } from "@/data/services";

// Specialty services live on the /specialty-services overview for now.
// Old individual URLs send visitors to the matching section there. Replace
// this with a full page once a service has enough content of its own.
export function generateStaticParams() {
  return specialtyServices.map((service) => ({ slug: service.slug }));
}

export const dynamicParams = false;

export default async function SpecialtyServiceRedirect({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  permanentRedirect(`/specialty-services#${slug}`);
}
