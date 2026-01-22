import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ReflectionBlockProps {
  children: ReactNode;
  className?: string;
}

export function ReflectionBlock({ children, className }: ReflectionBlockProps) {
  return (
    <p className={cn(
      "text-foreground/50 leading-relaxed max-w-2xl italic font-serif text-lg",
      className
    )}>
      "{children}"
    </p>
  );
}

