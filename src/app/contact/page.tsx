import type { Metadata } from "next";
import { ArrowUpRight, Mail, Phone, HeartPulse, CheckCircle2 } from "lucide-react";
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
      <section className="grain relative overflow-hidden bg-dark pb-12 pt-24 text-surface lg:pb-28 lg:pt-44">
        <div className="pointer-events-none absolute -right-40 top-[-20%] h-[560px] w-[560px] rounded-full bg-primary/[0.08] blur-[140px]" />
        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <p className="flex items-center gap-4 micro-label text-primary">
              <span className="h-px w-10 bg-primary/70" />
              Direct Line
            </p>
          </Reveal>
          <h1 className="mt-8 font-serif text-[clamp(2.9rem,6.5vw,5.6rem)] font-light leading-[1.04] tracking-[-0.02em]">
            <MaskLine delay={0.15}>Let&apos;s</MaskLine>
            <MaskLine delay={0.28}>
              <em className="italic text-primary">talk</em>.
            </MaskLine>
          </h1>
          <Reveal delay={0.5}>
            <p className="mt-8 max-w-xl text-[16.5px] leading-relaxed text-surface/60">
              Have a question about a course, or want personal guidance on
              which program fits you? Reach out directly — every message lands
              with Viren himself.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ————— 2 · CONTACT OPTIONS ————— */}
      <section className="bg-light py-12 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-7 px-6 md:grid-cols-3 lg:px-10">
          {/* Call */}
          <Reveal>
            <div className="group flex h-full flex-col border border-dark/10 bg-white/60 p-9 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_32px_60px_-34px_rgba(11,11,12,0.35)]">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/50">
                <Phone className="h-5 w-5 text-primary" strokeWidth={1.4} />
              </span>
              <h2 className="mt-7 font-serif text-2xl font-medium text-dark">Call</h2>
              <p className="mt-2.5 text-[14px] leading-relaxed text-muted">
                A quick call is often the fastest way to sort out which course
                fits.
              </p>
              <a href={PHONE_TEL} className="mt-8 inline-flex items-center gap-2 font-serif text-xl text-dark transition-colors duration-300 hover:text-primary">
                {PHONE_DISPLAY}
              </a>
              <a href={PHONE_TEL} className="link-draw mt-6 text-dark">
                Click to Call
              </a>
            </div>
          </Reveal>

          {/* WhatsApp — styled distinctly, primary */}
          <Reveal delay={0.1}>
            <div className="grain group relative flex h-full flex-col overflow-hidden border border-primary/50 bg-dark p-9 text-surface transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_32px_60px_-30px_rgba(11,11,12,0.55)]">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/60 bg-primary/10">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-primary" aria-hidden="true">
                  <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.94L2 22l5.2-1.5A9.9 9.9 0 1 0 12.04 2Zm0 18.06a8.16 8.16 0 0 1-4.16-1.14l-.3-.18-3.09.89.83-3.01-.2-.31a8.17 8.17 0 1 1 6.92 3.75Zm4.48-6.12c-.25-.13-1.45-.71-1.68-.79s-.4-.12-.56.12-.64.8-.78.96-.29.19-.53.06a6.65 6.65 0 0 1-3.3-2.88c-.24-.42.24-.39.69-1.3a.45.45 0 0 0-.02-.43c-.06-.12-.56-1.34-.76-1.84s-.4-.42-.56-.43h-.48a.92.92 0 0 0-.66.31 2.77 2.77 0 0 0-.86 2.05 4.8 4.8 0 0 0 1 2.55 11 11 0 0 0 4.23 3.74c.58.25 1.03.4 1.38.52a3.32 3.32 0 0 0 1.52.1 2.49 2.49 0 0 0 1.63-1.15 2 2 0 0 0 .14-1.15c-.06-.1-.22-.16-.46-.29Z" />
                </svg>
              </span>
              <h2 className="mt-7 font-serif text-2xl font-medium">WhatsApp</h2>
              <p className="mt-2.5 text-[14px] leading-relaxed text-surface/55">
                The recommended route — message Viren and get a personal
                reply, voice note or call back.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary mt-8 self-start px-6! py-3!"
              >
                <span className="btn-wipe" />
                <span className="relative">Open WhatsApp Chat</span>
                <ArrowUpRight className="btn-icon relative h-4 w-4" strokeWidth={1.75} />
              </a>
            </div>
          </Reveal>

          {/* Email — placeholder */}
          <Reveal delay={0.2}>
            <div className="flex h-full flex-col border border-dashed border-dark/20 p-9">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-dark/20">
                <Mail className="h-5 w-5 text-muted" strokeWidth={1.4} />
              </span>
              <h2 className="mt-7 font-serif text-2xl font-medium text-dark">Email</h2>
              {/* CONFIRM EMAIL WITH VIREN */}
              <p className="mt-2.5 text-[14px] leading-relaxed text-muted">
                A dedicated email address is on its way. Until then, WhatsApp
                and phone are answered personally.
              </p>
              <p className="mt-8 font-serif text-lg italic text-muted-light">
                Coming soon
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      {/* ————— 2.5 · ONE TO ONE DETAILS ————— */}
      <section className="bg-light py-12 lg:py-20 border-t border-dark/5">
        <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-blue-100 bg-white shadow-2xl shadow-blue-900/5 p-8 md:p-14">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-blue-50/80 blur-3xl" aria-hidden="true" />
              
              <div className="relative z-10 text-center mb-12">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-6">
                  <HeartPulse className="h-8 w-8" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-medium text-slate-900 mb-4">
                  1-on-1 Personal Coaching <span className="text-blue-600">with Viren</span>
                </h2>
                <p className="max-w-2xl mx-auto text-[16px] leading-relaxed text-slate-600">
                  Feeling stuck in studies, career, money, or life? In this private 90-minute coaching session, I'll help you identify your challenges and create a practical action plan using powerful NLP techniques.
                </p>
              </div>
              
              <div className="relative z-10 grid md:grid-cols-2 gap-10 lg:gap-16 mb-12">
                <div>
                  <h3 className="text-[15px] font-bold text-slate-900 mb-5 flex items-center gap-2">
                    <span className="h-px w-6 bg-blue-600"></span>
                    I can help you with:
                  </h3>
                  <ul className="space-y-3.5 text-[14.5px] text-slate-700 font-medium">
                    <li className="flex items-start gap-3"><span className="text-xl leading-none">🎓</span> <span>Student Success & Study Strategy</span></li>
                    <li className="flex items-start gap-3"><span className="text-xl leading-none">🧠</span> <span>Confidence & Mindset</span></li>
                    <li className="flex items-start gap-3"><span className="text-xl leading-none">💰</span> <span>Financial Growth Mindset</span></li>
                    <li className="flex items-start gap-3"><span className="text-xl leading-none">🎯</span> <span>Goal Setting & Clarity</span></li>
                    <li className="flex items-start gap-3"><span className="text-xl leading-none">🚀</span> <span>Career Direction</span></li>
                    <li className="flex items-start gap-3"><span className="text-xl leading-none">❤️</span> <span>Personal Life Challenges</span></li>
                    <li className="flex items-start gap-3"><span className="text-xl leading-none">🔥</span> <span>Breaking Limiting Beliefs using NLP</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-slate-900 mb-5 flex items-center gap-2">
                    <span className="h-px w-6 bg-blue-600"></span>
                    What You'll Get:
                  </h3>
                  <ul className="space-y-4 text-[14.5px] text-slate-700 font-medium">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>Personalized Guidance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>Practical Action Plan</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>100% Confidential Session</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>NLP-Based Coaching</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <div>
                  <p className="text-[13px] font-bold uppercase tracking-wider text-slate-500 mb-1">Investment</p>
                  <p className="text-2xl font-bold text-blue-700">₹4,999</p>
                </div>
                <div className="mt-4 sm:mt-0 text-center sm:text-right">
                  <p className="text-[13px] font-bold text-red-500 bg-red-50 px-3 py-1 rounded-full inline-block">
                    Limited Slots Every Week
                  </p>
                  <p className="text-[12px] text-slate-500 mt-2">Book via the form below</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ————— 3 · FORM + SIDE PANEL ————— */}
      <section className="border-t border-dark/10 bg-light py-12 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-10">
          <div>
            <Reveal>
              <p className="flex items-center gap-4 micro-label text-muted">
                <span className="h-px w-10 bg-primary" />
                Send a Message
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-serif text-4xl font-light leading-[1.12] tracking-[-0.015em] text-dark md:text-5xl">
                Write it down.{" "}
                <em className="italic text-primary">He reads everything.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.2} className="mt-8">
              <ContactForm />
            </Reveal>
          </div>

          <Reveal delay={0.25}>
            <div className="lg:sticky lg:top-28">
              <div className="relative">
                <div className="absolute -inset-4 border border-primary/40" aria-hidden="true" />
                <div className="relative aspect-[4/5] overflow-hidden bg-light-2">
                  <Image
                    src="/images/viren-about-portrait.jpg"
                    alt="Viren Surati — Student Success Coach & Memory Trainer"
                    fill
                    sizes="(max-width: 1024px) 92vw, 440px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <blockquote className="mt-6 border-l border-primary pl-7">
                <p className="font-serif text-2xl font-light italic leading-[1.5] text-dark">
                  “Every question is welcome — there are no silly ones when
                  you&apos;re training your mind.”
                </p>
                <footer className="mt-4 micro-label text-muted">— Viren Surati</footer>
              </blockquote>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ————— 4 · FAQ MINI ————— */}
      <section className="bg-light-2 py-12 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-8 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10">
          <div>
            <Reveal>
              <p className="flex items-center gap-4 micro-label text-muted">
                <span className="h-px w-10 bg-primary" />
                Quick Answers
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-serif text-4xl font-light leading-[1.12] tracking-[-0.015em] text-dark md:text-5xl">
                Before you <em className="italic text-primary">write</em>.
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
