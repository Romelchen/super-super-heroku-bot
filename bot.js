const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.MzM3MzYyNDU3OTY0MDUyNDgx.DM6CMw.1SIDz2kOpiihIKFcmRZSGaQ7KMQ);
