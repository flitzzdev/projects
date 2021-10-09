async function randomNumber(options = {}) {
    if (!options.Minimum) throw new Error(`No Minimum Number Provided, Join https://discord.gg/2FMvpaUcWh For Help`);
    if (!options.Maximum) throw new Error(`No Maximum Number Provided, Join https://discord.gg/2FMvpaUcWh For Help`);

    if (isNaN(parseInt(options.Minimum))) throw new Error(`Minimum Number Provided Isn't A Number, Join https://discord.gg/2FMvpaUcWh For Help`);
    if (isNaN(parseInt(options.Maximum))) throw new Error(`Maximum Number Provided Isn't A Number, Join https://discord.gg/2FMvpaUcWh For Help`);

    const minnum = parseInt(options.Minimum)
    const maxnum = parseInt(options.Maximum)

    var number = Math.floor(Math.random() * maxnum) + minnum

    return number;
};

module.exports = randomNumber;