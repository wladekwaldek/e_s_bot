const TelegramApi = require("node-telegram-bot-api");
const mongoose = require('mongoose');
require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json({ extended: true }));

const token = process.env.DEV;
const PORT = process.env.PORT_DEV

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

async function runServer() {
  try{
    await require('./lib/mongoose');

  app.listen(PORT, () => {
    console.log("Server ok")
  });
  } catch(e){
    console.log(e.message)
  }
  

}

runServer()


  
