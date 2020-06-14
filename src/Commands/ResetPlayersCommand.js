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

    this.func = () => { // eslint-disable-line no-unused-vars
      state.MineBall.players = {};
      log('Players are reset');
    };
  }
}
