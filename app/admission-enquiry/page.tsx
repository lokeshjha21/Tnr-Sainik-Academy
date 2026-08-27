import type { Metadata } from "next";
import { Suspense } from "react";
import EnquiryForm from "./EnquiryForm";
import { CheckCircle2, Shield, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Admission Enquiry | Join TNR Sainik Academy",
  description:
    "Apply to TNR Sainik Academy Hyderabad. Fill the admission enquiry form for Army, Navy, Air Force, Police, SSC, and Railway preparation courses at Bahadurpally, Hyderabad.",
};

const trustPoints = [
  "No hidden fees — transparent admissions",
  "Free counselling on course selection",
  "Flexible batch timings",
  "Physical + Written coaching",
];

export default function AdmissionEnquiryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#142315] py-16 px-4 text-center">
        <p className="text-[#F4B51C] text-xs font-bold tracking-[0.25em] uppercase mb-3">
          Take The First Step
        </p>
        <h1
          className="text-5xl md:text-6xl font-bold text-white uppercase mb-4"
          style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
        >
          Admission Enquiry
        </h1>
        <p className="text-white/65 max-w-xl mx-auto">
          Fill the form below and our team will contact you to guide you through admissions.
        </p>
      </section>

      <section className="bg-[#F7F3E9] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {/* Sidebar */}
            <aside className="lg:order-2 space-y-6">
              {/* Trust card */}
              <div className="bg-[#142315] rounded p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Shield size={20} className="text-[#F4B51C]" />
                  <h3
                    className="text-white font-bold text-lg uppercase"
                    style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
                  >
                    Why TNR?
                  </h3>
                </div>
                <ul className="space-y-3">
                  {trustPoints.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-white/70 text-sm">
                      <CheckCircle2 size={14} className="text-[#F4B51C] mt-0.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact card */}
              <div className="bg-white border border-[#142315]/10 rounded p-6 text-center">
                <Phone size={28} className="text-[#F4B51C] mx-auto mb-3" />
                <p className="text-[#142315] font-bold text-sm mb-1">Prefer to call?</p>
                <a
                  href="tel:8886779779"
                  className="block text-2xl font-bold text-[#142315] hover:text-[#F4B51C] transition-colors"
                  style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
                >
                  8886779779
                </a>
                <p className="text-[#677064] text-xs mt-1">6 AM – 8 PM, Mon – Sun</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: "5000+", label: "Students" },
                  { value: "1000+", label: "Selections" },
                  { value: "10+", label: "Years" },
                  { value: "30+", label: "Courses" },
                ].map((s) => (
                  <div key={s.label} className="bg-white border border-[#142315]/10 rounded p-4 text-center">
                    <p className="text-xl font-bold text-[#142315]" style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}>{s.value}</p>
                    <p className="text-[#677064] text-[10px] tracking-widest uppercase">{s.label}</p>
                  </div>
                ))}
              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-2 lg:order-1 bg-white rounded border border-[#142315]/10 p-6 md:p-8">
              <h2
                className="text-2xl font-bold text-[#142315] uppercase mb-6"
                style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
              >
                Fill Your Details
              </h2>
              <Suspense fallback={<div className="text-center py-8 text-[#677064]">Loading form...</div>}>
                <EnquiryForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
