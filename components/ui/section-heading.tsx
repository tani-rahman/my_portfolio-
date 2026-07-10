import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <header className={cn("max-w-3xl", className)}>
      {eyebrow ? <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">{eyebrow}</p> : null}
      <h2 className="text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">{title}</h2>
      {description ? <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">{description}</p> : null}
    </header>
  );
}
