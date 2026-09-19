import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsArticle, newsArticles } from "@/data/news";

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsArticle(slug);

  if (!article) return {};

  return {
    title: article.title,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      type: "article",
      publishedTime: article.dateISO,
    },
  };
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getNewsArticle(slug);

  if (!article) notFound();

  const related = newsArticles
    .filter((item) => item.slug !== article.slug)
    .slice(0, 2);

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://bida-student-wing.vercel.app";

  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.summary,
    datePublished: article.dateISO,
    dateModified: article.dateISO,
    author: {
      "@type": "Organization",
      name: "BIDA Student Wing",
    },
    publisher: {
      "@type": "Organization",
      name: "BIDA Student Wing",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/bida-student-wing-logo.webp`,
      },
    },
    mainEntityOfPage: `${siteUrl}/news/${article.slug}`,
  };

  return (
    <>
      <section className="news-article-hero">
        <div className="shell news-article-shell">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>→</span>
            <Link href="/news">News</Link>
            <span>→</span>
            <span aria-current="page">{article.tag}</span>
          </nav>

          <div className="news-article-meta">
            <span>{article.tag}</span>
            <time dateTime={article.dateISO}>{article.date}</time>
          </div>

          <h1>{article.title}</h1>
          <p>{article.intro}</p>
        </div>
      </section>

      <article className="section shell news-article-layout">
        <aside className="news-article-aside">
          <span className="eyebrow">BIDA Student Wing</span>
          <p>{article.summary}</p>
          <Link href={article.relatedHref}>{article.relatedLabel} →</Link>
        </aside>

        <div className="news-article-body">
          {article.sections.map((section, index) => (
            <section key={section.heading}>
              <span className="eyebrow">0{index + 1}</span>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets && (
                <ul>
                  {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              )}
            </section>
          ))}
        </div>
      </article>

      <section className="related-news-section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <span className="eyebrow light">More updates</span>
              <h2>Continue exploring the programme.</h2>
            </div>
            <Link className="related-news-all" href="/news">All news →</Link>
          </div>

          <div className="related-news-grid">
            {related.map((item) => (
              <Link key={item.slug} href={`/news/${item.slug}`}>
                <span>{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
