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
} from "lucide-react";
import SectionHeading from "@/app/_components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Training Programme",
  description:
    "TNR Sainik Academy's comprehensive training programme — daily physical fitness, running, strength, drill, yoga, classroom coaching, mock tests and more. Located at Bahadurpally, Hyderabad.",
};

/* ─── Data ─────────────────────────────────────────────────── */

const programs = [
  {
    icon: Zap,
    title: "Running & Endurance",
    description:
      "Build the stamina required for 1.6 km, 5 km and 1000 m runs across all exams.",
  },
  {
    icon: Dumbbell,
    title: "Strength Training",
    description:
      "Pull-ups, push-ups, squats and functional strength for physical tests.",
  },
  {
    icon: Users,
    title: "Drill & Discipline",
    description:
      "Parade, foot drill and discipline training — a key part of every defence exam.",
  },
  {
    icon: Activity,
    title: "Yoga & Flexibility",
    description:
      "Daily yoga and flexibility training to prevent injury and improve performance.",
  },
  {
    icon: Mountain,
    title: "Outdoor Training",
    description:
      "Outdoor obstacle activities and field exercises to build mental toughness.",
  },
  {
    icon: BookOpen,
    title: "Written Exam Prep",
    description:
      "Subject-wise classroom coaching for GK, Maths, Science, English and Reasoning.",
  },
  {
    icon: ClipboardCheck,
    title: "Mock Tests",
    description:
      "Regular full-length mock exams with detailed performance analysis.",
  },
  {
    icon: GraduationCap,
    title: "Classroom Sessions",
    description:
      "Interactive classroom learning with experienced subject faculty.",
  },
];

const routine = [
  { time: "5:30 AM", activity: "Reporting & Roll Call" },
  { time: "5:45 AM", activity: "Warm Up & Stretching" },
  { time: "6:00 AM", activity: "Running Programme" },
  { time: "6:45 AM", activity: "Strength Training" },
  { time: "7:30 AM", activity: "Drill & Parade Practice" },
  { time: "8:00 AM", activity: "Break" },
  { time: "9:00 AM", activity: "Mathematics Class" },
  { time: "10:00 AM", activity: "GK / Science" },
  { time: "11:00 AM", activity: "English Class" },
  { time: "12:00 PM", activity: "Lunch Break" },
  { time: "2:00 PM", activity: "Mock Test / Current Affairs" },
  { time: "3:00 PM", activity: "Doubt Clearing Session" },
];

/* ─── Page ──────────────────────────────────────────────────── */

export default function TrainingPage() {
  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/physical-training.jpg"
            alt="TNR Sainik Academy physical training session"
            fill
            priority
            className="object-cover object-center"
            quality={90}
          />
          <div className="absolute inset-0 bg-[#0a1209]/80" />
        </div>

        <div className="relative z-10 text-center px-4 py-20">
          <p className="text-[#F4B51C] text-xs font-bold tracking-[0.25em] uppercase mb-4">
            Training Programme
          </p>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase leading-[1.08] tracking-wide mb-6"
            style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
          >
            Train Your Body.
            <br />
            Strengthen Your Mind.
            <br />
            <span className="text-[#F4B51C]">Prepare To Serve.</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl font-medium max-w-xl mx-auto">
            A structured daily programme covering physical fitness, academic
            coaching, and exam strategy — all under one roof.
          </p>
        </div>
      </section>

      {/* ── 2. TRAINING PROGRAMS ────────────────────────────── */}
      <section className="bg-[#F7F3E9] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Training Programmes"
            subtitle="Eight integrated training modules designed to prepare you for every aspect of defence and government exam selection."
            className="mb-10"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {programs.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white border border-[#142315]/10 rounded p-6 hover:border-[#F4B51C]/40 hover:shadow-sm transition-all duration-200 group"
              >
                <div className="w-11 h-11 rounded bg-[#F4B51C]/10 flex items-center justify-center mb-4 group-hover:bg-[#F4B51C]/20 transition-colors">
                  <Icon size={22} className="text-[#F4B51C]" />
                </div>
                <h3
                  className="text-[#142315] font-bold text-base uppercase tracking-wide mb-2 leading-snug"
                  style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
                >
                  {title}
                </h3>
                <p className="text-[#677064] text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. DAILY ROUTINE ────────────────────────────────── */}
      <section className="bg-[#142315] py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <SectionHeading
            title="Daily Routine"
            subtitle="A disciplined timetable that mirrors real defence life — from 5:30 AM roll call to evening doubt sessions."
            light
            className="mb-12"
          />

          <div className="relative border-l-2 border-[#F4B51C]/30 ml-[88px]">
            <ol className="space-y-0">
              {routine.map(({ time, activity }, index) => (
                <li
                  key={index}
                  className="flex items-start py-3 relative"
                >
                  {/* Time — positioned to the left of the border */}
                  <span
                    className="absolute right-full pr-4 text-[#F4B51C] font-bold text-sm shrink-0 mt-0.5 leading-snug whitespace-nowrap"
                    style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
                  >
                    {time}
                  </span>
                  {/* Dot on the line */}
                  <span className="absolute -left-[7px] top-[15px] w-3 h-3 rounded-full bg-[#F4B51C] border-2 border-[#142315] shrink-0" />
                  {/* Activity */}
                  <p className="text-white/85 text-base leading-snug pl-6">
                    {activity}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── 4. CTA ──────────────────────────────────────────── */}
      <section className="bg-[#FCFBF7] py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <SectionHeading
            title="Begin Your Physical Transformation Today"
            className="mb-4"
          />
          <p className="text-[#677064] text-base md:text-lg mb-8">
            Join TNR Sainik Academy and experience a structured physical and
            academic programme that has helped over 5000 students in Telangana
            realise their dream of serving the nation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/admission-enquiry"
              className="inline-flex items-center gap-2 bg-[#F4B51C] hover:bg-[#D89A0D] text-[#142315] font-bold text-sm tracking-widest px-8 py-3.5 rounded transition-colors"
            >
              ADMISSION ENQUIRY
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-[#142315]/40 hover:border-[#142315] text-[#142315] font-bold text-sm tracking-widest px-8 py-3.5 rounded transition-colors"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
