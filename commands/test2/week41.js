const commando = require('discord.js-commando');

class Week41Command extends commando.Command {
  constructor (client) {
    super(client, {
      name: 'week41',
      group: 'test2',
      memberName: 'week41',
      description: 'week41'
    });
  }

  async run(message, args) {
    message.reply("Vecka 41 ska so världens värder innen på söndag")
  }

}

module.exports = Week41Command;
