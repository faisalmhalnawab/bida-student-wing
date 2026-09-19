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
  { value: "135+", label: "student representatives across 27 schools · 2025/26" },
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
