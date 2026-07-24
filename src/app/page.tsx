import type { Metadata } from "next";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Briefcase,
  GraduationCap,
  Infinity as InfinityIcon,
  Languages,
  Layers,
  Lightbulb,
  Mic,
  PenLine,
  Sparkles,
  Sprout,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CircularBadge, MaskLine, Reveal } from "@/components/motion";
import { CountUp } from "@/components/CountUp";
import { CourseCard } from "@/components/CourseCard";
import { CourseCarousel } from "@/components/CourseCarousel";
import {
  COURSES,
  PHONE_DISPLAY,
  PHONE_TEL,
  STATS,
  WHATSAPP_URL,
} from "@/content/courses";

export const metadata: Metadata = {
  title: {
    absolute: "Viren Surati — Certified NLP, Mind & Memory Trainer",
  },
  description:
    "Transform your mind, master your voice, own the stage. 100,000+ people reached through seminars, webinars and courses in memory power, NLP and public speaking.",
};

const METHOD = [
  {
    icon: BookOpen,
    step: "01",
    title: "Learn the Science",
    text: "Understand how your mind actually encodes, stores and recalls — the NLP and memory science behind every technique.",
  },
  {
    icon: PenLine,
    step: "02",
    title: "Practice the Technique",
    text: "Structured, step-by-step exercises — pegging, visualisation, state control — until they become second nature.",
  },
  {
    icon: Mic,
    step: "03",
    title: "Apply It Live",
    text: "Use it where it matters: in exams, on stage, in interviews and in the conversations that decide things.",
  },
  {
    icon: Sparkles,
    step: "04",
    title: "Transform",
    text: "Lasting confidence, sharper recall and a way of communicating that people remember long after you speak.",
  },
];

const PILLARS = [
  {
    icon: Layers,
    title: "The Real Combination",
    text: "NLP and memory science taught together — so you train both what you remember and how you feel while performing.",
  },
  {
    icon: Languages,
    title: "Hindi-First, India-First",
    text: "Taught in your language, with examples from your classrooms, offices and stages — nothing lost in translation.",
  },
  {
    icon: Users,
    title: "Proven at Scale",
    text: "3,000+ students trained directly and 100,000+ people reached over seven years of seminars, webinars and courses.",
  },
  {
    icon: InfinityIcon,
    title: "Lifetime Techniques",
    text: "Not exam-season hacks — skills you'll use in every presentation, every interview and every stage for life.",
  },
];

const AUDIENCES = [
  {
    icon: GraduationCap,
    label: "For Students",
    title: "Exams, without the fear",
    text: "Memory stops being a struggle and becomes a technique — recall your syllabus faster, focus longer and walk into the exam hall confident.",
  },
  {
    icon: Briefcase,
    label: "For Professionals",
    title: "Speak like it matters",
    text: "For the presentations, pitches and meetings that decide careers — learn to speak with the calm, clear authority people listen to.",
  },
  {
    icon: Sprout,
    label: "For Growth Seekers",
    title: "Rewrite the inner story",
    text: "Use NLP to quiet self-doubt, erase limiting beliefs and build a self-image that carries you through any season of life.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ————— 1 · HERO ————— */}
      <section className="grain relative overflow-hidden bg-light pb-16 pt-24 text-dark lg:pb-32 lg:pt-44">
        {/* Ambient depth */}
        <div className="pointer-events-none absolute -right-52 top-[-10%] h-[680px] w-[680px] rounded-full bg-primary/[0.15] blur-[140px]" />
        <div className="pointer-events-none absolute -left-40 bottom-[-30%] h-[520px] w-[520px] rounded-full bg-primary/[0.1] blur-[120px]" />

        <div className="relative mx-auto grid max-w-[1280px] items-center gap-10 px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-10">
          {/* Copy */}
          <div>
            <Reveal>
              <p className="flex items-center gap-4 micro-label text-primary">
                <span className="h-px w-10 bg-primary/70" />
                Certified NLP · Mind &amp; Memory Trainer
              </p>
            </Reveal>

            <h1 className="mt-8 font-serif text-[clamp(2.9rem,7.2vw,6.1rem)] font-light leading-[1.03] tracking-[-0.02em]">
              <MaskLine delay={0.15}>Transform Your Mind.</MaskLine>
              <MaskLine delay={0.3}>Master Your Voice.</MaskLine>
              <MaskLine delay={0.45}>
                Own the{" "}
                <em className="font-normal italic text-primary">Stage</em>.
              </MaskLine>
            </h1>

            <Reveal delay={0.65}>
              <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-muted">
                Certified NLP, Mind &amp; Memory Trainer helping{" "}
                <span className="text-dark font-medium">100,000+ people</span> build
                unshakeable confidence, sharper memory and powerful public
                speaking — in Hindi, for real life.
              </p>
            </Reveal>

            <Reveal delay={0.8}>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link href="/courses" className="btn btn-primary">
                  <span className="btn-wipe" />
                  <span className="relative">Explore Courses</span>
                  <ArrowRight className="btn-icon relative h-4 w-4" strokeWidth={1.75} />
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-dark"
                >
                  <span className="btn-wipe" />
                  <span className="relative">Talk to Viren</span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.95}>
              <div className="mt-8 flex items-center gap-3 text-[13px] text-muted">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span>
                  <span className="font-semibold text-dark">4.3</span> instructor
                  rating · 7 courses live · {PHONE_DISPLAY}
                </span>
              </div>
            </Reveal>
          </div>

          {/* Portrait */}
          <Reveal delay={0.5} y={34} className="relative mx-auto w-full max-w-[440px]">
            <div className="relative">
              {/* Offset hairline arch frame */}
              <div className="absolute -inset-4 rounded-t-full border border-primary/35" aria-hidden="true" />
              <div className="relative aspect-[3/4] overflow-hidden rounded-t-full bg-light-2">
                <Image
                  src="/images/portrait-hero.png"
                  alt="Viren Surati speaking on stage under warm light — portrait placeholder"
                  fill
                  priority
                  sizes="(max-width: 1024px) 88vw, 440px"
                  className="object-cover"
                />
              </div>

              {/* Rotating badge */}
              <CircularBadge
                text="MIND · MEMORY · VOICE · CONFIDENCE · "
                className="absolute -right-8 -top-6 h-28 w-28 lg:-right-12"
              />

              {/* Floating stat card */}
              <div className="absolute -bottom-8 -left-6 border border-primary/30 bg-light px-6 py-5 shadow-[0_24px_50px_-24px_rgba(0,0,0,0.6)] lg:-left-14">
                <p className="font-serif text-2xl font-medium italic leading-tight text-dark">
                  7 years of training
                </p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                  100,000+ lives touched
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Scroll indicator */}
        <div className="relative mx-auto mt-12 hidden max-w-[1280px] items-center gap-4 px-6 lg:flex lg:px-10">
          <span className="flex h-9 w-[22px] items-start justify-center rounded-full border border-dark/20 pt-1.5">
            <span className="h-1.5 w-[3px] animate-scroll-dot rounded-full bg-primary" />
          </span>
          <span className="micro-label text-muted">Scroll</span>
        </div>
      </section>

      {/* ————— 2 · TRUST STRIP ————— */}
      <section className="border-y border-dark/10 bg-white text-dark">
        <div className="mx-auto grid max-w-[1280px] grid-cols-2 divide-dark/10 px-6 max-lg:gap-y-10 max-lg:py-10 md:grid-cols-4 md:divide-x lg:px-10">
          {[
            { to: STATS.peopleReached, suffix: "+", label: "People Reached" },
            { to: STATS.directStudents, suffix: "+", label: "Students Trained Directly" },
            { to: STATS.coursesLive, suffix: "", label: "Courses Live" },
            { to: STATS.rating, decimals: 1, suffix: "★", label: "Instructor Rating" },
          ].map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1} className="px-4 py-9 text-center md:py-11">
              <p className="font-serif text-3xl font-light tracking-[-0.01em] text-dark md:text-[2.35rem]">
                <CountUp
                  to={stat.to}
                  suffix={stat.suffix}
                  decimals={stat.decimals ?? 0}
                />
              </p>
              <p className="mt-2 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-muted">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ————— 3 · ABOUT SNAPSHOT ————— */}
      <section className="bg-light py-16 lg:py-36">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 lg:px-10">
          <Reveal className="relative mx-auto w-full max-w-[460px]">
            <div className="absolute -inset-4 border border-primary/40" aria-hidden="true" />
            <div className="relative aspect-[4/5] overflow-hidden bg-light-2">
              <Image
                src="/images/portrait-about.png"
                alt="Viren Surati in a warm studio setting — portrait placeholder"
                fill
                sizes="(max-width: 1024px) 88vw, 460px"
                className="object-cover"
              />
            </div>
            <p className="absolute -bottom-5 right-6 bg-white shadow-sm px-5 py-3 font-serif text-sm italic text-primary">
              “Technique se transformation.”
            </p>
          </Reveal>

          <div>
            <Reveal>
              <p className="flex items-center gap-4 micro-label text-muted">
                <span className="h-px w-10 bg-primary" />
                About Viren
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-serif text-4xl font-light leading-[1.12] tracking-[-0.015em] text-dark md:text-5xl">
                A trainer who practises what he{" "}
                <em className="italic text-primary">teaches</em>.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-7 max-w-xl text-[16.5px] leading-[1.85] text-muted">
                For over seven years, Viren Surati has done one thing — handed
                ordinary people extraordinary tools for the mind. A Certified
                NLP, Mind &amp; Memory Trainer and Public Speaking Coach, he has
                touched 100,000+ lives through seminars, webinars and live
                training across India, and personally trained 3,000+ students in
                memory power, confidence and the craft of speaking. His promise
                is simple: practical, life-changing techniques you can use the
                day you learn them.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {[
                  { icon: Brain, label: "Certified NLP Trainer" },
                  { icon: Lightbulb, label: "Mind & Memory Trainer" },
                  { icon: Mic, label: "Public Speaking Coach" },
                ].map((badge) => (
                  <span
                    key={badge.label}
                    className="inline-flex items-center gap-2 rounded-full border border-dark/15 bg-white/60 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-dark"
                  >
                    <badge.icon className="h-3.5 w-3.5 text-primary" strokeWidth={1.6} />
                    {badge.label}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <Link href="/about" className="link-draw mt-6 text-dark">
                Read the Full Story
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.75} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ————— 4 · FEATURED COURSES ————— */}
      <section className="border-t border-dark/10 bg-light py-16 lg:py-36">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Reveal>
                <p className="flex items-center gap-4 micro-label text-muted">
                  <span className="h-px w-10 bg-primary" />
                  ( 04 ) — Featured Courses
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-6 max-w-2xl font-serif text-4xl font-light leading-[1.12] tracking-[-0.015em] text-dark md:text-5xl">
                  Courses built from real{" "}
                  <em className="italic text-primary">training experience</em>.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <p className="max-w-xs font-serif text-base italic leading-relaxed text-muted">
                Practical, transformation-focused courses in Hindi — no fluff,
                no recycled theory.
              </p>
            </Reveal>
          </div>

          <CourseCarousel>
            {COURSES.map((course, i) => (
              <div key={course.slug} className="w-[85vw] md:w-[45vw] lg:w-[400px] snap-center shrink-0">
                <Reveal delay={0.1 + (i % 3) * 0.12} className="h-full">
                  <CourseCard course={course} />
                </Reveal>
              </div>
            ))}
          </CourseCarousel>

          <Reveal delay={0.25} className="mt-8 text-center">
            <Link href="/courses" className="btn btn-outline-dark">
              <span className="btn-wipe" />
              <span className="relative">View All Courses</span>
              <ArrowRight className="btn-icon relative h-4 w-4" strokeWidth={1.75} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ————— 5 · METHODOLOGY ————— */}
      <section className="grain relative overflow-hidden bg-light-2 py-16 text-dark lg:py-36">
        <div className="pointer-events-none absolute left-1/2 top-[-20%] h-[560px] w-[820px] -translate-x-1/2 rounded-full bg-primary/[0.06] blur-[150px]" />
        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <p className="flex items-center gap-4 micro-label text-primary">
              <span className="h-px w-10 bg-primary" />
              The Method
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-2xl font-serif text-4xl font-light leading-[1.12] tracking-[-0.015em] md:text-5xl">
              How a transformation{" "}
              <em className="italic text-primary">actually</em> happens.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
            {METHOD.map((item, i) => (
              <Reveal key={item.step} delay={0.1 + i * 0.11}>
                <div className="group border-l border-dark/10 pl-7 transition-colors duration-500 hover:border-primary">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-4xl font-light text-primary/60 transition-colors duration-500 group-hover:text-primary">
                      {item.step}
                    </span>
                    <item.icon className="h-6 w-6 text-muted transition-all duration-500 group-hover:-translate-y-0.5 group-hover:text-primary" strokeWidth={1.3} />
                  </div>
                  <h3 className="mt-7 font-serif text-[1.35rem] font-medium tracking-[-0.01em]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-muted">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ————— 6 · WHY LEARN WITH VIREN ————— */}
      <section className="bg-light py-16 lg:py-36">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <p className="flex items-center gap-4 micro-label text-muted">
              <span className="h-px w-10 bg-primary" />
              Why Learn With Viren
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-2xl font-serif text-4xl font-light leading-[1.12] tracking-[-0.015em] text-dark md:text-5xl">
              Not motivation.{" "}
              <em className="italic text-primary">Transformation.</em>
            </h2>
          </Reveal>

          {/* Shared-hairline pillar grid */}
          <div className="mt-10 grid border-l border-t border-dark/10 md:grid-cols-2">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} delay={0.08 + i * 0.1} className="border-b border-r border-dark/10">
                <div className="group h-full bg-white/0 p-9 transition-colors duration-500 hover:bg-white/70 lg:p-12">
                  <pillar.icon className="h-7 w-7 text-primary" strokeWidth={1.3} />
                  <h3 className="mt-6 font-serif text-2xl font-medium tracking-[-0.01em] text-dark">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">
                    {pillar.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ————— 7 · WHO THIS IS FOR ————— */}
      <section className="bg-light-2 py-16 lg:py-36">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="text-center">
            <Reveal>
              <p className="micro-label text-muted">Who This Is For</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mx-auto mt-6 max-w-2xl font-serif text-4xl font-light leading-[1.12] tracking-[-0.015em] text-dark md:text-5xl">
                Made for the moment{" "}
                <em className="italic text-primary">you&apos;re</em> preparing for.
              </h2>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-7 md:grid-cols-3">
            {AUDIENCES.map((aud, i) => (
              <Reveal key={aud.label} delay={0.1 + i * 0.12}>
                <div className="group h-full border border-dark/10 bg-light p-9 pt-6 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_32px_60px_-34px_rgba(11,11,12,0.35)]">
                  <div className="h-px w-12 bg-primary transition-all duration-700 group-hover:w-20" />
                  <p className="mt-7 flex items-center gap-2.5 micro-label text-muted">
                    <aud.icon className="h-4 w-4 text-primary" strokeWidth={1.5} />
                    {aud.label}
                  </p>
                  <h3 className="mt-4 font-serif text-[1.55rem] font-medium tracking-[-0.01em] text-dark">
                    {aud.title}
                  </h3>
                  <p className="mt-4 text-[14.5px] leading-relaxed text-muted">
                    {aud.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ————— 8 · PROOF IN NUMBERS ————— */}
      <section className="grain relative overflow-hidden border-y border-dark/10 bg-white py-16 text-dark lg:py-36">
        <div className="pointer-events-none absolute -left-40 top-[-30%] h-[560px] w-[560px] rounded-full bg-primary/[0.07] blur-[130px]" />
        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Reveal>
                <p className="flex items-center gap-4 micro-label text-primary">
                  <span className="h-px w-10 bg-primary" />
                  Proof, In Numbers
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-6 font-serif text-4xl font-light leading-[1.12] tracking-[-0.015em] md:text-5xl">
                  Seven years. One mission.{" "}
                  <em className="italic text-primary">Measured in minds.</em>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <p className="max-w-xs text-[14px] leading-relaxed text-muted">
                Every number below is a classroom, a seminar hall, a webinar or
                a stage — somewhere a mind learned to work differently.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-y-14 border-t border-dark/10 pt-10 md:grid-cols-4 md:divide-x md:divide-dark/10">
            {[
              {
                to: STATS.peopleReached,
                suffix: "+",
                label: "People reached",
                note: "through seminars, webinars & online training",
              },
              {
                to: STATS.directStudents,
                suffix: "+",
                label: "Direct students",
                note: "in public speaking, memory power & NLP",
              },
              {
                to: STATS.coursesLive,
                suffix: "",
                label: "Courses live",
                note: "across GuniGuru & Udemy today",
              },
              {
                to: STATS.rating,
                decimals: 1,
                suffix: "★",
                label: "Instructor rating",
                note: "from 73 reviews · 2,603+ students",
              },
            ].map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.1} className="px-6 text-center first:pl-0 last:pr-0">
                <p className="font-serif text-5xl font-light tracking-[-0.02em] text-dark lg:text-6xl">
                  <CountUp
                    to={stat.to}
                    suffix={stat.suffix}
                    decimals={stat.decimals ?? 0}
                    duration={2.4}
                  />
                </p>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
                  {stat.label}
                </p>
                <p className="mx-auto mt-2 max-w-[190px] text-[12.5px] leading-relaxed text-muted">
                  {stat.note}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ————— 9 · FINAL CTA ————— */}
      <section className="grain relative overflow-hidden bg-light py-20 text-center text-dark lg:py-40">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.08] blur-[130px]" />
        <div className="relative mx-auto max-w-3xl px-6">
          <Reveal>
            <p className="micro-label text-primary">Begin</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-7 font-serif text-[clamp(2.4rem,5.4vw,4.2rem)] font-light leading-[1.08] tracking-[-0.02em]">
              Your transformation starts with{" "}
              <em className="italic text-primary">one conversation</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mx-auto mt-7 max-w-md text-[15.5px] leading-relaxed text-muted">
              Message Viren directly on WhatsApp — it goes straight to his
              phone, whether you&apos;re choosing a course or just starting out.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary px-9! py-4!"
              >
                <span className="btn-wipe" />
                <span className="relative">Message Viren on WhatsApp</span>
              </a>
              <Link href="/courses" className="link-draw text-muted hover:text-dark">
                Browse Courses
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
