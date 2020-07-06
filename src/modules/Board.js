// -----
// This module was added by Mike Lakner to house the code supporting what is happening on the game board.
// -----
import { createTableGraphic } from 'Graphics/Library';
import { handleGraphicChange } from 'Graphics/Tokens';

  // What are our sizes
  const mySize = 140;
  const halfHeight = mySize / 2;
  const halfWidth = mySize / 2;

/**
 * @param {number} theLeft
 * @param {number} theTop
 * @returns {boolean}
 */
export function mbIsSomethingHere(theLeft, theTop) {

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


/**
 * @param {string} theType
 * @param {number} theLeft
 * @param {number} theTop
 * @param {string} theOwner
 */
export function mbPlaceTerrain(theType, theLeft, theTop, theOwner) {
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
  handleGraphicChange(theTerrain);
  // Bring it to the front
  toFront(theTerrain);
  // Add to the state and set the ownership
  state.mbBR549.TerrainCardsInPlay[theChars[0].get('name')] = { playerID: theOwner, inhand: false };
}

/**
 *
 */
export function mbClearBoard() {
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
export function mbResetBasicBoard() {
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
  const theBoard = createTableGraphic(
    'Background',
    backgroundObj[0].get('avatar'),
    1050,
    1050,
    2100,
    2100,
    'map',
  );
  handleGraphicChange(theBoard);
  // Reset the AmBusy flag
  state.mbBR549.AmBusy = wasBusy;
  state.mbBR549.AllowDelete = wasAllowDelete;
  state.mbBR549.Manual = wasManual;
}
