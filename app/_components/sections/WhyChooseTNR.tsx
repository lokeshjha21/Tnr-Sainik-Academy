import SectionHeading from "@/app/_components/ui/SectionHeading";
import { GraduationCap, Dumbbell, BookOpen, ClipboardCheck, UserCheck } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Expert Faculty",
    description: "Experienced and dedicated instructors with years of coaching and selection expertise.",
  },
  {
    icon: Dumbbell,
    title: "Physical Fitness",
    description: "Daily physical training and structured endurance programmes for every exam standard.",
  },
  {
    icon: BookOpen,
    title: "Best Study Material",
    description: "Updated, exam-specific resources and structured learning material provided.",
  },
  {
    icon: ClipboardCheck,
    title: "Regular Mock Tests",
    description: "Practice exams conducted regularly with detailed progress analysis and feedback.",
  },
  {
    icon: UserCheck,
    title: "Personal Guidance",
    description: "Individual mentoring, career counselling and personal attention to every student.",
  },
];

export default function WhyChooseTNR() {
  return (
    <section className="bg-[#142315] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-6 gap-8 items-start">
          {/* Left text block */}
          <div className="lg:col-span-2">
            <SectionHeading
              title="Why Choose TNR Sainik Academy?"
              light
              centered={false}
              className="mb-6"
            />
            <p className="text-white/65 text-sm leading-relaxed mb-6">
              We focus on the overall development of students — discipline, physical fitness, and quality education — to achieve their dream career in defence or government services.
            </p>
            <a
              href="/about"
              className="inline-flex items-center gap-2 border border-[#F4B51C]/40 text-[#F4B51C] font-bold text-xs tracking-widest px-6 py-3 rounded hover:bg-[#F4B51C]/10 transition-colors"
            >
              KNOW MORE ABOUT US
            </a>
          </div>

          {/* Feature cards */}
          <div className="lg:col-span-4 grid sm:grid-cols-2 gap-4">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white/5 border border-white/10 rounded p-5 hover:bg-white/8 hover:border-[#F4B51C]/30 transition-all duration-200 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-[#F4B51C]/15 flex items-center justify-center shrink-0 group-hover:bg-[#F4B51C]/25 transition-colors">
                    <Icon size={20} className="text-[#F4B51C]" />
                  </div>
                  <div>
                    <h3
                      className="text-white font-bold text-base mb-1.5 tracking-wide"
                      style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
                    >
                      {title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
