import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface LabelTextProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "accent" | "muted";
  tracking?: "normal" | "wide" | "widest" | "extra-wide";
}

export function LabelText({
  children,
  className,
  variant = "default",
  tracking = "normal",
}: LabelTextProps) {
  const baseClasses = "text-[10px] font-bold uppercase";
  
  const variantClasses = {
    default: "text-foreground/50",
    accent: "text-accent",
    muted: "text-foreground/50",
  };

  const trackingClasses = {
    normal: "tracking-[0.3em]",
    wide: "tracking-wider",
    widest: "tracking-widest",
    "extra-wide": "tracking-[0.4em]",
  };

  return (
    <span className={cn(baseClasses, variantClasses[variant], trackingClasses[tracking], className)}>
      {children}
    </span>
  );
}

