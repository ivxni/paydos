import { buildReservationMessage } from "@/lib/whatsapp";
import { sendTelegramMessage } from "@/lib/telegram";

// Always run at request time (never cached / prerendered).
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

type Body = {
  name?: string;
  date?: string;
  time?: string;
  guests?: number;
  phone?: string;
};

/** Receives a reservation and pushes it to the lounge's Telegram chat. */
export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return Response.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const date = (body.date ?? "").trim();
  const time = (body.time ?? "").trim();
  const guests = Number(body.guests);
  const phone = (body.phone ?? "").trim();

  if (!name || !date || !time || !Number.isFinite(guests) || guests < 1) {
    return Response.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  const message = buildReservationMessage({ name, date, time, guests, phone });

  try {
    await sendTelegramMessage(message);
  } catch (err) {
    console.error("[api/reservation] notification failed:", err);
    return Response.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
