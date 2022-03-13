import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'

import { discordToken, clientId, guildId } from '../utils/secrets'
import builder from './Builder'

// const com = builder.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(discordToken)

const registerCommands = async () => {
  rest
    .put(Routes.applicationGuildCommands(clientId, guildId), { body: builder })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error)
}
export default registerCommands
