// -----
// This module was added by Mike Lakner to house the code supporting the Reticle.
// -----
import { createTableGraphic } from 'Lib/Graphics';
/**
 * @param {Roll20Object} theObj
 */
// eslint-disable-next-line no-unused-vars
export function mbHandleReticleMove(theObj) {
  log(['Reticle Move', { theObj }]);
}
/**
 *
 */
export function mbPlaceReticle() {
  log('Place Reticle.');
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
  log(['Reticle', { theChars }]);
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
