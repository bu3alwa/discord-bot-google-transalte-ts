import { Client } from 'discord.js'

const messageCreate = (client: Client): void => {
  client.on('messageCreate', async (message) => {
    return
  })
}

export default messageCreate
