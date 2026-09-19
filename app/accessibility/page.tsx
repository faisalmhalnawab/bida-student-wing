import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "Accessibility information for the BIDA Student Wing website.",
};

export default function AccessibilityPage() {
  return (
    <>
      <section className="programme-page-hero accessibility-page-hero">
        <div className="shell programme-page-hero-grid">
          <div>
            <span className="eyebrow light">Accessibility</span>
            <h1>Designed to be usable, readable and reachable.</h1>
            <p>
              BIDA Student Wing aims to make its digital information accessible
              to students across institutions, devices and stages of training.
            </p>
          </div>
          <div className="privacy-status-card">
            <span>Accessibility approach</span>
            <strong>Built in, then reviewed</strong>
            <p>
              Accessibility is treated as part of publishing quality, not as a
              final cosmetic check after content is released.
            </p>
          </div>
        </div>
      </section>

      <section className="section shell privacy-layout">
        <aside className="privacy-index">
          <span>On this page</span>
          <a href="#approach">Our approach</a>
          <a href="#features">Current features</a>
          <a href="#content">Content standards</a>
          <a href="#report">Report an issue</a>
        </aside>

        <div className="privacy-copy">
          <section id="approach">
            <span className="eyebrow">01 · Our approach</span>
            <h2>Accessibility is part of the website standard.</h2>
            <p>
              We aim to follow recognised web-accessibility practice and to
              improve the site as content, events, forms and interactive services
              are added. Formal compliance should be assessed against the live,
              completed service rather than assumed from design alone.
            </p>
          </section>

          <section id="features">
            <span className="eyebrow">02 · Current features</span>
            <h2>Core interactions are designed for more than one input method.</h2>
            <div className="privacy-principles">
              <div><strong>Keyboard access</strong><p>Navigation and links use visible focus states and logical tab order.</p></div>
              <div><strong>Skip navigation</strong><p>A skip link allows keyboard users to move directly to the main content.</p></div>
              <div><strong>Reduced motion</strong><p>The site respects reduced-motion preferences for interface transitions.</p></div>
              <div><strong>Responsive layout</strong><p>Pages adapt across mobile, tablet and desktop screen sizes.</p></div>
            </div>
          </section>

          <section id="content">
            <span className="eyebrow">03 · Content standards</span>
            <h2>Public information should remain clear when programmes change.</h2>
            <p>
              Event changes should be labelled clearly, headings should remain
              descriptive, links should make sense in context, and published
              resources should use accessible formats wherever practicable.
            </p>
          </section>

          <section id="report">
            <span className="eyebrow">04 · Report an issue</span>
            <h2>Accessibility feedback will route through the official contact channel.</h2>
            <p>
              Once the approved BIDA Student Wing contact route is published,
              accessibility issues can be reported through the Contact page for
              review and correction.
            </p>
            <small>Accessibility statement · September 2026</small>
          </section>
        </div>
      </section>
    </>
  );
}
