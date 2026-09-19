import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research",
  description: "Explore the BIDA Student Wing National Research Department, research pathway, training and future project opportunities.",
};

const pathway = [
  ["Idea & triage", "Relevance, feasibility, duplication and supervisor capacity", "Approved concept note"],
  ["Governance", "Ethics, service-evaluation or QI determination; data and consent plan", "Governance record"],
  ["Protocol", "Question, methods, milestones, contributor roles and authorship principles", "Project charter"],
  ["Delivery", "Regular review, secure data handling and documented contributions", "Progress dashboard"],
  ["Analysis", "Appropriate methods and supervisor verification", "Reproducible results"],
  ["Dissemination", "Abstract, poster, presentation or manuscript matched to quality", "Submitted output"],
  ["Archive", "Final files, outcome, lessons and handover", "Closed project record"],
];

const training = [
  "Study design", "Literature searching", "Critical appraisal", "Statistics",
  "Scientific writing", "Authorship", "Publication ethics",
];

export default function ResearchPage() {
  return (
    <>
      <section className="programme-page-hero research-page-hero" id="department">
        <div className="shell programme-page-hero-grid">
          <div>
            <span className="eyebrow light">National Research Department</span>
            <h1>From opportunity to output.</h1>
            <p>
              A governed pathway designed to give students fair access to
              mentorship, teach sound methods and support credible completed work.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#pathway">See the research pathway</a>
              <Link className="button ghost" href="/opportunities">Research opportunities</Link>
            </div>
          </div>
          <div className="research-launch-card">
            <span>Department delivery target</span>
            <strong>February 2027</strong>
            <p>
              Project listings and application routes will be published once
              supervisors, governance and contributor expectations are confirmed.
            </p>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="research-target-grid">
          <article><strong>6</strong><span>active supervisor-supported projects</span></article>
          <article><strong>4</strong><span>practical research-skills workshops</span></article>
          <article><strong>3</strong><span>abstract submissions target</span></article>
          <article><strong>2</strong><span>manuscript submissions target</span></article>
          <article><strong>Quarterly</strong><span>research clinic or project review forum</span></article>
          <article><strong>100%</strong><span>active projects with protocol, supervisor and governance determination</span></article>
        </div>
      </section>

      <section className="section shell research-projects-section" id="projects">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Project portfolio</span>
            <h2>Projects will be published with the information students need to decide fairly.</h2>
          </div>
          <p>
            The public portfolio opens once supervisors, governance and project
            capacity are confirmed. Each listing will use the same minimum standard.
          </p>
        </div>

        <div className="project-empty-state">
          <div>
            <span className="project-status-dot"><i /></span>
            <span className="eyebrow">Portfolio status</span>
            <h3>No project is being advertised before it is ready.</h3>
            <p>
              Research Department delivery is targeted for February 2027.
              Approved projects will appear here as they become available.
            </p>
          </div>

          <div className="project-listing-standard">
            <div><span>01</span><strong>Named supervisor</strong></div>
            <div><span>02</span><strong>Scope & method</strong></div>
            <div><span>03</span><strong>Eligibility</strong></div>
            <div><span>04</span><strong>Milestones</strong></div>
            <div><span>05</span><strong>Contributor expectations</strong></div>
            <div><span>06</span><strong>Application deadline</strong></div>
          </div>
        </div>
      </section>

      <section className="research-pathway-section" id="pathway">
        <div className="shell">
          <div className="section-heading">
            <div>
              <span className="eyebrow light">Research pathway</span>
              <h2>Seven stages from idea to archive.</h2>
            </div>
            <p>
              Each stage has a required discipline and an expected output so
              progress is visible, governed and transferable.
            </p>
          </div>

          <div className="research-pathway">
            {pathway.map(([title, discipline, output], index) => (
              <article key={title}>
                <span className="research-stage">0{index + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{discipline}</p>
                </div>
                <strong>{output}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="research-training-layout">
          <div>
            <span className="eyebrow">Research skills</span>
            <h2>Methods training built around doing the work properly.</h2>
            <p>
              Training will focus on practical research literacy rather than
              attaching names to unfinished projects.
            </p>
          </div>
          <div className="training-cloud">
            {training.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      <section className="research-principles-section">
        <div className="shell research-principles-grid">
          <div>
            <span className="eyebrow light">Integrity & inclusion</span>
            <h2>Contribution, governance and authorship should be explicit.</h2>
          </div>
          <div className="principle-list">
            <p>Projects follow the requirements of the host institution and supervising investigator.</p>
            <p>Authorship reflects documented contribution rather than office or seniority.</p>
            <p>Contributor expectations are agreed at project initiation and revisited before submission.</p>
            <p>Where places are limited, recruitment uses published criteria and conflicts are declared.</p>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="research-apply-card">
          <div>
            <span className="eyebrow">Applications</span>
            <h2>Project applications will be reviewed, not first-come-first-served.</h2>
            <p>
              The initial website model will use a structured application form
              reviewed by the Research team, without requiring student accounts.
            </p>
          </div>
          <span className="research-apply-status">Application system in build</span>
        </div>
      </section>
    </>
  );
}
