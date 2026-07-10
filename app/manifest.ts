import type { MetadataRoute } from "next";
import { siteConfig } from "@/constants/site";

export default function manifest(): MetadataRoute.Manifest { return { name: `${siteConfig.name} — Portfolio`, short_name: siteConfig.name, description: siteConfig.description, start_url: "/", display: "standalone", background_color: "#f9f9fa", theme_color: "#f9f9fa" }; }
