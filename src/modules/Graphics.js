
// This file was designed by Mike Lakner
//
// Hande the movement of a card from player hand to the board.
// Card must be cloned to a graphic that is linked to a character (matching card name)
//   and then the original card removed from the table.

import mbHandleLoopMove from 'App/modules/Loop';
import mbHandleReticleMove from 'App/modules/Reticle';

/**
 * Suggested and offered by Aaron to avoid an error when placing card
 *
 * @param {string} imgsrc
 * @returns {?string}
 */
export const getCleanImgsrc = (imgsrc) => {
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
