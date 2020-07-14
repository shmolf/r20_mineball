/**
 * @namespace App.Commands
 */

import Command from 'Commands/Command';
import { mbStartNewGame } from 'Lib/Game';

export default class StartCommand extends Command {
  constructor() {
    super();

    this.cmd = 'start';
    this.desc = 'Start command for various game actions such as NewGame, SavedGame etc.';
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
        <p>Start NewGame - Clear the board and start a new game.</p>
        <p>Start SavedGame - Start a previously saved game.</p>
        `,
      );
    };

    this.subCommands = {
      newgame: {
        gmOnly: false,
        internal: false,
        func: mbStartNewGame,
        paramList: [],
      },
      savedGame: {
        gmOnly: false,
        internal: false,
        func: log('*** SavedGame still needs to be implimented.'),
        paramList: [],
      },
    };
  }
}
