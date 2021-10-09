<div  align="center">
<h1>invite-logger</h1>
</div>

## 📥 || Installation

To install the package you need:

- You need to install [**Node.js**](https://nodejs.org/en/download/).

- You need to install [**discord.js**](https://npmjs.com/package/discord.js).

- Type **npm i invite-logger@latest** in the terminal to install the latest version of the package




## 📜 || Features

### Functions:


- [`inviteJoin`](https://www.npmjs.com/package/invite-logger#invite-logger-event) allows you to get some informations about the invite such as the inviter, etc...

<hr>
<br>
<br>

# || Functions:

## Invite Logger Event

This event is for logging invite uses. 

- member
- invite
- inviter

**Example:**

```js
// Define invite package
const invite = require("invite-logger")
// Define discord.js
const discord = require('discord.js')
// Create a discord client
const client = new  discord.Client()
// Define the logger
invite.inviteLogger(client) 
// The event should work
client.on('inviteJoin', (member, invite, inviter) => {
// Result
console.log(`${member.user.tag} is joined by using the code ${invite.code} wich origin is ${inviter.tag}. Times used: ${invite.uses}`)
});
```
> `invite.inviteLogger(client) 
` if you dont put client between () after it, the event wont work


> Send me a dm on discord: Flitz#5059 to send idea's or bugs!