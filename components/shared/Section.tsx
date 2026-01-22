import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  padding?: "default" | "large" | "small";
  background?: "default" | "subtle" | "transparent";
  borderTop?: boolean;
}

export function Section({
  children,
  id,
  className,
  padding = "default",
  background = "default",
  borderTop = false,
}: SectionProps) {
  const paddingClasses = {
    default: "px-6 md:px-16 py-16",
    large: "px-6 md:px-16 py-16 md:py-24",
    small: "px-6 md:px-16 py-12",
  };

  const backgroundClasses = {
    default: "bg-background",
    subtle: "bg-foreground/[0.01]",
    transparent: "bg-transparent",
  };

  return (
    <section
      id={id}
      className={cn(
        "relative",
        paddingClasses[padding],
        backgroundClasses[background],
        borderTop && "border-t border-foreground/3",
        className
      )}
    >
      {children}
    </section>
  );
}

