// ============================================================
//  Server-side Telegram notification helper.
//  Sends a message to the lounge's Telegram chat via the Bot API.
//  Credentials are server-only env vars (never NEXT_PUBLIC_*):
//    TELEGRAM_BOT_TOKEN  — from @BotFather
//    TELEGRAM_CHAT_ID    — the chat/group id to notify
// ============================================================

export function isTelegramConfigured(): boolean {
  return Boolean(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID);
}

/** Send a plain-text message to the configured Telegram chat. Throws on failure. */
export async function sendTelegramMessage(text: string): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    throw new Error(
      "Telegram is not configured (set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID).",
    );
  }

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      disable_web_page_preview: true,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Telegram sendMessage failed: ${res.status} ${detail}`);
  }
}
