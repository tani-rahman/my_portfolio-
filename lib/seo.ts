import type { Metadata } from "next";

import { siteConfig } from "@/constants/site";

export function createMetadata({
  title,
  description = siteConfig.description,
  path = "",
}: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const url = new URL(path, siteConfig.url);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
