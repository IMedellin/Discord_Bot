const Discord = require("discord.js");
const client = new Discord.Client({ intents: 32767 });
require('dotenv').config(); //access to process.env
const token = process.env.TOKEN;

client.on('ready', () => {
  console.log(`${client.user.tag} is ready!`)
})

client.on('messageCreate', (message) => {
  const bot = client.user.tag
  if (message.author.bot) return

  message.reply(`Hello ${message.author}`)
})

client.login(token) 