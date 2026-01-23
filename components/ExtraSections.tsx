"use client";

import { motion } from "framer-motion";
import NextLink from "next/link";
import { ArrowUpRight, Quote, CheckCircle2, Download, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import {
  SectionHeader,
  TagList,
  LabelText,
  Section,
} from "@/components/shared";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const EXPERIENCE = [
  { company: "Apple", role: "Product Designer", period: "2023 — Present" },
  { company: "1inch.io", role: "UX/UI Lead", period: "2022 — 2023" },
  { company: "Amazon", role: "UX Designer / UI Developer", period: "2021" },
];

const EMPHASIS = [
  "Product Design (UX/UI)",
  "Complex Dashboards & Data-heavy interfaces",
  "Design Systems & UI Kits",
  "FinTech & SaaS products",
  "Web3, DeFi",
  "AI Tools",
  "Cross-functional collaboration"
];

const PROFICIENCY = [
  {
    title: "Product & UX Design",
    items: [
      "End-to-end product design (discovery → delivery)",
      "Complex user flows & data-heavy interfaces",
      "UX for financial, healthcare, and enterprise products",
      "Accessibility & usability best practices"
    ]
  },
  {
    title: "Design Systems",
    items: [
      "Design system architecture & governance",
      "Scalable UI kits and component libraries",
      "Design-engineering collaboration",
      "Documentation & adoption across teams"
    ]
  },
  {
    title: "Research & Decision-Making",
    items: [
      "User research & usability testing",
      "Data-informed design decisions",
      "UX audits & product evaluation",
      "Translating business goals into design solutions"
    ]
  },
  {
    title: "Tools & Workflow",
    items: [
      "Figma (advanced), prototyping",
      "Design handoff & collaboration with engineering",
      "Agile / cross-functional product teams",
      "AI-assisted workflows for ideation and prototyping"
    ]
  }
];

const CAROUSEL_IMAGES = [
  "/images/carousel/work-1.png",
  "/images/carousel/work-2.png",
  "/images/carousel/work-3.png",
  "/images/carousel/work-4.png",
  "/images/carousel/work-5.png",
  "/images/carousel/work-6.png",
  "/images/carousel/work-7.png",
  "/images/carousel/work-8.png",
  "/images/carousel/work-9.png",
  "/images/carousel/work-10.png",
  "/images/carousel/work-11.png",
  "/images/carousel/work-12.png",
  "/images/carousel/work-13.png",
];

const BRANDS = [
  { name: "Amazon", logo: "/images/logos/amazon.svg" },
  { name: "Apple", logo: "/images/logos/apple.svg" },
  { name: "Empower", logo: "/images/logos/empower.svg" },
  { name: "1inch", logo: "/images/logos/1inch.svg" },
  { name: "ADP", logo: "/images/logos/adp.svg" },
  { name: "Kaiser Permanente", logo: "/images/logos/kaiser-permanente.svg" },
  { name: "Odos", logo: "/images/logos/odos.svg" },
  { name: "Gazprom", logo: "/images/logos/gazprom.svg" },
  { name: "Gigabyte", logo: "/images/logos/gigabyte.svg" },
  { name: "Gettr", logo: "/images/logos/gettr.svg" }
];

const TESTIMONIALS = [
  {
    text: "Sergei is a very talented, versatile, and hardworking UX designer. He has vast design experience and his technical capabilities are outstanding. He is very detail-oriented and always delivers high-quality work. I worked with Sergei on some very complex projects and he always delivered excellent results on time. There are very few UX designers that are good in both UX design and Front-End development but Sergei has this unique ability to deliver on both fronts. Sergei's unique skill set makes him a valuable asset for any company.  He is very knowledgeable and has a brilliant attitude. He contributed to the team through his professionalism and passion. It was an absolute pleasure to work with Sergei. I wish him all the best in achieving his goals and dreams.",
    author: "Shahab Bokhari",
    role: "Team Lead @ Quotit Corporation",
    avatar: "https://media.licdn.com/dms/image/v2/D5603AQH5TVQE9OJcUw/profile-displayphoto-scale_400_400/B56ZkV6GbEG0Ak-/0/1757009176854?e=1770249600&v=beta&t=iOLZ6Vji-IJcMJd4nD0hKR90ObfmeEj8r4InKMhjj8g",
    linkedin: "https://www.linkedin.com/in/shahabbokhari"
  },
  {
    text: "Sergei and I have worked on multiple projects together here at Quotit (National General). Sergei's natural ability to dissect a problem and work through ambiguities has been a big asset to our team. He is able to grasp a proposed vision quickly and run with it. Aside from his top notch design skills, what really makes him shine is his ability to think big. Sergei is constantly thinking about the customer experience and finding new ways to innovate. Many of my projects have been initiated by Sergei's insights, where he has been able to take a simple observation and craft an entire customer strategy for us to implement. H has single-handedly driven incremental revenue for us just through his ability to think strategically and act on it.",
    author: "Shirin Isadvastar",
    role: "Senior UX Designer @ National General Insurance",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQFIokxzgvynEQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1699318924278?e=1770249600&v=beta&t=dmerGIRGTPY9TawPebSm2slvXTdJDM8tHkC3j_DceTQ",
    linkedin: "https://www.linkedin.com/in/shirin-isadvastar-79050a7"
  },
  {
    text: "I had the pleasure of working closely with Sergei. Sergei initially joined our team as a UX designer, but he quickly demonstrated great ability to adapt and learn.One of Sergei's most impressive achievements was his rapid mastery of React and front-end development. Not only did he design impeccable UI mock-ups, but he also took the initiative to dive into front-end development, seamlessly implementing his designs. His contributions have been invaluable to our team, and I have no doubt that he will excel in any endeavor he undertakes. It's been a pleasure working alongside Sergei, and I wholeheartedly endorse him for any role that requires either UX design or front-end development expertise.",
    author: "Stephen Wang",
    role: "SDE @ Amazon",
    avatar: "https://media.licdn.com/dms/image/v2/D5603AQF8fyYg1GCHcw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1696964764346?e=1770249600&v=beta&t=xXahw7xk4tfpGVtQX3Xs-0WvOf7IGEstR8ZTr_Y1Vu4",
    linkedin: "https://www.linkedin.com/in/sirui-wang-634b0a152"
  },
  {
    text: "I worked with Sergei at 1inch.io in different departments, but we had common tasks - Sergei demonstrated himself as a highly qualified specialist, focused on optimizing processes and improving user experience. Sergei has a good understanding of the principles of modern user interface design and has made a significant contribution to the development of the project. I would like to emphasize Sergei's high leadership qualities - he is able to teach and lead.",
    author: "Mikhail Naiko",
    role: "Senior Product Designer @ 1inch Labs",
    avatar: "https://media.licdn.com/dms/image/v2/C4D03AQEd2hv5CZFWrA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1517490585647?e=1770249600&v=beta&t=Eo7Dky3yXkfs2peFU6f0WCECzCLqtPD_g5FCG7rb6qM",
    linkedin: "https://www.linkedin.com/in/mikhail-naiko-31929528"
  },
  {
    text: "Sergei is one of the most driven, focused, and experienced team members I have ever worked with. His attention to detail and ability to problem solve different issues is unparalleled. Sergei's ability to provide viable working solutions to my team in a timely manner was incredible. Without a doubt, Sergei will be an absolute asset to any business that looks to bring him on board.",
    author: "Steven Derksen",
    role: "Senior Sales Consultant @ Quotit Corporation",
    avatar: "https://media.licdn.com/dms/image/v2/C5103AQEPm6RmGYRt-A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1516936598197?e=1770249600&v=beta&t=mzKEsKwiala-dWbSWat74SBjAWswdIYn9yRsvk2qnhA",
    linkedin: "https://www.linkedin.com/in/stevenderksen"
  },
  {
    text: "Working with Sergei at Gettr was awesome. He was a Senior UX/UI Designer for our desktop and mobile apps, and he really knows his stuff. Sergei made our apps easy to use and look great. It's not just about making things look pretty for him; it's about making them work well for our users. What's really cool about Sergei is not just his skills but how he is with people. He listens, really listens, and his ideas always make our work better. He's always learning new things and making sure our apps are the best they can be. But more than that, Sergei is just a great guy to have on the team. He's positive, works well with everyone, and always keeps us moving forward. Any team would be lucky to have him. He's not just about making great designs; he makes the team better, too.",
    author: "Pavel Gorokhov",
    role: "Flutter Engineer @ GETTR",
    avatar: "https://media.licdn.com/dms/image/v2/C4D03AQGLWPRKKLsojA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1586206474216?e=1770249600&v=beta&t=MJ63CC0a0IPHbn7rFLwULmoC7edasZzsLs7Mk_wg1ss",
    linkedin: "https://www.linkedin.com/in/pavel-gorokhov"
  }
];

export function BrandsSection() {
  return (
    <Section id="about">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
            <SectionHeader 
              variant="with-accent" 
              accentText="High-Impact Products and Teams"
              className="text-center lg:text-center"
              size="large"
            >
              EXPERIENCE ACROSS
            </SectionHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-foreground/60 max-w-5xl mx-auto text-left leading-relaxed font-light">
            <div className="space-y-6 text-sm md:text-base">
              <p>
                I&apos;m a Senior Product Designer with 10+ years of experience designing complex web platforms, enterprise systems, and DeFi products.
              </p>
              <p>
                I specialize in system-level UX, scalable design foundations, and high-risk user flows where clarity, trust, and predictability directly impact business outcomes.
              </p>
              <p>
                I&apos;ve worked on products used by millions of users, collaborating closely with product, engineering, and analytics teams.
              </p>
            </div>
            
            <div className="text-sm md:text-base">
              <h3 className="text-lg font-semibold text-foreground mb-6">What I focus on:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="h-5 w-5 rounded-full border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="h-3 w-3 text-accent" />
                  </div>
                  <span>Designing scalable UX systems</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="h-5 w-5 rounded-full border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="h-3 w-3 text-accent" />
                  </div>
                  <span>Reducing cognitive load in complex products</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="h-5 w-5 rounded-full border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="h-3 w-3 text-accent" />
                  </div>
                  <span>Ownership of critical user flows</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="h-5 w-5 rounded-full border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="h-3 w-3 text-accent" />
                  </div>
                  <span>Design systems as product enablers</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="h-5 w-5 rounded-full border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="h-3 w-3 text-accent" />
                  </div>
                  <span>Collaboration with engineering and analytics</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
  
        <div className="flex flex-wrap justify-center items-center gap-16">
          {BRANDS.map((brand) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="relative h-12 w-full max-w-[140px] opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-default"
              >
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                className="object-contain"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function AboutSection() {
  return (
    <section id="experience" className="bg-background text-foreground">
      {/* Philosophy & Emphasis */}
        <div className="px-6 md:px-16 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16 relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/5 blur-[120px] rounded-full -translate-x-1/2" />
          
          <div className="lg:col-span-6 relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <SectionHeader 
                variant="with-accent" 
                accentText="Emphasis"
                className="mb-16 text-center lg:text-left"
                size="large"
              >
                AREAS OF
              </SectionHeader>
              <TagList 
                tags={EMPHASIS} 
                justify="start"
                className="justify-center lg:justify-start"
                tagClassName="motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95"
              />
            </motion.div>
          </div>

          <div className="lg:col-span-6 relative z-10 flex flex-col items-center lg:items-start w-full">
            <div className="space-y-16 w-full">
              <div className="w-full">
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-16">
                  <div className="h-px w-8 bg-accent" />
                  <LabelText variant="accent" tracking="extra-wide">Selected Experience</LabelText>
                  <div className="h-px w-8 bg-accent lg:hidden" />
                </div>
                <div className="space-y-0 w-full">
                  {EXPERIENCE.map((exp, index) => (
                    <motion.div 
                      key={exp.company + index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                        className="py-8 border-b border-foreground/5 flex flex-col sm:flex-row justify-between items-center sm:items-baseline text-center sm:text-left"
                    >
                      <div className="mb-4 sm:mb-0">
                        <h4 className="text-2xl font-bold tracking-tight">{exp.company}</h4>
                        <p className="text-sm text-foreground/50 mt-1 font-light">{exp.role}</p>
                      </div>
                      <span className="text-xs font-bold tabular-nums text-foreground/40 tracking-widest">{exp.period}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Proficiency Grid */}
        <Section background="subtle">
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center lg:justify-start gap-4 mb-16"
            >
              <div className="h-px w-12 bg-accent" />
              <LabelText variant="accent" tracking="extra-wide" className="text-[11px]">Capabilities</LabelText>
              <div className="h-px w-12 bg-accent lg:hidden" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <SectionHeader 
                variant="with-accent" 
                accentText="Proficiency"
                className="mb-16 text-center lg:text-left"
                size="large"
              >
                THE CORE
              </SectionHeader>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {PROFICIENCY.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                    className="p-12 rounded-[2.5rem] bg-background border border-foreground/5 flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                    <h3 className="text-3xl md:text-4xl xl:text-[3vw] font-bold mb-16 transition-colors tracking-tight">{p.title}</h3>
                  <ul className="space-y-6">
                    {p.items.map((item) => (
                      <li key={item} className="flex flex-col lg:flex-row items-center lg:items-start gap-5 text-foreground/60 leading-relaxed font-light">
                        <div className="h-5 w-5 rounded-full border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="h-3 w-3 text-accent" />
                        </div>
                        <span className="text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Testimonials Carousel */}
        <Section>
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-between mb-16"
            >
              <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-accent" />
                <LabelText variant="accent" tracking="extra-wide">Testimonials</LabelText>
                  <div className="h-px w-12 bg-accent lg:hidden" />
                </div>
              <a 
                href="https://www.linkedin.com/in/sergeikovtun/details/recommendations" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-2 transition-colors"
              >
                <LabelText tracking="normal" className="transition-colors text-foreground/60 group-hover:text-accent">View all</LabelText>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 text-foreground/60 group-hover:text-accent" />
                <span className="absolute bottom-0 left-0 w-full h-px bg-accent transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100" />
              </a>
            </motion.div>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {TESTIMONIALS.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative p-8 md:p-12 rounded-[2.5rem] bg-linear-to-br from-foreground/3 to-transparent border border-foreground/5 h-full flex flex-col overflow-hidden"
                    >
                      <Quote className="absolute -top-4 -right-4 h-16 w-16 text-accent/5 rotate-12 pointer-events-none" />
                
                      <div className="relative z-10 flex flex-col h-full">
                        <p className="text-base md:text-lg font-light italic leading-[1.4] text-foreground/80 mb-8 grow">
                          {testimonial.text}
                        </p>
                        
                        <div className="flex items-center gap-6">
                          <a 
                            href={testimonial.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="h-16 w-16 rounded-full overflow-hidden relative ring-4 ring-accent/10 shrink-0 hover:ring-accent/20 transition-all"
                          >
                            <Image
                              src={testimonial.avatar}
                              alt={testimonial.author}
                              fill
                              className="object-cover"
                              loading="lazy"
                              placeholder="blur"
                              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                            />
                          </a>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xl font-bold tracking-tight truncate">{testimonial.author}</h4>
                            <p className="text-[10px] text-accent font-bold uppercase tracking-[0.2em] mt-1 line-clamp-2">
                              {testimonial.role}
                            </p>
                  </div>
                </div>
              </div>
            </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12" />
              <CarouselNext className="hidden md:flex -right-12" />
            </Carousel>
          </div>
        </Section>
      </section>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="px-6 md:px-16 pt-16 pb-4 bg-background text-foreground overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-foreground/5 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 items-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex items-center justify-center lg:justify-start gap-4 mb-16"
            >
              <div className="h-px w-8 bg-accent" />
              <LabelText variant="accent" tracking="extra-wide">Project inquiry</LabelText>
              <div className="h-px w-8 bg-accent lg:hidden" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <SectionHeader 
                variant="with-accent" 
                accentText="Collaborate?"
                className="mb-16 leading-[0.8]"
                size="large"
              >
                READY TO
              </SectionHeader>
            </motion.div>
            
            <a href="mailto:skovtunpro@gmail.com" className="w-full sm:w-auto">
              <button className="group relative flex items-center gap-8 px-14 py-7 bg-foreground text-background rounded-full font-bold uppercase tracking-widest text-[10px] overflow-hidden transition-transform hover:scale-[1.02] w-full justify-center">
                <span className="relative z-10">Start a Conversation</span>
                <ArrowUpRight className="relative z-10 h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </button>
            </a>
          </div>

        <div className="relative grid grid-cols-2 gap-6 h-[500px] md:h-[600px] overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-background to-transparent z-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent z-20 pointer-events-none" />

          {/* Left Column - Downwards */}
          <div className="relative h-full overflow-hidden">
            <motion.div 
              animate={{ y: ["-50%", "0%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="flex flex-col gap-6"
            >
                {[...CAROUSEL_IMAGES.slice(0, Math.ceil(CAROUSEL_IMAGES.length / 2)), ...CAROUSEL_IMAGES.slice(0, Math.ceil(CAROUSEL_IMAGES.length / 2))].map((src, i) => (
                  <div key={`left-${i}`} className="relative w-full aspect-340/300 rounded-4xl overflow-hidden border border-foreground/5 bg-foreground/5 shrink-0">
                    <Image 
                      src={src} 
                      alt="UI" 
                      fill 
                      className="object-cover" 
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                ))}
              </motion.div>
            </div>
            {/* Right Column - Upwards */}
            <div className="relative h-full overflow-hidden pt-20">
              <motion.div 
                animate={{ y: ["0%", "-50%"] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="flex flex-col gap-6"
              >
                {[...CAROUSEL_IMAGES.slice(Math.ceil(CAROUSEL_IMAGES.length / 2)), ...CAROUSEL_IMAGES.slice(Math.ceil(CAROUSEL_IMAGES.length / 2))].reverse().map((src, i) => (
                  <div key={`right-${i}`} className="relative w-full aspect-340/300 rounded-4xl overflow-hidden border border-foreground/5 bg-foreground/5 shrink-0">
                    <Image 
                      src={src} 
                      alt="UI" 
                      fill 
                      className="object-cover" 
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="pt-16 border-t border-foreground/5 flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
        <div className="flex flex-col items-center md:items-start gap-6">
          <div className="text-3xl font-bold tracking-tight">SK<span className="text-accent">.</span></div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/50 font-bold max-w-[240px] leading-relaxed text-center md:text-left">
            Sergei Kovtun — UX/UI & Product Designer & Creative Strategist
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-12 w-full md:w-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <NextLink href="/#about" className="group relative transition-colors">
              <LabelText tracking="normal" className="transition-colors text-foreground/60 group-hover:text-accent">About</LabelText>
              <span className="absolute bottom-0 left-0 w-full h-px bg-accent transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100" />
            </NextLink>
            <NextLink href="/#work" className="group relative transition-colors">
              <LabelText tracking="normal" className="transition-colors text-foreground/60 group-hover:text-accent">Case Studies</LabelText>
              <span className="absolute bottom-0 left-0 w-full h-px bg-accent transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100" />
            </NextLink>
            <NextLink href="/#experience" className="group relative transition-colors">
              <LabelText tracking="normal" className="transition-colors text-foreground/60 group-hover:text-accent">Experience</LabelText>
              <span className="absolute bottom-0 left-0 w-full h-px bg-accent transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100" />
            </NextLink>
            <NextLink href="/#contact" className="group relative transition-colors">
              <LabelText tracking="normal" className="transition-colors text-foreground/60 group-hover:text-accent">Contact</LabelText>
              <span className="absolute bottom-0 left-0 w-full h-px bg-accent transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100" />
            </NextLink>
          </div>
          
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4">
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/in/sergeikovtun/" target="_blank" rel="noopener noreferrer" className="group p-3 rounded-full border border-foreground/10 hover:border-accent hover:text-accent hover:bg-accent/5 transition-all hover:scale-110">
                <Linkedin className="h-4 w-4 transition-transform group-hover:scale-110" />
              </a>
              <a href="https://www.instagram.com/ux__ui.designer/" target="_blank" rel="noopener noreferrer" className="group p-3 rounded-full border border-foreground/10 hover:border-accent hover:text-accent hover:bg-accent/5 transition-all hover:scale-110">
                <Instagram className="h-4 w-4 transition-transform group-hover:scale-110" />
              </a>
              <a href="https://www.behance.net/sergeikovtun" target="_blank" rel="noopener noreferrer" className="group p-3 rounded-full border border-foreground/10 hover:border-accent hover:text-accent hover:bg-accent/5 transition-all hover:scale-110">
                <div className="relative h-4 w-4">
                  <Image
                    src="/images/behance.svg"
                    alt="Behance"
                    fill
                    className="object-contain transition-transform group-hover:scale-110"
                  />
                </div>
              </a>
            </div>

            <a href="/UXUI_Product_Designer_Sergei_Kovtun_CV.docx" download="UXUI_Product_Designer_Sergei_Kovtun_CV.docx" className="flex items-center gap-4 px-8 py-3 border border-foreground/10 rounded-full hover:border-accent hover:text-accent hover:bg-accent/5 transition-all group hover:scale-[1.02]">
              <Download className="h-4 w-4 transition-transform group-hover:-translate-y-[3px]" />
              <LabelText tracking="widest">Download Resume</LabelText>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-8 pb-4 border-t border-foreground/3 flex flex-col items-center justify-center text-center">
        <LabelText variant="muted" tracking="normal" className="text-foreground/40">
          © {new Date().getFullYear()} SERGEI KOVTUN. All Rights Reserved.
        </LabelText>
      </div>
      </div>
    </footer>
  );
}
