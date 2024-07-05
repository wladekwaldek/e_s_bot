const TelegramApi = require("node-telegram-bot-api");
require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json({ extended: true }));

const token = process.env.SAVE_MY_ENTRIES;

if (token) {
  const bot = new TelegramApi(token, { polling: true });

  bot.on("message", (msg) => {
    console.log(msg);
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "hi");
  });
} else {
  console.log("error connect telegram");
}

app.use("/api", require("./routs/path"));

  app.listen(5000, () => {
    console.log("Server ok")
  });
