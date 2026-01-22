export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  image: string;
  overview: string;
  context: string;
  role: string;
  ownership: string[];
  collaboration: string[];
  problem: string;
  keyIssues: string[];
  solution: string;
  approach: string[];
  impact: string[];
  reflection: string;
  areasOfEmphasis: string[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "empower",
    title: "Empower",
    subtitle: "Design Systems & UI for a Large-Scale Financial Platform",
    year: "2024 — now",
    image: "/images/projects/empower.png",
    overview: "Designed and scaled a unified design system and core product UI for Empower — a large-scale financial platform providing tools for personal finance, retirement planning, and wealth management for both individual users and enterprise retirement plans.",
    context: "Empower operated a legacy corporate website and core financial application supported by an outdated UI kit that lacked consistency, scalability, and clear system rules.",
    role: "Senior UX/UI Designer",
    ownership: [
      "End-to-end design system architecture (components, tokens, patterns)",
      "Data-dense UI components (tables, dashboards, charts, complex layouts)",
      "Navigation structure and interaction models",
      "High-fidelity design and responsive layouts (desktop, tablet, mobile)",
      "Design quality, consistency, and scalability across products",
      "Design-to-development handoff and implementation alignment",
      "Design guidelines and system adoption across teams"
    ],
    collaboration: [
      "Product Managers (strategy alignment, feature prioritization, business impact measurement)",
      "Frontend Engineers (component architecture, implementation patterns, technical feasibility)",
      "Design peers (design reviews, system governance, mentorship of junior designers)",
      "Design System Council (established governance process with senior designers)",
      "Product Teams (adoption support, training sessions for designers across multiple product areas)"
    ],
    problem: "When I joined the team, the product relied on an outdated UI and a fragmented UI kit that did not scale well across teams or platforms. This created friction in the design-to-development workflow, inconsistent user experiences, and slowed feature delivery.",
    keyIssues: [
      "Lack of a single, shared design system across products",
      "Visual and behavioral inconsistencies between similar components",
      "Frequent design drift caused by ad-hoc modifications",
      "Friction between design and engineering due to unclear or inconsistent specifications",
      "Limited ability to scale UI efficiently as the product evolved",
      "These problems impacted development velocity, UI quality, and long-term maintainability."
    ],
    solution: "Designed and scaled a unified design system for Empower's corporate website and core financial application. Focused on reusable components, consistent UI patterns, and clear data-heavy interfaces to support complex financial workflows across teams and products. The system balanced consistency with flexibility, enabling teams to move faster while maintaining quality and improving user experience through consistent, predictable interactions across all touchpoints.",
    approach: [
      "Conducted comprehensive UI audit across hundreds of screens and components, identifying inconsistency patterns and documenting pain points from both design and engineering perspectives",
      "Interviewed designers and engineers to understand technical constraints, workflow challenges, and adoption barriers",
      "Designed scalable design system architecture with reusable components, comprehensive design tokens, and interaction patterns",
      "Built interactive Figma prototypes with component variants and states for validation with engineering teams",
      "Validated design decisions through internal usability reviews and cross-functional feedback sessions to ensure components met both user needs and technical requirements",
      "Established design review process with regular syncs with engineering leads and design system council meetings",
      "Created comprehensive documentation, component library, and onboarding materials for design system adoption",
      "Iterated through multiple major versions based on team feedback, usage patterns, and evolving product needs",
      "Made design decisions collaboratively, balancing consistency, reusability, technical feasibility, and long-term maintainability"
    ],
    impact: [
      "Reduced design-to-development handoff time from weeks to days through standardized components and clear specifications",
      "Accelerated feature shipping across multiple product teams by enabling faster component reuse and reducing design-engineering friction",
      "Significantly reduced recurring UI inconsistency issues through standardized components and design tokens",
      "Improved user experience through consistent, predictable interactions and reduced cognitive load across all Empower products",
      "Enabled designers to focus on product strategy by reducing time spent on repetitive component design through reusable library",
      "Improved design-engineering alignment and reduced rework through clearer specifications and collaborative review process",
      "Established design governance process adopted by designers across multiple product areas, ensuring long-term system quality"
    ],
    reflection: "This project reinforced my experience designing at a system level — balancing product requirements, engineering constraints, and long-term scalability while maintaining a high standard of visual and interaction quality across a complex financial platform. Leading the design system initiative required not just design skills, but strategic thinking, cross-functional influence, and the ability to drive adoption across multiple teams. Through direction-setting, establishing governance processes, and enabling team adoption, I influenced how design and engineering collaborated and how products were built at scale. The measurable impact on development velocity and design quality validated the strategic importance of investing in foundational design infrastructure. This experience taught me that great design systems are not just collections of components, but strategic enablers that unlock team productivity and product quality at scale. Key learnings included the importance of governance from day one, the need to balance consistency with flexibility, and how to build systems that evolve with product needs.",
    areasOfEmphasis: [
      "Product Design (UX/UI)",
      "Complex Dashboards & Data-heavy interfaces",
      "Design Systems & UI Kits",
      "FinTech",
      "Cross-functional collaboration"
    ]
  },
  {
    slug: "1inch",
    title: "1inch.io",
    subtitle: "UX/UI for DeFi Platform",
    year: "2023",
    image: "/images/projects/1inch.png",
    overview: "Designed and evolved the core web experience for 1inch — a leading DeFi aggregator processing millions of dollars in daily transaction volume across 383+ liquidity sources. Owned UX/UI for critical user flows including swap, staking, advanced trading (1inch Pro), and developer tools, while establishing design system foundations that improved delivery speed and consistency across the platform.",
    context: "1inch operates as a decentralized exchange aggregator, routing transactions across hundreds of liquidity sources to find optimal rates for users. The platform serves millions of wallet addresses, processes high-volume financial transactions, and caters to both advanced traders and users new to DeFi. UX quality is critical because transaction errors can result in significant financial loss, and users need clear information to make informed decisions in a space where transactions are irreversible.",
    role: "Senior Product Designer",
    ownership: [
      "UX/UI design for core web dApps: Swap interface, Staking & Delegate, 1inch Pro (advanced trading), Developer Portal",
      "Design system evolution & governance: introduced design tokens, standardized component library, established scalable architecture for light/dark themes",
      "UX research and validation: conducted usability testing, analyzed user behavior through product analytics, synthesized qualitative feedback",
      "Cross-functional collaboration with smart contract engineers, frontend developers, and product owners"
    ],
    collaboration: [
      "Smart Contract Engineers (gas optimization requirements, transaction flow constraints, security considerations)",
      "Frontend Developers (component architecture, implementation patterns, technical feasibility)",
      "Product Owners (feature prioritization, user metrics, business impact measurement)"
    ],
    problem: "Users faced high cognitive load when performing complex DeFi operations, leading to potential errors and friction in the transaction process. DeFi swaps involve multiple variables (slippage tolerance, gas costs, liquidity sources, price impact) that users must understand to make informed decisions, but existing interfaces either overwhelmed users with information or hid critical details.",
    keyIssues: [
      "Complex transaction data visualization — multiple variables needed to be presented clearly without overwhelming users",
      "Transaction confidence — users needed constant reassurance that transactions were progressing correctly",
      "Error handling — blockchain transactions can fail for many reasons, requiring clear, actionable error messages",
      "Performance perception — slow interfaces erode confidence in a space where transactions are irreversible",
      "Pro vs non-pro users — interface needed to support both advanced traders and DeFi newcomers through progressive disclosure"
    ],
    solution: "Designed streamlined swap interface with progressive disclosure, showing essential information (tokens, amounts, estimated output) first with advanced options accessible but not prominent. Implemented comprehensive transaction feedback system with real-time updates, clear error states, and confirmation patterns. Established design system with reusable DeFi-specific components, design tokens, and scalable architecture that improved delivery speed and consistency across Swap, Staking, Pro, and Developer Portal.",
    approach: [
      "Conducted market and competitor analysis of leading DeFi platforms to understand common patterns and identify UX gaps",
      "Performed UX research through user interviews with both DeFi power users and newcomers to understand cognitive load, security concerns, and transaction confidence factors",
      "Analyzed product analytics to identify drop-off points in transaction flows and measure the impact of design changes",
      "Conducted comprehensive audits of existing swap flows, identifying friction points and opportunities for simplification",
      "Collaborated with smart contract engineers to understand technical constraints: gas optimization requirements, transaction flow limitations, and contract interaction patterns",
      "Designed interaction patterns and information hierarchy using typography, spacing, and color to guide user attention while maintaining clarity",
      "Created comprehensive transaction status system with real-time updates, clear error states, and confirmation patterns including recovery flows",
      "Conducted usability testing sessions with target users to validate interface clarity, transaction confidence, and error handling",
      "Established design system with reusable DeFi-specific components, design tokens, and documentation that enabled faster component reuse and improved design-engineering alignment"
    ],
    impact: [
      "Product analytics showed improved user retention following UX improvements, with users more likely to complete transactions and return to the platform",
      "Design system and standardized components enabled faster feature shipping, with engineering teams able to implement new features more quickly using existing components",
      "Design system was adopted across multiple products (Swap, Staking, Pro, Developer Portal), ensuring visual and behavioral consistency",
      "Qualitative feedback from users indicated improved confidence in transactions, clearer understanding of transaction status, and better error recovery",
      "Reduced time spent on repetitive component design enabled designers to focus on product strategy and user research",
      "Engineering teams reported improved alignment and reduced rework through clearer specifications and component documentation"
    ],
    reflection: "Designing for DeFi requires balancing three critical factors: security, clarity, and efficiency. Users need to trust the system (security), understand what's happening (clarity), and complete transactions quickly (efficiency). The challenge was making complex blockchain mechanics feel simple without hiding critical information that users need to make informed decisions. Key learnings included the importance of progressive disclosure for DeFi interfaces — showing essential information upfront while making advanced options accessible. I also learned that transaction feedback is critical — users need constant reassurance that their transaction is progressing correctly, especially in a space where errors can be costly. The collaboration with smart contract engineers was essential — understanding gas optimization and contract constraints directly informed design decisions, ensuring that designs worked within technical realities while optimizing for user experience. This experience reinforced that great DeFi UX requires deep technical understanding, not just surface-level interface design. The work on 1inch's design system and component standardization directly informed my approach to ODOS, where I applied similar system thinking to create scalable, consistent interfaces for another DeFi platform.",
    areasOfEmphasis: [
      "Web3",
      "DeFi",
      "Product Design",
      "Design System"
    ]
  },
  {
    slug: "social-platform",
    title: "GETTR",
    subtitle: "Social Media Platform — Web & Mobile Product Design",
    year: "2022",
    image: "/images/projects/gettr.png",
    overview: "Led product design for GETTR, a social media platform serving 5.5M active users. Owned end-to-end UX/UI design across web and mobile platforms, established scalable design system architecture, and delivered 42 user flows and 300+ wireframes to support rapid feature development while maintaining consistency and quality under tight timelines.",
    context: "GETTR operated as a rapidly growing social media platform with 5.5M active users, requiring continuous UX and system-level decisions to support platform growth. As a mobile-first application, core interaction patterns and information architecture were established on mobile, then extended to web. The platform needed to ship multiple major features in parallel across web and mobile while preventing UX fragmentation. One of the main risks was UX degradation due to parallel feature development without a unified design foundation.",
    role: "Senior Product Designer",
    ownership: [
      "Feature expansion: end-to-end UX/UI design for core social features across web and mobile platforms, including content creation, feed interaction, discovery, and engagement flows",
      "UX stabilization: redesigned and standardized 42 user flows covering core social interactions to reduce fragmentation and improve consistency",
      "Design system scalability: established Atomic Design methodology, expanded component libraries, and aligned web and mobile design tokens as prerequisite infrastructure for delivery velocity",
      "Wireframing and rapid iteration: produced 300+ wireframes as fast decision-making and alignment tools for feature exploration, stakeholder alignment, and engineering handoff",
      "Feature-level UX decisions: owned interaction patterns, information architecture, and visual hierarchy for major product releases under time constraints",
      "Cross-platform consistency: ensured design alignment between web and mobile while respecting platform-specific patterns",
      "Design-to-development handoff: established specifications, component documentation, and collaboration processes that reduced implementation drift"
    ],
    collaboration: [
      "Product Managers (feature requirements, prioritization, user metrics, business objectives)",
      "Mobile Engineers (iOS/Android implementation constraints, performance considerations, platform-specific patterns)",
      "Frontend Engineers (web component architecture, technical feasibility, implementation patterns)",
      "Growth PMs (engagement metrics, A/B testing requirements, feature experimentation)",
      "Marketing Designers (brand consistency, campaign integration, visual asset coordination)"
    ],
    problem: "The platform faced UX fragmentation as new features were introduced rapidly without a unified design foundation. Legacy design patterns were inconsistent across web and mobile, creating friction when shipping parallel feature work. Design-to-development handoff lacked clear specifications, leading to implementation drift and rework. The absence of a scalable design system slowed feature delivery and increased maintenance overhead. High delivery pressure, incomplete requirements, and multiple stakeholders created tension between speed and quality.",
    keyIssues: [
      "Inconsistent navigation patterns and interaction models across web and mobile platforms",
      "Fragmented component usage leading to visual and behavioral inconsistencies",
      "Design-to-development handoff inefficiencies causing implementation delays and quality issues",
      "Limited design system coverage requiring custom design work for each feature",
      "Risk of UX degradation due to parallel feature development without systematic foundation"
    ],
    solution: "Established a scalable design system using Atomic Design methodology as enabling infrastructure, not parallel overhead. Created reusable component libraries for both web and mobile platforms with aligned design tokens. This system allowed multiple teams to ship features in parallel without UX drift. Redesigned core user flows with consistent interaction patterns and information architecture, balancing flexibility for feature-specific needs with standardization for speed and quality.",
    approach: [
      "Synthesized conflicting inputs from product managers, growth teams, and marketing through continuous alignment rather than upfront consensus, prioritizing based on user impact and technical feasibility",
      "Conducted pragmatic, time-boxed user behavior analysis through product analytics, identifying engagement patterns and friction points in core social loops",
      "Performed competitive benchmarking focusing on established patterns from leading social platforms, identifying what to adopt and what risks to avoid",
      "Audited existing design patterns across web and mobile, documenting inconsistencies and technical constraints to inform system architecture",
      "Designed 42 user flows covering content creation, feed interaction, discovery, profile management, and engagement features, highlighting the complexity of social platform UX",
      "Created 300+ wireframes as fast decision-making and alignment tools, exploring different approaches to information architecture, interaction patterns, and feature layouts before committing to high-fidelity designs",
      "Established Atomic Design system architecture with atoms, molecules, organisms, and templates for scalable component organization",
      "Developed design tokens for typography, spacing, color, and elevation that aligned web and mobile libraries, enabling cross-platform consistency",
      "Built component libraries in Figma with variants, states, and documentation for engineering handoff, reducing implementation time",
      "Made trade-off decisions balancing design quality, development speed, and platform constraints under time pressure, with partial data and incomplete requirements",
      "Established design review processes and handoff workflows to improve design-engineering alignment and reduce rework"
    ],
    impact: [
      "Improved UX consistency across web and mobile platforms through standardized component libraries and design tokens, reducing visual and behavioral fragmentation",
      "Accelerated feature delivery velocity by enabling component reuse and reducing time spent on repetitive design work",
      "Enhanced design-engineering alignment through clearer specifications, component documentation, and collaborative review processes, reducing implementation drift",
      "Reduced design-to-development handoff time by establishing structured workflows and documentation standards",
      "Enabled multiple teams to ship features in parallel without UX drift through scalable design system infrastructure",
      "Improved product maturity at scale (5.5M users) through systematic approach to design patterns and cross-platform consistency"
    ],
    reflection: "This project reinforced the importance of system thinking when designing at scale. Establishing a design system foundation early enabled the team to ship features faster while maintaining quality, but required upfront investment and ongoing governance. Working under tight timelines with multiple stakeholders and incomplete requirements taught me to make clear trade-offs between ideal design solutions and practical constraints. The experience of designing 42 flows and 300+ wireframes highlighted the value of rapid iteration and exploration as decision-making tools, not just deliverables. Balancing web and mobile design while respecting platform-specific patterns required careful consideration of user context and technical constraints. Key learnings included the importance of design system governance, the need for clear documentation in fast-moving environments, and how to maintain design quality while supporting rapid product development under pressure.",
    areasOfEmphasis: [
      "Product Design",
      "Mobile",
      "Design System",
      "Consumer"
    ]
  }
];
