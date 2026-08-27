"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import SectionHeading from "@/app/_components/ui/SectionHeading";

const categories = ["All", "Physical Training", "Parade", "Classroom", "Events", "Campus"] as const;
type Category = (typeof categories)[number];

interface GalleryImage {
  src: string;
  alt: string;
  category: Exclude<Category, "All">;
}

const galleryImages: GalleryImage[] = [
  // Physical Training
  { src: "/images/training/training-1.jpeg", alt: "1.6 KM & 5 KM Ground Running Drills", category: "Physical Training" },
  { src: "/images/training/training-2.jpeg", alt: "Cadets Morning Endurance Conditioning", category: "Physical Training" },
  { src: "/images/training/training-3.jpeg", alt: "Physical Obstacle & Agility Training", category: "Physical Training" },
  { src: "/images/training/training-5.jpeg", alt: "Physical Measurement & Fitness Screening", category: "Physical Training" },
  { src: "/images/banners/banner1.jpeg", alt: "Academy Physical Batch Ground Drill", category: "Physical Training" },
  
  // Parade & Discipline
  { src: "/images/training/training-4.jpeg", alt: "Parade Ground Lineup & Discipline Drill", category: "Parade" },
  { src: "/images/training/training-2.jpeg", alt: "Cadets Squad Formation Drill", category: "Parade" },

  // Events & Campus
  { src: "/images/banners/banner1.jpeg", alt: "TNR Sainik Academy Batch Training", category: "Events" },
  { src: "/images/banners/banner2.jpeg", alt: "Academy Campus & Candidate Briefing Session", category: "Campus" },
  { src: "/images/banners/banner2.jpeg", alt: "Instructor Guidance & Orientation", category: "Events" },
  
  // Classroom Coaching
  { src: "/images/banners/banner1.jpeg", alt: "Interactive Written Exam Coaching Batch", category: "Classroom" },
];

export default function GalleryPageClient() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState("");

  const filtered =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#142315] py-16 px-4 text-center border-b border-[#F4B51C]/20">
        <p className="text-[#F4B51C] text-xs font-bold tracking-[0.25em] uppercase mb-3">Life at TNR</p>
        <h1
          className="text-5xl md:text-6xl font-extrabold text-white uppercase mb-4 tracking-wide"
          style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
        >
          Academy Gallery
        </h1>
        <p className="text-white/70 max-w-xl mx-auto text-base">
          Actual photographs from daily ground drills, physical training, and campus life at TNR Sainik Academy.
        </p>
      </section>

      {/* Gallery */}
      <section className="bg-[#F7F3E9] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Photo Gallery" subtitle="Browse our collection of academy photographs." />

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-xs font-extrabold tracking-widest rounded-lg border uppercase transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#142315] text-[#F4B51C] border-[#142315] shadow-md scale-105"
                    : "bg-white text-[#142315] border-[#142315]/15 hover:border-[#142315]/40"
                }`}
                style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)", fontSize: "13px" }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((img, i) => (
              <div
                key={`${img.src}-${i}`}
                className="relative overflow-hidden rounded-xl bg-white border border-[#142315]/10 shadow-sm group cursor-pointer h-60"
                onClick={() => {
                  setLightboxSrc(img.src);
                  setLightboxAlt(img.alt);
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-[#142315]/0 group-hover:bg-[#142315]/50 transition-colors flex items-center justify-center">
                  <ZoomIn size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#142315]/90 to-transparent px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform">
                  <p className="text-white text-xs font-bold leading-tight">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-[#677064]">
              <p>No photos in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setLightboxSrc(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-[#F4B51C] transition-colors p-2 rounded-full bg-white/10 hover:bg-white/20"
            onClick={() => setLightboxSrc(null)}
            aria-label="Close Lightbox"
          >
            <X size={28} />
          </button>
          <div className="relative w-full max-w-4xl max-h-[85vh] aspect-video" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightboxSrc}
              alt={lightboxAlt}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/90 text-sm font-semibold bg-black/60 px-4 py-1.5 rounded-full border border-white/20">
            {lightboxAlt}
          </p>
        </div>
      )}
    </>
  );
}
