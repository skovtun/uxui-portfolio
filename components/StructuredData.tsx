"use client";

import Script from "next/script";
import { CaseStudy } from "@/lib/projects";

interface StructuredDataProps {
  project: CaseStudy;
}

export function StructuredData({ project }: StructuredDataProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://sergeikovtun.com";
  const url = `${baseUrl}/work/${project.slug}`;

  const creativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": url,
    name: project.title,
    description: project.overview,
    image: project.image,
    datePublished: project.year,
    author: {
      "@type": "Person",
      name: "Sergei Kovtun",
      jobTitle: "Senior UX/UI & Product Designer"
    },
    about: {
      "@type": "Thing",
      name: project.areasOfEmphasis.join(", ")
    },
    keywords: project.areasOfEmphasis.join(", ")
  };

  return (
    <Script
      id={`structured-data-${project.slug}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }}
      strategy="afterInteractive"
    />
  );
}

