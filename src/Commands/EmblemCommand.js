/**
 * @namespace App.Commands
 */

import Command from 'Commands/Command';
import Emblem from 'Lib/Emblem';
import Player from 'Players/Player';

/** @type {Emblem[]} */
let emblems = null;

export default class EmblemCommand extends Command {
  /**
   * @param {object.<string, Player>} gamePlayers - players registered in the game
   */
  constructor(gamePlayers) {
    super();

    const players = gamePlayers;

    this.cmd = 'emblem';
    this.desc = `Command is used to join the game, and declare/change what emblem will represent you as a player.
      The emblem will be represented on all of your cards. (${this.helpParam} avail)`;
    this.paramList = ['emblemName'];

    /**
     * @param {object} msg - oll20 defined
     * @param {string} who - layer's human name
     * @param {string} playerId - reference of the player
     * @param {string[]} args - arguments for the command
     * @returns {object.<string, Player>}
     */
    this.func = function command(msg, who, playerId, args) {
      // Player just needs help with the command
      if (args.includes(this.helpParam)) {
        EmblemHelp();
        return gamePlayers;
      }

      const emblemChoice = args.shift();
      const emblemNameList = emblems.map((emblem) => emblem.name);
      const emblemIndex = emblemNameList.indexOf(emblemChoice);

      // Player provided an invalid emblem reference
      if (emblemChoice === undefined || emblemIndex === -1) {
        sendChat(who, 'Need to provide a valid Emblem choice.');
        EmblemHelp();
        return gamePlayers;
      }

      const playerExists = playerId in gamePlayers;

      if (!playerExists) {
        // Player not yet part of the game
        players[playerId] = new Player(playerId);
      }

      /** @type {Player} player */
      const player = gamePlayers[playerId];
      player.setEmblem(emblems[emblemIndex]);

      sendChat(who, `You are now <img width='30' src='${player.getEmblem().url}'>`);

      // log(`Player, ${who}, now has the emblem ${player.getEmblem().name}`);
      return players;
    };
  }
}

/**
 * Explains how to use the Emblem command
 */
function EmblemHelp() {
  const emblemItem = (emblem) => `<p><img width='30' src='${emblem.url}'>
    <code style='border-radius: 0.25em; user-select: all; border: solid black 1px;'>${emblem.name}</code></p>`;
  const emblemList = emblems.map((emblem) => emblemItem(emblem)).join('');

  sendChat('Mine Ball Help',
    `<p>Choose from one of the available emblems below.</p>
    <p>You cannot choose an emblem if another player has already selected it.</p>
    <p>To select an emblem, type
      <code style='background: #F5F5DC'>!mineball emblem &lt;your selection&gt;</code> in the messages. Example:</p>
    <pre style='background: #F5F5DC; user-select: all; -webkit-user-select: all'>!mineball emblem three-leaves</pre>
    ${emblemList}`);
}

on('ready', () => {
  emblems = JSON.parse(Campaign().get('token_markers'))
    .forEach((emblem) => new Emblem(emblem.id, emblem.url, emblem.name, emblem.tag));
});
