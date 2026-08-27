import nodemailer from "nodemailer";

export interface EnquiryEmailData {
  name: string;
  phone: string;
  email?: string;
  course: string;
  age?: string;
  qualification?: string;
  city?: string;
  contactPreference?: string;
  source?: string;
  message?: string;
}

export async function sendAdminEnquiryEmail(data: EnquiryEmailData): Promise<void> {
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const adminEmail = process.env.ADMIN_EMAIL || smtpUser;

  if (!smtpUser || !smtpPass) {
    console.warn("SMTP_USER or SMTP_PASS not set in .env.local. Logging enquiry to console instead:");
    console.log(JSON.stringify(data, null, 2));
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const rawPhone = data.phone.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/91${rawPhone}?text=Hello%20${encodeURIComponent(data.name)}%2C%20this%20is%20TNR%20Sainik%20Academy.%20We%20received%20your%20admission%20enquiry%20for%20${encodeURIComponent(data.course)}.`;
  const callUrl = `tel:+91${rawPhone}`;
  const nowStr = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7f3e9; margin: 0; padding: 20px; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e0dacf; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
    .header { background: #142315; padding: 24px; text-align: center; border-bottom: 3px solid #f4b51c; }
    .header h1 { color: #ffffff; margin: 0 0 6px 0; font-size: 24px; letter-spacing: 1px; }
    .header p { color: #f4b51c; margin: 0; font-size: 13px; font-weight: bold; letter-spacing: 2px; text-transform: uppercase; }
    .content { padding: 24px; }
    .badge { display: inline-block; background: #f4b51c; color: #142315; font-weight: bold; font-size: 12px; padding: 4px 10px; border-radius: 4px; text-transform: uppercase; margin-bottom: 16px; }
    table { width: 100%; border-collapse: collapse; margin-top: 10px; }
    th, td { padding: 12px 14px; text-align: left; font-size: 14px; border-bottom: 1px solid #f0eee8; }
    th { width: 38%; color: #677064; font-weight: 600; text-transform: uppercase; font-size: 11px; letter-spacing: 0.5px; background: #faf9f5; }
    td { color: #182017; font-weight: 500; }
    .message-box { background: #faf9f5; border-left: 4px solid #f4b51c; padding: 14px; margin-top: 18px; border-radius: 0 6px 6px 0; }
    .message-box h4 { margin: 0 0 6px 0; font-size: 12px; color: #677064; text-transform: uppercase; }
    .message-box p { margin: 0; font-size: 14px; color: #182017; line-height: 1.5; white-space: pre-wrap; }
    .actions { padding: 20px 24px; background: #faf9f5; text-align: center; border-top: 1px solid #ece8de; }
    .btn { display: inline-block; padding: 12px 22px; margin: 6px; font-size: 13px; font-weight: bold; text-decoration: none; border-radius: 5px; text-transform: uppercase; letter-spacing: 0.5px; }
    .btn-call { background: #142315; color: #f4b51c !important; }
    .btn-wa { background: #25D366; color: #ffffff !important; }
    .footer { text-align: center; padding: 16px; font-size: 11px; color: #888888; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>TNR SAINIK ACADEMY</h1>
      <p>New Admission Lead</p>
    </div>
    <div class="content">
      <span class="badge">Course: ${data.course}</span>
      <table>
        <tr>
          <th>Student Name</th>
          <td><strong>${data.name}</strong></td>
        </tr>
        <tr>
          <th>Mobile Number</th>
          <td><strong style="font-size: 16px; color: #142315;">+91 ${data.phone}</strong></td>
        </tr>
        <tr>
          <th>Email Address</th>
          <td>${data.email ? `<a href="mailto:${data.email}">${data.email}</a>` : "Not provided"}</td>
        </tr>
        <tr>
          <th>Target Course</th>
          <td><strong>${data.course}</strong></td>
        </tr>
        <tr>
          <th>Age</th>
          <td>${data.age || "Not provided"}</td>
        </tr>
        <tr>
          <th>Qualification</th>
          <td>${data.qualification || "Not provided"}</td>
        </tr>
        <tr>
          <th>City / District</th>
          <td>${data.city || "Not provided"}</td>
        </tr>
        <tr>
          <th>Contact Preference</th>
          <td>${data.contactPreference || "Phone / WhatsApp"}</td>
        </tr>
        <tr>
          <th>Source</th>
          <td>${data.source || "Website Form"}</td>
        </tr>
        <tr>
          <th>Submission Time</th>
          <td>${nowStr} (IST)</td>
        </tr>
      </table>

      ${
        data.message
          ? `
      <div class="message-box">
        <h4>Student's Message / Query:</h4>
        <p>${data.message}</p>
      </div>`
          : ""
      }
    </div>

    <div class="actions">
      <a href="${callUrl}" class="btn btn-call">📞 Call Student</a>
      <a href="${whatsappUrl}" target="_blank" class="btn btn-wa">💬 WhatsApp Student</a>
    </div>

    <div class="footer">
      TNR Sainik Academy Society — Bahadurpally, Hyderabad<br>
      Automated Enquiry Notification
    </div>
  </div>
</body>
</html>
  `;

  await transporter.sendMail({
    from: `"TNR Sainik Academy" <${smtpUser}>`,
    to: adminEmail,
    replyTo: data.email || smtpUser,
    subject: `🔥 New Admission Enquiry: ${data.name} — ${data.course}`,
    html: htmlContent,
  });
}
