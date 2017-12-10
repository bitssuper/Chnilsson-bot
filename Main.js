const Discord = require('discord.js');
const client = new Discord.Client();
const yt = require('ytdl-core');



function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith("!" + str)
}

function pluck(array) {
    return array.map(function(item) { return item["name"]; });
}

function hasRole(mem, role) {
    if(pluck(mem.roles).includes(role)) {
        return true;
    } else {
        return false;
    }
}

client.on('ready', () => {
    console.log("Logged in as Bits-Bot!");
    client.user.setGame('say !help')
});

client.on('message', msg => {
    var args = msg.content.split(/[ ]+/);
    if (commandIs("hello", msg)) {
        msg.reply('Hello!');
    }
    var args = msg.content.split(/[ ]+/);
    if(commandIs("help", msg)) {
       msg.channel.sendMessage("", {embed: {
  color: 3447003,
  title: 'Command list',
  url: 'http://google.com',
  description: 'You can see all the commands here.',
  fields: [
    {
      name: '**Help**',
      value: '*Will show this. Usage: "!help".*'
    },
    {
      name: '**Say**',
      value: '*Will say the thing you command it to. Usage: "!say [Message].*'
    },
    {
      name: 'Joining Voice Channel',
      value: 'Will join your voice channel. Usage: "!join"'
    },
    {
      name: 'Disconnection',
      value: '*Will leave the voice channel. Usage: "!disconnect"*'
    },
    {
     name: 'Credits',
     value: '*Will show the creator of this bot. Usage: "!credits"*'
    },
    {
     name: 'Kicking',
     value: 'Will kick the mentioned user, usage: "!kick @User"'
    },
    {
     name: 'Banning',
     value: 'Will ban the mentioned user, usage: "!ban @User"'
    },
    {
     name: 'Invite link/button',
     value: '*Will show you a button to the invite link for the bot!. Usage: "!invite".*'
    }
  ],
  timestamp: new Date(),
}});
    }
    var args = msg.content.split(/[ ]+/);
    if(commandIs("say", msg)) {
            if(hasRole(msg.member, "disciples of kitty queen") || hasRole(msg.member, "O S K A R") || hasRole(msg.member, "Founder") || hasRole(msg.member, "Developer") || hasRole(msg.member, "Administrator") || hasRole(msg.member, "Admin") ||  hasRole(msg.member, "Loyals") || hasRole(msg.member, "God") || hasRole(msg.member, "Bot Controller")) {
            if(args.lenght === 1) {
                msg.reply('You did not define a argument. Usage: "!say [Message]');
            } else {
                msg.channel.sendMessage(args.join(" ").substring(5));
            }
        } else {
            msg.reply("You do not have the right role to execute this command!");
        }
    }
    var args = msg.content.split(/[ ]+/);
    if(commandIs("version", msg)) {
        msg.reply('The current version is 1.0');
    }
    var args = msg.content.split(/[ ]+/);
    if(commandIs("credits", msg)) {
             msg.channel.sendMessage("", {embed: {
  color: 3447003,
  title: 'Credits',
  fields: [
    {
      name: 'Developer',
      value: '*The main & the orginal creator of this bot is Bitssuper.*'
    }   
  ],
  timestamp: new Date(),
}});
    }
    var args = msg.content.split(/[ ]+/);
    if(commandIs("join", msg)) {
            if(hasRole(msg.member, "disciples of kitty queen") || hasRole(msg.member, "O S K A R") || hasRole(msg.member, "Founder") || hasRole(msg.member, "Developer") || hasRole(msg.member, "Administrator") || hasRole(msg.member, "Admin") ||  hasRole(msg.member, "Loyals") || hasRole(msg.member, "God") || hasRole(msg.member, "Bot Controller")) {
            const voiceChannel = msg.member.voiceChannel
        voiceChannel.join().then(connection =>  {
        const streamOptions = { seek: 0, volume: 0.05 };
        const ytdl = require('ytdl-core');
        const stream = ytdl('https://www.youtube.com/watch?v=X_typLTFRdk', {filter : 'audioonly'});
        const dispatcher = connection.playStream(stream, streamOptions);
        })
      } else {
          msg.reply("You do not have the right role to execute this command!");
      }
    }
    var args = msg.content.split(/[ ]+/);
    if(commandIs("disconnect", msg)) {
        const voiceChannel = msg.member.voiceChannel
        voiceChannel.leave()
    }
    var args = msg.content.split(/[ ]+/);
    if(commandIs("volume-down", msg)) {
        const streamOptions = { seek:0, volume: 0.25 }
    }
   var args = msg.content.split(/[ ]+/);
   if(commandIs("kick", msg)) {
            if(hasRole(msg.member, "disciples of kitty queen") || hasRole(msg.member, "O S K A R") || hasRole(msg.member, "Founder") || hasRole(msg.member, "Developer") || hasRole(msg.member, "Administrator") || hasRole(msg.member, "Admin") ||  hasRole(msg.member, "Loyals") || hasRole(msg.member, "God") || hasRole(msg.member, "Bot Controller")) {
        if(args.length === 1) {
            msg.reply('You did not define a argument. Usage: "!kick [User]');
        } else {
            msg.guild.member(msg.mentions.users.first()).kick();
            msg.reply('User has been kicked from the Kingdom!')
        }
    } else {
        msg.reply("You do not have the right role to execute this command!");
     }
   }
    var args = msg.content.split(/[ ]+/);
    if(commandIs("ban", msg)) {
          if(hasRole(msg.member, "disciples of kitty queen") || hasRole(msg.member, "O S K A R") || hasRole(msg.member, "Founder") || hasRole(msg.member, "Developer") || hasRole(msg.member, "Administrator") || hasRole(msg.member, "Admin") ||  hasRole(msg.member, "Loyals") || hasRole(msg.member, "God") || hasRole(msg.member, "Bot Controller")) {
        if(args.length === 1) {
            msg.reply('You did not define a argument. Usage: "!ban [User]');
        } else {
            msg.guild.member(msg.mentions.users.first()).ban();
            msg.reply('User has been banned from the Kingdom!')
        } 
    } else {
        msg.reply("You do not have the right role to execute this command!");
    }
 }    
  var args = msg.content.split(/[ ]+/);
  if(commandIs("invite", msg)) {
               msg.channel.sendMessage("", {embed: {
  color: 3447003,
  fields: [
    {
      name: 'Here you go!',
      value: "*Here's the **[invite link](https://discordapp.com/oauth2/authorize?client_id=287251374599700480&scope=bot&permissions=2146958463)**.*"
    }   
  ],
  timestamp: new Date(),
}});
  }
  var args = msg.content.split(/[ ]+/);
  if(commandIs("deaf", msg)) {
        if(hasRole(msg.member, "disciples of kitty queen") || hasRole(msg.member, "O S K A R") || hasRole(msg.member, "Founder") || hasRole(msg.member, "Developer") || hasRole(msg.member, "Administrator") || hasRole(msg.member, "Admin") ||  hasRole(msg.member, "Loyals") || hasRole(msg.member, "God") || hasRole(msg.member, "Bot Controller")) {
          if(args.length === 1) {
              msg.reply('You did not define a argument. Usage: "!deaf [User]');
          } else {
              msg.guild.member(msg.mentions.users.first()).serverDeaf();
          }
      }  else {
          msg.reply("You do not have the right role to execute this command!");
      }
  }
  var args = msg.content.split(/[ ]+/);
  if(commandIs("mute", msg)) {
       if(hasRole(msg.member, "disciples of kitty queen") || hasRole(msg.member, "O S K A R") || hasRole(msg.member, "Founder") || hasRole(msg.member, "Developer") || hasRole(msg.member, "Administrator") || hasRole(msg.member, "Admin") ||  hasRole(msg.member, "Loyals") || hasRole(msg.member, "God") || hasRole(msg.member, "Bot Controller")) {
        if(args.length === 1) {
            msg.reply('You did not define a argument. Usage: "!mute [User]');
        } else {
            msg.guild.member(msg.mentions.users.first()).setMute();
            msg.channel.sendMessage("", {embed: {
                color:3447003,
                author: {
                    name: msg.guild.member(msg.mentions.users.first()).displayName,
                    icon_url: msg.guild.member(msg.mentions.users.first()).icon_url,
                },
                title: 'User has been kicked!',
                fields: [
                    {
                        name: '**Action:** Kick'
                    },
                    {
                        name: '**Reason**: Breaking a rule.'
                    }
                ],
                timestamp: new Date(),
            }});
        }
      } else {
          msg.reply("You do not have the right role to execute this command!");
      }
  }
  var args = msg.content.split(/[ ]+/);
  if(commandIs("god", msg)) {
      msg.reply("God is love, God is life.");
  }
  var args = msg.content.split(/[ ]+/);
  if(commandIs("satan", msg)) {
      msg.reply("Satan is evil. He's the boss.");
  }
    var args = msg.content.split(/[ ]+/);
  if(commandIs("songs", msg)) {
               msg.channel.sendMessage("", {embed: {
  color: 3447003,
  fields: [
    {
      name: '**Songs**',
      value: 'You can find all the availible songs here!',
    },
    {
        name: '**Tokyo Ghoul Main Theme**',
        value: 'Usage. "!play song-ghoul"'
    },
    {
         name: "F*ck this shit i'm out",
         value: 'Usage. "!play song-out"'
    },
    {
        name: 'Fast Times At Clairemont High- Pierce The Veil.',
        value: 'Usage. "!play song-pierce"'
    },
    {
        name: 'Fred V & Grafix - Oyxgen',
        value: 'Usage: "!play song-oxygen"'
    },
    {
        name: 'When a fire starts to burn!',
        value: 'Usage: "!play song-fire"'
    },
    {
        name: 'Ed Sheeran - Shape Of You [Official Lyric Video]',
        value: 'Usage !play song-shape'
    },
    {
        name: 'Ellie Goulding - Burn',
        value: 'Usage. "!play song-burn"!'
    },
    {
        name: 'Gryffin & Illenium - Feel Good (feat. Daya)',
        value: 'Usage. "!play song-feel"!'
    },
    {
        name: 'Bastille - Pompeii',
        value: 'Usage. "!play song-pompeii"!'
    },
    {
        name: 'Cash me Outside Trap Remix',
        value: 'Usage: "!play song-cash"'
    },
    {
        name: 'AVICII & RICK ASTLEY - Never Gonna Wake You Up (NilsOfficial Mashup)',
        value: 'Usage. "!play song-wake'
    }
  ],
  timestamp: new Date(),
}});
  }
   var args = msg.content.split(/[ ]+/);
    if(commandIs("play song-ghoul", msg)) {
              if(hasRole(msg.member, "disciples of kitty queen") || hasRole(msg.member, "O S K A R") || hasRole(msg.member, "Founder") || hasRole(msg.member, "Developer") || hasRole(msg.member, "Administrator") || hasRole(msg.member, "Admin") ||  hasRole(msg.member, "Loyals") || hasRole(msg.member, "God") || hasRole(msg.member, "Bot Controller")) {
            const voiceChannel = msg.member.voiceChannel
        voiceChannel.join().then(connection =>  {
        const streamOptions = { seek: 0, volume: 0.05 };
        const ytdl = require('ytdl-core');
        const stream = ytdl('https://www.youtube.com/watch?v=MMDU4hhRjQM', {filter : 'audioonly'});
        const dispatcher = connection.playStream(stream, streamOptions);
                msg.channel.sendMessage("", {embed: {
  color: 3447003,
  fields: [
    {
      name: '**Now playing "Tokyo Ghoul Main Theme!"**',
      value: "To see all the possible songs do ':songs'"
    },
  ],
  timestamp: new Date(),
}});
        })
      } else {
          msg.reply("You do not have the right role to execute this command!");
      }
    }
     var args = msg.content.split(/[ ]+/);
    if(commandIs("play song-out", msg)) {
              if(hasRole(msg.member, "disciples of kitty queen") || hasRole(msg.member, "O S K A R") || hasRole(msg.member, "Founder") || hasRole(msg.member, "Developer") || hasRole(msg.member, "Administrator") || hasRole(msg.member, "Admin") ||  hasRole(msg.member, "Loyals") || hasRole(msg.member, "God") || hasRole(msg.member, "Bot Controller")) {
            const voiceChannel = msg.member.voiceChannel
        voiceChannel.join().then(connection =>  {
        const streamOptions = { seek: 0, volume: 0.05 };
        const ytdl = require('ytdl-core');
        const stream = ytdl('https://www.youtube.com/watch?v=5FjWe31S_0g', {filter : 'audioonly'});
        const dispatcher = connection.playStream(stream, streamOptions);
              msg.channel.sendMessage("", {embed: {
  color: 3447003,
  fields: [
    {
      name: '**Now playing "Fuck this shit im out!"**',
      value: "To see all the possible songs do ':songs'"
    },
  ],
  timestamp: new Date(),
}});
        })
      } else {
          msg.reply("You do not have the right role to execute this command!");
      }
    }
    var args = msg.content.split(/[ ]+/);
    if(commandIs("play song-pierce", msg)) {
              if(hasRole(msg.member, "disciples of kitty queen") || hasRole(msg.member, "O S K A R") || hasRole(msg.member, "Founder") || hasRole(msg.member, "Developer") || hasRole(msg.member, "Administrator") || hasRole(msg.member, "Admin") ||  hasRole(msg.member, "Loyals") || hasRole(msg.member, "God") || hasRole(msg.member, "Bot Controller")) {
            const voiceChannel = msg.member.voiceChannel
        voiceChannel.join().then(connection =>  {
        const streamOptions = { seek: 0, volume: 0.05 };
        const ytdl = require('ytdl-core');
        const stream = ytdl('https://www.youtube.com/watch?v=o1DYCsnFSqk', {filter : 'audioonly'});
        const dispatcher = connection.playStream(stream, streamOptions);
        msg.channel.sendMessage("", {embed: {
  color: 3447003,
  fields: [
    {
      name: '**Now playing "Pierce The Veil - Fast Times At Clairemont High**',
      value: "To see all the songs that can be played do '!songs'"
    },
  ],
  timestamp: new Date(),
}});
        })
      } else {
          msg.reply("You do not have the right role to execute this command!");
      }
    }
    var args = msg.content.split(/[ ]+/);
    if(commandIs("play song-oxygen", msg)) {
            if(hasRole(msg.member, "disciples of kitty queen") || hasRole(msg.member, "O S K A R") || hasRole(msg.member, "Founder") || hasRole(msg.member, "Developer") || hasRole(msg.member, "Administrator") || hasRole(msg.member, "Admin") ||  hasRole(msg.member, "Loyals") || hasRole(msg.member, "God") || hasRole(msg.member, "Bot Controller")) {
            const voiceChannel = msg.member.voiceChannel
        voiceChannel.join().then(connection =>  {
        const streamOptions = { seek: 0, volume: 0.05 };
        const ytdl = require('ytdl-core');
        const stream = ytdl('https://www.youtube.com/watch?v=X_typLTFRdk', {filter : 'audioonly'});
        const dispatcher = connection.playStream(stream, streamOptions);
                msg.channel.sendMessage("", {embed: {
  color: 3447003,
  fields: [
    {
      name: '**Now playing "Fred V & Grafix Oxygen!"**',
      value: "To see all the songs that can be played do '!songs'"
    },
  ],
  timestamp: new Date(),
}});
        })
      } else {
          msg.reply("You do not have the right role to execute this command!");
      }
    }
    var args = msg.content.split(/[ ]+/);
    if(commandIs("play song-fire", msg)) {
              if(hasRole(msg.member, "disciples of kitty queen") || hasRole(msg.member, "O S K A R") || hasRole(msg.member, "Founder") || hasRole(msg.member, "Developer") || hasRole(msg.member, "Administrator") || hasRole(msg.member, "Admin") ||  hasRole(msg.member, "Loyals") || hasRole(msg.member, "God") || hasRole(msg.member, "Bot Controller")) {
            const voiceChannel = msg.member.voiceChannel
        voiceChannel.join().then(connection =>  {
        const streamOptions = { seek: 0, volume: 0.05 };
        const ytdl = require('ytdl-core');
        const stream = ytdl('https://www.youtube.com/watch?v=4nsKDJlpUbA', {filter : 'audioonly'});
        const dispatcher = connection.playStream(stream, streamOptions);
        msg.channel.sendMessage("", {embed: {
  color: 3447003,
  fields: [
    {
      name: '**"Now playing "When a Fire Starts To Burn!"**',
      value: "To see all the songs that can be played do '!songs'"
    },
  ],
  timestamp: new Date(),
}});
        })
      } else {
          msg.reply("You do not have the right role to execute this command!");
      }
    }
    var args = msg.content.split(/[ ]+/);
    if(commandIs("play song-owen", msg)) {
              if(hasRole(msg.member, "disciples of kitty queen") || hasRole(msg.member, "O S K A R") || hasRole(msg.member, "Founder") || hasRole(msg.member, "Developer") || hasRole(msg.member, "Administrator") || hasRole(msg.member, "Admin") ||  hasRole(msg.member, "Loyals") || hasRole(msg.member, "God") || hasRole(msg.member, "Bot Controller")) {
            const voiceChannel = msg.member.voiceChannel
        voiceChannel.join().then(connection =>  {
        const streamOptions = { seek: 0, volume: 0.05 };
        const ytdl = require('ytdl-core');
        const stream = ytdl('https://youtu.be/uwc-LfIHlsE', {filter : 'audioonly'});
        const dispatcher = connection.playStream(stream, streamOptions);
        msg.channel.sendMessage("", {embed: {
  color: 3447003,
  fields: [
    {
      name: '**Now playing "Owen is Gay - Original Tune by Mike Montiel!"**',
      value: "To see all the songs that can be played do '!songs'"
    },
  ],
  timestamp: new Date(),
}});
        })
      } else {
          msg.reply("You do not have the right role to execute this command!");
      }
    }
      var args = msg.content.split(/[ ]+/);
    if(commandIs("play song-shape", msg)) {
              if(hasRole(msg.member, "disciples of kitty queen") || hasRole(msg.member, "O S K A R") || hasRole(msg.member, "Founder") || hasRole(msg.member, "Developer") || hasRole(msg.member, "Administrator") || hasRole(msg.member, "Admin") ||  hasRole(msg.member, "Loyals") || hasRole(msg.member, "God") || hasRole(msg.member, "Bot Controller")) {
            const voiceChannel = msg.member.voiceChannel
        voiceChannel.join().then(connection =>  {
        const streamOptions = { seek: 0, volume: 0.05 };
        const ytdl = require('ytdl-core');
        const stream = ytdl('https://www.youtube.com/watch?v=_dK2tDK9grQ', {filter : 'audioonly'});
        const dispatcher = connection.playStream(stream, streamOptions);
        msg.channel.sendMessage("", {embed: {
  color: 3447003,
  fields: [
    {
      name: '**Now playing "Ed Sheeran - Shape Of You [Official Lyric Video]"**',
      value: "To see all the songs that can be played do '!songs'"
    },
  ],
  timestamp: new Date(),
}});
        })
      } else {
          msg.reply("You do not have the right role to execute this command!");
      }
    }
      var args = msg.content.split(/[ ]+/);
    if(commandIs("play song-burn", msg)) {
              if(hasRole(msg.member, "disciples of kitty queen") || hasRole(msg.member, "O S K A R") || hasRole(msg.member, "Founder") || hasRole(msg.member, "Developer") || hasRole(msg.member, "Administrator") || hasRole(msg.member, "Admin") ||  hasRole(msg.member, "Loyals") || hasRole(msg.member, "God") || hasRole(msg.member, "Bot Controller")) {
            const voiceChannel = msg.member.voiceChannel
        voiceChannel.join().then(connection =>  {
        const streamOptions = { seek: 0, volume: 0.05 };
        const ytdl = require('ytdl-core');
        const stream = ytdl('https://www.youtube.com/watch?v=CGyEd0aKWZE', {filter : 'audioonly'});
        const dispatcher = connection.playStream(stream, streamOptions);
        msg.channel.sendMessage("", {embed: {
  color: 3447003,
  fields: [
    {
      name: '**Now playing "Ellie Goulding - Burn"**',
      value: "To see all the songs that can be played do '!songs'"
    },
  ],
  timestamp: new Date(),
}});
        })
      } else {
          msg.reply("You do not have the right role to execute this command!");
      }
    }
    var args = msg.content.split(/[ ]+/);
    if(commandIs("play song-feel", msg)) {
             if(hasRole(msg.member, "disciples of kitty queen") || hasRole(msg.member, "O S K A R") || hasRole(msg.member, "Founder") || hasRole(msg.member, "Developer") || hasRole(msg.member, "Administrator") || hasRole(msg.member, "Admin") ||  hasRole(msg.member, "Loyals") || hasRole(msg.member, "God") || hasRole(msg.member, "Bot Controller")) {
            const voiceChannel = msg.member.voiceChannel
        voiceChannel.join().then(connection =>  {
        const streamOptions = { seek: 0, volume: 0.05 };
        const ytdl = require('ytdl-core');
        const stream = ytdl('https://www.youtube.com/watch?v=JJYxNSRX6Oc', {filter : 'audioonly'});
        const dispatcher = connection.playStream(stream, streamOptions);
        msg.channel.sendMessage("", {embed: {
  color: 3447003,
  fields: [
    {
      name: '**Now playing "Gryffin & Illenium - Feel Good (feat. Daya)"**',
      value: "To see all the songs that can be played do '!songs'"
    },
  ],
  timestamp: new Date(),
}});
        })
      } else {
          msg.reply("You do not have the right role to execute this command!");
      }
    }
    var args = msg.content.split(/[ ]+/);
    if(commandIs("play song-pompeii", msg)) {
              if(hasRole(msg.member, "disciples of kitty queen") || hasRole(msg.member, "O S K A R") || hasRole(msg.member, "Founder") || hasRole(msg.member, "Developer") || hasRole(msg.member, "Administrator") || hasRole(msg.member, "Admin") ||  hasRole(msg.member, "Loyals") || hasRole(msg.member, "God") || hasRole(msg.member, "Bot Controller")) {
            const voiceChannel = msg.member.voiceChannel
        voiceChannel.join().then(connection =>  {
        const streamOptions = { seek: 0, volume: 0.05 };
        const ytdl = require('ytdl-core');
        const stream = ytdl('https://www.youtube.com/watch?v=F90Cw4l-8NY', {filter : 'audioonly'});
        const dispatcher = connection.playStream(stream, streamOptions);
        msg.channel.sendMessage("", {embed: {
  color: 3447003,
  fields: [
    {
      name: '**Now playing "Bastille - Pompeii"**',
      value: "To see all the songs that can be played do '!songs'"
    },
  ],
  timestamp: new Date(),
}});
        })
      } else {
          msg.reply("You do not have the right role to execute this command!");
      }
    }
     var args = msg.content.split(/[ ]+/);
    if(commandIs("play song-cash", msg)) {
              if(hasRole(msg.member, "disciples of kitty queen") || hasRole(msg.member, "O S K A R") || hasRole(msg.member, "Founder") || hasRole(msg.member, "Developer") || hasRole(msg.member, "Administrator") || hasRole(msg.member, "Admin") ||  hasRole(msg.member, "Loyals") || hasRole(msg.member, "God") || hasRole(msg.member, "Bot Controller")) {
            const voiceChannel = msg.member.voiceChannel
        voiceChannel.join().then(connection =>  {
        const streamOptions = { seek: 0, volume: 0.05 };
        const ytdl = require('ytdl-core');
        const stream = ytdl('https://www.youtube.com/watch?v=_IQUrR2qkj4', {filter : 'audioonly'});
        const dispatcher = connection.playStream(stream, streamOptions);
        msg.channel.sendMessage("", {embed: {
  color: 3447003,
  fields: [
    {
      name: '**Now playing "Cash Me Outside Trap Remix"**',
      value: "To see all the songs that can be played do '!songs'"
    },
  ],
  timestamp: new Date(),
}});
        })
      } else {
          msg.reply("You do not have the right role to execute this command!");
      }
    }
    var args = msg.content.split(/[ ]+/);
    if(commandIs("play song-wake", msg)) {
              if(hasRole(msg.member, "disciples of kitty queen") || hasRole(msg.member, "O S K A R") || hasRole(msg.member, "Founder") || hasRole(msg.member, "Developer") || hasRole(msg.member, "Administrator") || hasRole(msg.member, "Admin") ||  hasRole(msg.member, "Loyals") || hasRole(msg.member, "God") || hasRole(msg.member, "Bot Controller")) {
            const voiceChannel = msg.member.voiceChannel
        voiceChannel.join().then(connection =>  {
        const streamOptions = { seek: 0, volume: 0.05 };
        const ytdl = require('ytdl-core');
        const stream = ytdl('https://www.youtube.com/watch?v=oT3mCybbhf0', {filter : 'audioonly'});
        const dispatcher = connection.playStream(stream, streamOptions);
        msg.channel.sendMessage("", {embed: {
  color: 3447003,
  fields: [
    {
      name: '**Now playing "AVICII & RICK ASTLEY - Never Gonna Wake You Up (NilsOfficial Mashup)"**',
      value: "To see all the songs that can be played do '!songs'"
    },
  ],
  timestamp: new Date(),
}});
        })
      } else {
          msg.reply("You do not have the right role to execute this command!");
      }
    }
     var args = msg.content.split(/[ ]+/);
    if(commandIs("play song-fissy", msg)) {
              if(hasRole(msg.member, "disciples of kitty queen") || hasRole(msg.member, "O S K A R") || hasRole(msg.member, "Founder") || hasRole(msg.member, "Developer") || hasRole(msg.member, "Administrator") || hasRole(msg.member, "Admin") ||  hasRole(msg.member, "Loyals") || hasRole(msg.member, "God") || hasRole(msg.member, "Bot Controller")) {
            const voiceChannel = msg.member.voiceChannel
        voiceChannel.join().then(connection =>  {
        const streamOptions = { seek: 0, volume: 0.05 };
        const ytdl = require('ytdl-core');
        const stream = ytdl('https://www.youtube.com/watch?v=79zPSxF0nS4', {filter : 'audioonly'});
        const dispatcher = connection.playStream(stream, streamOptions);
        msg.channel.sendMessage("", {embed: {
  color: 3447003,
  fields: [
    {
      name: '**Now playing "Fissy Games Sings Let It Go (Old)"**',
      value: "To see all the songs that can be played do '!songs'"
    },
  ],
  timestamp: new Date(),
}});
        })
      } else {
          msg.reply("You do not have the right role to execute this command!");
      }
    }
     var args = msg.content.split(/[ ]+/);
    if(commandIs("play song-fissy2", msg)) {
              if(hasRole(msg.member, "disciples of kitty queen") || hasRole(msg.member, "O S K A R") || hasRole(msg.member, "Founder") || hasRole(msg.member, "Developer") || hasRole(msg.member, "Administrator") || hasRole(msg.member, "Admin") ||  hasRole(msg.member, "Loyals") || hasRole(msg.member, "God") || hasRole(msg.member, "Bot Controller")) {
            const voiceChannel = msg.member.voiceChannel
        voiceChannel.join().then(connection =>  {
        const streamOptions = { seek: 0, volume: 0.5 };
        const ytdl = require('ytdl-core');
        const stream = ytdl('https://www.youtube.com/watch?v=KNEuG1PFBQk', {filter : 'audioonly'});
        const dispatcher = connection.playStream(stream, streamOptions);
        msg.channel.sendMessage("", {embed: {
  color: 3447003,
  fields: [
    {
      name: '**Now playing "Fissy Games Sings Let It Go (New)"**',
      value: "To see all the songs that can be played do '!songs'"
    },
  ],
  timestamp: new Date(),
}});
        })
      } else {
          msg.reply("You do not have the right role to execute this command!");
      }
    }
     var args = msg.content.split(/[ ]+/);
    if(commandIs("play song-isa", msg)) {
              if(hasRole(msg.member, "disciples of kitty queen") || hasRole(msg.member, "O S K A R") || hasRole(msg.member, "Founder") || hasRole(msg.member, "Developer") || hasRole(msg.member, "Administrator") || hasRole(msg.member, "Admin") ||  hasRole(msg.member, "Loyals") || hasRole(msg.member, "God") || hasRole(msg.member, "Bot Controller")) {
            const voiceChannel = msg.member.voiceChannel
        voiceChannel.join().then(connection =>  {
        const streamOptions = { seek: 0, volume: 0.5 };
        const ytdl = require('ytdl-core');
        const stream = ytdl('https://www.youtube.com/watch?v=c_Of1QXM3gg', {filter : 'audioonly'});
        const dispatcher = connection.playStream(stream, streamOptions);
        msg.channel.sendMessage("", {embed: {
  color: 3447003,
  fields: [
    {
      name: '**Now playing "Bang Bang - ISA - Cover shreds"**',
      value: "To see all the songs that can be played do '!songs'"
    },
  ],
  timestamp: new Date(),
}});
        })
      } else {
          msg.reply("You do not have the right role to execute this command!");
      }
    }
    var args = msg.content.split(/[ ]+/);
    if(commandIs("play sing-off", msg)) {
              if(hasRole(msg.member, "disciples of kitty queen") || hasRole(msg.member, "O S K A R") || hasRole(msg.member, "Founder") || hasRole(msg.member, "Developer") || hasRole(msg.member, "Administrator") || hasRole(msg.member, "Admin") ||  hasRole(msg.member, "Loyals") || hasRole(msg.member, "God") || hasRole(msg.member, "Bot Controller")) {
            const voiceChannel = msg.member.voiceChannel
        voiceChannel.join().then(connection =>  {
        const streamOptions = { seek: 0, volume: 1 };
        const ytdl = require('ytdl-core');
        const stream = ytdl('https://www.youtube.com/watch?v=fspeBQf-4pg', {filter : 'audioonly'});
        const dispatcher = connection.playStream(stream, streamOptions);
        msg.channel.sendMessage("", {embed: {
  color: 3447003,
  fields: [
    {
      name: '**Now playing "Oskar Johansson Kid Voice"**',
      value: "To see all the songs that can be played do '!songs'"
    },
  ],
  timestamp: new Date(),
}});
        })
      } else {
          msg.reply("You do not have the right role to execute this command!");
      }
    }
    var args = msg.content.split(/[ ]+/);
    if(commandIs("play song-parodi", msg)) {
              if(hasRole(msg.member, "disciples of kitty queen") || hasRole(msg.member, "O S K A R") || hasRole(msg.member, "Founder") || hasRole(msg.member, "Developer") || hasRole(msg.member, "Administrator") || hasRole(msg.member, "Admin") ||  hasRole(msg.member, "Loyals") || hasRole(msg.member, "God") || hasRole(msg.member, "Bot Controller")) {
            const voiceChannel = msg.member.voiceChannel
        voiceChannel.join().then(connection =>  {
        const streamOptions = { seek: 0, volume: 0.5 };
        const ytdl = require('ytdl-core');
        const stream = ytdl('https://www.youtube.com/watch?v=rG8XpOc9Md4', {filter : 'audioonly'});
        const dispatcher = connection.playStream(stream, streamOptions);
        msg.channel.sendMessage("", {embed: {
  color: 3447003,
  fields: [
    {
      name: '**Now playing "Bröderna Norberg - Parodi"**',
      value: "To see all the songs that can be played do '!songs'"
    },
  ],
  timestamp: new Date(),
}});
        })
      } else {
          msg.reply("You do not have the right role to execute this command!");
      }
    }
    var args = msg.content.split(/[ ]+/);
    if(commandIs("play song-rolling", msg)) {
              if(hasRole(msg.member, "disciples of kitty queen") || hasRole(msg.member, "O S K A R") || hasRole(msg.member, "Founder") || hasRole(msg.member, "Developer") || hasRole(msg.member, "Administrator") || hasRole(msg.member, "Admin") ||  hasRole(msg.member, "Loyals") || hasRole(msg.member, "God") || hasRole(msg.member, "Bot Controller")) {
            const voiceChannel = msg.member.voiceChannel
        voiceChannel.join().then(connection =>  {
        const streamOptions = { seek: 0, volume: 0.5 };
        const ytdl = require('ytdl-core');
        const stream = ytdl('https://www.youtube.com/watch?v=Zll4x_C2uSo', {filter : 'audioonly'});
        const dispatcher = connection.playStream(stream, streamOptions);
        msg.channel.sendMessage("", {embed: {
  color: 3447003,
  fields: [
    {
      name: '**Now playing "Adele - Rolling in the deep"**',
      value: "To see all the songs that can be played do '!songs'"
    },
  ],
  timestamp: new Date(),
}});
        })
      } else {
          msg.reply("You do not have the right role to execute this command!");
      }
    }
});




client.login('procces.env.BOT_TOKEN);
