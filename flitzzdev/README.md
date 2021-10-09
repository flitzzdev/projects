<div  align="center">
<h1>Flitzzdev</h1>
</div>

## 📥 || Installation

To install the package you need:

- You need to install [**Node.js**](https://nodejs.org/en/download/).

- You need to install [**discord.js**](https://npmjs.com/package/discord.js).

- Type **npm i flitzzdev@latest** in the terminal to install the latest version of the package




## 📜 || Features

### Functions:

-  [`Capitalize()`](https://www.npmjs.com/package/flitzzdev#capitalize) - Capitalize the first letter of a string

-  [`passGen()`](https://www.npmjs.com/package/flitzzdev#passgen) - Function to create passwords made by letters and numbers randomly with specified length.

-  [`bin()`](https://www.npmjs.com/package/flitzzdev#bin) - Function that allows you to bin codes.

-  [`remind()`](https://npmjs.com/package/flitzzdev#remind) - Function to make remind command 

-  [`Transcript`](https://npmjs.com/package/flitzzdev#fetch-message) - Fetch messages from a channel

-  [`randomNumber()`](https://npmjs.com/package/flitzzdev#random-number) - Create a random number

### Events:

- [`inviteJoin`](https://www.npmjs.com/package/flitzzdev#invite-logger-event) allows you to get some informations about the invite such as the inviter, etc...

-  [`Chatbot`](https://npmjs.com/package/flitzzdev#chatbot) - A simple chatbot to set up!

<hr>
<br>
<br>

# || Functions:
## Capitalize
```javascript
const { Capitalize } = require('flitzzdev') // Import my package

module.exports = {
    name: 'capitalize',
    description: 'Capitalize the first letter of the text',
    run: async(client, message, args) => { // Change To Your Own Handler
        const text = `hey, How Are You?`
        if(!text) return message.reply('Provide Text') // Return a message if there is no text

        const capitaled = await Capitalize({
            Capital: text
        });
        message.channel.send(capitaled);
    }
}
```
## passGen

Generates a simple password


**Example:**

```js
// Define the package
const  Flitz = require('flitzzdev')

// Fetching the function
const  passGen = Flitz.passGen

// The numbers into the () of the passGen function will be the length
console.log(passGen(6)) 
```
> passGen(Length: Number)

## Bin

Bin some code with this function

**Example:**

```js
// Defining the package...
const  Flitz = require('flitzzdev')

// if there are no args, it will return a message
if (!args.join(' ')) return  message.channel.send('What do you want to bin?');

// else if everything works fine, we will make a new varible called "bin"
else {

// it will be used to bin the args.join(' ') also known as the message.content
const  bin = await  Flitz.bin(args.join(' '), true);

// then here we will send the results!
message.channel.send('The binned code!' + bin)
}
```
> bin(String)
`Flitz.bin(args.join(' '), true/false)` if its true that mean the bin is editable, else if its false that means no one can edit it.

## Remind
Used in remind command.
Parameters: 
- MemberID
- Time
- Reason
  
**Example**
```js
const Flitz = require("flitzzdev").remind;
const time = args[0];
const reason = args.slice(1).join(" ");
if (!time) return message.channel.send("Please specify some time")
if (!reason) return message.channel.send("Please specify a reason")
remind(message.author.id, time, reason);
message.channel.send("I've set a reminder")
```



## Fetch Message
Fetch messages from a channel

Credits: [reconlx](https://www.npmjs.com/package/reconlx)
### Preview
```javascript
const { MessageAttachment } = require('discord.js') // Define discord.js
const { fetchMessage } = require('flitzzdev') // Importing....

module.exports = { // My Handler
    name: 'fetch-messages',
    description: 'Fetch Messages From A Channel',
    run: async(message, args) => { // My Handler
        
        fetchMessage(message, 10).then((data) => { // Fetch Messages between 0 and 100
            const file = new MessageAttachment(data, "fetched.html"); // Make a new attachment
            message.channel.send({files: [file]}); // Send it as an attachment
        });
    }
}
```
## Random Number
```javascript
const { randomName } = require('flitzzdev') // Importing....

module.exports = { // Change To Your Handler
    name: 'number',
    description: 'Get Random Number',
    execute(message, args) { // Change To Your Handler

        const number = await randomNumber({
            Minimum: 5, // The Minimum Number
            Maximum: 45, // The Maximum Number
        }) // Will Show OutPut From 5(Minimum) To 50(Minimum+Maximum)
        message.channel.send({content: umber}) // OutPut: 5, 49, 50, 17, 29
    }
}
```

# Events:
## Invite Logger Event

This event is for logging invite uses. 

- member
- invite
- inviter

**Example:**

```js
// Define flitzzdev package
const  Flitz = require("flitzzdev")
// Define discord.js
const  discord = require('discord.js')
// Create a discord client
const  client = new  discord.Client()
// Define the logger
Flitz.inviteLogger(client) 
// The event should work
client.on('inviteJoin', (member, invite, inviter) => {
// Result
console.log(`${member.user.tag} is joined by using the code ${invite.code} wich origin is ${inviter.tag}. Times used: ${invite.uses}`)
});
```
> `Flitz.inviteLogger(client) 
` if you dont put client between () after it, the event wont work

## ChatBot
 Using Message Event
### PreView
```js
const { chatBot } = require('flitzzdev') // Importing Package

client.on('message', async message => {
    if(message.channel.id === '777919296595820564') { // Channel ID
    if(message.author.bot) return // If author is a bot it won't reply
    if(message.channel.type === 'dm') return // If message channel is dm it will return
    if(message.attachments.size > 0) return message.reply('I Can\`t read Images') // Images are not allowed
    else {
        const reply = await chatBot({ Message: message }); // Fetches the message of the user
        return message.channel.send(`${message.author.tag}, ${reply}`); // Reply to a user
        }
    }
})
```

Send me a dm on discord: Flitz#2708 to send idea's or bugs!
