const fs = require('fs');
const path = require('path');

// 1. Rewrite globals.css completely
const globalsCssPath = path.join(__dirname, 'src', 'app', 'globals.css');
const newGlobalsCss = `@import "tailwindcss";

@theme {
  /* ——— Teal & Slate educational palette ——— */
  --color-primary: #00829B;
  --color-primary-soft: #00B4D8;
  --color-dark: #0F172A;
  --color-dark-2: #1E293B;
  --color-dark-3: #334155;
  --color-light: #FFFFFF;
  --color-light-2: #F8FAFC;
  --color-surface: #F1F5F9;
  --color-muted: #64748B;
  --color-muted-light: #94A3B8;

  --font-serif: var(--font-fraunces), "Georgia", serif;
  --font-sans: var(--font-manrope), ui-sans-serif, system-ui, sans-serif;

  --ease-elegant: cubic-bezier(0.22, 1, 0.36, 1);

  --animate-spin-slow: spin-slow 22s linear infinite;
  --animate-wa-breathe: wa-breathe 3.8s ease-in-out infinite;
  --animate-scroll-dot: scroll-dot 2.2s ease-in-out infinite;

  @keyframes spin-slow {
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes wa-breathe {
    0%,
    100% {
      box-shadow:
        0 0 0 0 rgba(0, 130, 155, 0.4),
        0 14px 34px rgba(0, 0, 0, 0.35);
    }
    50% {
      box-shadow:
        0 0 0 16px rgba(0, 130, 155, 0),
        0 14px 34px rgba(0, 0, 0, 0.35);
    }
  }
  @keyframes scroll-dot {
    0% {
      opacity: 0;
      transform: translateY(0);
    }
    30% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(14px);
    }
  }
}

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-light font-sans text-dark antialiased;
    font-optical-sizing: auto;
  }

  ::selection {
    background: #00829B;
    color: #FFFFFF;
  }

  h1,
  h2,
  h3,
  h4 {
    @apply font-serif;
    font-optical-sizing: auto;
  }
}

@layer components {
  /* ——— Editorial micro-label ——— */
  .micro-label {
    @apply text-[11px] font-semibold uppercase tracking-[0.28em];
  }

  /* ——— Buttons ——— */
  .btn {
    @apply relative inline-flex cursor-pointer items-center justify-center gap-2.5 overflow-hidden rounded-full px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.16em] transition-all duration-500;
    transition-timing-function: var(--ease-elegant);
  }
  .btn .btn-wipe {
    @apply pointer-events-none absolute inset-0;
    transform: translateX(-101%);
    transition: transform 0.6s var(--ease-elegant);
  }
  .btn:hover .btn-wipe {
    transform: translateX(0);
  }
  .btn .btn-icon {
    transition: transform 0.5s var(--ease-elegant);
  }
  .btn:hover .btn-icon {
    transform: translateX(4px);
  }

  .btn-primary {
    @apply bg-primary text-white;
  }
  .btn-primary .btn-wipe {
    background: #00B4D8;
  }
  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 38px -12px rgba(0, 130, 155, 0.55);
  }

  .btn-dark {
    @apply bg-dark text-surface;
  }
  .btn-dark .btn-wipe {
    background: #1E293B;
  }
  .btn-dark:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 40px -14px rgba(15, 23, 42, 0.5);
  }

  .btn-outline-light {
    @apply text-surface;
    box-shadow: inset 0 0 0 1px rgba(241, 245, 249, 0.35);
  }
  .btn-outline-light .btn-wipe {
    background: rgba(241, 245, 249, 0.12);
  }
  .btn-outline-light:hover {
    transform: translateY(-2px);
    box-shadow:
      inset 0 0 0 1px rgba(241, 245, 249, 0.6),
      0 14px 30px -14px rgba(0, 0, 0, 0.5);
  }

  .btn-outline-dark {
    @apply text-dark;
    box-shadow: inset 0 0 0 1px rgba(15, 23, 42, 0.28);
  }
  .btn-outline-dark .btn-wipe {
    background: rgba(15, 23, 42, 0.06);
  }
  .btn-outline-dark:hover {
    transform: translateY(-2px);
    box-shadow:
      inset 0 0 0 1px rgba(15, 23, 42, 0.55),
      0 14px 30px -16px rgba(15, 23, 42, 0.35);
  }

  /* ——— Nav link: underline draws in from center ——— */
  .nav-link {
    @apply relative pb-1 text-[11px] font-semibold uppercase tracking-[0.22em] transition-colors duration-300;
  }
  .nav-link::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -2px;
    height: 1px;
    width: 100%;
    background: #00829B;
    transform: translateX(-50%) scaleX(0);
    transform-origin: center;
    transition: transform 0.5s var(--ease-elegant);
  }
  .nav-link:hover::after,
  .nav-link.is-active::after {
    transform: translateX(-50%) scaleX(1);
  }

  /* ——— Inline text link: underline draws in from left ——— */
  .link-draw {
    @apply relative inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em];
  }
  .link-draw::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    height: 1px;
    width: 100%;
    background: currentColor;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.55s var(--ease-elegant);
  }
  .link-draw:hover::after {
    transform: scaleX(1);
  }

  /* ——— Subtle grain for dark surfaces ——— */
  .grain::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0.05;
    mix-blend-mode: overlay;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  }

  /* ——— Duotone treatment to unify mismatched imagery ——— */
  .duotone img {
    filter: sepia(0.1) saturate(1.2) contrast(1.1) brightness(0.98) hue-rotate(180deg);
  }
  .duotone::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(
      160deg,
      rgba(0, 130, 155, 0.16) 0%,
      rgba(15, 23, 42, 0.28) 100%
    );
    mix-blend-mode: multiply;
  }
}
`;
fs.writeFileSync(globalsCssPath, newGlobalsCss);
console.log('globals.css updated');

// 2. Find and replace tailwind classes in all files in src/ directory recursively.
function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      // Don't touch global css or node_modules obviously (already filtered by src and .tsx/.ts)
      let content = fs.readFileSync(fullPath, 'utf8');

      // Use word boundaries \b to avoid replacing substrings inside normal words
      content = content.replace(/\bgold-soft\b/g, 'primary-soft');
      content = content.replace(/\bgold\b/g, 'primary');

      content = content.replace(/\bink-2\b/g, 'dark-2');
      content = content.replace(/\bink-3\b/g, 'dark-3');
      content = content.replace(/\bink\b/g, 'dark');

      content = content.replace(/\bparchment-2\b/g, 'light-2');
      content = content.replace(/\bparchment\b/g, 'light');

      content = content.replace(/\bcream\b/g, 'surface');

      content = content.replace(/\bmist-light\b/g, 'muted-light');
      content = content.replace(/\bmist\b/g, 'muted');

      fs.writeFileSync(fullPath, content);
      console.log('Updated', fullPath);
    }
  }
}

replaceInDir(path.join(__dirname, 'src'));
console.log('All TS/TSX files updated successfully.');
