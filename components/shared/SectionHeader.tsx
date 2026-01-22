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
    large: "text-5xl md:text-[7vw] lg:text-[6.5vw] xl:text-[5vw]",
    default: "text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
  };
  
  const baseClasses = `${sizeClasses[size]} font-bold tracking-tight leading-[0.9] text-foreground`;
  
  const variantClasses = {
    default: "mb-8 uppercase",
    "with-accent": "mb-16 text-center lg:text-left",
    centered: "mb-16 text-center lg:text-left uppercase",
  };

  const fontSizeStyle = size === "large" ? undefined : { fontSize: 'clamp(2rem, 4vw, 3.5rem)' };

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

