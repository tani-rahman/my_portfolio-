import type { Education, ExperienceArea, NavigationItem, Project, SkillGroup, SocialLink } from "@/types/portfolio";

export const siteConfig = {
  name: "Mahinur Rahman Tani",
  role: "Full Stack Web Developer",
  description:
    "Computer Science student building scalable full-stack applications and exploring Artificial Intelligence and Large Language Models.",
  email: "tanimahinurrahman@gmail.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  location: "Bangladesh",
} as const;

export const profile = {
  about:
    "I am a Computer Science student passionate about Full Stack Web Development and Artificial Intelligence. I enjoy building scalable web applications using Laravel, PHP, WordPress, and modern frontend technologies. My goal is to contribute to impactful software projects while pursuing research in AI and Large Language Models.",
  objective:
    "I am seeking opportunities to build modern web applications, contribute to AI research, and pursue graduate studies through an international master’s scholarship.",
} as const;

export const education: Education = {
  degree: "B.Sc. in Computer Science & Engineering",
  institution: "International Islamic University Chittagong",
  result: "CGPA 3.43",
};

export const skillGroups: readonly SkillGroup[] = [
  { category: "Frontend", skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"] },
  { category: "Backend", skills: ["PHP", "Laravel", "Node.js"] },
  { category: "Database", skills: ["MySQL", "PostgreSQL"] },
  { category: "CMS", skills: ["WordPress"] },
  { category: "Tools", skills: ["Git", "GitHub", "Figma", "VS Code"] },
  { category: "AI", skills: ["OpenAI API", "LLM Applications", "Prompt Engineering"] },
] as const;

export const experienceAreas: readonly ExperienceArea[] = [
  { title: "Field Work", description: "Practical collaboration and problem-solving in real-world environments." },
  { title: "Internship", description: "Professional exposure to development workflows, teamwork, and delivery." },
  { title: "University Projects", description: "Applied software engineering through academic and independent projects." },
  { title: "Research", description: "Growing research interests in Artificial Intelligence and Large Language Models." },
] as const;

export const navigation: readonly NavigationItem[] = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks: readonly SocialLink[] = [
  { label: "GitHub", href: "https://github.com/tani-rahman", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mahinur-rahman-tani-441a12328", external: true },
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
  "Full-stack web development",
  "Laravel & PHP applications",
  "Modern React interfaces",
  "WordPress development",
  "Database design",
  "AI & LLM applications",
] as const;
