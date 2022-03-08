import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'
import { commands } from './commands'
import { discordToken, clientId, guildId } from '../utils/secrets'

const com = commands.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(discordToken);

const registerCommands = async () => {
	rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
		.then(() => console.log('Successfully registered application commands.'))
		.catch(console.error);
}
export default registerCommands