import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-topline">
        <div>
          <span className="eyebrow light">BIDA Student Wing</span>
          <strong>One trusted digital front door.</strong>
        </div>
        <Link className="footer-cta" href="/opportunities">Get involved →</Link>
      </div>

      <div className="shell footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-logo footer-logo">
              <Image
                src="/bida-student-wing-logo.webp"
                alt=""
                width={64}
                height={64}
              />
            </span>
            <span className="brand-copy">
              <strong>BIDA Student Wing</strong>
              <small>British International Doctors&apos; Association</small>
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
            <Link href="/about#leadership">Leadership</Link>
            <Link href="/about#trustees">Trustees</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/accessibility">Accessibility</Link>
          </div>
        </div>
      </div>

      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} BIDA Student Wing</span>
        <span>National programme · 2026–27</span>
      </div>
    </footer>
  );
}
