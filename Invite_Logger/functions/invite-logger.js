const invites = {};
const Discord = require("discord.js");

/**
 * Invite Logger system in Discord bot using discord.js
 * @param {Discord.Client} client 
 * @returns {Promise<void>}
 */
async function inviteLogger(client) {
    const wait = require('./sleep');
    client.on('ready', async () => {
        await wait(1000);
        client.guilds.cache.forEach(g => {
            g.invites.fetch().then(guildInvites => {
                invites[g.id] = guildInvites;
            });
        });
    });
    client.on('guildMemberAdd', /** @type {Discord.GuildMember}*/ member => {
        try {
            member.guild.invites.fetch().then(async guildInvites => {
                const ei = invites[member.guild.id];
                invites[member.guild.id] = guildInvites;
                if (!ei) return;
                await member.guild.invites.fetch().catch(() => undefined);
                const invite = guildInvites.find(i => {
                    const a = ei.get(i.code);
                    if (!a) return;
                    return a
                });
                if (!invite) return;
                const inviter = client.users.cache.get(invite.inviter.id);
                client.emit("inviteJoin", member, invite, inviter)
            });
        } catch (e) {}
    });
};

/**
 * @event inviteJoin
 * @param {Discord.GuildMember} member The guild member
 * @param {Discord.Invite} invite The invite
 * @param {Discord.User} inviter The inviter
 */

module.exports = inviteLogger;
