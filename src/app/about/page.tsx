import type { Metadata } from "next";
import { ArrowRight, Brain, Lightbulb, Mic } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CircularBadge, MaskLine, Reveal } from "@/components/motion";
import { CountUp } from "@/components/CountUp";
import { STATS, WHATSAPP_URL } from "@/content/courses";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Viren Surati — Certified NLP, Mind & Memory Trainer and Public Speaking Coach. Seven years, 100,000+ lives touched, 3,000+ students trained directly.",
};

const CREDENTIALS = [
  {
    icon: Brain,
    label: "Certified NLP Trainer",
    text: "Neuro-Linguistic Programming — the structure of how we think, feel and change. For you, that means techniques that work with your subconscious, not against it.",
  },
  {
    icon: Lightbulb,
    label: "Mind & Memory Trainer",
    text: "Scientific memory systems — pegging, visualisation, retention cycles — taught so simply that a school student and a CEO can use them the same day.",
  },
  {
    icon: Mic,
    label: "Public Speaking Coach",
    text: "Stage craft refined in front of live audiences across India — body language, voice, and the inner game of fear, taught as one complete skill.",
  },
];

const STAT_BAND = [
  {
    to: STATS.peopleReached,
    suffix: "+",
    label: "People Reached",
    note: "Seminars, webinars and online training across seven years.",
  },
  {
    to: STATS.directStudents,
    suffix: "+",
    label: "Students Trained Directly",
    note: "In public speaking, memory power and the NLP subconscious mind.",
  },
  {
    to: STATS.coursesLive,
    suffix: "",
    label: "Courses Live",
    note: "Self-paced programs on GuniGuru and Udemy right now.",
  },
  {
    to: STATS.rating,
    decimals: 1,
    suffix: "★",
    label: "Instructor Rating",
    note: "From 73 reviews and 2,603+ students on Udemy.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ————— 1 · PAGE HERO ————— */}
      <section className="grain relative overflow-hidden bg-dark pb-16 pt-24 text-surface lg:pb-32 lg:pt-44">
        <div className="pointer-events-none absolute -right-40 top-[-15%] h-[600px] w-[600px] rounded-full bg-primary/[0.08] blur-[140px]" />
        <div className="relative mx-auto grid max-w-[1280px] items-center gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <div>
            <Reveal>
              <p className="flex items-center gap-4 micro-label text-primary">
                <span className="h-px w-10 bg-primary/70" />
                The Trainer Behind the Training
              </p>
            </Reveal>
            <h1 className="mt-8 font-serif text-[clamp(2.9rem,6.5vw,5.6rem)] font-light leading-[1.04] tracking-[-0.02em]">
              <MaskLine delay={0.15}>Meet</MaskLine>
              <MaskLine delay={0.28}>
                <em className="italic text-primary">Viren</em> Surati.
              </MaskLine>
            </h1>
            <Reveal delay={0.5}>
              <p className="mt-8 max-w-lg text-[16.5px] leading-relaxed text-surface/60">
                Certified NLP, Mind &amp; Memory Trainer · Public Speaking
                Coach — teaching people across India how to remember more,
                fear less and speak like they mean it.
              </p>
            </Reveal>
            <Reveal delay={0.65}>
              <div className="mt-9 flex flex-wrap gap-2.5">
                {["NLP", "Memory Power", "Public Speaking", "Subconscious Mind"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-surface/20 px-4 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.18em] text-surface/65"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.4} y={34} className="relative mx-auto w-full max-w-[560px]">
            <div className="absolute -inset-4 border border-primary/30" aria-hidden="true" />
            <div className="relative aspect-[16/12] overflow-hidden bg-dark-3">
              <Image
                src="/images/seminar.png"
                alt="Viren Surati addressing a seminar audience under warm stage light — placeholder photo"
                fill
                priority
                sizes="(max-width: 1024px) 92vw, 560px"
                className="object-cover"
              />
            </div>
            <CircularBadge
              text="TRAIN · TRANSFORM · SPEAK · REMEMBER · "
              className="absolute -bottom-9 -left-7 h-24 w-24"
            />
          </Reveal>
        </div>
      </section>

      {/* ————— 2 · THE STORY SO FAR ————— */}
      <section className="bg-light py-16 lg:py-36">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-10">
          <div>
            <Reveal>
              <p className="flex items-center gap-4 micro-label text-muted">
                <span className="h-px w-10 bg-primary" />
                The Story So Far
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-serif text-4xl font-light leading-[1.12] tracking-[-0.015em] text-dark md:text-5xl">
                Seven years,{" "}
                <em className="italic text-primary">100,000 minds</em>, one
                pattern.
              </h2>
            </Reveal>
          </div>

          <div className="space-y-7 text-[16.5px] leading-[1.9] text-muted">
            <Reveal>
              <p className="first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-[3.6rem] first-letter:leading-[0.85] first-letter:text-primary">
                It began with an observation. In classrooms and seminar halls
                across India, Viren kept meeting the same person — bright,
                hardworking, full of potential — held back not by a lack of
                talent, but by an untrained mind. Syllabus forgotten the week
                before the exam. A voice that froze the moment it reached a
                stage. Negative self-talk running louder than any audience.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p>
                That pattern pulled him into the study of how the mind
                actually works — into NLP, the science of memory, and the
                craft of public speaking. What started as personal study
                became a calling, and then a profession: a Certified NLP, Mind
                &amp; Memory Trainer, on stage and in classrooms, teaching
                techniques that work the same day you learn them.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p>
                One-on-one sessions grew into seminars. Seminars grew into
                webinars that reached tens of thousands. Over seven years,
                that quiet compounding has touched more than 100,000 people —
                with 3,000+ students trained directly in public speaking,
                memory power and the NLP subconscious mind.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p>
                Today, with 7 courses live and a 4.3★ instructor rating from
                learners on Udemy, the work has only scaled — the promise
                hasn&apos;t changed: <em className="font-serif italic text-dark">practical,
                life-changing technique over theory. Always.</em>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ————— 3 · CREDENTIALS ————— */}
      <section className="border-t border-dark/10 bg-light pb-16 lg:pb-36">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid gap-7 md:grid-cols-3">
            {CREDENTIALS.map((cred, i) => (
              <Reveal key={cred.label} delay={0.1 + i * 0.12}>
                <div className="group h-full border border-dark/10 bg-white/60 p-9 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_32px_60px_-34px_rgba(11,11,12,0.35)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/50">
                    <cred.icon className="h-5 w-5 text-primary" strokeWidth={1.4} />
                  </div>
                  <h3 className="mt-7 font-serif text-[1.45rem] font-medium tracking-[-0.01em] text-dark">
                    {cred.label}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-muted">
                    {cred.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ————— 4 · STATS BAND ————— */}
      <section className="grain relative overflow-hidden bg-dark py-16 text-surface lg:py-36">
        <div className="pointer-events-none absolute -left-40 top-[-25%] h-[520px] w-[520px] rounded-full bg-primary/[0.07] blur-[130px]" />
        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <p className="flex items-center gap-4 micro-label text-primary">
              <span className="h-px w-10 bg-primary" />
              The Record
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-2xl font-serif text-4xl font-light leading-[1.12] tracking-[-0.015em] md:text-5xl">
              Trust is built in{" "}
              <em className="italic text-primary">repetition</em>.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-y-14 border-t border-surface/10 pt-10 md:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-surface/10">
            {STAT_BAND.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.1} className="px-6 text-center first:pl-0 last:pr-0">
                <p className="font-serif text-5xl font-light tracking-[-0.02em] lg:text-[3.4rem]">
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
                <p className="mx-auto mt-2.5 max-w-[220px] text-[13px] leading-relaxed text-surface/50">
                  {stat.note}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ————— 5 · TRAINING PHILOSOPHY ————— */}
      <section className="bg-light-2 py-16 lg:py-36">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-10">
          <div>
            <Reveal>
              <p className="flex items-center gap-4 micro-label text-muted">
                <span className="h-px w-10 bg-primary" />
                His Training Philosophy
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-serif text-4xl font-light leading-[1.12] tracking-[-0.015em] text-dark md:text-5xl">
                Memory plus mind —{" "}
                <em className="italic text-primary">taught as one</em>.
              </h2>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <blockquote className="border-l border-primary pl-8 font-serif text-2xl font-light italic leading-[1.55] text-dark lg:text-[1.75rem]">
                “A sharp memory gets you to the exam. A trained mind gets you
                through it. Most training gives you one — this work is built
                on giving you both.”
              </blockquote>
            </Reveal>
            <div className="mt-6 space-y-6 text-[16px] leading-[1.85] text-muted">
              <Reveal delay={0.08}>
                <p>
                  Every Viren Surati program rests on a combined approach:
                  Memory Technique on one side, Scientific Mind Technique
                  (NLP) on the other. Memory work trains <span className="text-dark">what you
                  retain</span> — how a table, a date, a long answer or a
                  speech gets encoded so it stays. Mind work trains{" "}
                  <span className="text-dark">the state you perform from</span> — the confidence,
                  the self-image, the inner dialogue running underneath it
                  all.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <p>
                  That&apos;s why a student in the memory course also learns to
                  mute unwanted internal sounds before an exam — and why a
                  public speaker also works on the beliefs that freeze them.
                  Technique alone is a trick. Technique plus mind is a
                  transformation, and it&apos;s the difference learners keep
                  talking about long after the course ends.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ————— 6 · MISSION ————— */}
      <section className="grain relative overflow-hidden bg-dark py-20 text-center text-surface lg:py-40">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.08] blur-[130px]" />
        <div className="relative mx-auto max-w-3xl px-6">
          <Reveal>
            <span className="font-serif text-6xl leading-none text-primary">“</span>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="font-serif text-[clamp(1.9rem,4.4vw,3.2rem)] font-light leading-[1.28] tracking-[-0.015em]">
              My mission is simple — to help people{" "}
              <em className="italic text-primary">worldwide</em> transform their
              lives through practical, life-changing techniques.
            </p>
          </Reveal>
          <Reveal delay={0.28}>
            <p className="mt-9 font-serif text-lg italic text-surface/50">
              Simple techniques. Seedhe shabd. Asli transformation.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mx-auto mt-6 h-px w-16 bg-primary/70" />
            <p className="mt-5 micro-label text-surface/45">Viren Surati</p>
          </Reveal>
        </div>
      </section>

      {/* ————— 7 · CTA BAND ————— */}
      <section className="bg-light-2 py-16 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <div className="border border-dark/10 bg-light px-8 py-10 text-center lg:py-20">
              <p className="micro-label text-muted">Start Here</p>
              <h2 className="mx-auto mt-6 max-w-2xl font-serif text-4xl font-light leading-[1.12] tracking-[-0.015em] text-dark md:text-5xl">
                Ready to start{" "}
                <em className="italic text-primary">your</em> transformation?
              </h2>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <Link href="/courses" className="btn btn-dark">
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
                  <span className="relative">Message Viren</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
