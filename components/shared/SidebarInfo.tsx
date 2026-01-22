import { ReactNode } from "react";
import { LabelText } from "./LabelText";
import { BulletList } from "./BulletList";
import { cn } from "@/lib/utils";

interface SidebarInfoItem {
  label: string;
  value?: string;
  items?: string[];
  renderValue?: () => ReactNode;
}

interface SidebarInfoProps {
  title: string;
  items: SidebarInfoItem[];
  className?: string;
}

export function SidebarInfo({ title, items, className }: SidebarInfoProps) {
  return (
    <div className={cn("space-y-12 lg:pl-20", className)}>
      <div>
        <LabelText variant="accent" tracking="extra-wide" className="mb-6 block">
          {title}
        </LabelText>
        <div className="space-y-8">
          {items.map((item, index) => (
            <div key={index}>
              {item.label && (
                <LabelText variant="muted" tracking="widest" className="mb-2 block">
                  {item.label}
                </LabelText>
              )}
              {item.value && (
                <p className="text-lg font-bold">{item.value}</p>
              )}
              {item.items && (
                <ul className={cn("space-y-2 mt-3")}>
                  {item.items.map((listItem, idx) => (
                    <li key={idx} className="flex gap-4 text-sm text-foreground/50 leading-relaxed">
                      <span className="text-accent">•</span>
                      {listItem}
                    </li>
                  ))}
                </ul>
              )}
              {item.renderValue && item.renderValue()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

