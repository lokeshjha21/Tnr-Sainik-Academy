"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
}

const stats: Stat[] = [
  { value: 2013, suffix: "", label: "Established" },
  { value: 10, suffix: "+", label: "Years of Excellence" },
  { value: 5000, suffix: "+", label: "Students Trained" },
  { value: 1000, suffix: "+", label: "Selections" },
  { value: 30, suffix: "+", label: "Courses" },
];

function useCountUp(target: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1800;
    const start = Date.now();
    const startVal = 0;

    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(startVal + (target - startVal) * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [active, target]);

  return count;
}

function StatCard({ stat, active }: { stat: Stat; active: boolean }) {
  const count = useCountUp(stat.value, active);

  return (
    <div className="flex flex-col items-center justify-center py-8 px-4 border-r border-white/10 last:border-0 first:border-l-0">
      <div
        className="text-4xl md:text-5xl font-bold text-[#F4B51C] mb-1"
        style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}
      >
        {stat.prefix}{count.toLocaleString("en-IN")}{stat.suffix}
      </div>
      <div className="text-white/70 text-xs tracking-[0.2em] uppercase font-semibold">
        {stat.label}
      </div>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[#142315] py-2">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
