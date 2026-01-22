import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TwoColumnGridProps {
  children: ReactNode;
  className?: string;
  gap?: "default" | "large";
}

export function TwoColumnGrid({
  children,
  className,
  gap = "default",
}: TwoColumnGridProps) {
  const gapClasses = {
    default: "gap-12",
    large: "gap-16",
  };

  return (
    <div className={cn(
      "grid grid-cols-1 md:grid-cols-2",
      gapClasses[gap],
      className
    )}>
      {children}
    </div>
  );
}

