import { cn } from "@/app/_lib/cn";
import { Star } from "lucide-react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-10", centered && "text-center", className)}>
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide uppercase mb-3",
          light ? "text-white" : "text-[#142315]"
        )}
        style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
      >
        {title}
      </h2>
      <div className={cn("flex items-center gap-3 mb-4", centered && "justify-center")}>
        <div className={cn("h-px flex-1 max-w-24", light ? "bg-white/20" : "bg-[#142315]/15")} />
        <div className="flex items-center gap-1">
          <Star size={8} className="fill-[#F4B51C] text-[#F4B51C]" />
          <Star size={12} className="fill-[#F4B51C] text-[#F4B51C]" />
          <Star size={8} className="fill-[#F4B51C] text-[#F4B51C]" />
        </div>
        <div className={cn("h-px flex-1 max-w-24", light ? "bg-white/20" : "bg-[#142315]/15")} />
      </div>
      {subtitle && (
        <p className={cn("text-base md:text-lg max-w-2xl", centered && "mx-auto", light ? "text-white/70" : "text-[#677064]")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
