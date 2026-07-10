"use client";

import { ArrowUpRight, LoaderCircle } from "lucide-react";
import { useActionState } from "react";

import { submitContactForm } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ContactFormState } from "@/types/portfolio";

const initialState: ContactFormState = { status: "idle", message: "" };
const inputStyles = "mt-2 min-h-12 w-full rounded-2xl border border-border bg-background/70 px-4 text-base outline-none transition focus:border-foreground/40 focus:ring-2 focus:ring-ring/30";

export interface ContactFormProps { className?: string; }

export function ContactForm({ className }: ContactFormProps) {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);

  return (
    <form action={formAction} className={cn("space-y-6 rounded-[2rem] border border-border bg-card p-6 shadow-[0_24px_80px_-50px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-8", className)} noValidate>
      <div><label className="text-sm font-medium" htmlFor="name">Name</label><input aria-describedby={state.fieldErrors?.name ? "name-error" : undefined} aria-invalid={Boolean(state.fieldErrors?.name)} autoComplete="name" className={inputStyles} id="name" name="name" required /><FieldError id="name-error" messages={state.fieldErrors?.name} /></div>
      <div><label className="text-sm font-medium" htmlFor="email">Email</label><input aria-describedby={state.fieldErrors?.email ? "email-error" : undefined} aria-invalid={Boolean(state.fieldErrors?.email)} autoComplete="email" className={inputStyles} id="email" name="email" required type="email" /><FieldError id="email-error" messages={state.fieldErrors?.email} /></div>
      <div><label className="text-sm font-medium" htmlFor="message">Tell me about your project</label><textarea aria-describedby={state.fieldErrors?.message ? "message-error" : undefined} aria-invalid={Boolean(state.fieldErrors?.message)} className={`${inputStyles} min-h-40 resize-y py-3`} id="message" name="message" required /><FieldError id="message-error" messages={state.fieldErrors?.message} /></div>
      <div aria-hidden="true" className="absolute -left-[9999px]"><label htmlFor="website">Website</label><input autoComplete="off" id="website" name="website" tabIndex={-1} /></div>
      {state.message ? <p aria-live="polite" className={cn("text-sm", state.status === "success" ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400")} role="status">{state.message}</p> : null}
      <Button className="w-full sm:w-auto" disabled={pending} size="large" type="submit">{pending ? <><LoaderCircle aria-hidden="true" className="size-4 animate-spin" />Sending…</> : <>Send enquiry <ArrowUpRight aria-hidden="true" className="size-4" /></>}</Button>
    </form>
  );
}

interface FieldErrorProps { id: string; messages?: string[]; }
function FieldError({ id, messages }: FieldErrorProps) { return messages?.[0] ? <p className="mt-2 text-sm text-red-600 dark:text-red-400" id={id}>{messages[0]}</p> : null; }
