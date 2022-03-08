import * as dotenv from 'dotenv'

dotenv.config()

export const discordToken: string = process.env.DISCORD_TOKEN ?? ''
export const clientId: string = process.env.CLIENT_ID ?? ''
export const guildId: string = process.env.GUILD_ID ?? ''

if (discordToken === ''){
    console.log('Missing env: DISCORD_TOKEN')
    process.exit(1)
}

if (clientId === ''){
    console.log('Missing env: ClLIENT_ID')
    process.exit(1)
}

if (guildId === ''){
    console.log('Missing env: GUILD_ID')
    process.exit(1)
}