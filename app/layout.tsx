import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "BIDA Student Wing",
    template: "%s | BIDA Student Wing",
  },
  applicationName: "BIDA Student Wing",
  description:
    "BIDA Student Wing — national teaching, research, conference opportunities and professional development for medical students across the UK.",
  metadataBase: new URL("https://bida-student-wing.vercel.app"),
  icons: {
    icon: "/bida-student-wing-logo.webp",
    apple: "/bida-student-wing-logo.webp",
  },
  openGraph: {
    title: "BIDA Student Wing",
    description:
      "National teaching, research, conference opportunities and professional development for medical students across the UK.",
    type: "website",
    siteName: "BIDA Student Wing",
    images: ["/bida-student-wing-logo.webp"],
  },
  twitter: {
    card: "summary",
    title: "BIDA Student Wing",
    description:
      "National teaching, research, conference opportunities and professional development for medical students across the UK.",
    images: ["/bida-student-wing-logo.webp"],
  },
};

const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BIDA Student Wing",
  alternateName: "British International Doctors' Association Student Wing",
  url: "https://bida-student-wing.vercel.app",
  logo: "https://bida-student-wing.vercel.app/bida-student-wing-logo.webp",
  parentOrganization: {
    "@type": "Organization",
    name: "British International Doctors' Association",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }}
        />
      </body>
    </html>
  );
}
