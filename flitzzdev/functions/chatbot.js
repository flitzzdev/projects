const fetch = require("node-fetch");

async function chatBot(options = {}) {
	if(!options.Message) throw new Error(`No Message Provided, Join https://discord.gg/2FbeMdpJzq For Help`);
	if(options.Message.length > 1900) throw new Error("Message Should Be Less Than 1900 Words, Join https://discord.gg/2FbeMdpJzq For Help");

	const res = await fetch(encodeURI(`https://api.affiliateplus.xyz/api/chatbot?message=${options.Message}&botname=AIO&ownername=Ubaid7&user=Ubaid7`)), json = await res.json();

	if(!json.message) throw new Error(`An Error Occured, Join https://discord.gg/2FbeMdpJzq For Help`);

	if(options.ResultOnly && options.ResultOnly === true) return {
		Result: json.message
	};

	return json.message;
};

module.exports = chatBot;