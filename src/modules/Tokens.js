// This file was designed by Mike Lakner

import { handleGraphicChange } from 'App/Temp/FunctionLibrary';

export const handleGraphicDestruction = (obj, prevObj) => {
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
  createTableGraphic(
    obj.get('name'),
    obj.get('imgsrc'),
    obj.get('left'),
    obj.get('top'),
    obj.get('height'),
    obj.get('width'),
    'objects',
  );
};

/**
 *
 */
export function TokenListeners() {
  // Handle the placement of new cards
  // Trigger on position change to ensure alignment even with {Alt} held down.
  on('change:graphic:left', handleGraphicChange);
  on('change:graphic:top', handleGraphicChange);
  on('change:graphic:rotation', handleGraphicChange);
  // Trigger on deletion of a graphic
  on('destroy:graphic', handleGraphicDestruction);
}
