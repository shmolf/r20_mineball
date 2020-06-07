/**
 * @namespace App.Commands
 */

import Command from 'Commands/Command';
import Emblem from 'Lib/Emblem';
import Player from 'Players/Player';

/** @type {Emblem[]} */
let emblems = null;

/** @type {Object.<string, Emblem>} */
const usedEmblems = {};

export default class EmblemCommand extends Command {
  /**
   * @param {Object.<string, Player>} gamePlayers - players registered in the game
   */
  constructor(gamePlayers) {
    super();

    populateUsedEmblems(gamePlayers);

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
     * @returns {Object.<string, Player>}
     */
    this.func = function command(msg, who, playerId, args) {
      // Player just needs help with the command
      if (args.includes(this.helpParam)) {
        EmblemHelp(who);
        return gamePlayers;
      }

      const emblemChoice = args.shift();
      const emblemNameList = emblems.map((emblem) => emblem.name);
      const emblemIndex = emblemNameList.indexOf(emblemChoice);

      // Player provided an invalid emblem reference
      if (emblemChoice === undefined || emblemIndex === -1) {
        sendChat('Mine Ball Error', `/w ${who} Need to provide a valid Emblem choice.`);
        EmblemHelp(who);
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

      sendChat('Emblem Choosen', `/w ${who} You are now <img width='30' src='${player.getEmblem().url}'>`);

      // log(`Player, ${who}, now has the emblem ${player.getEmblem().name}`);
      return players;
    };
  }
}

/**
 * @private
 * @param {Object.<string, Player>} gamePlayers
 */
function populateUsedEmblems(gamePlayers) {
  Object.keys(gamePlayers).forEach((playerId) => {
    const usedEmblem = gamePlayers[playerId].getEmblem();
    usedEmblems[usedEmblem.name] = usedEmblem;
  });
}


/**
 * Explains how to use the Emblem command
 *
 * @param {string} who - user to whisper back to
 */
function EmblemHelp(who) {
  // Let's filter out the used emblems, and for the ones that remain, create a button list
  const emblemList = emblems
    .filter((emblem) => !(emblem.name in usedEmblems))
    .map((/** @type {Emblem} */emblem) => {
      const { name, url } = emblem;
      return `<p><a href='!mineball emblem ${name}'><img width='30' src='${url}' /> ${name}</a></p>`;
    })
    .join('');

  sendChat('Mine Ball Help',
    `/w ${who} <p>Choose from one of the available emblems below.</p>
    <p>You cannot choose an emblem if another player has already selected it.</p>
    <p>Click the emblem you'd like to choose to represent you.</p>
    ${emblemList}`);
}

on('ready', () => {
  emblems = JSON.parse(Campaign().get('token_markers'))
    .map((emblem) => new Emblem(emblem.id, emblem.url, emblem.name, emblem.tag));
});
