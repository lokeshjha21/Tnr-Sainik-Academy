"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/app/_lib/cn";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  light?: boolean;
}

export default function Accordion({ items, light = false }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            "rounded border transition-colors",
            light
              ? "border-white/10 bg-white/5"
              : "border-[#142315]/10 bg-white"
          )}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className={cn(
              "w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-sm gap-4",
              light ? "text-white" : "text-[#142315]"
            )}
            aria-expanded={openIndex === index}
          >
            <span>{item.question}</span>
            <ChevronDown
              size={18}
              className={cn(
                "shrink-0 transition-transform duration-200 text-[#F4B51C]",
                openIndex === index && "rotate-180"
              )}
            />
          </button>
          <div
            className={cn(
              "overflow-hidden transition-all duration-200",
              openIndex === index ? "max-h-96 pb-4" : "max-h-0"
            )}
          >
            <p className={cn("px-5 text-sm leading-relaxed", light ? "text-white/70" : "text-[#677064]")}>
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
