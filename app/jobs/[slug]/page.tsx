import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getJobBySlug, jobs } from "@/app/_lib/data/jobs";
import Accordion from "@/app/_components/ui/Accordion";
import SectionHeading from "@/app/_components/ui/SectionHeading";
import OrgEmblem from "@/app/_components/ui/OrgEmblem";
import {
  CheckCircle2,
  Phone,
  MessageCircle,
  FileText,
  ShieldCheck,
  Activity,
  BookOpen,
  Stethoscope,
  GraduationCap,
  ArrowRight,
  ChevronRight,
  Clock,
  MapPin,
  Calendar,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return jobs.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) return {};
  return {
    title: `${job.title} Preparation | TNR Sainik Academy Hyderabad`,
    description: `Complete ${job.title} preparation at TNR Sainik Academy Hyderabad. ${job.description} Eligibility: ${job.education}. Age: ${job.ageRange}.`,
  };
}

export default async function JobDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) notFound();

  const relatedJobs = jobs.filter((j) => job.relatedSlugs.includes(j.slug)).slice(0, 3);
  const whatsappMsg = encodeURIComponent(
    `Hello Sir/Mam,\n\nI want admission details for ${job.title} preparation course.`
  );

  return (
    <div className="bg-[#F7F3E9] min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#142315] relative overflow-hidden text-white border-b border-[#F4B51C]/20">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/hero-training.jpg"
            alt="Training Background"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e1a0f] via-[#142315]/90 to-[#142315]/80" />

        <div className="relative max-w-7xl mx-auto px-4 pt-10 pb-16 md:pt-14 md:pb-20">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider mb-6 text-white/60">
            <Link href="/" className="hover:text-[#F4B51C] transition-colors">
              Home
            </Link>
            <ChevronRight size={12} className="text-[#F4B51C]" />
            <Link href="/jobs" className="hover:text-[#F4B51C] transition-colors">
              Government Exams
            </Link>
            <ChevronRight size={12} className="text-[#F4B51C]" />
            <span className="text-[#F4B51C]">{job.shortTitle}</span>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
            {/* Real Official Emblem */}
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 rounded-xl p-3 flex items-center justify-center border border-white/20 shadow-lg shrink-0">
              <OrgEmblem slug={job.slug} size={76} />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 bg-[#F4B51C]/15 border border-[#F4B51C]/40 text-[#F4B51C] text-[11px] font-extrabold uppercase px-3 py-1 rounded mb-2">
                <span>Defence &amp; Govt Service Coaching</span>
              </div>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-wide leading-none"
                style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
              >
                {job.title}
              </h1>
            </div>
          </div>

          <p className="text-white/80 text-base md:text-lg max-w-3xl leading-relaxed mb-8">
            {job.overview}
          </p>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl">
            <div className="bg-white/5 border border-white/10 rounded-lg p-3.5 backdrop-blur-xs">
              <p className="text-[#F4B51C] text-[10px] font-extrabold tracking-widest uppercase mb-1">
                Age Limit
              </p>
              <p className="text-white text-sm font-bold leading-tight">{job.ageRange}</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-3.5 backdrop-blur-xs">
              <p className="text-[#F4B51C] text-[10px] font-extrabold tracking-widest uppercase mb-1">
                Qualification
              </p>
              <p className="text-white text-sm font-bold leading-tight">{job.education}</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-3.5 backdrop-blur-xs">
              <p className="text-[#F4B51C] text-[10px] font-extrabold tracking-widest uppercase mb-1">
                Stages
              </p>
              <p className="text-white text-sm font-bold leading-tight">{job.stages.length} Selection Rounds</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-3.5 backdrop-blur-xs">
              <p className="text-[#F4B51C] text-[10px] font-extrabold tracking-widest uppercase mb-1">
                TNR Batch
              </p>
              <p className="text-white text-sm font-bold leading-tight">Admissions Open</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout with Sticky Sidebar */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* 1. Selection Process */}
            <div className="bg-white rounded-xl border border-[#142315]/10 p-6 md:p-8 shadow-sm">
              <h2
                className="text-2xl md:text-3xl font-extrabold text-[#142315] uppercase mb-6 flex items-center gap-3 border-b border-[#142315]/10 pb-4"
                style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
              >
                <ShieldCheck size={26} className="text-[#F4B51C]" />
                Selection Process &amp; Stages
              </h2>

              <div className="relative pl-8 border-l-2 border-[#F4B51C]/40 space-y-6">
                {job.stages.map((stage, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[41px] top-0 w-7 h-7 bg-[#142315] text-[#F4B51C] rounded-full flex items-center justify-center font-extrabold text-xs border-2 border-white shadow">
                      {i + 1}
                    </div>
                    <h3 className="text-[#142315] font-extrabold text-base mb-1">
                      {stage.name}
                    </h3>
                    <p className="text-[#677064] text-sm leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Physical Requirements */}
            {job.physicalRequirements.length > 0 && (
              <div className="bg-white rounded-xl border border-[#142315]/10 p-6 md:p-8 shadow-sm">
                <h2
                  className="text-2xl md:text-3xl font-extrabold text-[#142315] uppercase mb-6 flex items-center gap-3 border-b border-[#142315]/10 pb-4"
                  style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
                >
                  <Activity size={26} className="text-[#F4B51C]" />
                  Physical Fitness Test (PFT) Standards
                </h2>

                <div className="overflow-x-auto rounded-lg border border-[#142315]/10">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-[#142315] text-white">
                      <tr>
                        <th className="py-3 px-4 text-[#F4B51C] text-xs font-bold uppercase tracking-wider">Test / Activity</th>
                        <th className="py-3 px-4 text-white text-xs font-bold uppercase tracking-wider">Male Candidates</th>
                        <th className="py-3 px-4 text-white text-xs font-bold uppercase tracking-wider">Female Candidates</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#142315]/10">
                      {job.physicalRequirements.map((req, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#faf9f5]"}>
                          <td className="py-3.5 px-4 font-bold text-[#142315]">{req.test}</td>
                          <td className="py-3.5 px-4 text-[#677064]">{req.male}</td>
                          <td className="py-3.5 px-4 text-[#677064]">{req.female || "—"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 3. Written Exam & Medical */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border border-[#142315]/10 p-6 shadow-sm flex flex-col">
                <h3
                  className="text-xl font-extrabold text-[#142315] uppercase mb-3 flex items-center gap-2"
                  style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
                >
                  <BookOpen size={20} className="text-[#F4B51C]" />
                  Written Examination
                </h3>
                <p className="text-[#677064] text-sm leading-relaxed flex-1">
                  {job.writtenExam}
                </p>
              </div>

              <div className="bg-white rounded-xl border border-[#142315]/10 p-6 shadow-sm flex flex-col">
                <h3
                  className="text-xl font-extrabold text-[#142315] uppercase mb-3 flex items-center gap-2"
                  style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
                >
                  <Stethoscope size={20} className="text-[#F4B51C]" />
                  Medical Standards
                </h3>
                <p className="text-[#677064] text-sm leading-relaxed flex-1">
                  {job.medicalStandards}
                </p>
              </div>
            </div>

            {/* 4. How TNR Prepares You */}
            <div className="bg-[#142315] text-white rounded-xl p-6 md:p-8 shadow-md border border-white/10">
              <h2
                className="text-2xl md:text-3xl font-extrabold uppercase mb-6 flex items-center gap-3 border-b border-white/10 pb-4 text-white"
                style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
              >
                <GraduationCap size={26} className="text-[#F4B51C]" />
                How TNR Sainik Academy Prepares You
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {job.tnrPreparation.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white/5 p-3.5 rounded-lg border border-white/10">
                    <CheckCircle2 size={18} className="text-[#F4B51C] shrink-0 mt-0.5" />
                    <span className="text-white/90 text-sm leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Preparation Strategy */}
            <div className="bg-white rounded-xl border border-[#142315]/10 p-6 md:p-8 shadow-sm">
              <h2
                className="text-2xl md:text-3xl font-extrabold text-[#142315] uppercase mb-6 border-b border-[#142315]/10 pb-4"
                style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
              >
                Recommended Preparation Strategy
              </h2>
              <div className="space-y-4">
                {job.preparationStrategy.map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#F4B51C] text-[#142315] font-extrabold flex items-center justify-center shrink-0 text-sm">
                      {i + 1}
                    </div>
                    <p className="text-[#182017] text-sm font-medium pt-1 leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. FAQs */}
            {job.faqs.length > 0 && (
              <div className="bg-white rounded-xl border border-[#142315]/10 p-6 md:p-8 shadow-sm">
                <h2
                  className="text-2xl md:text-3xl font-extrabold text-[#142315] uppercase mb-6 border-b border-[#142315]/10 pb-4"
                  style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
                >
                  Frequently Asked Questions
                </h2>
                <Accordion items={job.faqs} />
              </div>
            )}
          </div>

          {/* Sticky Sidebar */}
          <aside className="lg:sticky lg:top-24 space-y-6">
            {/* Action Box */}
            <div className="bg-[#142315] rounded-xl p-6 text-center text-white border border-[#F4B51C]/30 shadow-xl">
              <div className="w-16 h-16 mx-auto mb-3 bg-white/10 rounded-full p-2.5 flex items-center justify-center border border-white/20">
                <OrgEmblem slug={job.slug} size={50} />
              </div>

              <span className="text-[#F4B51C] text-[10px] font-extrabold tracking-widest uppercase block mb-1">
                TNR Admissions Open
              </span>
              <h3
                className="text-2xl font-extrabold uppercase mb-3 text-white tracking-wide"
                style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
              >
                {job.shortTitle} Coaching
              </h3>
              <p className="text-white/70 text-xs mb-6 leading-relaxed">
                Join our specialized batches with daily physical drills and comprehensive written coaching.
              </p>

              <div className="space-y-3">
                <a
                  href="tel:8886779779"
                  className="w-full flex items-center justify-center gap-2 bg-[#F4B51C] hover:bg-[#D89A0D] text-[#142315] font-extrabold text-xs tracking-widest uppercase py-3.5 rounded-lg transition-colors shadow-md"
                  style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)", fontSize: "14px" }}
                >
                  <Phone size={16} />
                  CALL NOW: 8886779779
                </a>

                <a
                  href={`https://wa.me/916300337110?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-extrabold text-xs tracking-widest uppercase py-3.5 rounded-lg transition-colors shadow-md"
                  style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)", fontSize: "14px" }}
                >
                  <MessageCircle size={16} />
                  WHATSAPP ENQUIRY
                </a>

                <Link
                  href={`/admission-enquiry?course=${encodeURIComponent(job.title)}`}
                  className="w-full flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold text-xs tracking-widest uppercase py-3 rounded-lg transition-colors"
                  style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)", fontSize: "13px" }}
                >
                  <FileText size={15} />
                  ONLINE ADMISSION FORM
                </Link>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 space-y-2 text-left text-xs text-white/60">
                <div className="flex items-center gap-2">
                  <Clock size={13} className="text-[#F4B51C]" />
                  <span>Timings: 6:00 AM – 8:00 PM (Daily)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={13} className="text-[#F4B51C]" />
                  <span>Bahadurpally, Hyderabad</span>
                </div>
              </div>
            </div>

            {/* Related Exams Box */}
            {relatedJobs.length > 0 && (
              <div className="bg-white rounded-xl border border-[#142315]/10 p-5 shadow-sm">
                <h4
                  className="text-lg font-extrabold text-[#142315] uppercase mb-4 border-b border-[#142315]/10 pb-2"
                  style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
                >
                  Related Exams
                </h4>
                <div className="space-y-3">
                  {relatedJobs.map((rj) => (
                    <Link
                      key={rj.slug}
                      href={`/jobs/${rj.slug}`}
                      className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-[#F7F3E9] transition-colors group"
                    >
                      <div className="w-10 h-10 bg-[#F7F3E9] rounded-md p-1 flex items-center justify-center shrink-0">
                        <OrgEmblem slug={rj.slug} size={30} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-[#142315] group-hover:text-[#F4B51C] transition-colors truncate">
                          {rj.title}
                        </p>
                        <p className="text-[10px] text-[#677064] truncate">{rj.education}</p>
                      </div>
                      <ChevronRight size={14} className="text-[#677064] group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
