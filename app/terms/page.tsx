import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Website Use",
  description: "Website-use information for the BIDA Student Wing digital hub.",
};

export default function TermsPage() {
  return (
    <>
      <section className="programme-page-hero privacy-page-hero">
        <div className="shell programme-page-hero-grid">
          <div>
            <span className="eyebrow light">Website use</span>
            <h1>Reliable information, with programme changes clearly labelled.</h1>
            <p>
              The Student Wing website is intended to be the public source for
              programme information, opportunities, events, research and approved
              resources as the 2026–27 infrastructure develops.
            </p>
          </div>
          <div className="privacy-status-card">
            <span>Important</span>
            <strong>Working plans are not the same as confirmed events</strong>
            <p>
              Dates, speakers, vacancies and programme details should be treated
              as confirmed only when they are explicitly published as such.
            </p>
          </div>
        </div>
      </section>

      <section className="section shell privacy-layout">
        <aside className="privacy-index">
          <span>On this page</span>
          <a href="#information">Information status</a>
          <a href="#resources">Educational resources</a>
          <a href="#links">External links</a>
          <a href="#contact">Corrections</a>
        </aside>

        <div className="privacy-copy">
          <section id="information">
            <span className="eyebrow">01 · Information status</span>
            <h2>Plans can change as programmes are confirmed.</h2>
            <p>
              Working schedules, conference plans and future service descriptions
              may change before delivery. Confirmed changes should be reflected on
              the relevant programme or event page.
            </p>
          </section>

          <section id="resources">
            <span className="eyebrow">02 · Educational resources</span>
            <h2>Learning material supports education; it does not replace professional judgement.</h2>
            <p>
              Student Wing teaching and resources are educational. Users remain
              responsible for applying local guidance, supervision and
              professional standards in clinical environments.
            </p>
          </section>

          <section id="links">
            <span className="eyebrow">03 · External links</span>
            <h2>Some services may link to third-party organisations.</h2>
            <p>
              Where the website links to external registration, professional,
              institutional or educational services, those services operate under
              their own terms and privacy information.
            </p>
          </section>

          <section id="contact">
            <span className="eyebrow">04 · Corrections</span>
            <h2>Found something outdated or incorrect?</h2>
            <p>
              Use the official contact route so the Student Wing team can review
              and correct programme information.
            </p>
            <Link className="button dark" href="/contact">Contact BIDA Student Wing</Link>
          </section>
        </div>
      </section>
    </>
  );
}
