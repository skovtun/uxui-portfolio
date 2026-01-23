import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SubsectionHeaderProps {
  children: ReactNode;
  className?: string;
  as?: "h3" | "h4";
  size?: "large" | "default";
}

export function SubsectionHeader({
  children,
  className,
  as: Component = "h3",
  size = "default",
}: SubsectionHeaderProps) {
  const sizeClasses = {
    large: "text-3xl md:text-4xl",
    default: "text-2xl md:text-3xl",
  };

  // Maximum font sizes with clamp for responsive scaling
  const fontSizeStyle = size === "large" 
    ? { fontSize: 'clamp(1.875rem, 3vw, 3rem)' } // 30px - 48px
    : { fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)' }; // 24px - 36px

  return (
    <Component 
      className={cn(
        `${sizeClasses[size]} font-bold tracking-tight leading-[1.1] mb-8`,
      className
      )}
      style={fontSizeStyle}
    >
      {children}
    </Component>
  );
}

