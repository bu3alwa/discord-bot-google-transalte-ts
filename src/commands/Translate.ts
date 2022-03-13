import { BaseCommandInteraction, Client } from 'discord.js'

import { Command } from './Command'

export const Translate: Command = {
  name: 'tr',
  description: 'Set translation for channel',
  type: 'CHAT_INPUT',
  run: async (client: Client, interaction: BaseCommandInteraction) => {
    const content = 'Pong!'
    await interaction.followUp({
      ephemeral: true,
      content,
    })
  },
}
