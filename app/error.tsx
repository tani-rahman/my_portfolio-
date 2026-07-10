"use client";

import { RotateCcw } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export interface ErrorPageProps { error: Error & { digest?: string }; reset: () => void; }

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => { console.error(error); }, [error]);
  return <Container className="py-24 sm:py-32"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Something went wrong</p><h1 className="mt-7 max-w-3xl text-5xl font-semibold tracking-[-0.05em] sm:text-7xl">That page hit an unexpected snag.</h1><p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">Try the request again. If the problem continues, please get in touch directly.</p><Button className="mt-9" onClick={reset} size="large"><RotateCcw aria-hidden="true" className="size-4" />Try again</Button></Container>;
}
