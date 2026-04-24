import fs from "node:fs";
import path from "node:path";
import Script from "next/script";

const homeHtml = fs.readFileSync(
  path.join(process.cwd(), "content", "home.html"),
  "utf8",
);

export default function Home() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const clinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Geeta Diabetes And Endocrine Centre",
    url: siteUrl,
    image: `${siteUrl}/images/doctor.jpeg`,
    logo: `${siteUrl}/images/logo.png`,
    telephone: "+91 96030 62942",
    medicalSpecialty: "Endocrinology",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "C/O Focus Diagnostics, Chandramama Children Hospital Opposite Road, Sundaraiah Bhavan Road",
      addressLocality: "Ongole",
      addressRegion: "Andhra Pradesh",
      postalCode: "523001",
      addressCountry: "IN",
    },
    areaServed: "Andhra Pradesh",
    availableLanguage: ["English", "Telugu", "Hindi"],
    sameAs: ["https://wa.me/919603062942", "https://maps.app.goo.gl/3ekpf8Zox9pge8CKA"],
    physician: {
      "@type": "Physician",
      name: "Dr. Geeta Annamaneni",
      medicalSpecialty: "Endocrinology",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "14:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "18:00",
        closes: "20:00",
      },
    ],
  };

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: homeHtml }} />
      <Script
        id="clinic-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
      />
      <Script src="/js/script.js" strategy="afterInteractive" />
    </>
  );
}
