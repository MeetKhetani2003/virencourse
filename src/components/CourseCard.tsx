import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/content/courses";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="group relative overflow-hidden rounded-[14px] border border-ink/10 bg-white/75 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_36px_70px_-34px_rgba(11,11,12,0.4)]">
      {/* Whole card is clickable */}
      <Link
        href={`/courses/${course.slug}`}
        aria-label={`View course: ${course.title}`}
        className="absolute inset-0 z-10"
      />

      {/* Image */}
      <div className="duotone relative aspect-[16/10] overflow-hidden bg-ink-3">
        <Image
          src={course.image.src}
          alt={course.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 560px"
          className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.045]"
        />
      </div>

      {/* Body */}
      <div className="flex flex-col gap-4 p-7 lg:p-8">
        <div className="flex flex-wrap gap-2">
          {course.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-ink/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-mist"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-serif text-[1.45rem] font-medium leading-snug tracking-[-0.01em] text-ink">
          {course.title}
        </h3>

        <p className="font-serif text-[15px] italic leading-relaxed text-mist">
          {course.hook}
        </p>

        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[12px] font-medium text-mist">
          {course.cardMeta.map((m, i) => (
            <span key={m} className="flex items-center gap-2.5">
              {i > 0 && <span className="h-[3px] w-[3px] rounded-full bg-gold" />}
              {m}
            </span>
          ))}
        </div>

        <div className="mt-1 flex items-center justify-between border-t border-ink/10 pt-5">
          <span className="link-draw text-gold">
            View Course
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.75} />
          </span>
          <span className="font-serif text-sm italic text-mist-light">
            {course.platform}
          </span>
        </div>
      </div>
    </article>
  );
}
