const Discord = require('discord.js');

module.exports = {
    name: 'ticket',
    aliases: [],
    description: 'opens a ticket',
    async execute(client, message, args, cmd, discord){

        await message.delete();

        if(message.channel.id === '835217936096559144')
        {

        let modRole = message.guild.roles.cache.find(role => role.id === '835961534168694817');
        let tsupRole = message.guild.roles.cache.find(role => role.id === '835961534168694817');

        const channel = await message.guild.channels.create(`ticket-${message.author.tag}`, {
            type: 'text',
            permissionOverwrites: [
                {
                    id: message.guild.id,
                    deny: ['VIEW_CHANNEL']
                },
                {
                    id: message.member.id,
                    allow: ['VIEW_CHANNEL','SEND_MESSAGES']
                },
                {
                    id: modRole.id,
                    allow: ['VIEW_CHANNEL','SEND_MESSAGES']
                },
                {
                    id: tsupRole.id,
                    allow: ['VIEW_CHANNEL','SEND_MESSAGES']
                },
            ]
        });
        channel.setParent('835509765375000586', { lockPermissions: false });


        let reason = args.slice(1).join(" ");
        if (!reason) reason = "No reason given";
        const t2Embed = new Discord.MessageEmbed()
        .setTitle(`Thank you for creating a ticket ${message.author.tag}`)
        .setDescription(`
        Support will be with you shortly.
        To close a ticket at any time, type date.close (Only Staff) 
        Reason for ticket - ${reason}
        Please elaborate on what you need, while you wait for support to arrive.`)
        .setColor("#304281");
        

        const reactionMessage = await channel.send(t2Embed)

    } else 

    return;

       
            
        
    },
};