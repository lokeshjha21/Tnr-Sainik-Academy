import type { Metadata } from "next";
import HeroSection from "./_components/sections/HeroSection";
import StatsSection from "./_components/sections/StatsSection";
import JobsSection from "./_components/sections/JobsSection";
import WhyChooseTNR from "./_components/sections/WhyChooseTNR";
import BottomShowcaseSection from "./_components/sections/BottomShowcaseSection";

export const metadata: Metadata = {
  title: "TNR Sainik Academy Hyderabad | Best Defence & Government Exam Coaching",
  description:
    "Join TNR Sainik Academy — Hyderabad's premier defence coaching institute. Expert faculty, daily physical training, and proven results in Army, Navy, Air Force, Police, SSC, and Railway exams since 2013.",
};


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <JobsSection />
      <WhyChooseTNR />
      <BottomShowcaseSection />
    </>
  );
}
