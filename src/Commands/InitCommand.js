/**
 * @namespace App.Commands
 */

import Command from 'Commands/Command';
import { mbResetGameState } from 'App/modules/State';
import { mbRebuildAllCharacterSheets } from 'App/modules/CharacterSheets';

export default class InitCommand extends Command {
  constructor() {
    super();

    this.cmd = 'init';
    this.desc = 'Init command for various game systems such as State.';
    this.func = this.runSubCommand;
    /**
     * @param {string} who - layer's human name
     * @param {string} playerId - reference of the player
     * @param {string[]} args - arguments for the command
     */
    // eslint-disable-next-line no-unused-vars
    this.help = (who, playerId, args) => {
      sendChat(
        'Mine Ball Help',
        `/w ${who}
        <p>Init GameState - Initializes the game state to it's initial values.</p>
        <p>Init Cards - Rebuilds the game cards.</p>
        `,
      );
    };

    this.subCommands = {
      gamestate: {
        gmOnly: false,
        internal: false,
        func: mbResetGameState,
        paramList: [],
      },
      cards: {
        gmOnly: false,
        internal: false,
        func: mbRebuildAllCharacterSheets,
        paramList: [],
      },
    };
  }
}
