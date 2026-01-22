import { Variants } from "framer-motion";

/**
 * Utility to respect user's motion preferences
 * Returns reduced motion variants when user prefers reduced motion
 */
export function getReducedMotionVariants(variants: Variants): Variants {
  if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    // Return simplified variants that respect reduced motion preference
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    };
  }
  return variants;
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Get transition duration based on motion preference
 */
export function getTransitionDuration(defaultDuration: number): number {
  return prefersReducedMotion() ? 0 : defaultDuration;
}

