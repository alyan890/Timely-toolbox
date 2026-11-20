import { NextResponse } from "next/server";

/**
 * Receives appointment requests from the website form and forwards them to a
 * Google Apps Script web app (emails the owner and logs to a Google Sheet).
 *
 * Environment variables (set in Vercel → Project → Settings → Environment Variables):
 *   APPOINTMENT_WEBHOOK_URL     the Apps Script web app URL
 *   APPOINTMENT_WEBHOOK_SECRET  shared secret the script checks (optional but recommended)
 *
 * See docs/appointment-form-setup.md.
 */

const MIN_FILL_TIME_MS = 3000;

function text(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Spam checks: a filled honeypot or an instant submission is silently accepted
  // but not forwarded, so bots get no signal.
  const startedAt = Number(body.startedAt);
  if (
    text(body.company, 200) ||
    !Number.isFinite(startedAt) ||
    Date.now() - startedAt < MIN_FILL_TIME_MS
  ) {
    return NextResponse.json({ ok: true });
  }

  const data = {
    name: text(body.name, 100),
    phone: text(body.phone, 40),
    email: text(body.email, 200),
    vehicle: text(body.vehicle, 120),
    service: text(body.service, 100),
    preferredDate: text(body.preferredDate, 20),
    message: text(body.message, 2000)
  };

  if (!data.name || !data.phone || !data.vehicle || !data.service) {
    return NextResponse.json(
      { error: "Please fill in your name, phone, vehicle and the service you need." },
      { status: 400 }
    );
  }

  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return NextResponse.json({ error: "Please check your email address." }, { status: 400 });
  }

  const webhookUrl = process.env.APPOINTMENT_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      { error: "Online requests aren't available yet. Please try again soon." },
      { status: 503 }
    );
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        secret: process.env.APPOINTMENT_WEBHOOK_SECRET ?? "",
        submittedAt: new Date().toISOString()
      }),
      redirect: "follow",
      cache: "no-store"
    });

    const result = (await response.json().catch(() => null)) as { ok?: boolean } | null;

    if (!response.ok || !result?.ok) {
      throw new Error(`Webhook responded with ${response.status}`);
    }
  } catch (error) {
    console.error("Appointment request forwarding failed", error);
    return NextResponse.json(
      { error: "We couldn't send your request right now. Please try again in a few minutes." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
