import { Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WorkSection } from "@/components/WorkSection";
import { AboutSection, Footer, BrandsSection } from "@/components/ExtraSections";
import dynamic from "next/dynamic";

// Lazy load sections that are below the fold
const LazyBrandsSection = dynamic(() => 
  import("@/components/ExtraSections").then(mod => ({ default: mod.BrandsSection })),
  { ssr: true }
);

const LazyWorkSection = dynamic(() => 
  import("@/components/WorkSection").then(mod => ({ default: mod.WorkSection })),
  { ssr: true }
);

const LazyAboutSection = dynamic(() => 
  import("@/components/ExtraSections").then(mod => ({ default: mod.AboutSection })),
  { ssr: true }
);

const LazyFooter = dynamic(() => 
  import("@/components/ExtraSections").then(mod => ({ default: mod.Footer })),
  { ssr: true }
);

// Loading component for sections
function SectionSkeleton() {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Suspense fallback={<SectionSkeleton />}>
        <LazyBrandsSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <LazyWorkSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <LazyAboutSection />
      </Suspense>
      <Suspense fallback={null}>
        <LazyFooter />
      </Suspense>
    </main>
  );
}
