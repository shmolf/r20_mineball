
// This file was designed by Mike Lakner
//
// Hande the movement of a card from player hand to the board.
// Card must be cloned to a graphic that is linked to a character (matching card name)
//   and then the original card removed from the table.

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
