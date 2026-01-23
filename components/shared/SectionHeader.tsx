import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "with-accent" | "centered";
  accentText?: string;
  as?: "h1" | "h2" | "h3";
  size?: "large" | "default";
}

export function SectionHeader({
  children,
  className,
  variant = "default",
  accentText,
  as: Component = "h2",
  size = "default",
}: SectionHeaderProps) {
  const sizeClasses = {
    large: "text-5xl md:text-6xl lg:text-7xl",
    default: "text-3xl md:text-4xl lg:text-5xl",
  };
  
  const baseClasses = `${sizeClasses[size]} font-bold tracking-tight leading-[0.9] text-foreground`;
  
  const variantClasses = {
    default: "mb-10 uppercase",
    "with-accent": "mb-16 text-center lg:text-left",
    centered: "mb-16 text-center lg:text-left uppercase",
  };

  // Maximum font sizes with clamp for responsive scaling
  const fontSizeStyle = size === "large" 
    ? { fontSize: 'clamp(3rem, 5vw, 6rem)' } // 48px - 96px
    : { fontSize: 'clamp(1.875rem, 3vw, 3rem)' }; // 30px - 48px

  return (
    <Component 
      className={cn(baseClasses, variantClasses[variant], className)}
      style={fontSizeStyle}
    >
      {variant === "with-accent" && accentText ? (
        <>
          {children} <br className="hidden md:block" />
          <span className="font-serif italic font-normal text-accent/80">{accentText}</span>
        </>
      ) : (
        children
      )}
    </Component>
  );
}

