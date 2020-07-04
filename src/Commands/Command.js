/**
 * @namespace App.Lib
 */

export const playerCommandId = 'mb';
export const apiCommandId = '-mb';

export default class Command {
  constructor() {
    /** @type {string} */
    this.helpParam = '--help';

    // The default state of a Command, is that it's available to GM and Players
    /** @type {boolean} */
    this.gmOnly = false;

    // The default state of a Command, is that it's a public command
    /** @type {boolean} */
    this.internal = false;

    // The paramList is for the primary command. Commands that have Sub commands, might not use this property.
    /** @type {string[]} */
    this.paramList = [];

    /** @type {string} */
    this.cmd = 'filler';

    /** @type {string} */
    this.desc = 'filler';

    // The base function of the command. Useful for showing the Help text, or running primary function.
    /** @type {Function} */
    this.func = () => {};

    /* A dictionary or subcommands based around the primary.
     * Like `!mb kitchen makecoffee`, where `makecoffee`, is sub command.
     * Keys are the command, values are the function.
     */
    /** @type {SubCommand} */
    this.subCommands = {};

    /**
     * Each command can redfine the `help` property. This will be called under some circumstances.
     *
     * @param {string} who - layer's human name
     * @param {string} playerId - reference of the player
     * @param {string[]} args - arguments for the command
     */
    // eslint-disable-next-line no-unused-vars
    this.help = (who, playerId, args) => {
      sendChat('Mine Ball Default Help', `/w ${who} This is not actually helpful. As this is just filler text.`);
    };
  }

  /**
   * @param {string} who - layer's human name
   * @param {string} playerId - reference of the player
   * @param {string[]} args - arguments for the command
   */
  runSubCommand(who, playerId, args) {
    try{
      const subCmdRef = args.shift().toLowerCase();
      if (subCmdRef in this.subCommands) {
        /** @type {SubCommand} */
        const subCommand = this.subCommands[subCmdRef];

        // Let's check if a non-GM is trying to run a GM command
        if (subCommand.gmOnly === true && playerIsGM(playerId) === false) {
          return;
        }

        subCommand.func(who, playerId, args);
      } else {
        this.help(who, playerId, args);
      }
    }
    catch(err)
    {
      this.help(who, playerId, args);
      log(['Command Error',err.message]);
    }
  }
}

/**
 * @typedef {Object} SubCommand
 * @property {boolean} gmOnly - If true, should only ever be run by the GM
 * @property {boolean} internal - If true, should usually only be run by the system
 * @property {Function} func - Function to be called for the command
 * @property {string[]} paramList - string list describing expected params. Not required at all.
 */
