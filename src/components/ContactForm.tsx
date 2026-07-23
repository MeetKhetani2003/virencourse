"use client";

import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { COURSES, WHATSAPP_URL } from "@/content/courses";

type Status = "idle" | "sending" | "success" | "error";

const inputCls =
  "w-full border-b border-ink/20 bg-transparent pb-3 pt-2 font-serif text-lg text-ink outline-none transition-colors duration-500 placeholder:text-mist-light/70 focus:border-gold";

const labelCls = "micro-label text-mist";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [courseInterest, setCourseInterest] = useState("Not sure yet");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, courseInterest, message }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center rounded-[14px] border border-ink/10 bg-white/70 px-8 py-16 text-center">
        <svg viewBox="0 0 64 64" className="h-16 w-16">
          <motion.circle
            cx="32"
            cy="32"
            r="29"
            fill="none"
            stroke="#b08d45"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.path
            d="M20 33.5 28.5 42 44 24"
            fill="none"
            stroke="#b08d45"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.55, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>
        <h3 className="mt-8 font-serif text-3xl font-medium text-ink">
          Thank you, {name.split(" ")[0] || "friend"}.
        </h3>
        <p className="mt-3 max-w-sm text-mist">
          Your message is with Viren — he&apos;ll get back to you shortly. In a
          hurry?
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="link-draw mt-6 text-gold"
        >
          WhatsApp him directly
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[14px] border border-ink/10 bg-white/70 p-8 lg:p-12"
    >
      <div className="grid gap-9 sm:grid-cols-2">
        <label className="block">
          <span className={labelCls}>Your Name *</span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={120}
            placeholder="Asha Sharma"
            className={inputCls}
          />
        </label>
        <label className="block">
          <span className={labelCls}>Phone / WhatsApp *</span>
          <input
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            maxLength={32}
            placeholder="+91 ·····"
            className={inputCls}
          />
        </label>
      </div>

      <label className="mt-9 block">
        <span className={labelCls}>Course of Interest</span>
        <select
          value={courseInterest}
          onChange={(e) => setCourseInterest(e.target.value)}
          className={`${inputCls} cursor-pointer appearance-none`}
        >
          <option>Not sure yet</option>
          {COURSES.map((c) => (
            <option key={c.slug}>{c.title}</option>
          ))}
          <option>General enquiry</option>
        </select>
      </label>

      <label className="mt-9 block">
        <span className={labelCls}>Message</span>
        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={2000}
          placeholder="Tell Viren what you'd like to work on — memory, confidence, the stage…"
          className={`${inputCls} resize-none`}
        />
      </label>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn btn-ink disabled:opacity-60"
        >
          <span className="btn-wipe" />
          <span className="relative">
            {status === "sending" ? "Sending…" : "Send Message"}
          </span>
        </button>
        {status === "error" && (
          <p className="text-sm text-red-700">
            Something went wrong — please try WhatsApp instead.
          </p>
        )}
      </div>
    </form>
  );
}
