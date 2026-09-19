import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "National Teaching",
  description: "Explore the BIDA Student Wing National Teaching Programme: pre-clinical, UKMLA clinical and OSCE teaching for 2026–27.",
};

const phases = [
  {
    number: "01",
    title: "Medicine",
    period: "Oct–Dec 2026",
    count: "10 blocks",
    specialties: [
      "Endocrinology", "Nephrology", "Haematology", "Rheumatology",
      "Dermatology", "Infection", "Respiratory", "Cardiology",
      "Gastroenterology", "Neurology",
    ],
  },
  {
    number: "02",
    title: "Surgery & core specialties",
    period: "Jan–Mar 2027",
    count: "10 blocks",
    specialties: [
      "ENT", "Ophthalmology", "Vascular", "Urology", "Breast & Plastics",
      "Orthopaedics", "General Surgery", "Anaesthetics",
      "Obstetrics & Gynaecology / Sexual Health", "Paediatrics",
    ],
  },
  {
    number: "03",
    title: "Community & specialist care",
    period: "Mar–May 2027",
    count: "4 blocks",
    specialties: [
      "Cancer Care & Palliative", "Mental Health", "General Practice",
      "Acute & Emergency Medicine",
    ],
  },
];

const standards = [
  "Named faculty and written learning objectives for each specialty block",
  "A confirmed host or moderator and contingency speaker where practicable",
  "Case-based, interactive and UKMLA-aligned clinical teaching",
  "Structured OSCE practice with timed stations and examiner feedback",
  "Standard feedback collection, attendance records and delivery documentation",
  "Verified faculty contributions recognised through timely certificates",
];

export default function EducationPage() {
  return (
    <>
      <section className="programme-page-hero education-page-hero">
        <div className="shell programme-page-hero-grid">
          <div>
            <span className="eyebrow light">National Teaching Programme</span>
            <h1>One national learning pathway.</h1>
            <p>
              Pre-clinical teaching, UKMLA clinical teaching and OSCE practice
              are being delivered as three connected streams across the 2026–27
              academic year.
            </p>
            <div className="hero-actions">
              <Link className="button primary" href="/events">View teaching calendar</Link>
              <a className="button ghost" href="#curriculum">Explore curriculum</a>
            </div>
          </div>

          <div className="programme-hero-stats">
            <article><strong>3</strong><span>connected teaching streams</span></article>
            <article><strong>24</strong><span>UKMLA specialty blocks</span></article>
            <article><strong>2×</strong><span>clinical sessions each active week</span></article>
            <article><strong>1×</strong><span>OSCE session each active week</span></article>
          </div>
        </div>
      </section>

      <section className="section shell" id="streams">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Three connected streams</span>
            <h2>From foundational science to structured performance.</h2>
          </div>
          <p>
            Each stream has a distinct purpose, but the programme is designed as
            one continuous journey rather than competing teaching series.
          </p>
        </div>

        <div className="stream-grid">
          <article className="stream-card stream-clinical" id="clinical">
            <span className="stream-number">01</span>
            <span className="stream-label">Clinical UKMLA</span>
            <h3>Clinical knowledge & decision-making</h3>
            <p>
              Two sessions every week during active teaching periods from
              October 2026 to May 2027, organised across three progressive
              specialty phases.
            </p>
            <div className="stream-meta">
              <span>Years 3–5 focus</span><span>Case based</span><span>UKMLA aligned</span>
            </div>
          </article>

          <article className="stream-card stream-osce" id="osce">
            <span className="stream-number">02</span>
            <span className="stream-label">OSCE</span>
            <h3>Translate knowledge into performance</h3>
            <p>
              Weekly sessions from October 2026 to May 2027 covering histories,
              examinations, communication, counselling, interpretation and acute
              management.
            </p>
            <div className="stream-meta">
              <span>Weekly</span><span>Timed stations</span><span>Examiner feedback</span>
            </div>
          </article>

          <article className="stream-card stream-preclinical" id="pre-clinical">
            <span className="stream-number">03</span>
            <span className="stream-label">Pre-clinical</span>
            <h3>Foundations connected to clinical practice</h3>
            <p>
              Weekly teaching from February to May 2027, principally for Years 1
              and 2, linking biomedical science to patients, systems and early
              clinical reasoning.
            </p>
            <div className="stream-meta">
              <span>Years 1–2 focus</span><span>Weekly</span><span>Clinically applied</span>
            </div>
          </article>
        </div>
      </section>

      <section className="curriculum-section" id="curriculum">
        <div className="shell">
          <div className="section-heading">
            <div>
              <span className="eyebrow light">UKMLA curriculum architecture</span>
              <h2>24 specialty blocks across three phases.</h2>
            </div>
            <p>
              The working schedule begins in October 2026 and progresses from
              medicine through surgery and core specialties into community and
              specialist care.
            </p>
          </div>

          <div className="phase-list">
            {phases.map((phase) => (
              <article className="phase-card" key={phase.number}>
                <div className="phase-head">
                  <span>{phase.number}</span>
                  <div>
                    <h3>{phase.title}</h3>
                    <p>{phase.period}</p>
                  </div>
                  <strong>{phase.count}</strong>
                </div>
                <div className="specialty-tags">
                  {phase.specialties.map((specialty) => <span key={specialty}>{specialty}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="standards-layout">
          <div>
            <span className="eyebrow">Delivery standard</span>
            <h2>Quality is designed into the programme.</h2>
            <p>
              Teaching is not counted as successful merely because a session is
              announced. Faculty, objectives, attendance, feedback and delivery
              records form part of the programme standard.
            </p>
            <Link className="button dark" href="/events">View programme dates</Link>
          </div>
          <div className="standards-list">
            {standards.map((standard, index) => (
              <div key={standard}><span>0{index + 1}</span><p>{standard}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="teaching-measures-section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <span className="eyebrow light">2026–27 measures</span>
              <h2>Measured by delivery, not announcements.</h2>
            </div>
            <p>
              These are accountable programme commitments rather than guarantees
              of outcomes that depend on external speakers or other third parties.
            </p>
          </div>

          <div className="measure-grid">
            <article><strong>12+</strong><span>pre-clinical sessions planned</span></article>
            <article><strong>22 / 24</strong><span>minimum clinical specialty blocks target</span></article>
            <article><strong>90%</strong><span>feedback coverage target</span></article>
            <article><strong>90%</strong><span>Good / Very Good or highly relevant learner target</span></article>
            <article><strong>25+</strong><span>medical schools engagement target</span></article>
            <article><strong>≤ 6 weeks</strong><span>faculty certificate issue target after verified delivery</span></article>
          </div>
        </div>
      </section>

      <section className="education-cta">
        <div className="shell education-cta-inner">
          <div>
            <span className="eyebrow light">Teach with BIDA</span>
            <h2>Interested in contributing to national teaching?</h2>
            <p>
              Faculty and contributor routes will be published through the
              Opportunities hub as teaching blocks and session needs are confirmed.
            </p>
          </div>
          <Link className="button primary" href="/opportunities">Explore opportunities</Link>
        </div>
      </section>
    </>
  );
}
