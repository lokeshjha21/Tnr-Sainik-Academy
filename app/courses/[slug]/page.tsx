import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getCourseBySlug, courses } from "@/app/_lib/data/courses";
import Accordion from "@/app/_components/ui/Accordion";
import {
  Clock,
  GraduationCap,
  Phone,
  MessageCircle,
  FileText,
  CheckCircle2,
  Dumbbell,
  BookOpen,
  ChevronRight,
  MapPin,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};
  return {
    title: `${course.title} | TNR Sainik Academy`,
    description: `${course.description} Join TNR Sainik Academy's ${course.title} programme in Hyderabad. Duration: ${course.duration}. Eligibility: ${course.eligibility}.`,
  };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const relatedCourses = courses.filter((c) => course.relatedSlugs.includes(c.slug)).slice(0, 3);
  const whatsappMsg = encodeURIComponent(
    `Hello Sir/Mam,\n\nI am interested in the ${course.title} preparation program. Please share admission details.`
  );

  return (
    <div className="bg-[#F7F3E9] min-h-screen">
      {/* Course Hero */}
      <section className="bg-[#142315] relative overflow-hidden text-white border-b border-[#F4B51C]/20">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/classroom.jpg"
            alt="Course Coaching"
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
            <Link href="/courses" className="hover:text-[#F4B51C] transition-colors">
              Courses
            </Link>
            <ChevronRight size={12} className="text-[#F4B51C]" />
            <span className="text-[#F4B51C]">{course.shortTitle}</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-[#F4B51C]/15 border border-[#F4B51C]/40 text-[#F4B51C] text-[11px] font-extrabold uppercase px-3 py-1 rounded mb-3">
            <span>{course.trainingType}</span>
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-wide leading-tight mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
          >
            {course.title}
          </h1>

          <p className="text-white/80 text-base md:text-lg max-w-3xl leading-relaxed mb-8">
            {course.overview}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-3xl">
            <div className="bg-white/5 border border-white/10 rounded-lg p-3.5 backdrop-blur-xs">
              <p className="text-[#F4B51C] text-[10px] font-extrabold tracking-widest uppercase mb-1">
                Duration
              </p>
              <p className="text-white text-sm font-bold leading-tight">{course.duration}</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-3.5 backdrop-blur-xs">
              <p className="text-[#F4B51C] text-[10px] font-extrabold tracking-widest uppercase mb-1">
                Eligibility
              </p>
              <p className="text-white text-sm font-bold leading-tight">{course.eligibility}</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-3.5 backdrop-blur-xs">
              <p className="text-[#F4B51C] text-[10px] font-extrabold tracking-widest uppercase mb-1">
                Batch
              </p>
              <p className="text-white text-sm font-bold leading-tight">Admissions Open</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content + Sticky Sidebar */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Syllabus */}
            {course.syllabus.length > 0 && (
              <div className="bg-white rounded-xl border border-[#142315]/10 p-6 md:p-8 shadow-sm">
                <h2
                  className="text-2xl md:text-3xl font-extrabold text-[#142315] uppercase mb-6 flex items-center gap-3 border-b border-[#142315]/10 pb-4"
                  style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
                >
                  <BookOpen size={26} className="text-[#F4B51C]" />
                  Curriculum &amp; Syllabus Covered
                </h2>
                <div className="grid sm:grid-cols-2 gap-3.5">
                  {course.syllabus.map((item) => (
                    <div key={item} className="flex items-start gap-3 bg-[#FAF9F5] p-3.5 rounded-lg border border-[#142315]/5">
                      <CheckCircle2 size={16} className="text-[#F4B51C] mt-0.5 shrink-0" />
                      <span className="text-sm text-[#182017] font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Physical Prep */}
            {course.physicalPrep.length > 0 && (
              <div className="bg-[#142315] text-white rounded-xl p-6 md:p-8 shadow-md border border-white/10">
                <h2
                  className="text-2xl md:text-3xl font-extrabold uppercase mb-6 flex items-center gap-3 border-b border-white/10 pb-4 text-white"
                  style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
                >
                  <Dumbbell size={26} className="text-[#F4B51C]" />
                  Physical Training Programme
                </h2>
                <div className="grid sm:grid-cols-2 gap-3.5">
                  {course.physicalPrep.map((item) => (
                    <div key={item} className="flex items-start gap-3 bg-white/5 p-3.5 rounded-lg border border-white/10">
                      <CheckCircle2 size={16} className="text-[#F4B51C] mt-0.5 shrink-0" />
                      <span className="text-sm text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Training Schedule */}
            {course.schedule.length > 0 && (
              <div className="bg-white rounded-xl border border-[#142315]/10 p-6 md:p-8 shadow-sm">
                <h2
                  className="text-2xl md:text-3xl font-extrabold text-[#142315] uppercase mb-6 border-b border-[#142315]/10 pb-4"
                  style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
                >
                  Daily Batch Schedule
                </h2>
                <div className="relative pl-8 border-l-2 border-[#F4B51C]/40 space-y-5">
                  {course.schedule.map((item, i) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-[41px] top-0 w-7 h-7 bg-[#142315] text-[#F4B51C] rounded-full flex items-center justify-center font-extrabold text-[10px] border-2 border-white shadow">
                        {item.time.split(" ")[0]}
                      </div>
                      <span className="text-[#F4B51C] text-xs font-bold tracking-widest block uppercase mb-0.5">{item.time}</span>
                      <span className="text-[#182017] text-sm font-semibold">{item.activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQs */}
            {course.faqs.length > 0 && (
              <div className="bg-white rounded-xl border border-[#142315]/10 p-6 md:p-8 shadow-sm">
                <h2
                  className="text-2xl md:text-3xl font-extrabold text-[#142315] uppercase mb-6 border-b border-[#142315]/10 pb-4"
                  style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
                >
                  Frequently Asked Questions
                </h2>
                <Accordion items={course.faqs} />
              </div>
            )}
          </div>

          {/* Sticky Sidebar */}
          <aside className="lg:sticky lg:top-24 space-y-6">
            <div className="bg-[#142315] rounded-xl p-6 text-center text-white border border-[#F4B51C]/30 shadow-xl">
              <span className="text-[#F4B51C] text-[10px] font-extrabold tracking-widest uppercase block mb-1">
                Admissions Open
              </span>
              <h3
                className="text-2xl font-extrabold uppercase mb-3 text-white tracking-wide"
                style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
              >
                {course.shortTitle}
              </h3>
              <p className="text-white/70 text-xs mb-6 leading-relaxed">
                Contact our admissions office to reserve your seat in the upcoming batch.
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
                  href={`https://wa.me/917997990954?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-extrabold text-xs tracking-widest uppercase py-3.5 rounded-lg transition-colors shadow-md"
                  style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)", fontSize: "14px" }}
                >
                  <MessageCircle size={16} />
                  WHATSAPP ENQUIRY
                </a>

                <Link
                  href={`/admission-enquiry?course=${encodeURIComponent(course.title)}`}
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
          </aside>
        </div>
      </div>
    </div>
  );
}
