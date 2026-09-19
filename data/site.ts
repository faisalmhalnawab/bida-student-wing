export const navItems = [
  { label: "About", href: "/about" },
  { label: "Education", href: "/education" },
  { label: "Events", href: "/events" },
  { label: "Conference", href: "/conference" },
  { label: "Research", href: "/research" },
  { label: "Opportunities", href: "/opportunities" },
  { label: "News", href: "/news" },
  { label: "Resources", href: "/resources" },
] as const;

export const impactStats = [
  { value: "35", label: "UK medical schools reached · 2025/26" },
  { value: "47", label: "national teaching sessions · 2025/26" },
  { value: "50+", label: "live teaching hours · 2025/26" },
  { value: "135+", label: "student representatives · 2025/26" },
] as const;

export const programmeCards = [
  {
    eyebrow: "Educate",
    title: "National Teaching",
    body: "A connected pathway spanning pre-clinical learning, UKMLA clinical teaching and structured OSCE practice.",
    href: "/education",
  },
  {
    eyebrow: "Convene",
    title: "National Conference",
    body: "A national forum bringing students together with doctors, educators, researchers and professional organisations.",
    href: "/conference",
  },
  {
    eyebrow: "Discover",
    title: "Research",
    body: "A governed pathway connecting students with supervised projects, practical methods training and credible outputs.",
    href: "/research",
  },
  {
    eyebrow: "Connect",
    title: "Opportunities",
    body: "Representative roles, committee vacancies and national opportunities designed to widen participation across UK medical schools.",
    href: "/opportunities",
  },
] as const;

export const sectionContent: Record<
  string,
  { title: string; eyebrow: string; intro: string; bullets: string[] }
> = {
  about: {
    eyebrow: "About",
    title: "A national student community built to last.",
    intro:
      "BIDA Student Wing brings medical students together through national education, research, leadership and professional development.",
    bullets: [
      "Leadership and committee structure",
      "Trustees and short professional biographies",
      "Mission, governance and official contacts",
      "A clear view of how the Student Wing works across its national programmes",
    ],
  },
  education: {
    eyebrow: "National Teaching",
    title: "One learning pathway, from foundations to clinical performance.",
    intro:
      "The 2026–27 programme connects pre-clinical teaching, twice-weekly UKMLA clinical teaching and weekly OSCE practice.",
    bullets: [
      "Pre-clinical teaching from February to May 2027",
      "UKMLA clinical teaching from October 2026 to May 2027",
      "Weekly OSCE teaching across the active clinical period",
      "Published schedules, faculty information and feedback routes",
    ],
  },
  events: {
    eyebrow: "Events",
    title: "One reliable place for what is happening next.",
    intro:
      "The events hub will become the public source of truth for teaching, conference activity, research workshops and national Student Wing events.",
    bullets: [
      "Live calendar",
      "Registration links",
      "Speaker and session information",
      "Clearly labelled schedule changes",
    ],
  },
  conference: {
    eyebrow: "National Conference",
    title: "The flagship point of connection for the BIDA Student Wing.",
    intro:
      "The sixth National Conference is planned as an accessible national forum for professional formation, leadership, equity and academic development.",
    bullets: [
      "Programme and speaker announcements",
      "Delegate registration",
      "Abstract and poster information",
      "Partners, updates and post-conference legacy resources",
    ],
  },
  research: {
    eyebrow: "Research",
    title: "From opportunity to credible output.",
    intro:
      "The Research Department will provide a transparent pathway from project ideas and supervision through governance, delivery and dissemination.",
    bullets: [
      "Supervisor-supported projects",
      "Published eligibility and application routes",
      "Practical research-skills teaching",
      "Abstract, poster and manuscript opportunities",
    ],
  },
  opportunities: {
    eyebrow: "Get Involved",
    title: "National opportunities, clearly advertised.",
    intro:
      "Vacancies and representative roles will be published with deadlines, criteria and clear routes to apply.",
    bullets: [
      "Medical-school representative recruitment",
      "Committee vacancies",
      "Teaching and conference opportunities",
      "Transparent deadlines and selection criteria",
    ],
  },
  news: {
    eyebrow: "News",
    title: "Updates from across the Student Wing.",
    intro:
      "A dedicated news area will capture announcements, programme milestones, conference updates and organisational activity.",
    bullets: [
      "Programme announcements",
      "Conference milestones",
      "Research and opportunity updates",
      "Student Wing achievements and reports",
    ],
  },
  resources: {
    eyebrow: "Resources",
    title: "Useful material, preserved beyond a single committee year.",
    intro:
      "Approved educational resources, reports, policies and handover material will be organised in one accessible archive.",
    bullets: [
      "Annual and achievement reports",
      "Approved learning resources",
      "Policies and guidance",
      "Institutional archive and handover material",
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Reach the right part of BIDA Student Wing.",
    intro:
      "The final contact routes will use official BIDA-controlled channels rather than personal inboxes.",
    bullets: [
      "General enquiries",
      "Teaching enquiries",
      "Conference enquiries",
      "Research and partnership enquiries",
    ],
  },
  privacy: {
    eyebrow: "Privacy",
    title: "Privacy information will be published before data-collection features launch.",
    intro:
      "This page is reserved for the approved privacy notice covering registrations, applications, mailing lists and website analytics.",
    bullets: [
      "What information is collected",
      "Why it is processed",
      "How long it is retained",
      "How users can exercise their rights",
    ],
  },
};
