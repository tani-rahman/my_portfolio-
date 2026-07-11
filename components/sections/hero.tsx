import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/constants/site";

export function Hero() {
  return <section className="relative overflow-hidden pb-20 pt-24 sm:pb-28 sm:pt-32 lg:min-h-[calc(100svh-4rem)] lg:py-36"><div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[36rem] w-[52rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.14),transparent_65%)] blur-3xl" /><Container><Reveal><p className="flex items-center gap-2 text-sm font-medium text-muted-foreground"><span className="size-2 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.12)]" />{siteConfig.role} · {siteConfig.location}</p></Reveal><Reveal delay={0.08}><h1 className="mt-9 max-w-6xl text-balance text-[clamp(3.5rem,10vw,8.5rem)] font-semibold leading-[0.92] tracking-[-0.065em]">Building the web.<br /><span className="text-muted-foreground">Exploring AI.</span></h1></Reveal><Reveal delay={0.16} className="mt-10 flex max-w-5xl flex-col gap-8 sm:mt-14 sm:flex-row sm:items-end sm:justify-between"><p className="max-w-xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">{siteConfig.description}</p><div className="flex flex-wrap gap-3"><Button asChild size="large"><Link href="/#work">Explore work <ArrowDown aria-hidden="true" className="size-4" /></Link></Button><Button asChild size="large" variant="secondary"><Link href="/contact">Start a conversation <ArrowUpRight aria-hidden="true" className="size-4" /></Link></Button></div></Reveal></Container></section>;
}
