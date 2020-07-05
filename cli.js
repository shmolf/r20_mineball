#!/usr/bin/env node

/* eslint-disable no-console */

/* USAGE
 * To run this command, run the following command:
 *    node ./cli.js
 * If you get any kinda error, like this is not a script, then run:
 *    chmod +x ./cli.js
 * Then, run the original command again.
 */


const fs = require('fs');
const { cardData: sourceData } = require('./src/Cards/Library');

const { mbCARDDATA: libraryData } = sourceData;
const outputPath = './src/Cards/Object.js';
const parsedData = {};
const headers = libraryData.shift();

if (validateHeaders(headers) === false) {
  return console.log('The card headers do not match the expected list of headers.');
}

for (let cardData = libraryData.shift(); libraryData.length > 0; cardData = libraryData.shift()) {
  /** @type {import('Cards/CardObjectType').CardJson} */
  const newCardObject = createCardObject(cardData);
  parsedData[newCardObject.name] = newCardObject;
}

return writeFile(outputPath, `export default ${JSON.stringify(parsedData)}`);

/**
 * Compare the provided array of headers, with the expected array. To ensure data-integrity
 *
 * @param {string[]} source
 * @returns {boolean} Where true is successful, and false is an error
 */
function validateHeaders(source) {
  const expected = [
    'Rec',
    'Rand',
    'Name',
    'Unique=4375',
    'FPA',
    'FPD',
    'FSA',
    'FSD',
    'APA',
    'APD',
    'ASA',
    'ASD',
    'F',
    'FS',
    'S',
    'AS',
    'A',
    'AP',
    'P',
    'FP',
    'Element',
    'Weakness',
    'Bonus Vs',
    'Title',
    'Immunity',
    'More',
    'Skill',
    'Impact',
  ];

  if (source.length !== expected.length) {
    return false;
  }

  for (let i = 0; i < source.length; i += 1) {
    if (source[i] !== expected[i]) {
      return false;
    }
  }

  return true;
}

/**
 * @param {(string|number)[]} cardData
 * @returns {Object}
 */
function createCardObject(cardData) {
  const Rec = cardData[0];
  const Name = cardData[2];
  const FPAction = cardData[4];
  const FPValue = cardData[5];
  const FSAction = cardData[6];
  const FSValue = cardData[7];
  const APAction = cardData[8];
  const APValue = cardData[9];
  const ASAction = cardData[10];
  const ASValue = cardData[11];
  const FMovement = cardData[12];
  const FSMovement = cardData[13];
  const SMovement = cardData[14];
  const ASMovement = cardData[15];
  const AMovement = cardData[16];
  const APMovement = cardData[17];
  const PMovement = cardData[18];
  const FPMovement = cardData[19];
  const Element = cardData[20];
  const Weakness = cardData[21];
  const Bonus = cardData[22];
  const Title = cardData[23];
  const Immunity = cardData[24];
  const More = cardData[25];
  const Skill = cardData[26];
  const Impact = cardData[27];
  return {
    rec: Rec,
    title: Title,
    name: Name,
    actions: {
      forePort: {
        type: FPAction,
        value: FPValue,
      },
      foreStarboard: {
        type: FSAction,
        value: FSValue,
      },
      aftPort: {
        type: APAction,
        value: APValue,
      },
      aftStarboard: {
        type: ASAction,
        value: ASValue,
      },
    },
    movement: {
      fore: FMovement === 'Y',
      foreStarboard: FSMovement === 'Y',
      starboard: SMovement === 'Y',
      aftStarboard: ASMovement === 'Y',
      aft: AMovement === 'Y',
      aftPort: APMovement === 'Y',
      port: PMovement === 'Y',
      forePort: FPMovement === 'Y',
    },
    cardType: Element,
    cardWeakness: Weakness,
    archEnemy: Bonus,
    immunity: Immunity,
    more: More,
    skill: Skill,
    impact: Impact,
  };
}

/**
 * @param {string} filePath
 * @param {string} stringData
 */
function writeFile(filePath, stringData) {
  fs.writeFile(filePath, stringData, (err) => {
    if (err) {
      return console.log(err);
    }
    return console.log('The file was saved!');
  });
}
