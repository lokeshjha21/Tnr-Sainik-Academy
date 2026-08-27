"use client";
import Link from "next/link";
import { Phone, MessageCircle, FileText } from "lucide-react";

export default function MobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#142315] border-t border-[#F4B51C]/30 shadow-2xl">
      <div className="grid grid-cols-3">
        <a
          href="tel:8886779779"
          className="flex flex-col items-center justify-center gap-1 py-3 text-white hover:bg-white/5 active:bg-white/10 transition-colors"
        >
          <Phone size={18} className="text-[#F4B51C]" />
          <span className="text-[10px] font-bold tracking-wider">CALL</span>
        </a>
        <a
          href="https://wa.me/917997990954?text=Hello%20Sir%2FMam%2C%20I%20would%20like%20to%20know%20more%20about%20TNR%20Sainik%20Academy%20admission%20and%20training%20programs."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 bg-[#25D366] text-white hover:bg-[#1da851] active:bg-[#19a047] transition-colors"
        >
          <MessageCircle size={18} />
          <span className="text-[10px] font-bold tracking-wider">WHATSAPP</span>
        </a>
        <Link
          href="/admission-enquiry"
          className="flex flex-col items-center justify-center gap-1 py-3 bg-[#F4B51C] text-[#142315] hover:bg-[#D89A0D] active:bg-[#c28a0b] transition-colors"
        >
          <FileText size={18} />
          <span className="text-[10px] font-bold tracking-wider">ENQUIRE</span>
        </Link>
      </div>
    </div>
  );
}
