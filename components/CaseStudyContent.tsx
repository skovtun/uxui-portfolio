"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CaseStudy, CASE_STUDIES } from "@/lib/projects";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/ExtraSections";
import { StructuredData } from "@/components/StructuredData";
import {
  SectionHeader,
  ContentBlock,
  BulletList,
  TagList,
  LabelText,
  Section,
  SidebarInfo,
  SubsectionHeader,
  TwoColumnGrid,
  ReflectionBlock,
  ImageWithCaption,
  StatsBlock,
} from "@/components/shared";

interface CaseStudyContentProps {
  project: CaseStudy;
}

export function CaseStudyContent({ project }: CaseStudyContentProps) {
  const router = useRouter();
  
  // Find current project index and get previous/next projects (circular navigation)
  const currentIndex = CASE_STUDIES.findIndex(p => p.slug === project.slug);
  const previousProject = currentIndex > 0 
    ? CASE_STUDIES[currentIndex - 1] 
    : CASE_STUDIES[CASE_STUDIES.length - 1]; // Last project if current is first
  const nextProject = currentIndex < CASE_STUDIES.length - 1 
    ? CASE_STUDIES[currentIndex + 1] 
    : CASE_STUDIES[0]; // First project if current is last

  return (
    <>
      <StructuredData project={project} />
      <main className="min-h-screen bg-background text-foreground">
        <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-20 px-6 md:px-16 overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          <button 
            onClick={() => router.push("/#work")}
            className="group flex items-center gap-3 mb-12 md:mb-16 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent/30 focus-visible:ring-offset-1 rounded-md p-2 -ml-2"
            aria-label="Back to portfolio"
          >
            <LabelText 
              variant="muted" 
              tracking="widest" 
              className="group-hover:text-accent transition-colors"
            >
              <ArrowLeft className="h-4 w-4 inline mr-3" aria-hidden="true" />
              Back to Portfolio
            </LabelText>
          </button>
  
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 md:mb-20">
            <div className="lg:col-span-8">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[0.9] mb-8"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
              >
                {project.title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl md:text-2xl text-foreground/60 max-w-3xl font-light leading-relaxed"
              >
                {project.subtitle}
              </motion.p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <LabelText variant="muted" tracking="extra-wide">
                  {project.year}
                </LabelText>
              </motion.div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative aspect-video rounded-4xl overflow-hidden border border-foreground/3 bg-foreground/5 shadow-2xl"
          >
            <Image
              src={project.image}
              alt={`${project.title} - ${project.subtitle}`}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              quality={90}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent" aria-hidden="true" />
          </motion.div>
        </div>
      </section>

      {/* Content Section with Sticky Sidebar - Wrapper extends to Footer */}
      <div className="relative">
        <Section padding="large" borderTop>
          <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
              {/* Main Content */}
              <article className="lg:col-span-7 space-y-12 md:space-y-16">
              {/* Overview */}
              <div>
                <SectionHeader>Overview</SectionHeader>
                <ContentBlock>
                  <p className="text-xl text-foreground/60">
                    {project.overview}
                  </p>
                </ContentBlock>
              </div>

              {/* Context & Problem */}
              <TwoColumnGrid>
                <div>
                  <SubsectionHeader>Context</SubsectionHeader>
                  <p className="text-foreground/50 leading-relaxed">
                    {project.context}
                  </p>
                </div>
                <div>
                  <SubsectionHeader>Problem</SubsectionHeader>
                  <p className="text-foreground/50 leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              </TwoColumnGrid>

              {/* Key Issues */}
              <div>
                <SubsectionHeader className="mb-8">Key issues included</SubsectionHeader>
                <BulletList items={project.keyIssues} />
              </div>

              {/* My Responsibility - For GETTR */}
              {project.slug === "social-platform" && (
                <div>
                  <SectionHeader>My Responsibility</SectionHeader>
                  <p className="text-foreground/50 mb-6 leading-relaxed">
                    I was responsible for end-to-end UX and system-level design across the platform.
                  </p>
                  <BulletList items={project.ownership} maxWidth="2xl" />
                  <p className="text-foreground/50 mt-6 leading-relaxed">
                    I worked closely with PMs, stakeholders, and engineering to translate fast-moving requirements into coherent user experiences.
                  </p>
                </div>
              )}

              {/* Solution */}
              <div>
                <SectionHeader>Solution</SectionHeader>
                <ContentBlock variant="highlight">
                  <p className="text-xl text-foreground/80">
                    {project.solution}
                  </p>
                </ContentBlock>
              </div>

              {/* Results - For 1inch */}
              {project.slug === "1inch" && (
                <>
                  <div className="mb-6">
                    <Image
                      src="/images/case-studies/1inch-swap.png"
                      alt="1inch Swap Interface"
                      width={1200}
                      height={800}
                      className="w-full h-auto"
                      quality={90}
                    />
                  </div>
                  <ImageWithCaption
                    src="/images/case-studies/1inch-dapp-design.png"
                    alt="1inch dApp - Streamlined Swap Interface"
                    caption="Designed streamlined swap interface with progressive disclosure, showing essential information (tokens, amounts, estimated output) first with advanced options accessible but not prominent. Implemented comprehensive transaction feedback system with real-time updates, clear error states, and confirmation patterns."
                    width={1200}
                    height={800}
                    quality={90}
                  />
                  <ImageWithCaption
                    src="/images/case-studies/1inch-pro-app-design.png"
                    alt="1inch Pro - Advanced Trading Interface"
                    caption="Advanced trading interface designed for professional traders, featuring comprehensive charting, order management, multi-token swap capabilities, and advanced slippage and routing controls. The interface balances powerful functionality with clear information hierarchy to support complex trading workflows while maintaining usability."
                    width={1200}
                    height={800}
                    quality={90}
                  />
                  <ImageWithCaption
                    src="/images/case-studies/1inch-wallet-design.png"
                    alt="1inch Wallet - Web Wallet Interface"
                    caption="Convenient web wallet designed for storing and using cryptocurrency, featuring secure asset management, transaction capabilities, and seamless integration with 1inch DeFi services. The wallet interface prioritizes security, ease of use, and quick access to DeFi operations while maintaining clear visual hierarchy and intuitive navigation."
                    width={1200}
                    height={800}
                    quality={90}
                  />
                  <ImageWithCaption
                    src="/images/case-studies/1inch-delegate-staking.png"
                    alt="1inch Delegate & Staking - Governance Portal"
                    caption="Governance portal for delegating and staking 1inch tokens, enabling users to participate in protocol governance and earn rewards. The interface provides clear information about staking amounts, rewards, delegation options, and voting capabilities, making governance participation accessible while maintaining transparency and security."
                    width={1200}
                    height={800}
                    quality={90}
                  />
                  <ImageWithCaption
                    src="/images/case-studies/1inch-mobile-wallet.png"
                    alt="1inch Mobile Wallet - Mobile Application"
                    caption="Mobile wallet application for delegating and staking 1inch tokens, providing users with convenient access to governance participation and staking rewards on mobile devices. The mobile interface maintains consistency with web platform while optimizing for touch interactions and mobile screen constraints."
                    width={1200}
                    height={800}
                    quality={90}
                  />
                </>
              )}

              {/* Results - For GETTR */}
              {project.slug === "social-platform" && (
                <>
                  <ImageWithCaption
                    src="/images/case-studies/gettr-web-1.png"
                    alt="GETTR Web Interface - Primary Feed and Core Social Interactions"
                    caption="Primary web interface showcasing the redesigned feed and core social interactions. Demonstrates consistent navigation patterns, standardized components, and scalable information architecture across the platform."
                    width={1200}
                    height={800}
                    quality={90}
                  />
                  <ImageWithCaption
                    src="/images/case-studies/gettr-web-2.png"
                    alt="GETTR Web Interface - Feature Integration"
                    caption="Additional web interface view highlighting how new features were integrated using shared interaction patterns and design system components, enabling rapid feature delivery without UX fragmentation."
                    width={1200}
                    height={800}
                    quality={90}
                  />
                  <ImageWithCaption
                    src="/images/case-studies/gettr-web-3.png"
                    alt="GETTR Web Interface - Expanded Feature Surface"
                    caption="Expanded feature surface demonstrating how the platform supports parallel feature development while maintaining visual and behavioral consistency."
                    width={1200}
                    height={800}
                    quality={90}
                  />
                  <ImageWithCaption
                    src="/images/case-studies/gettr-mobile-ui.png"
                    alt="GETTR Mobile Experience"
                    caption="Mobile experience adapted from the shared design system, maintaining cross-platform consistency while respecting mobile interaction patterns and constraints."
                    width={1200}
                    height={800}
                    quality={90}
                  />
                </>
              )}

              {/* Result First - Only for Empower */}
              {project.slug === "empower" && (
                <>
                  <ImageWithCaption
                    src="/images/case-studies/empower-corporate-site-ui-kit.png"
                    alt="Empower Design System - Corporate Site UI Kit"
                    caption="Comprehensive UI component library for Empower's corporate website, featuring reusable components, design tokens, and interaction patterns that ensure visual and behavioral consistency across all touchpoints."
                    width={1200}
                    height={800}
                    quality={90}
                  />
                  <StatsBlock
                    items={[
                      {
                        value: "150+",
                        label: "Components",
                        sublabel: "Including 33 with documentation",
                      },
                      {
                        value: "18",
                        label: "Dashboard widgets",
                      },
                      {
                        value: "12+",
                        label: "Projects using 2.0",
                      },
                    ]}
                  />
                  <ImageWithCaption
                    src="/images/case-studies/empower-corporate-website.png"
                    alt="Empower Corporate Website - Desktop and Mobile Homepage"
                    caption="Empower's corporate homepage demonstrating responsive design and consistent user experience across desktop and mobile platforms. The page showcases how the design system enables seamless adaptation of hero sections, feature blocks, statistics displays, and call-to-action elements while maintaining visual and behavioral consistency across all device sizes."
                    width={1200}
                    height={800}
                    quality={90}
                  />
                  <ImageWithCaption
                    src="/images/case-studies/empower-web-app.png"
                    alt="Empower Financial Dashboard - Design System in Action"
                    caption="The design system in action: a comprehensive financial dashboard showcasing how reusable components, design tokens, and UX patterns come together to create a cohesive user experience. The dashboard demonstrates data-heavy interfaces, complex financial workflows, and consistent visual language across accounts, goals, retirement planning, and investment management sections."
                    width={1200}
                    height={800}
                    quality={90}
                  />
                </>
              )}

              {/* Approach */}
              <div>
                <SectionHeader>Approach</SectionHeader>
                <p className="text-foreground/50 mb-10 max-w-xl">
                  I followed a structured, iterative approach aligned with large product teams:
                </p>
                <BulletList items={project.approach} maxWidth="2xl" />
              </div>

              {/* Approach Sub-sections - For GETTR */}
              {project.slug === "social-platform" && (
                <div className="space-y-12 md:space-y-16">
                  {/* UX Research & Analysis */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                      UX Research & Analysis
                    </h3>
                    <p className="text-foreground/50 leading-relaxed mb-6">
                      I conducted continuous UX and market research to inform design decisions. This included competitive analysis of major social platforms, analysis of existing UX friction points, and evaluation of emerging interaction patterns. Research was pragmatic and delivery-oriented, optimized for speed and relevance rather than academic depth.
                    </p>
                    <p className="text-foreground/50 leading-relaxed mb-6">
                      Insights informed feature prioritization, information architecture, and interaction design.
                    </p>
                    <div className="mt-10">
                      <ImageWithCaption
                        src="/images/case-studies/gettr-research.png"
                        alt="GETTR Competitive and Product Research"
                        caption="Competitive and product research covering leading social platforms. Used to identify proven interaction patterns, engagement mechanics, and UX risks relevant to rapid feature expansion."
                        width={1200}
                        height={800}
                        quality={90}
                      />
                      <ImageWithCaption
                        src="/images/case-studies/gettr-ux-research.png"
                        alt="GETTR UX Research Artifacts"
                        caption="UX research artifacts capturing user needs, engagement patterns, and friction points. Insights informed prioritization and design decisions across multiple feature initiatives."
                        width={1200}
                        height={800}
                        quality={90}
                      />
                    </div>
                  </div>

                  {/* UX Design Execution */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                      UX Design Execution
                    </h3>
                    <p className="text-foreground/50 leading-relaxed mb-6">
                      The design process involved a high volume of structured UX work: 42 user flows designed and validated, 300+ wireframes created across features.
                    </p>
                    <p className="text-foreground/50 leading-relaxed mb-6">
                      Wireframing was used as a primary tool for fast exploration, stakeholder alignment, early risk detection, and reducing rework in high-fidelity stages.
                    </p>
                    <div className="mt-10">
                      <ImageWithCaption
                        src="/images/case-studies/gettr-wireframes.png"
                        alt="GETTR Wireframe Exploration"
                        caption="Early wireframe exploration for core and new features. Part of 300+ wireframes created to validate information architecture, interaction models, and edge cases before high-fidelity design."
                        width={1200}
                        height={800}
                        quality={90}
                      />
                      <ImageWithCaption
                        src="/images/case-studies/gettr-wireframes-2.png"
                        alt="GETTR Extended Wireframe Sets"
                        caption="Extended wireframe sets supporting 42 user flows. Enabled rapid iteration and alignment across product, design, and engineering under tight timelines."
                        width={1200}
                        height={800}
                        quality={90}
                      />
                    </div>
                  </div>

                  {/* Design System */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                      Design System
                    </h3>
                    <p className="text-foreground/50 leading-relaxed mb-6">
                      I evolved the GETTR Design System using Atomic Design methodology. Key contributions: standardized components across Web and App, unified interaction patterns, scalable component architecture, improved design-to-development handoff.
                    </p>
                    <p className="text-foreground/50 leading-relaxed mb-6">
                      The system enabled faster feature delivery while maintaining UX consistency under high pressure.
                    </p>
                    <div className="mt-10">
                      <ImageWithCaption
                        src="/images/case-studies/gettr-ui-kit.png"
                        alt="GETTR Design System - Atomic Design"
                        caption="GETTR design system built using Atomic Design methodology. Reusable components and design tokens enabled consistent UX across web and mobile while supporting rapid parallel development."
                        width={1200}
                        height={800}
                        quality={90}
                      />
                      <ImageWithCaption
                        src="/images/case-studies/gettr-workflow.png"
                        alt="GETTR Design-to-Development Workflow"
                        caption="Design-to-development workflow illustrating structured handoff, review, and governance processes that reduced coordination overhead and supported fast delivery."
                        width={1200}
                        height={800}
                        quality={90}
                      />
                      <ImageWithCaption
                        src="/images/case-studies/gettr-tasks.png"
                        alt="GETTR Design Process and Task Coordination"
                        caption="Design process and task coordination supporting simultaneous feature development while maintaining UX quality and system consistency."
                        width={1200}
                        height={800}
                        quality={90}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Research & Analysis - For 1inch */}
              {project.slug === "1inch" && (
                <>
                  <ImageWithCaption
                    src="/images/case-studies/1inch-market-ux-research.png"
                    alt="1inch Market & UX Research - Competitive Analysis"
                    caption="Conducted extensive market and competitor analysis of leading DeFi platforms to understand common patterns and identify UX gaps. The research included comprehensive analysis of swap flows, transaction feedback systems, error handling patterns, and information architecture across multiple platforms, informing design decisions and identifying opportunities for improvement."
                    width={1200}
                    height={800}
                    quality={90}
                  />
                  <ImageWithCaption
                    src="/images/case-studies/1inch-wireframes.png"
                    alt="1inch Wireframes - Design Exploration"
                    caption="Developed and evaluated various design ideas using wireframes to explore different approaches to information architecture, interaction patterns, and user flows. Wireframes enabled rapid iteration and validation of concepts before moving to high-fidelity designs, ensuring design decisions were grounded in user needs and technical constraints."
                    width={1200}
                    height={800}
                    quality={90}
                  />
                </>
              )}


              {/* Design System Details - For 1inch */}
              {project.slug === "1inch" && (
                <>
                  <ImageWithCaption
                    src="/images/case-studies/1inch-design-system.png"
                    alt="1inch Design System - UI Kit"
                    caption="As lead designer, developed the UI kit and design system for 1inch platform, establishing reusable DeFi-specific components, design tokens, and scalable architecture. The system enabled consistent implementation across Swap, Staking, Pro, and Developer Portal products, improving delivery speed and maintaining visual and behavioral consistency across all platform touchpoints."
                    width={1200}
                    height={800}
                    quality={90}
                  />
                </>
              )}

              {/* Deep Dive: Fusion Swap Adoption - For 1inch */}
              {project.slug === "1inch" && (
                <div className="pt-8 md:pt-12">
                  <ContentBlock variant="highlight" className="space-y-20">
                    <div>
                      <LabelText variant="accent" tracking="widest" className="mb-4 block">
                        Deep Dive — Problem Solving Case
                      </LabelText>
                      <SubsectionHeader size="default" className="mb-6">
                        Increasing Fusion Swap Adoption
                      </SubsectionHeader>
                    </div>
                    
                    <div className="space-y-16">
                      {/* Context */}
                      <div>
                        <h4 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                          Context
                        </h4>
                        <p className="text-foreground/50 leading-relaxed">
                          1inch is a DeFi aggregator operating at massive scale, combining hundreds of liquidity sources and serving millions of users. One of the key strategic directions was increasing adoption of Fusion swaps — a more profitable and technically advanced swap mode compared to the default (legacy) flow. Despite clear business advantages, Fusion usage remained relatively low, indicating friction in user understanding and interaction with the interface.
                        </p>
                      </div>

                      {/* Problem */}
                      <div>
                        <h4 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                          Problem
                        </h4>
                        <p className="text-foreground/50 leading-relaxed mb-6">
                          Product analytics revealed that less than 20% of users were actively using Fusion mode, despite it being positioned as the key value driver of the platform.
                        </p>
                        <p className="text-foreground/50 leading-relaxed mb-4">A deeper look showed:</p>
                        <BulletList 
                          items={[
                            "Users frequently opened Fusion but abandoned the flow",
                            "Many users switched back to legacy mode before confirming a swap",
                            "Advanced settings and pricing controls introduced high cognitive load",
                            "The value of Fusion presets was not obvious at the decision-making moment"
                          ]} 
                          maxWidth="2xl"
                        />
                      </div>

                      {/* What I Did */}
                      <div>
                        <h4 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                          What I Did (Hands-on Work)
                        </h4>
                        <p className="text-foreground/50 leading-relaxed mb-8">
                          I worked end-to-end on improving the Fusion swap experience, combining data analysis, UX research, interface design, and validation.
                        </p>

                        <div className="space-y-16">
                          {/* 1. Behavioral Analysis */}
                          <div>
                            <h5 className="text-lg font-semibold text-foreground mb-4">1. Behavioral Analysis & Analytics</h5>
                            <p className="text-foreground/50 leading-relaxed mb-4">
                              Analyzed detailed user flow data to identify drop-off points. Mapped transitions between Fusion, Custom, and Legacy modes. Identified critical moments where users abandoned or downgraded the swap flow. This helped isolate where and why users were leaving Fusion.
                            </p>
                            <ImageWithCaption
                              src="/images/case-studies/1inch-data-research.png"
                              alt="1inch Behavioral Analysis & Analytics"
                              caption="Detailed analysis of user flow data identifying drop-off points and transitions between Fusion, Custom, and Legacy modes, helping isolate where and why users were leaving Fusion."
                              width={1200}
                              height={800}
                              quality={90}
                            />
                            <ImageWithCaption
                              src="/images/case-studies/1inch-swap-inerface.png"
                              alt="1inch Fusion Swap Interface - Problematic Interface"
                              caption="The original Fusion swap interface that needed improvement. The interface suffered from unclear rate range presentation, low visibility of Fusion presets, excessive visual noise in advanced settings, and difficulty scanning critical values (receive / min receive / rate impact). These issues contributed to user confusion and abandonment."
                              width={1200}
                              height={800}
                              quality={90}
                            />
                          </div>

                          {/* 2. UX Research & User Journey Mapping */}
                          <div>
                            <h5 className="text-lg font-semibold text-foreground mb-4">2. UX Research & User Journey Mapping</h5>
                            <p className="text-foreground/50 leading-relaxed mb-4">
                              Conducted internal reviews and usability sessions, collecting qualitative feedback from users and stakeholders. Reviewed real swap scenarios to understand confusion around presets, hesitation caused by advanced parameters, and lack of confidence at the confirmation stage. Created a detailed user journey from opening Fusion to swap confirmation, mapping emotional states, hesitation points, and trust signals. This combined research approach revealed critical friction points where users lost confidence or abandoned the flow.
                            </p>
                            <ImageWithCaption
                              src="/images/case-studies/1inch-interview.png"
                              alt="1inch UX Research & Internal Validation"
                              caption="Conducted internal reviews and usability sessions, collecting qualitative feedback from users and stakeholders to understand confusion around presets, hesitation caused by advanced parameters, and lack of confidence at the confirmation stage."
                              width={1200}
                              height={800}
                              quality={90}
                            />
                            <ImageWithCaption
                              src="/images/case-studies/1inch-user-journey.png"
                              alt="1inch User Journey Mapping"
                              caption="Detailed user journey mapping from opening Fusion to swap confirmation, identifying emotional states, hesitation points, and trust signals. This journey map directly informed design decisions by highlighting where users needed more clarity, confidence, and guidance throughout the swap process."
                              width={1200}
                              height={800}
                              quality={90}
                            />
                          </div>

                          {/* 3. UX & UI Design Improvements */}
                          <div>
                            <h5 className="text-lg font-semibold text-foreground mb-4">3. UX & UI Design Improvements</h5>
                            <p className="text-foreground/50 leading-relaxed mb-4">
                              I redesigned key parts of the Fusion swap interface with a focus on clarity, confidence, and progressive disclosure: simplified presentation of rate ranges and outcomes, improved visibility and meaning of Fusion presets, reduced visual noise in advanced settings, made critical values (receive / min receive / rate impact) easier to scan, and designed clearer separation between default and advanced decision paths. All changes were implemented within the existing design system and aligned with platform-wide UI standards.
                            </p>
                          </div>

                          {/* 4. Solution Design & Implementation */}
                          <div>
                            <h5 className="text-lg font-semibold text-foreground mb-4">4. Solution Design & Implementation</h5>
                            <p className="text-foreground/50 leading-relaxed mb-4">
                              Based on insights from user journey mapping and interview feedback, I translated identified friction points into specific design solutions. The journey map revealed that users needed clearer value communication at preset selection, more confidence signals during rate calculation, and simplified decision paths at confirmation. Interview insights about confusion around presets led to redesigning preset presentation with clearer value propositions. Hesitation points around advanced parameters informed the progressive disclosure pattern. The lack of confidence at confirmation stage drove the addition of clear transaction summary and trust indicators. Each design decision directly addressed a specific pain point identified in the research phase.
                            </p>
                            <p className="text-foreground/50 leading-relaxed mb-4">
                              Implementation followed an iterative approach: initial designs were validated through internal reviews, refined based on feedback, and tested with target users to ensure each change reduced friction rather than adding complexity. The final solution maintained design system consistency while addressing all critical user journey pain points.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Result & Impact */}
                      <div>
                        <div className="mb-8">
                          <ImageWithCaption
                            src="/images/case-studies/1inch-user-case-result.png"
                            alt="1inch Fusion Swap - Results & Impact"
                            caption="Results showing increased Fusion swap adoption, reduced abandonment, and improved user confidence. The redesigned interface successfully addressed cognitive load issues and made Fusion presets more accessible, leading to measurable improvements in usage and user satisfaction."
                            width={1200}
                            height={800}
                            quality={90}
                          />
                        </div>
                        <h4 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                          Result & Impact
                        </h4>
                        <p className="text-foreground/50 leading-relaxed mb-6">
                          After implementation:
                        </p>
                        <BulletList 
                          items={[
                            "Fusion swap usage increased (measured and confirmed by product analytics)",
                            "Users were less likely to abandon or switch to legacy mode",
                            "Feedback indicated higher confidence and understanding of Fusion behavior",
                            "The redesigned flow reduced disengagement caused by complex settings",
                            "The solution was validated through usability testing and internal reviews",
                            "Retention and efficiency improvements were measured and confirmed by product analytics and team-wide evaluation"
                          ]} 
                          maxWidth="2xl"
                        />
                      </div>
                    </div>
                  </ContentBlock>
                </div>
              )}

              {/* Design System Details - Only for Empower */}
              {project.slug === "empower" && (
                <>
                  <ImageWithCaption
                    src="/images/case-studies/empower-design-system.png"
                    alt="Empower Design System - UI Components: From Library to System"
                    caption="System architecture showing the evolution from a component library to a comprehensive design system, including foundational elements (typography, colors, icons), platform considerations (desktop and mobile), and key principles: single source of truth, federated adoption, built-in accessibility, and design-development alignment."
                    width={1200}
                    height={800}
                    quality={90}
                  />
                  <ImageWithCaption
                    src="/images/case-studies/empower-ui-variables.png"
                    alt="Empower Design System - Design Variables and Tokens"
                    caption="Comprehensive design token system including color palettes, typography scales, spacing units, and semantic variables that enable consistent theming and easy maintenance across all platforms and products."
                    width={1200}
                    height={800}
                    quality={90}
                  />
                  <ImageWithCaption
                    src="/images/case-studies/empower-pictogram-style.png"
                    alt="Empower Design System - Pictogram Style Guide"
                    caption="Visual style guide for pictograms and iconography, ensuring consistent visual language and clear communication across financial interfaces and data visualizations."
                    width={1200}
                    height={800}
                    quality={90}
                  />
                  <ImageWithCaption
                    src="/images/case-studies/empower-components-states.png"
                    alt="Empower Design System - Component States and Interactions"
                    caption="Comprehensive state definitions for interactive components including default, hover, active, focus, disabled, loading, and error states. Each state was carefully designed to provide clear visual feedback and maintain accessibility standards, ensuring consistent user experience across all interactions."
                    width={1200}
                    height={800}
                    quality={90}
                  />
                  <ImageWithCaption
                    src="/images/case-studies/empower-components.png"
                    alt="Empower Design System - Core Components"
                    caption="Core reusable components designed for financial interfaces, including data tables, form inputs, navigation elements, and interactive controls that support complex financial workflows."
                    width={1200}
                    height={800}
                    quality={90}
                  />
                  <ImageWithCaption
                    src="/images/case-studies/empower-breakpoints.png"
                    alt="Empower Design System - Responsive Breakpoints and Layout System"
                    caption="Responsive design system with defined breakpoints and layout grids ensuring consistent experiences across desktop, tablet, and mobile devices while maintaining usability for data-heavy financial interfaces."
                    width={1200}
                    height={800}
                    quality={90}
                  />
                  <figure className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="space-y-6"
                    >
                      <Image
                        src="/images/case-studies/empower-components-use-cases.png"
                        alt="Empower Design System - Component Use Cases and Documentation"
                        width={1200}
                        height={800}
                        className="w-full h-auto"
                        quality={90}
                      />
                      <Image
                        src="/images/case-studies/empower-components-use-cases-2.png"
                        alt="Empower Design System - Advanced Component Patterns"
                        width={1200}
                        height={800}
                        className="w-full h-auto"
                        quality={90}
                      />
                    </motion.div>
                    <figcaption className="text-sm text-foreground/50 leading-relaxed font-light text-center max-w-3xl mx-auto">
                      Comprehensive component composition documentation demonstrating thorough exploration of all possible combinations for using the same component across different breakpoints. The design system includes detailed guidelines for desktop and mobile variations, ensuring consistent implementation while providing flexibility for various use cases and screen sizes.
                    </figcaption>
                  </figure>
                  <ImageWithCaption
                    src="/images/case-studies/empower-ux-patterns.png"
                    alt="Empower Design System - UX Patterns and Interaction Models"
                    caption="Documented UX patterns for common financial workflows including data entry, transaction flows, dashboard navigation, and information architecture that guide consistent user experiences across products."
                    width={1200}
                    height={800}
                    quality={90}
                  />
                  <ImageWithCaption
                    src="/images/case-studies/empower-animation.png"
                    alt="Empower Design System - Animation Specifications"
                    caption="Animation and motion design guidelines that enhance user understanding of financial data transitions, state changes, and system feedback while maintaining performance and accessibility standards."
                    width={1200}
                    height={800}
                    quality={90}
                  />
                  <ImageWithCaption
                    src="/images/case-studies/empower-design-development-workflow.png"
                    alt="Empower Design System - Design to Development Workflow"
                    caption="Established collaborative workflow between design and engineering teams, ensuring seamless handoff, clear specifications, and alignment throughout the product development lifecycle."
                    width={1200}
                    height={800}
                    quality={90}
                  />
                </>
              )}

              {/* Impact */}
              <div>
                <SectionHeader>Impact</SectionHeader>
                <BulletList items={project.impact} maxWidth="2xl" />
              </div>

              {/* Reflection */}
              <div>
                <SectionHeader>Reflection</SectionHeader>
                <ReflectionBlock>{project.reflection}</ReflectionBlock>
              </div>

              {/* Areas of Emphasis */}
              <div className="pt-24 md:pt-32 border-t border-foreground/10">
                <SectionHeader variant="with-accent" accentText="Emphasis">
                  AREAS OF
                </SectionHeader>
                <TagList tags={project.areasOfEmphasis} justify="start" />
              </div>
            </article>

              {/* Sidebar / Details - Sticky until Footer */}
              <aside className="lg:col-span-5">
                <div className="lg:sticky lg:top-28 lg:h-fit">
                  <SidebarInfo
                    title="Role & Ownership"
                    items={[
                      {
                        label: "Role",
                        value: project.role,
                      },
                      {
                        label: "Ownership",
                        items: project.ownership,
                      },
                      {
                        label: "Collaboration",
                        items: project.collaboration,
                      },
                    ]}
                  />
                </div>
              </aside>
            </div>
          </div>
        </Section>
        
        {/* Case Study Navigation */}
        <Section padding="large" borderTop>
          <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Previous Project */}
              <Link
                href={`/work/${previousProject.slug}`}
                className="group relative flex items-center gap-6 overflow-hidden rounded-3xl bg-linear-to-br from-foreground/3 to-transparent border border-foreground/5 hover:border-accent/30 transition-all hover:scale-[1.01] p-6 md:p-8 flex-row-reverse"
              >
                <div className="relative w-32 h-20 md:w-40 md:h-24 shrink-0 overflow-hidden rounded-2xl aspect-video">
                  <Image
                    src={previousProject.image}
                    alt={`${previousProject.title} - ${previousProject.subtitle}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="160px"
                    quality={85}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-background/40 transition-all duration-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-3">
                    <ArrowLeft className="h-4 w-4 text-foreground/50 group-hover:text-accent transition-colors shrink-0" />
                    <LabelText variant="muted" tracking="widest" className="text-foreground/50 group-hover:text-accent transition-colors">
                      Previous Case
                    </LabelText>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                    {previousProject.title}
                  </h3>
                  <p className="text-sm md:text-base text-foreground/50 leading-relaxed font-light line-clamp-2">
                    {previousProject.subtitle}
                  </p>
                </div>
              </Link>

              {/* Next Project */}
              <Link
                href={`/work/${nextProject.slug}`}
                className="group relative flex items-center gap-6 overflow-hidden rounded-3xl bg-linear-to-br from-foreground/3 to-transparent border border-foreground/5 hover:border-accent/30 transition-all hover:scale-[1.01] p-6 md:p-8"
              >
                <div className="relative w-32 h-20 md:w-40 md:h-24 shrink-0 overflow-hidden rounded-2xl aspect-video">
                  <div className="absolute inset-0 bg-foreground/5 animate-pulse" aria-hidden="true" />
                  <Image
                    src={nextProject.image}
                    alt={`${nextProject.title} - ${nextProject.subtitle}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="160px"
                    quality={85}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-background/40 transition-all duration-500" />
                </div>
                <div className="flex-1 min-w-0 text-right">
                  <div className="flex items-center justify-end gap-3 mb-3">
                    <LabelText variant="muted" tracking="widest" className="text-foreground/50 group-hover:text-accent transition-colors">
                      Next Case
                    </LabelText>
                    <ArrowRight className="h-4 w-4 text-foreground/50 group-hover:text-accent transition-colors shrink-0" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                    {nextProject.title}
                  </h3>
                  <p className="text-sm md:text-base text-foreground/50 leading-relaxed font-light line-clamp-2">
                    {nextProject.subtitle}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </Section>
        
        {/* Footer inside wrapper so sticky works until here */}
        <Footer />
      </div>
      </main>
    </>
  );
}

