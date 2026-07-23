import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;

    const name = String(body.name ?? "").trim().slice(0, 120);
    const phone = String(body.phone ?? "").trim().slice(0, 32);

    if (name.length < 2 || phone.length < 6) {
      return NextResponse.json(
        { ok: false, error: "Please provide your name and a valid phone number." },
        { status: 422 }
      );
    }

    // Mock database insertion since database integration is disabled
    console.log("Contact form submitted:", body);

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Could not send your message. Please try again." },
      { status: 500 }
    );
  }
}
