// This file was designed by Mike Lakner
//
// Hande the movement of a card from player hand to the board.
// Card must be cloned to a graphic that is linked to a character (matching card name)
//   and then the original card removed from the table.

import { mbIsSomethingHere } from 'Lib/Board';
import { createTableGraphic } from 'Graphics/Library';
import { handleGraphicChange } from 'Graphics/Tokens';

/**
 * @param {Roll20Object} obj
 * @param {Object} prevObj
 */
const handleAddCard = (obj, prevObj) => {
  // Return based on state switches
  if ((state.mbBR549.Manual === true) || (state.mbBR549.InSetup === true)) {
    log(['Handle Card Addition Aborted', { state }]);
    return;
  }
  // Log this
  log(['Add Card', { obj, prevObj }]);
  // Set up the objects
  const theCardID = obj.get('_cardid');
  const cardObj = getObj('card', theCardID);
  let cardName = cardObj.get('name');
  let theLayer = 'objects';
  log(['Card Name', { cardName }]);
  // Get the deck this card came from
  const nameCheck = cardName.substring(0, cardName.length - 1);
  let thePlayerID = '';
  var stateCardType = '';
  if ('!Fire!Earth!Wind!Water!'.indexOf(nameCheck) !== -1) {
    // It's a terrain card
    // Figure out who played this by looking into the state to see who owns it
    stateCardType = 'TerrainCardsInPlay';
    thePlayerID = state.mbBR549[stateCardType][cardName].playerID;
    cardName = nameCheck;
    theLayer = 'map';
  } else {
    // It's a miniball card
    // Figure out who played this by looking into the state to see who owns it
    stateCardType = 'MineBallCardsInPlay';
    thePlayerID = state.mbBR549[stateCardType][cardName].playerID;
  }
  // Is there something here?
  log(`Drop Peek: ${obj.get('left')}/${obj.get('top')}`);
  if (mbIsSomethingHere(obj.get('left'), obj.get('top')) === true) {
    // Yes, so back out
    setTimeout(() => giveCardToPlayer(theCardID, thePlayerID), 1000);
    // Remove the actual card
    setTimeout(() => obj.remove(), 100);
    return;
  }
  // Change the state to reflect that it's no nonger inhand
  state.mbBR549[stateCardType][cardName].inhand = false;
  // Create the object
  const theCard = createTableGraphic(
    cardName,
    obj.get('imgsrc'),
    obj.get('left'),
    obj.get('top'),
    obj.get('height'),
    obj.get('width'),
    theLayer,
  );
  handleGraphicChange(theCard);
  // Remove the actual card
  setTimeout(() => obj.remove(), 100);
  // Link the card to the player
  // eslint-disable-next-line no-unused-vars
  // const playerID = linkCardToPlayer(obj);
  // Let players know who dropped this card.
  const thePlayer = getObj('player', thePlayerID);
  const displayName = thePlayer.get('displayname');
  sendChat('Mine Ball', `${displayName} placed ${cardName}.`);
  if(stateCardType == 'MineBallCardsInPlay')
  {
    var imagePart1 = "<div style='box-shadow: 3px 3px 2px #888888; font-family: Verdana; text-shadow: 2px 2px #000; text-align: center; vertical-align: middle; padding: 1px 1px; margin-top: 0.1em; border: 1px solid #000; border-radius: 8px 8px 8px 8px; color: #FFFFFF;";
    var thisImage = imagePart1 + "background-color:#AAAAAA;'><img src='" + obj.get('imgsrc') + "'></div>";
    sendChat('Mine Ball', thisImage);
  }
};

/**
 * Handle the placement of new cards
 * Turn them into a graphic, assign to a player
 */
export default function CardAddInit() {
  // Trigger on newly placed cards
  on('add:card', handleAddCard);
}


/**
 * @param {number} theQty
 */
export function mbDealMineBallCards(theQty) {
  log('Deal Punk cards.');

  // Get the players
  const thePlayers = findObjs({ _type: 'player' });
  log(['Players', { thePlayers }]);
  // Get the Terrain deck
  const theDecks = findObjs({ _type: 'deck', name: 'Mine Ball' });
  log(['Decks', { theDecks }]);
  thePlayers.forEach((playerObj) => {
    if (playerObj.get('_online')) {
      for (let i = 1; i <= theQty; i += 1) {
        // Draw a card
        const theCard = drawCard(theDecks[0].get('_id'));
        // Give it to the player
        giveCardToPlayer(theCard, playerObj.get('_id'));
        const cardObj = getObj('card', theCard);
        const cardName = cardObj.get('name');
        // Record it's ownership
        state.mbBR549.MineBallCardsInPlay[cardName] = { playerID: playerObj.get('_id'), inhand: true };
      }
    }
  });
}

/**
 * @param {number} theQty
 */
export function mbDealTerrainCards(theQty) {
  log('Deal terrain cards.');

  // Get the players
  const thePlayers = findObjs({ _type: 'player' });
  log(['Players', { thePlayers }]);
  // Get the Terrain deck
  const theDecks = findObjs({ _type: 'deck', name: 'Terrain' });
  log(['Decks', { theDecks }]);
  thePlayers.forEach((playerObj) => {
    if (playerObj.get('_online')) {
      for (let i = 1; i <= theQty; i += 1) {
        // Draw a card
        const theCard = drawCard(theDecks[0].get('_id'));
        // Give it to the player
        giveCardToPlayer(theCard, playerObj.get('_id'));
        const cardObj = getObj('card', theCard);
        const cardName = cardObj.get('name');
        // Record it's ownership
        state.mbBR549.TerrainCardsInPlay[cardName] = { playerID: playerObj.get('_id'), inhand: true };
      }
    }
  });
}
