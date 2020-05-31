import Player from 'Players/Player';
import Command from 'Commands/Command';
import EmblemCommand from 'Commands/EmblemCommand';
import HelpCommand from './Commands/HelpCommand';
import WhoAmICommand from './Commands/WhoAmICommand';

/** @type {object.<string, Player>}} */
const players = {};

/** @type {{String: Command}} */
const commandList = {};

const helpCommand = new HelpCommand(commandList);
commandList[helpCommand.cmd] = helpCommand;
const emblemCommand = new EmblemCommand(players);
commandList[emblemCommand.cmd] = emblemCommand;
const whoAmICommand = new WhoAmICommand(players);
commandList[whoAmICommand.cmd] = whoAmICommand;

/**
 * @param {object} msg - Roll20 defined object
 */
function handleInput(msg) {
  if (msg.type !== 'api') {
    return;
  }

  /** @type {string} */
  const who = (getObj('player', msg.playerid) || { get: () => 'API' }).get('_displayname');
  /** @type {number} */
  const playerId = msg.playerid;
  /** @type {Array} */
  const args = msg.content.split(/\s+/);

  if (args.shift() !== '!mineball' || args.length === 0) {
    return;
  }

  const cmdRef = args.shift().toLowerCase();

  switch (cmdRef) {
    case emblemCommand.cmd:
      // We'll want to overwrite the players, incase there were any changes
      Object.assign(players, commandList[cmdRef].func(msg, who, playerId, args));
      break;
    case whoAmICommand.cmd:
      commandList[cmdRef].func(msg, who, playerId, args);
      break;
    case helpCommand.cmd:
    default:
      helpCommand.func(msg, who, playerId, args);
  }
}

/**
 * @param {object} token - current state of the token. Protected, so require `.get` and such.
 * @param {object} previousState - previous state of the token. Unprotected, so can directly access properties
 */
function handleTokenMovement(token, previousState) {
  log(['movement token', token]);
  log(['movement tokenPrev', previousState]);
}

/**
 * @param {object} token - current state of the token. Protected, so require `.get` and such.
 */
function handleNewToken(token) {
  log(['newToken', token]);
}

/**
 * @param {object} token - current state of the token. Protected, so require `.get` and such.
 * @param {object} previousState - previous state of the token. Unprotected, so can directly access properties
 */
function handleCardMovement(token, previousState) {
  log(['movement card', token]);
  log(['movement cardPrev', previousState]);
}

/**
 * @param {object} token - current state of the token. Protected, so require `.get` and such.
 */
function handleNewCard(token) {
  const card = getObj('card', token.get('_cardid'));
  log(['newCard', card]);
}

on('ready', () => {
  if (!state.MineBall) {
    state.MineBall = {
      version: 1.0,
      players,
      commandList,
    };
  }
  on('chat:message', handleInput);
  on('change:graphic', handleTokenMovement);
  on('add:graphic', handleNewToken);
  on('change:card', handleCardMovement);
  on('add:card', handleNewCard);
});
