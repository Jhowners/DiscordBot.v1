const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const token = 'require("./token.js")';


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

const [
  countC,
  count,
  countAllan,
  countCarbo,
  countGusta, 
  countIgor,  
  countJhon, 
  countLucas, 
  countRubens, 
  countSilas, 
  countCAllan, 
  countCCarbo,
  countCGusta, 
  countCIgor, 
  countCJhon, 
  countCLucas, 
  countCRubens,
  countCSilas, 
] = Array(18).fill(0);


function countMonitor(msg){

  const mensagemGeral = `Aquele que não deverá ser nomeado olhou para a tela de todos os Dev ${count} vezes.`
    
    switch(msg.content){
      case 't-+':
        msg.reply(mensagemGeral);
        break;
      case 't++':
        count++;
        msg.reply(mensagemGeral);
        break;
      case 't++ A'|| 't++ a':
        countAllan++;
        msg.reply(`Aquele que não deverá ser nomeado olhou para a tela de Allan ${countAllan} vezes.`);
        count++;
        break;
      case 't++ C'|| 't++ c':
        countCarbo++;
        msg.reply(`Aquele que não deverá ser nomeado olhou para a tela de Carbonaro ${countCarbo} vezes.`);
        count++;
        break;
      case 't++ G'|| 't++ g':
        countGusta++;
        msg.reply(`Aquele que não deverá ser nomeado olhou para a tela de Gustavo ${countGusta} vezes.`);
        count++;
        break;
      case 't++ I'|| 't++ i':
        countIgor++;
        msg.reply(`Aquele que não deverá ser nomeado olhou para a tela de Igor ${countIgor} vezes.`);
        count++;
        break;
      case 't++ J'|| 't++ j':
        countJhon++;
        msg.reply(`Aquele que não deverá ser nomeado olhou para a tela de Jhon ${countJhon} vezes.`);
        count++;
        break;
      case 't++ L'|| 't++ l':
        countLucas++;
        msg.reply(`Aquele que não deverá ser nomeado olhou para a tela de Lucas ${countLucas} vezes.`);
        count++;
        break;
      case 't++ R'|| 't++ r':
        countRubens++;
        msg.reply(`Aquele que não deverá ser nomeado olhou para a tela de Rubens ${countRubens} vezes.`);
        count++;
        break;
      case 't++ S'|| 't++ s':
        countSilas++;
        msg.reply(`Aquele que não deverá ser nomeado olhou para a tela de Silas ${countSilas} vezes.`);
        count++;
        break;
      default:
        break;
    }
}


function countJob(msg){

  switch(msg.content){
    case 'c-+':
      msg.reply(`Aquele que não deverá ser nomeado perguntou 'Como estamos com o trabalho?' pela ${countC} vez(es) a todos os desenvolvedores.`);
      break;
    case 'c++':
      countC++;
      msg.reply(`Aquele que não deverá ser nomeado perguntou 'Como estamos com o trabalho?' pela ${countC} vez(es) a todos os desenvolvedores.`);
      break;
    case 'c++ A'|| 'c++ a':
      countCAllan++;
      msg.reply(`Aquele que não deverá ser nomeado perguntou 'Como estamos com o trabalho?' pela ${countCAllan} vez(es) a Allan.`);
      countC++;
      break;
    case 'c++ C'|| 'c++ c':
      countCCarbo++;
      msg.reply(`Aquele que não deverá ser nomeado perguntou 'Como estamos com o trabalho?' pela ${countCCarbo} vez(es) a Carbonaro.`);
      countC++;
      break;
    case 'c++ G'|| 'c++ g':
      countCGusta++;
      msg.reply(`Aquele que não deverá ser nomeado perguntou 'Como estamos com o trabalho?' pela ${countCGusta} vez(es) a Gustavo.`);
      countC++;
      break;
    case 'c++ I'|| 'c++ i':
      countCIgor++;
      msg.reply(`Aquele que não deverá ser nomeado perguntou 'Como estamos com o trabalho?' pela ${countCIgor} vez(es) a Igor.`);
      countC++;
      break;
    case 'c++ J'|| 'c++ j':
      countCJhon++;
      msg.reply(`Aquele que não deverá ser nomeado perguntou 'Como estamos com o trabalho?' pela ${countCJhon} vez(es) a Jhon.`);
      countC++;
      break;
    case 'c++ L'|| 'c++':
      countCLucas++;
      msg.reply(`Aquele que não deverá ser nomeado perguntou 'Como estamos com o trabalho?' pela ${countCLucas} vez(es) a Lucas.`);
      countC++;
      break;
    case 'c++ R'|| 'c++ r':
      countCRubens++;
      msg.reply(`Aquele que não deverá ser nomeado perguntou 'Como estamos com o trabalho?' pela ${countCRubens} vez(es) a Rubens.`);
      countC++;
      break;
    case 'c++ S'|| 'c++ s':
      countCSilas++;
      msg.reply(`Aquele que não deverá ser nomeado perguntou 'Como estamos com o trabalho?' pela ${countCSilas} vez(es) a Silas.`);
      countC++;
      break;
    default:
      break;
  }
}

client.on('message', msg => {
    countMonitor(msg);  
    countJob(msg);
});


client.login(token);