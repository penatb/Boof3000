// var Discord = require('discord.io');
// var logger = require('winston');
// var auth = require('./auth.json');
// var fs = require('fs');
// // Configure logger settings
// logger.remove(logger.transports.Console);
// logger.add(new logger.transports.Console, {
//     colorize: true
// });
// logger.level = 'debug';
// // Initialize Discord Bot
// var bot = new Discord.Client({
//    token: auth.token,
//    autorun: true
// });
// bot.on('ready', function (evt) {
//     logger.info('Connected');
//     logger.info('Logged in as: ');
//     logger.info(bot.username + ' - (' + bot.id + ')');
// });

// //load config data
// var Config = {};
// try{
//     Config = require("./config.json");
// } catch(e){ //no config file, use defaults
//     Config.debug = false;
//     Config.commandPrefix = '!';
//     try{
//         if(fs.lstatSync("./config.json").isFile()){ // open config file
//             console.log("WARNING: config.json found but we couldn't read it!\n" + e.stack); // corrupted config file
//         }
//     } catch(e2){
//         fs.writeFile("./config.json",JSON.stringify(Config,null,2), (err) => {
//             if(err) console.error(err);
//         });
//     }
// }
// if(!Config.hasOwnProperty("commandPrefix")){
//     Config.commandPrefix = '!'; // set bots prefix
// }

// bot.on('message', function (user, userID, channelID, message, evt) {
//     // Our bot needs to know if it will execute a command
//     // It will listen for messages that will start with `!`
//     if (message.substring(0, 1) == '!') {
//         var cmd = args[0];
//         var args = message.substring(1).split(' ');
//         //var cmdTxt = message.content.split(/\s/)[0].substring(Config.commandPrefix.length);
//         //var suffix = message.content.substring(cmdTxt.length+Config.commandPrefix.length+1);      
       
//         args = args.splice(1);
//         switch(cmd) {
//             // !ping
//             case 'ping':
//                 bot.sendMessage({
//                     to: channelID,
//                     message: 'ur gaey!'
//                 });
//             break;
//             // Just add any case commands if you want to..
//             // !help
//             case 'yell':
//                 //usage: "<message>",
//                 //description: "Bot sends message in text to speech.",
//                 message.channelID.send(message,{tts:true});
//             break;
//          }
//      }
// });

var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'ur super gaey!'
                });
            break;
            // Just add any case commands if you want to..
            case 'yell':
                bot.sendMessage({to: channelID, message: 'wiggle wiggle wiggle'}, {tts: true})
                //bot.sendMessage('wiggle wiggle wiggle',{tts:true});
            break;
            case 'help':
                bot.sendMessage({
                    to: channelID,
                    message: 'I respond to !ping and !yell'
                })
                //bot.sendMessage('wiggle wiggle wiggle',{tts:true});
            break;
         }
     }
});