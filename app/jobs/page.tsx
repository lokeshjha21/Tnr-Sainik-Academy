import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/app/_components/ui/SectionHeading";
import OrgEmblem from "@/app/_components/ui/OrgEmblem";
import { jobs } from "@/app/_lib/data/jobs";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Government Exams | Defence, Police, SSC & Railway Preparation",
  description:
    "TNR Sainik Academy prepares you for all major government exams — Indian Army, Navy, Air Force, NDA, Telangana Police, SSC GD, CRPF, BSF, RRB Group D and more in Hyderabad.",
};

const categories = [
  { id: "defence", label: "Defence Forces" },
  { id: "police", label: "Police & CAPF" },
  { id: "ssc", label: "SSC Exams" },
  { id: "railway", label: "Railway Exams" },
  { id: "state", label: "State Government" },
];

export default function JobsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#142315] py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#F4B51C] text-xs font-bold tracking-[0.25em] uppercase mb-3">
            Your Target. Our Preparation.
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold text-white uppercase mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
          >
            Government Exams
          </h1>
          <p className="text-white/65 max-w-2xl mx-auto text-base">
            Comprehensive exam preparation — from eligibility and selection stages to physical standards and written exam strategy.
          </p>
        </div>
      </section>

      {/* Categories + Jobs */}
      <section className="bg-[#FCFBF7] py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          {categories.map((cat) => {
            const catJobs = jobs.filter((j) => j.category === cat.id);
            if (catJobs.length === 0) return null;
            return (
              <div key={cat.id}>
                <SectionHeading title={cat.label} centered={false} />
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {catJobs.map((job) => (
                    <div
                      key={job.slug}
                      className="bg-white rounded-md border border-[#142315]/10 p-5 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group"
                    >
                      {/* Real Official Emblem */}
                      <div className="w-14 h-14 mb-3 flex items-center justify-center">
                        <OrgEmblem slug={job.slug} size={54} />
                      </div>

                      <h3
                        className="text-[#142315] font-extrabold text-xs uppercase mb-2 leading-tight min-h-[28px] flex items-center justify-center tracking-wide"
                        style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)", fontSize: "14px" }}
                      >
                        {job.title}
                      </h3>
                      <p className="text-[#677064] text-[11px] leading-relaxed mb-4 flex-1">
                        {job.description.substring(0, 65)}...
                      </p>
                      <Link
                        href={`/jobs/${job.slug}`}
                        className="w-full text-center text-[10px] font-extrabold tracking-widest uppercase bg-[#142315] text-[#F4B51C] py-2 rounded transition-all group-hover:bg-[#263C20] group-hover:text-white border border-[#142315]"
                        style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)", fontSize: "12px" }}
                      >
                        Learn More
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="max-w-7xl mx-auto mt-16">
          <div className="bg-[#142315] rounded-md p-10 text-center shadow-lg border border-white/10">
            <h2
              className="text-3xl md:text-4xl font-extrabold text-white uppercase mb-3 tracking-wide"
              style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
            >
              Ready To Start Your Preparation?
            </h2>
            <p className="text-white/65 mb-6 max-w-xl mx-auto text-sm">
              TNR Sainik Academy prepares you for your dream government career with disciplined coaching and daily physical training.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/admission-enquiry"
                className="inline-flex items-center gap-2 bg-[#F4B51C] hover:bg-[#D89A0D] text-[#142315] font-extrabold text-xs tracking-widest uppercase px-7 py-3 rounded transition-colors"
                style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)", fontSize: "14px" }}
              >
                ADMISSION ENQUIRY
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-extrabold text-xs tracking-widest uppercase px-7 py-3 rounded hover:border-white transition-colors"
                style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)", fontSize: "14px" }}
              >
                VIEW COURSES
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
