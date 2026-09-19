import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Opportunities",
  description: "National BIDA Student Wing representative, committee, teaching and research opportunities for medical students.",
};

const routes = [
  ["Medical-school representatives", "Extend national reach locally and help students find teaching, research, conference and leadership opportunities.", "Representative network"],
  ["National committees", "Defined roles across teaching, conference, digital communications, research and programme delivery.", "Committee roles"],
  ["Teaching contributors", "Doctors and appropriately supervised senior medical students contributing to national education.", "Faculty & facilitators"],
  ["Research contributors", "Project opportunities with published scope, eligibility, milestones and contributor expectations.", "Research projects"],
];

export default function OpportunitiesPage() {
  return (
    <>
      <section className="programme-page-hero opportunities-page-hero">
        <div className="shell programme-page-hero-grid">
          <div>
            <span className="eyebrow light">Opportunities</span>
            <h1>National participation, clearly advertised.</h1>
            <p>
              Vacancies, representative recruitment and programme opportunities
              will use published deadlines, criteria and application routes.
            </p>
          </div>
          <div className="opportunity-principles-card">
            <span>Publishing standard</span>
            <strong>Role · Deadline · Criteria · Route</strong>
            <p>
              Opportunities should be understandable before a student applies,
              with selection expectations visible rather than informal.
            </p>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Ways to contribute</span>
            <h2>Different routes into one national network.</h2>
          </div>
          <p>
            Roles will vary throughout the year as programme needs, vacancies and
            project capacity are confirmed.
          </p>
        </div>

        <div className="opportunity-grid">
          {routes.map(([title, body, label], index) => (
            <article key={title}>
              <span className="opportunity-number">0{index + 1}</span>
              <span className="opportunity-label">{label}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="vacancies-section">
        <div className="shell vacancies-layout">
          <div>
            <span className="eyebrow light">Current vacancies</span>
            <h2>Only confirmed roles should appear here.</h2>
            <p>
              This area is ready for live vacancies. Until a role description,
              deadline and selection criteria are approved, the website will not
              advertise an unconfirmed position.
            </p>
          </div>
          <div className="empty-vacancy-card">
            <span>No vacancy published</span>
            <strong>Check back for national opportunities</strong>
            <p>
              New roles will also be announced through the Student Wing news and
              official communications channels.
            </p>
            <Link href="/news">View programme updates →</Link>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="selection-process">
          <div>
            <span className="eyebrow">Selection process</span>
            <h2>Transparent from advert to appointment.</h2>
          </div>
          <div className="selection-steps">
            {[
              ["01", "Publish", "Role, responsibilities, criteria and deadline"],
              ["02", "Apply", "A consistent application route"],
              ["03", "Review", "Applications assessed against published criteria"],
              ["04", "Confirm", "Outcome communicated and access / handover completed"],
            ].map(([n, title, body]) => (
              <article key={n}><span>{n}</span><h3>{title}</h3><p>{body}</p></article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
