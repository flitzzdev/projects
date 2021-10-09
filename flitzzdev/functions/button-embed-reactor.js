const buttonss = require("./non-public-functions/buttons")
const Discord = require("discord.js");

async function ButtonPaginator(message, pages, buttons = [], time = 60000) {
    if (!message) throw new ReferenceError('EmbedPages => "message" is not defined')
    if (!pages || typeof pages !== 'object') throw new SyntaxError('EmbedPages => Invalid form body [pages]')
    if (message.guild.me?.permissions.has('MANAGE_MESSAGES')) {
        let msg = await buttonss(`Page 1 / ${pages.length}`, {
            buttons: buttons,
            embed: pages[0]
        }, message.client, message).then(a => {
            return {
                id: a.id,
                channelID: a.channel_id,
                uid: a.author.id
            };
        });
        message.client.on('clickButton', button => {
            if (msg.uid === button.message.author.id) {
                let i = button.message.content.split("Page")[1].split("/")[0] - 1;
                if (button.id == "back") {
                    if (i !== 0) i--;
                } else if (button.id == "next") {
                    if (i !== pages.length - 1) i++;
                }
                if (message.client.channels.cache.get(msg.channelID)?.messages.cache.get(msg.id).author.id == message.client.user.id) message.client.channels.cache.get(msg.channelID).messages.cache.get(msg.id).edit(`Page ${i + 1} / ${pages.length}`, pages[i])
            }
        });
    };
};

module.exports = ButtonPaginator;