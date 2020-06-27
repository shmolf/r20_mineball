/**
 * @namespace App.Commands
 */

import Command, { playerCommandId } from 'Commands/Command';
import Emblem from 'Lib/Emblem';
import Player from 'Players/Player';
import { getPlayers, setPlayers } from 'Players/PlayerPool';

/** @type {Emblem[]} */
let emblems = null;

const defaultGeneralEmblem = 'skull';

/** @type {Object.<string, Emblem>} */
const usedEmblems = {};

export default class EmblemCommand extends Command {
  constructor() {
    super();

    this.cmd = 'emblem';
    this.desc = `Command is used to join the game, and declare/change what emblem will represent you as a player.
      The emblem will be represented on all of your cards. (${this.helpParam} avail)`;
    this.func = this.runSubCommand;
    /**
     * @param {string} who - layer's human name
     * @param {string} playerId - reference of the player
     * @param {string[]} args - arguments for the command
     */
    // eslint-disable-next-line no-unused-vars
    this.help = (who, playerId, args) => { EmblemHelp(who); };
    this.subCommands = {
      '--help': {
        gmOnly: false,
        internal: false,
        func: EmblemHelp,
        paramList: [],
      },
      set: {
        gmOnly: false,
        internal: true,
        func: SetPlayerEmblem,
        paramList: ['emblemName'],
      },
    };
  }
}

/**
 * Explains how to use the Emblem command
 *
 * @param {string} who - user to whisper back to
 * @returns {void}
 */
function EmblemHelp(who) {
  // Let's filter out the used emblems, and for the ones that remain, create a button list
  const emblemList = emblems
    .filter((emblem) => validateEmblemChoice(emblem.name))
    .map((/** @type {Emblem} */emblem) => {
      const { name, url } = emblem;
      return `<p><a href='!${playerCommandId} emblem set ${name}'><img width='30' src='${url}' /> ${name}</a></p>`;
    })
    .join('');

  sendChat('Mine Ball Help',
    `/w ${who} <p>Choose from one of the available emblems below.</p>
    <p>You cannot choose an emblem if another player has already selected it.</p>
    <p>Click the emblem you'd like to choose to represent you.</p>
    ${emblemList}`);
}

/**
 * @param {string} who - layer's human name
 * @param {string} playerId - reference of the player
 * @param {string[]} args - arguments for the command
 * @returns {void}
 */
function SetPlayerEmblem(who, playerId, args) {
  // Player just needs help with the command
  if (args.includes(this.helpParam)) {
    populateUsedEmblems();
    EmblemHelp(who);
    return;
  }

  const emblemChoice = args.shift();
  const emblemNameList = emblems.map((emblem) => emblem.name);
  const emblemIndex = emblemNameList.indexOf(emblemChoice);

  // Player provided an invalid emblem reference
  if (emblemChoice === undefined || emblemIndex === -1 || validateEmblemChoice(emblemChoice) === false) {
    sendChat('Mine Ball Error', `/w ${who} Need to choose and emblem.`);
    EmblemHelp(who);
    return;
  }

  const gamePlayers = getPlayers();
  const playerExists = playerId in gamePlayers;

  if (!playerExists) {
    // Player not yet part of the game
    gamePlayers[playerId] = new Player(playerId);
  }

  /** @type {Player} player */
  const player = gamePlayers[playerId];
  player.setEmblem(emblems[emblemIndex]);

  sendChat('Emblem Choosen', `/w ${who} You are now <img width='30' src='${player.getEmblem().url}'>`);

  // Now that either a new player is created, or an existing player is modifed, we'll want to store it globally.
  setPlayers(gamePlayers);
}

/**
 *
 */
export function EmblemBuildInit() {
  emblems = JSON.parse(Campaign().get('token_markers'))
    .map((emblem) => new Emblem(emblem.id, emblem.url, emblem.name, emblem.tag));
}

/**
 * Returns true if the Emblem name provided is allowable
 *
 * @private
 * @param {string} emblemName
 * @returns {boolean}
 */
function validateEmblemChoice(emblemName) {
  populateUsedEmblems();
  return !(emblemName in usedEmblems) && emblemName !== defaultGeneralEmblem;
}

/**
 * @private
 * @returns {void}
 */
function populateUsedEmblems() {
  const gamePlayers = getPlayers();
  Object.keys(gamePlayers).forEach((playerId) => {
    const usedEmblem = gamePlayers[playerId].getEmblem();
    usedEmblems[usedEmblem.name] = usedEmblem;
  });
}
