import Link from "next/link";
import SectionHeading from "@/app/_components/ui/SectionHeading";
import OrgEmblem from "@/app/_components/ui/OrgEmblem";
import { jobs } from "@/app/_lib/data/jobs";
import { ArrowRight, Bell } from "lucide-react";

export default function JobsSection() {
  const displayJobs = jobs.slice(0, 18);

  return (
    <section className="bg-[#FCFBF7] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Government Jobs We Prepare For"
          subtitle="From defence forces to state government — TNR trains you for the career you deserve."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-3.5">
          {displayJobs.map((job) => (
            <div
              key={job.slug}
              className="bg-white rounded-md border border-[#142315]/10 p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
            >
              {/* Authentic Emblem */}
              <div className="w-14 h-14 mb-3 flex items-center justify-center">
                <OrgEmblem slug={job.slug} size={54} />
              </div>

              {/* Title */}
              <p
                className="text-[#142315] font-extrabold text-xs uppercase mb-3 leading-tight min-h-[28px] flex items-center justify-center tracking-wide"
                style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)", fontSize: "13px" }}
              >
                {job.shortTitle}
              </p>

              {/* Button */}
              <Link
                href={`/jobs/${job.slug}`}
                className="w-full text-center text-[10px] font-extrabold tracking-widest uppercase bg-[#142315] text-[#F4B51C] py-1.5 rounded transition-all group-hover:bg-[#263C20] group-hover:text-white border border-[#142315]"
              >
                View Details
              </Link>
            </div>
          ))}

          {/* 18th/19th card: More Job Updates */}
          <div className="bg-[#142315] rounded-md border border-[#F4B51C]/25 p-4 flex flex-col items-center justify-center text-center shadow-sm">
            <Bell size={24} className="text-[#F4B51C] mb-2 animate-bounce" />
            <p
              className="text-[#F4B51C] font-extrabold text-xs uppercase tracking-wider mb-1"
              style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)", fontSize: "14px" }}
            >
              More Job Updates
            </p>
            <p className="text-white/70 text-[10px] mb-3 leading-snug">
              Stay updated with latest notifications
            </p>
            <Link
              href="/jobs"
              className="inline-flex items-center gap-1 bg-[#F4B51C] hover:bg-[#D89A0D] text-[#142315] text-[10px] font-extrabold tracking-wider uppercase py-1.5 px-3 rounded transition-colors"
            >
              VIEW ALL JOBS
              <ArrowRight size={10} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
