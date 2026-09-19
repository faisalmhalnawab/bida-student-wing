# BIDA Student Wing Website

Digital home for the BIDA Student Wing 2026–27 programme.

## Stack

- Next.js App Router
- TypeScript
- Plain CSS design system
- GitHub source control
- Vercel deployment

## Public pages

- Home
- About, Leadership & Trustees
- National Teaching
- Events
- National Conference
- Research
- Opportunities
- News
- Reports & Resources
- Contact
- Privacy & Data Protection
- Cookies
- Accessibility
- Website use

## Current state

The public-facing information architecture and visual system are implemented.
The project builds on Next.js 16.3.5 and the CI pipeline runs dependency audit,
TypeScript validation and a production build on every push to main.
Programme content is based on the 2026–27 BIDA Student Wing strategic programme
and the agreed website meeting brief.

The following integrations are intentionally not activated yet because they
require approved organisational accounts, data-routing decisions, or credentials:

- Shared live events calendar
- Conference registration
- Automated confirmation / reminder emails
- Research application workflow
- Contact-form routing
- Optional analytics
- Content-management / admin workflow

## Planned integration stack

The application is structured so the next phase can use:

- Google Calendar or an approved shared calendar source for events
- Supabase for structured submissions / internal data
- Resend or an approved BIDA email service for transactional email
- BIDA-controlled accounts and shared organisational access

Student accounts are **not** part of the initial implementation. The agreed
first-phase model is form submission + internal review + email communication.

## Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Deployment

The `main` branch is connected to Vercel. Commits to `main` trigger a new
deployment automatically.


## Search indexing

The review deployment is intentionally `noindex` by default. Set
`SITE_INDEXING_ENABLED=true` only after BIDA has signed off the public launch.

Set `NEXT_PUBLIC_SITE_URL` to the final BIDA domain/subdomain before launch so
canonical site metadata, sitemap output and robots references use the official URL.
