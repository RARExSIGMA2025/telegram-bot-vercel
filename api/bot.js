import fetch from "node-fetch";

export default async function handler(req, res) {
  const BOT_TOKEN = process.env.BOT_TOKEN;
  const TELEGRAM_API = https://api.telegram.org/bot${BOT_TOKEN};

  if (req.method === "POST") {
    const body = req.body;

    if (body.message) {
      const chatId = body.message.chat.id;
      const text = body.message.text;

      // Simple reply
      let reply = "I’m alive on Vercel 🚀";
      if (text === "/start") reply = "Hello! This bot is running on Vercel 🚀";

      await fetch(${TELEGRAM_API}/sendMessage, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: reply }),
      });
    }

    return res.status(200).send("OK");
  }

  return res.status(200).json({ status: "Bot is running fine!" });
}
