"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Download, Mail, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { name: "ABOUT", href: "/#about" },
  { name: "CASE STUDIES", href: "/#work" },
  { name: "EXPERIENCE", href: "/#experience" },
  { name: "CONTACT", href: "/#contact" }
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [mobileMenuOpen]);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "py-4" : "py-8"
      }`}
    >
        <div className="w-full px-6 md:px-16">
          <div className={`max-w-[1600px] mx-auto relative flex items-center justify-between px-4 md:px-6 py-4 rounded-full transition-all duration-500 ${
            scrolled ? "glass shadow-2xl shadow-black/10" : "bg-transparent"
          }`}>
            <Link href="/">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-bold tracking-tighter cursor-pointer"
              >
                SK<span className="text-accent">.</span>
              </motion.div>
            </Link>
  
            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-12">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="group relative text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/60 hover:text-accent transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-accent/30 focus-visible:ring-offset-1 rounded-md py-1 inline-block"
                  >
                    <span className="relative z-10 px-2">{link.name}</span>
                    <span className="absolute bottom-0 left-2 right-2 h-px bg-accent transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100" />
                  </Link>
                </motion.div>
              ))}
            </div>
  
                <div className="flex items-center gap-6">
                  <a href="/UXUI_Product_Designer_Sergei_Kovtun_CV.docx" download="UXUI_Product_Designer_Sergei_Kovtun_CV.docx" aria-label="Download Sergei Kovtun's resume">
                    <motion.button
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="group relative px-8 py-3 bg-foreground text-background rounded-full overflow-hidden transition-all hover:scale-[1.02] hidden sm:block"
                    >
                      <div className="relative z-10 flex items-center gap-2">
                        <Download className="h-3 w-3 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Download Resume</span>
                      </div>
                      <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                    </motion.button>
                  </a>
  
              {/* Mobile Menu Toggle */}
              <button 
                className="lg:hidden text-foreground p-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent/30 focus-visible:ring-offset-1 rounded-md"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>
  
        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full p-6 lg:hidden"
            >
            <div className="glass rounded-4xl p-10 flex flex-col gap-8 shadow-2xl">
                    {NAV_LINKS.map((link) => (
                      <motion.div
                        key={link.name}
                        whileHover={{ x: 20 }}
                        className="group flex items-center gap-4"
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-4xl font-bold tracking-tight group-hover:text-accent transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-accent/30 focus-visible:ring-offset-1 rounded-md px-2 py-1"
                        >
                          {link.name}
                        </Link>
                        <ArrowRight className="h-8 w-8 text-accent opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </motion.div>
                    ))}
              <a 
                href="/UXUI_Product_Designer_Sergei_Kovtun_CV.docx"
                download="UXUI_Product_Designer_Sergei_Kovtun_CV.docx"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full sm:hidden"
              >
                <button className="w-full py-5 bg-accent text-accent-foreground rounded-full font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2">
                  <Download className="h-4 w-4" />
                  Download Resume
                </button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
