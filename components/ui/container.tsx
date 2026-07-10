import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  fluid?: boolean;
}

export function Container({ className, fluid = false, ...props }: ContainerProps) {
  return <div className={cn("mx-auto w-full px-5 sm:px-8 lg:px-12", !fluid && "max-w-7xl", className)} {...props} />;
}
