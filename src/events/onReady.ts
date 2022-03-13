import type { Client } from 'discord.js'

const onReady = (client: Client): void => {
  client.on('ready', async () => {
    if (!client.user || !client.application) return

    console.log(`Ready! Logged in as ${client.user.tag}`)
  })
}
export default onReady
