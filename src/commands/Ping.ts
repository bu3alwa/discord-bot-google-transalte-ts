import { BaseCommandInteraction, Client } from 'discord.js'

import { Command } from './Command'

export const Ping: Command = {
  name: 'Ping',
  description: 'Replys with Pong',
  type: 'CHAT_INPUT',
  run: async (client: Client, interaction: BaseCommandInteraction) => {
    const content = 'Pong!'
    await interaction.followUp({
      ephemeral: true,
      content,
    })
  },
}
