"use client";

import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { EASE } from "./motion";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/content/courses";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 32));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isDarkHeader = !scrolled && pathname !== "/";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled
            ? "border-b border-dark/10 bg-light/90 shadow-sm py-3 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 lg:px-10">
          {/* Wordmark */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border-[1.5px] border-[#3b82f6]">
              <Image
                src="/images/logonav.png"
                alt="Viren Surati Logo"
                fill
                className="object-cover"
              />
            </div>
            <span
              className={`font-sans text-[22px] sm:text-2xl font-bold tracking-tight transition-colors duration-300 ${
                isDarkHeader ? "text-white" : "text-[#4b55fa]"
              }`}
            >
              Viren Surati
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-9 md:flex">
            {NAV.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${
                    active
                      ? isDarkHeader
                        ? "is-active text-white font-semibold"
                        : "is-active text-primary font-semibold"
                      : isDarkHeader
                      ? "text-white/70 hover:text-white"
                      : "text-muted hover:text-dark"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="btn btn-primary hidden px-5! py-2.5! md:inline-flex"
            >
              <span className="btn-wipe" />
              <span className="relative">Book a Session</span>
            </Link>

            {/* Mobile toggle */}
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="relative flex h-10 w-10 items-center justify-center md:hidden"
            >
              <span
                className={`absolute h-px w-6 transition-all duration-500 ${
                  open
                    ? "rotate-45 bg-dark"
                    : `-translate-y-[4px] ${isDarkHeader ? "bg-white" : "bg-dark"}`
                }`}
              />
              <span
                className={`absolute h-px w-6 transition-all duration-500 ${
                  open
                    ? "-rotate-45 bg-dark"
                    : `translate-y-[4px] ${isDarkHeader ? "bg-white" : "bg-dark"}`
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="grain fixed inset-0 z-40 flex flex-col justify-between bg-light px-8 pb-8 pt-20 md:hidden"
          >
            <nav className="flex flex-col gap-2">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 26 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.08 + i * 0.09 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 border-b border-dark/10 py-4"
                  >
                    <span className="font-serif text-[11px] tracking-[0.25em] text-primary">
                      0{i + 1}
                    </span>
                    <span className="font-serif text-4xl font-light text-dark">
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col gap-5"
            >
              <p className="micro-label text-muted">Direct</p>
              <a href={PHONE_TEL} className="font-serif text-xl text-dark">
                {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary self-start"
              >
                <span className="btn-wipe" />
                <span className="relative">WhatsApp Viren</span>
                <ArrowUpRight className="btn-icon relative h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
