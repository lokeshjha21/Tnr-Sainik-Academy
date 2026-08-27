import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/app/_components/ui/SectionHeading";
import { Trophy, ArrowRight, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Results & Success Stories | Selections & Achievements",
  description:
    "TNR Sainik Academy success stories — students selected in Indian Army, Navy, Air Force, Police, SSC and other government services. 1000+ selections since 2013.",
};

// Placeholder data — clearly marked for replacement
const placeholderResults = [
  { name: "Rahul Kumar", exam: "Indian Army — Soldier GD", year: "2024", location: "Karimnagar" },
  { name: "Anil Reddy", exam: "SSC GD — CRPF", year: "2024", location: "Hyderabad" },
  { name: "Suresh Yadav", exam: "Telangana Police — Constable", year: "2023", location: "Warangal" },
  { name: "Pradeep Singh", exam: "Indian Navy — SSR", year: "2023", location: "Nizamabad" },
  { name: "Vinod Babu", exam: "Indian Air Force — Group Y", year: "2023", location: "Medak" },
  { name: "Ramesh Naik", exam: "RRB Group D", year: "2023", location: "Hyderabad" },
];


export default function ResultsPage() {
  return (
    <>
  

      {/* Selected Students */}
      <section className="bg-[#F7F3E9] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Selected Students"
            subtitle="These students trusted TNR and achieved their dream government career."
          />

          <div className="bg-amber-50 border border-amber-200 rounded p-4 mb-8 text-amber-800 text-sm text-center">
            * The following are sample entries. Real student data and photographs will be updated with permission.
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {placeholderResults.map((student, i) => (
              <div
                key={i}
                className="bg-white border border-[#142315]/10 rounded p-5 text-center hover:shadow-md transition-shadow"
              >
                {/* Avatar placeholder */}
                <div className="w-16 h-16 rounded-full bg-[#142315]/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#142315]/40 font-bold text-xl" style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}>
                    {student.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-[#142315] font-bold text-sm mb-1">{student.name}</h3>
                <p className="text-[#F4B51C] text-xs font-bold tracking-wide mb-1">{student.exam}</p>
                <p className="text-[#677064] text-[10px]">{student.location} · {student.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#142315] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="What Students Say" light />
          <div className="bg-[#263C20]/50 border border-white/10 rounded p-6 mb-6 text-center text-white/50 text-sm italic">
            * Student testimonials will be added here with their permission.
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded p-6">
                <Quote size={24} className="text-[#F4B51C] mb-3 opacity-50" />
                <p className="text-white/50 text-sm italic leading-relaxed mb-4">
                  &quot;[TODO: Real student testimonial will be added here]&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10" />
                  <div>
                    <p className="text-white/50 text-xs font-bold">Student Name</p>
                    <p className="text-[#F4B51C]/50 text-[10px]">Selected in [Exam] · 202X</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F7F3E9] py-16 px-4 text-center">
        <h2
          className="text-4xl md:text-5xl font-bold text-[#142315] uppercase mb-4"
          style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
        >
          Your Success Story Could Be Next
        </h2>
        <p className="text-[#677064] max-w-lg mx-auto mb-8">
          Join TNR Sainik Academy and begin your journey toward a proud government career.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/admission-enquiry"
            className="inline-flex items-center gap-2 bg-[#F4B51C] hover:bg-[#D89A0D] text-[#142315] font-bold text-sm tracking-widest px-8 py-3.5 rounded transition-colors"
          >
            JOIN TNR TODAY
            <ArrowRight size={14} />
          </Link>
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 border-2 border-[#142315]/30 text-[#142315] font-bold text-sm tracking-widest px-8 py-3.5 rounded hover:border-[#142315] transition-colors"
          >
            EXPLORE COURSES
          </Link>
        </div>
      </section>
    </>
  );
}
