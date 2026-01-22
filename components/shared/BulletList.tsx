import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BulletListProps {
  items: string[];
  className?: string;
  itemClassName?: string;
  maxWidth?: "none" | "xl" | "2xl";
}

export function BulletList({
  items,
  className,
  itemClassName,
  maxWidth = "2xl",
}: BulletListProps) {
  const maxWidthClasses = {
    none: "",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
  };

  return (
    <ul className={cn("space-y-4", maxWidthClasses[maxWidth], className)}>
      {items.map((item, i) => (
        <li key={i} className={cn("flex gap-4 text-foreground/50 leading-relaxed", itemClassName)}>
          <span className="text-accent">•</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

