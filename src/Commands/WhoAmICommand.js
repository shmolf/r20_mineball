/**
 * @namespace App.Commands
 */

import Command from 'Commands/Command';
import Player from 'Players/Player';

export default class WhoAmICommand extends Command {
  /**
   * @param {Object.<string, Player>} gamePlayers - players registered in the game
   */
  constructor(gamePlayers) {
    super();

    this.cmd = 'whoami';
    this.desc = 'Informs you of which emblem belongs to you, and thereby which cards you should control.';
    this.paramList = [];

    /**
     * @param {object} msg - oll20 defined
     * @param {string} who - player's human name
     * @param {string} playerId - reference of the player
     * @param {string[]} args - arguments for the command
     * @returns {void}
     */
    this.func = (msg, who, playerId, args) => { // eslint-disable-line no-unused-vars
      const playerExists = playerId in gamePlayers;
      if (!playerExists) {
        sendChat(who,
          `You are not yet a player in the game. Use the <code>!mineball help</code>
          command to understand how to join.`);
      } else {
        /** @type {Player} player */
        const player = gamePlayers[playerId];
        sendChat(who, `You are <img width='30' src='${player.getEmblem().url}'>`);
      }
    };
  }
}
