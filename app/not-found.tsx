import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return <Container className="py-24 sm:py-32"><p className="font-mono text-sm text-muted-foreground">404</p><h1 className="mt-7 max-w-3xl text-5xl font-semibold tracking-[-0.05em] sm:text-7xl">This page wandered off.</h1><p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">The address may have changed, or the page may no longer exist.</p><Button asChild className="mt-9" size="large"><Link href="/"><ArrowLeft aria-hidden="true" className="size-4" />Back home</Link></Button></Container>;
}
