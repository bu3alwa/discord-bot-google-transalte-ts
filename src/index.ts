import { Client, Intents } from 'discord.js'

import interactionCreate from './events/interactionCreate'
import ready from './events/ready'
import { discordToken } from './utils/secrets'

const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

ready(client)
interactionCreate(client)

client.login(discordToken)
