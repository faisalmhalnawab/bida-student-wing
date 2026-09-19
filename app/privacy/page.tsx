import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy & Data Protection",
  description:
    "Privacy and data-protection information for the BIDA Student Wing website and future online services.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="programme-page-hero privacy-page-hero">
        <div className="shell programme-page-hero-grid">
          <div>
            <span className="eyebrow light">Privacy & data protection</span>
            <h1>Clear information before we collect information.</h1>
            <p>
              BIDA Student Wing is building registration, application and contact
              features in stages. The public privacy notice will develop alongside
              those services so students can understand what is collected and why.
            </p>
          </div>
          <div className="privacy-status-card">
            <span>Development notice</span>
            <strong>Current website build</strong>
            <p>
              No Student Wing account system is active, and the conference,
              research-application and contact-form backends are not yet enabled.
            </p>
          </div>
        </div>
      </section>

      <section className="section shell privacy-layout">
        <aside className="privacy-index">
          <span>On this page</span>
          <a href="#current">Current website</a>
          <a href="#future">Future forms</a>
          <a href="#principles">Our principles</a>
          <a href="#updates">Updates</a>
        </aside>

        <div className="privacy-copy">
          <section id="current">
            <span className="eyebrow">01 · Current website</span>
            <h2>What this build currently does.</h2>
            <p>
              The current website is primarily informational. Student Wing user
              accounts, delegate registration, research applications and the
              public contact form are not active in this build.
            </p>
            <p>
              As with most hosted websites, the hosting infrastructure may process
              technical request information needed to serve and secure the site.
              The Student Wing has not intentionally configured optional marketing
              or behavioural tracking in the current build.
            </p>
          </section>

          <section id="future">
            <span className="eyebrow">02 · Future forms</span>
            <h2>Registration and application features will have clear notices.</h2>
            <p>
              Before conference registration, research applications or other
              data-collection forms go live, the relevant page will explain what
              information is required, the purpose for processing it, who can
              access it, the retention approach and the route for questions or
              rights requests.
            </p>
          </section>

          <section id="principles">
            <span className="eyebrow">03 · Our principles</span>
            <h2>Data should be proportionate to the programme.</h2>
            <div className="privacy-principles">
              <div><strong>Minimum necessary</strong><p>Collect only what is needed for the stated programme purpose.</p></div>
              <div><strong>Organisational access</strong><p>Use BIDA-controlled systems and shared authorised access rather than personal accounts.</p></div>
              <div><strong>Clear purpose</strong><p>Explain why information is requested before submission.</p></div>
              <div><strong>Secure handling</strong><p>Keep internal records and access limited to the people who need them.</p></div>
            </div>
          </section>

          <section id="updates">
            <span className="eyebrow">04 · Updates</span>
            <h2>This notice will be updated as services are activated.</h2>
            <p>
              The final public contact route and any service-specific privacy
              wording will be added before the relevant forms are enabled.
            </p>
            <small>Development notice · Last reviewed September 2026</small>
          </section>
        </div>
      </section>
    </>
  );
}
