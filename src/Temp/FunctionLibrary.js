// This file was designed by Mike Lakner

import mbHandleLoopMove from 'Tokens/Loop';
import mbHandleLoopMove from 'Tokens/Reticle';

/**
 * Suggested and offered by Aaron to avoid an error when placing card
 *
 * @param {string} imgsrc
 * @returns {?string}
 */
const getCleanImgsrc = (imgsrc) => {
  const parts = imgsrc.match(/(.*\/images\/.*)(thumb|med|original|max)([^?]*)(\?[^?]+)?$/);
  if (parts) {
    return `${parts[1]}thumb${parts[3]}${parts[4] ? parts[4] : `?${Math.round(Math.random() * 9999999)}`}`;
  }

  return null;
};

export const handleGraphicChange = (obj) => {
  // Return based on state switches
  if ((state.mbBR549.Manual === true) || (state.mbBR549.InSetup === true)) {
    log(['Handle Graphic Alignment Aborted', { state }]);
    return;
  }
  // Log this event
  log(['Handle Graphic Change', obj]);
  // What are our sizes
  const mySize = 140;
  const halfHeight = mySize / 2;
  const halfWidth = mySize / 2;
  // Normalize rotation to cardinal positions
  // But really we should disallow player rotations and only allow through buttons
  const theRotation = obj.get('rotation');
  if (((theRotation >= 315) || (theRotation <= 44)) && (theRotation !== 0)) obj.set('rotation', 0);
  else if (((theRotation >= 45) && (theRotation <= 134)) && (theRotation !== 90)) obj.set('rotation', 90);
  else if (((theRotation >= 135) && (theRotation <= 224)) && (theRotation !== 180)) obj.set('rotation', 180);
  else if (((theRotation >= 225) && (theRotation <= 314)) && (theRotation !== 270)) obj.set('rotation', 270);
  log(['Rotation: ', { From: theRotation, To: obj.get('rotation') }]);
  // Resize this thing if necessary
  if (obj.get('height') !== mySize) obj.set('height', mySize);
  if (obj.get('width') !== mySize) obj.set('width', mySize);
  // Figure out what grid it should be on
  const newGridLeft = Math.floor(obj.get('left') / mySize);
  const newGridTop = Math.floor(obj.get('top') / mySize);
  log(['NewGrid: ', { Left: newGridLeft, Top: newGridTop }]);
  // Calculate the actual coordinates
  const newCoordLeft = (newGridLeft * mySize) + halfWidth;
  const newCoordTop = (newGridTop * mySize) + halfHeight;
  log(['NewCoord: ', { Left: newCoordLeft, Top: newCoordTop }]);
  // Realign if not already aligned
  if (obj.get('left') !== newCoordLeft) obj.set('left', newCoordLeft);
  if (obj.get('top') !== newCoordTop) obj.set('top', newCoordTop);
  // Is it the Loop or Reticle?
  if ('!Reticle!Loop!'.indexOf(obj.get('name')) !== -1) {
    // Yes, send it to the front
    toFront(obj);
    // Handle these movements
    if (obj.get('name') === 'Reticle') mbHandleReticleMove(obj);
    else mbHandleLoopMove(obj);
  } else {
    // Nope, send if to the back
    toBack(obj);
  }
  // Is it Background, CompassRose or Terrain
  const nameCheck = obj.get('name').substring(0, obj.get('name').length - 1);
  if ('!Earth!Wind!Fire!Water!Backgroun!CompassRos!'.indexOf(nameCheck) !== -1) {
    // Yes, put it on the map layer
    obj.set('layer', 'map');
  } else {
    // Nope, make sure it on the objects layer
    obj.set('layer', 'objects');
  }

  // Now ping both and draw everyone to this location after 1 second delay
  setTimeout(() => sendPing(obj.get('left'), obj.get('top'), Campaign().get('playerpageid'), null, true, ''), 1000);
};

/**
 * @param {string} theName
 * @param {string} theImage
 * @param {number} theLeft
 * @param {number} theTop
 * @param {number} theHeight
 * @param {number} theWidth
 * @param {string} theLayer
 * @returns {Graphic}
 */
export function createTableGraphic(theName, theImage, theLeft, theTop, theHeight, theWidth, theLayer) {
  log(['Create Table Graphic', {
    theName, theImage, theLeft, theTop, theHeight, theWidth,
  }]);
  // Find the character
  const charObj = findObjs({ _type: 'character', name: theName });
  const charID = charObj[0].get('_id');
  // Build the object
  const newObj = createObj(
    'graphic',
    {
      name: theName,
      top: theTop,
      left: theLeft,
      imgsrc: getCleanImgsrc(theImage),
      width: theWidth,
      height: theHeight,
      layer: theLayer,
      pageid: Campaign().get('playerpageid'),
      isdrawing: true,
      represents: charID,
    },
  );

  // Now ensure it looks and is where we want.
  handleGraphicChange(newObj);
  return newObj;
}

/**
 *
 */
export function mbStartNewGame() {
  // Log it down
  log('Start new game.');
  // Return based on state switches
  if (state.mbBR549.InSetup === true) {
    log(['Start New Game Aborted', { state }]);
    return;
  }
  // Flag as busy and in setuo
  state.mbBR549.AmBusy = true;
  state.mbBR549.InSetup = true;
  // Delete existing graphics
  mbClearBoard();
  // Recall all cards
  mbRecallCards();
  // Rebuild basic board
  mbResetBasicBoard();
  // Place the compassrose
  mbPlaceCompassRose();
  // Deal Terrain cards to player
  mbDealTerrainCards(state.mbBR549.InitialTerrainCards);
  // Deal Punk cards to player
  mbDealMineBallCards(state.mbBR549.InitialMineBallCards);
  // Place the targeting graphics
  mbPlaceReticle();
  mbPlaceLoop();
  // All done, set up back to ready
  state.mbBR549.AmBusy = false;
  state.mbBR549.InSetup = false;
  state.mbBR549.AmReady = true;
}

/**
 * @param {number} theQty
 */
function mbDealMineBallCards(theQty) {
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
function mbDealTerrainCards(theQty) {
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

/**
 *
 */
function mbPlaceLoop() {
  log('Place Loop.');
  // Remember state flage
  const wasBusy = state.mbBR549.AmBusy;
  const wasAllowDelete = state.mbBR549.AllowDelete;
  const wasManual = state.mbBR549.Manual;
  // Set the state flags
  state.mbBR549.AmBusy = true;
  state.mbBR549.AllowDelete = true;
  state.mbBR549.Manual = false;
  // Get the compass rose
  const theChars = findObjs({ _type: 'character', name: 'Loop' });
  log(['Loop', { theChars }]);
  // Place the graphic
  const theLoop = createTableGraphic(
    theChars[0].get('name'),
    theChars[0].get('avatar'),
    1050,
    1050,
    140,
    140,
    'objects',
  );
  // Bring it to the front
  toFront(theLoop);
  // Reset the flags
  state.mbBR549.AmBusy = wasBusy;
  state.mbBR549.AllowDelete = wasAllowDelete;
  state.mbBR549.Manual = wasManual;
}

/**
 *
 */
function mbPlaceReticle() {
  log('Place Loop.');
  // Remember state flage
  const wasBusy = state.mbBR549.AmBusy;
  const wasAllowDelete = state.mbBR549.AllowDelete;
  const wasManual = state.mbBR549.Manual;
  // Set the state flags
  state.mbBR549.AmBusy = true;
  state.mbBR549.AllowDelete = true;
  state.mbBR549.Manual = false;
  // Get the compass rose
  const theChars = findObjs({ _type: 'character', name: 'Reticle' });
  log(['Loop', { theChars }]);
  // Place the graphic
  const theReticle = createTableGraphic(
    theChars[0].get('name'),
    theChars[0].get('avatar'),
    1050,
    1050,
    140,
    140,
    'objects',
  );
  // Bring it to the front
  toFront(theReticle);
  // Reset the flags
  state.mbBR549.AmBusy = wasBusy;
  state.mbBR549.AllowDelete = wasAllowDelete;
  state.mbBR549.Manual = wasManual;
}

/**
 *
 */
function mbPlaceCompassRose() {
  log('Place CompassRose.');
  // Remember state flage
  const wasBusy = state.mbBR549.AmBusy;
  const wasAllowDelete = state.mbBR549.AllowDelete;
  const wasManual = state.mbBR549.Manual;
  // Set the state flags
  state.mbBR549.AmBusy = true;
  state.mbBR549.AllowDelete = true;
  state.mbBR549.Manual = true;
  // Get the compass rose
  const theChars = findObjs({ _type: 'character', name: 'CompassRose' });
  log(['CompassRose', { theChars }]);
  // Place the graphic
  const theRose = createTableGraphic(
    theChars[0].get('name'),
    theChars[0].get('avatar'),
    1050,
    1050,
    140,
    140,
    'map',
  );
  // Bring it to the front
  toFront(theRose);
  // Now rotate it random times
  const theTurns = randomInteger(20);
  for (let i = 1; i <= theTurns; i += 1) {
    switch (theRose.get('rotation')) {
      case 0:
        theRose.set('rotation', 90);
        break;
      case 90:
        theRose.set('rotation', 180);
        break;
      case 180:
        theRose.set('rotation', 270);
        break;
      default:
        theRose.set('rotation', 0);
    }
  }
  // Now place one of each terrains arround CompassRose
  switch (theRose.get('rotation')) {
    case 0:
      mbPlaceTerrain('Earth', 1050 - 140, 1050 - 140);
      mbPlaceTerrain('Wind', 1050 + 140, 1050 - 140);
      mbPlaceTerrain('Fire', 1050 + 140, 1050 + 140);
      mbPlaceTerrain('Water', 1050 - 140, 1050 + 140);
      break;
    case 90:
      mbPlaceTerrain('Earth', 1050 + 140, 1050 - 140);
      mbPlaceTerrain('Wind', 1050 + 140, 1050 + 140);
      mbPlaceTerrain('Fire', 1050 - 140, 1050 + 140);
      mbPlaceTerrain('Water', 1050 - 140, 1050 - 140);
      break;
    case 180:
      mbPlaceTerrain('Earth', 1050 + 140, 1050 + 140);
      mbPlaceTerrain('Wind', 1050 - 140, 1050 + 140);
      mbPlaceTerrain('Fire', 1050 - 140, 1050 - 140);
      mbPlaceTerrain('Water', 1050 + 140, 1050 - 140);
      break;
    default:
      mbPlaceTerrain('Earth', 1050 - 140, 1050 + 140);
      mbPlaceTerrain('Wind', 1050 - 140, 1050 - 140);
      mbPlaceTerrain('Fire', 1050 + 140, 1050 - 140);
      mbPlaceTerrain('Water', 1050 + 140, 1050 + 140);
  }
  // Reset the flags
  state.mbBR549.AmBusy = wasBusy;
  state.mbBR549.AllowDelete = wasAllowDelete;
  state.mbBR549.Manual = wasManual;
}

/**
 * @param {string} theType
 * @param {number} theLeft
 * @param {number} theTop
 */
function mbPlaceTerrain(theType, theLeft, theTop) {
  log('Place Terrain.');
  // Remember state flage
  // eslint-disable-next-line no-unused-vars
  const wasBusy = state.mbBR549.AmBusy;
  // eslint-disable-next-line no-unused-vars
  const wasAllowDelete = state.mbBR549.AllowDelete;
  // eslint-disable-next-line no-unused-vars
  const wasManual = state.mbBR549.Manual;
  // Set the state flags
  state.mbBR549.AmBusy = true;
  state.mbBR549.AllowDelete = true;
  state.mbBR549.Manual = true;
  // Get the compass rose
  const theChars = findObjs({ _type: 'character', name: theType });
  log([theType, { theChars }]);
  // Place the graphic
  const theTerrain = createTableGraphic(
    theChars[0].get('name'),
    theChars[0].get('avatar'),
    theLeft,
    theTop,
    140,
    140,
    'map',
  );
  // Bring it to the front
  toFront(theTerrain);
}

/**
 *
 */
function mbRecallCards() {
  log('Recall Cards.');
  // Remember state flage
  const wasBusy = state.mbBR549.AmBusy;
  const wasAllowDelete = state.mbBR549.AllowDelete;
  const wasManual = state.mbBR549.Manual;
  // Set the state flags
  state.mbBR549.AmBusy = true;
  state.mbBR549.AllowDelete = true;
  state.mbBR549.Manual = true;
  // Get the decks
  const theDecks = findObjs({ _type: 'deck' });
  log(['Decks', { theDecks }]);
  theDecks.forEach((obj) => {
    log(['Recalling', { obj }]);
    recallCards(obj.get('_id'));
    // hide the deck
    obj.set('shown', false);
    // SHuffle the deck
    shuffleDeck(obj.get('_id'), true);
  });
  // Reset the flags
  state.mbBR549.AmBusy = wasBusy;
  state.mbBR549.AllowDelete = wasAllowDelete;
  state.mbBR549.Manual = wasManual;
}

/**
 *
 */
function mbClearBoard() {
  log('Clear Board.');
  // Remember state flage
  const wasBusy = state.mbBR549.AmBusy;
  const wasAllowDelete = state.mbBR549.AllowDelete;
  const wasManual = state.mbBR549.Manual;
  // Set the state flags
  state.mbBR549.AmBusy = true;
  state.mbBR549.AllowDelete = true;
  state.mbBR549.Manual = true;
  // What is on the board
  const theBoard = findObjs({ _pageid: Campaign().get('playerpageid') });
  log(['On Board', { theBoard }]);
  theBoard.forEach((obj) => {
    log(['Clearing', { obj }]);
    obj.remove();
  });
  // Reset the flags
  state.mbBR549.AmBusy = wasBusy;
  state.mbBR549.AllowDelete = wasAllowDelete;
  state.mbBR549.Manual = wasManual;
}

/**
 *
 */
function mbResetBasicBoard() {
  log('Reset Basic Board.');
  // Remember the state flags
  const wasBusy = state.mbBR549.AmBusy;
  const wasAllowDelete = state.mbBR549.AllowDelete;
  const wasManual = state.mbBR549.Manual;
  // Set the state flags
  state.mbBR549.AmBusy = true;
  state.mbBR549.AllowDelete = true;
  state.mbBR549.Manual = true;
  // Make sure the basic page settings are correct
  const currentPageID = Campaign().get('playerpageid');
  const currentPage = getObj('page', currentPageID);
  currentPage.set('showgrid', true);
  currentPage.set('height', 30);
  currentPage.set('width', 30);
  currentPage.set('snapping_increment', 2);
  currentPage.set('grid_type', 'square');
  currentPage.set('scale_number', 1);
  currentPage.set('dynamic_lighting_enabled', false);
  currentPage.set('explorer_mode', 'off');
  // Put the background tile up
  const backgroundObj = findObjs({ _type: 'character', name: 'Background' });
  log(['Dump', { backgroundObj }]);
  createTableGraphic(
    'Background',
    backgroundObj[0].get('avatar'),
    1050,
    1050,
    2100,
    2100,
    'map',
  );
  // Reset the AmBusy flag
  state.mbBR549.AmBusy = wasBusy;
  state.mbBR549.AllowDelete = wasAllowDelete;
  state.mbBR549.Manual = wasManual;
}

/**
 * @param {number} theLeft
 * @param {number} theTop
 * @returns {boolean}
 */
export function mbIsSomethingHere(theLeft, theTop) {
  // What are our sizes
  const mySize = 140;
  const halfHeight = mySize / 2;
  const halfWidth = mySize / 2;
  // Figure out what grid it should be on
  const newGridLeft = Math.floor(theLeft / mySize);
  const newGridTop = Math.floor(theTop / mySize);
  // Calculate the actual coordinates
  const newCoordLeft = (newGridLeft * mySize) + halfWidth;
  const newCoordTop = (newGridTop * mySize) + halfHeight;

  const theObj = findObjs({ _type: 'graphic', left: newCoordLeft, top: newCoordTop });
  // Return true if something is here else false
  return (theObj.length >= 1);
}
