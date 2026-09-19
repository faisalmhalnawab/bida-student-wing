import Image from "next/image";
import Link from "next/link";

const navGroups = [
  {
    label: "About",
    href: "/about",
    items: [
      { label: "Who we are", href: "/about#who-we-are" },
      { label: "How we work", href: "/about#structure" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Trustees", href: "/about#trustees" },
    ],
  },
  {
    label: "Education",
    href: "/education",
    items: [
      { label: "National Teaching", href: "/education#streams" },
      { label: "Clinical UKMLA", href: "/education#clinical" },
      { label: "OSCE", href: "/education#osce" },
      { label: "Pre-clinical", href: "/education#pre-clinical" },
    ],
  },
  { label: "Events", href: "/events" },
  {
    label: "Conference",
    href: "/conference",
    items: [
      { label: "Conference overview", href: "/conference#overview" },
      { label: "Programme", href: "/conference#programme" },
      { label: "Speakers", href: "/conference#speakers" },
      { label: "Abstracts & registration", href: "/conference#abstracts" },
    ],
  },
  {
    label: "Research",
    href: "/research",
    items: [
      { label: "Research Department", href: "/research#department" },
      { label: "Projects", href: "/research#pathway" },
      { label: "Research training", href: "/research#training" },
      { label: "Apply", href: "/research#apply" },
    ],
  },
  { label: "Opportunities", href: "/opportunities" },
  { label: "News", href: "/news" },
  { label: "Resources", href: "/resources" },
] as const;

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="BIDA Student Wing home">
          <span className="brand-logo">
            <Image
              src="/bida-student-wing-logo.webp"
              alt=""
              width={52}
              height={52}
              priority
            />
          </span>
          <span className="brand-copy">
            <strong>BIDA Student Wing</strong>
            <small>British International Doctors&apos; Association</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navGroups.map((item) =>
            "items" in item ? (
              <div className="nav-group" key={item.href}>
                <Link className="nav-parent" href={item.href}>
                  {item.label}
                  <span aria-hidden="true">⌄</span>
                </Link>
                <div className="nav-dropdown">
                  {item.items.map((child) => (
                    <Link key={child.href + child.label} href={child.href}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            )
          )}
        </nav>

        <Link className="header-cta" href="/opportunities">
          Get involved
        </Link>

        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            {navGroups.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/contact">Contact</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
