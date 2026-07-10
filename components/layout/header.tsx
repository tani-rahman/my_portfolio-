import Link from "next/link";

import { navigation, siteConfig } from "@/constants/site";
import { ThemeToggle } from "@/components/theme-toggle";
import { Container } from "@/components/ui/container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <Link className="rounded-sm text-sm font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" href="/">
          {siteConfig.name}
        </Link>
        <div className="flex items-center gap-1 sm:gap-4">
          <nav aria-label="Primary navigation">
            <ul className="flex items-center">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link className="inline-flex min-h-11 items-center rounded-full px-3 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:px-4" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
