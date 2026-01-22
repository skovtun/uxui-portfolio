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
    large: "text-3xl md:text-4xl xl:text-[3vw]",
    default: "text-2xl md:text-3xl lg:text-3xl xl:text-4xl",
  };

  const fontSizeStyle = size === "large" ? undefined : { fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)' };

  return (
    <Component 
      className={cn(
        `${sizeClasses[size]} font-bold tracking-tight leading-[1.1] mb-6`,
      className
      )}
      style={fontSizeStyle}
    >
      {children}
    </Component>
  );
}

