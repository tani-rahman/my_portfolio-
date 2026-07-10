import type { NavigationItem, Project, SocialLink } from "@/types/portfolio";

export const siteConfig = {
  name: "Alex Morgan",
  role: "Designer & Full-stack Engineer",
  description:
    "I design and build thoughtful digital products for ambitious teams, from first principle to polished release.",
  email: "hello@example.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  location: "Working globally",
} as const;

export const navigation: readonly NavigationItem[] = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks: readonly SocialLink[] = [
  { label: "GitHub", href: "https://github.com", external: true },
  { label: "LinkedIn", href: "https://linkedin.com", external: true },
  { label: "Email", href: `mailto:${siteConfig.email}`, external: false },
];

export const projects: readonly Project[] = [
  {
    slug: "northstar",
    title: "Northstar",
    summary: "A calm command center that turns complex operational data into clear, confident decisions.",
    year: "2026",
    role: "Product design & engineering",
    services: ["Strategy", "UX/UI", "Next.js"],
    featured: true,
    accent: "from-sky-400/35 via-indigo-400/20 to-transparent",
  },
  {
    slug: "atelier",
    title: "Atelier",
    summary: "An editorial commerce experience crafted for independent makers and considered objects.",
    year: "2025",
    role: "Design system & frontend",
    services: ["Art direction", "Design system", "Commerce"],
    featured: true,
    accent: "from-amber-300/35 via-rose-300/20 to-transparent",
  },
  {
    slug: "relay",
    title: "Relay",
    summary: "A collaborative workspace that helps distributed product teams stay in flow.",
    year: "2025",
    role: "Product engineering",
    services: ["Product strategy", "React", "Motion"],
    featured: true,
    accent: "from-emerald-300/35 via-cyan-300/20 to-transparent",
  },
];

export const expertise = [
  "Product strategy",
  "Interface design",
  "Design systems",
  "Full-stack engineering",
  "Creative development",
  "Performance & accessibility",
] as const;
