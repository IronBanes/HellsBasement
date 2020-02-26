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
  let prefix = process.env.PREFIX;// Sets the prefix that the bot will use to execute commands
  let msgarray = msg.content.split(" ");//splits the message into two parts the command and the args later on
  let cmd = msgarray[0]; // This is the command part of the message
  let args = msgarray[1]; // this is the part of the command that tags people later on
  let DamnedRole = msg.guild.roles.find(role => role.name === "damned");
  let mentionmember = msg.mentions.members.first();
  onlineMembers = msg.guild.members.filter(member => member.presence.status !== "offline");
  
  if(cmd === `${prefix}hell`){
    /*if(msg.channel.name==="hell"){
      msg.reply("Welcome to Hell")
    }else{
      msg.reply("This is the wrong channel");
    }*/
  }
  
  
  
  console.log("cmd:" + cmd);
  console.log("args:" + args);
  console.log(prefix);




  if (msg.content === `${PREFIX}hell`) { //~hell command doesn't work at the moment big sad
    
  }
});
