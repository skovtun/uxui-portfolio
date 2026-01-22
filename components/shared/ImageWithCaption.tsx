import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

interface ImageWithCaptionProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  quality?: number;
  className?: string;
}

// Blur placeholder data URL (1x1 transparent pixel, blurred)
const blurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

export function ImageWithCaption({
  src,
  alt,
  caption,
  width = 1200,
  height = 800,
  quality = 90,
  className = "w-full h-auto",
}: ImageWithCaptionProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <figure className="space-y-4 mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative w-full"
      >
        {/* Skeleton loader - скрывается после загрузки */}
        {isLoading && (
          <div 
            className="absolute inset-0 bg-foreground/5 animate-pulse rounded-lg z-0"
            aria-hidden="true"
          />
        )}
        
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`${className} relative z-10 ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
          quality={quality}
          placeholder="blur"
          blurDataURL={blurDataURL}
          loading="lazy"
          onLoad={() => setIsLoading(false)}
          onLoadingComplete={() => setIsLoading(false)}
        />
      </motion.div>
      {caption && (
        <figcaption className="text-sm text-foreground/50 leading-relaxed font-light text-center max-w-3xl mx-auto">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

