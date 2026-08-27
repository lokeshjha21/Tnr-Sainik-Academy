"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/app/_lib/cn";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Jobs", href: "/jobs" },
  { label: "Training", href: "/training" },
  { label: "Gallery", href: "/gallery" },
  { label: "Results", href: "/results" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#142315] border-b border-white/10 shadow-lg shadow-black/25">
      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 lg:h-[78px]">
        {/* Official TNR Eagle Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group py-1">
          <div className="relative w-12 h-12 lg:w-14 lg:h-14 shrink-0 transition-transform duration-200 group-hover:scale-105">
            <Image
              src="/images/tnr-logo.png"
              alt="TNR Sainik Academy Logo"
              fill
              priority
              className="object-contain"
              sizes="64px"
            />
          </div>
          <div className="flex flex-col">
            <div
              className="text-white font-extrabold text-xl lg:text-2xl leading-none tracking-wider uppercase"
              style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
            >
              TNR
            </div>
            <div className="text-[#F4B51C] text-[11px] lg:text-[12px] tracking-[0.16em] font-extrabold leading-tight uppercase mt-0.5">
              Sainik Academy Society
            </div>
            <div className="text-white/60 text-[7px] lg:text-[8px] tracking-[0.18em] font-medium leading-none uppercase mt-0.5 hidden sm:block">
              Discipline • Fitness • Education • Success
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3.5 py-2 text-sm font-bold tracking-wide transition-all duration-200 rounded relative uppercase",
                  isActive
                    ? "text-[#F4B51C] bg-white/5"
                    : "text-white/90 hover:text-white hover:bg-white/5"
                )}
                style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)", letterSpacing: "0.05em", fontSize: "15px" }}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#F4B51C] rounded-full shadow-[0_0_8px_#F4B51C]" />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/admission-enquiry"
            className="hidden sm:inline-flex items-center gap-2 bg-[#F4B51C] hover:bg-[#D89A0D] text-[#142315] font-extrabold text-xs lg:text-sm tracking-widest px-5 py-2.5 rounded transition-all shadow-md shadow-black/20 hover:scale-105"
            style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)", letterSpacing: "0.08em" }}
          >
            ADMISSION ENQUIRY
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white hover:text-[#F4B51C] transition-colors rounded hover:bg-white/5"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          "lg:hidden bg-[#101c11] border-t border-white/10 overflow-hidden transition-all duration-300 shadow-2xl",
          mobileOpen ? "max-h-[600px] opacity-100 py-3" : "max-h-0 opacity-0 py-0"
        )}
      >
        <div className="px-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "py-3 px-4 rounded font-bold text-sm tracking-wide border-b border-white/5 last:border-0 uppercase transition-colors",
                  isActive
                    ? "text-[#F4B51C] bg-white/10"
                    : "text-white/90 hover:text-white hover:bg-white/5"
                )}
                style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)", letterSpacing: "0.05em", fontSize: "16px" }}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="mt-3 pt-2 border-t border-white/10 flex flex-col gap-2">
            <Link
              href="/admission-enquiry"
              className="bg-[#F4B51C] hover:bg-[#D89A0D] text-[#142315] font-extrabold text-sm tracking-widest py-3 px-4 rounded text-center uppercase shadow-md"
              style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)", letterSpacing: "0.08em" }}
            >
              ADMISSION ENQUIRY
            </Link>
            <a
              href="tel:8886779779"
              className="flex items-center justify-center gap-2 border border-[#F4B51C]/50 text-white font-bold text-sm py-3 px-4 rounded hover:bg-white/5 transition-colors"
            >
              CALL 8886779779
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
