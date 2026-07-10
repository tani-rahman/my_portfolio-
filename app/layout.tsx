import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ThemeProvider } from "@/components/theme-provider";
import { SkipLink } from "@/components/ui/skip-link";
import { siteConfig } from "@/constants/site";
import "./globals.css";

export const metadata: Metadata = { metadataBase: new URL(siteConfig.url), title: { default: `${siteConfig.name} — ${siteConfig.role}`, template: `%s — ${siteConfig.name}` }, description: siteConfig.description, applicationName: `${siteConfig.name} Portfolio`, authors: [{ name: siteConfig.name }], creator: siteConfig.name };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html className={`${GeistSans.variable} ${GeistMono.variable}`} lang="en" suppressHydrationWarning><body className="antialiased"><ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange enableSystem><SmoothScroll><SkipLink /><Header /><main id="main-content">{children}</main><Footer /></SmoothScroll></ThemeProvider></body></html>;
}
