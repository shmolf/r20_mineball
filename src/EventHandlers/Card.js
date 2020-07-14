
/** @type {Object.<string, Graphic>} */
export const cardsEnteringTheBoard = {};

/**
 * @param {Roll20Object} card - current state of the token. Protected, so require `.get` and such.
 * @returns {void}
 */
export function newCard(card) {
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
