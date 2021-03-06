// -----
// This module was added by Mike Lakner to house the code supporting the Reticle.
// -----
import { createTableGraphic } from 'Graphics/Library';
import { handleGraphicChange } from 'Graphics/Tokens';

/**
 *
 */
export default function mbPlaceReticle() {
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
    'map',
  );
  handleGraphicChange(theReticle);
  // Send it to the back to hide it until needed
  toBack(theReticle);
  // Reset the flags
  state.mbBR549.AmBusy = wasBusy;
  state.mbBR549.AllowDelete = wasAllowDelete;
  state.mbBR549.Manual = wasManual;
}
