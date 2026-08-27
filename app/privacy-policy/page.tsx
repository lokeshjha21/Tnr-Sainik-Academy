import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | TNR Sainik Academy",
  description: "Privacy policy for TNR Sainik Academy Society website — how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-[#F7F3E9] py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-[#142315] rounded p-8 mb-8 text-center">
          <h1
            className="text-4xl font-bold text-white uppercase"
            style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
          >
            Privacy Policy
          </h1>
          <p className="text-white/60 mt-2 text-sm">Last updated: August 2025</p>
        </div>

        <div className="bg-white rounded border border-[#142315]/10 p-8 prose prose-sm max-w-none">
          <p className="text-[#677064]">
            TNR Sainik Academy Society (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) operates the website at tnrsainikacademy.com. This policy explains how we collect, use, and protect your information.
          </p>

          <h2 className="text-[#142315] font-bold mt-6 mb-3 text-xl" style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}>
            Information We Collect
          </h2>
          <p className="text-[#677064]">
            When you submit an admission enquiry, we collect: your name, mobile number, email address (optional), interested course, age, qualification, city, and message. This information is used solely to respond to your enquiry and provide admission guidance.
          </p>

          <h2 className="text-[#142315] font-bold mt-6 mb-3 text-xl" style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}>
            How We Use Your Information
          </h2>
          <ul className="text-[#677064] space-y-1 list-disc pl-5">
            <li>To contact you regarding your admission enquiry</li>
            <li>To provide information about courses and training programmes</li>
            <li>To guide you through the admission process</li>
            <li>We do not sell or share your information with third parties</li>
          </ul>

          <h2 className="text-[#142315] font-bold mt-6 mb-3 text-xl" style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}>
            Cookies
          </h2>
          <p className="text-[#677064]">
            Our website may use basic session cookies for functionality. We do not use tracking cookies or share data with advertising networks.
          </p>

          <h2 className="text-[#142315] font-bold mt-6 mb-3 text-xl" style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}>
            Data Security
          </h2>
          <p className="text-[#677064]">
            Your data is transmitted securely. We do not store form submissions on public servers. Enquiry information is delivered directly to our administrative team via secure email.
          </p>

          <h2 className="text-[#142315] font-bold mt-6 mb-3 text-xl" style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}>
            Your Rights
          </h2>
          <p className="text-[#677064]">
            You may request deletion of your enquiry data at any time by contacting us at the address below. We will honour all reasonable requests promptly.
          </p>

          <h2 className="text-[#142315] font-bold mt-6 mb-3 text-xl" style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}>
            Contact
          </h2>
          <p className="text-[#677064]">
            TNR Sainik Academy Society<br />
            Survey No. 108, Main Road, Opposite Gandhi Statue,<br />
            Bahadurpally, Hyderabad, Telangana – 500043<br />
            Phone: 8886779779<br />
            Email: tnrsainikacademy@gmail.com
          </p>
        </div>

        <div className="mt-6 text-center">
          <Link href="/" className="text-[#142315] font-bold text-sm hover:text-[#F4B51C] transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
