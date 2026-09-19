# Backend plan

The public website is intentionally usable before the transactional systems are activated.

## Phase 1 — public platform

Current build:
- Public information architecture
- Programme pages
- Event calendar interface
- Registration/application interfaces
- Policies and accessibility
- SEO and deployment pipeline

## Phase 2 — shared calendar

Recommended:
- BIDA-controlled Google Calendar
- Public event data read server-side
- Five-minute website cache
- Teams update the shared calendar; website reflects changes automatically

Environment variables:
- `GOOGLE_CALENDAR_ID`
- `GOOGLE_CALENDAR_API_KEY`

## Phase 3 — conference registration

Recommended stack:
- Supabase: delegate database
- Resend (or BIDA-approved equivalent): confirmation/reminder email
- Server-side validation in Next.js
- No student account required

Suggested record:
- name
- email
- medical school
- year of study
- accessibility/dietary information only where needed
- registration timestamp
- confirmation/reminder status

## Phase 4 — research applications

Recommended:
- Project table
- Application table
- Internal review status
- Email-based applicant updates
- No student account in the initial version

If application volume later justifies it, an authenticated student dashboard can be added without redesigning the public site.

## Phase 5 — internal publishing/admin

Later, authorised programme leads can be given a simple admin/CMS workflow for:
- Events
- News
- Opportunities
- Research projects
- Conference content
- Resource publishing

Access should be role-based and use BIDA-controlled identities.
