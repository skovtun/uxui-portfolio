import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContentBlockProps {
  children: ReactNode;
  variant?: "default" | "highlight" | "minimal";
  className?: string;
}

export function ContentBlock({
  children,
  variant = "default",
  className,
}: ContentBlockProps) {
  const baseClasses = "rounded-3xl border leading-relaxed font-light";
  
  const variantClasses = {
    default: "p-8 bg-linear-to-br from-foreground/3 to-transparent border-foreground/5",
    highlight: "p-10 bg-linear-to-br from-foreground/3 to-transparent border-foreground/5",
    minimal: "p-0 border-0 bg-transparent",
  };

  return (
    <div className={cn(baseClasses, variantClasses[variant], className)}>
      {children}
    </div>
  );
}

