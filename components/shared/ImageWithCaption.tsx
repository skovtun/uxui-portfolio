import Image from "next/image";
import { motion } from "framer-motion";

interface ImageWithCaptionProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  quality?: number;
  className?: string;
}

export function ImageWithCaption({
  src,
  alt,
  caption,
  width = 1200,
  height = 800,
  quality = 90,
  className = "w-full h-auto",
}: ImageWithCaptionProps) {
  return (
    <figure className="space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          quality={quality}
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

