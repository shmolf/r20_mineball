// This file was designed by Mike Lakner

import { mbIsSomethingHere } from 'App/Temp/FunctionLibrary';

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

  if ('!Fire!Earth!Wind!Water!'.indexOf(nameCheck) !== -1) {
    // It's a terrain card
    // Figure out who played this by looking into the state to see who owns it
    thePlayerID = state.mbBR549.TerrainCardsInPlay[cardName].playerID;
    cardName = nameCheck;
    theLayer = 'map';
  } else {
    // It's a miniball card
    // Figure out who played this by looking into the state to see who owns it
    thePlayerID = state.mbBR549.MineBallCardsInPlay[cardName].playerID;
  }
  // Is there something here?
  log(`Peek${obj.get('left')}/${obj.get('top')}`);
  if (mbIsSomethingHere(obj.get('left'), obj.get('top')) === true) {
    // Yes, so back out
    setTimeout(() => giveCardToPlayer(theCardID, thePlayerID), 1000);
    // Remove the actual card
    setTimeout(() => obj.remove(), 100);
    return;
  }
  // Create the object
  createTableGraphic(
    cardName,
    obj.get('imgsrc'),
    obj.get('left'),
    obj.get('top'),
    obj.get('height'),
    obj.get('width'),
    theLayer,
  );
  // Remove the actual card
  setTimeout(() => obj.remove(), 100);
  // Link the card to the player
  // eslint-disable-next-line no-unused-vars
  // const playerID = linkCardToPlayer(obj);
};

/**
 * Handle the placement of new cards
 * Turn them into a graphic, assign to a player
 */
export default function CardAddInit() {
  on('ready', () => {
    // Trigger on newly placed cards
    on('add:card', handleAddCard);
  });
}
