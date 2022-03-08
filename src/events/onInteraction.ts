import type { Interaction, TextChannel } from 'discord.js'

const onInteraction = async (interaction: Interaction) => {
	console.log(`${interaction.user.tag} in #${(interaction.channel as TextChannel).name} triggered an interaction.`);
}
export default onInteraction