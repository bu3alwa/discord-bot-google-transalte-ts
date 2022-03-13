import { Client, Intents } from 'discord.js'

import registerCommands from './commands'
import interactionCreate from './events/interactionCreate'
import onReady from './events/onReady'

const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

registerCommands()

onReady(client)
interactionCreate(client)

client.login()
