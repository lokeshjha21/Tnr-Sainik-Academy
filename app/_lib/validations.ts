import { z } from "zod";

export const enquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  phone: z
    .string()
    .min(10, "Enter a valid 10-digit mobile number")
    .max(15)
    .regex(/^[6-9]\d{9}$/, "Enter a valid Indian mobile number"),
  email: z.string().email("Enter a valid email address").optional().or(z.literal("")),
  course: z.string().min(1, "Please select a course"),
  age: z.string().optional(),
  qualification: z.string().optional(),
  city: z.string().optional(),
  contactPreference: z.string().optional(),
  source: z.string().optional(),
  message: z.string().max(1000, "Message too long").optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to be contacted",
  }),
  website: z.string().max(0, "Bot detected").optional(), // honeypot
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Enter a valid 10-digit mobile number")
    .regex(/^[6-9]\d{9}$/, "Enter a valid Indian mobile number"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

export type ContactFormData = z.infer<typeof contactSchema>;
