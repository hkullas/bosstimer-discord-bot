# bosstimer-discord-bot
A simple Discord bot to notify the users for whenever a boss is spawned (in Black Desert Online EU).

# Requirements
__Node.JS__ (https://nodejs.org/en/) is required for this application. Also __'discord.js'__ package is required _(via CMD in root directory)_:

```
npm init
npm install [package-name] --save
```

__discord.js__ (based on **Discord API**) (https://discord.js.org/#/docs/main/stable/general/welcome) is used as well, so you may want to check it out.

# Usage
First, make sure all the required packages and modules are correctly installed.

1. Bot (BDO Boss Timer) needs to be invited to your own Discord server.
2. Start the server: `node bot.js`
3. Bot knows two different commands;
    * Channel where the bot messages: `.bt [channel/c] [channel-name]`
    * Notification time in minutes before the boss spawns: `.bt [notice/n] [minutes]`

(Currently this bot only works in EU server and UTC+3 time zone.)

# Files
* "/bot.js"
