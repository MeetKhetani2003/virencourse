import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { SVGProps } from "react";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/content/courses";

/* Thin-stroke social glyphs (brand icons removed from lucide) */
function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.6" cy="6.4" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="5.5" width="20" height="13" rx="3.5" />
      <path d="M10 9.5v5l4.5-2.5L10 9.5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}
function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="3" />
      <path d="M7 10.5V17M7 7v.01M11.5 17v-3.8a2.6 2.6 0 0 1 5.2 0V17" />
    </svg>
  );
}

const LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Contact", href: "/contact" },
];

/* Social links are placeholders — CONFIRM WITH VIREN */
const SOCIALS = [
  { label: "Instagram", icon: InstagramIcon, href: "#" },
  { label: "YouTube", icon: YoutubeIcon, href: "#" },
  { label: "LinkedIn", icon: LinkedinIcon, href: "#" },
];

export function Footer() {
  return (
    <footer className="relative bg-white text-ink">
      {/* Thin gold hairline at the very top edge */}
      <div className="h-px w-full bg-gold/60" />

      <div className="mx-auto max-w-[1280px] px-6 pb-10 pt-20 lg:px-10 lg:pt-24">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_0.8fr_1fr]">
          {/* Wordmark + tagline */}
          <div>
            <p className="font-serif text-3xl font-medium tracking-[0.05em]">
              Viren Surati<span className="text-gold">.</span>
            </p>
            <p className="mt-4 max-w-sm font-serif text-base italic leading-relaxed text-mist">
              Train the mind. Sharpen the memory. Own the stage.
            </p>
            <p className="mt-8 micro-label text-mist-light">
              Certified NLP, Mind &amp; Memory Trainer — India
            </p>
          </div>

          {/* Quick links */}
          <nav className="flex flex-col items-start gap-4">
            <p className="micro-label text-gold">Explore</p>
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="link-draw text-[12px] font-semibold uppercase tracking-[0.18em] text-mist hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact */}
          <div className="flex flex-col items-start gap-5">
            <p className="micro-label text-gold">Reach Viren</p>
            <a
              href={PHONE_TEL}
              className="font-serif text-2xl text-ink transition-colors duration-300 hover:text-gold"
            >
              {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-dark px-5! py-2.5!"
            >
              <span className="btn-wipe" />
              <span className="relative">WhatsApp Now</span>
              <ArrowUpRight className="btn-icon relative h-4 w-4" />
            </a>
            <div className="mt-2 flex items-center gap-5">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-mist transition-all duration-300 hover:-translate-y-0.5 hover:text-gold"
                >
                  <social.icon className="h-[19px] w-[19px]" strokeWidth={1.4} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-ink/10 pt-7 text-[12px] text-ink/40 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Viren Surati. All rights reserved.</p>
          <p className="font-serif italic text-mist">
            100,000+ lives touched — one mind at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}
