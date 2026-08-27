import Link from "next/link";
import { Home, BookOpen, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-[#F7F3E9] px-4 py-20">
      <div className="max-w-lg mx-auto text-center">
        <div
          className="text-[140px] font-bold text-[#142315] leading-none mb-4"
          style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
        >
          404
        </div>
        <h1
          className="text-3xl font-bold text-[#142315] uppercase mb-3"
          style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
        >
          Page Not Found
        </h1>
        <p className="text-[#677064] mb-8">
          The page you are looking for doesn&apos;t exist or has been moved. Navigate back to explore our courses and training programmes.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#F4B51C] text-[#142315] font-bold text-sm tracking-widest px-6 py-3 rounded hover:bg-[#D89A0D] transition-colors"
          >
            <Home size={15} />
            BACK TO HOME
          </Link>
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 border-2 border-[#142315]/20 text-[#142315] font-bold text-sm tracking-widest px-6 py-3 rounded hover:border-[#142315] transition-colors"
          >
            <BookOpen size={15} />
            VIEW COURSES
          </Link>
          <a
            href="tel:8886779779"
            className="inline-flex items-center gap-2 bg-[#142315] text-[#F4B51C] font-bold text-sm tracking-widest px-6 py-3 rounded hover:bg-[#263C20] transition-colors"
          >
            <Phone size={15} />
            CALL US
          </a>
        </div>
      </div>
    </section>
  );
}
