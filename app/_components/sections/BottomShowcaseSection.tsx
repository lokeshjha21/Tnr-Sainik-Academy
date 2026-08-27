import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

const trainingPoints = [
  "Running & Endurance",
  "Strength Training",
  "Drill & Discipline",
  "Yoga & Flexibility",
  "Outdoor Activities",
];

const galleryThumbnails = [
  { src: "/images/gallery-running.jpg", alt: "Training" },
  { src: "/images/physical-training.jpg", alt: "PT Exercises" },
  { src: "/images/hero-training.jpg", alt: "Formation" },
  { src: "/images/classroom.jpg", alt: "Classroom" },
  { src: "/images/about-hero.jpg", alt: "Parade" },
  { src: "/images/gallery-running.jpg", alt: "Cadets" },
];

export default function BottomShowcaseSection() {
  return (
    <section className="bg-[#FCFBF7] py-16 px-4 border-t border-[#142315]/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Column 1: PHYSICAL TRAINING */}
          <div className="bg-white rounded-md border border-[#142315]/10 p-6 flex flex-col shadow-sm">
            <h3
              className="text-2xl font-extrabold text-[#142315] uppercase mb-4 text-center tracking-wide"
              style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
            >
              Physical Training
            </h3>

            <div className="grid grid-cols-2 gap-4 items-center mb-6 flex-1">
              <div className="relative h-44 rounded overflow-hidden shadow-sm">
                <Image
                  src="/images/gallery-running.jpg"
                  alt="Cadets Running"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
              </div>

              <ul className="space-y-2">
                {trainingPoints.map((point) => (
                  <li key={point} className="flex items-center gap-1.5 text-xs text-[#182017] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F4B51C] shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/training"
              className="w-full bg-[#F4B51C] hover:bg-[#D89A0D] text-[#142315] font-extrabold text-xs tracking-widest uppercase py-2.5 rounded text-center transition-colors"
              style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)", fontSize: "13px" }}
            >
              VIEW TRAINING
            </Link>
          </div>

          {/* Column 2: ACADEMY GALLERY */}
          <div className="bg-white rounded-md border border-[#142315]/10 p-6 flex flex-col shadow-sm">
            <h3
              className="text-2xl font-extrabold text-[#142315] uppercase mb-4 text-center tracking-wide"
              style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
            >
              Academy Gallery
            </h3>

            <div className="grid grid-cols-3 gap-2 mb-6 flex-1">
              {galleryThumbnails.map((img, i) => (
                <div key={i} className="relative h-20 rounded overflow-hidden shadow-xs group">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 33vw, 10vw"
                  />
                </div>
              ))}
            </div>

            <Link
              href="/gallery"
              className="w-full bg-[#F4B51C] hover:bg-[#D89A0D] text-[#142315] font-extrabold text-xs tracking-widest uppercase py-2.5 rounded text-center transition-colors"
              style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)", fontSize: "13px" }}
            >
              VIEW ALL PHOTOS
            </Link>
          </div>

          {/* Column 3: SUCCESS STORIES */}
          <div className="bg-white rounded-md border border-[#142315]/10 p-6 flex flex-col shadow-sm">
            <h3
              className="text-2xl font-extrabold text-[#142315] uppercase mb-2 text-center tracking-wide"
              style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
            >
              Success Stories
            </h3>

            <div className="flex-1 flex flex-col mb-4">
              <p
                className="text-[#142315] font-bold text-base mb-1"
                style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
              >
                Our students are our pride.
              </p>
              <p className="text-[#677064] text-xs leading-relaxed mb-3">
                Many of our students have achieved their dream of joining the Armed Forces and Government Services.
              </p>

              <div className="relative h-28 rounded overflow-hidden shadow-sm mt-auto">
                <Image
                  src="/images/soldier-flag.jpg"
                  alt="Student with Indian Flag"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#142315]/60 to-transparent" />
              </div>
            </div>

            <Link
              href="/results"
              className="w-full bg-[#F4B51C] hover:bg-[#D89A0D] text-[#142315] font-extrabold text-xs tracking-widest uppercase py-2.5 rounded text-center transition-colors"
              style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)", fontSize: "13px" }}
            >
              VIEW RESULTS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
