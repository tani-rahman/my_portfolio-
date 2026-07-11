import { ImageResponse } from "next/og";
import { siteConfig } from "@/constants/site";

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ alignItems: "flex-end", background: "#0e0f12", color: "#f7f7f8", display: "flex", height: "100%", justifyContent: "space-between", padding: "72px", width: "100%" }}><div style={{ display: "flex", flexDirection: "column", gap: 22 }}><span style={{ color: "#a1a1aa", fontSize: 24 }}>{siteConfig.name}</span><strong style={{ fontSize: 76, letterSpacing: "-4px", lineHeight: 0.95, maxWidth: 850 }}>Full Stack Web Developer</strong></div><span style={{ color: "#a1a1aa", fontSize: 22 }}>{siteConfig.location}</span></div>, size);
}
