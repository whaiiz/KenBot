import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

dotenv.config();

const botToken = process.env.TOKEN;

client.on('messageCreate', async (message) => {
	const voiceChannel = message.member?.voice.channel;
	
	if (!voiceChannel) {
		return message.reply('You need to be in a voice channel to use this command.');
	}
});

client.on('ready', _ => {
	console.log(`KenBot is online`);
});

client.login(botToken);