import { Permissions } from 'discord.js'

export const isAdmin = (memberPermissions: Permissions): boolean => {
  return memberPermissions.has([Permissions.FLAGS.ADMINISTRATOR])
}
