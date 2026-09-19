import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found-page">
      <div className="shell narrow">
        <span className="eyebrow light">404 · Page not found</span>
        <h1>That page is not part of the Student Wing hub.</h1>
        <p>
          The page may have moved, the link may be outdated, or the section may
          not have been published yet.
        </p>
        <div className="hero-actions">
          <Link className="button primary" href="/">Return home</Link>
          <Link className="button ghost" href="/contact">Contact BIDA</Link>
        </div>
      </div>
    </section>
  );
}
