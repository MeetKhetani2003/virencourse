"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

export const EASE = [0.22, 1, 0.36, 1] as const;

/** Slow, calm fade + upward drift on scroll into view. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 22,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-70px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Clip-mask line reveal for hero headlines. */
export function MaskLine({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <span className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
      <motion.span
        className={`block will-change-transform ${className ?? ""}`}
        initial={{ y: "112%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.15, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/** Rotating circular text badge — a quiet, living detail. */
export function CircularBadge({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div className={`relative ${className ?? ""}`} aria-hidden="true">
      <svg viewBox="0 0 100 100" className="h-full w-full animate-spin-slow">
        <defs>
          <path
            id="vs-circle"
            d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
          />
        </defs>
        <text className="fill-surface/80 text-[7.4px] font-semibold uppercase" style={{ letterSpacing: "2.7px" }}>
          <textPath href="#vs-circle">{text}</textPath>
        </text>
      </svg>
      <span className="absolute inset-0 m-auto h-1.5 w-1.5 rounded-full bg-primary" />
    </div>
  );
}
