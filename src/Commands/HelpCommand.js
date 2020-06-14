/**
 * @namespace App.Commands
 */

import Command from 'Commands/Command';

export default class HelpCommand extends Command {
  /**
   * @param {Object.<string, Command>} gameCommands - List of commands available in the game
   */
  constructor(gameCommands) {
    super();

    this.cmd = 'help';
    this.desc = '<p>Provides general help, and a list of all commands.';
    this.paramList = [];

    /**
     * @param {Object} msg - oll20 defined
     * @param {string} who - layer's human name
     * @param {string} playerId - reference of the player
     * @param {string[]} args - arguments for the command
     * @returns {void}
     */
    this.func = (msg, who, playerId, args) => { // eslint-disable-line no-unused-vars
      /**
       * Let's iterate over each command, extracting the description and such into html.
       *
       * @param {Command} commandInstance - Command reference
       * @returns {string}
       */
      function commandPreHtml(commandInstance) {
        // Let's grab a list of all param examples, and join them with spaces.
        /** @type {string} */
        const paramExample = commandInstance.paramList.join(' ');
        return `<hr><pre>!mineball ${commandInstance.cmd} ${paramExample}</pre><p>${commandInstance.desc}</p>`;
      }

      log(gameCommands);
      const commandKeyList = Object.keys(gameCommands);
      const commandDescriptions = commandKeyList.map((commandKey) => commandPreHtml(gameCommands[commandKey])).join('');

      sendChat('Mine Ball Help',
        `/w ${who} <p>Below is a list of commands available to you, for this game.</p>
        <p>
          If you provide <code>${this.helpParam}</code> after some commands, it will provide additional details.
          Example:
        </p>
        <pre>!minecraft emblem ${this.helpParam}</pre>
        ${commandDescriptions}`);
    };
  }
}
