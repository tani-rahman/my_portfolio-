import type { Metadata } from "next";
import { ContactCta } from "@/components/sections/contact-cta";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ title: "About", description: "A designer and engineer focused on useful, enduring digital products.", path: "/about" });

export default function AboutPage() {
  return <><Section className="pt-24 sm:pt-32"><Container><p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">About</p><h1 className="mt-8 max-w-6xl text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-8xl">I turn complex ideas into clear, useful experiences.</h1><div className="mt-16 grid gap-10 border-t border-border pt-10 text-lg leading-8 text-muted-foreground lg:grid-cols-2 lg:gap-20"><p>I work across design and engineering because the strongest products emerge when both disciplines shape each other. My process moves from understanding the real problem to crafting the smallest, most thoughtful solution.</p><p>I partner with ambitious teams on product strategy, interaction design, design systems, and production frontend architecture—with accessibility and performance built in from the first decision.</p></div></Container></Section><ContactCta /></>;
}
