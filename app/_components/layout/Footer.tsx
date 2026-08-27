"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Clock, Mail, ExternalLink, Loader2, CheckCircle2 } from "lucide-react";

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
  { label: "Indian Air Force Official", href: "https://airmenselection.cdac.in" },
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
  const [formData, setFormData] = useState({ name: "", phone: "", course: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

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
          <h3
            className="text-white font-extrabold text-lg mb-5 tracking-wide uppercase"
            style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
          >
            Contact Us
          </h3>
          <ul className="space-y-3.5 text-xs text-white/70">
            <li className="flex gap-3">
              <MapPin size={15} className="text-[#F4B51C] mt-0.5 shrink-0" />
              <span className="leading-relaxed">
                Survey No. 108, Main Road,<br />
                Opposite Gandhi Statue,<br />
                Bahadurpally, Hyderabad,<br />
                Telangana – 500043
              </span>
            </li>
            <li>
              <a href="tel:8886779779" className="flex items-center gap-3 hover:text-[#F4B51C] transition-colors font-semibold text-white">
                <Phone size={15} className="text-[#F4B51C] shrink-0" />
                <span>8886779779</span>
              </a>
            </li>
            <li className="flex gap-3">
              <Clock size={15} className="text-[#F4B51C] shrink-0 mt-0.5" />
              <span className="leading-relaxed">6:00 AM – 8:00 PM (Mon – Sun)</span>
            </li>
            <li>
              <a href="mailto:tnrsainikacademy@gmail.com" className="flex items-center gap-3 hover:text-[#F4B51C] transition-colors">
                <Mail size={15} className="text-[#F4B51C] shrink-0" />
                <span className="break-all">tnrsainikacademy@gmail.com</span>
              </a>
            </li>
          </ul>
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
              <p className="text-white/60 text-[10px] mt-1">Our team will call you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2.5 text-xs">
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white text-[#182017] rounded px-3 py-2 text-xs placeholder:text-gray-500 outline-none focus:ring-1 focus:ring-[#F4B51C]"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white text-[#182017] rounded px-3 py-2 text-xs placeholder:text-gray-500 outline-none focus:ring-1 focus:ring-[#F4B51C]"
                />
              </div>

              <select
                required
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
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
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white text-[#182017] rounded px-3 py-2 text-xs placeholder:text-gray-500 outline-none focus:ring-1 focus:ring-[#F4B51C] resize-none"
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-[#F4B51C] hover:bg-[#D89A0D] disabled:opacity-60 text-[#142315] font-extrabold text-xs tracking-widest uppercase py-2.5 rounded transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)", fontSize: "13px" }}
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
          <p>© {new Date().getFullYear()} TNR Sainik Academy Society. All Rights Reserved.</p>
          <p>Designed with ❤️ for Future Defenders of India</p>
        </div>
      </div>
    </footer>
  );
}
