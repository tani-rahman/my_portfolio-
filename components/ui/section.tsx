import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  as?: "section" | "div";
}

export function Section({ as: Component = "section", className, ...props }: SectionProps) {
  return <Component className={cn("py-20 sm:py-28 lg:py-36", className)} {...props} />;
}
