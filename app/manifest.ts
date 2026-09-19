import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BIDA Student Wing",
    short_name: "BIDA Student Wing",
    description:
      "National teaching, research, conference opportunities and professional development for medical students across the UK.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0d2130",
    icons: [
      {
        src: "/bida-student-wing-logo.webp",
        sizes: "any",
        type: "image/webp",
      },
    ],
  };
}
