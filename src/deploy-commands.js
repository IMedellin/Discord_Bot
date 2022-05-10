const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
require('dotenv').config();
const TOKEN = process.env.TOKEN;
const ClientId = process.env.ClientId;
const GuildId = process.env.GuildId

const commands = [
  new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
  new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
  new SlashCommandBuilder().setName('user').setDescription('Replies with user info!')
]

  .map(command => command.toJSON())

const rest = new REST({ version: '9' }).setToken(TOKEN)

rest.put(Routes.applicationGuildCommands(ClientId, GuildId), { body: commands })
  .then(() => console.log('Successfully registered application commands.'))
  .catch(console.error)