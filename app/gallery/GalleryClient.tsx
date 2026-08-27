"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import SectionHeading from "@/app/_components/ui/SectionHeading";

const categories = ["All", "Physical Training", "Classroom", "Parade", "Events", "Campus"] as const;
type Category = (typeof categories)[number];

interface GalleryImage {
  src: string;
  alt: string;
  category: Exclude<Category, "All">;
}

const galleryImages: GalleryImage[] = [
  { src: "/images/physical-training.jpg", alt: "Students doing physical training at TNR Academy", category: "Physical Training" },
  { src: "/images/gallery-running.jpg", alt: "Morning run training at TNR Academy", category: "Physical Training" },
  { src: "/images/hero-training.jpg", alt: "Academy training ground — morning session", category: "Campus" },
  { src: "/images/classroom.jpg", alt: "Classroom coaching session at TNR Academy", category: "Classroom" },
  { src: "/images/about-hero.jpg", alt: "Parade formation at TNR Academy", category: "Parade" },
  { src: "/images/gallery-running.jpg", alt: "Group running session", category: "Physical Training" },
  { src: "/images/physical-training.jpg", alt: "Morning PT exercises", category: "Physical Training" },
  { src: "/images/classroom.jpg", alt: "Written exam preparation", category: "Classroom" },
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
      <section className="bg-[#142315] py-16 px-4 text-center">
        <p className="text-[#F4B51C] text-xs font-bold tracking-[0.25em] uppercase mb-3">Life at TNR</p>
        <h1
          className="text-5xl md:text-6xl font-bold text-white uppercase mb-4"
          style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
        >
          Academy Gallery
        </h1>
        <p className="text-white/65 max-w-xl mx-auto text-base">
          A glimpse into training, discipline, and life at TNR Sainik Academy.
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
                className={`px-5 py-2 text-xs font-bold tracking-widest rounded border transition-all ${
                  activeCategory === cat
                    ? "bg-[#142315] text-[#F4B51C] border-[#142315]"
                    : "bg-white text-[#142315] border-[#142315]/20 hover:border-[#142315]/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
            {filtered.map((img, i) => (
              <div
                key={`${img.src}-${i}`}
                className="break-inside-avoid relative overflow-hidden rounded group cursor-pointer"
                onClick={() => { setLightboxSrc(img.src); setLightboxAlt(img.alt); }}
              >
                <div className="relative w-full h-48 md:h-56">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#142315]/0 group-hover:bg-[#142315]/40 transition-colors flex items-center justify-center">
                    <ZoomIn size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#142315]/80 to-transparent px-3 py-2 translate-y-full group-hover:translate-y-0 transition-transform">
                  <p className="text-white text-xs">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-[#677064]">
              <p>No photos in this category yet.</p>
            </div>
          )}

          <p className="text-center text-[#677064] text-sm mt-10 italic">
            * More photos will be added regularly. Contact us to submit your academy photos.
          </p>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxSrc(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-[#F4B51C] transition-colors"
            onClick={() => setLightboxSrc(null)}
            aria-label="Close"
          >
            <X size={32} />
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
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">{lightboxAlt}</p>
        </div>
      )}
    </>
  );
}
