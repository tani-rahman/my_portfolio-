import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function ContactCta() {
  return <Section><Container><Reveal className="overflow-hidden rounded-[2rem] border border-border bg-card p-7 shadow-[0_30px_100px_-55px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:p-12 lg:p-16"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Have a project in mind?</p><div className="mt-6 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between"><h2 className="max-w-4xl text-balance text-4xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">Let’s make something worth remembering.</h2><Button asChild className="shrink-0" size="large"><Link href="/contact">Start a conversation <ArrowUpRight aria-hidden="true" className="size-4" /></Link></Button></div></Reveal></Container></Section>;
}
