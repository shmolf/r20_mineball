import Player from 'Players/Player';
import Command from 'Commands/Command';
import EmblemCommand from 'Commands/EmblemCommand';
import HelpCommand from 'Commands/HelpCommand';
import WhoAmICommand from 'Commands/WhoAmICommand';
import ResetPlayersCommand from 'Commands/ResetPlayersCommand';
import Emblem from './modules/Emblem';
// import createPlayerDeck from 'App/Dealer';

/* eslint valid-jsdoc: ["error", { "preferType": { ""object": "Object" } }] */

/** @type {Object.<string, Player>} */
let players = {};

/** @type {Object.<string, Command>} */
const commandList = {};

/** @type {Object.<string, Graphic>} */
const cardsEnteringTheBoard = {};

const helpCommand = new HelpCommand(commandList);
commandList[helpCommand.cmd] = helpCommand;
const emblemCommand = new EmblemCommand(players);
commandList[emblemCommand.cmd] = emblemCommand;
const whoAmICommand = new WhoAmICommand(players);
commandList[whoAmICommand.cmd] = whoAmICommand;
const resetPlayersCommand = new ResetPlayersCommand(players);
commandList[resetPlayersCommand.cmd] = resetPlayersCommand;

/**
 * @param {ChatEventData} msg - Roll20 defined object
 * @returns {void}
 */
function handleInput(msg) {
  if (msg.type !== 'api') {
    return;
  }

  /** @type {string} */
  const who = (getObj('player', msg.playerid) || { get: () => 'API' }).get('_displayname');
  /** @type {string} */
  const playerId = msg.playerid;
  /** @type {Array} */
  const args = msg.content.split(/\s+/);

  if (args.shift() !== '!mineball' || args.length === 0) {
    return;
  }

  const cmdRef = args.shift().toLowerCase();

  switch (cmdRef) {
    case emblemCommand.cmd:
      // We'll want to overwrite the players, in case there were any changes
      Object.assign(players, emblemCommand.func(msg, who, playerId, args));

      break;
    case whoAmICommand.cmd:
      whoAmICommand.func(msg, who, playerId, args);
      break;
    case resetPlayersCommand.cmd:
      resetPlayersCommand.func();
      ({ players } = state.MineBall);
      break;
    case helpCommand.cmd:
    default:
      helpCommand.func(msg, who, playerId, args);
  }
}

/**
 * @param {Graphic} token - current state of the token. Protected, so require `.get` and such.
 * @param {Object} previousState - previous state of the token. Unprotected, so can directly access properties
 * @returns {void}
 */
// eslint-disable-next-line no-unused-vars
function handleTokenMovement(token, previousState) {}

/**
 * @param {Graphic} token - current state of the token. Protected, so require `.get` and such.
 * @param {Object} previousState - previous state of the token. Unprotected, so can directly access properties
 * @returns {void}
 */
// eslint-disable-next-line no-unused-vars
function handleCardMovement(token, previousState) {}

/**
 * @param {Roll20Object} card - current state of the token. Protected, so require `.get` and such.
 * @returns {void}
 */
function handleNewCard(card) {
  const cardId = card.get('_cardid');
  /** @type {Graphic} */
  const roll20Card = findObjs({ type: 'graphic', subtype: 'card', id: cardId })[0];

  if (cardId) {
    if (!(cardId in cardsEnteringTheBoard)) {
      cardsEnteringTheBoard[cardId] = roll20Card;
    }
  }
}

/**
 * @param {Roll20Object} obj - Current state object
 * @param {Object} prev
 * @returns {void}
 */
function handleHandChange(obj, prev) {
  // if card was played to table, set owner and remove reference, else add to cardPlayers
  const previousHandState = prev.currentHand.split(/,/);
  const currentHandState = obj.get('currentHand').split(/,/);
  // Look for the card that did exist the previous state, but not the current state
  const cardId = previousHandState.find((id) => !currentHandState.includes(id));

  if (cardId && cardId in cardsEnteringTheBoard) {
    const playerId = obj.get('parentid');
    const roll20Card = cardsEnteringTheBoard[cardId];
    delete cardsEnteringTheBoard[cardId];

    if (playerId in players) {
      // eslint-disable-next-line no-unused-vars
      const player = players[String(playerId)];
      const cardName = roll20Card.get('name');
      /** @type {Character} */
      const roll20Char = findObjs({ _type: 'character', name: cardName });
      const charId = roll20Char[0].get('_id');

      const tokens = findObjs({ type: 'graphic', represents: charId });
      if (tokens.length > 0) {
        const token = tokens[0];
        log(['Found the token: ', token]);

        /*
        // Set the emblem on to token, for the given player
        token.set('statusmarkers', [player.getEmblem().name]);
        */
      }

      createObj('attribute', {
        characterid: charId,
        name: 'player_id',
        current: playerId,
      });
    }
  }
}

/**
 * Restores `players` from the JSON loaded from FireBase, into Player instances
 *
 * @returns {void}
 */
function restorePlayers() {
  const playerIds = Object.keys(state.MineBall.players);
  playerIds.forEach((cachedPlayerId) => {
    /** @type {import('Lib/Emblem').EmblemJson} */
    const playerEmblemData = state.MineBall.players[cachedPlayerId].emblem;
    const restoredPlayer = new Player(cachedPlayerId);

    restoredPlayer.setEmblem(new Emblem(
      playerEmblemData.id,
      playerEmblemData.url,
      playerEmblemData.name,
      playerEmblemData.tag,
    ));

    players[cachedPlayerId] = restoredPlayer;
  });

  state.MineBall.players = players;
}

on('ready', () => {
  if (typeof state.MineBall === 'undefined') {
    state.MineBall = {
      version: 1.0,
      players,
    };
  } else {
    restorePlayers();
  }

  on('chat:message', handleInput);
  on('change:graphic', handleTokenMovement);
  on('change:card', handleCardMovement);
  on('add:card', handleNewCard);
  on('change:hand', handleHandChange);
  // mineballDeck = findObjs({ type: 'deck', name: 'Mine Ball' });
});
