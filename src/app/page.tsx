import type { Metadata } from "next";
import {
  ArrowRight,
  Award,
  BookOpen,
  Brain,
  Briefcase,
  CheckCircle2,
  GraduationCap,
  HeartPulse,
  Infinity as InfinityIcon,
  Languages,
  Layers,
  Lightbulb,
  Mic,
  PenLine,
  PhoneCall,
  Play,
  Sparkles,
  Sprout,
  Star,
  Users,
  Video,
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
  STATS,
  WHATSAPP_URL,
  whatsappWith,
} from "@/content/courses";

export const metadata: Metadata = {
  title: {
    absolute: "Viren Surati — Student Success Coach & Mind Memory Trainer",
  },
  description:
    "Transform Your Child's Future with Mind & Memory Training. Certified NLP Trainer, Student Success Coach helping 100,000+ students & individuals build focus, confidence, and memory power.",
};

// Custom SVG YouTube Icon
function YoutubeIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

// WhatsApp pre-formatted links for CTAs
const SCHOOL_SEMINAR_WA = whatsappWith(
  "Hello Viren Sir, I would like to book a School Seminar for Memory Improvement, Exam Confidence & Study Skills."
);
const ONE_TO_ONE_WA = whatsappWith(
  "Hello Viren Sir, I would like to schedule a One-to-One Talk for personal guidance."
);

// Real client seminar photos from folder
const GALLERY_IMAGES = [
  {
    src: "/images/WhatsApp%20Unknown%202026-07-27%20at%203.30.41%20PM/WhatsApp%20Image%202026-07-27%20at%2011.38.10%20AM%20(1).jpeg",
    title: "School Seminar on Memory & Focus",
    caption: "Engaging 500+ students in interactive brain exercises",
  },
  {
    src: "/images/WhatsApp%20Unknown%202026-07-27%20at%203.30.41%20PM/WhatsApp%20Image%202026-07-27%20at%2011.38.11%20AM.jpeg",
    title: "Exam Confidence Workshop",
    caption: "Helping students overcome exam fear with NLP state control",
  },
  {
    src: "/images/WhatsApp%20Unknown%202026-07-27%20at%203.30.41%20PM/WhatsApp%20Image%202026-07-27%20at%2011.38.13%20AM%20(1).jpeg",
    title: "Live Student Demonstration",
    caption: "Demonstrating fast recall & pegging techniques live on stage",
  },
  {
    src: "/images/WhatsApp%20Unknown%202026-07-27%20at%203.30.41%20PM/WhatsApp%20Image%202026-07-27%20at%2011.38.13%20AM%20(2).jpeg",
    title: "Parent & Educator Seminar",
    caption: "Guiding parents on supporting child's mental wellness & studies",
  },
  {
    src: "/images/WhatsApp%20Unknown%202026-07-27%20at%203.30.41%20PM/WhatsApp%20Image%202026-07-27%20at%2011.38.14%20AM.jpeg",
    title: "Interactive NLP Exercise",
    caption: "Practical hands-on training for focus and memory retention",
  },
  {
    src: "/images/WhatsApp%20Unknown%202026-07-27%20at%203.30.41%20PM/WhatsApp%20Image%202026-07-27%20at%2011.38.16%20AM.jpeg",
    title: "Large Scale School Event",
    caption: "Transforming study habits for hundreds of bright young minds",
  },
  {
    src: "/images/WhatsApp%20Unknown%202026-07-27%20at%203.30.41%20PM/WhatsApp%20Image%202026-07-27%20at%2011.38.17%20AM.jpeg",
    title: "Recognition & Felicitation",
    caption: "Honored by school management for impactful coaching",
  },
  {
    src: "/images/WhatsApp%20Unknown%202026-07-27%20at%203.30.41%20PM/WhatsApp%20Image%202026-07-27%20at%2011.38.19%20AM.jpeg",
    title: "Public Speaking & Leadership",
    caption: "Empowering students to speak with unshakeable confidence",
  },
];

// YouTube Videos provided
const YOUTUBE_VIDEOS = [
  {
    id: "i9pPtmEoSIE",
    title: "Student Memory & Concentration Techniques",
    desc: "Watch practical memory tools in action during live school seminars.",
    url: "https://youtu.be/i9pPtmEoSIE?si=Jxxy0VmBBgOJcCb3",
  },
  {
    id: "L7nZrynHbmQ",
    title: "How to Build Exam Confidence & Overcome Fear",
    desc: "NLP methods to eliminate anxiety and boost academic performance.",
    url: "https://youtu.be/L7nZrynHbmQ?si=LjUFhkGZeBBEHxnO",
  },
  {
    id: "18G9CjUj7Fc",
    title: "Mind • Memory • Success Formula",
    desc: "Key takeaways to unlock your brain's full potential for lifelong growth.",
    url: "https://youtu.be/18G9CjUj7Fc?si=MQKZkzInXk8Mn28C",
  },
];

const METHOD = [
  {
    icon: BookOpen,
    step: "01",
    title: "Learn the Science",
    text: "Understand how your mind encodes, stores, and recalls — the real NLP and memory science behind every technique.",
  },
  {
    icon: PenLine,
    step: "02",
    title: "Practice the Technique",
    text: "Structured, step-by-step exercises — pegging, visualization, and state control — until they become second nature.",
  },
  {
    icon: Mic,
    step: "03",
    title: "Apply It Live",
    text: "Use it where it matters: in exams, on stage, in interviews, and in crucial life decisions.",
  },
  {
    icon: Sparkles,
    step: "04",
    title: "Transform",
    text: "Achieve lasting confidence, sharper memory recall, and clear communication that people remember.",
  },
];

const PILLARS = [
  {
    icon: Layers,
    title: "The Real Combination",
    text: "NLP and memory science taught together — train both what you remember and how you feel while performing.",
  },
  {
    icon: Languages,
    title: "Gujarati & Hindi First",
    text: "Taught in your language with relatable examples from classrooms, offices, and Indian exam patterns.",
  },
  {
    icon: Users,
    title: "Proven at Scale",
    text: "3,000+ students trained directly and 100,000+ people reached across school seminars, webinars, and live events.",
  },
  {
    icon: InfinityIcon,
    title: "Lifetime Techniques",
    text: "Not temporary hacks — core memory and mindset skills that serve you for life.",
  },
];

export default function HomePage() {
  return (
    <div className="bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* ————— 1 · HERO SECTION (જે સૌથી પહેલાં દેખાય) ————— */}
      <section className="relative overflow-hidden bg-white pb-16 pt-32 lg:pb-28 lg:pt-40">
        {/* Subtle background glow */}
        <div className="pointer-events-none absolute -right-40 -top-20 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[130px]" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-600/5 blur-[120px]" />

        <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">

          {/* Left Column: Hero Portrait */}
          <Reveal delay={0.25} y={24} className="relative mx-auto w-full max-w-[500px] order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-[2rem] bg-white p-2 shadow-2xl shadow-slate-300/50 border border-slate-200/60">
              <Image
                src="/images/GirdHero.png"
                alt="10 Photos Album"
                width={1200}
                height={800}
                priority
                sizes="(max-width: 1024px) 88vw, 500px"
                className="w-full h-auto rounded-[1.5rem] object-cover"
              />
            </div>
          </Reveal>

          {/* Right Column: Headline & Bio */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-700">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Mind • Memory • Success</span>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <h1 className="mt-6 font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.08] tracking-tight text-slate-900">
                <span className="block font-medium text-blue-600 mb-2">Viren Surati</span>
                <span className="block text-xl md:text-2xl font-sans font-semibold tracking-wider uppercase text-slate-500 mt-1 mb-4">
                  Student Success Coach | Motivational speaker | NLP Trainer
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.35}>
              <p className="mt-6 max-w-xl text-lg md:text-xl leading-relaxed text-slate-600">
                Transform Your Child&apos;s Future with <em className="font-normal italic text-blue-600">Mind &amp; Memory Training.</em> Helping students improve their <strong className="text-slate-900 font-semibold">Memory power, Confidence, Focus, Study Skills</strong> and Performance.
              </p>
            </Reveal>

            {/* Direct CTAs */}
            <Reveal delay={0.5}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="btn btn-primary px-8 py-4 text-base font-semibold shadow-lg shadow-blue-500/20"
                >
                  <GraduationCap className="h-5 w-5 relative mr-2" />
                  <span className="relative">Book Seminar</span>
                </Link>

                <Link
                  href="/contact"
                  className="btn bg-[#8b5cf6] hover:bg-[#7c3aed] text-white px-8 py-4 text-base font-semibold shadow-lg shadow-purple-500/20 border-0 transition-all"
                >
                  <PhoneCall className="h-5 w-5 relative mr-2 text-white/80" />
                  <span className="relative">Book a call — Let's talk</span>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.65}>
              <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-slate-100 pt-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span>
                    <strong className="font-semibold text-slate-900">4.4★ Rating</strong> (Udemy &amp; Workshops)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-blue-600" />
                  <span>Certified NLP Trainer</span>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </section>
      {/* ————— 5 · FEATURED ONLINE COURSES ————— */}
      <section className="bg-slate-900 py-20 lg:py-32 relative overflow-hidden text-white border-y border-slate-800">
        <div className="pointer-events-none absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[140px]" />

        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-300 mb-8">
              <Star className="h-3.5 w-3.5 fill-blue-300" />
              <span>Featured Course</span>
            </div>
          </Reveal>

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 items-center">
            <Reveal delay={0.1}>
              <h2 className="font-serif text-3xl font-light leading-tight md:text-5xl lg:text-[3.5rem] text-slate-50">
                Train Your Brain for Success <span className="font-normal italic text-blue-400">Powerful Memory & NLP Techniques for Students</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-300 max-w-xl">
                <span className="font-semibold text-yellow-600">
                  The Ultimate Blueprint of Student Success and Memory Retention Formula.
                </span>  <br /> Join thousands of students who have transformed their learning speed, focus, and exam performance.
              </p>

              <ul className="mt-8 space-y-4 text-base text-slate-200">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-400 shrink-0" />
                  <span>Advanced Memory Techniques (Pegging, Visualization)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-400 shrink-0" />
                  <span>Overcome Exam Anxiety and Build Unshakeable Confidence</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-400 shrink-0" />
                  <span>Scientifically Proven NLP Methods for Rapid Learning</span>
                </li>
              </ul>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/courses/the-ultimate-blueprint-of-student-success-and-memory-retention-formula"
                  className="btn bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-base font-semibold border-0 shadow-lg shadow-blue-500/30"
                >
                  <span className="relative">View Course Details</span>
                  <ArrowRight className="btn-icon relative h-5 w-5 ml-2" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="relative w-full max-w-[500px] mx-auto">
              <div className="relative rounded-3xl overflow-hidden border border-slate-700 bg-slate-800 shadow-2xl flex flex-col">
                <div className="aspect-[16/9] w-full relative">
                  <Image
                    src="/images/courses/the-ultimate-blueprint-of-student-success-and-memory-retention-formula.jpg"
                    alt="Memory Course"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <div className="flex items-center gap-1 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-slate-900">
                      <Star className="h-3.5 w-3.5 fill-slate-900" />
                      4.4 Rating
                    </div>
                    <div className="rounded-full bg-slate-700/50 px-3 py-1 text-xs font-semibold text-slate-200 border border-slate-600">
                      2,653+ Students
                    </div>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-white leading-snug">
                    The Ultimate Blueprint of Student Success and Memory Retention Formula
                  </h3>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="bg-white py-16 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Reveal>
                <p className="micro-label text-blue-600">Trust &amp; Credentials</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-4 font-serif text-3xl font-light leading-tight text-slate-900 md:text-4xl lg:text-5xl">
                  Empowering Minds With <span className="font-normal italic text-blue-600">Proven Expertise</span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 text-base leading-relaxed text-slate-600">
                  Viren Surati is a renowned educational coach committed to helping students, parents, and working professionals unlock their subconscious mind power and overcome psychological limitations.
                </p>
              </Reveal>

              {/* Roles Badge Grid */}
              <Reveal delay={0.35}>
                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {[
                    "Professional Certified NLP Trainer",
                    "Student Success Coach",
                    "Mind & Memory Trainer",
                    "Motivational Speaker",
                  ].map((role) => (
                    <div
                      key={role}
                      className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3.5"
                    >
                      <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-800">
                        {role}
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Stat Counters */}
              <Reveal delay={0.45}>
                <div className="mt-10 grid grid-cols-2 gap-6 border-t border-slate-100 pt-8 sm:grid-cols-3">
                  <div>
                    <p className="font-serif text-3xl font-bold text-slate-900">
                      <CountUp to={STATS.peopleReached} suffix="+" />
                    </p>
                    <p className="mt-1 text-xs font-medium text-slate-500 uppercase tracking-wider">
                      People Reached
                    </p>
                  </div>
                  <div>
                    <p className="font-serif text-3xl font-bold text-slate-900">
                      <CountUp to={STATS.directStudents} suffix="+" />
                    </p>
                    <p className="mt-1 text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Direct Students
                    </p>
                  </div>
                  <div>
                    <p className="font-serif text-3xl font-bold text-slate-900">
                      <CountUp to={STATS.rating} decimals={1} suffix="★" />
                    </p>
                    <p className="mt-1 text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Udemy Rating
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>


            {/* About Image Frame */}
            <Reveal delay={0.3} className="relative mx-auto w-full max-w-[480px]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl">
                <Image
                  src="/images/viren-about-portrait.jpg"
                  alt="Viren Surati conducting interactive workshop"
                  fill
                  sizes="(max-width: 1024px) 88vw, 480px"
                  className="object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 rounded-2xl bg-blue-600 p-5 text-white shadow-xl max-w-xs">
                <p className="font-serif text-base italic leading-snug">
                  “Technique through transformation — giving every student the key to their memory.”
                </p>
              </div>
            </Reveal>
          </div>

          {/* Real Seminar Achievements Photo Gallery */}
          <div className="mt-24">
            <Reveal>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                <div>
                  <p className="micro-label text-blue-600">Real Experience &amp; Seminars</p>
                  <h3 className="mt-2 font-serif text-2xl md:text-3xl font-light text-slate-900">
                    Glimpses of <span className="font-normal italic text-blue-600">Live School Workshops</span>
                  </h3>
                </div>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  Actual Photographs from Client Seminars
                </p>
              </div>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {GALLERY_IMAGES.map((img, index) => (
                <Reveal key={img.src} delay={0.08 * index}>
                  <div className="group relative overflow-hidden rounded-2xl w-full aspect-[4/3] sm:h-96 sm:aspect-auto border border-slate-200 bg-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                    <Image
                      src={img.src}
                      alt={img.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-4 text-white">
                      <p className="font-serif text-sm font-semibold">{img.title}</p>
                      <p className="text-[11px] text-slate-200 mt-0.5 leading-tight">{img.caption}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-900 text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="pointer-events-none absolute -right-32 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full bg-red-600/20 border border-red-500/30 px-3.5 py-1 text-xs font-semibold text-red-400">
                  <YoutubeIcon className="h-4 w-4 text-red-500" />
                  <span>YouTube Channel Showcase</span>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-4 font-serif text-3xl font-light md:text-4xl lg:text-5xl text-white">
                  Watch Viren Surati <span className="font-normal italic text-blue-400">In Action</span>
                </h2>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <a
                href="https://youtube.com/@studentcoachviren?si=GWncu9bhFayB5uiR"
                target="_blank"
                rel="noreferrer"
                className="btn bg-red-600 hover:bg-red-700 text-white border-0 shadow-lg shadow-red-600/25"
              >
                <YoutubeIcon className="h-4 w-4 relative" />
                <span className="relative">Subscribe on YouTube</span>
                <ArrowRight className="btn-icon relative h-4 w-4" />
              </a>
            </Reveal>
          </div>

          {/* Embedded Video Grid */}
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {YOUTUBE_VIDEOS.map((vid, idx) => (
              <Reveal key={vid.id} delay={0.1 * idx}>
                <div className="rounded-2xl border border-slate-800 bg-slate-800/60 overflow-hidden shadow-lg hover:border-slate-700 transition-colors">
                  <div className="relative aspect-video w-full bg-slate-950">
                    <iframe
                      src={`https://www.youtube.com/embed/${vid.id}`}
                      title={vid.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full border-0"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-semibold text-white leading-snug">
                      {vid.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                      {vid.desc}
                    </p>
                    <a
                      href={vid.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300"
                    >
                      Watch on YouTube
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ————— 2 · THREE MAIN CTA SECTIONS ————— */}
      <section className="bg-slate-50/70 border-y border-slate-200/70 py-16 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="text-center">
            <Reveal>
              <p className="micro-label text-blue-600">Action Programs</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-serif text-3xl font-light leading-tight text-slate-900 md:text-4xl lg:text-5xl">
                Start Your Journey With <span className="font-normal italic text-blue-600">Viren Surati</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                Select your preferred way to transform memory power, confidence, and personal growth.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {/* CTA 1: Book School Seminar */}
            <Reveal delay={0.1} className="h-full">
              <div className="group flex h-full min-h-[580px] lg:min-h-[620px] flex-col justify-between rounded-[2rem] border border-slate-200 bg-white p-10 lg:p-12 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl">
                <div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <GraduationCap className="h-8 w-8" />
                  </div>
                  <h3 className="mt-8 font-serif text-2xl lg:text-3xl font-semibold text-slate-900 leading-tight">
                    🎓 Book School Seminar
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-slate-600">
                    Conduct powerful live interactive seminars for schools &amp; coaching institutes on:
                  </p>
                  <ul className="mt-6 space-y-3.5 text-base text-slate-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>Memory Improvement &amp; Fast Recall Techniques</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>Exam Confidence &amp; Fear Erasure Methods</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>Laser Focus, Habit Building &amp; Student Mindset</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>Interactive Live Brain Exercises &amp; Demos</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-10 pt-6 border-t border-slate-100">
                  <Link
                    href="/contact"
                    className="btn btn-primary w-full py-4 text-xs font-bold"
                  >
                    <span className="btn-wipe" />
                    <span className="relative">Book Seminar Now</span>
                    <ArrowRight className="btn-icon relative h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* CTA 2: Book One-to-One Talk */}
            <Reveal delay={0.2} className="h-full">
              <div className="group flex h-full min-h-[580px] lg:min-h-[620px] flex-col justify-between rounded-[2rem] border border-slate-200 bg-white p-10 lg:p-12 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl">
                <div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <HeartPulse className="h-8 w-8" />
                  </div>
                  <h3 className="mt-8 font-serif text-2xl font-semibold text-slate-900 leading-tight">
                    Unlock Your Next Level<br />
                    <span className="text-xl text-blue-600">1-on-1 Personal Counselling with Viren Surati</span>
                  </h3>

                  <div className="mt-4 space-y-4">
                    <p className="text-sm leading-relaxed text-slate-600">
                      Feeling stuck in studies, career, money, or life?<br />
                      In this private 90-minute counselling session, I'll help you identify your challenges and create a practical action plan using powerful NLP techniques.
                    </p>

                    <div>
                      <h4 className="text-sm font-semibold text-slate-900">I can help you with:</h4>
                      <ul className="mt-2 space-y-1.5 text-sm text-slate-700 font-medium">
                        <li className="flex items-center gap-2">🎓 Student Success & Study Strategy</li>
                        <li className="flex items-center gap-2">🧠 Confidence & Mindset</li>
                        <li className="flex items-center gap-2">💰 Financial Growth Mindset</li>
                        <li className="flex items-center gap-2">🎯 Goal Setting & Clarity</li>
                        <li className="flex items-center gap-2">🚀 Career Direction</li>
                        <li className="flex items-center gap-2">❤️ Personal Life Challenges</li>
                        <li className="flex items-center gap-2">🔥 Breaking Limiting Beliefs using NLP</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-slate-900">What You'll Get:</h4>
                      <ul className="mt-2 space-y-1.5 text-sm text-slate-700 font-medium">
                        <li className="flex items-center gap-2">✔️ Personalized Guidance</li>
                        <li className="flex items-center gap-2">✔️ Practical Action Plan</li>
                        <li className="flex items-center gap-2">✔️ 100% Confidential Session</li>
                        <li className="flex items-center gap-2">✔️ NLP-Based Counselling</li>
                      </ul>
                    </div>

                    <p className="text-[13px] font-bold text-blue-700">Investment: ₹4,999</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <div className="mb-4 text-center">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-red-500 mb-1">
                      Limited Slots Every Week
                    </p>
                    <p className="text-[11px] italic text-slate-500">
                      "One conversation can change your direction. Let's create your next breakthrough together."
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="btn btn-outline-dark w-full py-4 text-xs font-bold border-slate-300 hover:border-slate-800"
                  >
                    <span className="btn-wipe" />
                    <span className="relative">Book Your 1-on-1 Counselling Session</span>
                    <ArrowRight className="btn-icon relative h-4 w-4 text-blue-600" />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* CTA 3: Join Online Course */}
            <Reveal delay={0.3} className="h-full">
              <div className="group flex h-full min-h-[580px] lg:min-h-[620px] flex-col justify-between rounded-[2rem] border-2 border-blue-600/30 bg-gradient-to-b from-blue-50/60 via-white to-white p-10 lg:p-12 shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-blue-600 hover:shadow-2xl">
                <div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/30">
                    <Video className="h-8 w-8" />
                  </div>
                  <div className="mt-6 inline-block rounded-full bg-blue-600 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                    Flagship Online Course
                  </div>
                  <h3 className="mt-4 font-serif text-2xl lg:text-3xl font-semibold text-slate-900 leading-tight">
                    🎥 &quot;Student Success &amp; Memory Retention Formula&quot;
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-slate-600">
                    Join the step-by-step online video course to master memory retention, speed learning, and exam mastery.
                  </p>
                  <ul className="mt-6 space-y-3 text-sm text-slate-700">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                      <span>Lifetime Access to Video Modules</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                      <span>Practical Exercises &amp; Pegging Methods</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                      <span>Learn Anytime, Anywhere at Your Pace</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-10 pt-6 border-t border-slate-200/80">
                  <Link
                    href="/courses/the-ultimate-blueprint-of-student-success-and-memory-retention-formula"
                    className="btn btn-primary w-full py-4.5 text-xs font-bold bg-blue-600 shadow-lg shadow-blue-500/25"
                  >
                    <span className="btn-wipe" />
                    <span className="relative">Enroll Now</span>
                    <ArrowRight className="btn-icon relative h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ————— 3 · TRUST SECTION & REAL ACHIEVEMENTS ————— */}


      {/* ————— 4 · YOUTUBE VIDEO SHOWCASE ————— */}


      <section className="bg-slate-50/80 border-b border-slate-200/70 py-16 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <Reveal>
                <p className="micro-label text-blue-600">Learning Offerings</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-4 font-serif text-3xl font-light text-slate-900 md:text-4xl lg:text-5xl">
                  Courses Built for <span className="font-normal italic text-blue-600">Real Transformation</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <Link href="/courses" className="btn btn-outline-dark border-slate-300">
                <span className="btn-wipe" />
                <span className="relative">View All Courses</span>
                <ArrowRight className="btn-icon relative h-4 w-4 text-blue-600" />
              </Link>
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
        </div>
      </section>
      {/* ————— 6 · METHODOLOGY ————— */}
      <section className="bg-white py-16 lg:py-28 border-b border-slate-100">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <p className="micro-label text-blue-600">The Methodology</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 max-w-2xl font-serif text-3xl font-light text-slate-900 md:text-4xl lg:text-5xl">
              How Lasting Transformation <span className="font-normal italic text-blue-600">Happens</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {METHOD.map((item, i) => (
              <Reveal key={item.step} delay={0.1 + i * 0.1}>
                <div className="group rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 transition-all duration-300 hover:border-blue-500 hover:bg-white hover:shadow-lg">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl font-light text-blue-600/70 group-hover:text-blue-600">
                      {item.step}
                    </span>
                    <item.icon className="h-6 w-6 text-slate-400 group-hover:text-blue-600" />
                  </div>
                  <h3 className="mt-6 font-serif text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ————— GOOGLE REVIEW SECTION ————— */}
      <section className="bg-slate-50 py-16 border-y border-slate-200/60">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md border border-slate-100 mb-6">
              <Star className="h-8 w-8 text-amber-400 fill-amber-400" />
            </div>
            <h2 className="font-serif text-3xl text-slate-900">Love our Counselling?</h2>
            <p className="mt-3 text-slate-600">Your feedback helps us reach and transform more lives. Leave a review on Google and share your success story!</p>
          </Reveal>
          <Reveal delay={0.2}>
            <a
              href="https://g.page/r/your-google-review-link"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-slate-800 shadow-md border border-slate-200 hover:shadow-lg transition-all"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="h-5 w-5" />
              Leave a Google Review
            </a>
          </Reveal>
        </div>
      </section>

      {/* ————— 7 · FINAL CTA BANNER ————— */}
      <section className="bg-blue-600 text-white py-20 text-center relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[120px]" />

        <div className="relative mx-auto max-w-3xl px-6">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-200">
              Get In Touch Today
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-3xl md:text-5xl font-light leading-tight">
              Transform Your Mind &amp; Unlock <span className="font-normal italic text-blue-100">Your Full Potential</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-lg text-blue-100 text-base leading-relaxed">
              Message Viren Surati directly on WhatsApp to book a school seminar, schedule a personal talk, or enroll in courses.
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn bg-white text-blue-700 hover:bg-slate-100 px-8 py-4 text-xs font-bold shadow-xl border-0"
              >
                <span className="relative">Talk to Viren</span>
                <ArrowRight className="btn-icon relative h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="btn bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 text-xs font-bold border border-blue-400/30"
              >
                <PhoneCall className="h-4 w-4 relative" />
                <span className="relative">Call: {PHONE_DISPLAY}</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
