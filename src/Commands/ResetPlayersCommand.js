import { setPlayers } from 'Players/PlayerPool';

/**
 * @namespace App.Commands
 */

import Command from 'Commands/Command';

export default class ResetPlayersCommand extends Command {
  constructor() {
    super();

    this.cmd = 'reset-players';
    this.desc = 'Clears the list of Mineball players from the Campaign';

    /**
     * @param {string} who - layer's human name
     * @param {string} playerId - reference of the player
     * @param {string[]} args - arguments for the command
     */
    // eslint-disable-next-line no-unused-vars
    this.help = (who, playerId, args) => {
      sendChat(
        'Mine Ball - Reset Player Help',
        `/w ${who} This will reset the players within the game.<br>⚠ Use with caution ⚠`,
      );
    };

    this.func = () => {
      setPlayers({});
      log('Players are reset');
    };
  }
}
