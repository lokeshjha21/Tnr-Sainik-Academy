import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use | TNR Sainik Academy",
  description: "Terms of use for TNR Sainik Academy Society website.",
};

export default function TermsPage() {
  return (
    <section className="bg-[#F7F3E9] py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-[#142315] rounded p-8 mb-8 text-center">
          <h1
            className="text-4xl font-bold text-white uppercase"
            style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
          >
            Terms of Use
          </h1>
          <p className="text-white/60 mt-2 text-sm">Last updated: August 2025</p>
        </div>
        <div className="bg-white rounded border border-[#142315]/10 p-8 space-y-6">
          {[
            {
              title: "Acceptance of Terms",
              content: "By accessing or using the TNR Sainik Academy Society website, you agree to be bound by these Terms of Use. If you do not agree, please do not use this website.",
            },
            {
              title: "Content",
              content: "All content on this website — including text, images, course information, and exam guidance — is provided for informational purposes only. Exam eligibility, dates, and requirements are subject to official government notifications. Always verify from official sources.",
            },
            {
              title: "Enquiry Form",
              content: "When you submit an admission enquiry, you consent to being contacted by TNR Sainik Academy via phone, WhatsApp, or email regarding your enquiry. We will not use your information for any other purpose.",
            },
            {
              title: "Intellectual Property",
              content: "All content on this website is the property of TNR Sainik Academy Society. You may not copy, reproduce, or distribute any content without prior written permission.",
            },
            {
              title: "External Links",
              content: "Our website contains links to official government recruitment portals. These are provided for your convenience. We are not responsible for the content or availability of external websites.",
            },
            {
              title: "Limitation of Liability",
              content: "TNR Sainik Academy Society provides this website on an 'as is' basis. We make no warranties about the accuracy of information. We are not liable for any damages arising from the use of this website.",
            },
            {
              title: "Contact",
              content: "For any questions regarding these terms, contact us at tnrsainikacademy@gmail.com or call 8886779779.",
            },
          ].map((section) => (
            <div key={section.title}>
              <h2
                className="text-xl font-bold text-[#142315] mb-2"
                style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
              >
                {section.title}
              </h2>
              <p className="text-[#677064] text-sm leading-relaxed">{section.content}</p>
            </div>
          ))}
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
