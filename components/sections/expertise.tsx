import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { expertise } from "@/constants/site";
import { formatProjectIndex } from "@/utils/format";

export function Expertise() {
  return <Section><Container><div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><SectionHeading eyebrow="Capabilities" title="From ambiguity to a product people enjoy using." /><div className="border-t border-border">{expertise.map((item, index) => <Reveal delay={index * 0.04} key={item}><div className="flex items-center justify-between border-b border-border py-5 sm:py-6"><p className="text-lg font-medium sm:text-xl">{item}</p><span className="font-mono text-xs text-muted-foreground">{formatProjectIndex(index)}</span></div></Reveal>)}</div></div></Container></Section>;
}
