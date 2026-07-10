import type { MetadataRoute } from "next";
import { projects, siteConfig } from "@/constants/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/contact"].map((path) => ({ url: new URL(path, siteConfig.url).toString(), lastModified: new Date(), changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.7 }));
  const projectRoutes = projects.map(({ slug }) => ({ url: new URL(`/projects/${slug}`, siteConfig.url).toString(), lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 }));
  return [...routes, ...projectRoutes];
}
