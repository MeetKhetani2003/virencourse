"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./motion";

export function CourseCarousel({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let interval: NodeJS.Timeout;
    
    if (!isHovered) {
      interval = setInterval(() => {
        // If scrolled to the end (allow some tolerance)
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
          el.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          const scrollAmount = el.clientWidth > 768 ? el.clientWidth / 2 : el.clientWidth;
          el.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }, 4000); // swipe every 4 seconds
    }

    return () => clearInterval(interval);
  }, [isHovered]);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth > 768 ? el.clientWidth / 2 : el.clientWidth;
    el.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: "smooth" });
  };

  return (
    <div 
      className="relative group w-full mt-14"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 pt-4 px-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {children}
      </div>
      
      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 lg:-left-6 hidden md:flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-20">
        <button 
          onClick={() => scroll('left')}
          className="p-3 rounded-full bg-ink/90 text-gold border border-gold/30 hover:bg-ink hover:text-white backdrop-blur-sm pointer-events-auto shadow-xl transition-all hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-0 lg:-right-6 hidden md:flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-20">
        <button 
          onClick={() => scroll('right')}
          className="p-3 rounded-full bg-ink/90 text-gold border border-gold/30 hover:bg-ink hover:text-white backdrop-blur-sm pointer-events-auto shadow-xl transition-all hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
