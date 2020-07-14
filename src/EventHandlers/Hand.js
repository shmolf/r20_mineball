import { cardsEnteringTheBoard } from 'Handlers/Card';
import { getPlayers } from 'Players/PlayerPool';

/**
 * @param {Roll20Object} obj - Current state of the player's hand
 * @param {Object} prev - Previous state of the player's hand
 * @returns {void}
 */
export default function handChange(obj, prev) {
  // if card was played to table, set owner and remove reference, else add to cardPlayers
  const previousHandState = prev.currentHand.split(/,/);
  const currentHandState = obj.get('currentHand').split(/,/);
  // Look for the card that did exist the previous state, but not the current state
  const cardId = previousHandState.find((id) => !currentHandState.includes(id));

  if (typeof cardId === 'string' && cardId.length > 0) {
    tagCardWithPlayerEmblem(obj, cardId);
  }
}

/**
 * @param {Roll20Object} cardObject
 * @param {string} cardId
 */
function tagCardWithPlayerEmblem(cardObject, cardId) {
  if (typeof cardsEnteringTheBoard[cardId] !== 'undefined') {
    const playerId = cardObject.get('parentid');
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
