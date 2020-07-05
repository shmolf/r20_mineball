// This file was designed by Mike Lakner

import cards from 'Cards/Object';
// eslint-disable-next-line no-unused-vars
import nothing from 'Cards/CardObjectType';

/** @typedef {import('Cards/CardObjectType').CardJson} CardJson */

// eslint-disable-next-line max-len
export const defaultGraphic = 'https://s3.amazonaws.com/files.d20.io/images/141291438/6TAoheVCteGgoN4BW3tmzA/original.png?15914477175';

/**
 * @returns {void}
 */
export function mbRebuildAllCharacterSheets() {
  const cardCount = Object.keys(cards).length;
  sendChat('API !-mb', '/w gm Start: mbRebuildAllCharacterSheets()');
  sendChat('API !-mb', `/w gm Building ${cardCount} cards.`);

  Object.values(cards).forEach((/** @type {CardJson} */card) => {
    // Create the character sheet
    const x = createObj(
      'character',
      {
        name: card.name,
        // Set the graphic, ********** replace this with a lookup to the card image
        avatar: defaultGraphic,
      },
    );
    // Flag this as a Mine Ball card
    createObj('attribute', { name: 'is_mbc', current: true, characterid: x.id });
    createObj('attribute', { name: 'char_id', current: '', characterid: x.id });
    // add each attribute
    /*
    for (let j = 0; j <= 27; j += 1) {
      // Skip meaningless fields
      if (j === 2 || j > 3) {
        // Convert it to single word and lower case
        const thisID = cardData[0][j].replace(/\s/g, '');
        // Create the attribute and attach it to the character sheet
        createObj('attribute', { name: thisID.toLowerCase(), current: cardData[i][j], characterid: x.id });
      }
    }
    */

    createDefaultButtons(x.id);
    buildCardMovementButtons(card.movement, x.id);
    buildCardActionButtons(card.actions, x.id);
  });

  sendChat('API !-mb', '/w gm End: mbRebuildAllCharacterSheets()');
}


/**
 * Create default buttons available for every card
 *
 * @param {string} characterId
 */
function createDefaultButtons(characterId) {
  // Create attribute for current orientation
  createObj('attribute', { name: 'facing', current: 'F', characterid: characterId });
  // Create basic storage attributes
  createObj('attribute', { name: 'mbdata1', current: '', characterid: characterId });
  createObj('attribute', { name: 'mbdata2', current: '', characterid: characterId });
  // Create always movement buttons
  createObj('ability', {
    name: '↶', action: '!-mb doRCC', characterid: characterId, istokenaction: true,
  });
  createObj('ability', {
    name: '↷', action: '!-mb doRCW', characterid: characterId, istokenaction: true,
  });
  createObj('ability', {
    name: '⇑', action: '!-mb doMF', characterid: characterId, istokenaction: true,
  });
}

/**
 * Create dynamic movement buttons
 *
 * @param {Object.<string, boolean>} movements
 * @param {string} characterId
 */
function buildCardMovementButtons(movements, characterId) {
  if (movements.foreStarboard) {
    createObj('ability', {
      name: '⇗', action: '!-mb doMFS', characterid: characterId, istokenaction: true,
    });
  }
  if (movements.starboard) {
    createObj('ability', {
      name: '⇒', action: '!-mb doMS', characterid: characterId, istokenaction: true,
    });
  }
  if (movements.aftStarboard) {
    createObj('ability', {
      name: '⇘', action: '!-mb doMAS', characterid: characterId, istokenaction: true,
    });
  }
  if (movements.aft) {
    createObj('ability', {
      name: '⇓', action: '!-mb doMA', characterid: characterId, istokenaction: true,
    });
  }
  if (movements.aftPort) {
    createObj('ability', {
      name: '⇙', action: '!-mb doMAP', characterid: characterId, istokenaction: true,
    });
  }
  if (movements.port) {
    createObj('ability', {
      name: '⇐', action: '!-mb doMP', characterid: characterId, istokenaction: true,
    });
  }
  if (movements.forePort) {
    createObj('ability', {
      name: '⇖', action: '!-mb doMFP', characterid: characterId, istokenaction: true,
    });
  }
}


/**
 * Dynamically create action buttons
 *
 * @param {Object.<string, {type: string, value: string}>} actions
 * @param {string} characterId
 */
function buildCardActionButtons(actions, characterId) {
  // Lets get a list of all actions for the card. May include duplicates.
  let allCardActions = actions.map((direction) => direction.type);

  // Let's filter out any 'Nothing's and 'Defend's
  allCardActions = allCardActions.filter((action) => (action !== 'Nothing' && action !== 'Defend'));

  // This will return a unique array of values, so that we only have 1 of each type of button
  allCardActions = allCardActions.filter((action, index, sourceArray) => sourceArray.indexOf(action) === index);

  allCardActions.forEach((action) => {
    createObj('ability', {
      name: action, action: `!-mb do${action}`, characterid: characterId, istokenaction: true,
    });
  });
}


/**
 * usage - !whisperGmNote with any token selected.
 *
 * @returns {void}
 */
export function mbPurgeAllCharacterSheets() {
  sendChat('API !-mb', '/w gm Start: mbPurgeAllCharacterSheets()');
  const npcs = findObjs({ type: 'character', controlledby: '' });
  let purgeCount = 0;
  let skipCount = 0;

  npcs.forEach((obj) => {
    // Make sure this character sheet in MB created, assume it is if this attribute is defined
    if (getAttrByName(obj.id, 'is_mbc') !== undefined) {
      purgeCount += 1;
      obj.remove();
    } else {
      skipCount += 1;
    }
  });

  sendChat('API !-mb', `/w gm mbPurgeAllCharacterSheets() Skipped:${skipCount}`);
  sendChat('API !-mb', `/w gm End: mbPurgeAllCharacterSheets() Purged:${purgeCount}`);
}
