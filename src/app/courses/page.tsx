import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Accordion } from "@/components/Accordion";
import { CourseGrid } from "@/components/CourseGrid";
import { MaskLine, Reveal } from "@/components/motion";
import { whatsappWith } from "@/content/courses";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Practical, transformation-focused courses in Hindi by Viren Surati — memory retention for students and confident public speaking, built from real training experience.",
};

const FAQS = [
  {
    id: "language",
    header: "Are the courses in Hindi?",
    body: (
      <p>
        Yes — every course is designed and delivered in Hindi, with examples
        drawn from Indian classrooms, exams and workplaces. The course pages
        and titles are in English, but the teaching is entirely in your
        language.
      </p>
    ),
  },
  {
    id: "certificate",
    header: "Do I get a certificate?",
    body: (
      <p>
        The Ultimate Blueprint of Student Success &amp; Memory Retention
        Formula includes a certificate of completion. Courses hosted on
        Udemy carry Udemy&apos;s own certificate of completion when you
        finish all lectures.
      </p>
    ),
  },
  {
    id: "access",
    header: "How long do I have access?",
    body: (
      /* CONFIRM WITH VIREN: exact access duration per platform */
      <p>
        Access depends on where you enroll — GuniGuru or Udemy each set their
        own access terms. Message Viren on WhatsApp and he&apos;ll share the
        current access details for the exact course you&apos;re choosing.
      </p>
    ),
  },
  {
    id: "beginner",
    header: "Is this beginner-friendly?",
    body: (
      <p>
        Completely. Both courses start from the fundamentals — no prior
        knowledge of NLP, memory systems or public speaking is needed. The
        memory course is marked beginner-level, and the speaking course is
        built for all levels.
      </p>
    ),
  },
  {
    id: "enroll",
    header: "How do I enroll?",
    body: (
      <p>
        The fastest way is a WhatsApp message to Viren — tell him which
        course you&apos;re interested in and he&apos;ll guide you to the
        official enrollment page on GuniGuru or Udemy, and answer anything
        you want to know first.
      </p>
    ),
  },
];

export default function CoursesPage() {
  return (
    <>
      {/* ————— 1 · PAGE HERO ————— */}
      <section className="grain relative overflow-hidden bg-dark pb-12 pt-24 text-surface lg:pb-28 lg:pt-44">
        <div className="pointer-events-none absolute -right-40 top-[-20%] h-[560px] w-[560px] rounded-full bg-primary/[0.08] blur-[140px]" />
        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <p className="flex items-center gap-4 micro-label text-primary">
              <span className="h-px w-10 bg-primary/70" />
              The Course Library
            </p>
          </Reveal>
          <h1 className="mt-8 max-w-3xl font-serif text-[clamp(2.7rem,6vw,5rem)] font-light leading-[1.05] tracking-[-0.02em]">
            <MaskLine delay={0.15}>Learn from real</MaskLine>
            <MaskLine delay={0.28}>
              training <em className="italic text-primary">experience</em>.
            </MaskLine>
          </h1>
          <Reveal delay={0.5}>
            <p className="mt-7 max-w-xl font-serif text-lg italic leading-relaxed text-surface/55">
              Practical, transformation-focused courses in Hindi — built from
              seven years on stage and in classrooms, not from theory.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ————— 2 + 3 · FILTER + GRID ————— */}
      <section className="bg-light py-12 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <CourseGrid />
        </div>
      </section>

      {/* ————— 4 · NOT SURE WHICH COURSE ————— */}
      <section className="border-y border-surface/10 bg-dark-2 py-12 text-surface lg:py-28">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-6 px-6 lg:flex-row lg:items-center lg:px-10">
          <Reveal>
            <p className="micro-label text-primary">Guidance</p>
            <h2 className="mt-5 max-w-xl font-serif text-3xl font-light leading-[1.15] tracking-[-0.015em] md:text-4xl">
              Not sure which course is{" "}
              <em className="italic text-primary">right for you</em>?
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-surface/55">
              Tell Viren where you are — an exam, a presentation, a fear
              you&apos;re tired of — and he&apos;ll help you pick the right
              starting point.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <a
              href={whatsappWith(
                "Hi Viren, I'm not sure which course is right for me. Can you help me choose?"
              )}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary px-8! py-4!"
            >
              <span className="btn-wipe" />
              <span className="relative">Ask Viren on WhatsApp</span>
              <ArrowUpRight className="btn-icon relative h-4 w-4" strokeWidth={1.75} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ————— 5 · FAQ ————— */}
      <section className="bg-light-2 py-12 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-8 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10">
          <div>
            <Reveal>
              <p className="flex items-center gap-4 micro-label text-muted">
                <span className="h-px w-10 bg-primary" />
                Questions, Answered
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-serif text-4xl font-light leading-[1.12] tracking-[-0.015em] text-dark md:text-5xl">
                Before you <em className="italic text-primary">ask</em>.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-muted">
                Anything else on your mind? A two-line WhatsApp message
                usually gets you a personal answer the same day.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <Accordion items={FAQS} defaultOpen="language" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
