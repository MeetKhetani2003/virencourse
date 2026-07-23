import type { Metadata } from "next";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { Accordion } from "@/components/Accordion";
import { ContactForm } from "@/components/ContactForm";
import { MaskLine, Reveal } from "@/components/motion";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/content/courses";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Viren Surati directly — call, WhatsApp or send a message about courses, batches and personal guidance.",
};

/* CONFIRM EMAIL WITH VIREN — placeholder until provided */

const FAQS = [
  {
    id: "enroll",
    header: "How does enrollment work?",
    body: (
      <p>
        Send a message with the course you have in mind — Viren will guide
        you to the official GuniGuru or Udemy enrollment page and answer any
        questions before you pay.
      </p>
    ),
  },
  {
    id: "response",
    header: "How quickly will I hear back?",
    body: (
      <p>
        WhatsApp is the fastest route — it goes straight to Viren&apos;s
        phone. For anything detailed, a call works just as well.
      </p>
    ),
  },
  {
    id: "language",
    header: "Are the courses in Hindi or English?",
    body: (
      <p>
        All teaching is delivered in Hindi, designed for Indian learners.
        You can write to Viren in Hindi or English — whichever is easier for
        you.
      </p>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ————— 1 · HERO ————— */}
      <section className="grain relative overflow-hidden bg-ink pb-20 pt-36 text-cream lg:pb-28 lg:pt-44">
        <div className="pointer-events-none absolute -right-40 top-[-20%] h-[560px] w-[560px] rounded-full bg-gold/[0.08] blur-[140px]" />
        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <p className="flex items-center gap-4 micro-label text-gold">
              <span className="h-px w-10 bg-gold/70" />
              Direct Line
            </p>
          </Reveal>
          <h1 className="mt-8 font-serif text-[clamp(2.9rem,6.5vw,5.6rem)] font-light leading-[1.04] tracking-[-0.02em]">
            <MaskLine delay={0.15}>Let&apos;s</MaskLine>
            <MaskLine delay={0.28}>
              <em className="italic text-gold">talk</em>.
            </MaskLine>
          </h1>
          <Reveal delay={0.5}>
            <p className="mt-8 max-w-xl text-[16.5px] leading-relaxed text-cream/60">
              Have a question about a course, or want personal guidance on
              which program fits you? Reach out directly — every message lands
              with Viren himself.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ————— 2 · CONTACT OPTIONS ————— */}
      <section className="bg-parchment py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-7 px-6 md:grid-cols-3 lg:px-10">
          {/* Call */}
          <Reveal>
            <div className="group flex h-full flex-col border border-ink/10 bg-white/60 p-9 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_32px_60px_-34px_rgba(11,11,12,0.35)]">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/50">
                <Phone className="h-5 w-5 text-gold" strokeWidth={1.4} />
              </span>
              <h2 className="mt-7 font-serif text-2xl font-medium text-ink">Call</h2>
              <p className="mt-2.5 text-[14px] leading-relaxed text-mist">
                A quick call is often the fastest way to sort out which course
                fits.
              </p>
              <a href={PHONE_TEL} className="mt-8 inline-flex items-center gap-2 font-serif text-xl text-ink transition-colors duration-300 hover:text-gold">
                {PHONE_DISPLAY}
              </a>
              <a href={PHONE_TEL} className="link-draw mt-6 text-ink">
                Click to Call
              </a>
            </div>
          </Reveal>

          {/* WhatsApp — styled distinctly, primary */}
          <Reveal delay={0.1}>
            <div className="grain group relative flex h-full flex-col overflow-hidden border border-gold/50 bg-ink p-9 text-cream transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_32px_60px_-30px_rgba(11,11,12,0.55)]">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/60 bg-gold/10">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-gold" aria-hidden="true">
                  <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.94L2 22l5.2-1.5A9.9 9.9 0 1 0 12.04 2Zm0 18.06a8.16 8.16 0 0 1-4.16-1.14l-.3-.18-3.09.89.83-3.01-.2-.31a8.17 8.17 0 1 1 6.92 3.75Zm4.48-6.12c-.25-.13-1.45-.71-1.68-.79s-.4-.12-.56.12-.64.8-.78.96-.29.19-.53.06a6.65 6.65 0 0 1-3.3-2.88c-.24-.42.24-.39.69-1.3a.45.45 0 0 0-.02-.43c-.06-.12-.56-1.34-.76-1.84s-.4-.42-.56-.43h-.48a.92.92 0 0 0-.66.31 2.77 2.77 0 0 0-.86 2.05 4.8 4.8 0 0 0 1 2.55 11 11 0 0 0 4.23 3.74c.58.25 1.03.4 1.38.52a3.32 3.32 0 0 0 1.52.1 2.49 2.49 0 0 0 1.63-1.15 2 2 0 0 0 .14-1.15c-.06-.1-.22-.16-.46-.29Z" />
                </svg>
              </span>
              <h2 className="mt-7 font-serif text-2xl font-medium">WhatsApp</h2>
              <p className="mt-2.5 text-[14px] leading-relaxed text-cream/55">
                The recommended route — message Viren and get a personal
                reply, voice note or call back.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="btn btn-gold mt-8 self-start px-6! py-3!"
              >
                <span className="btn-wipe" />
                <span className="relative">Open WhatsApp Chat</span>
                <ArrowUpRight className="btn-icon relative h-4 w-4" strokeWidth={1.75} />
              </a>
            </div>
          </Reveal>

          {/* Email — placeholder */}
          <Reveal delay={0.2}>
            <div className="flex h-full flex-col border border-dashed border-ink/20 p-9">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/20">
                <Mail className="h-5 w-5 text-mist" strokeWidth={1.4} />
              </span>
              <h2 className="mt-7 font-serif text-2xl font-medium text-ink">Email</h2>
              {/* CONFIRM EMAIL WITH VIREN */}
              <p className="mt-2.5 text-[14px] leading-relaxed text-mist">
                A dedicated email address is on its way. Until then, WhatsApp
                and phone are answered personally.
              </p>
              <p className="mt-8 font-serif text-lg italic text-mist-light">
                Coming soon
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ————— 3 · FORM + SIDE PANEL ————— */}
      <section className="border-t border-ink/10 bg-parchment py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-10">
          <div>
            <Reveal>
              <p className="flex items-center gap-4 micro-label text-mist">
                <span className="h-px w-10 bg-gold" />
                Send a Message
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-serif text-4xl font-light leading-[1.12] tracking-[-0.015em] text-ink md:text-5xl">
                Write it down.{" "}
                <em className="italic text-gold">He reads everything.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.2} className="mt-12">
              <ContactForm />
            </Reveal>
          </div>

          <Reveal delay={0.25}>
            <div className="lg:sticky lg:top-28">
              <div className="relative">
                <div className="absolute -inset-4 border border-gold/40" aria-hidden="true" />
                <div className="duotone relative aspect-[4/5] overflow-hidden bg-parchment-2">
                  <Image
                    src="/images/portrait-about.jpg"
                    alt="Viren Surati — personal coaching portrait placeholder"
                    fill
                    sizes="(max-width: 1024px) 92vw, 440px"
                    className="object-cover"
                  />
                </div>
              </div>
              <blockquote className="mt-10 border-l border-gold pl-7">
                <p className="font-serif text-2xl font-light italic leading-[1.5] text-ink">
                  “Every question is welcome — there are no silly ones when
                  you&apos;re training your mind.”
                </p>
                <footer className="mt-4 micro-label text-mist">— Viren Surati</footer>
              </blockquote>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ————— 4 · FAQ MINI ————— */}
      <section className="bg-parchment-2 py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10">
          <div>
            <Reveal>
              <p className="flex items-center gap-4 micro-label text-mist">
                <span className="h-px w-10 bg-gold" />
                Quick Answers
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-serif text-4xl font-light leading-[1.12] tracking-[-0.015em] text-ink md:text-5xl">
                Before you <em className="italic text-gold">write</em>.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <Accordion items={FAQS} defaultOpen="enroll" />
          </Reveal>
        </div>
      </section>

      {/* Section 5 — embedded map intentionally omitted:
          no physical address has been provided, and none will be fabricated. */}
    </>
  );
}
