import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { sectionContent } from "@/data/site";

export function generateStaticParams() {
  return Object.keys(sectionContent).map((section) => ({ section }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ section: string }>;
}): Promise<Metadata> {
  const { section } = await params;
  const content = sectionContent[section];

  if (!content) return {};

  return {
    title: content.title,
    description: content.intro,
  };
}

export default async function SectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const content = sectionContent[section];

  if (!content) notFound();

  return (
    <>
      <section className="page-hero">
        <div className="shell narrow">
          <span className="eyebrow light">{content.eyebrow}</span>
          <h1>{content.title}</h1>
          <p>{content.intro}</p>
        </div>
      </section>

      <section className="section shell narrow">
        <div className="content-card">
          <span className="eyebrow">In development</span>
          <h2>This section is part of the first BIDA Student Wing website build.</h2>
          <p>
            The structure is now live in the codebase. Final content, forms,
            calendar connections and approved organisational details will be
            added during the next build stages.
          </p>

          <div className="bullet-grid">
            {content.bullets.map((bullet) => (
              <div key={bullet}>
                <span aria-hidden="true">✓</span>
                <p>{bullet}</p>
              </div>
            ))}
          </div>

          <div className="content-actions">
            <Link className="button dark" href="/">Back to home</Link>
            {section !== "contact" && (
              <Link className="button outline" href="/contact">Contact BIDA</Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
