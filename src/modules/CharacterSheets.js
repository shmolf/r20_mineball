// This file was designed by Mike Lakner

import mbCARDDATA from 'Cards/Library';

// eslint-disable-next-line max-len
export const defaultGraphic = 'https://s3.amazonaws.com/files.d20.io/images/141291438/6TAoheVCteGgoN4BW3tmzA/original.png?15914477175';

/**
 * @returns {void}
 */
export function mbRebuildAllCharacterSheets() {
  sendChat('API !-mb', '/w gm Start: mbRebuildAllCharacterSheets()');
  sendChat('API !-mb', `/w gm Building ${mbCARDDATA.length - 1} cards.`);

  for (let i = 1; i <= (mbCARDDATA.length - 1); i += 1) {
    // Create the character sheet
    const x = createObj(
      'character',
      {
        name: mbCARDDATA[i][2],
        // Set the graphic, ********** replace this with a lookup to the card image
        avatar: defaultGraphic,
      },
    );
    // Flag this as a Mine Ball card
    createObj('attribute', { name: 'is_mbc', current: true, characterid: x.id });
    createObj('attribute', { name: 'char_id', current: '', characterid: x.id });
    // add each attribute
    for (let j = 0; j <= 27; j += 1) {
      // Skip meaningless fields
      if (j === 2 || j > 3) {
        // Convert it to single word and lower case
        const thisID = mbCARDDATA[0][j].replace(/\s/g, '');
        // Create the attribute and attach it to the character sheet
        createObj('attribute', { name: thisID.toLowerCase(), current: mbCARDDATA[i][j], characterid: x.id });
      }
    }
    // Create attribute for current orientation
    createObj('attribute', { name: 'facing', current: 'F', characterid: x.id });
    // Create basic storage attributes
    createObj('attribute', { name: 'mbdata1', current: '', characterid: x.id });
    createObj('attribute', { name: 'mbdata2', current: '', characterid: x.id });
    // Create always movement buttons
    createObj('ability', {
      name: '↶', action: '!-mb doRCC', characterid: x.id, istokenaction: true,
    });
    createObj('ability', {
      name: '↷', action: '!-mb doRCW', characterid: x.id, istokenaction: true,
    });
    createObj('ability', {
      name: '⇑', action: '!-mb doMF', characterid: x.id, istokenaction: true,
    });
    // Create dynamic movement buttons
    if (mbCARDDATA[i][13] === 'Y') {
      createObj('ability', {
        name: '⇗', action: '!-mb doMFS', characterid: x.id, istokenaction: true,
      });
    }
    if (mbCARDDATA[i][14] === 'Y') {
      createObj('ability', {
        name: '⇒', action: '!-mb doMS', characterid: x.id, istokenaction: true,
      });
    }
    if (mbCARDDATA[i][15] === 'Y') {
      createObj('ability', {
        name: '⇘', action: '!-mb doMAS', characterid: x.id, istokenaction: true,
      });
    }
    if (mbCARDDATA[i][16] === 'Y') {
      createObj('ability', {
        name: '⇓', action: '!-mb doMA', characterid: x.id, istokenaction: true,
      });
    }
    if (mbCARDDATA[i][17] === 'Y') {
      createObj('ability', {
        name: '⇙', action: '!-mb doMAP', characterid: x.id, istokenaction: true,
      });
    }
    if (mbCARDDATA[i][18] === 'Y') {
      createObj('ability', {
        name: '⇐', action: '!-mb doMP', characterid: x.id, istokenaction: true,
      });
    }
    if (mbCARDDATA[i][19] === 'Y') {
      createObj('ability', {
        name: '⇖', action: '!-mb doMFP', characterid: x.id, istokenaction: true,
      });
    }
    // Create action buttons
    let didThis = '';
    for (let j = 4; j <= 10; j += 2) {
      if ((mbCARDDATA[i][j] !== 'Nothing') && (mbCARDDATA[i][j] !== 'Defend')) {
        // Only add one button for each
        if (didThis.indexOf(mbCARDDATA[i][j]) === -1) {
          createObj('ability', {
            name: mbCARDDATA[i][j], action: `!-mb do${mbCARDDATA[i][j]}`, characterid: x.id, istokenaction: true,
          });
          didThis += mbCARDDATA[i][j];
        }
      }
    }
  }

  sendChat('API !-mb', '/w gm End: mbRebuildAllCharacterSheets()');
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
