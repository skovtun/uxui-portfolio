"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
const meImage = "/images/sergei-kovtun.png";

const BADGES = ["FinTech", "AI", "Web3", "SaaS", "Healthcare", "Dashboards", "Design Systems"];

export function Hero() {
  const containerVars: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVars: Variants = {
    initial: { y: 100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen xl:h-screen flex flex-col px-6 md:px-16 pt-32 md:pt-32 pb-12 xl:pb-0 justify-center bg-background overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-tr from-accent/5 via-transparent to-accent/5 pointer-events-none" />
      <div className="noise-overlay" />
      
        <motion.div
          variants={containerVars}
          initial="initial"
          animate="animate"
          className="relative z-10 w-full grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-16 items-center max-w-[1600px] mx-auto pt-8 xl:pt-0"
        >
        <div className="xl:col-span-1 py-2 flex flex-col items-center xl:items-start text-center xl:text-left">
          <div className="mb-4 overflow-hidden">
              <motion.p 
                variants={itemVars}
                className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] text-accent flex items-center justify-center xl:justify-start gap-4"
              >
                <span className="w-8 h-px bg-accent hidden xl:block" />
                HI, I&apos;M SERGEI KOVTUN — UX/UI & PRODUCT DESIGNER
                <span className="w-8 h-px bg-accent xl:hidden" />
              </motion.p>
          </div>

              <div className="flex flex-col gap-2 mb-4 xl:mb-5 w-full">
                      <motion.h1 
                        variants={itemVars}
                            className="text-[14vw] xs:text-[50px] md:text-[11vw] lg:text-[10vw] xl:text-[6.5vw] font-bold leading-[0.9] tracking-tight pb-2"
                      >
                    CRAFTING <span className="font-serif italic font-normal text-accent/80">Digital</span> <br />
                    EXPERIENCES
                  </motion.h1>
              </div>

          <motion.div variants={itemVars} className="max-w-xl mb-6 xl:mb-7 mx-auto xl:mx-0">
            <p className="text-sm md:text-base text-foreground/60 leading-relaxed font-light mb-4 xl:mb-5">
              Specializing in complex systems and data-heavy interfaces. I transform business goals into scalable, human-centered products that drive growth and clarity.
            </p>
            
            <div className="flex flex-wrap gap-2 justify-center xl:justify-start">
              {BADGES.map((badge) => (
                <span key={badge} className="px-3 py-1.5 rounded-full border border-foreground/5 bg-foreground/2 text-[10px] font-bold uppercase tracking-wider text-foreground/50">
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

            <motion.div variants={itemVars} className="flex flex-col sm:flex-row items-center xl:items-center gap-6 xl:gap-8 mb-8 xl:mb-0 w-full justify-center xl:justify-start">
              <a href="/#work" className="w-full sm:w-auto">
                <button className="group relative flex items-center gap-4 px-10 py-5 bg-foreground text-background rounded-full font-bold uppercase tracking-widest text-[10px] overflow-hidden transition-transform hover:scale-[1.02] active:scale-95 w-full justify-center focus:outline-none focus-visible:ring-1 focus-visible:ring-accent/30 focus-visible:ring-offset-1">
                  <span className="relative z-10">Explore Case Studies</span>
                  <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" aria-hidden="true" />
                </button>
              </a>
              
                <div className="flex items-center gap-4 xl:ml-auto">
                    <div className="relative h-10 md:h-14 w-auto aspect-62/189">
                    <Image 
                        src="/images/runet-award.png" 
                      alt="Runet Award" 
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="text-left">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/50 mb-0.5 whitespace-nowrap">Runet Award 2017</p>
                  <p className="text-[10px] md:text-xs font-medium text-foreground/60 max-w-[180px] leading-tight">
                    UX/UI Excellence of Mobile Operator App / Gazprom
                  </p>
                </div>
              </div>
            </motion.div>
        </div>

          <div className="xl:col-span-1 relative flex items-center justify-center h-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1.07 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full aspect-4/5 max-w-[340px] md:max-w-[400px] xl:max-w-[480px]"

            >
              <div className="absolute -inset-4 bg-accent/5 rounded-3xl blur-3xl animate-pulse" />
              <Image
                src={meImage}
                alt="Sergei Kovtun - Senior UX/UI & Product Designer"
                fill
                className="object-contain relative z-10 p-4 xl:p-8"
                priority
                unoptimized
                sizes="(max-width: 768px) 340px, (max-width: 1280px) 400px, 550px"
              />
              
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1,
                    y: [0, -8, 0],
                  }}
                  transition={{ 
                    opacity: { delay: 1.2, duration: 1 },
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  className="absolute bottom-24 right-12 xl:right-4 backdrop-blur-md bg-background/80 border border-foreground/10 p-4 md:p-5 rounded-2xl z-20 shadow-xl"
                >
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-2xl md:text-4xl font-bold text-accent">10+</span>
                  <span className="text-[9px] md:text-[11px] font-bold uppercase tracking-widest text-foreground/50">Years</span>
                </div>
                <p className="text-[9px] md:text-[11px] font-bold uppercase tracking-widest text-foreground/50">Industry Experience</p>
              </motion.div>
            </motion.div>
          </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 hidden xl:flex flex-col items-center gap-4 z-30"
      >
        <div className="w-5 h-8 border-2 border-foreground/30 rounded-full flex justify-center p-1.5 backdrop-blur-sm">
          <motion.div 
            animate={{ 
              y: [0, 12, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-1 h-1 bg-accent rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
