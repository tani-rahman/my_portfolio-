export interface NavigationItem {
  label: string;
  href: string;
}

export interface SocialLink extends NavigationItem {
  external: boolean;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  year: string;
  role: string;
  services: readonly string[];
  featured: boolean;
  accent: string;
}

export interface Education {
  degree: string;
  institution: string;
  result: string;
}

export interface SkillGroup {
  category: string;
  skills: readonly string[];
}

export interface ExperienceArea {
  title: string;
  description: string;
}

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Partial<Record<"name" | "email" | "message", string[]>>;
}
