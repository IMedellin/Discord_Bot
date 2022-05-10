const Discord = require("discord.js");
const client = new Discord.Client({ intents: 32767 });
require('dotenv').config(); //access to process.env
const token = process.env.TOKEN;

client.on('ready', () => {
  console.log(`${client.user.tag} is ready!`)
})

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return

  const { commandName } = interaction;

  if (commandName === 'ping') {
    await interaction.reply('Pong!');
  } else if (commandName === 'server') {
    await interaction.reply(`Server name: ${interaction.guild.name}\nTotal member: ${interaction.guild.memberCount} \nThis server was built on: ${interaction.guild.createdAt}`)
  } else if (commandName === 'user') {
    await interaction.reply(`Your user name is: ${interaction.user.tag}`)
  }
})

client.login(token) 