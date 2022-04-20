
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const token = require("./token.js");

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
let count = 0;
let countC = 0;

client.on('message', msg => {
    if (msg.content === 't++'){
        count++;
        msg.reply(`Aquele que não deverá ser nomeado olhou para a tela dos Dev ${count} vezes.`);
}
})
client.on('message', msg => {
    if (msg.content === 'c++'){
        countC++;
        msg.reply(`Aquele que não deverá ser nomeado perguntou 'Como estamos com o trabalho?' pela ${countC} vez(es).`);
}
})

client.login(token);