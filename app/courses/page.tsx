import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/app/_components/ui/SectionHeading";
import { courses } from "@/app/_lib/data/courses";
import { Clock, ArrowRight, BookOpen, Dumbbell, BookText } from "lucide-react";

export const metadata: Metadata = {
  title: "Courses | Defence & Government Exam Coaching",
  description:
    "Explore TNR Sainik Academy's comprehensive courses — Indian Army, Navy, Air Force, NDA, Police, SSC, Railway preparation with expert faculty and daily physical training in Hyderabad.",
};

const categories = [
  { id: "all", label: "All Courses" },
  { id: "defence", label: "Defence" },
  { id: "police", label: "Police" },
  { id: "ssc", label: "SSC" },
  { id: "railway", label: "Railways" },
  { id: "state", label: "State Govt" },
  { id: "physical", label: "Physical Training" },
] as const;

const trainingTypeIcon = {
  "Physical + Written": Dumbbell,
  "Written Only": BookOpen,
  "Physical Only": BookText,
};

const categoryColor: Record<string, string> = {
  defence: "#142315",
  police: "#8b0000",
  ssc: "#154360",
  railway: "#922b21",
  state: "#5b4a00",
  physical: "#2e5e1e",
};

export default function CoursesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-[#142315] py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#F4B51C] text-xs font-bold tracking-[0.25em] uppercase mb-3">
            What We Teach
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold text-white uppercase mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
          >
            Our Courses
          </h1>
          <p className="text-white/65 max-w-2xl mx-auto text-base">
            Comprehensive preparation programmes for defence forces, police, SSC, Railway and state government examinations.
          </p>
        </div>
      </section>

      {/* Hero image strip */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <Image
          src="/images/classroom.jpg"
          alt="TNR Academy Courses"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#142315]/50" />
      </div>

      {/* Courses Grid */}
      <section className="bg-[#F7F3E9] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="All Preparation Programmes"
            subtitle="Choose your path. We'll prepare you for it."
          />

          {/* Category badges (static display — filtering via JS would need client component) */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <span
                key={cat.id}
                className="px-4 py-1.5 text-xs font-bold tracking-widest rounded border border-[#142315]/20 text-[#142315] bg-white cursor-default"
              >
                {cat.label}
              </span>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => {
              const TrainingIcon = trainingTypeIcon[course.trainingType];
              const catColor = categoryColor[course.category] || "#142315";
              return (
                <div
                  key={course.slug}
                  className="bg-white rounded border border-[#142315]/10 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
                >
                  {/* Category badge */}
                  <div
                    className="px-4 py-2 text-white text-[10px] font-bold tracking-widest uppercase flex items-center gap-2"
                    style={{ backgroundColor: catColor }}
                  >
                    <TrainingIcon size={12} />
                    {course.trainingType}
                  </div>

                  <div className="p-5 flex-1 flex flex-col">
                    <h2
                      className="text-xl font-bold text-[#142315] mb-2"
                      style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
                    >
                      {course.title}
                    </h2>
                    <p className="text-[#677064] text-sm leading-relaxed mb-4 flex-1">
                      {course.description}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-[#677064] mb-5">
                      <Clock size={12} className="text-[#F4B51C]" />
                      <span>Duration: <strong className="text-[#182017]">{course.duration}</strong></span>
                    </div>

                    <div className="flex gap-2 mt-auto">
                      <Link
                        href={`/courses/${course.slug}`}
                        className="flex-1 text-center text-xs font-bold tracking-widest py-2.5 bg-[#142315] text-white rounded hover:bg-[#263C20] transition-colors"
                      >
                        VIEW COURSE
                      </Link>
                      <Link
                        href={`/admission-enquiry?course=${encodeURIComponent(course.title)}`}
                        className="flex-1 text-center text-xs font-bold tracking-widest py-2.5 border border-[#F4B51C] text-[#142315] rounded hover:bg-[#F4B51C] transition-colors"
                      >
                        ENQUIRE NOW
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-14 text-center bg-[#142315] rounded p-10">
            <h2
              className="text-3xl font-bold text-white uppercase mb-3"
              style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
            >
              Not Sure Which Course Is Right For You?
            </h2>
            <p className="text-white/65 mb-6">Talk to our counsellors and get guidance on the best preparation path for your goal.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/admission-enquiry"
                className="inline-flex items-center gap-2 bg-[#F4B51C] hover:bg-[#D89A0D] text-[#142315] font-bold text-sm tracking-widest px-7 py-3 rounded transition-colors"
              >
                ENQUIRY FORM
                <ArrowRight size={14} />
              </Link>
              <a
                href="tel:8886779779"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-bold text-sm tracking-widest px-7 py-3 rounded hover:border-white transition-colors"
              >
                CALL US
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
