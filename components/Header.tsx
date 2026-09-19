import Link from "next/link";
import { navItems } from "@/data/site";

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="BIDA Student Wing home">
          <span className="brand-mark" aria-hidden="true">B</span>
          <span>
            <strong>BIDA</strong>
            <small>Student Wing</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="header-cta" href="/opportunities">
          Get involved
        </Link>

        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            {navItems.map((item) => (
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
