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
    subtitle: "Design System at Scale",
    year: "2024 — now",
    image: "/images/projects/empower.png",
    overview: "I led the design and scaling of a unified design system that became the foundational UI infrastructure for Empower's large-scale financial platform. The system supported multiple product teams and complex financial workflows, enabling consistent user experiences and significantly improving design–engineering efficiency across the organization.",
    context: "Empower is a large-scale financial platform serving millions of users across personal finance, retirement planning, and enterprise retirement products. Prior to this initiative, teams worked with fragmented UI patterns, inconsistent components, and ad-hoc design decisions. As the platform scaled, these inconsistencies increasingly slowed development, created UX debt, and introduced risk into core financial flows.",
    role: "Senior UX/UI Designer",
    ownership: [
      "Defined system architecture, interaction principles, and visual foundations",
      "Designed and maintained tokens, components, and responsive patterns",
      "Established governance processes and contribution guidelines",
      "Led internal reviews and alignment with design and engineering teams",
      "Ensured system adoption across products and teams"
    ],
    collaboration: [
      "Product Managers — strategy alignment, feature prioritization, business impact",
      "Frontend Engineers — component architecture, implementation patterns, technical feasibility",
      "Design System Council — governance process and system evolution",
      "Product Teams — adoption support and training across multiple product areas"
    ],
    problem: "As the platform scaled, the lack of a shared design system became a structural bottleneck. Teams duplicated work, component behavior drifted across products, and design–engineering alignment degraded. As a result, feature delivery slowed and maintaining consistent, predictable UX at scale became increasingly difficult.",
    keyIssues: [
      "No shared design system across products, leading to duplicated work",
      "Inconsistent component behavior and visual drift between teams",
      "High friction between design and engineering, slowing feature delivery"
    ],
    solution: "I designed and implemented a unified design system that standardized UI foundations, component behavior, and interaction patterns across the platform. Beyond creating components, I established the system as shared product infrastructure with clear ownership, governance, and adoption processes. The system was designed to scale with the organization and support long-term product evolution rather than short-term UI fixes.",
    approach: [
      "Audited existing UI patterns and identified inconsistencies",
      "Collaborated with designers and engineers to understand constraints and workflows",
      "Built a token-based foundation for color, typography, spacing, and motion",
      "Designed core components with clearly defined states and behaviors",
      "Created responsive patterns to support multiple breakpoints and use cases",
      "Validated system decisions through internal reviews and cross-functional feedback",
      "Documented usage guidelines and established review and contribution processes",
      "Iterated on the system based on real product usage and feedback"
    ],
    impact: [
      "Reduced design-to-development handoff time from weeks to days",
      "Accelerated feature delivery across multiple product teams",
      "Eliminated recurring UI inconsistencies caused by ad-hoc implementations",
      "Improved predictability and usability across core financial workflows",
      "Design system became a core enabler of product velocity and UX quality"
    ],
    reflection: "This project reinforced that a design system is not a collection of components, but shared product infrastructure. Its success depended as much on governance, adoption, and collaboration as on visual or interaction design. By aligning design and engineering around a single, scalable system, the team was able to focus on solving product problems instead of re-solving UI fundamentals.",
    areasOfEmphasis: [
      "Product Design",
      "Design System",
      "FinTech",
      "Complex Dashboards"
    ]
  },
  {
    slug: "1inch",
    title: "1inch",
    subtitle: "Improving DeFi Swap Experience at Scale",
    year: "2023",
    image: "/images/projects/1inch.png",
    overview: "I worked as a Senior Product Designer on the core web dApp of 1inch, a large-scale DeFi aggregator operating across hundreds of liquidity sources and serving millions of users. My work focused on improving complex swap and transaction flows, reducing cognitive load, and increasing user confidence when interacting with advanced DeFi mechanics. In parallel, I contributed to the evolution of the design system, enabling faster iteration and consistent UX across multiple product areas.",
    context: "1inch is a high-scale DeFi platform aggregating liquidity from hundreds of sources and supporting complex financial interactions such as multi-route swaps, slippage control, gas optimization, and advanced trading modes. As the platform evolved, new features increased product complexity. While these features delivered strong technical value, they also raised the cognitive burden on users and introduced friction in critical transaction flows.",
    role: "Senior Product Designer",
    ownership: [
      "UX optimization for swap and advanced trading flows",
      "Designing and validating complex user flows with multiple decision points",
      "Simplifying data-heavy interfaces while preserving transparency",
      "Collaborating closely with product, engineering, and analytics teams",
      "Contributing reusable patterns and components to the design system"
    ],
    collaboration: [
      "Product Managers — feature prioritization, user metrics, business impact",
      "Engineers — technical constraints, implementation patterns, delivery alignment",
      "Analytics — user behavior analysis, drop-off points, conversion metrics"
    ],
    problem: "Analysis of product behavior and internal feedback highlighted several issues: high cognitive load during swap configuration and confirmation, users frequently abandoned advanced swap modes or reverted to simpler flows, complex parameters (rates, presets, advanced settings) were difficult to scan and interpret, inconsistent UX patterns across features increased hesitation and reduced confidence. These issues directly affected conversion, retention, and trust in core DeFi interactions.",
    keyIssues: [
      "High cognitive load during swap configuration and confirmation",
      "Users frequently abandoned advanced swap modes or reverted to simpler flows",
      "Complex parameters (rates, presets, advanced settings) were difficult to scan and interpret",
      "Inconsistent UX patterns across features increased hesitation and reduced confidence"
    ],
    solution: "I redesigned key parts of the swap experience with a focus on clarity, predictability, and progressive disclosure. The goal was not to hide complexity, but to surface the right information at the right moment and guide users through decision-heavy flows with confidence. All changes were implemented within the existing design system, ensuring consistency across products and scalability for future features.",
    approach: [
      "Analyzed user behavior and drop-off points in swap flows",
      "Reviewed internal analytics and qualitative feedback",
      "Identified moments of hesitation, confusion, and loss of confidence",
      "Simplified data presentation for critical values (rates, receive amounts, impact)",
      "Introduced clearer visual hierarchy and scan patterns",
      "Applied progressive disclosure to advanced settings",
      "Reduced visual noise while preserving decision transparency",
      "Conducted usability reviews and internal feedback sessions",
      "Standardized components used in swap and transaction flows",
      "Aligned interaction patterns across product areas"
    ],
    impact: [
      "Users were less likely to abandon advanced swap flows",
      "Confidence and clarity during transaction configuration improved",
      "UX friction caused by complex parameters was significantly reduced",
      "Teams were able to iterate faster using standardized components",
      "All improvements were validated through product analytics, internal reviews, and qualitative feedback"
    ],
    reflection: "Designing for DeFi requires balancing transparency, security, and efficiency. Users must understand what is happening, trust the system, and complete transactions with confidence — often under conditions where mistakes are costly. This project reinforced the importance of progressive disclosure, strong visual hierarchy, and predictable interaction patterns when designing for technically complex domains.",
    areasOfEmphasis: [
      "DeFi",
      "Product Design",
      "Design System",
      "Web3"
    ]
  },
  {
    slug: "social-platform",
    title: "GETTR",
    subtitle: "Social Platform at Scale",
    year: "2021 — 2022",
    image: "/images/projects/gettr.png",
    overview: "GETTR is a large-scale social media platform serving 5.5M+ users, built around rapid feature expansion and platform scalability. During aggressive product growth, I led UX and system-level design to enable parallel feature delivery while maintaining UX consistency and quality under tight timelines.",
    context: "GETTR was rapidly scaling both its user base and feature set. The platform needed to expand core social functionality while maintaining usability, consistency, and delivery speed. New features were shipping in parallel, requirements were changing frequently, and stakeholders expected fast execution without UX regression.",
    role: "Senior Product Designer",
    ownership: [
      "I led UX and design system evolution for a rapidly scaling social media platform with 5.5M+ users",
      "Defining UX patterns for new product areas",
      "Designing and validating complex user flows",
      "Scaling and maintaining the design system",
      "Aligning product, design, and engineering under tight timelines"
    ],
    collaboration: [
      "Product Managers — prioritization, scope definition, trade-offs",
      "Engineers — feasibility, implementation constraints, delivery alignment",
      "Marketing & Growth — feature adoption and rollout requirements"
    ],
    problem: "Rapid feature development introduced several UX risks: UX fragmentation across features, increasing design debt, inconsistent interaction patterns, lack of a scalable system to support rapid growth. Without structural changes, scaling feature delivery would degrade UX quality and execution speed.",
    keyIssues: [
      "Fragmentation of user experience across new and existing features",
      "Inconsistent interaction patterns between teams and product areas",
      "Increasing design and development complexity due to lack of shared standards",
      "Difficulty scaling design output while maintaining quality and speed"
    ],
    solution: "I approached the problem by focusing on scalability, standardization, and clarity across the platform. Key directions included: designing scalable UX frameworks for new feature areas, standardizing interaction patterns and information architecture, improving existing features to align with a unified experience model, expanding and formalizing the Design System to support faster, more consistent delivery. This approach allowed multiple teams to work in parallel while preserving a coherent user experience.",
    approach: [
      "Consolidated inputs from user requests, stakeholders, marketing, and trend analysis",
      "Conducted UX research and competitive analysis across leading social platforms",
      "Designed and validated 42 user flows across new and existing features",
      "Produced 300+ wireframes to explore information architecture, interaction models, and edge cases",
      "Evolved the Design System using Atomic Design methodology for both Web and App platforms",
      "Standardized decision-making to reduce ambiguity and rework"
    ],
    impact: [
      "Scalable UX foundation for rapid feature development",
      "Improved consistency across product areas",
      "Reduced design friction during parallel feature delivery",
      "Design system became a core enabler of product velocity",
      "Impact validated through internal reviews, qualitative feedback, analytics, and team-wide evaluation"
    ],
    reflection: "This project reinforced that at scale, design systems and process discipline are leverage, not overhead. When speed is critical, UX quality depends on systems that enable teams to move quickly without fragmentation. The experience directly informed my later work on other large-scale platforms and DeFi products.",
    areasOfEmphasis: [
      "Product Design",
      "Mobile",
      "Design System",
      "Consumer"
    ]
  }
];
