import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies",
  description: "Cookie and similar-technology information for the BIDA Student Wing website.",
};

export default function CookiesPage() {
  return (
    <>
      <section className="programme-page-hero privacy-page-hero">
        <div className="shell programme-page-hero-grid">
          <div>
            <span className="eyebrow light">Cookies</span>
            <h1>Simple by default.</h1>
            <p>
              The current Student Wing website does not intentionally use
              advertising cookies or behavioural tracking. This page will be
              updated before optional analytics or other non-essential
              technologies are introduced.
            </p>
          </div>
          <div className="privacy-status-card">
            <span>Current build</span>
            <strong>No optional marketing cookies configured</strong>
            <p>
              Essential hosting and security technologies may still be used by
              the infrastructure required to serve and protect the website.
            </p>
          </div>
        </div>
      </section>

      <section className="section shell privacy-layout">
        <aside className="privacy-index">
          <span>On this page</span>
          <a href="#essential">Essential technologies</a>
          <a href="#analytics">Analytics</a>
          <a href="#changes">Future changes</a>
        </aside>

        <div className="privacy-copy">
          <section id="essential">
            <span className="eyebrow">01 · Essential</span>
            <h2>Technology needed to deliver and secure the site.</h2>
            <p>
              The hosting platform may use technical mechanisms required for
              routing, reliability, abuse prevention and security. These are part
              of operating the service rather than Student Wing advertising.
            </p>
          </section>

          <section id="analytics">
            <span className="eyebrow">02 · Analytics</span>
            <h2>Optional analytics are not part of the current build.</h2>
            <p>
              If privacy-conscious analytics are introduced later, this page and
              the relevant consent approach will be reviewed before activation.
            </p>
          </section>

          <section id="changes">
            <span className="eyebrow">03 · Future changes</span>
            <h2>The notice will change with the technology.</h2>
            <p>
              New cookies or similar technologies will be documented with their
              purpose and, where required, an appropriate choice or consent route.
            </p>
            <small>Cookie information · September 2026</small>
          </section>
        </div>
      </section>
    </>
  );
}
