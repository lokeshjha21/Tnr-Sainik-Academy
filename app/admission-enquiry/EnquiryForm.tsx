"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { enquirySchema, type EnquiryFormData } from "@/app/_lib/validations";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const courseOptions = [
  "Indian Army Preparation",
  "Indian Air Force Preparation",
  "Indian Navy Preparation",
  "NDA / NA Officer Preparation",
  "Telangana Police Preparation",
  "SSC GD Constable",
  "SSC CGL",
  "SSC CHSL",
  "SSC MTS",
  "RRB Group D",
  "RRB NTPC",
  "TSPSC (Group 2/4)",
  "Physical Fitness Training",
  "Other",
];

const qualifications = ["8th Pass", "10th Pass", "12th Pass", "Graduate", "Post Graduate", "Other"];
const contactPrefs = ["Phone Call", "WhatsApp", "Email"];
const sources = ["Google", "Instagram", "Facebook", "YouTube", "Friend", "Existing Student", "Offline Advertisement", "Other"];

export default function EnquiryForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: { consent: undefined as unknown as true },
  });

  useEffect(() => {
    const course = searchParams.get("course");
    if (course) setValue("course", course);
  }, [searchParams, setValue]);

  const onSubmit = async (data: EnquiryFormData) => {
    if (data.website) return;
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await res.json();

      if (!res.ok) {
        throw new Error(resData.message || "Failed to submit enquiry");
      }

      setStatus("success");
      setTimeout(() => router.push("/thank-you"), 1500);
    } catch (err: any) {
      console.error("Submission error:", err);
      setStatus("error");
      setErrorMsg(
        err?.message || "We couldn't submit your enquiry. Please try again or call us at 8886779779."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle2 size={64} className="text-[#F4B51C] mb-4" />
        <h3 className="text-2xl font-bold text-[#142315] uppercase mb-2" style={{ fontFamily: "var(--font-barlow-condensed, sans-serif)" }}>
          Enquiry Submitted!
        </h3>
        <p className="text-[#677064]">Redirecting you to the thank you page...</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* Honeypot */}
      <input type="text" {...register("website")} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="grid sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-bold tracking-widest text-[#142315] uppercase mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            placeholder="Enter your full name"
            className={`w-full border rounded px-4 py-3 text-sm text-[#182017] placeholder:text-[#677064]/60 outline-none focus:border-[#F4B51C] transition-colors ${errors.name ? "border-red-400 bg-red-50" : "border-[#142315]/20 bg-white"}`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-xs font-bold tracking-widest text-[#142315] uppercase mb-1.5">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            placeholder="10-digit mobile number"
            className={`w-full border rounded px-4 py-3 text-sm text-[#182017] placeholder:text-[#677064]/60 outline-none focus:border-[#F4B51C] transition-colors ${errors.phone ? "border-red-400 bg-red-50" : "border-[#142315]/20 bg-white"}`}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-bold tracking-widest text-[#142315] uppercase mb-1.5">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            placeholder="your@email.com (optional)"
            className={`w-full border rounded px-4 py-3 text-sm text-[#182017] placeholder:text-[#677064]/60 outline-none focus:border-[#F4B51C] transition-colors ${errors.email ? "border-red-400 bg-red-50" : "border-[#142315]/20 bg-white"}`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        {/* Course */}
        <div>
          <label htmlFor="course" className="block text-xs font-bold tracking-widest text-[#142315] uppercase mb-1.5">
            Interested Course <span className="text-red-500">*</span>
          </label>
          <select
            id="course"
            {...register("course")}
            className={`w-full border rounded px-4 py-3 text-sm text-[#182017] outline-none focus:border-[#F4B51C] transition-colors bg-white ${errors.course ? "border-red-400 bg-red-50" : "border-[#142315]/20"}`}
          >
            <option value="">Select a course</option>
            {courseOptions.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          {errors.course && <p className="text-red-500 text-xs mt-1">{errors.course.message}</p>}
        </div>

        {/* Age */}
        <div>
          <label htmlFor="age" className="block text-xs font-bold tracking-widest text-[#142315] uppercase mb-1.5">
            Age
          </label>
          <input
            id="age"
            type="number"
            min="15"
            max="50"
            {...register("age")}
            placeholder="Your age"
            className="w-full border border-[#142315]/20 bg-white rounded px-4 py-3 text-sm text-[#182017] placeholder:text-[#677064]/60 outline-none focus:border-[#F4B51C] transition-colors"
          />
        </div>

        {/* Qualification */}
        <div>
          <label htmlFor="qualification" className="block text-xs font-bold tracking-widest text-[#142315] uppercase mb-1.5">
            Qualification
          </label>
          <select
            id="qualification"
            {...register("qualification")}
            className="w-full border border-[#142315]/20 bg-white rounded px-4 py-3 text-sm text-[#182017] outline-none focus:border-[#F4B51C] transition-colors"
          >
            <option value="">Select qualification</option>
            {qualifications.map((q) => <option key={q} value={q}>{q}</option>)}
          </select>
        </div>

        {/* City */}
        <div>
          <label htmlFor="city" className="block text-xs font-bold tracking-widest text-[#142315] uppercase mb-1.5">
            City / District
          </label>
          <input
            id="city"
            type="text"
            {...register("city")}
            placeholder="Your city"
            className="w-full border border-[#142315]/20 bg-white rounded px-4 py-3 text-sm text-[#182017] placeholder:text-[#677064]/60 outline-none focus:border-[#F4B51C] transition-colors"
          />
        </div>

        {/* Contact Preference */}
        <div>
          <label htmlFor="contactPreference" className="block text-xs font-bold tracking-widest text-[#142315] uppercase mb-1.5">
            Preferred Contact Method
          </label>
          <select
            id="contactPreference"
            {...register("contactPreference")}
            className="w-full border border-[#142315]/20 bg-white rounded px-4 py-3 text-sm text-[#182017] outline-none focus:border-[#F4B51C] transition-colors"
          >
            <option value="">Select preference</option>
            {contactPrefs.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>
      </div>

      {/* How did you hear */}
      <div>
        <label htmlFor="source" className="block text-xs font-bold tracking-widest text-[#142315] uppercase mb-1.5">
          How Did You Hear About Us?
        </label>
        <select
          id="source"
          {...register("source")}
          className="w-full border border-[#142315]/20 bg-white rounded px-4 py-3 text-sm text-[#182017] outline-none focus:border-[#F4B51C] transition-colors"
        >
          <option value="">Select source</option>
          {sources.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-bold tracking-widest text-[#142315] uppercase mb-1.5">
          Message / Questions
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          placeholder="Any specific questions or information you need..."
          className="w-full border border-[#142315]/20 bg-white rounded px-4 py-3 text-sm text-[#182017] placeholder:text-[#677064]/60 outline-none focus:border-[#F4B51C] transition-colors resize-none"
        />
      </div>

      {/* Consent */}
      <div className="flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          {...register("consent")}
          className="mt-0.5 w-4 h-4 accent-[#F4B51C]"
        />
        <label htmlFor="consent" className="text-sm text-[#677064] cursor-pointer">
          I agree to be contacted by TNR Sainik Academy regarding admissions, courses, and training programmes.{" "}
          <span className="text-red-500">*</span>
        </label>
      </div>
      {errors.consent && <p className="text-red-500 text-xs -mt-3">{errors.consent.message}</p>}

      {/* Error message */}
      {status === "error" && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded p-4">
          <AlertCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
          <p className="text-red-700 text-sm">{errorMsg}</p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 bg-[#F4B51C] hover:bg-[#D89A0D] disabled:bg-[#F4B51C]/60 text-[#142315] font-bold text-sm tracking-widest py-4 rounded transition-colors uppercase cursor-pointer"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Submitting...
          </>
        ) : (
          "SUBMIT ENQUIRY"
        )}
      </button>

      <p className="text-xs text-[#677064] text-center">
        Your information is safe and will only be used for admission enquiry purposes.
      </p>
    </form>
  );
}
