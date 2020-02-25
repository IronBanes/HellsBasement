require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN; //sets the Token for the bot to link to
const PREFIX = process.env.PREFIX;// Sets the prefix that the bot will use to execute commands

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
  bot.user.setActivity("Devil");
  
  
});

bot.on('message', msg => {
  if (msg.content === `${PREFIX}hell`) { //~hell command doesn't work at the moment big sad
    let DamnedRole = msg.guild.roles.find(role =>role.name==="damned");
    let member = msg.mentions.members.first();
    member.addRole(DamnedRole).catch(console.error);
    msg.channel.send('pong');
  }
});
