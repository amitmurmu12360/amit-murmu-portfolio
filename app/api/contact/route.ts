import { NextResponse } from "next/server";

/**
 * Contact form handler.
 *
 * This currently validates and logs the submission server-side.
 * To actually deliver messages to your inbox, wire in an email provider
 * (Resend, Postmark, SendGrid) here — sign up for the provider, add the
 * API key as an environment variable in Vercel, and call their send API
 * with the fields below. No other file needs to change.
 */
export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // TODO: replace with a real email provider call, e.g.:
    // await resend.emails.send({ to: profile.email, subject: `Portfolio contact from ${name}`, ... });
    console.log("New portfolio contact submission:", { name, email, message });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
