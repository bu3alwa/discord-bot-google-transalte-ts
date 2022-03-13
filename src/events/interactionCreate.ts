import type { BaseCommandInteraction, Client, Interaction } from 'discord.js'

import { commands } from '../commands/commands'

const interactionCreate = (client: Client) => {
  client.on('interactionCreate', async (interaction: Interaction) => {
    if (interaction.isCommand() || interaction.isContextMenu()) {
      await handleSlashCommand(client, interaction)
    }
  })
}

const handleSlashCommand = async (client: Client, interaction: BaseCommandInteraction): Promise<void> => {}

export default interactionCreate
