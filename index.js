const { Client } = require("discord.js");
const client = new Client({
  intents: 32767,
});

client.config = require("./config.json");

client.login(client.config.token).then(() => {
  console.log("Bot is Online ✅");
  client.user.setActivity("Suppp");
});
