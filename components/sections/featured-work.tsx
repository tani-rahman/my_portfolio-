import { ProjectCard } from "@/components/projects/project-card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/constants/site";

export function FeaturedWork() {
  return <Section id="work"><Container><SectionHeading eyebrow="Selected work" title="A few things I’m proud to have made." description="End-to-end engagements spanning product thinking, interaction design, and resilient engineering." /><div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-2">{projects.filter((project) => project.featured).map((project, index) => <ProjectCard index={index} key={project.slug} project={project} />)}</div></Container></Section>;
}
