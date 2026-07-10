import { Container } from "@/components/ui/container";

export default function Loading() {
  return <Container className="animate-pulse py-24 sm:py-32" aria-label="Loading page" role="status"><div className="h-4 w-28 rounded-full bg-muted" /><div className="mt-10 h-20 max-w-4xl rounded-3xl bg-muted sm:h-32" /><div className="mt-8 h-6 max-w-2xl rounded-full bg-muted" /><span className="sr-only">Loading…</span></Container>;
}
