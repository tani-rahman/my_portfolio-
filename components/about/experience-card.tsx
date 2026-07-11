import type { ExperienceArea } from "@/types/portfolio";

export interface ExperienceCardProps {
  area: ExperienceArea;
  index: number;
}

export function ExperienceCard({ area, index }: ExperienceCardProps) {
  return (
    <article className="border-t border-border pt-6">
      <p className="font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</p>
      <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em]">{area.title}</h3>
      <p className="mt-3 leading-7 text-muted-foreground">{area.description}</p>
    </article>
  );
}
