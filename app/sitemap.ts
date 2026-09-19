import type { MetadataRoute } from "next";

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
  "/contact",
  "/privacy",
  "/accessibility",
  "/cookies",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://bida-student-wing.vercel.app";

  return routes.map((route, index): MetadataRoute.Sitemap[number] => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.7,
  }));
}
