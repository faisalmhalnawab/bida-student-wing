import type { MetadataRoute } from "next";
import { newsArticles } from "@/data/news";

const routes = [
  "",
  "/about",
  "/education",
  "/events",
  "/conference",
  "/research",
  "/opportunities",
  "/news",
  "/resources",
  "/pre-clinical-notes",
  "/pre-clinical-notes/physiology",
  "/contact",
  "/privacy",
  "/accessibility",
  "/cookies",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL || "https://bida-student-wing.vercel.app";

  const staticRoutes = routes.map((route, index): MetadataRoute.Sitemap[number] => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.7,
  }));

  const newsRoutes = newsArticles.map(
    (article): MetadataRoute.Sitemap[number] => ({
      url: `${base}/news/${article.slug}`,
      lastModified: new Date(article.dateISO),
      changeFrequency: "monthly",
      priority: 0.6,
    })
  );

  return [...staticRoutes, ...newsRoutes];
}
