import { BUSINESS } from "@/lib/business";

/**
 * LocalBusiness structured data for local SEO (Google Business rich results).
 * Rendered once in the root layout.
 */
export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS.name,
    description: BUSINESS.tagline,
    url: BUSINESS.siteUrl,
    image: `${BUSINESS.siteUrl}/images/hero/cafe-workstations.jpg`,
    telephone: BUSINESS.phones[0].e164,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      addressCountry: "NG",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: BUSINESS.hours.schemaDays,
        opens: BUSINESS.hours.schemaOpens,
        closes: BUSINESS.hours.schemaCloses,
      },
    ],
    priceRange: "₦₦",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
