import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "BIDA Student Wing",
    template: "%s | BIDA Student Wing",
  },
  description:
    "BIDA Student Wing — national teaching, research, conference opportunities and professional development for medical students across the UK.",
  metadataBase: new URL("https://bida-student-wing.vercel.app"),
  openGraph: {
    title: "BIDA Student Wing",
    description:
      "National teaching, research, conference opportunities and professional development for medical students across the UK.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
