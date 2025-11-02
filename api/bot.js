import { Telegraf } from "telegraf";

const bot = new Telegraf(process.env.BOT_TOKEN);

// simple commands
bot.start((ctx) => ctx.reply("👋 Hello! Your bot is live on Vercel!"));
bot.hears("hi", (ctx) => ctx.reply("Hey Ayu 👋"));
bot.on("text", (ctx) => ctx.reply("You said: " + ctx.message.text));

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      await bot.handleUpdate(req.body);
    }
    res.status(200).send("OK");
  } catch (err) {
    console.error("Bot error:", err);
    res.status(500).send("Internal Server Error");
  }
}
