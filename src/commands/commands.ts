interface Command {
  command: string
  description: string
}

export const commands: Command[] = [
  {
    command: 'ping',
    description: 'Replies with pong!',
  },
  {
    command: 'tr',
    description: 'sets translation settings for channel',
  },
]
