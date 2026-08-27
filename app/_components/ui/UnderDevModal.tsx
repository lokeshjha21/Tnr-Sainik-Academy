"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, Sparkles, Phone, ArrowRight, CheckCircle2 } from "lucide-react";

export default function UnderDevModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if dismissed in this session
    const dismissed = sessionStorage.getItem("tnr_notice_dismissed");
    if (!dismissed) {
      // Small timeout for smooth entrance after initial mount
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("tnr_notice_dismissed", "true");
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#142315] border border-[#F4B51C]/40 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8 text-white animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Decorative Gold Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F4B51C] via-[#ffe082] to-[#F4B51C]" />

        {/* Close Button ("Cut") */}
        <button
          onClick={handleClose}
          aria-label="Close notification"
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Logo & Badge */}
        <div className="flex flex-col items-center text-center mt-2 mb-5">
          <div className="relative w-16 h-16 sm:w-18 sm:h-18 mb-3 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            <Image
              src="/images/tnr-logo.png"
              alt="TNR Sainik Academy Logo"
              fill
              className="object-contain"
              sizes="72px"
            />
          </div>
          <div className="inline-flex items-center gap-1.5 bg-[#F4B51C]/20 border border-[#F4B51C]/40 text-[#F4B51C] text-[10px] sm:text-xs font-extrabold tracking-widest uppercase px-3 py-1 rounded-full">
            <Sparkles size={12} className="animate-spin" style={{ animationDuration: "3s" }} />
            <span>Website Under Development</span>
          </div>
        </div>

        {/* Title & Description */}
        <div className="text-center mb-6">
          <h2
            id="modal-title"
            className="text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-wide mb-2"
            style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
          >
            Welcome to TNR Sainik Academy
          </h2>
          <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
            Our official website is currently being updated with new features, detailed course modules, and fresh exam notifications. More content and tools are rolling out soon!
          </p>
        </div>

        {/* Highlights */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6 space-y-2.5 text-xs sm:text-sm text-white/90">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 size={16} className="text-[#F4B51C] shrink-0" />
            <span>Admissions for 2025–26 Defence &amp; Police batches are open.</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 size={16} className="text-[#F4B51C] shrink-0" />
            <span>Direct helpline and WhatsApp admissions are fully active.</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 size={16} className="text-[#F4B51C] shrink-0" />
            <span>Upcoming updates: Online mock tests, faculty profiles &amp; results.</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <button
            onClick={handleClose}
            className="w-full sm:flex-1 bg-[#F4B51C] hover:bg-[#D89A0D] text-[#142315] font-extrabold text-xs sm:text-sm tracking-wider uppercase py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)", fontSize: "14px" }}
          >
            <span>CONTINUE TO WEBSITE</span>
            <ArrowRight size={16} />
          </button>
          <a
            href="tel:8886779779"
            className="w-full sm:w-auto border border-white/30 hover:border-white text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase py-3.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
            style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)", fontSize: "14px" }}
          >
            <Phone size={15} className="text-[#F4B51C]" />
            <span>CALL NOW</span>
          </a>
        </div>
      </div>
    </div>
  );
}
