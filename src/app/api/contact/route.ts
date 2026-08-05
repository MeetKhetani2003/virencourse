import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;

    const name = String(body.name ?? "").trim().slice(0, 120);
    const phone = String(body.phone ?? "").trim().slice(0, 32);
    const courseInterest = String(body.courseInterest ?? "").trim().slice(0, 120);
    const message = String(body.message ?? "").trim().slice(0, 2000);

    if (name.length < 2 || phone.length < 6) {
      return NextResponse.json(
        { ok: false, error: "Please provide your name and a valid phone number." },
        { status: 422 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_APP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nPhone/WhatsApp: ${phone}\nCourse of Interest: ${courseInterest}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    console.log("Contact form submitted and email sent:", { name, phone, courseInterest });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { ok: false, error: "Could not send your message. Please try again." },
      { status: 500 }
    );
  }
}
