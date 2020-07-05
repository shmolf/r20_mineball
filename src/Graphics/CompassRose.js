// -----
// This module was added by Mike Lakner to house the code supporting the CompassRose.
// -----
import { mbPlaceTerrain } from 'Lib/Board';
import { createTableGraphic } from 'Graphics/Lib';
/**
 *
 */
export default function mbPlaceCompassRose() {
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
  // Now place one of each terrains arround CompassRose with no ownership
  switch (theRose.get('rotation')) {
    case 0:
      mbPlaceTerrain('Earth', 1050 - 140, 1050 - 140, '');
      mbPlaceTerrain('Wind', 1050 + 140, 1050 - 140, '');
      mbPlaceTerrain('Fire', 1050 + 140, 1050 + 140, '');
      mbPlaceTerrain('Water', 1050 - 140, 1050 + 140, '');
      break;
    case 90:
      mbPlaceTerrain('Earth', 1050 + 140, 1050 - 140, '');
      mbPlaceTerrain('Wind', 1050 + 140, 1050 + 140, '');
      mbPlaceTerrain('Fire', 1050 - 140, 1050 + 140, '');
      mbPlaceTerrain('Water', 1050 - 140, 1050 - 140, '');
      break;
    case 180:
      mbPlaceTerrain('Earth', 1050 + 140, 1050 + 140, '');
      mbPlaceTerrain('Wind', 1050 - 140, 1050 + 140, '');
      mbPlaceTerrain('Fire', 1050 - 140, 1050 - 140, '');
      mbPlaceTerrain('Water', 1050 + 140, 1050 - 140, '');
      break;
    default:
      mbPlaceTerrain('Earth', 1050 - 140, 1050 + 140, '');
      mbPlaceTerrain('Wind', 1050 - 140, 1050 - 140, '');
      mbPlaceTerrain('Fire', 1050 + 140, 1050 - 140, '');
      mbPlaceTerrain('Water', 1050 + 140, 1050 + 140, '');
  }
  // Reset the flags
  state.mbBR549.AmBusy = wasBusy;
  state.mbBR549.AllowDelete = wasAllowDelete;
  state.mbBR549.Manual = wasManual;
}
