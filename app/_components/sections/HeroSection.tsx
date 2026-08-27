"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Phone,
  GraduationCap,
  Dumbbell,
  BookOpen,
  ClipboardCheck,
  UserCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const heroSlides = [
  {
    id: 1,
    image: "/images/soldier-flag.jpg",
    alt: "Indian Army Soldier with National Flag on Mountain Summit",
    tagline: "Admissions Open 2025–26 • Bahadurpally, Hyderabad",
    titlePrimary: "YOUR DREAM.",
    titleSecondary: "OUR TRAINING.",
    titleHighlight: "YOUR FUTURE.",
    subtitle: "Best Defence & Competitive Exam Coaching Academy in Hyderabad",
    focalPosition: "object-[82%_center] lg:object-[86%_center]",
  },
  {
    id: 2,
    image: "/images/physical-training.jpg",
    alt: "Cadets Rigorous Physical Conditioning and Obstacle Training",
    tagline: "Comprehensive Physical & Written Coaching",
    titlePrimary: "BUILD DISCIPLINE.",
    titleSecondary: "GAIN STRENGTH.",
    titleHighlight: "SERVE THE NATION.",
    subtitle: "Over 5,000+ Candidates Selected in Army, Navy, Air Force & Police",
    focalPosition: "object-center",
  },
  {
    id: 3,
    image: "/images/about-hero.jpg",
    alt: "Defence Cadets Parade Ground Formation and Drill Training",
    tagline: "Structured Daily Routine & Mock Tests",
    titlePrimary: "TRAIN WITH PRIDE.",
    titleSecondary: "LEAD WITH HONOUR.",
    titleHighlight: "DEFEND INDIA.",
    subtitle: "Daily 5:30 AM Physical Ground Drills & Expert Classroom Sessions",
    focalPosition: "object-[75%_center] lg:object-center",
  },
];

const features = [
  { icon: GraduationCap, label: "Expert Faculty" },
  { icon: Dumbbell, label: "Physical Training" },
  { icon: BookOpen, label: "Study Material" },
  { icon: ClipboardCheck, label: "Mock Tests" },
  { icon: UserCheck, label: "Personal Guidance" },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play slides every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative min-h-[85vh] sm:min-h-[88vh] lg:min-h-[92vh] flex items-center overflow-hidden bg-[#0a1209]">
      {/* Background Image Carousel with Smooth Cross-Fade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority
              sizes="100vw"
              className={`object-cover ${slide.focalPosition}`}
              quality={85}
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient Overlay: Deep Military Green on Left for Crystal Clear Text, Transparent on Right for Visuals */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1209] via-[#0a1209]/85 to-[#0a1209]/40 lg:bg-gradient-to-r lg:from-[#0a1209] lg:via-[#0a1209]/85 lg:to-[#0a1209]/15" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e1a0f]/60 via-transparent to-[#0a1209]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 sm:py-16 md:py-20 w-full">
        <div className="max-w-2xl">
          {/* Tagline */}
          <motion.div
            key={`tag-${slide.id}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-[#F4B51C]/20 border border-[#F4B51C]/40 rounded-lg px-3.5 py-1.5 mb-4 sm:mb-6 backdrop-blur-xs shadow-sm"
          >
            <span className="w-2 h-2 bg-[#F4B51C] rounded-full animate-pulse shrink-0" />
            <span className="text-[#F4B51C] text-[11px] sm:text-xs font-extrabold tracking-[0.18em] uppercase">
              {slide.tagline}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            key={`heading-${slide.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white uppercase leading-[1.05] tracking-wide mb-3 sm:mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
            style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
          >
            {slide.titlePrimary}
            <br />
            {slide.titleSecondary}
            <br />
            <span className="text-[#F4B51C] drop-shadow-[0_2px_10px_rgba(244,181,28,0.3)]">
              {slide.titleHighlight}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            key={`sub-${slide.id}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="text-white/90 text-base sm:text-lg md:text-xl mb-6 font-medium leading-snug drop-shadow-md"
          >
            {slide.subtitle}
          </motion.p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-7 sm:mb-8">
            {features.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-1.5 bg-[#142315]/80 border border-white/20 rounded-lg px-2.5 sm:px-3 py-1 sm:py-1.5 text-white/95 text-xs sm:text-sm font-medium backdrop-blur-md shadow-sm"
              >
                <Icon size={14} className="text-[#F4B51C] shrink-0" />
                <span>{label}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <Link
              href="/admission-enquiry"
              className="inline-flex items-center justify-center gap-2 bg-[#F4B51C] hover:bg-[#D89A0D] text-[#142315] font-extrabold text-xs sm:text-sm tracking-widest uppercase px-7 py-3.5 rounded-xl transition-all shadow-xl shadow-black/40 hover:scale-105"
              style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)", fontSize: "15px" }}
            >
              JOIN TNR TODAY
              <ArrowRight size={16} />
            </Link>
            <a
              href="tel:8886779779"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-extrabold text-xs sm:text-sm tracking-widest uppercase px-6 py-3.5 rounded-xl transition-all hover:bg-white/10"
              style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)", fontSize: "15px" }}
            >
              <Phone size={15} className="text-[#F4B51C]" />
              CALL NOW: 8886779779
            </a>
          </div>
        </div>
      </div>

      {/* Carousel Controls & Slide Dots (Bottom Right) */}
      <div className="absolute bottom-6 right-4 sm:right-10 z-20 flex items-center gap-3 bg-black/40 backdrop-blur-md border border-white/15 px-4 py-2 rounded-full shadow-lg">
        {/* Prev Button */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          aria-label="Previous Hero Slide"
          className="text-white/70 hover:text-white transition-colors p-1 cursor-pointer"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Slide Indicator Dots */}
        <div className="flex items-center gap-1.5">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to hero slide ${index + 1}`}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentSlide === index ? "w-6 bg-[#F4B51C]" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          aria-label="Next Hero Slide"
          className="text-white/70 hover:text-white transition-colors p-1 cursor-pointer"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
