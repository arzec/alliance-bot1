const Discord = require ('discord.js');

var bot = new Discord.Client()
var prefix = ("-")
var randnum = 0;

bot.on('ready' , () => {
    bot.user.setPresence({ game: { name: 'Air Carrier' , type: 0}});
    console.log('Bot Ready !');
});

bot.login('NDc5MDU5NDA3OTY4NDAzNDg2.DlTusw.KrqwgQOD-i-yOy670DekbuKNlA4');

bot.on('message', message => {

if (message.content === prefix + "Tokyo Airlines"){
    var other_embed = new Discord.RichEmbed()
      .setColor("#00EA37")
      .setTitle("Tokyo Airlines")
      .addField("Le lien :", "https://www.air-carrier.fr/game/compagnie/2884")
  message.channel.sendEmbed(other_embed);
  console.log("Tokyo Airlines");

}
});

bot.on('message' , message => {

if (message.content === prefix + "Eliot Airlines"){
    var other_embed = new Discord.RichEmbed()
       .setColor("#E5A000")
       .setTitle("Eliot Airlines")
       .addField("Le lien :", "https://www.air-carrier.fr/game/compagnie/3204" )
  message.channel.sendEmbed(other_embed);
  console.log ("Eliot Airlines");

}
});

  bot.on('message' , message => {

if (message.content === prefix + "help"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#00E5E5")
    .setTitle("Commande Bot")
    .addField("-help : affiche les commandes", "toute les commandes visibles du bot")
    .addField("-Nom de la Compagnie Ex: -Eliot Airlines _*lien de la compagnie*_", "permet de voir le profile de la compagnie en question")
    .addField("-skyzophrénie", "le bot parle tout seule")
 message.channel.sendEmbed(help_embed);
 console.log("help")

}    
});

bot.addListener('message' , function (message) {
if (message.content === '-skyzophrénie'){
    message.channel.send('bonjour')
}

});

bot.addListener('message' , function (message) {
if (message.content === 'bonjour'){
    message.channel.send('bonjour comment ça va')
}
    
});

bot.addListener('message' , function (message) {
if (message.content === 'bonjour comment ça va'){
    message.channel.send('moi ça va et toi')
}
        
});

        bot.addListener('message' , function (message) {
if (message.content === 'moi ça va et toi'){
    message.channel.send('bien tu joue a quoi')
}
            
});

bot.addListener('message' , function (message) {
if (message.content === 'bien tu joue a quoi'){
     message.channel.send('je joue a Air Carrier')
}
    
});

bot.addListener('message' , function (message) {
if (message.content === 'je joue a Air Carrier'){
     message.channel.send('ok salut')
}
    
});

bot.addListener('message' , function (message) {
    if (message.content === 'ok salut'){
     message.channel.send('au revoir')
    }
    
    });

if (message.content === "comment va l'alliance"){

    if (randnum == 1){
      message.reply("L'econonomie de l'alliance se port bien")
        }
    
    if (randnum == 2){
      message.replay("L'alliance n'a aucune dificulté")
    }
}



    function random(min, max) {
        min = Math.cell(0);
        max = Math.cell(2);
        randnum = Math.floor(Math.random() * (max - min +1) +min);

    }
