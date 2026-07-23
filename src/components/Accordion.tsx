"use client";

import { Plus } from "lucide-react";
import { useState, type ReactNode } from "react";

export interface AccordionEntry {
  id: string;
  header: ReactNode;
  meta?: string;
  body: ReactNode;
}

/**
 * Quiet editorial accordion — single-open, hairline dividers,
 * smooth grid-rows height animation (no springs).
 */
export function Accordion({
  items,
  defaultOpen,
  onDark = false,
}: {
  items: AccordionEntry[];
  defaultOpen?: string;
  onDark?: boolean;
}) {
  const [open, setOpen] = useState<string | null>(defaultOpen ?? null);

  const hairline = onDark ? "border-cream/12" : "border-ink/12";
  const heading = onDark ? "text-cream" : "text-ink";
  const muted = onDark ? "text-cream/50" : "text-mist";
  const iconColor = onDark ? "text-gold" : "text-gold";

  return (
    <div className={`border-t ${hairline}`}>
      {items.map((item) => {
        const isOpen = open === item.id;
        return (
          <div key={item.id} className={`border-b ${hairline}`}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              className="group flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left lg:py-7"
            >
              <span className="flex items-baseline gap-5">
                <span
                  className={`font-serif text-lg font-medium tracking-[-0.01em] transition-colors duration-300 lg:text-[1.35rem] ${heading} ${
                    isOpen ? "" : "group-hover:text-gold"
                  }`}
                >
                  {item.header}
                </span>
                {item.meta && (
                  <span className={`hidden whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.18em] sm:block ${muted}`}>
                    {item.meta}
                  </span>
                )}
              </span>
              <Plus
                className={`h-5 w-5 shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${iconColor} ${
                  isOpen ? "rotate-45" : "group-hover:rotate-90"
                }`}
                strokeWidth={1.4}
              />
            </button>

            <div
              className={`grid transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className={`pb-7 pr-10 ${onDark ? "text-cream/70" : "text-mist"}`}>
                  {item.body}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
