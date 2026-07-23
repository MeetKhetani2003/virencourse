import { NextResponse } from "next/server";
import { db } from "@/db";
import { messages } from "@/db/schema";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;

    const name = String(body.name ?? "").trim().slice(0, 120);
    const phone = String(body.phone ?? "").trim().slice(0, 32);
    const courseInterest = String(body.courseInterest ?? "").trim().slice(0, 255);
    const message = String(body.message ?? "").trim().slice(0, 2000);

    if (name.length < 2 || phone.length < 6) {
      return NextResponse.json(
        { ok: false, error: "Please provide your name and a valid phone number." },
        { status: 422 }
      );
    }

    await db.insert(messages).values({
      name,
      phone,
      courseInterest: courseInterest || null,
      message: message || null,
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Could not send your message. Please try again." },
      { status: 500 }
    );
  }
}
