# Portfolio

A production-focused portfolio built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, shadcn/ui conventions, MDX, Motion, GSAP, Lenis, Resend, and Vercel.

## Local development

1. Copy `.env.example` to `.env.local` and configure Resend when email delivery is required.
2. Run `npm run dev`.
3. Open `http://localhost:3000`.

In development, the contact form succeeds without Resend credentials so the interface can be evaluated locally. Production requires `RESEND_API_KEY` and `CONTACT_EMAIL`.

## Quality checks

Run `npm run check` to lint, type-check, and create a production build.

## Content

Update identity and navigation in `constants/site.ts`. Project narratives live in `content/projects` as MDX.
