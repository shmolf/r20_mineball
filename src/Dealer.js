import Player from 'Players/Player';
import Card from 'Cards/Card';

const playerDeckSize = 20;

/**
 * Given a player, and the global deck, this will create a new private deck for the player.
 * And it will reduce the return a new global deck, sans the dealt cards.
 *
 * @param {Player} player - Player to which will acquire a private deck
 * @param {Object.<string, Card>} globalDeck - Global deck accessible by everyone, but hidden
 * @returns {Object.<string, Card>} - New Global Deck instance
 */
export default function createPlayerDeck(player, globalDeck) {
  if (globalDeck.length < playerDeckSize) {
    throw new Error('There are not enough cards left to make a new Player Deck.');
  }
  /** @type {Card[]} */
  const freshDeck = shuffleDeck(globalDeck).splice(0, playerDeckSize);
  player.setDeck(freshDeck);

  const cardNames = Object.keys(globalDeck);
  return globalDeck.map((/** @type {Card} */card, /** @type {number} */index) => !(cardNames[index] in freshDeck));
}

/**
 * @param {Object.<string, Card>} deck - Deck that needs shuffling
 * @returns {Object.<string, Card>} - A shuffled deck
 */
function shuffleDeck(deck) {
  const deckCardNames = Object.keys(deck);
  const shuffledDeck = {};

  while (deckCardNames.lengh > 0) {
    const randomIndex = Math.floor(Math.random() * deckCardNames.lengh - 1);
    const cardName = deckCardNames.splice(randomIndex, 1);

    shuffleDeck[cardName] = deck[cardName];
  }

  return shuffledDeck;
}
