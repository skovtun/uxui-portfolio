import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CASE_STUDIES } from "@/lib/projects";
import { CaseStudyContent } from "@/components/CaseStudyContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = CASE_STUDIES.find(p => p.slug === slug);

  if (!project) {
    return {
      title: "Case Study Not Found",
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://sergeikovtun.com";
  const url = `${baseUrl}/work/${slug}`;

  return {
    title: `${project.title} - ${project.subtitle}`,
    description: project.overview,
    keywords: project.areasOfEmphasis,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      title: `${project.title} - ${project.subtitle}`,
      description: project.overview,
      url,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: `${project.title} - Case Study`,
        },
      ],
      publishedTime: project.year,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} - ${project.subtitle}`,
      description: project.overview,
      images: [project.image],
    },
  };
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((project) => ({
    slug: project.slug,
  }));
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = CASE_STUDIES.find(p => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <CaseStudyContent project={project} />;
}

