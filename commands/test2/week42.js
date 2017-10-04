const commando = require('discord.js-commando');

class Week42Command extends commando.Command {
  constructor (client) {
    super(client, {
      name: 'week42',
      group: 'test2',
      memberName: 'week42',
      description: 'week42'
    });
  }

  async run(message, args) {
    message.reply("Vecka 42 ska du redovisa **steg 16** i engelska och svenska och **steg 18** i matte")
  }

}

module.exports = Week42Command;
