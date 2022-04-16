/* eslint-disable import/no-named-as-default-member */
import { Channel } from '.prisma/client'
import { BaseCommandInteraction, Client } from 'discord.js'
import validator from 'validator'

import { prisma } from '../services/prisma'
import { isAdmin } from '../utils/permission'
import { Command } from './Command'

export const Translate: Command = {
  name: 'tr',
  description: 'Set translation for channel',
  type: 'CHAT_INPUT',
  options: [
    {
      type: 3,
      name: 'code',
      description: 'Language code',
      required: true,
    },
    {
      type: 3,
      name: 'channels',
      description: 'Channels to listen to',
      required: true,
    },
  ],
  run: async (client: Client, interaction: BaseCommandInteraction) => {
    if (!isAdmin(interaction.memberPermissions)) {
      return
    }

    const codeValue = interaction.options.get('code').value

    const channelInput = interaction.options.get('channels').value
    if (typeof codeValue !== 'string' || typeof channelInput !== 'string') {
      return await interaction.followUp({
        ephemeral: true,
        content: 'Expected type string',
      })
    }

    const code = validator.escape(codeValue)

    const currentChannel = interaction.channelId
    //TODO: check language codes
    const channels = validator.escape(channelInput.replace(/[a-zA-z&\/\\#,+()$~%.'":;*?<>{}]/g, '')).split(' ')

    const getListeners: Channel[] = []

    // create any channels that are missing the the db
    channels.forEach(async (channel) => {
      const cRecord = await prisma.channel.findUnique({
        where: {
          snowflake: channel,
        },
      })

      if (cRecord) {
        getListeners.push(cRecord)
        return
      }

      const nRecord = await prisma.channel.create({
        data: {
          snowflake: channel,
        },
      })

      getListeners.push(nRecord)
    })

    // create or update current channel with its listeners
    await prisma.channel.upsert({
      where: {
        snowflake: currentChannel,
      },
      update: {
        language: code,
        listeners: { create: getListeners.map((lis) => lis.id) },
      },
      create: {
        language: code,
        snowflake: currentChannel,
        listeners: { create: getListeners.map((lis) => lis.id) },
      },
    })

    const content = 'Translation for channel updated'
    await interaction.followUp({
      ephemeral: true,
      content,
    })
  },
}
