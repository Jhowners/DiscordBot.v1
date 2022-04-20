const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const token = require("./token.js");


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

let countC = 0;
let count = 0;
let countAllan = 0;
let countCarbo = 0;
let countGusta = 0;
let countIgor = 0;
let countJhon = 0;
let countLucas = 0;
let countRubens = 0;
let countSilas = 0;
let countCAllan = 0;
let countCCarbo = 0;
let countCGusta = 0;
let countCIgor = 0;
let countCJhon = 0;
let countCLucas = 0;
let countCRubens = 0;
let countCSilas = 0;


function countMonitor(msg){

    if (msg.content === 't-+'){
        msg.reply(`Aquele que não deverá ser nomeado olhou para a tela de todos os Dev ${count} vezes.`);
    }
    if (msg.content === 't++'){
        count++;
        msg.reply(`Aquele que não deverá ser nomeado olhou para a tela dos Dev ${count} vezes.`);
    }
    if (msg.content === 't++ A' || msg.content === 't++ a'){
        countAllan++;
        msg.reply(`Aquele que não deverá ser nomeado olhou para a tela do Allan ${countAllan} vezes.`);
        count++;
    }
    if (msg.content === 't++ C' || msg.content === 't++ c'){
        countCarbo++;
        msg.reply(`Aquele que não deverá ser nomeado olhou para a tela do Carbonaro ${countCarbo} vezes.`);
        count++;
    }
    if (msg.content === 't++ G' || msg.content === 't++ g'){
        countGusta++;
        msg.reply(`Aquele que não deverá ser nomeado olhou para a tela do Gustavo ${countGusta} vezes.`);
        count++;
    }
    if (msg.content === 't++ I' || msg.content === 't++ i'){
        countIgor++;
        msg.reply(`Aquele que não deverá ser nomeado olhou para a tela do Igor ${countIgor} vezes.`);
        count++;
    }
    if (msg.content === 't++ J' || msg.content === 't++ j'){
        countJhon++;
        msg.reply(`Aquele que não deverá ser nomeado olhou para a tela do Jhon ${countJhon} vezes.`);
        count++;
    }
    if (msg.content === 't++ L' || msg.content === 't++ l'){
        countLucas++;
        msg.reply(`Aquele que não deverá ser nomeado olhou para a tela do Lucas ${countLucas} vezes.`);
        count++;
    }
    if (msg.content === 't++ R' || msg.content === 't++ r'){
        countRubens++;
        msg.reply(`Aquele que não deverá ser nomeado olhou para a tela do Rubens ${countRubens} vezes.`);
        count++;
    }
    if (msg.content === 't++ S' || msg.content === 't++ s'){
        countSilas++;
        msg.reply(`Aquele que não deverá ser nomeado olhou para a tela do Silas ${countSilas} vezes.`);
        count++;
    }

};

function countJob(msg){
    if (msg.content === 'c-+'){
        msg.reply(`Aquele que não deverá ser nomeado perguntou 'Como estamos com o trabalho?' pela ${countC} vez(es) a todos os desenvolvedores.`);
    }  
    if (msg.content === 'c++'){
        countC++;
        msg.reply(`Aquele que não deverá ser nomeado perguntou 'Como estamos com o trabalho?' pela ${countC} vez(es).`);
    }  
    if (msg.content === 'c++ A'|| msg.content === 'c++ a'){
        countCAllan++;
        msg.reply(`Aquele que não deverá ser nomeado perguntou 'Como estamos com o trabalho?' pro Allan ${countCAllan} vez(es).`);
        countC++;
    }  
    if (msg.content === 'c++ C'|| msg.content === 'c++ c'){
        countCCarbo++;
        msg.reply(`Aquele que não deverá ser nomeado perguntou 'Como estamos com o trabalho?' pro Carbonaro ${countCCarbo} vez(es).`);
        countC++;
    } 
    if (msg.content === 'c++ G'|| msg.content === 'c++ g'){
        countCGusta++;
        msg.reply(`Aquele que não deverá ser nomeado perguntou 'Como estamos com o trabalho?' pro Gustavo ${countCGusta} vez(es).`);
        countC++;
    } 
    if (msg.content === 'c++ I'|| msg.content === 'c++ i'){
        countCIgor++;
        msg.reply(`Aquele que não deverá ser nomeado perguntou 'Como estamos com o trabalho?' pro Igor ${countCIgor} vez(es).`);
        countC++;
    } 
    if (msg.content === 'c++ J'|| msg.content === 'c++ j'){
        countCJhon++;
        msg.reply(`Aquele que não deverá ser nomeado perguntou 'Como estamos com o trabalho?' pro Jhon ${countCJhon} vez(es).`);
        countC++;
    } 
    if (msg.content === 'c++ L'|| msg.content === 'c++ l'){
        countCLucas++;
        msg.reply(`Aquele que não deverá ser nomeado perguntou 'Como estamos com o trabalho?' pro Lucas ${countCLucas} vez(es).`);
        countC++;
    } 
    if (msg.content === 'c++ R'|| msg.content === 'c++ r'){
        countCRubens++;
        msg.reply(`Aquele que não deverá ser nomeado perguntou 'Como estamos com o trabalho?' pro Rubens ${countCRubens} vez(es).`);
        countC++;
    } 
    if (msg.content === 'c++ S' || msg.content === 'c++ s'){
        countCSilas++;
        msg.reply(`Aquele que não deverá ser nomeado perguntou 'Como estamos com o trabalho?' pro Silas ${countCSilas} vez(es).`);
        countC++;
    } 
}

client.on('message', msg => {
    countMonitor(msg);  
    countJob(msg);
});


client.login(token);