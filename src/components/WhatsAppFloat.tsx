"use client";

import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/content/courses";

export function WhatsAppFloat() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Viren on WhatsApp"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="group animate-wa-breathe fixed bottom-6 right-6 z-50 flex items-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-500 hover:bg-[#128c7e]"
    >
      <span className="flex h-14 w-14 shrink-0 items-center justify-center">
        {/* WhatsApp glyph in brand tones */}
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white transition-transform duration-500 group-hover:scale-110" aria-hidden="true">
          <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.94L2 22l5.2-1.5A9.9 9.9 0 1 0 12.04 2Zm0 18.06a8.16 8.16 0 0 1-4.16-1.14l-.3-.18-3.09.89.83-3.01-.2-.31a8.17 8.17 0 1 1 6.92 3.75Zm4.48-6.12c-.25-.13-1.45-.71-1.68-.79s-.4-.12-.56.12-.64.8-.78.96-.29.19-.53.06a6.65 6.65 0 0 1-3.3-2.88c-.24-.42.24-.39.69-1.3a.45.45 0 0 0-.02-.43c-.06-.12-.56-1.34-.76-1.84s-.4-.42-.56-.43h-.48a.92.92 0 0 0-.66.31 2.77 2.77 0 0 0-.86 2.05 4.8 4.8 0 0 0 1 2.55 11 11 0 0 0 4.23 3.74c.58.25 1.03.4 1.38.52a3.32 3.32 0 0 0 1.52.1 2.49 2.49 0 0 0 1.63-1.15 2 2 0 0 0 .14-1.15c-.06-.1-.22-.16-.46-.29Z" />
        </svg>
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.18em] text-white opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:max-w-44 group-hover:pr-6 group-hover:opacity-100">
        Chat with Viren
      </span>
    </motion.a>
  );
}
