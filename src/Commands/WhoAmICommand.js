/**
 * @namespace App.Commands
 */

import Command, { playerCommandId } from 'Commands/Command';
import Player from 'Players/Player';
import { getPlayers } from 'Players/PlayerPool';

export default class WhoAmICommand extends Command {
  constructor() {
    super();

    this.cmd = 'whoami';
    this.desc = 'Informs you of which emblem belongs to you, and thereby which cards you should control.';

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

    /**
     * @param {string} who - player's human name
     * @param {string} playerId - reference of the player
     * @returns {void}
     */
    this.func = (who, playerId) => {
      const gamePlayers = getPlayers();
      const playerExists = playerId in gamePlayers;
      if (!playerExists) {
        sendChat('The Referee',
          `/w ${who} You are not yet a player in the game. Use the <code>!${playerCommandId} help</code>
          command to understand how to join.`);
      } else {
        /** @type {Player} player */
        const player = gamePlayers[playerId];
        sendChat('', `/w ${who} You are <img width='30' src='${player.getEmblem().url}'>`);
      }
    };
  }
}
