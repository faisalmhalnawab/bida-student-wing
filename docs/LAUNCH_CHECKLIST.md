# BIDA Student Wing — launch checklist

This checklist separates work that can be completed in code from information or access that must be approved/provided by BIDA.

## Already implemented

- Responsive public website and BIDA Student Wing branding
- Home page
- About, structure, leadership and trustees sections
- National Teaching page
- Events hub and optional shared Google Calendar integration
- National Conference page and registration journey preview
- National Research Department page and application journey preview
- Opportunities hub
- News hub
- Reports & Resources hub
- Contact page
- Privacy, cookies, accessibility and website-use pages
- Sitemap, robots metadata and page-level SEO metadata
- Mobile navigation and desktop dropdown navigation
- Keyboard focus states, skip navigation and reduced-motion handling
- GitHub Actions production build, TypeScript and dependency-audit checks
- Vercel automatic deployment
- Security-fixed Next.js release

## Organisational content still required

- Final approved BIDA Student Wing domain/subdomain
- Final leadership directory beyond President / Vice President
- Trustee names, titles, biographies and approved photographs
- Named programme leads and official biographies where they will be public
- Official BIDA Student Wing email/contact routing
- Official social-media URLs once accounts are approved
- Approved public policies or reports for the Resources hub

## Events integration

To activate the shared live calendar in Vercel, provide:

- `GOOGLE_CALENDAR_ID`
- `GOOGLE_CALENDAR_API_KEY`

The selected calendar must be suitable for public website publishing. Event titles, dates, locations and access links should be treated as public content.

## National Conference

Before registration is activated:

- Confirm date and delivery format
- Confirm registration questions
- Confirm approved privacy wording and retention period
- Confirm sender email/domain
- Confirm reminder schedule
- Configure database and transactional email service
- Test duplicate registration handling
- Test confirmation and reminder emails
- Publish speakers only after confirmation
- Publish abstract/poster criteria after academic approval

## Research Department

Before applications are activated:

- Confirm approved projects and named supervisors
- Confirm eligibility and selection criteria
- Confirm governance status / requirements for each project
- Confirm application questions
- Confirm who can access application data
- Confirm retention and deletion process
- Confirm applicant communication templates

## Pre-launch QA

- Review every page for Executive Committee sign-off
- Replace all working dates/statuses with confirmed information where applicable
- Check mobile layouts on iOS and Android
- Run keyboard-only navigation
- Run automated accessibility testing and manually review headings / contrast
- Check all links
- Confirm no expired meeting or access links are public
- Confirm policy wording with the appropriate BIDA owner
- Connect the official domain
- Re-run CI build, TypeScript and dependency audit
- Test sitemap and search-engine indexing after the official domain is connected

## Governance

The website should remain BIDA-controlled. Shared access, publishing ownership, credentials, assets, permissions and handover records should not depend on one person's personal account.
