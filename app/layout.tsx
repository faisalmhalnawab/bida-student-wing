import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bida-student-wing.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "BIDA Student Wing",
    template: "%s | BIDA Student Wing",
  },
  description:
    "BIDA Student Wing — national teaching, research, conference opportunities and professional development for medical students across the UK.",
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/bida-student-wing-logo.webp",
    apple: "/bida-student-wing-logo.webp",
  },
  robots:
    process.env.SITE_INDEXING_ENABLED === "true"
      ? { index: true, follow: true }
      : { index: false, follow: false },
  openGraph: {
    title: "BIDA Student Wing",
    description:
      "National teaching, research, conference opportunities and professional development for medical students across the UK.",
    type: "website",
    images: ["/bida-student-wing-logo.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
