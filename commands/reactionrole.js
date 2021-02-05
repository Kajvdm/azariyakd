module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '806963872585220096';
        const pvpRole = message.guild.roles.cache.find(role => role.id === "806640469416214629");
        const eventRole = message.guild.roles.cache.find(role => role.id === "806640121407209472");
 
        const pvpEmoji = '⚔️';
        const eventEmoji = '🗓️';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Azariya Custom Tags')
            .setDescription('Klik een van de onderstaande emojis om jouw role te ontvangen.\n\n'
                + `${pvpEmoji} Ontvang PvP tags!\n`
                + `${eventEmoji} Ontvang Event tags!`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(pvpEmoji);
        messageEmbed.react(eventEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === pvpEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(pvpRole);
                }
                if (reaction.emoji.name === eventEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(eventRole);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === pvpEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(pvpRole);
                }
                if (reaction.emoji.name === eventEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(eventRole);
                }
            } else {
                return;
            }
        });
    }
 
}   