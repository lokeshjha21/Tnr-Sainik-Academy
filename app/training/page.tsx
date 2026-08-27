import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Zap,
  Dumbbell,
  Users,
  Activity,
  Mountain,
  BookOpen,
  ClipboardCheck,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import SectionHeading from "@/app/_components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Training Programme | TNR Sainik Academy",
  description:
    "TNR Sainik Academy's comprehensive training programme — daily physical fitness, running, strength, drill, yoga, classroom coaching, mock tests and more at Bahadurpally, Hyderabad.",
};

const realTrainingPhotos = [
  { src: "/images/training/training-1.jpeg", alt: "Ground running and physical conditioning drill" },
  { src: "/images/training/training-2.jpeg", alt: "Cadets morning endurance training" },
  { src: "/images/training/training-3.jpeg", alt: "TNR physical fitness obstacle drills" },
  { src: "/images/training/training-4.jpeg", alt: "Discipline and parade formation training" },
  { src: "/images/training/training-5.jpeg", alt: "Cadets physical measurement & fitness testing" },
];

const programs = [
  {
    icon: Zap,
    title: "Running & Endurance",
    description: "Build the stamina required for 1.6 km, 5 km and 1000 m runs across all defence and police recruitment exams.",
  },
  {
    icon: Dumbbell,
    title: "Strength Training",
    description: "Pull-ups, push-ups, squats, rope climbing and functional strength for physical efficiency tests.",
  },
  {
    icon: Users,
    title: "Drill & Discipline",
    description: "Parade ground drill, turn-out, and military discipline training as a vital component of armed forces selection.",
  },
  {
    icon: Activity,
    title: "Yoga & Flexibility",
    description: "Daily guided yoga and flexibility sessions to prevent sports injuries and build endurance.",
  },
  {
    icon: Mountain,
    title: "Outdoor Training",
    description: "Cross-country runs, ditch crossing, high jump, long jump and field obstacle exercises.",
  },
  {
    icon: BookOpen,
    title: "Written Exam Prep",
    description: "Subject-wise classroom coaching for GK, Mathematics, Reasoning, General Science, and English.",
  },
  {
    icon: ClipboardCheck,
    title: "Regular Mock Tests",
    description: "OMR-based and computer-based mock exams conducted with detailed rank and progress reports.",
  },
  {
    icon: GraduationCap,
    title: "Classroom Sessions",
    description: "Dedicated full-day classes with experienced faculty and printed bilingual study materials.",
  },
];

const routine = [
  { time: "5:30 AM", activity: "Reporting & Roll Call on Ground" },
  { time: "5:45 AM", activity: "Warm Up, Stretching & Joint Mobility" },
  { time: "6:00 AM", activity: "1.6 KM / 5 KM Running Programme" },
  { time: "6:45 AM", activity: "Strength Training (Pull-ups, Dips, Squats)" },
  { time: "7:30 AM", activity: "Drill, Parade Practice & Cool Down" },
  { time: "8:00 AM", activity: "Breakfast & Rest Break" },
  { time: "9:00 AM", activity: "Mathematics & Quantitative Aptitude" },
  { time: "10:00 AM", activity: "General Knowledge & General Science" },
  { time: "11:00 AM", activity: "Reasoning & English Class" },
  { time: "12:30 PM", activity: "Lunch Break" },
  { time: "2:00 PM", activity: "Daily Mock Test / Speed Test" },
  { time: "3:30 PM", activity: "Doubt Clearing & One-on-One Mentoring" },
];

export default function TrainingPage() {
  return (
    <>
      {/* Hero with Real Training Photo Background */}
      <section className="relative min-h-[62vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/training/training-1.jpeg"
            alt="TNR Sainik Academy Real Ground Physical Training"
            fill
            priority
            className="object-cover object-center"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1a0f] via-[#0e1a0f]/80 to-[#0e1a0f]/60" />
        </div>

        <div className="relative z-10 text-center px-4 py-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#F4B51C]/20 border border-[#F4B51C]/40 text-[#F4B51C] text-xs font-bold tracking-[0.2em] uppercase px-3.5 py-1.5 rounded mb-4">
            <ShieldCheck size={14} />
            <span>Real Academy Ground Training</span>
          </div>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white uppercase leading-[1.08] tracking-wide mb-6"
            style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
          >
            Train Your Body.
            <br />
            Strengthen Your Mind.
            <br />
            <span className="text-[#F4B51C]">Prepare To Serve.</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Experience our ground-tested physical fitness regimen and rigorous classroom coaching at Bahadurpally, Hyderabad.
          </p>
        </div>
      </section>

      {/* Real Training Ground Gallery Showcase */}
      <section className="bg-[#FCFBF7] py-16 px-4 border-b border-[#142315]/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Ground Training In Action"
            subtitle="Actual training photos from TNR Sainik Academy's physical drills and ground sessions."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {realTrainingPhotos.map((photo, i) => (
              <div
                key={i}
                className={`relative rounded-xl overflow-hidden shadow-md border border-[#142315]/10 group ${
                  i === 0 ? "sm:col-span-2 lg:col-span-2 h-72 sm:h-96" : "h-72"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#142315]/90 via-[#142315]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                  <p className="text-white text-sm font-bold">{photo.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programmes */}
      <section className="bg-[#F7F3E9] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Training Modules"
            subtitle="Eight integrated training modules designed to prepare you for every aspect of defence and government exam selection."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {programs.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white border border-[#142315]/10 rounded-xl p-6 hover:border-[#F4B51C]/50 hover:shadow-md transition-all duration-200 group flex flex-col"
              >
                <div className="w-12 h-12 rounded-lg bg-[#142315] text-[#F4B51C] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <h3
                  className="text-[#142315] font-extrabold text-lg uppercase tracking-wide mb-2 leading-snug"
                  style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
                >
                  {title}
                </h3>
                <p className="text-[#677064] text-xs leading-relaxed flex-1">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Routine */}
      <section className="bg-[#142315] py-16 px-4 text-white">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            title="Daily Routine & Timetable"
            subtitle="A disciplined schedule that mirrors real defence academy life, from 5:30 AM roll call to evening doubt clearing."
            light
          />

          <div className="relative border-l-2 border-[#F4B51C]/40 ml-12 sm:ml-28 space-y-5">
            {routine.map(({ time, activity }, index) => (
              <div key={index} className="relative flex items-start">
                <span
                  className="absolute right-full pr-5 text-[#F4B51C] font-extrabold text-xs sm:text-sm shrink-0 mt-0.5 leading-snug whitespace-nowrap"
                  style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
                >
                  {time}
                </span>
                <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#F4B51C] border-2 border-[#142315] shrink-0" />
                <p className="text-white/90 text-sm sm:text-base leading-snug pl-6 font-medium">
                  {activity}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FCFBF7] py-16 px-4 border-t border-[#142315]/10">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            title="Begin Your Physical Transformation Today"
            className="mb-4"
          />
          <p className="text-[#677064] text-base md:text-lg mb-8">
            Join TNR Sainik Academy and experience the proven physical and academic coaching that has produced 1000+ selections across Telangana and Andhra Pradesh.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/admission-enquiry"
              className="inline-flex items-center gap-2 bg-[#F4B51C] hover:bg-[#D89A0D] text-[#142315] font-extrabold text-xs tracking-widest uppercase px-8 py-3.5 rounded-lg transition-colors shadow-md"
              style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)", fontSize: "14px" }}
            >
              ADMISSION ENQUIRY
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-[#142315] hover:bg-[#142315] hover:text-white text-[#142315] font-extrabold text-xs tracking-widest uppercase px-8 py-3.5 rounded-lg transition-colors"
              style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)", fontSize: "14px" }}
            >
              CONTACT ACADEMY
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
