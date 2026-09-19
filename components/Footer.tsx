import Link from "next/link";
import { navItems } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark" aria-hidden="true">B</span>
            <span>
              <strong>BIDA</strong>
              <small>Student Wing</small>
            </span>
          </div>
          <p className="footer-copy">
            A national student community supporting education, research,
            leadership and professional development across UK medical schools.
          </p>
        </div>

        <div>
          <p className="footer-heading">Explore</p>
          <div className="footer-links">
            {navItems.slice(0, 4).map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </div>
        </div>

        <div>
          <p className="footer-heading">Participate</p>
          <div className="footer-links">
            {navItems.slice(4).map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </div>
        </div>

        <div>
          <p className="footer-heading">Organisation</p>
          <div className="footer-links">
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy</Link>
          </div>
        </div>
      </div>

      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} BIDA Student Wing</span>
        <span>2026–27 digital programme</span>
      </div>
    </footer>
  );
}
