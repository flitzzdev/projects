const Discord = require("discord.js");
const schema = require("./schema/remind");
const ms = require("./non-public-functions/ms");

module.exports = async (memberID, time, reason) => {
    if (!memberID) throw new Error('[FlitzzDev] Member is not defined in remind function')
    if (!time) throw new Error('[FlitzzDev] Time is not defined in remind function')
    if (!reason) throw new Error('[FlitzzDev] Reason is not defined in remind function')
    if (!ms(time)) throw new Error('[FlitzzDev] Time is invalid in remind function')
    const data = new schema({
        memberID: (memberID),
        reason: (reason),
        time: (ms(time) + Date.now()),
        timeMS: ms(time)
    });
    data.save().catch(e => console.log("[FlitzzDev] saving remind to db"))
};


module.exports.startRemind = async (client) => {
    if (!client) throw new Error('[FlitzzDev] Client is not defined in remind function')
    setInterval(() => {
        schema.find({}, function (err, docs) {
            if (err) return console.log(err)
            docs.forEach(async doc => {
                if (doc.time <= Date.now()) {
                    await schema.deleteOne(doc);
                    await client.users.fetch(doc.memberID);
                    client.emit('reminder', client.users.cache.get(doc.memberID), doc.reason, await parseMS(doc.timeMS), doc.timeMS)
                };
            });
        });
    }, 10000);
}

async function parseMS(ms) {
    if(typeof ms == "number"){
        let seconds = ms / 1000,

        days = seconds / 86400;
    seconds = seconds % 86400

    let hours = seconds / 3600;
    seconds = seconds % 3600

    let minutes = seconds / 60;
    seconds = seconds % 60;

    if (days) {
        return `${days} day, ${hours} hours, ${minutes} minutes`
    } else if (hours) {
        return `${hours} hours, ${minutes} minutes, ${seconds} seconds`
    } else if (minutes) {
        return `${minutes} minutes, ${seconds} seconds`
    }

    return `${seconds} second(s)`
    } else {
        return null;
    }
    
};
