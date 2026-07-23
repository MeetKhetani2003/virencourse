import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Clock3,
  FileText,
  Languages,
  MonitorSmartphone,
  Sparkles,
} from "lucide-react";

/* ————————————————————————————————————————————————
   Real contact / social constants
———————————————————————————————————————— */

export const PHONE_DISPLAY = "+91 99252 07246";
export const PHONE_TEL = "tel:+919925207246";
export const WHATSAPP_URL = "https://wa.me/919925207246";

export const whatsappWith = (text: string) =>
  `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;

/* ————————————————————————————————————————————————
   Real instructor stats (scraped — do not invent)
———————————————————————————————————————— */

export const STATS = {
  peopleReached: 100000,
  directStudents: 3000,
  coursesLive: 7,
  rating: 4.3,
  reviews: 73,
  udemyStudents: 2603,
};

/* ————————————————————————————————————————————————
   Course types + data
———————————————————————————————————————— */

export type CourseCategory = "memory" | "speaking" | "nlp";

export interface Lecture {
  title: string;
  duration?: string;
  resources?: string;
}

export interface CourseModule {
  title: string;
  subtitle?: string;
  /** e.g. "22 lectures · 2:07:44" — taken from scraped data */
  meta?: string;
  lectures: Lecture[];
}

export interface CourseInclude {
  icon: LucideIcon;
  label: string;
}

export interface Course {
  slug: string;
  title: string;
  shortTitle: string;
  category: CourseCategory;
  image: {
    src: string;
    alt: string;
    isRemote?: boolean;
    isPlaceholder?: boolean;
  };
  tags: string[];
  hook: string;
  /** meta row on cards, e.g. "3 Modules · 32 Lectures · 3h 25m" */
  cardMeta: string[];
  outcomeBullets: string[];
  outcomeParagraphs: string[];
  learn: string[];
  modules: CourseModule[];
  /** True when only an outline (not the full lecture list) is available */
  curriculumIsOutline?: boolean;
  includes: CourseInclude[];
  audience: string[];
  requirements: string[];
  instructorStats: string[];
  platform: string;
  enrollUrl: string;
}

export const CATEGORIES: { id: CourseCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "memory", label: "Memory & Learning" },
  { id: "speaking", label: "Public Speaking" },
  { id: "nlp", label: "NLP & Mindset" },
];

export const COURSES: Course[] = [
  {
    slug: "the-ultimate-blueprint-of-student-success-and-memory-retention-formula",
    title: "The Ultimate Blueprint of Student Success and Memory Retention Formula",
    shortTitle: "The Ultimate Blueprint of Student Success and Memory Retention Formula",
    category: "memory",
    image: {
      src: "/images/courses/the-ultimate-blueprint-of-student-success-and-memory-retention-formula.jpg",
      alt: "Course thumbnail — The Ultimate Blueprint of Student Success and Memory Retention Formula",
      isRemote: false,
    },
    tags: ["All Levels"],
    hook: "Join this amazing course to master your skills.",
    cardMeta: ["Instructor Rating 4.3★", "2,603+ Students"],
    outcomeBullets: [
      "Improve your skills",
      "Learn new techniques",
      "Master the fundamentals"
    ],
    outcomeParagraphs: [
      "This course is designed to help you achieve your goals and improve your abilities.",
      "You will learn from an expert instructor and gain valuable insights."
    ],
    learn: [
      "Core principles and fundamentals",
      "Advanced techniques",
      "Practical applications"
    ],
    curriculumIsOutline: true,
    modules: [],
    includes: [
      { icon: Languages, label: "Taught entirely in Hindi/English" },
      { icon: Sparkles, label: "All levels — beginner friendly" },
      { icon: BadgeCheck, label: "Certificate of completion" },
      { icon: MonitorSmartphone, label: "Learn at your own pace, on any device" }
    ],
    audience: [
      "Anyone who wants to improve in this area",
      "Students and professionals"
    ],
    requirements: ["Internet connection", "A willingness to learn"],
    instructorStats: [
      "4.3 Instructor Rating",
      "73 Reviews",
      "2,603 Students",
      "7 Courses"
    ],
    platform: "GuniGuru",
    enrollUrl: whatsappWith(
      "Hi Viren, I'm interested in enrolling for 'The Ultimate Blueprint of Student Success and Memory Retention Formula'. Please guide me."
    )
  },
  {
    slug: "untold-secrets",
    title: "Unlocking the Untold Secrets of Achieving Goals: अनकहे रहस्य",
    shortTitle: "Unlocking the Untold Secrets of Achieving Goals",
    category: "nlp",
    image: {
      src: "/images/courses/untold-secrets.jpg",
      alt: "Course thumbnail — Unlocking the Untold Secrets of Achieving Goals: अनकहे रहस्य",
      isRemote: false,
    },
    tags: ["All Levels"],
    hook: "Join this amazing course to master your skills.",
    cardMeta: ["Instructor Rating 4.3★", "2,603+ Students"],
    outcomeBullets: [
      "Improve your skills",
      "Learn new techniques",
      "Master the fundamentals"
    ],
    outcomeParagraphs: [
      "This course is designed to help you achieve your goals and improve your abilities.",
      "You will learn from an expert instructor and gain valuable insights."
    ],
    learn: [
      "Core principles and fundamentals",
      "Advanced techniques",
      "Practical applications"
    ],
    curriculumIsOutline: true,
    modules: [],
    includes: [
      { icon: Languages, label: "Taught entirely in Hindi/English" },
      { icon: Sparkles, label: "All levels — beginner friendly" },
      { icon: BadgeCheck, label: "Certificate of completion" },
      { icon: MonitorSmartphone, label: "Learn at your own pace, on any device" }
    ],
    audience: [
      "Anyone who wants to improve in this area",
      "Students and professionals"
    ],
    requirements: ["Internet connection", "A willingness to learn"],
    instructorStats: [
      "4.3 Instructor Rating",
      "73 Reviews",
      "2,603 Students",
      "7 Courses"
    ],
    platform: "Udemy",
    enrollUrl: whatsappWith(
      "Hi Viren, I'm interested in enrolling for 'Unlocking the Untold Secrets of Achieving Goals: अनकहे रहस्य'. Please guide me."
    )
  },
  {
    slug: "overcoming-exam-anxiety",
    title: "Overcoming Exam Anxiety & Building Rock- Solid Confidence",
    shortTitle: "Overcoming Exam Anxiety & Building Rock- Solid Confidence",
    category: "nlp",
    image: {
      src: "/images/courses/overcoming-exam-anxiety.jpg",
      alt: "Course thumbnail — Overcoming Exam Anxiety & Building Rock- Solid Confidence",
      isRemote: false,
    },
    tags: ["All Levels"],
    hook: "Join this amazing course to master your skills.",
    cardMeta: ["Instructor Rating 4.3★", "2,603+ Students"],
    outcomeBullets: [
      "Improve your skills",
      "Learn new techniques",
      "Master the fundamentals"
    ],
    outcomeParagraphs: [
      "This course is designed to help you achieve your goals and improve your abilities.",
      "You will learn from an expert instructor and gain valuable insights."
    ],
    learn: [
      "Core principles and fundamentals",
      "Advanced techniques",
      "Practical applications"
    ],
    curriculumIsOutline: true,
    modules: [],
    includes: [
      { icon: Languages, label: "Taught entirely in Hindi/English" },
      { icon: Sparkles, label: "All levels — beginner friendly" },
      { icon: BadgeCheck, label: "Certificate of completion" },
      { icon: MonitorSmartphone, label: "Learn at your own pace, on any device" }
    ],
    audience: [
      "Anyone who wants to improve in this area",
      "Students and professionals"
    ],
    requirements: ["Internet connection", "A willingness to learn"],
    instructorStats: [
      "4.3 Instructor Rating",
      "73 Reviews",
      "2,603 Students",
      "7 Courses"
    ],
    platform: "Udemy",
    enrollUrl: whatsappWith(
      "Hi Viren, I'm interested in enrolling for 'Overcoming Exam Anxiety & Building Rock- Solid Confidence'. Please guide me."
    )
  },
  {
    slug: "transforming-weaknesses",
    title: "Transforming Weaknesses into Strengths : A Proven Strategy",
    shortTitle: "Transforming Weaknesses into Strengths ",
    category: "nlp",
    image: {
      src: "/images/courses/transforming-weaknesses.jpg",
      alt: "Course thumbnail — Transforming Weaknesses into Strengths : A Proven Strategy",
      isRemote: false,
    },
    tags: ["All Levels"],
    hook: "Join this amazing course to master your skills.",
    cardMeta: ["Instructor Rating 4.3★", "2,603+ Students"],
    outcomeBullets: [
      "Improve your skills",
      "Learn new techniques",
      "Master the fundamentals"
    ],
    outcomeParagraphs: [
      "This course is designed to help you achieve your goals and improve your abilities.",
      "You will learn from an expert instructor and gain valuable insights."
    ],
    learn: [
      "Core principles and fundamentals",
      "Advanced techniques",
      "Practical applications"
    ],
    curriculumIsOutline: true,
    modules: [],
    includes: [
      { icon: Languages, label: "Taught entirely in Hindi/English" },
      { icon: Sparkles, label: "All levels — beginner friendly" },
      { icon: BadgeCheck, label: "Certificate of completion" },
      { icon: MonitorSmartphone, label: "Learn at your own pace, on any device" }
    ],
    audience: [
      "Anyone who wants to improve in this area",
      "Students and professionals"
    ],
    requirements: ["Internet connection", "A willingness to learn"],
    instructorStats: [
      "4.3 Instructor Rating",
      "73 Reviews",
      "2,603 Students",
      "7 Courses"
    ],
    platform: "Udemy",
    enrollUrl: whatsappWith(
      "Hi Viren, I'm interested in enrolling for 'Transforming Weaknesses into Strengths : A Proven Strategy'. Please guide me."
    )
  },
  {
    slug: "achieving-success",
    title: "Achieving Success : \"The Art of Outcome Mastery\" (Hindi)",
    shortTitle: "Achieving Success ",
    category: "nlp",
    image: {
      src: "/images/courses/achieving-success.jpg",
      alt: "Course thumbnail — Achieving Success : \"The Art of Outcome Mastery\" (Hindi)",
      isRemote: false,
    },
    tags: ["All Levels"],
    hook: "Join this amazing course to master your skills.",
    cardMeta: ["Instructor Rating 4.3★", "2,603+ Students"],
    outcomeBullets: [
      "Improve your skills",
      "Learn new techniques",
      "Master the fundamentals"
    ],
    outcomeParagraphs: [
      "This course is designed to help you achieve your goals and improve your abilities.",
      "You will learn from an expert instructor and gain valuable insights."
    ],
    learn: [
      "Core principles and fundamentals",
      "Advanced techniques",
      "Practical applications"
    ],
    curriculumIsOutline: true,
    modules: [],
    includes: [
      { icon: Languages, label: "Taught entirely in Hindi/English" },
      { icon: Sparkles, label: "All levels — beginner friendly" },
      { icon: BadgeCheck, label: "Certificate of completion" },
      { icon: MonitorSmartphone, label: "Learn at your own pace, on any device" }
    ],
    audience: [
      "Anyone who wants to improve in this area",
      "Students and professionals"
    ],
    requirements: ["Internet connection", "A willingness to learn"],
    instructorStats: [
      "4.3 Instructor Rating",
      "73 Reviews",
      "2,603 Students",
      "7 Courses"
    ],
    platform: "Udemy",
    enrollUrl: whatsappWith(
      "Hi Viren, I'm interested in enrolling for 'Achieving Success : \"The Art of Outcome Mastery\" (Hindi)'. Please guide me."
    )
  },
  {
    slug: "unlock-your-memory-power",
    title: "Unlock Your Memory Power :Techniques for Students Success",
    shortTitle: "Unlock Your Memory Power ",
    category: "memory",
    image: {
      src: "/images/courses/unlock-your-memory-power.jpg",
      alt: "Course thumbnail — Unlock Your Memory Power :Techniques for Students Success",
      isRemote: false,
    },
    tags: ["All Levels"],
    hook: "Join this amazing course to master your skills.",
    cardMeta: ["Instructor Rating 4.3★", "2,603+ Students"],
    outcomeBullets: [
      "Improve your skills",
      "Learn new techniques",
      "Master the fundamentals"
    ],
    outcomeParagraphs: [
      "This course is designed to help you achieve your goals and improve your abilities.",
      "You will learn from an expert instructor and gain valuable insights."
    ],
    learn: [
      "Core principles and fundamentals",
      "Advanced techniques",
      "Practical applications"
    ],
    curriculumIsOutline: true,
    modules: [],
    includes: [
      { icon: Languages, label: "Taught entirely in Hindi/English" },
      { icon: Sparkles, label: "All levels — beginner friendly" },
      { icon: BadgeCheck, label: "Certificate of completion" },
      { icon: MonitorSmartphone, label: "Learn at your own pace, on any device" }
    ],
    audience: [
      "Anyone who wants to improve in this area",
      "Students and professionals"
    ],
    requirements: ["Internet connection", "A willingness to learn"],
    instructorStats: [
      "4.3 Instructor Rating",
      "73 Reviews",
      "2,603 Students",
      "7 Courses"
    ],
    platform: "Udemy",
    enrollUrl: whatsappWith(
      "Hi Viren, I'm interested in enrolling for 'Unlock Your Memory Power :Techniques for Students Success'. Please guide me."
    )
  },
  {
    slug: "memorize-periodic-table",
    title: "Memorize the Periodic Table in 2 Hours :A Step by Step Guide",
    shortTitle: "Memorize the Periodic Table in 2 Hours ",
    category: "memory",
    image: {
      src: "/images/courses/memorize-periodic-table.jpg",
      alt: "Course thumbnail — Memorize the Periodic Table in 2 Hours :A Step by Step Guide",
      isRemote: false,
    },
    tags: ["All Levels"],
    hook: "Join this amazing course to master your skills.",
    cardMeta: ["Instructor Rating 4.3★", "2,603+ Students"],
    outcomeBullets: [
      "Improve your skills",
      "Learn new techniques",
      "Master the fundamentals"
    ],
    outcomeParagraphs: [
      "This course is designed to help you achieve your goals and improve your abilities.",
      "You will learn from an expert instructor and gain valuable insights."
    ],
    learn: [
      "Core principles and fundamentals",
      "Advanced techniques",
      "Practical applications"
    ],
    curriculumIsOutline: true,
    modules: [],
    includes: [
      { icon: Languages, label: "Taught entirely in Hindi/English" },
      { icon: Sparkles, label: "All levels — beginner friendly" },
      { icon: BadgeCheck, label: "Certificate of completion" },
      { icon: MonitorSmartphone, label: "Learn at your own pace, on any device" }
    ],
    audience: [
      "Anyone who wants to improve in this area",
      "Students and professionals"
    ],
    requirements: ["Internet connection", "A willingness to learn"],
    instructorStats: [
      "4.3 Instructor Rating",
      "73 Reviews",
      "2,603 Students",
      "7 Courses"
    ],
    platform: "Udemy",
    enrollUrl: whatsappWith(
      "Hi Viren, I'm interested in enrolling for 'Memorize the Periodic Table in 2 Hours :A Step by Step Guide'. Please guide me."
    )
  },
  {
    slug: "confident-public-speaker",
    title: "Becoming a Confident & Compelling Public Speaker : (Hindi)",
    shortTitle: "Becoming a Confident & Compelling Public Speaker ",
    category: "speaking",
    image: {
      src: "/images/courses/confident-public-speaker.jpg",
      alt: "Course thumbnail — Becoming a Confident & Compelling Public Speaker : (Hindi)",
      isRemote: false,
    },
    tags: ["All Levels"],
    hook: "Join this amazing course to master your skills.",
    cardMeta: ["Instructor Rating 4.3★", "2,603+ Students"],
    outcomeBullets: [
      "Improve your skills",
      "Learn new techniques",
      "Master the fundamentals"
    ],
    outcomeParagraphs: [
      "This course is designed to help you achieve your goals and improve your abilities.",
      "You will learn from an expert instructor and gain valuable insights."
    ],
    learn: [
      "Core principles and fundamentals",
      "Advanced techniques",
      "Practical applications"
    ],
    curriculumIsOutline: true,
    modules: [],
    includes: [
      { icon: Languages, label: "Taught entirely in Hindi/English" },
      { icon: Sparkles, label: "All levels — beginner friendly" },
      { icon: BadgeCheck, label: "Certificate of completion" },
      { icon: MonitorSmartphone, label: "Learn at your own pace, on any device" }
    ],
    audience: [
      "Anyone who wants to improve in this area",
      "Students and professionals"
    ],
    requirements: ["Internet connection", "A willingness to learn"],
    instructorStats: [
      "4.3 Instructor Rating",
      "73 Reviews",
      "2,603 Students",
      "7 Courses"
    ],
    platform: "Udemy",
    enrollUrl: whatsappWith(
      "Hi Viren, I'm interested in enrolling for 'Becoming a Confident & Compelling Public Speaker : (Hindi)'. Please guide me."
    )
  },
  {
    slug: "mastering-public-speaking",
    title: "Mastering Public Speaking : The 7 Step Formula (Hindi)",
    shortTitle: "Mastering Public Speaking ",
    category: "speaking",
    image: {
      src: "/images/courses/mastering-public-speaking.jpg",
      alt: "Course thumbnail — Mastering Public Speaking : The 7 Step Formula (Hindi)",
      isRemote: false,
    },
    tags: ["All Levels"],
    hook: "Join this amazing course to master your skills.",
    cardMeta: ["Instructor Rating 4.3★", "2,603+ Students"],
    outcomeBullets: [
      "Improve your skills",
      "Learn new techniques",
      "Master the fundamentals"
    ],
    outcomeParagraphs: [
      "This course is designed to help you achieve your goals and improve your abilities.",
      "You will learn from an expert instructor and gain valuable insights."
    ],
    learn: [
      "Core principles and fundamentals",
      "Advanced techniques",
      "Practical applications"
    ],
    curriculumIsOutline: true,
    modules: [],
    includes: [
      { icon: Languages, label: "Taught entirely in Hindi/English" },
      { icon: Sparkles, label: "All levels — beginner friendly" },
      { icon: BadgeCheck, label: "Certificate of completion" },
      { icon: MonitorSmartphone, label: "Learn at your own pace, on any device" }
    ],
    audience: [
      "Anyone who wants to improve in this area",
      "Students and professionals"
    ],
    requirements: ["Internet connection", "A willingness to learn"],
    instructorStats: [
      "4.3 Instructor Rating",
      "73 Reviews",
      "2,603 Students",
      "7 Courses"
    ],
    platform: "Udemy",
    enrollUrl: whatsappWith(
      "Hi Viren, I'm interested in enrolling for 'Mastering Public Speaking : The 7 Step Formula (Hindi)'. Please guide me."
    )
  },
];

export const getCourse = (slug: string) =>
  COURSES.find((c) => c.slug === slug);
