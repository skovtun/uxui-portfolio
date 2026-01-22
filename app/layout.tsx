import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Sergei Kovtun - UX/UI & Product Designer Portfolio",
    template: "%s | Sergei Kovtun"
  },
  description: "Senior UX/UI and Product Designer with 10+ years of experience. Specializing in complex systems, design systems, and data-heavy interfaces for FinTech, Enterprise, Web3, and Healthcare platforms.",
  keywords: ["UX Designer", "UI Designer", "Product Designer", "Design Systems", "FinTech Design", "Web3 Design", "Enterprise UX", "Portfolio"],
  authors: [{ name: "Sergei Kovtun" }],
  creator: "Sergei Kovtun",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sergeikovtun.com",
    siteName: "Sergei Kovtun Portfolio",
    title: "Sergei Kovtun - UX/UI & Product Designer",
    description: "Senior UX/UI and Product Designer specializing in complex systems and design systems for global platforms.",
    images: [
      {
        url: "/images/sergei-kovtun.png",
        width: 1200,
        height: 630,
        alt: "Sergei Kovtun - UX/UI & Product Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sergei Kovtun - UX/UI & Product Designer",
    description: "Senior UX/UI and Product Designer specializing in complex systems and design systems.",
    images: ["/images/sergei-kovtun.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add when you have Google Search Console verification
    // google: "your-verification-code",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://ux-ui.dev"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://ux-ui.dev";

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sergei Kovtun",
    jobTitle: "Senior UX/UI & Product Designer",
    description: "Senior UX/UI and Product Designer with 10+ years of experience. Specializing in complex systems, design systems, and data-heavy interfaces for FinTech, Enterprise, Web3, and Healthcare platforms.",
    url: baseUrl,
    image: `${baseUrl}/images/sergei-kovtun.png`,
    sameAs: [
      "https://www.linkedin.com/in/sergeikovtun/",
      "https://www.instagram.com/ux__ui.designer/",
      "https://www.behance.net/sergeikovtun",
    ],
    knowsAbout: [
      "UX Design",
      "UI Design",
      "Product Design",
      "Design Systems",
      "FinTech",
      "Web3",
      "Enterprise Software",
      "Healthcare Technology"
    ],
    award: "Runet Award 2017 - UX/UI Excellence of Mobile Operator App / Gazprom"
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sergei Kovtun Portfolio",
    url: baseUrl,
    description: "Portfolio of Sergei Kovtun - Senior UX/UI & Product Designer",
    author: {
      "@type": "Person",
      name: "Sergei Kovtun"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="antialiased">
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="0ececd8b-8b0c-4789-ab32-4294f9800147"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "Portfolio", "version": "1.0.0", "greeting": "hi"}'
        />
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
