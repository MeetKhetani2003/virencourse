"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion";
import { Star, MoreVertical, ThumbsUp, ThumbsDown, X, Search } from "lucide-react";
import type { CourseTestimonial } from "@/content/courses";

interface CourseTestimonialsProps {
  rating: number;
  testimonials?: CourseTestimonial[];
}

export function CourseTestimonials({ rating, testimonials }: CourseTestimonialsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<number | null>(null);

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  // Calculate rating distribution for the modal
  const ratingCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  testimonials.forEach((t) => {
    if (t.rating >= 1 && t.rating <= 5) {
      ratingCounts[t.rating as keyof typeof ratingCounts]++;
    }
  });

  const filteredTestimonials = testimonials.filter(t => {
    const matchesSearch = t.content.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          t.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter ? t.rating === activeFilter : true;
    return matchesSearch && matchesFilter;
  });

  const renderReviewCard = (testimonial: CourseTestimonial, isModal = false) => (
    <div className={`flex h-full flex-col border-t border-dark/10 ${isModal ? 'py-8' : 'pt-8'}`}>
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          {testimonial.avatarUrl ? (
            <img src={testimonial.avatarUrl} alt={testimonial.name} className="h-12 w-12 rounded-full object-cover bg-dark/5" />
          ) : (
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-dark text-lg font-bold text-white">
              {testimonial.name.charAt(0).toUpperCase()}
            </div>
          )}
          <div className="flex flex-col">
            <span className="text-[15px] font-bold text-dark">{testimonial.name}</span>
            <div className="mt-1 flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, index) => (
                  <Star 
                    key={index} 
                    className={`h-3 w-3 ${index < testimonial.rating ? "fill-[#b4690e] text-[#b4690e]" : "fill-transparent text-dark/20"}`} 
                    strokeWidth={2} 
                  />
                ))}
              </div>
              <span className="text-[13px] font-medium text-dark/60">{testimonial.timeAgo}</span>
            </div>
          </div>
        </div>
        <button className="p-2 text-dark/50 transition-colors hover:text-dark">
          <MoreVertical className="h-5 w-5" strokeWidth={2} />
        </button>
      </div>

      <div className="mt-4 flex-grow">
        <p className="text-[15px] leading-relaxed text-dark/85">
          {testimonial.content}
        </p>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <span className="text-[11px] font-medium text-dark/50">Helpful?</span>
        <div className="flex items-center gap-1">
          <button className="flex h-10 w-10 items-center justify-center rounded-full text-dark/70 transition-colors hover:bg-dark/5 hover:text-dark">
            <ThumbsUp className="h-[18px] w-[18px]" strokeWidth={1.5} />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full text-dark/70 transition-colors hover:bg-dark/5 hover:text-dark">
            <ThumbsDown className="h-[18px] w-[18px]" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <section className="bg-white py-12 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <div className="mb-10 flex items-center gap-2">
              <Star className="h-[22px] w-[22px] fill-[#b4690e] text-[#b4690e]" strokeWidth={1} />
              <h2 className="font-serif text-2xl font-bold tracking-[-0.01em] text-dark md:text-3xl">
                {rating} course rating <span className="mx-2 text-dark/30">•</span> {testimonials.length} rating{testimonials.length !== 1 ? 's' : ''}
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {testimonials.slice(0, 4).map((testimonial, i) => (
              <Reveal key={i} delay={i * 0.1}>
                {renderReviewCard(testimonial)}
              </Reveal>
            ))}
          </div>

          {testimonials.length > 0 && (
            <Reveal delay={0.4}>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="mt-10 border border-dark px-4 py-2 text-[15px] font-bold transition-colors hover:bg-dark/5"
              >
                Show all reviews
              </button>
            </Reveal>
          )}
        </div>
      </section>

      {/* Reviews Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark/70 p-4 backdrop-blur-sm">
          <div className="relative flex max-h-[90vh] w-full max-w-[1000px] flex-col bg-white shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-dark/10 px-8 py-6">
              <div className="flex items-center gap-3">
                <Star className="h-6 w-6 fill-[#b4690e] text-[#b4690e]" strokeWidth={1} />
                <h2 className="font-serif text-2xl font-bold text-dark">
                  {rating} course rating <span className="mx-2 text-dark/30">•</span> {testimonials.length} rating{testimonials.length !== 1 ? 's' : ''}
                </h2>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full text-dark/70 transition-colors hover:bg-dark/5 hover:text-dark"
              >
                <X className="h-6 w-6" strokeWidth={1.5} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex flex-col gap-10 overflow-y-auto px-8 py-8 md:flex-row">
              {/* Left Column: Filters */}
              <div className="w-full shrink-0 md:w-64">
                {/* Search */}
                <div className="relative mb-8">
                  <input 
                    type="text" 
                    placeholder="Search reviews" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full border border-dark/20 px-4 py-3 pl-11 text-[15px] text-dark placeholder-dark/40 transition-colors focus:border-dark focus:outline-none"
                  />
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-dark/40" strokeWidth={1.5} />
                </div>

                {/* Rating Distribution */}
                <div className="flex flex-col gap-3">
                  {[5, 4, 3, 2, 1].map((star) => {
                    const count = ratingCounts[star as keyof typeof ratingCounts];
                    const percentage = testimonials.length > 0 ? (count / testimonials.length) * 100 : 0;
                    
                    return (
                      <button 
                        key={star}
                        onClick={() => setActiveFilter(activeFilter === star ? null : star)}
                        className={`group flex items-center gap-3 text-left transition-opacity hover:opacity-100 ${activeFilter && activeFilter !== star ? 'opacity-40' : 'opacity-80'}`}
                      >
                        <div className="flex items-center gap-1 w-28 shrink-0">
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-[14px] w-[14px] ${i < star ? "fill-[#b4690e] text-[#b4690e]" : "fill-transparent text-dark/20"}`} 
                                strokeWidth={2} 
                              />
                            ))}
                          </div>
                          <span className="text-[13px] font-medium text-dark/60 ml-1">{Math.round(percentage)}%</span>
                        </div>
                        <div className="h-2 w-full flex-grow overflow-hidden bg-dark/10">
                          <div 
                            className="h-full bg-dark/40 transition-all duration-500 group-hover:bg-dark/60" 
                            style={{ width: `${percentage}%` }} 
                          />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Reviews List */}
              <div className="flex-grow">
                {filteredTestimonials.length > 0 ? (
                  <div className="flex flex-col gap-0">
                    {filteredTestimonials.map((testimonial, i) => (
                      <div key={i}>
                        {renderReviewCard(testimonial, true)}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex h-full items-center justify-center py-20 text-dark/50">
                    No reviews found matching your search criteria.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
