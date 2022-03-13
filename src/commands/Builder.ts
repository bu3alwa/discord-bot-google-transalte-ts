import { SlashCommandBuilder } from '@discordjs/builders'

import { commands } from './commands'

let builder: SlashCommandBuilder[]

commands.forEach((element) => {
  builder.push(new SlashCommandBuilder().setName(element.command).setDescription(element.description))
})

export default builder
