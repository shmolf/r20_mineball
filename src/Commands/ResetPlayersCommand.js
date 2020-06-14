/**
 * @namespace App.Commands
 */

import Command from 'Commands/Command';
import Player from 'Players/Player';

export default class ResetPlayersCommand extends Command {
  /**
   * @param {Object.<string, Player>} gamePlayers - players registered in the game
   */
  // eslint-disable-next-line no-unused-vars
  constructor(gamePlayers) {
    super();

    this.cmd = 'reset-players';
    this.desc = 'Clears the list of Mineball players from the Campaign';
    this.paramList = [];

    /**
     * @param {object} msg - oll20 defined
     * @param {string} who - player's human name
     * @param {string} playerId - reference of the player
     * @param {string[]} args - arguments for the command
     * @returns {void}
     */
    this.func = () => { // eslint-disable-line no-unused-vars
      state.MineBall.players = {};
      log('Players are reset');
    };
  }
}
