const TelegramApi = require("node-telegram-bot-api");
require("dotenv").config();

const token = process.env.SAVE_MY_ENTRIES;

if (token) {
  const bot = new TelegramApi(token, { polling: true });

  bot.on("message", (msg) => {
    console.log(msg);
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "hi");
  });
} else {
  console.log("error");
}
