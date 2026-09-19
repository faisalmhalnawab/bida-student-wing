const resourceAreas = [
  ["Annual reports", "Achievement reports, end-of-year reporting and approved programme summaries."],
  ["Learning resources", "Approved teaching materials and educational resources retained beyond individual sessions."],
  ["Policies & governance", "Public-facing policies, guidance and programme governance documents where appropriate."],
  ["Conference archive", "Approved conference programmes, outputs and legacy material."],
  ["Research methods", "Approved templates and practical methods support developed by the Research Department."],
  ["Handover & institutional memory", "A structured record of what future committees need to continue the work."],
];

export default function ResourcesPage() {
  return (
    <>
      <section className="programme-page-hero resources-page-hero">
        <div className="shell programme-page-hero-grid">
          <div>
            <span className="eyebrow light">Reports & resources</span>
            <h1>Useful material, preserved beyond a single year.</h1>
            <p>
              The resources hub is designed as institutional memory: approved
              reports, learning materials, policies and legacy documents in one
              organised archive.
            </p>
          </div>
          <div className="resource-principle-card">
            <span>Archive principle</span>
            <strong>Approved · Versioned · Accessible</strong>
            <p>
              Public resources should be current, attributable and clearly
              separated from internal working material.
            </p>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="resource-grid">
          {resourceAreas.map(([title, body], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h2>{title}</h2>
              <p>{body}</p>
              <small>Archive area ready</small>
            </article>
          ))}
        </div>
      </section>

      <section className="resource-governance-section">
        <div className="shell standards-layout">
          <div>
            <span className="eyebrow light">Resource governance</span>
            <h2>Not every internal file belongs on the public website.</h2>
            <p>
              Approved public resources will be separated from the secure
              internal archive used for permissions, certificates, programme
              records, reports and handover material.
            </p>
          </div>
          <div className="event-standard-grid">
            {["Current version", "Approved owner", "Accessible format", "Clear publication date", "Expired material removed", "Internal records kept secure"].map((item, index) => (
              <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
