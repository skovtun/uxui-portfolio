import { cn } from "@/lib/utils";

interface TagListProps {
  tags: string[];
  className?: string;
  tagClassName?: string;
  justify?: "start" | "center" | "end";
}

export function TagList({
  tags,
  className,
  tagClassName,
  justify = "start",
}: TagListProps) {
  const justifyClasses = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
  };

  return (
    <div className={cn("flex flex-wrap gap-3", justifyClasses[justify], className)}>
      {tags.map((tag) => (
        <div
          key={tag}
          className={cn(
            "px-6 py-4 rounded-full bg-foreground/2 border border-foreground/5 text-[10px] font-bold uppercase tracking-widest cursor-default",
            tagClassName
          )}
        >
          {tag}
        </div>
      ))}
    </div>
  );
}

