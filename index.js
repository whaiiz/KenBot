import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
import Session from './models/session.js';
import connectDB from './database/connectDb.js';

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

dotenv.config();

const botToken = process.env.TOKEN;

connectDB();

client.on('messageCreate', async (message) => {
	if (message.content.startsWith('teste')) {
		let newSession = new Session({ name: "teste"});
    let result = await newSession.save();
		console.log('result', result);
	}
});

client.on('ready', _ => {
	console.log(`KenBot is online`);
});

client.login(botToken);

http.createServer(function(req, res){
  res.write('Alive');
  res.end();
}).listen(3000);