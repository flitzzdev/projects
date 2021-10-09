# Transcripter
Making Your Discord.JS Ticket System a lot easier to create

<div align="center">
  
</div>

## Contents
- [Installation](https://www.npmjs.com/packagetranscripter#installation)
- [Table of Content](https://www.npmjs.com/package/transcripter#table-of-content)
- [Examples](https://www.npmjs.com/package/transcripter#examples)
## Installation
```bash
npm install transcripter
```
To Install Latest Version Use:
```bash
npm install transcripter@latest
```

## Table of Content
- [Fetch Message](https://www.npmjs.com/package/transcripter#Fetch-Message): Easy Way Fetch Messages From A Channel

## Examples

### Fetch Message
A simple transcripter for your ticket system, change the template file to your own custom page

```javascript
const { MessageAttachment } = require('discord.js')
const { fetchMessage } = require('transcripter')

module.exports = {
    name: 'fetch-messages',
    description: 'Fetch Messages From A Channel',
    run: async(client, message, args) {
        
        fetchMessage(message, 10).then((data) => { 
            const file = new MessageAttachment(data, "fetched.html");
            message.channel.send(file);
        });
    }
}
```
> Send me a dm on discord: Flitz#5059 to send idea's or bugs!