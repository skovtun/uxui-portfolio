"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader, LabelText, Section } from "@/components/shared";
import { prefersReducedMotion } from "@/lib/motion";
import { CASE_STUDIES } from "@/lib/projects";

// Map case studies to homepage format
const PROJECTS = CASE_STUDIES.map((project) => {
  // Map slugs to layout preferences
  const layoutMap: Record<string, "large" | "small"> = {
    "empower": "large",
    "1inch": "small",
    "social-platform": "small"
  };

  // Map slugs to descriptions (short, scannable, with scale and impact)
  const descriptionMap: Record<string, string> = {
    "empower": "Built and scaled an enterprise design system across multiple financial products, reducing handoff time from weeks to days",
    "1inch": "Redesigned high-risk DeFi swap flows serving millions of transactions, reducing cognitive load and improving transaction confidence",
    "social-platform": "Led UX and design system evolution for a 5.5M+ user social platform, enabling parallel feature delivery while maintaining consistency"
  };

  // Map slugs to categories
  const categoryMap: Record<string, string> = {
    "empower": project.subtitle,
    "1inch": project.subtitle,
    "social-platform": project.subtitle
  };

  return {
    slug: project.slug,
    title: project.title,
    description: descriptionMap[project.slug] || project.overview,
    category: categoryMap[project.slug] || project.subtitle,
    image: project.image,
    year: project.year,
    tags: project.areasOfEmphasis || [],
    layout: layoutMap[project.slug] || "small" as const
  };
});

function ProjectCard({ project, index, isLast }: { project: typeof PROJECTS[0], index: number, isLast?: boolean }) {
  const ref = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  
  useEffect(() => {
    setReducedMotion(prefersReducedMotion());
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: reducedMotion ? 0 : 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: reducedMotion ? 0 : 1, ease: "easeOut", delay: reducedMotion ? 0 : index * 0.1 }}
      className={`relative ${
        project.layout === 'large' 
        ? 'col-span-12' 
        : 'col-span-12 md:col-span-6'
      } ${isLast ? 'mb-0' : 'mb-24'}`}
    >
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 items-center">
          <div className={`xl:col-span-6 ${index % 2 === 1 && project.layout === 'large' ? 'xl:order-2' : ''}`}>
            <Link 
              href={`/work/${project.slug}`}
              className="relative block overflow-hidden rounded-4xl bg-foreground/5 aspect-video border border-foreground/3 group"
              aria-label={`View case study: ${project.title}`}
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src={project.image}
                  alt={`${project.title} - ${project.category}`}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
                  quality={85}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
              
              <div className="absolute inset-0 bg-background/20 group-hover:bg-background/60 transition-all duration-500 z-10" />
              
              {/* Hover Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none">
                <div className="group/button relative flex items-center gap-4 px-8 py-4 bg-foreground text-background rounded-full font-bold uppercase tracking-widest text-[10px] shadow-xl pointer-events-auto overflow-hidden transition-transform hover:scale-[1.02]">
                  <span className="relative z-10">View Case Study</span>
                  <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                  <div className="absolute inset-0 bg-accent translate-y-full group-hover/button:translate-y-0 transition-transform duration-500 ease-out" />
                </div>
            </div>
            </Link>
          </div>

          <div className="xl:col-span-6 flex flex-col items-center xl:items-start text-center xl:text-left">
          <div className="flex flex-col gap-6 items-center xl:items-start">
            <div className="flex items-center justify-center xl:justify-start gap-4">
              <LabelText variant="accent" tracking="extra-wide">Case Study {index + 1}</LabelText>
              <div className="h-px w-12 bg-foreground/10" />
              <LabelText variant="muted" tracking="extra-wide">{project.year}</LabelText>
            </div>
            
            <Link 
              href={`/work/${project.slug}`}
              className="group/heading block transition-colors hover:text-accent focus:outline-none focus-visible:ring-1 focus-visible:ring-accent/30 focus-visible:ring-offset-1 rounded-lg p-2 -ml-2"
              aria-label={`View case study: ${project.title}`}
            >
              <h3 className="text-3xl md:text-4xl xl:text-[3vw] font-bold tracking-tight text-foreground leading-tight transition-colors group-hover/heading:text-accent">
              {project.title} — <br />
                <span className="font-serif italic font-normal text-foreground/50 transition-colors group-hover/heading:text-foreground/70">{project.category}</span>
            </h3>
            </Link>
            
            <p className="text-foreground/60 leading-relaxed font-light">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4 justify-center xl:justify-start">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full border border-foreground/5 bg-foreground/2 text-[10px] text-foreground/50 font-bold uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>

            <Link 
              href={`/work/${project.slug}`}
              className="group flex items-center gap-5 text-foreground transition-colors hover:text-accent focus:outline-none focus-visible:ring-1 focus-visible:ring-accent/30 focus-visible:ring-offset-1 rounded-lg p-2 -ml-2"
              aria-label={`View case study: ${project.title}`}
            >
              <LabelText tracking="widest" className="transition-colors group-hover:text-accent">View Case Study</LabelText>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/10 group-hover:border-accent group-hover:bg-accent/5 transition-all" aria-hidden="true">
                <ArrowRight className="h-4 w-4 transition-colors group-hover:text-accent" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function WorkSection() {
  const [reducedMotion, setReducedMotion] = useState(false);
  
  useEffect(() => {
    setReducedMotion(prefersReducedMotion());
  }, []);

  return (
    <Section id="work" className="relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />
      
      <div className="flex flex-col mb-[72px] md:mb-[96px] relative z-10 items-center xl:items-start text-center xl:text-left">
        <motion.div 
          initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.5 }}
          className="flex items-center justify-center xl:justify-start gap-4 mb-8"
        >
          <div className="h-px w-12 bg-accent" />
          <LabelText variant="accent" tracking="extra-wide" className="text-[11px]">Portfolio</LabelText>
          <div className="h-px w-12 bg-accent xl:hidden" />
        </motion.div>
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 md:gap-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: reducedMotion ? 0 : 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reducedMotion ? 0 : 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center md:text-left w-full md:w-auto"
          >
            <SectionHeader variant="with-accent" accentText="Case Studies" className="text-center md:text-left mb-0" size="large">
              SELECTED
            </SectionHeader>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: reducedMotion ? 0 : 0.5, duration: reducedMotion ? 0 : 0.5 }}
            className="max-w-md text-center md:text-left w-full md:w-auto"
          >
            <p className="text-xl text-foreground/50 leading-relaxed font-light">
              A deep dive into complex problems, strategic design decisions, and high-impact solutions for global platforms.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col relative z-10">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} isLast={index === PROJECTS.length - 1} />
        ))}
      </div>
    </Section>
  );
}
