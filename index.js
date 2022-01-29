const Discord = require("discord.js");

const TOKEN = "OTM2NjQ5Mjc1ODY0MTQxODY1.YfQQnQ.FM-SaK-FNFxNyyYBorRbuGv21Y8"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
});

client.on("ready", () => {
    console.log('Bot Start!');
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("shut up")
    }
});

client.login(TOKEN)