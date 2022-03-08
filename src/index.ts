import { Client, Intents } from 'discord.js'
import onReady from './events/onReady'
import onInteraction from './events/onInteraction'
import registerCommands from './commands'

const client = new Client({intents: [Intents.FLAGS.GUILDS]})

registerCommands()
client.on('ready', onReady)

client.on(
    'interactionCreate',
    async (interaction) => await onInteraction(interaction))

client.login()