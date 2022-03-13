import type { Client } from 'discord.js'

import { Commands } from '../commands'

const ready = (client: Client): void => {
  client.on('ready', async () => {
    if (!client.user || !client.application) return
    await client.application.commands.set(Commands)
    console.log(`Ready! Logged in as ${client.user.tag}`)
  })
}

export default ready
