const Discord = require('discord.js');

module.exports = {
    name: 'discord',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        message.channel.send(":billed_cap:");
    }
 
}   