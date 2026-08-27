import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Eye,
  Shield,
  Star,
  Dumbbell,
  BookOpen,
  Award,
  Heart,
  Phone,
} from "lucide-react";
import SectionHeading from "@/app/_components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about TNR Sainik Academy Society — Telangana's premier defence coaching institute established in 2013 at Bahadurpally, Hyderabad. Over 5000 students trained for Army, Navy, Air Force, Police and SSC exams.",
};

/* ─── Data ─────────────────────────────────────────────────── */

const values = [
  {
    icon: Shield,
    title: "Discipline",
    description: "Military-grade routine instilled from day one.",
  },
  {
    icon: Star,
    title: "Integrity",
    description: "Honest, transparent coaching with no shortcuts.",
  },
  {
    icon: Dumbbell,
    title: "Fitness",
    description: "Daily physical training tailored to exam standards.",
  },
  {
    icon: BookOpen,
    title: "Knowledge",
    description: "Updated academic curriculum covering every subject.",
  },
  {
    icon: Award,
    title: "Leadership",
    description: "Building confident leaders ready to serve the nation.",
  },
  {
    icon: Heart,
    title: "Service",
    description: "A commitment to nation and community above all else.",
  },
];

const timeline = [
  { year: "2013", event: "Academy founded at Bahadurpally, Hyderabad." },
  { year: "2015", event: "First batch — multiple selections in Indian Army." },
  { year: "2017", event: "Expanded to Police and SSC coaching programmes." },
  { year: "2019", event: "500+ students successfully selected." },
  { year: "2021", event: "NDA preparation programme launched." },
  { year: "2023", event: "1000+ selections milestone achieved." },
  { year: "2024", event: "Celebrating 10+ years of excellence." },
];

const faculty = [
  { name: "Expert Instructor", role: "Defence & Physical Training" },
  { name: "Expert Instructor", role: "Defence & Physical Training" },
  { name: "Expert Instructor", role: "Defence & Physical Training" },
];

/* ─── Page ──────────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-hero.jpg"
            alt="TNR Sainik Academy students in training"
            fill
            priority
            className="object-cover object-center"
            quality={90}
          />
          <div className="absolute inset-0 bg-[#0a1209]/75" />
        </div>

        <div className="relative z-10 text-center px-4 py-20">
          <p className="text-[#F4B51C] text-xs font-bold tracking-[0.25em] uppercase mb-4">
            TNR Sainik Academy Society
          </p>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase leading-[1.08] tracking-wide mb-6 max-w-4xl mx-auto"
            style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
          >
            Building Discipline.{" "}
            <span className="text-[#F4B51C]">Creating Defenders.</span>{" "}
            Shaping Futures.
          </h1>
          <p className="text-white/70 text-lg md:text-xl font-medium">
            Established in 2013 at Bahadurpally, Hyderabad
          </p>
        </div>
      </section>

      {/* ── 2. WHO WE ARE ───────────────────────────────────── */}
      <section className="bg-[#F7F3E9] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — text */}
            <div>
              <SectionHeading
                title="Who We Are"
                centered={false}
                className="mb-6"
              />
              <p className="text-[#677064] text-base md:text-lg leading-relaxed">
                TNR Sainik Academy Society, established in 2013, is
                Telangana&apos;s premier coaching institute dedicated to
                preparing students for careers in India&apos;s defence forces
                and government services. Located at Bahadurpally, Hyderabad,
                we combine rigorous physical training with quality academic
                coaching to produce well-rounded candidates who excel in all
                aspects of recruitment. Our dedicated faculty, structured
                curriculum, and daily physical training programme have helped
                over 5000 students across Telangana realise their dream of
                serving the nation.
              </p>
            </div>

            {/* Right — image */}
            <div className="relative h-80 lg:h-[420px] rounded overflow-hidden shadow-lg">
              <Image
                src="/images/hero-training.jpg"
                alt="TNR Sainik Academy physical training"
                fill
                className="object-cover object-center"
                quality={85}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. MISSION & VISION ─────────────────────────────── */}
      <section className="bg-[#FCFBF7] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Mission & Vision"
            subtitle="The principles that drive everything we do at TNR Sainik Academy."
            className="mb-10"
          />

          <div className="grid md:grid-cols-2 gap-6">
            {/* Mission card */}
            <div className="bg-[#142315] rounded p-8">
              <div className="w-12 h-12 rounded bg-[#F4B51C]/20 flex items-center justify-center mb-5">
                <Target size={24} className="text-[#F4B51C]" />
              </div>
              <h3
                className="text-white text-2xl font-bold uppercase tracking-wide mb-3"
                style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
              >
                Our Mission
              </h3>
              <p className="text-white/70 text-base leading-relaxed">
                To provide world-class defence coaching that builds discipline,
                fitness, and knowledge in every student, enabling them to serve
                their nation with pride.
              </p>
            </div>

            {/* Vision card */}
            <div className="border-2 border-[#F4B51C] rounded p-8 bg-[#FCFBF7]">
              <div className="w-12 h-12 rounded bg-[#F4B51C]/15 flex items-center justify-center mb-5">
                <Eye size={24} className="text-[#F4B51C]" />
              </div>
              <h3
                className="text-[#142315] text-2xl font-bold uppercase tracking-wide mb-3"
                style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
              >
                Our Vision
              </h3>
              <p className="text-[#677064] text-base leading-relaxed">
                To become Telangana&apos;s most trusted defence academy, known
                for producing successful, disciplined, and committed public
                servants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. VALUES ───────────────────────────────────────── */}
      <section className="bg-[#F7F3E9] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Our Core Values"
            subtitle="The six pillars that every TNR student is trained to embody."
            className="mb-10"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded p-6 border border-[#142315]/10 hover:border-[#F4B51C]/40 hover:shadow-sm transition-all duration-200 group"
              >
                <div className="w-11 h-11 rounded bg-[#F4B51C]/10 flex items-center justify-center mb-4 group-hover:bg-[#F4B51C]/20 transition-colors">
                  <Icon size={22} className="text-[#F4B51C]" />
                </div>
                <h3
                  className="text-[#142315] font-bold text-lg uppercase tracking-wide mb-1.5"
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

      {/* ── 5. JOURNEY TIMELINE ─────────────────────────────── */}
      <section className="bg-[#142315] py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            title="Our Journey"
            subtitle="A decade of discipline, dedication, and defence excellence."
            light
            className="mb-12"
          />

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[52px] top-0 bottom-0 w-px bg-[#F4B51C]/30" />

            <ol className="space-y-6">
              {timeline.map(({ year, event }) => (
                <li key={year} className="flex items-start gap-0">
                  {/* Year label */}
                  <span
                    className="text-[#F4B51C] font-bold text-xl shrink-0 w-[52px] text-right pr-4 mt-0.5 leading-snug"
                    style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
                  >
                    {year}
                  </span>
                  {/* Dot on the line */}
                  <span className="relative shrink-0 mt-[5px]">
                    <span className="block w-3 h-3 rounded-full bg-[#F4B51C] border-2 border-[#142315] z-10 relative" />
                  </span>
                  {/* Event text */}
                  <p className="text-white/80 text-base leading-snug pl-4">
                    {event}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── 6. FACULTY PLACEHOLDERS ─────────────────────────── */}
      <section className="bg-[#FCFBF7] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Our Directors & Faculty"
            subtitle="Experienced instructors committed to your success in every domain."
            className="mb-10"
          />

          <div className="grid sm:grid-cols-3 gap-6">
            {faculty.map((member, i) => (
              <div
                key={i}
                className="bg-white rounded p-8 border border-[#142315]/10 flex flex-col items-center text-center"
              >
                {/* Avatar placeholder */}
                <div className="w-20 h-20 rounded-full bg-gray-200 mb-4 flex items-center justify-center">
                  <span className="text-gray-400 text-3xl font-bold select-none">
                    ?
                  </span>
                </div>
                <h3
                  className="text-[#142315] font-bold text-lg uppercase tracking-wide mb-1"
                  style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
                >
                  {member.name}
                </h3>
                <p className="text-[#677064] text-sm">{member.role}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-[#677064] text-sm italic mt-8">
            * Real faculty details will be updated soon.
          </p>
        </div>
      </section>

      {/* ── 7. CTA ──────────────────────────────────────────── */}
      <section className="bg-[#142315] py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wide mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
          >
            Start Your Preparation With TNR
          </h2>
          <p className="text-white/65 text-base md:text-lg mb-8">
            Join Telangana&apos;s most trusted defence coaching academy and
            take the first step towards serving your nation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/admission-enquiry"
              className="inline-flex items-center gap-2 bg-[#F4B51C] hover:bg-[#D89A0D] text-[#142315] font-bold text-sm tracking-widest px-8 py-3.5 rounded transition-colors"
            >
              ADMISSION ENQUIRY
            </Link>
            <a
              href="tel:8886779779"
              className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white font-bold text-sm tracking-widest px-8 py-3.5 rounded transition-colors"
            >
              <Phone size={16} />
              CALL NOW: 8886779779
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
