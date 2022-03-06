import { SlashCommandBuilder } from "@discordjs/builders"

export const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
    new SlashCommandBuilder().setName('tr').setDescription('sets translation settings for channel')
]