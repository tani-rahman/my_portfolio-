import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { siteConfig, socialLinks } from "@/constants/site";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-border/70 py-10">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-medium">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">© {new Date().getFullYear()} · Built with care.</p>
        </div>
        <nav aria-label="Social links">
          <ul className="flex flex-wrap gap-1">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <Link className="inline-flex min-h-11 items-center gap-1 rounded-full px-3 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" href={link.href} rel={link.external ? "noreferrer" : undefined} target={link.external ? "_blank" : undefined}>
                  {link.label}{link.external ? <ArrowUpRight aria-hidden="true" className="size-3.5" /> : null}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
