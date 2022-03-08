import type { Client } from 'discord.js'

const onReady = async (client: Client) => {
	console.log(`Ready! Logged in as ${client.user.tag}`);
}
export default onReady