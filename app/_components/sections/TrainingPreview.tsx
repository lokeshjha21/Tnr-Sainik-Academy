import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import SectionHeading from "@/app/_components/ui/SectionHeading";

const trainingPoints = [
  "Running & Endurance",
  "Strength Training",
  "Drill & Discipline",
  "Yoga & Flexibility",
  "Outdoor Activities",
];

export default function TrainingPreview() {
  return (
    <section className="bg-[#FCFBF7] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Physical Training"
          subtitle="Comprehensive physical development programme designed for defence and police exam standards."
        />
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left — content */}
          <div>
            <ul className="space-y-3 mb-8">
              {trainingPoints.map((point) => (
                <li key={point} className="flex items-center gap-3 text-[#182017] font-medium">
                  <CheckCircle2 size={18} className="text-[#F4B51C] shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
            <Link
              href="/training"
              className="inline-flex items-center gap-2 bg-[#F4B51C] hover:bg-[#D89A0D] text-[#142315] font-bold text-sm tracking-widest px-7 py-3.5 rounded transition-colors hover:gap-3"
            >
              VIEW TRAINING
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Right — image */}
          <div className="relative h-64 md:h-80 rounded overflow-hidden shadow-lg">
            <Image
              src="/images/physical-training.jpg"
              alt="Physical Training at TNR Sainik Academy"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#142315]/40 to-transparent" />
            <div className="absolute bottom-4 left-4 bg-[#142315]/80 text-white text-xs font-bold tracking-widest px-4 py-2 rounded">
              DAILY 5:30 AM ONWARDS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
