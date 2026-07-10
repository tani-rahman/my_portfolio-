import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactCta } from "@/components/sections/contact-cta";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { projects } from "@/constants/site";
import { getProjectContent } from "@/lib/projects";
import { createMetadata } from "@/lib/seo";

interface ProjectPageProps { params: Promise<{ slug: string }>; }
export const dynamicParams = false;
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project ? createMetadata({ title: project.title, description: project.summary, path: `/projects/${slug}` }) : {};
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  const content = getProjectContent(slug);
  if (!project || !content) notFound();

  return <><Section className="pb-16 pt-24 sm:pt-32"><Container><p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Case study · {project.year}</p><h1 className="mt-7 text-balance text-6xl font-semibold tracking-[-0.06em] sm:text-8xl lg:text-9xl">{project.title}</h1><p className="mt-8 max-w-3xl text-pretty text-xl leading-9 text-muted-foreground sm:text-2xl">{project.summary}</p><dl className="mt-14 grid gap-8 border-t border-border pt-8 sm:grid-cols-3"><div><dt className="text-xs uppercase tracking-widest text-muted-foreground">Role</dt><dd className="mt-2 font-medium">{project.role}</dd></div><div><dt className="text-xs uppercase tracking-widest text-muted-foreground">Services</dt><dd className="mt-2 font-medium">{project.services.join(", ")}</dd></div><div><dt className="text-xs uppercase tracking-widest text-muted-foreground">Year</dt><dd className="mt-2 font-medium">{project.year}</dd></div></dl></Container></Section><Container><div className={`aspect-[16/9] rounded-[2rem] border border-border bg-gradient-to-br ${project.accent}`} /></Container><Section><Container><article className="mx-auto max-w-3xl">{content}</article></Container></Section><ContactCta /></>;
}
