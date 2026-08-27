"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, GraduationCap, Dumbbell, BookOpen, ClipboardCheck, UserCheck } from "lucide-react";

const features = [
  { icon: GraduationCap, label: "Expert Faculty" },
  { icon: Dumbbell, label: "Physical Training" },
  { icon: BookOpen, label: "Study Material" },
  { icon: ClipboardCheck, label: "Mock Tests" },
  { icon: UserCheck, label: "Personal Guidance" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-training.jpg"
          alt="TNR Sainik Academy Defence and Physical Training"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          quality={80}
        />
        {/* Gradient overlay — left heavy for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1209]/95 via-[#0a1209]/75 to-[#0a1209]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1209]/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="max-w-2xl">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#F4B51C]/20 border border-[#F4B51C]/40 rounded px-3 py-1.5 mb-6"
          >
            <span className="w-2 h-2 bg-[#F4B51C] rounded-full animate-pulse" />
            <span className="text-[#F4B51C] text-xs font-bold tracking-[0.2em] uppercase">
              Admissions Open — Bahadurpally, Hyderabad
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase leading-[1.05] tracking-wide mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
          >
            Your Dream.
            <br />
            Our Training.
            <br />
            <span className="text-[#F4B51C]">Your Future.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-white/80 text-lg md:text-xl mb-6 font-medium"
          >
            Best Defence &amp; Competitive Exam Coaching Academy
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {features.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-1.5 bg-white/10 border border-white/20 rounded px-3 py-1.5 text-white/90 text-sm"
              >
                <Icon size={13} className="text-[#F4B51C]" />
                <span>{label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="/admission-enquiry"
              className="inline-flex items-center gap-2 bg-[#F4B51C] hover:bg-[#D89A0D] text-[#142315] font-bold text-sm tracking-widest px-7 py-3.5 rounded transition-all hover:gap-3"
            >
              JOIN TNR TODAY
              <ArrowRight size={16} />
            </Link>
            <a
              href="tel:8886779779"
              className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white font-bold text-sm tracking-widest px-7 py-3.5 rounded transition-all"
            >
              <Phone size={16} />
              CALL NOW : 8886779779
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-[#F4B51C] rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
