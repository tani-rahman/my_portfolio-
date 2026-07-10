import "server-only";

import type { ReactNode } from "react";
import Atelier from "@/content/projects/atelier.mdx";
import Northstar from "@/content/projects/northstar.mdx";
import Relay from "@/content/projects/relay.mdx";

const projectContent: Record<string, ReactNode> = { northstar: <Northstar />, atelier: <Atelier />, relay: <Relay /> };

export function getProjectContent(slug: string): ReactNode { return projectContent[slug]; }
