import { Reveal } from "@/components/motion";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Rahul M.",
    role: "Student",
    content: "Viren sir's memory techniques completely changed the way I study. I went from struggling to remember my syllabus to scoring top marks with ease!",
    rating: 5,
  },
  {
    name: "Priya S.",
    role: "Parent",
    content: "The focus and confidence my son gained after the NLP sessions are incredible. Highly recommend this course to every parent.",
    rating: 5,
  },
  {
    name: "Amit D.",
    role: "Professional",
    content: "Practical, simple and highly effective. This isn't just about memory, it's about unlocking your brain's true potential in daily life.",
    rating: 5,
  }
];

export function CourseTestimonials() {
  return (
    <section className="bg-white py-16 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <Reveal>
          <div className="text-center">
            <p className="flex items-center justify-center gap-4 micro-label text-muted">
              <span className="h-px w-10 bg-primary" />
              Student Success Stories
              <span className="h-px w-10 bg-primary" />
            </p>
            <h2 className="mt-6 font-serif text-3xl font-light tracking-[-0.015em] text-dark md:text-4xl">
              What people are <em className="italic text-primary">saying</em>
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, i) => (
            <Reveal key={testimonial.name} delay={i * 0.1}>
              <div className="relative flex h-full flex-col justify-between border border-dark/10 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
                <Quote className="absolute right-6 top-6 h-10 w-10 text-primary/10" strokeWidth={1} />
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" strokeWidth={1} />
                    ))}
                  </div>
                  <p className="mt-6 text-[15.5px] italic leading-relaxed text-dark/80">
                    &quot;{testimonial.content}&quot;
                  </p>
                </div>
                <div className="mt-8 border-t border-dark/10 pt-6">
                  <p className="font-serif text-lg font-medium tracking-tight text-dark">{testimonial.name}</p>
                  <p className="mt-1 text-[13px] font-semibold tracking-wider uppercase text-muted">{testimonial.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
