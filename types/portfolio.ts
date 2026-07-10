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

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Partial<Record<"name" | "email" | "message", string[]>>;
}
