require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN; //sets the Token for the bot to link to
const PREFIX = process.env.PREFIX;// Sets the prefix that the bot will use to execute commands
let Damnedmembers = [];

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
  let onlineMembers = msg.guild.members.filter(member => member.presence.status !== "offline");
  let mentionmembercut = mentionmember.toString().substring(2);
  let mentionmemberadded = "<" &mentionmembercut;
  console.log("IMPORTANT" );
  console.log(onlineMembers.values());
  console.log(mentionmembercut);
  console.log(onlineMembers.forEach(id,mentionmemberadded));



  /*if(cmd === `${prefix}hell`){
    if(msg.channel.name==="hell")
    {
      if(onlineMembers.equals(mentionmemberadded))
      {
        if(!Damnedmembers.includes(mentionmember))
        {
          mentionmember.addRole(DamnedRole)
        }
        else
        {
          msg.reply("That person is already in the game.");
        }  
      }
      else
      {
        msg.reply("That person is not online please select another user.");
      }
    }
    else
    {
      msg.reply("failed")
    }
    


  }*/
  
  
  
  console.log("cmd:" + cmd);
  console.log("args:" + args);
  console.log(prefix);




  if (msg.content === `${PREFIX}hell`) { //~hell command doesn't work at the moment big sad
    
  }
});
