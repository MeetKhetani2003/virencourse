"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { CourseCard } from "./CourseCard";
import { EASE } from "./motion";
import { CATEGORIES, COURSES, type CourseCategory } from "@/content/courses";

export function CourseGrid() {
  const [active, setActive] = useState<CourseCategory | "all">("all");

  const filtered =
    active === "all" ? COURSES : COURSES.filter((c) => c.category === active);

  return (
    <div>
      {/* Filter pills */}
      <div className="flex flex-wrap gap-2.5">
        {CATEGORIES.map((cat) => {
          const isActive = active === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActive(cat.id)}
              className={`relative cursor-pointer rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] transition-colors duration-500 ${
                isActive ? "text-surface" : "text-muted hover:text-dark"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="course-filter-pill"
                  className="absolute inset-0 rounded-full bg-dark"
                  transition={{ duration: 0.55, ease: EASE }}
                />
              )}
              <span className="relative">{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <motion.div layout className="mt-8 grid gap-8 lg:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((course) => (
            <motion.div
              key={course.slug}
              layout
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 14, transition: { duration: 0.3 } }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="mt-8 rounded-[14px] border border-dashed border-dark/20 px-8 py-10 text-center">
          <p className="font-serif text-2xl italic text-muted">
            New programs are being prepared in this space.
          </p>
          <p className="mt-3 text-sm text-muted">
            Message Viren to hear about upcoming batches first.
          </p>
        </div>
      )}
    </div>
  );
}
