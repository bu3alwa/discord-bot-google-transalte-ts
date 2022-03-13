import { Client, Intents } from 'discord.js'

import interactionCreate from './events/interactionCreate'
import onReady from './events/ready'
import { discordToken } from './utils/secrets'

const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

onReady(client)
interactionCreate(client)

client.login(discordToken)
