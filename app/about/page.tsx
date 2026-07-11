import type { Metadata } from "next";

import { ExperienceCard } from "@/components/about/experience-card";
import { SkillGroup } from "@/components/about/skill-group";
import { Reveal } from "@/components/motion/reveal";
import { ContactCta } from "@/components/sections/contact-cta";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { education, experienceAreas, profile, skillGroups } from "@/constants/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About",
  description: "Learn about Mahinur Rahman Tani, a Computer Science student and full stack web developer from Bangladesh.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Section className="pt-24 sm:pt-32">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">About</p>
          <h1 className="mt-8 max-w-6xl text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
            Building for the web. Exploring what comes next with AI.
          </h1>
          <div className="mt-16 grid gap-10 border-t border-border pt-10 text-lg leading-8 text-muted-foreground lg:grid-cols-2 lg:gap-20">
            <p>{profile.about}</p>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em]">Career objective</p>
              <p className="mt-4">{profile.objective}</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading eyebrow="Education" title="Computer Science & Engineering" />
          <Reveal className="mt-12 rounded-[2rem] border border-border bg-card p-7 shadow-[0_24px_80px_-50px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-10">
            <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">{education.degree}</h3>
                <p className="mt-3 text-lg text-muted-foreground">{education.institution}</p>
              </div>
              <p className="w-fit rounded-full border border-border bg-background/70 px-4 py-2 text-sm font-medium">{education.result}</p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading eyebrow="Technical skills" title="Tools I use to turn ideas into working products." />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group, index) => (
              <Reveal delay={index * 0.04} key={group.category}>
                <SkillGroup group={group} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading eyebrow="Experience" title="Learning through practice, collaboration, and research." />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {experienceAreas.map((area, index) => (
              <ExperienceCard area={area} index={index} key={area.title} />
            ))}
          </div>
        </Container>
      </Section>

      <ContactCta />
    </>
  );
}
