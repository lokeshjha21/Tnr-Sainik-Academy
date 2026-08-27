"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  ExternalLink,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import logo from "../../icon.png";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Jobs", href: "/jobs" },
  { label: "Training", href: "/training" },
  { label: "Gallery", href: "/gallery" },
  { label: "Results", href: "/results" },
  { label: "Admission", href: "/admission-enquiry" },
  { label: "Study Material", href: "/courses" },
  { label: "Blog", href: "/jobs" },
  { label: "Contact Us", href: "/contact" },
];

const usefulLinks = [
  { label: "Indian Army Official", href: "https://joinindianarmy.nic.in" },
  {
    label: "Indian Air Force Official",
    href: "https://airmenselection.cdac.in",
  },
  { label: "Indian Navy Official", href: "https://joinindiannavy.gov.in" },
  { label: "SSC Official", href: "https://ssc.gov.in" },
  { label: "Railway Official", href: "https://www.rrbcdg.gov.in" },
  { label: "TSPSC Official", href: "https://www.tspsc.gov.in" },
];

const coursesList = [
  "Indian Army Preparation",
  "Indian Air Force",
  "Indian Navy",
  "NDA / NA",
  "Telangana Police",
  "SSC GD Constable",
  "SSC CGL / CHSL",
  "RRB Group D / NTPC",
  "Physical Fitness Training",
  "Other",
];

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.course) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          course: formData.course,
          message: formData.message,
          consent: true,
        }),
      });

      if (!res.ok) throw new Error("Failed to submit");

      setStatus("success");
      setFormData({ name: "", phone: "", course: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <footer className="bg-[#0e1a0f] text-white/80 border-t border-white/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1 — Contact */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="relative w-12 h-12 shrink-0">
              <Image
                src={logo}
                alt="TNR Sainik Academy"
                fill
                className="object-contain"
                sizes="48px"
              />
            </div>
            <div>
              <p
                className="text-white font-extrabold text-lg leading-none uppercase"
                style={{
                  fontFamily: "var(--font-barlow-condensed, sans-serif)",
                }}
              >
                TNR SAINIK
              </p>
              <p className="text-[#F4B51C] text-[10px] tracking-widest font-extrabold uppercase mt-0.5">
                Academy Society
              </p>
            </div>
          </div>
          <h3
            className="text-white font-extrabold text-sm mb-4 tracking-wider uppercase text-white/90"
            style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
          >
            Contact Information
          </h3>
          <ul className="space-y-3.5 text-xs text-white/70">
            <li className="flex gap-3">
              <MapPin size={15} className="text-[#F4B51C] mt-0.5 shrink-0" />
              <span className="leading-relaxed">
                Survey No. 108, Main Road,
                <br />
                Opposite Gandhi Statue,
                <br />
                Bahadurpally, Hyderabad,
                <br />
                Telangana – 500043
              </span>
            </li>
            <li>
              <a
                href="tel:8886779779"
                className="flex items-center gap-3 hover:text-[#F4B51C] transition-colors font-semibold text-white"
              >
                <Phone size={15} className="text-[#F4B51C] shrink-0" />
                <span>8886779779, 8886770056/58, 7997990954</span>
              </a>
            </li>
            <li className="flex gap-3">
              <Clock size={15} className="text-[#F4B51C] shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                10:00 AM – 6:00 PM (Mon – Sun)
              </span>
            </li>
            <li>
              <a
                href="mailto:tnrsainikacademy@gmail.com"
                className="flex items-center gap-3 hover:text-[#F4B51C] transition-colors"
              >
                <Mail size={15} className="text-[#F4B51C] shrink-0" />
                <span className="break-all">tnrsainikacademy@gmail.com</span>
              </a>
            </li>
          </ul>

          {/* Social Media Links */}
          <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-3">
            <span className="text-[11px] font-bold text-white/50 uppercase tracking-wider">Follow Us:</span>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/tnrsas"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-[#E4405F] hover:border-[#E4405F]/40 hover:bg-[#E4405F]/10 transition-colors"
              aria-label="TNR Sainik Academy on Instagram"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            {/* YouTube */}
            <a
              href="https://www.youtube.com/@TNRSAINIKACADEMYSOCIETY"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-[#FF0000] hover:border-[#FF0000]/40 hover:bg-[#FF0000]/10 transition-colors"
              aria-label="TNR Sainik Academy on YouTube"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/TNRSAS/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-[#1877F2] hover:border-[#1877F2]/40 hover:bg-[#1877F2]/10 transition-colors"
              aria-label="TNR Sainik Academy on Facebook"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <h3
            className="text-white font-extrabold text-lg mb-5 tracking-wide uppercase"
            style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
          >
            Quick Links
          </h3>
          <div className="grid grid-cols-2 gap-x-2 gap-y-2 text-xs">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white/70 hover:text-[#F4B51C] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Column 3 — Useful Links */}
        <div>
          <h3
            className="text-white font-extrabold text-lg mb-5 tracking-wide uppercase"
            style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
          >
            Useful Links
          </h3>
          <ul className="space-y-2.5 text-xs text-white/70">
            {usefulLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#F4B51C] transition-colors"
                >
                  <ExternalLink size={11} className="text-[#F4B51C] shrink-0" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — Enquiry Form */}
        <div>
          <h3
            className="text-white font-extrabold text-lg mb-5 tracking-wide uppercase"
            style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
          >
            Enquiry Form
          </h3>

          {status === "success" ? (
            <div className="bg-white/10 rounded p-4 text-center">
              <CheckCircle2 size={24} className="text-[#F4B51C] mx-auto mb-2" />
              <p className="text-white text-xs font-bold">Enquiry Received!</p>
              <p className="text-white/60 text-[10px] mt-1">
                Our team will call you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2.5 text-xs">
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-white text-[#182017] rounded px-3 py-2 text-xs placeholder:text-gray-500 outline-none focus:ring-1 focus:ring-[#F4B51C]"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full bg-white text-[#182017] rounded px-3 py-2 text-xs placeholder:text-gray-500 outline-none focus:ring-1 focus:ring-[#F4B51C]"
                />
              </div>

              <select
                required
                value={formData.course}
                onChange={(e) =>
                  setFormData({ ...formData, course: e.target.value })
                }
                className="w-full bg-white text-[#182017] rounded px-3 py-2 text-xs outline-none focus:ring-1 focus:ring-[#F4B51C]"
              >
                <option value="">Select Course</option>
                {coursesList.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>

              <textarea
                placeholder="Your Message"
                rows={2}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-white text-[#182017] rounded px-3 py-2 text-xs placeholder:text-gray-500 outline-none focus:ring-1 focus:ring-[#F4B51C] resize-none"
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-[#F4B51C] hover:bg-[#D89A0D] disabled:opacity-60 text-[#142315] font-extrabold text-xs tracking-widest uppercase py-2.5 rounded transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                style={{
                  fontFamily: "var(--font-barlow-condensed, sans-serif)",
                  fontSize: "13px",
                }}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={12} className="animate-spin" />
                    SUBMITTING...
                  </>
                ) : (
                  "SUBMIT ENQUIRY"
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} TNR Sainik Academy Society. All Rights
            Reserved.
          </p>
          <p>Designed & Developed By Lokesh Kumar Jha</p>
        </div>
      </div>
    </footer>
  );
}
