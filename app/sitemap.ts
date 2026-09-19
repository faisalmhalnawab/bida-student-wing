import type { MetadataRoute } from "next";
import { sectionContent } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://bida-student-wing.vercel.app";

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...Object.keys(sectionContent).map((section) => ({
      url: `${base}/${section}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
