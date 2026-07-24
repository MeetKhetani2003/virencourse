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
  metadataBase: new URL("https://virensurati.in"),
  title: {
    default: "Viren Surati — Certified NLP, Mind & Memory Trainer",
    template: "%s · Viren Surati",
  },
  description:
    "Certified NLP, Mind & Memory Trainer and Public Speaking Coach. 100,000+ people reached, 3,000+ students trained in memory power, confidence and public speaking — in Hindi, for India.",
  openGraph: {
    siteName: "Viren Surati",
    type: "website",
    title: "Viren Surati — Certified NLP, Mind & Memory Trainer",
    description:
      "Transform your mind, master your voice, own the stage. Courses in memory power, NLP and public speaking.",
    images: [{ url: "/images/portrait-hero.jpg", width: 1024, height: 1365 }],
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
