import { getPlayers, deserializePlayerObject } from 'Players/PlayerPool';
import RunCommand from 'App/Commands/Library';
import { playerCommandId, apiCommandId } from 'Commands/Command';
import TokenListeners from 'Graphics/Tokens';
import { mbSetupGameState } from 'App/modules/State';
import CardAddInit from 'App/Play/Cards';
// import { CommandDispatchInit } from 'App/Temp/CommandDispatch';
import { EmblemBuildInit } from 'Commands/EmblemCommand';

/** @type {Object.<string, Graphic>} */
const cardsEnteringTheBoard = {};

/**
 * @param {ChatEventData} msg - Roll20 defined object
 * @returns {void}
 */
function handleInput(msg) {
  if (msg.type !== 'api') {
    return;
  }

  /** @type {Array} */
  const args = msg.content.split(/\s+/);

  const pluginCommand = args.shift();
  const isMineballCommand = pluginCommand === `!${playerCommandId}` || pluginCommand === `!${apiCommandId}`;
  // Check if this is a MineBall directed command
  if (!isMineballCommand || args.length === 0) {
    return;
  }

  /** @type {string} */
  const who = (getObj('player', msg.playerid) || { get: () => 'API' }).get('_displayname');
  /** @type {string} */
  const playerId = msg.playerid;

  const cmdRef = args.shift().toLowerCase();
  RunCommand(pluginCommand, cmdRef, args, who, playerId, msg);
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
  const roll20Card = findObjs({ type: 'card', id: cardId })[0];

  if (cardId && typeof roll20Card !== 'undefined') {
    if (!(cardId in cardsEnteringTheBoard)) {
      cardsEnteringTheBoard[cardId] = roll20Card;
      log(['In the Handle New Card', roll20Card]);
    }
  }
}

/**
 * @param {Roll20Object} obj - Current state of the player's hand
 * @param {Object} prev - Previous state of the player's hand
 * @returns {void}
 */
function handleHandChange(obj, prev) {
  // if card was played to table, set owner and remove reference, else add to cardPlayers
  const previousHandState = prev.currentHand.split(/,/);
  const currentHandState = obj.get('currentHand').split(/,/);
  // Look for the card that did exist the previous state, but not the current state
  const cardId = previousHandState.find((id) => !currentHandState.includes(id));

  if (cardId && typeof cardsEnteringTheBoard[cardId] !== 'undefined') {
    const playerId = obj.get('parentid');
    const roll20Card = cardsEnteringTheBoard[cardId];
    const players = getPlayers();
    delete cardsEnteringTheBoard[cardId];

    if (typeof players[playerId] !== 'undefined') {
      // eslint-disable-next-line no-unused-vars
      const player = players[String(playerId)];
      const cardName = roll20Card.get('_name');
      /** @type {Character} */
      const roll20Chars = findObjs({ _type: 'character', name: cardName });
      log(['In the Player Section', roll20Chars]);

      if (roll20Chars.length > 0) {
        const charId = roll20Chars[0].get('_id');
        const tokens = findObjs({ type: 'graphic', subtype: 'token' })
          .filter((token) => (token.get('represents') === charId));
        log(['In the Token Section', tokens]);

        if (tokens.length > 0) {
          const token = tokens[0];
          log(['Found the token: ', token]);

          // Set the emblem on to token, for the given player
          token.set('statusmarkers', [player.getEmblem().name]);
        }

        createObj('attribute', {
          characterid: charId,
          name: 'player_id',
          current: playerId,
        });
      }
    }
  }
}

on('ready', () => {
  if (typeof state.MineBall === 'undefined') {
    const players = getPlayers();
    state.MineBall = {
      version: 1.0,
      players,
    };
  } else {
    deserializePlayerObject(state.MineBall.players || {});
  }

  mbSetupGameState();
  TokenListeners();
  CardAddInit();
  // CommandDispatchInit();
  EmblemBuildInit();

  on('chat:message', handleInput);
  on('change:graphic', handleTokenMovement);
  on('change:card', handleCardMovement);
  on('add:card', handleNewCard);
  on('change:hand', handleHandChange);
});
