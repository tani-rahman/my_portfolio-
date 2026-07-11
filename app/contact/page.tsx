import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/constants/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ title: "Contact", description: "Contact Mahinur Rahman Tani about web development, AI collaboration, or research opportunities.", path: "/contact" });

export default function ContactPage() {
  return <Section className="pt-24 sm:pt-32"><Container><div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Contact</p><h1 className="mt-7 text-balance text-5xl font-semibold tracking-[-0.055em] sm:text-7xl">Let’s build something meaningful.</h1><p className="mt-7 max-w-lg text-lg leading-8 text-muted-foreground">Share a little about your idea, team, and timeline. I usually respond within two business days.</p><p className="mt-8 text-sm text-muted-foreground">Prefer email? <Link className="font-medium text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</Link></p></div><ContactForm /></div></Container></Section>;
}
