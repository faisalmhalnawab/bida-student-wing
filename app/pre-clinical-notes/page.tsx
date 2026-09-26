import type { Metadata } from "next";
import Link from "next/link";
import { preclinicalSubjects } from "@/data/preclinical";

export const metadata: Metadata = {
  title: "Pre-Clinical Notes",
  description:
    "BIDA Student Wing pre-clinical revision notes for Years 1 and 2, organised by core biomedical science subject.",
};

export default function PreclinicalNotesPage() {
  const liveCount = preclinicalSubjects.filter((subject) => subject.status === "live").length;

  return (
    <>
      <section className="preclinical-hero">
        <div className="shell preclinical-hero-grid">
          <div>
            <span className="eyebrow">Pre-Clinical Learning Library</span>
            <h1>Pre-Clinical <span>Notes</span></h1>
            <p className="preclinical-hero-lead">Core revision notes for Years 1-2.</p>
            <p className="preclinical-hero-copy">
              Concise, high-yield notes covering the core pre-clinical subjects,
              rebuilt for online study rather than static PDF reading.
            </p>

            <div className="preclinical-feature-row">
              <div>
                <span className="preclinical-feature-icon">▤</span>
                <strong>High-yield content</strong>
                <small>Structured for focused revision</small>
              </div>
              <div>
                <span className="preclinical-feature-icon">⌁</span>
                <strong>Core curriculum</strong>
                <small>Years 1-2 foundations</small>
              </div>
              <div>
                <span className="preclinical-feature-icon">↗</span>
                <strong>Online first</strong>
                <small>Responsive and easy to navigate</small>
              </div>
            </div>
          </div>

          <div className="preclinical-hero-art" aria-hidden="true">
            <div className="preclinical-orb" />
            <div className="preclinical-books">
              <div className="preclinical-book">ANATOMY</div>
              <div className="preclinical-book">PHYSIOLOGY</div>
              <div className="preclinical-book">BIOCHEMISTRY</div>
            </div>
            <div className="preclinical-stethoscope">◯</div>
          </div>
        </div>
      </section>

      <section className="section shell preclinical-library">
        <div className="preclinical-library-head">
          <div>
            <span className="eyebrow">All notes</span>
            <h2>Choose a subject.</h2>
          </div>
          <p>{liveCount} live now · {preclinicalSubjects.length} subjects total</p>
        </div>

        <div className="preclinical-resource-grid">
          {preclinicalSubjects.map((subject) => {
            const isLive = subject.status === "live";

            const card = (
              <>
                <div className="preclinical-resource-icon">PDF</div>
                <div className="preclinical-resource-copy">
                  <h3>{subject.title}</h3>
                  <p>{subject.description}</p>
                  <span>{isLive ? "Open online notes" : "Coming soon"}</span>
                </div>
                <div className="preclinical-resource-arrow" aria-hidden="true">
                  {isLive ? "→" : "·"}
                </div>
              </>
            );

            return isLive ? (
              <Link
                className="preclinical-resource-card is-live"
                href={`/pre-clinical-notes/${subject.slug}`}
                key={subject.slug}
              >
                {card}
              </Link>
            ) : (
              <article
                className="preclinical-resource-card is-coming"
                key={subject.slug}
                aria-label={`${subject.title} notes coming soon`}
              >
                {card}
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
