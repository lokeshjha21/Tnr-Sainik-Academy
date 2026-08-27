import { NextRequest, NextResponse } from "next/server";
import { sendAdminEnquiryEmail } from "@/app/_lib/email";
import { enquirySchema } from "@/app/_lib/validations";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate request body
    const validated = enquirySchema.safeParse(body);
    if (!validated.success) {
      return NextResponse.json(
        { error: "Validation failed", details: validated.error.flatten() },
        { status: 400 }
      );
    }

    const data = validated.data;

    // Honeypot check
    if (data.website && data.website.length > 0) {
      return NextResponse.json({ success: true, message: "OK" });
    }

    // Send email to admin via Gmail SMTP
    await sendAdminEnquiryEmail(data);

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully",
    });
  } catch (error: any) {
    console.error("Enquiry API error:", error);
    return NextResponse.json(
      {
        error: "Failed to process enquiry",
        message: error?.message || "Internal server error",
      },
      { status: 500 }
    );
  }
}
