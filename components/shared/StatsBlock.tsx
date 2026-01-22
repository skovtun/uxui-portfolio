import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatItem {
  value: string;
  label: string;
  sublabel?: string;
}

interface StatsBlockProps {
  items: StatItem[];
  className?: string;
}

export function StatsBlock({ items, className }: StatsBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 p-8 md:p-12 rounded-3xl bg-linear-to-br from-foreground/3 to-transparent border border-foreground/5",
        className
      )}
    >
      {items.map((item, index) => (
        <div key={index} className="text-center">
          <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-accent mb-3 md:mb-4">
            {item.value}
          </div>
          <div className="text-lg md:text-xl text-foreground/80 font-light mb-2">
            {item.label}
          </div>
          {item.sublabel && (
            <div className="text-sm text-foreground/50 font-light">
              {item.sublabel}
            </div>
          )}
        </div>
      ))}
    </motion.div>
  );
}

