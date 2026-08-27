import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Trophy } from "lucide-react";

export default function SuccessPreviewSection() {
  return (
    <section className="bg-[#142315] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image side */}
          <div className="relative h-72 md:h-80 rounded overflow-hidden order-2 md:order-1">
            <Image
              src="/images/about-hero.jpg"
              alt="TNR Academy Success Stories"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#142315]/60 to-transparent" />
          </div>

          {/* Content side */}
          <div className="order-1 md:order-2">
            <div className="flex items-center gap-3 mb-4">
              <Trophy size={28} className="text-[#F4B51C]" />
              <span className="text-[#F4B51C] text-sm font-bold tracking-[0.2em] uppercase">
                Success Stories
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold text-white uppercase leading-tight mb-4"
              style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
            >
              Our Students Are
              <br />
              <span className="text-[#F4B51C]">Our Pride.</span>
            </h2>
            <p className="text-white/65 text-sm leading-relaxed mb-8">
              Many of our students have achieved their dream of joining the Armed Forces and Government Services. Their success is our greatest achievement and motivation.
            </p>
            <Link
              href="/results"
              className="inline-flex items-center gap-2 bg-[#F4B51C] hover:bg-[#D89A0D] text-[#142315] font-bold text-sm tracking-widest px-7 py-3.5 rounded transition-all hover:gap-3"
            >
              VIEW RESULTS
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
