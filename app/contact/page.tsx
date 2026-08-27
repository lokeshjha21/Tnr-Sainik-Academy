import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Clock, Mail, ArrowRight } from "lucide-react";
import SectionHeading from "@/app/_components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Contact Us | TNR Sainik Academy Hyderabad",
  description:
    "Contact TNR Sainik Academy at Bahadurpally, Hyderabad. Call 8886779779, WhatsApp, or visit us at Survey No. 108, Main Road, Opposite Gandhi Statue, Bahadurpally, Hyderabad – 500043.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#142315] py-16 px-4 text-center">
        <h1
          className="text-5xl md:text-6xl font-bold text-white uppercase mb-4"
          style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
        >
          Contact Us
        </h1>
        <p className="text-white/65 max-w-xl mx-auto">
          We&apos;re here to help. Reach out for admissions, queries, or just to know more about our programmes.
        </p>
      </section>

      <section className="bg-[#F7F3E9] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <SectionHeading title="Get In Touch" centered={false} />

              <div className="space-y-5 mb-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#142315] rounded flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-[#F4B51C]" />
                  </div>
                  <div>
                    <p className="text-[#142315] font-bold text-sm mb-1">Address</p>
                    <p className="text-[#677064] text-sm leading-relaxed">
                      Survey No. 108, Main Road,<br />
                      Opposite Gandhi Statue,<br />
                      Bahadurpally, Hyderabad,<br />
                      Telangana – 500043
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#142315] rounded flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-[#F4B51C]" />
                  </div>
                  <div>
                    <p className="text-[#142315] font-bold text-sm mb-1">Phone</p>
                    <a href="tel:8886779779" className="text-[#677064] text-sm hover:text-[#F4B51C] transition-colors">
                      8886779779, 8886770056/58, 7997990954
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#142315] rounded flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-[#F4B51C]" />
                  </div>
                  <div>
                    <p className="text-[#142315] font-bold text-sm mb-1">Academy Timing</p>
                    <p className="text-[#677064] text-sm">10:00 AM – 6:00 PM</p>
                    <p className="text-[#677064] text-sm">Monday – Sunday (All Days)</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#142315] rounded flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-[#F4B51C]" />
                  </div>
                  <div>
                    <p className="text-[#142315] font-bold text-sm mb-1">Email</p>
                    <a href="mailto:tnrsainikacademy@gmail.com" className="text-[#677064] text-sm hover:text-[#F4B51C] transition-colors break-all">
                      tnrsainikacademy@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick action buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:8886779779"
                  className="inline-flex items-center gap-2 bg-[#142315] text-[#F4B51C] font-bold text-sm tracking-widest px-6 py-3 rounded hover:bg-[#263C20] transition-colors"
                >
                  <Phone size={14} />
                  CALL NOW
                </a>
                <a
                  href="https://wa.me/917997990954?text=Hello%20Sir%2FMam%2C%20I%20would%20like%20to%20know%20more%20about%20TNR%20Sainik%20Academy%20admission%20and%20training%20programs."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold text-sm tracking-widest px-6 py-3 rounded hover:bg-[#1da851] transition-colors"
                >
                  WHATSAPP
                </a>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-[#142315]/10">
                <p className="text-[#142315] font-bold text-xs uppercase tracking-wider mb-3">Official Social Channels</p>
                <div className="flex gap-2.5">
                  <a
                    href="https://www.instagram.com/tnrsas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-white border border-[#142315]/15 hover:border-[#E4405F] text-[#142315] hover:text-[#E4405F] text-xs font-bold px-3 py-2 rounded transition-colors shadow-sm"
                  >
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://www.youtube.com/@TNRSAINIKACADEMYSOCIETY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-white border border-[#142315]/15 hover:border-[#FF0000] text-[#142315] hover:text-[#FF0000] text-xs font-bold px-3 py-2 rounded transition-colors shadow-sm"
                  >
                    <span>YouTube</span>
                  </a>
                  <a
                    href="https://www.facebook.com/TNRSAS/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-white border border-[#142315]/15 hover:border-[#1877F2] text-[#142315] hover:text-[#1877F2] text-xs font-bold px-3 py-2 rounded transition-colors shadow-sm"
                  >
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <div className="rounded-xl overflow-hidden shadow-md border border-[#142315]/10 h-80 mb-4">
                <iframe
                  title="TNR Sainik Academy Location on Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.918314999712!2d78.43561287859832!3d17.55907534044667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8faf525a652d%3A0xfcfe7aa1964cc673!2sTNR%20Sainik%20Academy%20Society!5e0!3m2!1sen!2sin!4v1787854102582!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href="https://maps.app.goo.gl/XGMpWzuVyw5B6M2u9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#142315] font-bold text-sm hover:text-[#F4B51C] transition-colors"
              >
                <MapPin size={14} />
                Get Directions on Google Maps
              </a>
            </div>
          </div>

          {/* Admission CTA */}
          <div className="mt-14 bg-[#142315] rounded p-10 text-center">
            <h2
              className="text-3xl font-bold text-white uppercase mb-3"
              style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
            >
              Ready To Join TNR?
            </h2>
            <p className="text-white/60 mb-6">Fill out the admission enquiry form and our team will contact you.</p>
            <Link
              href="/admission-enquiry"
              className="inline-flex items-center gap-2 bg-[#F4B51C] hover:bg-[#D89A0D] text-[#142315] font-bold text-sm tracking-widest px-8 py-3.5 rounded transition-colors"
            >
              ADMISSION ENQUIRY
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
