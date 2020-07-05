/**
 * @namespace App.Commands
 */

import Command from 'Commands/Command';
import { mbShowGameState } from 'App/modules/State';

export default class ShowCommand extends Command {
  constructor() {
    super();

    this.cmd = 'show';
    this.desc = 'Show command for various game data such as state.';
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
        <p>Show GameState - Dump the game state to the chat window.</p>
        <p>Show SavedGames - Show all of the previously saved games.</p>
        `,
      );
    };

    this.subCommands = {
      gamestate: {
        gmOnly: false,
        internal: false,
        func: mbShowGameState,
        paramList: [],
      },
      savedgames: {
        gmOnly: false,
        internal: false,
        func: log('*** SavedGames still needs to be implimented.'),
        paramList: [],
      },
    };
  }
}
