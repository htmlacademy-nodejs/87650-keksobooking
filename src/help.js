'use strict';

const colors = require(`colors/safe`);

const Command = require(`./command`);
const version = require(`./version`);
const author = require(`./author`);
const license = require(`./license`);
const description = require(`./description`);

module.exports = {
  name: `help`,
  description: `Shows all available commands`,
  execute() {
    console.log(`First CLI app. This app obeys your commands. Available commands:
  ${colors.grey(Command.HELP)} - ${colors.green(this.description)}
  ${colors.grey(Command.VERSION)} - ${colors.green(version.description)}
  ${colors.grey(Command.AUTHOR)} - ${colors.green(author.description)}
  ${colors.grey(Command.LICENSE)} - ${colors.green(license.description)}
  ${colors.grey(Command.DESCRIPTION)} - ${colors.green(description.description)}`);
  }
};