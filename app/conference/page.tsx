import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "National Conference",
  description: "The 6th BIDA Student Wing National Conference, planned for January 2027, with programme, abstracts and delegate information.",
};

const conferencePillars = [
  ["Professional formation", "Supporting the transition from medical student to doctor."],
  ["Leadership & equity", "National conversations around leadership, representation and opportunity."],
  ["Academic development", "A governed abstract and poster stream with transparent review."],
  ["National connection", "Students, doctors, regulators, educators and professional organisations in one forum."],
];

export default function ConferencePage() {
  return (
    <>
      <section className="conference-hero" id="overview">
        <div className="shell conference-hero-grid">
          <div>
            <span className="eyebrow light">6th BIDA Student Wing National Conference</span>
            <h1>A national platform with a year-round legacy.</h1>
            <p>
              Planned for January 2027, the sixth National Conference is being
              developed as the flagship point of connection between students,
              doctors, educators, researchers and professional organisations.
            </p>
            <div className="conference-meta-row">
              <div><span>Timing</span><strong>January 2027</strong></div>
              <div><span>Access</span><strong>National digital minimum</strong></div>
              <div><span>Format</span><strong>Virtual or hybrid — TBC</strong></div>
            </div>
          </div>

          <div className="conference-ticket" id="register">
            <span className="ticket-label">Conference 06</span>
            <strong>2027</strong>
            <h2>Registration opening later</h2>
            <p>
              Delegate registration will be handled through the BIDA website
              once the final date, format and programme are approved.
            </p>
            <span className="ticket-status">Registration not yet open</span>
          </div>
        </div>
      </section>

      <section className="section shell" id="programme">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Programme identity</span>
            <h2>More than a single conference day.</h2>
          </div>
          <p>
            The 2027 programme is intended to protect national accessibility
            while strengthening academic content, earlier planning and the
            relationships that continue afterwards.
          </p>
        </div>

        <div className="conference-pillars">
          {conferencePillars.map(([title, body], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="conference-legacy-section">
        <div className="shell conference-legacy-grid">
          <div>
            <span className="eyebrow light">The platform we inherit</span>
            <h2>The 2026 conference proved national reach.</h2>
            <p>
              The previous conference was a full-day national virtual event,
              included a principal partnership with the GMC, involved major
              professional bodies and engaged students across 35 UK medical schools.
            </p>
          </div>
          <div className="conference-numbers">
            <article><strong>35</strong><span>UK medical schools reached</span></article>
            <article><strong>1</strong><span>full-day national virtual event</span></article>
            <article><strong>2027</strong><span>next conference edition</span></article>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="conference-track-grid" id="speakers">
          <article className="conference-track conference-track-dark">
            <span>Programme</span>
            <h3>Speakers, sessions and national partners</h3>
            <p>
              The programme page will publish confirmed speakers and session
              information only after approval and confirmation.
            </p>
          </article>
          <article className="conference-track">
            <span>Academic</span>
            <h3>Abstract & poster stream</h3>
            <p>
              A national stream is planned with transparent criteria, conflict
              declarations, academic review and recognition for high-quality work.
            </p>
          </article>
          <article className="conference-track">
            <span>Delegate</span>
            <h3>Registration through BIDA</h3>
            <p>
              The website will support delegate registration and automated
              confirmation / reminder infrastructure rather than fragmenting the journey.
            </p>
          </article>
          <article className="conference-track">
            <span>Legacy</span>
            <h3>What remains afterwards matters</h3>
            <p>
              Speakers, sponsors, university contacts, evaluation, timelines,
              risks and lessons will be retained for future committees.
            </p>
          </article>
        </div>
      </section>

      <section className="conference-targets-section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <span className="eyebrow light">2027 working targets</span>
              <h2>Success should be visible after the event as well as on the day.</h2>
            </div>
            <p>
              Targets remain subject to Executive Committee approval, final
              operational planning and factors outside the Student Wing&apos;s control.
            </p>
          </div>

          <div className="measure-grid conference-measure-grid">
            <article><strong>35+</strong><span>UK medical schools represented</span></article>
            <article><strong>150+</strong><span>active representatives across 30+ schools</span></article>
            <article><strong>4+</strong><span>national professional or academic partner bodies</span></article>
            <article><strong>90%</strong><span>positive overall participant evaluation target</span></article>
          </div>
        </div>
      </section>

      <section className="conference-registration-section">
        <div className="shell registration-layout">
          <div>
            <span className="eyebrow light">Delegate registration</span>
            <h2>The registration journey is already designed.</h2>
            <p>
              Once the conference date and programme are approved, this section
              can be connected to the registration database and automated
              confirmation / reminder emails without changing the public journey.
            </p>
            <div className="registration-flow">
              <span>Register</span><i>→</i><span>Confirmation</span><i>→</i><span>Reminder</span><i>→</i><span>Attend</span>
            </div>
          </div>

          <form className="registration-preview" aria-label="Conference registration preview">
            <div className="form-preview-head">
              <span>Registration preview</span>
              <strong>Opens after final approval</strong>
            </div>
            <label>Full name<input type="text" disabled placeholder="Your full name" /></label>
            <label>Email<input type="email" disabled placeholder="you@example.com" /></label>
            <label>Medical school<input type="text" disabled placeholder="University / medical school" /></label>
            <label>Year of study<select disabled defaultValue=""><option value="">Select year</option></select></label>
            <label className="form-full">Accessibility or dietary requirements<textarea disabled rows={4} placeholder="Optional" /></label>
            <button type="button" disabled>Registration not yet open</button>
          </form>
        </div>
      </section>

      <section className="section shell">
        <div className="cta-panel">
          <div>
            <span className="eyebrow light">Conference updates</span>
            <h2>Announcements will live here first.</h2>
            <p>
              Follow the News hub for confirmed conference milestones while the
              full programme and registration route are prepared.
            </p>
          </div>
          <Link className="button primary" href="/news">View news</Link>
        </div>
      </section>
    </>
  );
}
