import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/app/_components/ui/SectionHeading";
import { ArrowRight } from "lucide-react";

const galleryImages = [
  { src: "/images/gallery-running.jpg", alt: "Students running at TNR Academy" },
  { src: "/images/physical-training.jpg", alt: "Physical training at TNR Academy" },
  { src: "/images/classroom.jpg", alt: "Classroom coaching at TNR Academy" },
  { src: "/images/about-hero.jpg", alt: "Parade at TNR Academy" },
];

export default function GalleryPreviewSection() {
  return (
    <section className="bg-[#F7F3E9] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Academy Gallery"
          subtitle="A glimpse into life at TNR Sainik Academy."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {galleryImages.map((img) => (
            <div key={img.src} className="relative h-40 md:h-52 rounded overflow-hidden group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-[#142315]/20 group-hover:bg-[#142315]/10 transition-colors" />
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-[#F4B51C] hover:bg-[#D89A0D] text-[#142315] font-bold text-sm tracking-widest px-8 py-3.5 rounded transition-colors hover:gap-3"
          >
            VIEW ALL PHOTOS
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
