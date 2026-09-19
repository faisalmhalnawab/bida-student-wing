import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About & Leadership",
  description: "Meet BIDA Student Wing, its national structure, leadership and trustees, and how its programmes work together.",
};

const pillars = [
  {
    number: "01",
    title: "Educate",
    body: "National teaching that connects pre-clinical learning, UKMLA preparation and structured OSCE practice.",
  },
  {
    number: "02",
    title: "Convene",
    body: "A national conference and events programme that brings students, doctors and educators together.",
  },
  {
    number: "03",
    title: "Connect",
    body: "A UK-wide representative network and clear routes into leadership, teaching and professional development.",
  },
  {
    number: "04",
    title: "Discover",
    body: "A governed research pathway linking students with projects, supervisors, skills training and credible outputs.",
  },
];

const structure = [
  {
    label: "BIDA",
    title: "British International Doctors' Association",
    body: "The parent professional organisation supporting the Student Wing.",
  },
  {
    label: "Student Wing",
    title: "National Student Wing",
    body: "The national student body coordinating education, conference activity, research and opportunities.",
  },
  {
    label: "Programmes",
    title: "Delivery teams",
    body: "National Teaching, OSCE, pre-clinical, conference, research and representative activity delivered through dedicated teams.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <div className="shell about-hero-grid">
          <div>
            <span className="eyebrow light">About BIDA Student Wing</span>
            <h1>A national student community designed to outlast a single committee year.</h1>
            <p>
              BIDA Student Wing connects medical students across the United Kingdom
              through education, research, leadership, professional development
              and national opportunities.
            </p>
            <div className="hero-actions">
              <Link className="button primary" href="/opportunities">
                Get involved
              </Link>
              <Link className="button ghost" href="/events">
                View events
              </Link>
            </div>
          </div>

          <div className="about-seal-card">
            <Image
              src="/bida-student-wing-logo.webp"
              alt="BIDA Student Wing logo"
              width={280}
              height={280}
              priority
            />
            <span>British International Doctors&apos; Association</span>
            <strong>Student Wing</strong>
            <small>National · Student-led · UK-wide</small>
          </div>
        </div>
      </section>

      <section className="section shell" id="who-we-are">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Who we are</span>
            <h2>Built around four connected priorities.</h2>
          </div>
          <p>
            The Student Wing is being developed as one connected national
            platform rather than a collection of disconnected projects.
          </p>
        </div>

        <div className="about-pillars">
          {pillars.map((pillar) => (
            <article key={pillar.number}>
              <span>{pillar.number}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-structure-section" id="structure">
        <div className="shell">
          <div className="section-heading">
            <div>
              <span className="eyebrow light">How we work</span>
              <h2>Clear structure. Shared ownership.</h2>
            </div>
            <p>
              The website is being built around a model where national teams can
              contribute to their own areas while BIDA retains organisational
              oversight and continuity.
            </p>
          </div>

          <div className="structure-flow">
            {structure.map((item, index) => (
              <article key={item.label}>
                <span className="structure-index">0{index + 1}</span>
                <span className="structure-label">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell" id="leadership">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Leadership</span>
            <h2>National leadership with clear areas of responsibility.</h2>
          </div>
          <p>
            Final names, portraits and approved biographies will be added once
            the leadership directory is signed off for publication.
          </p>
        </div>

        <div className="leadership-grid">
          <article className="leadership-card primary-leadership-card">
            <span className="leadership-role">National President · 2026–27</span>
            <div className="leadership-placeholder">SA</div>
            <h3>Sam Astanehi</h3>
            <p>
              National President of BIDA Student Wing, leading the 2026–27
              programme across teaching, conference, digital infrastructure and
              research.
            </p>
          </article>

          <article className="leadership-card primary-leadership-card">
            <span className="leadership-role">National Vice President · 2026–27</span>
            <div className="leadership-placeholder">FA</div>
            <h3>Faisal Al-Nawab</h3>
            <p>
              National Vice President of BIDA Student Wing, supporting programme
              delivery, cross-team coordination and the Student Wing&apos;s digital
              and organisational development.
            </p>
          </article>

          <article className="leadership-card">
            <span className="leadership-role">National Teaching</span>
            <div className="leadership-placeholder small">NT</div>
            <h3>Teaching Leadership</h3>
            <p>
              Coordinates national teaching streams, faculty engagement and
              programme delivery.
            </p>
          </article>

          <article className="leadership-card">
            <span className="leadership-role">Research</span>
            <div className="leadership-placeholder small">R</div>
            <h3>Research Leadership</h3>
            <p>
              Oversees the research pathway, project governance and research-skills
              development.
            </p>
          </article>
        </div>
      </section>

      <section className="trustees-section" id="trustees">
        <div className="shell trustees-grid">
          <div>
            <span className="eyebrow light">Trustees</span>
            <h2>Institutional continuity beyond one student term.</h2>
            <p>
              The trustees area is designed to accommodate professional portraits
              and short biographies for each trustee once final details are
              approved for publication.
            </p>
          </div>

          <div className="trustee-preview">
            <article>
              <div className="trustee-avatar">01</div>
              <div>
                <span>Trustee profile</span>
                <h3>Name and professional title</h3>
                <p>
                  Short biography, professional background and relationship to
                  BIDA will appear here.
                </p>
              </div>
            </article>
            <article>
              <div className="trustee-avatar">02</div>
              <div>
                <span>Trustee profile</span>
                <h3>Name and professional title</h3>
                <p>
                  Short biography, professional background and relationship to
                  BIDA will appear here.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
