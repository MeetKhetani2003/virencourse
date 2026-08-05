import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.virensurati.in"),
  title: {
    default: "Viren Surati — Certified NLP, Mind & Memory Trainer",
    template: "%s | Viren Surati",
  },
  description:
    "Certified NLP, Mind & Memory Trainer and Public Speaking Coach. 100,000+ people reached, 3,000+ students trained in memory power, confidence and public speaking — in Hindi, for India.",
  keywords: [
    "Viren Surati",
    "NLP Trainer",
    "Mind & Memory Trainer",
    "Public Speaking Coach",
    "Memory Power",
    "Confidence Building",
    "Student Success",
    "NLP Courses in Hindi",
    "Memory Retention Formula"
  ],
  authors: [{ name: "Viren Surati" }],
  creator: "Viren Surati",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/logonav.png",
    apple: "/images/logonav.png",
  },
  openGraph: {
    siteName: "Viren Surati",
    type: "website",
    locale: "en_IN",
    url: "https://www.virensurati.in/",
    title: "Viren Surati — Certified NLP, Mind & Memory Trainer",
    description:
      "Transform your mind, master your voice, own the stage. Courses in memory power, NLP and public speaking.",
    images: [{ url: "/images/viren-hero-portrait.jpg", width: 1024, height: 1365 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Viren Surati — Certified NLP, Mind & Memory Trainer",
    description: "Certified NLP, Mind & Memory Trainer and Public Speaking Coach.",
    images: ["/images/viren-hero-portrait.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${manrope.variable} bg-light text-dark antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
