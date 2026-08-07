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
  directStudents: 2653,
  coursesLive: 7,
  rating: 4.4,
  reviews: 79,
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


export interface CourseTestimonial {
  name: string;
  avatarUrl?: string;
  rating: number;
  timeAgo: string;
  content: string;
}

export interface Course {
  price?: string;
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
  buttonName: string;
    testimonials: [
      {
        name: "Ankit",
        rating: 4,
        timeAgo: "1 year ago",
        content: "good"
      },
      {
        name: "Udemy User",
        rating: 5,
        timeAgo: "1 year ago",
        content: "Good Session."
      },
      {
        name: "Sundeep",
        rating: 5,
        timeAgo: "1 year ago",
        content: "good"
      },
      {
        name: "Lalit",
        rating: 4,
        timeAgo: "2 years ago",
        content: "Easy to understand the course in Local language"
      }
    ],
  testimonials: CourseTestimonial[];
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
    price: "999₹",
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
    cardMeta: ["Instructor Rating 4.4★", "2,603+ Students"],
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
      "How our mind learn anything very easily",
      "How to Memorize 10x faster",
      "Remember long answer",
      "Memorize Scientific words",
      "memorize Periodic Table easy way",
      "memorize tables",
      "Remember war & Years",
      "Memorize MCQ",
      "Memorize Properties",
      "Memorizing Map",
      "Revision & Break Technique",
      "Remember Cubes",
      "Remember Invention & Inventors",
      "Memorize Books & Authors",
      "How our Mind create results in our life",
      "Save yourselves for Negative Comments",
      "Develop Rock-solid Confidence for Exam",
      "Erase past painful memories",
      "Develop Positive State of Mind",
      "Create better Self Image",
      "Repair Your Past & Prepare your bright Future",
      "Mute Unwanted Internal Sounds",
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
      "4.4 Instructor Rating",
      "73 Reviews",
      "2,603 Students",
      "7 Courses"
    ],
    platform: "GuniGuru",
    buttonName: "Enroll Now",
    testimonials: [
      {
        name: "Ankit",
        rating: 4,
        timeAgo: "1 year ago",
        content: "good"
      },
      {
        name: "Udemy User",
        rating: 5,
        timeAgo: "1 year ago",
        content: "Good Session."
      },
      {
        name: "Sundeep",
        rating: 5,
        timeAgo: "1 year ago",
        content: "good"
      },
      {
        name: "Lalit",
        rating: 4,
        timeAgo: "2 years ago",
        content: "Easy to understand the course in Local language"
      }
    ],
    enrollUrl: "https://guniguru.com/courses/the-ultimate-blueprint-of-student-success-and-memory-retention-formula?ref=viren",
  },
  {
    slug: "untold-secrets",
    price: "FREE",
    title: "Unlocking the Untold Secrets of Achieving Goals: अनकहे रहस्य",
    shortTitle: "Unlocking the Untold Secrets of Achieving Goals",
    category: "nlp",
    image: {
      src: "/images/courses/untold-secrets.png",
      alt: "Course thumbnail — Unlocking the Untold Secrets of Achieving Goals: अनकहे रहस्य",
      isRemote: false,
    },
    tags: ["All Levels"],
    hook: "इस कोर्स में आपको वह अनकहे रहस्य जानने और सीखने मिलेंगे जिससे आप अपने गोल्स को हासिल कर सकते हो और अपने सबकॉन्शियस माइं",
    cardMeta: ["Instructor Rating 4.6★", "227+ Students"],
    outcomeBullets: [
      "program your mind for achieving goals",
      "mindful meditations for more action",
      "find your pain & gain for emotionally Trigger",
      "follow the strategies of using the highly successful people",
      "NLP based exercise",
      "become more confident, motivated, energetic"
    ],
    outcomeParagraphs: [
      "इस कोर्स में आपको अपने गोल्स हासिल करने के लिए वह अनटोल्ड secret जानने मिलेंगे जिससे आप अपने सबकॉन्शियस माइंड को प्रोग्राम कर सकते हो और अपने गोल स्कोर हासिल करने के लिए तैयार कर सकते हो।",
      "आपको इस कोर्स में जानने मिलेंगे सीक्रेट एंड आपको इस कोर्स में वह बहुत ही उपयोगी होने वाले मेडिटेशन भी सीखने को मिलेंगे जिससे आप बहुत ही अच्छी तरह से और आसानी से उपयोग में ला सकते हो।",
      "आप कभी भी किसी भी जगह पर इसका यूज कर सकते हो और आप बस 10 मिनट में इससे करते ही अपनेआपको goals लिए तैयार कर पाओगे।",
      "इस कोर्स में दिए गए मैडिटेशन को करने के लिए आपको किसी शांत जगह पर बैठकर आराम से अपने ईयर फोन का यूज करते हुए शांत होकर के अपने मोबाइल से इसे सिर्फ सुनना है और जो भी कमांड आपको मिल रहे हैं बस उसे कल्पना करते जाना है।",
      "हमारा माइंड जो है वह कल्पना की भाषा समझता है और इसलिए हमें इससे इमैजिनेशन के द्वारा अपने गोल स्कोर दिखाते हुए अपने सबकॉन्शियस माइंड को तैयार करना पड़ता है।",
      "जिस चीज को हमारा माइंड देख नहीं सकता वह उसे हासिल भी नहीं कर सकता है हमारा माइंड इमैजिनेशन एंड विजुलाइजेशन को बहुत ही अच्छी तरह से समझता है इसीलिए कई सारे लोग अपने आप को मेडिटेशन करने के लिए समय निकालते हैं।",
      "तो आप भी तैयार रहिए क्योंकि यह पावरफुल मेडिटेशन आपके लिए बहुत ही ज्यादा उपयोगी होंगे और आपको वह खुशहाली लाने में बहुत ही महत्वपूर्ण योगदान देंगे।"
    ],
    learn: [
      "Untold Secrets For How to Achieve your Goals",
      "That Secrets never teach your teachers in your school",
      "How to connect with your subconscious mind",
      "How to change your inner world, miracle",
      "इस कोर्स में आपको वह अनकहे रहस्य जानने और सीखने मिलेंगे जिससे आप अपने गोल्स को हासिल कर सकते हो और अपने सबकॉन्शियस माइंड को तैयार कर सकते हो",
      "change your life with achieve goals"
    ],
    curriculumIsOutline: false,
    modules: [
      {
        title: "Section 1",
        meta: "7 lectures · 42m",
        lectures: [
          { title: "Untold Secrets -1", duration: "3:55" },
          { title: "Untold Secret-2", duration: "5:41" },
          { title: "Untold Secrets -3", duration: "4:57" },
          { title: "Instructions", duration: "1:17" },
          { title: "Why \" V\" Road exercise", duration: "10:15" },
          { title: "Ultimate \" Other You\" Exercise", duration: "9:04" },
          { title: "Mindful meditation with \"Role Model\" Exercise", duration: "7:28" }
        ]
      }
    ],
    includes: [
      { icon: Languages, label: "Taught entirely in Hindi" },
      { icon: Sparkles, label: "All levels — beginner friendly" },
      { icon: BadgeCheck, label: "Certificate of completion" },
      { icon: MonitorSmartphone, label: "Access on mobile and TV" }
    ],
    audience: [
      "For everyone who are dreamer, goal achiever",
      "Students, business person, leaders, sales person"
    ],
    requirements: ["internet, earphone, mobile"],
    instructorStats: [
      "4.6 Instructor Rating",
      "5 Reviews",
      "227 Students",
      "7 Courses"
    ],
    buttonName: "Enroll / Enquire on WhatsApp",
    testimonials: [
      {
        name: "Ankit",
        rating: 4,
        timeAgo: "1 year ago",
        content: "good"
      },
      {
        name: "Udemy User",
        rating: 5,
        timeAgo: "1 year ago",
        content: "Good Session."
      },
      {
        name: "Sundeep",
        rating: 5,
        timeAgo: "1 year ago",
        content: "good"
      },
      {
        name: "Lalit",
        rating: 4,
        timeAgo: "2 years ago",
        content: "Easy to understand the course in Local language"
      }
    ],
    platform: "Udemy",
    enrollUrl: whatsappWith(
      "Hi Viren, I'm interested in enrolling for 'Unlocking the Untold Secrets of Achieving Goals: अनकहे रहस्य'. Please guide me."
    )
  },
  {
    slug: "overcoming-exam-anxiety",
    price: "100₹",
    title: "Overcoming Exam Anxiety & Building Rock- Solid Confidence",
    shortTitle: "Overcoming Exam Anxiety & Building Rock- Solid Confidence",
    category: "nlp",
    image: {
      src: "/images/courses/overcoming-exam-anxiety.png",
      alt: "Course thumbnail — Overcoming Exam Anxiety & Building Rock- Solid Confidence",
      isRemote: false,
    },
    tags: ["All Levels"],
    hook: "Exam को लेकर के अपना Confidence बढ़ाएं और Fear या Tension कैसे दूर करना आप इस कोर्स में सीखेंगे : A Practical Guide",
    cardMeta: ["Instructor Rating 4.0★", "188+ Students"],
    outcomeBullets: [
      "इस कोर्स में आप सीखेंगे कि किस तरह से Exam का डर दूर करके Rock-solid Confidence Develop कर सकते हैं",
      "अपने Study को और ज्यादा Enjoy कर सकते हैं",
      "Exam का तनाव Students इस तरह से Handel करना है यह सीख जाएंगे"
    ],
    outcomeParagraphs: [
      "इस कोर्स में आप सीखेंगे कि किस तरह से Exam का डर दूर करके Rock-solid Confidence Develop कर सकते हैं और अपने Study को और ज्यादा Enjoy कर सकते हैं Exam का तनाव Students इस तरह से Handel  करना है यह सीख जाएंगे और अपना अपनी Exam को Enjoy कर पाएंगे.",
      "बहुत सारे स्टूडेंट को हमने देखा है कि जब उनकी एग्जाम आने वाली होती है तब उनका State खराब हो जाता है, उनकी तबीयत खराब हो जाती है, उन को फीवर हो जाता है, वह Stress में चले जाते हैं और इसकी वजह से उनका Performance बिगड़ जाता है",
      "इसलिए उन्होंने पूरे साल बहुत मेहनत की होती है फिर भी जैसा चाहे वैसा परफॉर्मेंस नहीं दे पाते हैं और उसकी वजह है Exam Phobia",
      "बच्चे एग्जाम में Better Perform करना चाहते हैं तो उनको अपने Resourceful State में रहना पड़ेगा यानी कि पॉजिटिव स्टेट में रहना पड़ेगा और जब वह पॉजिटिव स्टेट में होंगे तभी उनका सारा टैलेंट उनकी स्किल उनकी मेहनत रंग लाएगी और जैसा वह चाहते हैं वैसा Result उनको मिल पाएगा",
      "इसके लिए सिर्फ और सिर्फ उनको किस तरह से इस एग्जाम के Fear में से बाहर निकलना और कॉन्फिडेंस को डेवलप करना यह कोई सिखा दे तो वह बहुत ही बेहतर प्रदर्शन कर सकते हैं",
      "इस कोर्स में आपको वह बेहतरीन तकनीकी सिखाई जाएगी जिससे आप Exam Phobia को दूर करके Rocksolid Confidence Build कर सकते हो",
      "Enjoy Your Exam"
    ],
    learn: [
      "Train Your Subconscious Mind for Exam With Rock-Solid Confidence",
      "आपका State Of Mind इस तरह से हो जाएगा कि Exam hall में भूल जाने का Issue Solve हो जाएगा",
      "अपने आप को Exam के लिए Ready कर पाएंगे",
      "Increase Your Self Esteem & Rock-solid Confidence",
      "Create More Interest in Your Study",
      "Change Your Mindset & Change Your Result"
    ],
    curriculumIsOutline: false,
    modules: [
      {
        title: "Section 1",
        meta: "5 lectures · 44m",
        lectures: [
          { title: "Complete Your Exam Preparation", duration: "2:19" },
          { title: "How to Take Care of Yourself", duration: "2:07" },
          { title: "Change Your \"STATE\" in one Minute", duration: "15:46" },
          { title: "Develop Rock-Solid Confidence For Exam", duration: "14:51" },
          { title: "Self Suggestions for Students", duration: "9:31" }
        ]
      }
    ],
    includes: [
      { icon: Languages, label: "Taught entirely in Hindi" },
      { icon: Sparkles, label: "All levels — beginner friendly" },
      { icon: BadgeCheck, label: "Certificate of completion" },
      { icon: MonitorSmartphone, label: "Access on mobile and TV" }
    ],
    audience: [
      "Teachers, Students, Parents, Examiner"
    ],
    requirements: ["Laptop, Mobile, ear phone, Internet"],
    instructorStats: [
      "4.0 Instructor Rating",
      "1 Review",
      "188 Students",
      "7 Courses"
    ],
    platform: "Udemy",
    buttonName: "Enroll / Enquire on WhatsApp",
    testimonials: [
      {
        name: "Ankit",
        rating: 4,
        timeAgo: "1 year ago",
        content: "good"
      },
      {
        name: "Udemy User",
        rating: 5,
        timeAgo: "1 year ago",
        content: "Good Session."
      },
      {
        name: "Sundeep",
        rating: 5,
        timeAgo: "1 year ago",
        content: "good"
      },
      {
        name: "Lalit",
        rating: 4,
        timeAgo: "2 years ago",
        content: "Easy to understand the course in Local language"
      }
    ],
    enrollUrl: whatsappWith(
      "Hi Viren, I'm interested in enrolling for 'Overcoming Exam Anxiety & Building Rock- Solid Confidence'. Please guide me."
    )
  },
  {
    slug: "transforming-weaknesses",
    price: "100₹",
    title: "Transforming Weaknesses into Strengths : A Proven Strategy",
    shortTitle: "Transforming Weaknesses into Strengths ",
    category: "nlp",
    image: {
      src: "/images/courses/transforming-weaknesses.png",
      alt: "Course thumbnail — Transforming Weaknesses into Strengths : A Proven Strategy",
      isRemote: false,
    },
    tags: ["All Levels"],
    hook: "Blueprint of how to convert your weaknesses into your strengthहमारी जो कमजोरियां होती है वही हमारी ताकत बन जाती है कैसे?",
    cardMeta: ["Instructor Rating 4.6★", "390+ Students"],
    outcomeBullets: [
      "इस कोर्स में हम सीखेंगे कि किस तरह से हम अपने weaknesses से strength बदल सकते हैं",
      "अपनी कमजोरियों को अपनी ताकत में बदल पाएंगे",
      "खुद को Transform करने के लिए कुछ Effective Ideas मिल जाते हैं"
    ],
    outcomeParagraphs: [
      "इस कोर्स में हम सीखेंगे कि किस तरह से हम अपने weaknesses से   strength बदल सकते हैं",
      "कई बार ऐसा होता है की बहुत सारी कमजोरियां जब हमारे पास होती है तो हमें नहीं पता चलता कि हम किस तरह से इसमें से बाहर निकले, हमारे पास कोई रास्ता नहीं मिलता है तो उस टाइम पर हम निराश हो जाते हैं और ऐसा मान लेते हैं कि यह मेरे बस की बात नहीं है",
      "मैं आपको कहना चाहूंगा कि दरअसल हमारी जो कमजोरियां होती है वही हमारी ताकत बन जाती है और यह कैसे बन जाती है अगर आप सीखना चाहते हो तो मेरा यह कोर्स आपके लिए बहुत ही ज्यादा महत्वपूर्ण साबित हो सकता है",
      "आप इस कोर्स के माध्यम से अपनी कमजोरियों को अपनी ताकत में बदल पाएंगे यह मेरा दवा है और इस कोर्स में जो मॉडल में आपके साथ शेयर करने जा रहा हूं इससे अमल में लाने के बाद आप झूम उठेंगे कि यह क्या हो रहा है अब तक जिस कमजोरी की वजह से मैं रुका हुआ था यह तो मेरी ताकत बन गई है",
      "ऐसा ही होता है जब आपको कुछ ऐसे मॉडल मिल जाते हैं जिसमें से आपको खुद को Transform करने के लिए कुछ Effective Ideas मिल जाते हैं तो आप इस कोर्स में दिए गए मॉडल का अनुसरण करें और हमेशा जब भी आपके पास कोई भी कमजोरी आ जाए तो खुश हो जाएगा क्योंकि वह आपकी ताकत बनने जा रही है"
    ],
    learn: [
      "जब हम अपनी लाइफ में आगे बढ़ते हैं तो बहुत सारे हर्डल हमें मिलते हैं जिसे हम कमजोरी कहते हैं क्या वह हमें रोकने के लिए आती है या आगे बढ़ाने के लिए आती है",
      "अगर हमारे पास बहुत सारी कमजोरियां है तो हमें खुश होना चाहिए या फिर दुखी होना चाहिए सोचिए ?",
      "इस कोर्स में हम सीखेंगे कि किस तरह से हम अपने Weaknesses को दूर करके उसको Strength कैसे कन्वर्ट करें",
      "अपने मुश्किलों को हटाते रहे, अपने लक्ष्य को हासिल करते रहे, अपनी Strength को बढ़ाते रहें, और आगे बढ़ते रहे बस यही तो है सही मायनों में लाइफ की सक्सेस"
    ],
    curriculumIsOutline: false,
    buttonName: "Enroll / Enquire on WhatsApp",
    testimonials: [
      {
        name: "Ankit",
        rating: 4,
        timeAgo: "1 year ago",
        content: "good"
      },
      {
        name: "Udemy User",
        rating: 5,
        timeAgo: "1 year ago",
        content: "Good Session."
      },
      {
        name: "Sundeep",
        rating: 5,
        timeAgo: "1 year ago",
        content: "good"
      },
      {
        name: "Lalit",
        rating: 4,
        timeAgo: "2 years ago",
        content: "Easy to understand the course in Local language"
      }
    ],
    modules: [
      {
        title: "Section 1",
        meta: "5 lectures · 30m",
        lectures: [
          { title: "Analysis Yourself", duration: "1:58" },
          { title: "Personal Transformation Model", duration: "9:56" },
          { title: "Find The Opportunities Of Our Life", duration: "4:10" },
          { title: "How to Celebrate Life", duration: "4:57" },
          { title: "Rewire Your Subconscious Mind For Success", duration: "9:03" }
        ]
      }
    ],
    includes: [
      { icon: Languages, label: "Taught entirely in Hindi" },
      { icon: Sparkles, label: "All levels — beginner friendly" },
      { icon: BadgeCheck, label: "Certificate of completion" },
      { icon: MonitorSmartphone, label: "Access on mobile and TV" }
    ],
    audience: [
      "Business person, Professionals, Working Women's, Teachers, Parents, Sales Executives"
    ],
    requirements: ["Laptop/Mobile, internet, Earphone"],
    instructorStats: [
      "4.6 Instructor Rating",
      "12 Reviews",
      "390 Students",
      "7 Courses"
    ],
    platform: "Udemy",
    enrollUrl: whatsappWith(
      "Hi Viren, I'm interested in enrolling for 'Transforming Weaknesses into Strengths : A Proven Strategy'. Please guide me."
    )
  },
  {
    slug: "achieving-success",
    price: "100₹",
    title: "Achieving Success : \"The Art of Outcome Mastery\" (Hindi)",
    shortTitle: "Achieving Success ",
    category: "nlp",
    buttonName: "Enroll / Enquire on WhatsApp",
    testimonials: [
      {
        name: "Ankit",
        rating: 4,
        timeAgo: "1 year ago",
        content: "good"
      },
      {
        name: "Udemy User",
        rating: 5,
        timeAgo: "1 year ago",
        content: "Good Session."
      },
      {
        name: "Sundeep",
        rating: 5,
        timeAgo: "1 year ago",
        content: "good"
      },
      {
        name: "Lalit",
        rating: 4,
        timeAgo: "2 years ago",
        content: "Easy to understand the course in Local language"
      }
    ],
    image: {
      src: "/images/courses/achieving-success.png",
      alt: "Course thumbnail — Achieving Success : \"The Art of Outcome Mastery\" (Hindi)",
      isRemote: false,
    },
    tags: ["All Levels"],
    hook: "अपने लक्ष्य को हासिल करने के स्टेप बाय स्टेप फॉर्मूला। In this Course learn what stops you & How to achieve your goals",
    cardMeta: ["Instructor Rating 4.1★", "141+ Students"],
    outcomeBullets: [
      "How to Achieve Any Relevant Goals",
      "What is the power Formula",
      "9 Well Formed Conditions",
      "How to Program your subconscious to Achieve goals"
    ],
    outcomeParagraphs: [
      "जीवन में आगे बढ़ने के लिए हमें बहुत सारे आउटकम हासिल करने के लिए एक टेक्निक की आवश्यकता होती है जो आपको इस प्रोग्राम में पूरी सीखने को मिलेगी",
      "आप इस कोर्स में सीखेंगे की किस तरह से आप अपने वर्तमान से अपने फ्यूचर के उस लक्ष्य तक कैसे पहुंच सकते हैं। वहां पर पहुंचने के लिए कौन सी बाधाएं आपको आएगी आप उन बाधाओं को किस तरह से दूर करोगे",
      "इस कोर्स में आप सीखेंगे की वह माइंड की कौन सी टेक्निक है जिसका अमल करके आप अपने सबकॉन्शियस माइंड को पूरी तरह से अपने गोल को हासिल करने के लिए तैयार कर ले",
      "आप यह भी सीखेंगे कि वह 9 कौन सी तरकीबें है जिससे आप को पता चलेगा कि अगर मैं कहीं पर रुक गया हूं तो वह कौन सी वजह है जिससे मुझे रुकावट का सामना करना पड़ा है और आप उससे बाहर भी निकल जाएंगे",
      "आप बहुत ही सटीक तरह से सीखेंगे कि आपके लिए अपने goals को हासिल करना कितना ज्यादा आवश्यक है और आप उसे किस तरह से अपने pain और और pleasure के साथ जोड़ ले |"
    ],
    learn: [
      "आपको अपने लक्ष्य क्यों बनाने चाहिए और इसे किस तरह से हासिल किया जा सकता है इस कोर्स में आप सीखेंगे",
      "क्यों बहुत सारे लोग अपने लक्ष्य को हासिल करने में नाकाम हो जाते हैं वह कौन सी गलतियां करते हैं जो हमें नहीं करनी चाहिए",
      "इस कोर्स में आप ऐसी एक टेक्निक सीखेंगे जिसका यूज करके आप अपने सबकॉन्शियस माइंड को इस तरह से प्रोग्राम कर लेंगे की आपके गोल को हासिल करने में बड़ी भूमिका अदा करे",
      "अपने लक्ष्य को हासिल करने के लिए 9 स्टेप्स ऐसे सीखेंगे आप जिसका अमल करके आप अपने लक्ष्य को हासिल कर लेंगे",
      "Amazing Exercise for Program Your Subconscious Mind To Achieve Goals",
      "How to Resolve Obstacles to Achieve Outcomes",
      "Why Maximum People not Achieve Their Outcome"
    ],
    curriculumIsOutline: false,
    modules: [
      {
        title: "Section 1",
        meta: "9 lectures · 1h 1m",
        lectures: [
          { title: "Importance of Outcome in our Life", duration: "1:48" },
          { title: "Outcome Thinking Vs Task Thinking", duration: "5:37" },
          { title: "What's Your Outcome & How?", duration: "4:45" },
          { title: "Program Your Subconscious Mind to Achieve Desired Overcome", duration: "7:00" },
          { title: "Train Your Subconscious mind with \"Ultimate Why\" Exercise", duration: "10:15" },
          { title: "9 Steps to Achieve Desired Outcome", duration: "14:00" },
          { title: "Obstacles of Outcome", duration: "3:02" },
          { title: "Resolve Inner Conflict with \"PAW\"", duration: "2:40" },
          { title: "Self Affirmation", duration: "3:24" }
        ]
      }
    ],
    includes: [
      { icon: Languages, label: "Taught entirely in Hindi" },
      { icon: Sparkles, label: "All levels — beginner friendly" },
      { icon: BadgeCheck, label: "Certificate of completion" },
      { icon: MonitorSmartphone, label: "Access on mobile and TV" }
    ],
    audience: [
      "Teachers, MLM Leaders, Business Person, Professionals, Sales Person, students"
    ],
    requirements: ["laptop/mobile, internet, earphone"],
    instructorStats: [
      "4.1 Instructor Rating",
      "3 Reviews",
      "141 Students",
      "7 Courses"
    ],
    platform: "Udemy",
    enrollUrl: whatsappWith(
      "Hi Viren, I'm interested in enrolling for 'Achieving Success : \"The Art of Outcome Mastery\" (Hindi)'. Please guide me."
    )
  },
  {
    slug: "unlock-your-memory-power",
    price: "499₹",
    title: "Unlock Your Memory Power :Techniques for Students Success",
    shortTitle: "Unlock Your Memory Power ",
    buttonName: "Enroll / Enquire on WhatsApp",
    testimonials: [
      {
        name: "Ankit",
        rating: 4,
        timeAgo: "1 year ago",
        content: "good"
      },
      {
        name: "Udemy User",
        rating: 5,
        timeAgo: "1 year ago",
        content: "Good Session."
      },
      {
        name: "Sundeep",
        rating: 5,
        timeAgo: "1 year ago",
        content: "good"
      },
      {
        name: "Lalit",
        rating: 4,
        timeAgo: "2 years ago",
        content: "Easy to understand the course in Local language"
      }
    ],
    category: "memory",
    image: {
      src: "/images/courses/unlock-your-memory-power.png",
      alt: "Course thumbnail — Unlock Your Memory Power :Techniques for Students Success",
      isRemote: false,
    },
    tags: ["All Levels"],
    hook: "(भूलना भूल जाओगे) Unlocking The Potential : Awaken Your Memory Power :Strategies for Enhancing Memory and Recall (Hindi)",
    cardMeta: ["Instructor Rating 4.5★", "6+ Students"],
    outcomeBullets: [
      "Learn periodic Tables 1-118",
      "Learn digits and words",
      "Pegging technic",
      "association technic"
    ],
    outcomeParagraphs: [
      "इस कोर्स में आप सीखेंगे किस तरह से अपनी मेमोरी को 10 गुना तक बढ़ाना इस तरह से squares को याद रख सकते हैं किस तरह से word को याद रखना है",
      "डिजिट्स को किस तरह से याद रख सकते हैं maps किस तरह से याद रख सकते हैं",
      "एटॉमिक नंबर (periodic tables)इस तरह से याद रख सकते हैं एक साथ में कई वर्ड को किस तरह से याद रख सकते हैं",
      "बहुत सारी चीजें आपको इस कोर्स में सीखने को मिलेगी इस कोर्स को पूरा करने के बाद मेरा दावा है कि आप students है या आप बिजनेस करते हो या आप वर्किंग वुमन हो आपकी मेमोरी बढ़ जाएगी",
      "आपका माइंड इस तरह से ट्रेन हो जाएगा कि बहुत सारे न्यूरॉन्स आपस में जुड़ना स्टार्ट कर देंगे जिससे आपका माइंड बहुत सारी चीजों को लर्न करते  हुए बहुत ही ज्यादा sharp हो जाएगा इसलिए यह कोर्स आपके लिए बहुत ही ज्यादा महत्वपूर्ण होगा",
      "आशा रखता हूं कि आप इस कोर्स का उपयोग सिर्फ एक बार में ना करें पर इसमें जो भी टेक्निक सिखाई गई है उसके ऊपर mastery हासिल करें",
      "एक बार आपने इन टेक्निक्स को सिद्ध कर लिया तो आपके लिए हर जगह पर एक चमत्कार से कम नहीं है क्योंकि हमारा माइंड विजुअल माइंड है इसलिए यह इमेजेस की भाषा समझता है"
    ],
    learn: [
      "Learn secrets to memorize more and grow more",
      "Develop your brain for learn & memorize anything",
      "Memorize 1-118 periodic table in this Course very easily",
      "How to Train your Brain for Memory through different mind techniques",
      "How to get Confidence in Any Stuck Situation",
      "How to get more potential of your mind",
      "How to remember Science word like chlorine, magnesium etc. with very easy Technik"
    ],
    curriculumIsOutline: false,
    modules: [
      {
        title: "Section 1",
        meta: "16 lectures · 4h 38m",
        lectures: [
          { title: "Introduction: Memory Mastery (Association technique)", duration: "21:23" },
          { title: "Use Link Technique & benefits", duration: "11:18" },
          { title: "Memory Mastery Exercise : Unknown to Known", duration: "11:32" },
          { title: "Pegging Exercise", duration: "9:18" },
          { title: "How to Remember Numbers?", duration: "24:54" },
          { title: "Lecture 6 : Pegging Exercise", duration: "14:45" },
          { title: "Lecture 7: Periodic Table (1-25)", duration: "24:27" },
          { title: "Lecture - 8 : Periodic Table (26- 50)", duration: "22:46" },
          { title: "Lecture-9 : Periodic Table (51-75)", duration: "20:55" },
          { title: "Lecture- 10: Periodic Table (76-100)", duration: "21:12" },
          { title: "Lecture-14: Periodic Table (101-118)", duration: "13:47" },
          { title: "Lecture-11: Books & Authors", duration: "6:22" },
          { title: "Lecture-12: How to Memorize Important days", duration: "17:11" },
          { title: "Lecture-13: Memorize Invention & Inventors", duration: "15:05" },
          { title: "Memorize 300 Year Calendar", duration: "31:43" },
          { title: "Remember tables", duration: "11:29" }
        ]
      }
    ],
    includes: [
      { icon: Languages, label: "Taught entirely in Hindi" },
      { icon: Sparkles, label: "All levels — beginner friendly" },
      { icon: BadgeCheck, label: "Certificate of completion" },
      { icon: MonitorSmartphone, label: "Access on mobile and TV" }
    ],
    audience: [
      "Leaders, Scientists, Engineers, business persons",
      "MLM leaders, politicians, working women",
      "Government employees, Speakers, Trainers"
    ],
    requirements: ["mobile/laptop ,earphone, internet"],
    instructorStats: [
      "4.5 Instructor Rating",
      "1 Review",
      "6 Students",
      "7 Courses"
    ],
    platform: "Udemy",
    enrollUrl: whatsappWith(
      "Hi Viren, I'm interested in enrolling for 'Unlock Your Memory Power :Techniques for Students Success'. Please guide me."
    )
  },
  {
    slug: "memorize-periodic-table",
    price: "300₹",
    title: "Memorize the Periodic Table in 2 Hours :A Step by Step Guide",
    shortTitle: "Memorize the Periodic Table in 2 Hours ",
    category: "memory",
    buttonName: "Enroll / Enquire on WhatsApp",
    testimonials: [
      {
        name: "Ankit",
        rating: 4,
        timeAgo: "1 year ago",
        content: "good"
      },
      {
        name: "Udemy User",
        rating: 5,
        timeAgo: "1 year ago",
        content: "Good Session."
      },
      {
        name: "Sundeep",
        rating: 5,
        timeAgo: "1 year ago",
        content: "good"
      },
      {
        name: "Lalit",
        rating: 4,
        timeAgo: "2 years ago",
        content: "Easy to understand the course in Local language"
      }
    ],
    image: {
      src: "/images/courses/memorize-periodic-table.png",
      alt: "Course thumbnail — Memorize the Periodic Table in 2 Hours :A Step by Step Guide",
      isRemote: false,
    },
    tags: ["All Levels"],
    hook: "पीरियाडिक टेबल सीखने का बहुत ही आसान तरीका सिर्फ 2 Hour में आप सीख सकते हो और फिर कभी भी नहीं भूलोगे",
    cardMeta: ["Instructor Rating 4.4★", "1+ Students"],
    outcomeBullets: [
      "Chemistry Periodic Table 1-118",
      "Memorize with easy technic",
      "Retain more Faster",
      "Learn in 2 hour"
    ],
    outcomeParagraphs: [
      "इस कोर्स में आप सीखेंगे केमेस्ट्री प्रिडिक टेबल और यह प्रिडिक टेबल 1 से लेकर के 118 तक पूरे के पूरे आप सिर्फ 4 दिन में सीख पाएंगे और वह भी बहुत ही कम समय में ,",
      "आपको बताना चाहता हूं कि इस कोर्स में बहुत ही आसान टेक्निक मैंने दी हुई है जिसका यूज़ करके आप प्रिडिक्टेबल को सीख सकते हो और हमेशा के लिए इसे अपने सबकॉन्शियस में फिट कर सकते हो",
      "काफी सारे स्टूडेंट्स को मैंने देखा है कि वह प्रिडिक्टेबल को रटते  हैं rote मेथड के यूज़ करके वह रटते रहते हैं",
      "पीरियाडिक टेबल को  रटते नहीं है बल्कि टेक्निक यूज़ करके अपने सबकॉन्शियस माइंड में फिट कर देना है जिससे कि आप कभी भी इसे भूल ना पाए और इस कोर्स में यह पावरफुल टेक्निक आपको सीखने को मिलेगी",
      "कई बार ऐसा होता है कि हम बहुत सारी चीजें जो हमने देखी है वह हमें याद रह जाती है जैसे कि टीवी ,चेयर, टेबल, कपाट यह सारी चीजें हमने देखी हुई है इसलिए हमें याद भी रह जाती है उसकी इमेज, लेकिन केमिस्ट्री पीरियाडिक टेबल में जो भी वर्ड है वह हमें दिखाई नहीं देते हैं उसकी इमेज हमें नहीं पता है स्कैंडियम, रोडियम",
      "तो फिर यह कैसे याद रहेंगे यह स्टूडेंट्स के लिए बहुत ही बड़ा पेन बन जाता है पर मैं आपको बताना चाहता हूं कि इस कोर्स में आप जो टेक्निक सीखने वाले हैं इससे बहुत ही आसानी से आप सीख पाएंगे"
    ],
    learn: [
      "Secret Formula to Learn Periodic Table in 4 Days 1-118",
      "ones memorize never forget",
      "Memorize 1-118 periodic table in this Course very easily",
      "upgrade your super memory power with this course",
      "Super Power Memory Technique"
    ],
    curriculumIsOutline: false,
    modules: [
      {
        title: "Section 1",
        meta: "8 lectures · 2h 17m",
        lectures: [
          { title: "Introduction", duration: "0:39" },
          { title: "Lecture 2: How to Remember Digits", duration: "9:18" },
          { title: "Lecture 3: Remember Digits (0-100)", duration: "24:53" },
          { title: "Lecture 4: PT (1-25)", duration: "24:27" },
          { title: "Lecture 5: PT (26-50)", duration: "22:46" },
          { title: "Lecture 6: PT (51-75)", duration: "20:55" },
          { title: "Lecture 7: PT (76-100)", duration: "21:12" },
          { title: "Lecture 8: PT (101-118)", duration: "13:47" }
        ]
      }
    ],
    includes: [
      { icon: Languages, label: "Taught entirely in Hindi" },
      { icon: Sparkles, label: "All levels — beginner friendly" },
      { icon: BadgeCheck, label: "Certificate of completion" },
      { icon: MonitorSmartphone, label: "Access on mobile and TV" }
    ],
    audience: [
      "Students, Teachers",
      "Parents, coaches"
    ],
    requirements: ["mobile/laptop, earphone, internet"],
    instructorStats: [
      "4.4 Instructor Rating",
      "0 Reviews",
      "1 Students",
      "7 Courses"
    ],
    platform: "Udemy",
    enrollUrl: whatsappWith(
      "Hi Viren, I'm interested in enrolling for 'Memorize the Periodic Table in 2 Hours :A Step by Step Guide'. Please guide me."
    )
  },
  {
    slug: "confident-public-speaker",
    price: "499₹",
    title: "Becoming a Confident & Compelling Public Speaker : (Hindi)",
    shortTitle: "Becoming a Confident & Compelling Public Speaker ",
    category: "speaking",
    buttonName: "Enroll / Enquire on WhatsApp",
    testimonials: [
      {
        name: "Ankit",
        rating: 4,
        timeAgo: "1 year ago",
        content: "good"
      },
      {
        name: "Udemy User",
        rating: 5,
        timeAgo: "1 year ago",
        content: "Good Session."
      },
      {
        name: "Sundeep",
        rating: 5,
        timeAgo: "1 year ago",
        content: "good"
      },
      {
        name: "Lalit",
        rating: 4,
        timeAgo: "2 years ago",
        content: "Easy to understand the course in Local language"
      }
    ],
    image: {
      src: "/images/courses/confident-public-speaker.png",
      alt: "Course thumbnail — Becoming a Confident & Compelling Public Speaker : (Hindi)",
      isRemote: false,
    },
    tags: ["All Levels"],
    hook: "अगर आप पब्लिक स्पीकिंग स्किल सीखकर लोगों को Motivate और Inspire करना चाहते हो तो यह Course Step by Step आपकी हेल्प करेगा",
    cardMeta: ["Instructor Rating 5.0★", "19+ Students"],
    outcomeBullets: [
      "शक्तिशाली आत्मविश्वास व्यक्तित्व(confidence)",
      "स्टेज फियर पर काबू पाएं(Overcome stage fear)",
      "अधिक अवसर ले लो(More opportunities)",
      "बेहतर संचार कौशल(Communication skill)",
      "अच्छे श्रोता(Active listner)",
      "अपने क्षेत्र में अधिक सफलता(more success)",
      "अधिक रूपांतरण शक्ति(Conviction power)"
    ],
    outcomeParagraphs: [
      "पब्लिक स्पीकिंग - क्या, क्यों और कैसे, STAGE FEAR के क्या कारण हैं?(reason of stage fear?), स्टेज फीचर्स के लक्षण क्या हैं(symptoms)",
      "3-पी फॉर्मूला ओवरकम स्टेज डर के लिए (तैयारी, अभ्यास और सकारात्मक मन सेट), अपनी speech को कैसे व्यवस्थित करें?(organize)",
      "अपने भाषण से पहले(Before speech), अपने भाषण के दौरान(During speech), अपना भाषण कैसे शुरू और बंद करें?(start & close)",
      "स्वीकृति भाषण(Acceptance Speech), परिचय भाषण(Introduction speech), तत्काल भाषण(Impromptu speech)",
      "अगर आप पब्लिक स्पीकिंग स्किल सीखना चाहते हैं और एक शक्तिशाली पब्लिक स्पीकर बनना चाहते हैं तो पब्लिक स्पीकिंग का यह कोर्स आपके लिए एकदम परफेक्ट है।",
      "इस कोर्स में, आप सीखेंगे कि स्टेज के डर को कैसे दूर किया जाए और अपने भाषण को कैसे बेहतर बनाया जाए। आप सीखेंगे कि भाषण कैसे शुरू करें और बंद करें और ऐसी कौन सी तकनीकें हैं जिनका उपयोग करके आप किसी भी अवस्था और किसी भी स्थिति से अच्छा भाषण दे सकते हैं।"
    ],
    learn: [
      "3-P Formula स्टेज का डर दूर करने के लिए, बॉडी लैंग्वेज , वॉइस टोन",
      "अपने speech की शुरुआत कैसे करें और उसका अंत कैसे करें",
      "Become Powerful Public Speaker and achieve your Speaking goals.",
      "What are the reasons to Stops you to perform better on the stage and how to resolve them.",
      "Change inner beliefs for success and grow , erase negative patterns",
      "simple and effective technique , apply easily"
    ],
    curriculumIsOutline: false,
    modules: [
      {
        title: "Section 1",
        meta: "21 lectures · 5h 21m",
        lectures: [
          { title: "Introduction", duration: "1:24" },
          { title: "Why Public Speaking is very Important ?", duration: "15:24" },
          { title: "Stage Fear ! What, Why & How ?", duration: "14:57" },
          { title: "How to Prepare Your Speech?", duration: "29:53" },
          { title: "How to Practice Your Speech?", duration: "17:26" },
          { title: "Positive Mind Set", duration: "24:26" },
          { title: "Introduction Speech", duration: "21:34" },
          { title: "My Journey : How I Overcome my Stage Fear !", duration: "12:01" },
          { title: "Acceptance Speech", duration: "14:46" },
          { title: "How to Start Speech?", duration: "20:46" },
          { title: "How to Close Speech?", duration: "11:49" },
          { title: "Make Your Presentation Powerful", duration: "20:04" },
          { title: "Voice Modulation", duration: "14:10" },
          { title: "Body language tips !", duration: "22:00" },
          { title: "Story Telling", duration: "9:33" },
          { title: "How To Deliver Impromptu Speech", duration: "21:49" },
          { title: "How to Influence Audience?", duration: "18:12" },
          { title: "Who has stopped you.", duration: "9:11" },
          { title: "Develop those Habits for being Great Speaker", duration: "9:50" },
          { title: "Always keep Learning !", duration: "6:07" },
          { title: "Listening Skills !", duration: "6:36" }
        ]
      }
    ],
    includes: [
      { icon: Languages, label: "Taught entirely in Hindi" },
      { icon: Sparkles, label: "All levels — beginner friendly" },
      { icon: BadgeCheck, label: "Certificate of completion" },
      { icon: MonitorSmartphone, label: "Access on mobile and TV" }
    ],
    audience: [
      "MLM leaders, Teachers, Students, Businessman, Working Woman",
      "Politicians, Government Officers, Sales Executives",
      "Anchors, Public Speakers, Trainers, Coaches"
    ],
    requirements: ["no its simple learning video (pc, or mobile ,or laptop net)"],
    instructorStats: [
      "5.0 Instructor Rating",
      "1 Review",
      "19 Students",
      "7 Courses"
    ],
    platform: "Udemy",
    enrollUrl: whatsappWith(
      "Hi Viren, I'm interested in enrolling for 'Becoming a Confident & Compelling Public Speaker : (Hindi)'. Please guide me."
    )
  },
  {
    slug: "mastering-public-speaking",
    price: "100₹",
    title: "Mastering Public Speaking : The 7 Step Formula (Hindi)",
    shortTitle: "Mastering Public Speaking ",
    category: "speaking",
    buttonName: "Enroll / Enquire on WhatsApp",
    testimonials: [
      {
        name: "Ankit",
        rating: 4,
        timeAgo: "1 year ago",
        content: "good"
      },
      {
        name: "Udemy User",
        rating: 5,
        timeAgo: "1 year ago",
        content: "Good Session."
      },
      {
        name: "Sundeep",
        rating: 5,
        timeAgo: "1 year ago",
        content: "good"
      },
      {
        name: "Lalit",
        rating: 4,
        timeAgo: "2 years ago",
        content: "Easy to understand the course in Local language"
      }
    ],
    image: {
      src: "/images/courses/mastering-public-speaking.png",
      alt: "Course thumbnail — Mastering Public Speaking : The 7 Step Formula (Hindi)",
      isRemote: false,
    },
    tags: ["All Levels"],
    hook: "7 Secrets That's Makes Better Speaker, What, Why,& How to Start & Close Speech, How to Use Body Language & Tone of Voice",
    cardMeta: ["Instructor Rating 4.0★", "2,015+ Students"],
    outcomeBullets: [
      "What is public speaking, why public speaking?",
      "Technique to deliver speech Confidently",
      "पब्लिक स्पीकिंग सीखने के लिए आसान टेक्निक को सीखे",
      "Understand How to Prepare Your Speech Effectively",
      "What are The Reasons for Stage Fear & How to Resolve it",
      "अगर आप चाहते हो स्टेज का डर दूर करके एक Confident स्पीकर बनना",
      "Body Language (इसका Use करना बेहतर तरीके से सीख लिया)"
    ],
    outcomeParagraphs: [
      "What are Public Speaking Skills? Why Public Speaking is very Important? What Is Stage Fear? Symptoms Of Stage Fear, Reasons for Stage Fear, How to Overcome Stage Fear? How to Prepare Your Speech? How to Give Effective Speech? What are Speech tools? Body Language tips, How to use hands, legs, and whole body? How to Present Your Speech? Why Posture & Gesture Are very Important? Mehrabian Model Of Communication. How to Influence the Audience?",
      "If you want to improve your public speaking skills, if you want to give a good speech from any stage, then this course of my public speaking can help you very much, use whatever technique is mentioned in it, practice and become a good speaker, this skill will help you to move forward everywhere, will improve your communication, your body language will be better and you can grow in any field.",
      "21वीं शताब्दी में हमारे पास बहुत सारे skill होने चाहिए और पब्लिक स्पीकिंग स्किल होना बहुत ही ज्यादा आवश्यक है अगर आप किसी भी फील्ड में हो आप बिजनेस करते हो आप जॉब करते हो आप स्टूडेंट हो क्या आप किसी प्रोफेशन के साथ जुड़े हुए हो तब भी आपके लिए पब्लिक स्पीकिंग का स्किल बहुत ही ज्यादा आवश्यक है यह स्किल को learn कर आप अपनी पर्सनालिटी को बेहतर बना सकते हो"
    ],
    learn: [
      "What is public speaking, why public speaking?, how to start speech, how to close speech",
      "Technique to deliver speech Confidently, Speech tools Body language Tone Of Voice",
      "Understand How to Prepare Your Speech Effectively",
      "What are The Reasons for Stage Fear & How to Resolve it",
      "Never use these 3 Don'ts For Win The Audience",
      "What are the Technik that makes you Confident Speaker & Overcome Stage Fear",
      "Trainers, Coaches, Teachers, Stage Performer के लिए बहुत ही ज्यादा महत्वपूर्ण"
    ],
    curriculumIsOutline: false,
    modules: [
      {
        title: "Section 1",
        meta: "7 lectures · 55m",
        lectures: [
          { title: "Why Public Speaking is very Important ?", duration: "5:18" },
          { title: "Stage Fear ! What, Why & How ?", duration: "12:18" },
          { title: "Steps to Overcome Fear", duration: "5:37" },
          { title: "How to Prepare Your Speech?", duration: "8:00" },
          { title: "How to Start and Close Your Speech?", duration: "8:32" },
          { title: "Body language tips !", duration: "9:11" },
          { title: "How to Influence Audience?", duration: "6:37" }
        ]
      }
    ],
    includes: [
      { icon: Languages, label: "Taught entirely in Hindi" },
      { icon: Sparkles, label: "All levels — beginner friendly" },
      { icon: BadgeCheck, label: "Certificate of completion" },
      { icon: MonitorSmartphone, label: "Access on mobile and TV" }
    ],
    audience: [
      "Students, business persons, MLM leaders, politicians, working women",
      "Executives, Government employees, Speakers, Trainers"
    ],
    requirements: ["(pc, or mobile ,or laptop internet, earphone)"],
    instructorStats: [
      "4.0 Instructor Rating",
      "56 Reviews",
      "2,015 Students",
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
