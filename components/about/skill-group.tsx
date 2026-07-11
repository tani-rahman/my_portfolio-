import type { SkillGroup as SkillGroupData } from "@/types/portfolio";

export interface SkillGroupProps {
  group: SkillGroupData;
}

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <article className="rounded-3xl border border-border bg-card p-6 shadow-[0_20px_60px_-45px_rgba(0,0,0,0.45)] backdrop-blur-xl">
      <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        {group.category}
      </h3>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${group.category} skills`}>
        {group.skills.map((skill) => (
          <li className="rounded-full border border-border bg-background/70 px-3 py-1.5 text-sm font-medium" key={skill}>
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}
