// -----
// This module was added by Mike Lakner to house the generic code supporting game tokens.
// -----

import { createTableGraphic } from 'Graphics/Library';

// What are our sizes
const mySize = 140;
const halfHeight = mySize / 2;
const halfWidth = mySize / 2;

/**
 * @param {Roll20Object} obj
 * @param {*} prevObj
 */
export function handleGraphicDestruction(obj, prevObj) {
  // Return based on state switches
  if ((state.mbBR549.Manual === true) || (state.mbBR549.AllowDelete === true)) {
    log(['Handle Graphic Destruction Aborted', { state }]);
    return;
  }
  // Log it so I can see what's happening
  log(['Handle Graphic Destruction', { obj, prevObj }]);
  // Destruction of a card is okay
  if (obj.get('_subtype') === 'card') {
    return;
  }
  // Create a new version
  const theObject = createTableGraphic(
    obj.get('name'),
    obj.get('imgsrc'),
    obj.get('left'),
    obj.get('top'),
    obj.get('height'),
    obj.get('width'),
    'objects',
  );
  handleGraphicChange(theObject);
}

/**
 * @param {Roll20Object} obj
 */
export function handleGraphicChange(obj) {
  // Return based on state switches
  if ((state.mbBR549.Manual === true) || (state.mbBR549.InSetup === true)) {
    log(['Handle Graphic Alignment Aborted', { state }]);
    return;
  }
  // Log this event
  log(['Handle Graphic Change', obj]);
  alignRotation(obj);
  resizeToStandard(obj);
  realignToGrid(obj);
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
}

/**
 * Normalize rotation to cardinal positions
 * But really we should disallow player rotations and only allow through buttons
 *
 * @param {Roll20Object} graphicObj
 */
function alignRotation(graphicObj) {
  const theRotation = graphicObj.get('rotation');
  if (((theRotation >= 315) || (theRotation <= 44)) && (theRotation !== 0)) graphicObj.set('rotation', 0);
  else if (((theRotation >= 45) && (theRotation <= 134)) && (theRotation !== 90)) graphicObj.set('rotation', 90);
  else if (((theRotation >= 135) && (theRotation <= 224)) && (theRotation !== 180)) graphicObj.set('rotation', 180);
  else if (((theRotation >= 225) && (theRotation <= 314)) && (theRotation !== 270)) graphicObj.set('rotation', 270);
  log(['Rotation: ', { From: theRotation, To: graphicObj.get('rotation') }]);
}

/**
 * Resize this thing if necessary
 *
 * @param {Roll20Object} graphicObj
 */
function resizeToStandard(graphicObj) {
  if (graphicObj.get('height') !== mySize) graphicObj.set('height', mySize);
  if (graphicObj.get('width') !== mySize) graphicObj.set('width', mySize);
}

/**
 * Reposition the graphic to it's nestled within a Grid Square
 *
 * @param {Roll20Object} graphicObj
 */
function realignToGrid(graphicObj) {
  // Figure out what grid it should be on
  const newGridLeft = Math.floor((graphicObj.get('left') - 1) / mySize);
  const newGridTop = Math.floor((graphicObj.get('top') - 1) / mySize);
  log(['NewGrid: ', { Left: newGridLeft, Top: newGridTop }]);
  // Calculate the actual coordinates
  const newCoordLeft = (newGridLeft * mySize) + halfWidth;
  const newCoordTop = (newGridTop * mySize) + halfHeight;
  log(['NewCoord: ', { Left: newCoordLeft, Top: newCoordTop }]);
  // Realign if not already aligned
  if (graphicObj.get('left') !== newCoordLeft) graphicObj.set('left', newCoordLeft);
  if (graphicObj.get('top') !== newCoordTop) graphicObj.set('top', newCoordTop);
}

/**
 * @param {Roll20Object} theObj
 */
function mbHandleReticleMove(theObj) {
  log(['Reticle Move', { theObj }]);
}

/**
 * @param {Roll20Object} theObj
 */
export function mbHandleLoopMove(theObj) {
  log(['Loop Move', { theObj }]);
}

/**
 *
 */
export default function TokenListeners() {
  // Handle the placement of new cards
  // Trigger on position change to ensure alignment even with {Alt} held down.
  on('change:graphic:left', handleGraphicChange);
  on('change:graphic:top', handleGraphicChange);
  on('change:graphic:rotation', handleGraphicChange);
  // Trigger on deletion of a graphic
  on('destroy:graphic', handleGraphicDestruction);
}
