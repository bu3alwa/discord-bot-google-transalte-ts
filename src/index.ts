import { Client, Intents } from 'discord.js'
import * as dotenv from 'dotenv'

const commands = [{
    name: 'ping',
    description: 'pong'
}]

dotenv.config()

const client = new Client({intents: [Intents.FLAGS.GUILDS]})


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on('message', msg => {
    if (msg.content === "ping")
    {
        msg.reply('pong')
    }
})

client.login()