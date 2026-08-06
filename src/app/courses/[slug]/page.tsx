import type { Metadata } from "next";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Clock3,
  GraduationCap,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Accordion } from "@/components/Accordion";
import { MaskLine, Reveal } from "@/components/motion";
import { COURSES, getCourse, whatsappWith } from "@/content/courses";
import { CourseTestimonials } from "@/components/CourseTestimonials";

export function generateStaticParams() {
  return COURSES.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return { title: "Course Not Found" };
  return {
    title: course.shortTitle,
    description: course.hook,
    openGraph: {
      title: course.title,
      description: course.hook,
      images: [{ url: course.image.src }],
    },
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const enquireUrl = whatsappWith(
    `Hi Viren, I have a question about '${course.title}'.`
  );

  return (
    <>
      {/* ————— 1 · BREADCRUMB ————— */}
      <div className="bg-dark pt-20 lg:pt-32">
        <nav
          aria-label="Breadcrumb"
          className="mx-auto flex max-w-[1280px] items-center gap-2 px-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-surface/45 lg:px-10"
        >
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/courses" className="transition-colors hover:text-primary">
            Courses
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="truncate text-surface/70">{course.shortTitle}</span>
        </nav>
      </div>

      {/* ————— 2 · HERO ————— */}
      <section className="grain relative overflow-hidden bg-dark pb-16 pt-8 text-surface lg:pb-32 lg:pt-16">
        <div className="pointer-events-none absolute -right-40 top-[-20%] h-[560px] w-[560px] rounded-full bg-primary/[0.08] blur-[140px]" />
        <div className="relative mx-auto grid max-w-[1280px] items-center gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-10">
          <div>
            <Reveal>
              <div className="flex flex-wrap gap-2">
                {course.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-primary/40 px-4 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.18em] text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>

            <h1 className="mt-7 font-serif text-[clamp(2.1rem,4.6vw,3.7rem)] font-light leading-[1.1] tracking-[-0.015em]">
              <MaskLine delay={0.15}>{course.title}</MaskLine>
            </h1>

            <Reveal delay={0.35}>
              <p className="mt-6 max-w-xl font-serif text-lg italic leading-relaxed text-surface/60">
                {course.hook}
              </p>
            </Reveal>

            <Reveal delay={0.45}>
              <ul className="mt-8 grid max-w-xl gap-x-8 gap-y-3 sm:grid-cols-2">
                {course.outcomeBullets.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3 text-[14px] text-surface/75">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.8} />
                    {outcome}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.55}>
              <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] font-medium text-surface/50">
                {course.cardMeta.map((m, i) => (
                  <span key={m} className="flex items-center gap-3">
                    {i > 0 && <span className="h-[3px] w-[3px] rounded-full bg-primary" />}
                    {m}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.65}>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href={course.enrollUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  <span className="btn-wipe" />
                  <span className="relative">{course.buttonName}</span>
                  <ArrowUpRight className="btn-icon relative h-4 w-4" strokeWidth={1.75} />
                </a>
                {course.modules.length > 0 && (
                  <a href="#curriculum" className="link-draw text-surface/70 hover:text-surface">
                    View Curriculum
                    <ArrowRight className="h-4 w-4 rotate-90" strokeWidth={1.75} />
                  </a>
                )}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.4} y={34} className="relative">
            <div className="absolute -inset-4 border border-primary/30" aria-hidden="true" />
            <div className="relative aspect-[16/11] overflow-hidden bg-dark-3">
              <Image
                src={course.image.src}
                alt={course.image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 92vw, 560px"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 border border-primary/40 bg-dark-2 px-5 py-3.5">
              <p className="micro-label text-primary">Hosted on {course.platform}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ————— 3 · COURSE OUTCOME ————— */}
      <section className="bg-light py-16 lg:py-32">
        <div className="mx-auto grid max-w-[1280px] gap-8 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-10">
          <div>
            <Reveal>
              <p className="flex items-center gap-4 micro-label text-muted">
                <span className="h-px w-10 bg-primary" />
                Course Outcome
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-serif text-4xl font-light leading-[1.12] tracking-[-0.015em] text-dark md:text-[2.8rem]">
                What this course{" "}
                <em className="italic text-primary">does for you</em>.
              </h2>
            </Reveal>
          </div>
          <div className="space-y-6">
            {course.outcomeParagraphs.map((para, i) => (
              <Reveal key={i} delay={0.08 * i}>
                <p className="text-[16.5px] leading-[1.9] text-muted">{para}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ————— 4 · WHAT YOU'LL LEARN ————— */}
      <section className="border-t border-dark/10 bg-light pb-16 lg:pb-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <h2 className="font-serif text-3xl font-light tracking-[-0.015em] text-dark md:text-4xl">
              What you&apos;ll <em className="italic text-primary">learn</em>
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-x-12 gap-y-4 sm:grid-cols-2">
            {course.learn.map((item, i) => (
              <Reveal key={item} delay={Math.min(i * 0.03, 0.3)}>
                <div className="flex items-start gap-3.5 border-b border-dark/10 pb-4">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-primary" strokeWidth={1.8} />
                  <span className="text-[15px] leading-relaxed text-dark/85">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ————— 5 · CURRICULUM ————— */}
      {course.modules.length > 0 && (
        <section id="curriculum" className="bg-light-2 py-16 lg:py-32">
          <div className="mx-auto grid max-w-[1280px] gap-8 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10">
            <div>
              <Reveal>
                <p className="flex items-center gap-4 micro-label text-muted">
                  <span className="h-px w-10 bg-primary" />
                  Curriculum Overview
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-6 font-serif text-4xl font-light leading-[1.12] tracking-[-0.015em] text-dark md:text-[2.8rem]">
                  The full <em className="italic text-primary">syllabus</em>.
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 max-w-sm text-[14.5px] leading-relaxed text-muted">
                  {course.curriculumIsOutline
                    ? "A thematic outline of everything you'll master — grouped from the course's published learning outcomes."
                    : "Every module and lecture, exactly as you'll experience it — with downloadable PDFs where marked."}
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <Accordion
                defaultOpen={course.modules[0].title}
                items={course.modules.map((mod) => ({
                  id: mod.title,
                  header: (
                    <>
                      <span className="mr-3 font-serif text-sm italic text-primary">
                        {mod.subtitle}
                      </span>
                      {mod.title}
                    </>
                  ),
                  meta: mod.meta ?? `${mod.lectures.length} topics`,
                  body: (
                    <ul>
                      {mod.lectures.map((lecture) => (
                        <li
                          key={lecture.title}
                          className="flex items-baseline justify-between gap-6 border-b border-dark/8 py-3.5 last:border-b-0"
                        >
                          <span className="text-[14px] leading-relaxed text-dark/80">
                            {lecture.title}
                            {lecture.resources && (
                              <span className="ml-2 rounded-full border border-primary/50 px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-[0.14em] text-primary">
                                {lecture.resources}
                              </span>
                            )}
                          </span>
                          {lecture.duration && (
                            <span className="flex shrink-0 items-center gap-1.5 text-[12px] font-medium text-muted">
                              <Clock3 className="h-3 w-3" strokeWidth={1.6} />
                              {lecture.duration}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  ),
                }))}
              />
            </Reveal>
          </div>
        </section>
      )}

      {/* ————— 6 · COURSE INCLUDES ————— */}
      <section className="grain relative border-y border-surface/10 bg-dark py-10 text-surface lg:py-20">
        <div className="mx-auto grid max-w-[1280px] gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
          {course.includes.map((inc, i) => (
            <Reveal key={inc.label} delay={i * 0.08} className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/45">
                <inc.icon className="h-5 w-5 text-primary" strokeWidth={1.35} />
              </span>
              <span className="text-[13.5px] font-medium leading-snug text-surface/75">
                {inc.label}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ————— 7 · WHO THIS COURSE IS FOR ————— */}
      <section className="bg-light py-16 lg:py-32">
        <div className="mx-auto grid max-w-[1280px] gap-8 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-10">
          <div>
            <Reveal>
              <p className="flex items-center gap-4 micro-label text-muted">
                <span className="h-px w-10 bg-primary" />
                Who This Course Is For
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-serif text-4xl font-light leading-[1.12] tracking-[-0.015em] text-dark md:text-[2.8rem]">
                Built for <em className="italic text-primary">you</em>, if…
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-[12px] font-semibold uppercase tracking-[0.2em] text-muted">
                All you need
              </p>
              <ul className="mt-4 space-y-2.5">
                {course.requirements.map((req) => (
                  <li key={req} className="flex items-center gap-3 text-[14.5px] text-dark/80">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {req}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="space-y-5">
            {course.audience.map((who, i) => (
              <Reveal key={who} delay={0.08 + i * 0.1}>
                <div className="group flex items-start gap-6 border border-dark/10 bg-white/60 p-8 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_28px_50px_-30px_rgba(11,11,12,0.35)]">
                  <GraduationCap className="mt-1 h-6 w-6 shrink-0 text-primary" strokeWidth={1.3} />
                  <p className="font-serif text-xl font-light leading-relaxed text-dark">
                    {who}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ————— 8 · TESTIMONIALS ————— */}
      <CourseTestimonials />

      {/* ————— 9 · INSTRUCTOR SNIPPET ————— */}
      <section className="bg-light-2 py-16 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <div className="grid gap-6 border border-dark/10 bg-light p-9 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:p-14">
              <div className="relative h-36 w-36 overflow-hidden rounded-full border border-primary/50 lg:h-40 lg:w-40">
                <Image
                  src="/images/viren-hero-portrait.jpg"
                  alt="Viren Surati — course instructor"
                  fill
                  sizes="160px"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <p className="micro-label text-primary">Your Instructor</p>
                <h3 className="mt-3 font-serif text-3xl font-medium tracking-[-0.01em] text-dark">
                  Viren Surati
                </h3>
                <p className="mt-1 font-serif text-base italic text-muted">
                  Certified NLP, Mind &amp; Memory Trainer · Public Speaking Coach
                </p>
                <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
                  Seven years of seminars, webinars and live training across
                  India — with one promise: practical techniques you can use
                  the day you learn them.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] font-semibold text-dark/75">
                  {course.instructorStats.map((stat, i) => (
                    <span key={stat} className="flex items-center gap-4">
                      {i > 0 && <span className="h-3 w-px bg-dark/20" />}
                      <span className="flex items-center gap-1.5">
                        {stat.includes("★") && (
                          <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                        )}
                        {stat}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
              <Link href="/about" className="link-draw self-start text-dark lg:self-center">
                View Full Profile
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ————— 10 · CLOSING CTA ————— */}
      <section className="grain relative overflow-hidden bg-dark py-16 text-center text-surface lg:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.08] blur-[130px]" />
        <div className="relative mx-auto max-w-2xl px-6">
          <Reveal>
            <p className="micro-label text-primary">Ready When You Are</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-[clamp(2.2rem,5vw,3.8rem)] font-light leading-[1.08] tracking-[-0.02em]">
              Ready to <em className="italic text-primary">enroll</em>?
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-surface/55">
              Message Viren on WhatsApp — he&apos;ll guide you to the official{" "}
              {course.platform} enrollment page and answer anything you want
              to know first.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href={course.enrollUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary px-9! py-4!"
              >
                <span className="btn-wipe" />
                <span className="relative">Enroll via WhatsApp</span>
                <ArrowUpRight className="btn-icon relative h-4 w-4" strokeWidth={1.75} />
              </a>
              <a href={enquireUrl} target="_blank" rel="noreferrer" className="link-draw text-surface/70 hover:text-surface">
                Ask a Question First
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
