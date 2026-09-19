import type { Metadata } from "next";
import Link from "next/link";

const resourceAreas = [
  {
    title: "Annual reports",
    body: "Achievement reports, end-of-year reporting and approved programme summaries.",
    status: "No public report published yet",
    state: "planned",
  },
  {
    title: "Learning resources",
    body: "Approved teaching materials and educational resources retained beyond individual sessions.",
    status: "Publishing as materials are approved",
    state: "planned",
  },
  {
    title: "Policies & governance",
    body: "Public-facing website policies and governance information for the Student Wing platform.",
    status: "Public information available",
    state: "live",
    href: "/privacy",
  },
  {
    title: "Conference archive",
    body: "Approved conference programmes, outputs and legacy material retained after delivery.",
    status: "Archive opens with approved material",
    state: "planned",
  },
  {
    title: "Research methods",
    body: "Approved templates and practical methods support developed by the Research Department.",
    status: "Publishing with Research Department",
    state: "planned",
  },
  {
    title: "Internal archive",
    body: "Permissions, certificates, working records and handover material retained securely for future committees.",
    status: "BIDA-controlled · not public",
    state: "internal",
  },
];

const policyLinks = [
  ["Privacy & data protection", "/privacy"],
  ["Accessibility", "/accessibility"],
  ["Cookies", "/cookies"],
  ["Website use", "/terms"],
];

export const metadata: Metadata = {
  title: "Reports & Resources",
  description:
    "BIDA Student Wing reports, approved learning resources, policies, conference archives and institutional memory.",
};

export default function ResourcesPage() {
  return (
    <>
      <section className="programme-page-hero resources-page-hero">
        <div className="shell programme-page-hero-grid">
          <div>
            <span className="eyebrow light">Reports & resources</span>
            <h1>Useful material, preserved beyond a single year.</h1>
            <p>
              The resources hub separates approved public material from the
              secure organisational archive used to preserve Student Wing
              knowledge and continuity.
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

      <section className="section shell resource-directory-section">
        <div className="section-heading resource-directory-heading">
          <div>
            <span className="eyebrow">Public resource directory</span>
            <h2>Useful when ready. Honest when not.</h2>
          </div>
          <p>
            We will not fill the archive with placeholders or unapproved files.
            Each area below shows its current publication status.
          </p>
        </div>

        <div className="resource-grid">
          {resourceAreas.map((resource, index) => {
            const content = (
              <>
                <div className="resource-card-top">
                  <span>0{index + 1}</span>
                  <span className={`resource-state resource-state-${resource.state}`}>
                    {resource.state === "live"
                      ? "Live"
                      : resource.state === "internal"
                        ? "Internal"
                        : "Planned"}
                  </span>
                </div>
                <h2>{resource.title}</h2>
                <p>{resource.body}</p>
                <small>{resource.status}</small>
                {resource.href && <strong>Open resource →</strong>}
              </>
            );

            return resource.href ? (
              <Link className="resource-card resource-card-link" href={resource.href} key={resource.title}>
                {content}
              </Link>
            ) : (
              <article className="resource-card" key={resource.title}>
                {content}
              </article>
            );
          })}
        </div>

        <div className="public-policy-panel">
          <div>
            <span className="eyebrow">Published now</span>
            <h3>Website policies & public information</h3>
            <p>
              These pages are already available while the wider reports and
              educational archive grows.
            </p>
          </div>
          <div className="public-policy-links">
            {policyLinks.map(([label, href]) => (
              <Link href={href} key={href}>
                <span>{label}</span>
                <b>↗</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="resource-governance-section">
        <div className="shell standards-layout">
          <div>
            <span className="eyebrow light">Resource governance</span>
            <h2>Not every internal file belongs on the public website.</h2>
            <p>
              Approved public resources are separated from the secure internal
              archive used for permissions, certificates, programme records,
              reports and handover material.
            </p>
          </div>
          <div className="event-standard-grid">
            {[
              "Current version",
              "Approved owner",
              "Accessible format",
              "Clear publication date",
              "Expired material removed",
              "Internal records kept secure",
            ].map((item, index) => (
              <div key={item}>
                <span>0{index + 1}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
