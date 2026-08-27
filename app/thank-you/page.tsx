import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Phone, MessageCircle, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You | Enquiry Received — TNR Sainik Academy",
  description: "Your admission enquiry has been received. TNR Sainik Academy will contact you shortly.",
};

export default function ThankYouPage() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-[#F7F3E9] px-4 py-20">
      <div className="max-w-lg mx-auto text-center">
        <div className="w-20 h-20 bg-[#F4B51C]/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={44} className="text-[#F4B51C]" />
        </div>
        <h1
          className="text-5xl font-bold text-[#142315] uppercase mb-4"
          style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
        >
          Thank You!
        </h1>
        <p className="text-[#677064] text-lg mb-2">Your enquiry has been received.</p>
        <p className="text-[#677064] mb-10">
          Our TNR Sainik Academy team will contact you shortly. In the meantime, feel free to call or WhatsApp us directly.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:8886779779"
            className="inline-flex items-center justify-center gap-2 bg-[#142315] text-[#F4B51C] font-bold text-sm tracking-widest px-6 py-3.5 rounded hover:bg-[#263C20] transition-colors"
          >
            <Phone size={16} />
            CALL ACADEMY
          </a>
          <a
            href="https://wa.me/917997990954?text=Hello%20Sir%2FMam%2C%20I%20have%20submitted%20an%20admission%20enquiry%20and%20would%20like%20to%20know%20more."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold text-sm tracking-widest px-6 py-3.5 rounded hover:bg-[#1da851] transition-colors"
          >
            <MessageCircle size={16} />
            WHATSAPP US
          </a>
          <Link
            href="/courses"
            className="inline-flex items-center justify-center gap-2 border-2 border-[#142315]/30 text-[#142315] font-bold text-sm tracking-widest px-6 py-3.5 rounded hover:border-[#142315] transition-colors"
          >
            <BookOpen size={16} />
            EXPLORE COURSES
          </Link>
        </div>
        <div className="mt-10 pt-8 border-t border-[#142315]/10">
          <p className="text-[#677064] text-sm">
            Academy: 10:00 AM – 6:00 PM · Mon–Sun · 8886779779
          </p>
        </div>
      </div>
    </section>
  );
}
