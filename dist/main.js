/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/modules/Emblem.js
/**
 * @namespace App.Lib
 */

class Emblem {
  /**
   * @param {number} id - string id of the emblem
   * @param {string} url - url of the image for the emblem
   * @param {string} name - human-friendly name of the emblem
   * @param {string} tag - tags associated with the emblem
   */
  constructor(id, url, name, tag) {
    this.id = id;
    this.url = url;
    this.name = name;
    this.tag = tag;
  }

  /**
   * This function is mostly likely not needed
   *
   * @returns {EmblemJson}
   */
  toJSON() {
    return {
      id: this.id,
      url: this.url,
      name: this.name,
      tag: this.tag,
    };
  }

  /**
   * This function is mostly likely not needed
   *
   * @param {EmblemJson|string} json
   * @returns {Emblem}
   */
  fromJSON(json) {
    /** @type {EmblemJson} */
    const obj = typeof json === 'string' ? JSON.parse(json) : json;

    this.id = obj.id;
    this.url = obj.url;
    this.name = obj.name;
    this.tag = obj.tag;

    return this;
  }
}

/**
 * This function is mostly likely not needed
 *
 * @param {EmblemJson|string} json
 * @returns {Emblem}
 */
Emblem.revive = (json) => {
  /** @type {EmblemJson} */
  const obj = typeof json === 'string' ? JSON.parse(json) : json;

  return new Emblem(obj.id, obj.url, obj.name, obj.tag);
};

/**
 * @typedef {Object} EmblemJson
 * @property {number} id
 * @property {string} url
 * @property {string} name
 * @property {string} tag
 */

// CONCATENATED MODULE: ./src/Players/Player.js
 // eslint-disable-line no-unused-vars

class Player_Player {
  /**
   * @param {string} id - Roll20-defined player Id
   */
  constructor(id) {
    /** @type {string} */
    this.id = id;
    /** @type {Emblem} */
    this.emblem = null;
  }

  /**
   * @returns {string} - Roll20-defined player Id
   */
  getId() {
    return this.id;
  }

  /**
   * @returns {?Emblem} - Emblem representing the player
   */
  getEmblem() {
    return this.emblem;
  }

  /**
   * @param {Emblem} emblem - Emblem representing the player
   */
  setEmblem(emblem) {
    this.emblem = emblem;
  }

  /**
   * This function is mostly likely not needed
   *
   * @returns {PlayerJson}
   */
  toJSON() {
    return {
      id: this.id,
      emblem: this.getEmblem().toJSON(),
    };
  }

  /**
   * This function is mostly likely not needed
   *
   * @param {PlayerJson|string} json
   * @returns {Player}
   */
  fromJSON(json) {
    /** @type {PlayerJson} */
    const obj = typeof json === 'string' ? JSON.parse(json) : json;
    const emblem = new Emblem().fromJSON(obj.emblem);

    this.id = obj.id;
    this.setEmblem(emblem);

    return this;
  }
}

/**
 * This function is mostly likely not needed
 *
 * @param {PlayerJson|string} json
 * @returns {Player}
 */
Player_Player.revive = (json) => {
  /** @type {PlayerJson} */
  const obj = typeof json === 'string' ? JSON.parse(json) : json;
  const emblem = Emblem.revive(obj.emblem);
  const player = new Player_Player(obj.id);
  player.setEmblem(emblem);

  return player;
};

/**
 * @typedef {Object} PlayerJson
 * @property {string} id
 * @property {import('Lib/Emblem').EmblemJson} emblem
 */

// CONCATENATED MODULE: ./src/Players/PlayerPool.js



/** @type {Object.<string, Player>} */
let PlayerPool_players = {};

/**
 * @returns {Object.<string, Player>}
 */
function getPlayers() {
  return PlayerPool_players;
}

/**
 * @param {Object.<string, Player>} newPlayerList
 * @returns {void}
 */
function setPlayers(newPlayerList) {
  PlayerPool_players = newPlayerList;
  state.MineBall.players = PlayerPool_players;
}


/**
 * Restores `players` from the JSON loaded from FireBase, into Player instances
 *
 * @param {Object.<string, Object>} playerData
 * @returns {void}
 */
function deserializePlayerObject(playerData) {
  const playerIds = Object.keys(playerData);
  const rebuiltPlayers = {};

  playerIds.forEach((cachedPlayerId) => {
    /** @type {import('Lib/Emblem').EmblemJson} */
    const playerEmblemData = playerData[cachedPlayerId].emblem;
    const restoredPlayer = new Player_Player(cachedPlayerId);

    restoredPlayer.setEmblem(new Emblem(
      playerEmblemData.id,
      playerEmblemData.url,
      playerEmblemData.name,
      playerEmblemData.tag,
    ));

    rebuiltPlayers[cachedPlayerId] = restoredPlayer;
  });

  setPlayers(rebuiltPlayers);
}

// CONCATENATED MODULE: ./src/Commands/Command.js
/**
 * @namespace App.Lib
 */

const playerCommandId = 'mb';
const apiCommandId = '-mb';

class Command {
  constructor() {
    /** @type {string} */
    this.helpParam = '--help';

    // The default state of a Command, is that it's available to GM and Players
    /** @type {boolean} */
    this.gmOnly = false;

    // The default state of a Command, is that it's a public command
    /** @type {boolean} */
    this.internal = false;

    // The paramList is for the primary command. Commands that have Sub commands, might not use this property.
    /** @type {string[]} */
    this.paramList = [];

    /** @type {string} */
    this.cmd = 'filler';

    /** @type {string} */
    this.desc = 'filler';

    // The base function of the command. Useful for showing the Help text, or running primary function.
    /** @type {Function} */
    this.func = () => {};

    /* A dictionary or subcommands based around the primary.
     * Like `!mb kitchen makecoffee`, where `makecoffee`, is sub command.
     * Keys are the command, values are the function.
     */
    /** @type {SubCommand} */
    this.subCommands = {};

    /**
     * Each command can redfine the `help` property. This will be called under some circumstances.
     *
     * @param {string} who - layer's human name
     * @param {string} playerId - reference of the player
     * @param {string[]} args - arguments for the command
     */
    // eslint-disable-next-line no-unused-vars
    this.help = (who, playerId, args) => {
      sendChat('Mine Ball Default Help', `/w ${who} This is not actually helpful. As this is just filler text.`);
    };
  }

  /**
   * @param {string} who - layer's human name
   * @param {string} playerId - reference of the player
   * @param {string[]} args - arguments for the command
   */
  runSubCommand(who, playerId, args) {
    const subCmdRef = args.length >= 1 ? args.shift().toLowerCase() : '';
    if (subCmdRef in this.subCommands) {
      /** @type {SubCommand} */
      const subCommand = this.subCommands[subCmdRef];

      // Let's check if a non-GM is trying to run a GM command
      if (subCommand.gmOnly === true && playerIsGM(playerId) === false) {
        return;
      }
      subCommand.func(who, playerId, args);
    } else {
      this.help(who, playerId, args);
    }
  }
}

/**
 * @typedef {Object} SubCommand
 * @property {boolean} gmOnly - If true, should only ever be run by the GM
 * @property {boolean} internal - If true, should usually only be run by the system
 * @property {Function} func - Function to be called for the command
 * @property {string[]} paramList - string list describing expected params. Not required at all.
 */

// CONCATENATED MODULE: ./src/Commands/EmblemCommand.js
/**
 * @namespace App.Commands
 */






/** @type {Emblem[]} */
let emblems = null;

const defaultGeneralEmblem = 'skull';

/** @type {Object.<string, Emblem>} */
const usedEmblems = {};

class EmblemCommand_EmblemCommand extends Command {
  constructor() {
    super();

    this.cmd = 'emblem';
    this.desc = `Command is used to join the game, and declare/change what emblem will represent you as a player.
      The emblem will be represented on all of your cards. (${this.helpParam} avail)`;
    this.func = this.runSubCommand;
    /**
     * @param {string} who - layer's human name
     * @param {string} playerId - reference of the player
     * @param {string[]} args - arguments for the command
     */
    // eslint-disable-next-line no-unused-vars
    this.help = (who, playerId, args) => { EmblemHelp(who); };
    this.subCommands = {
      '--help': {
        gmOnly: false,
        internal: false,
        func: EmblemHelp,
        paramList: [],
      },
      set: {
        gmOnly: false,
        internal: true,
        func: SetPlayerEmblem,
        paramList: ['emblemName'],
      },
    };
  }
}

/**
 * Explains how to use the Emblem command
 *
 * @param {string} who - user to whisper back to
 * @returns {void}
 */
function EmblemHelp(who) {
  // Let's filter out the used emblems, and for the ones that remain, create a button list
  const emblemList = emblems
    .filter((emblem) => validateEmblemChoice(emblem.name))
    .map((/** @type {Emblem} */emblem) => {
      const { name, url } = emblem;
      return `<p><a href='!${playerCommandId} emblem set ${name}'><img width='30' src='${url}' /> ${name}</a></p>`;
    })
    .join('');

  sendChat('Mine Ball Help',
    `/w ${who} <p>Choose from one of the available emblems below.</p>
    <p>You cannot choose an emblem if another player has already selected it.</p>
    <p>Click the emblem you'd like to choose to represent you.</p>
    ${emblemList}`);
}

/**
 * @param {string} who - layer's human name
 * @param {string} playerId - reference of the player
 * @param {string[]} args - arguments for the command
 * @returns {void}
 */
function SetPlayerEmblem(who, playerId, args) {
  // Player just needs help with the command
  if (args.includes(this.helpParam)) {
    populateUsedEmblems();
    EmblemHelp(who);
    return;
  }

  const emblemChoice = args.shift();
  const emblemNameList = emblems.map((emblem) => emblem.name);
  const emblemIndex = emblemNameList.indexOf(emblemChoice);

  // Player provided an invalid emblem reference
  if (emblemChoice === undefined || emblemIndex === -1 || validateEmblemChoice(emblemChoice) === false) {
    sendChat('Mine Ball Error', `/w ${who} Need to choose and emblem.`);
    EmblemHelp(who);
    return;
  }

  const gamePlayers = getPlayers();
  const playerExists = playerId in gamePlayers;

  if (!playerExists) {
    // Player not yet part of the game
    gamePlayers[playerId] = new Player_Player(playerId);
  }

  /** @type {Player} player */
  const player = gamePlayers[playerId];
  player.setEmblem(emblems[emblemIndex]);

  sendChat('Emblem Choosen', `/w ${who} You are now <img width='30' src='${player.getEmblem().url}'>`);

  // Now that either a new player is created, or an existing player is modifed, we'll want to store it globally.
  setPlayers(gamePlayers);
}

/**
 *
 */
function EmblemBuildInit() {
  emblems = JSON.parse(Campaign().get('token_markers'))
    .map((emblem) => new Emblem(emblem.id, emblem.url, emblem.name, emblem.tag));
}

/**
 * Returns true if the Emblem name provided is allowable
 *
 * @private
 * @param {string} emblemName
 * @returns {boolean}
 */
function validateEmblemChoice(emblemName) {
  populateUsedEmblems();
  return !(emblemName in usedEmblems) && emblemName !== defaultGeneralEmblem;
}

/**
 * @private
 * @returns {void}
 */
function populateUsedEmblems() {
  const gamePlayers = getPlayers();
  Object.keys(gamePlayers).forEach((playerId) => {
    const usedEmblem = gamePlayers[playerId].getEmblem();
    usedEmblems[usedEmblem.name] = usedEmblem;
  });
}

// CONCATENATED MODULE: ./src/Commands/HelpCommand.js
/**
 * @namespace App.Commands
 */



class HelpCommand_HelpCommand extends Command {
  /**
   * @param {Object.<string, Command>} gameCommands - List of commands available in the game
   */
  constructor(gameCommands) {
    super();

    this.cmd = 'help';
    this.desc = '<p>Provides general help, and a list of all commands.';

    /**
     * @param {string} who - layer's human name
     * @param {string} playerId - reference of the player
     * @param {string[]} args - arguments for the command
     */
    // eslint-disable-next-line no-unused-vars
    this.help = (who, playerId, args) => { this.func(who); };

    /**
     * @param {string} who - layer's human name
     * @returns {void}
     */
    this.func = (who) => {
      /**
       * Let's iterate over each command, extracting the description and such into html.
       *
       * @param {Command} commandInstance - Command reference
       * @returns {string}
       */
      function commandPreHtml(commandInstance) {
        // Let's grab a list of all param examples, and join them with spaces.
        /** @type {string} */
        const paramExample = commandInstance.paramList.join(' ');
        if (commandInstance.internal || commandInstance.gmOnly) {
          return '';
        }
        return `<hr><pre>!${playerCommandId} ${commandInstance.cmd} ${paramExample}</pre>
          <p>${commandInstance.desc}</p>`;
      }

      const commandKeyList = Object.keys(gameCommands);
      const commandDescriptions = commandKeyList
        .map((commandKey) => commandPreHtml(gameCommands[commandKey]))
        .join('');

      sendChat('Mine Ball Help',
        `/w ${who} <p>Below is a list of commands available to you, for this game.</p>
        <p>
          If you provide <code>${this.helpParam}</code> after some commands, it will provide additional details.
          Example:
        </p>
        <pre>!minecraft emblem ${this.helpParam}</pre>
        ${commandDescriptions}`);
    };
  }
}

// CONCATENATED MODULE: ./src/Commands/WhoAmICommand.js
/**
 * @namespace App.Commands
 */





class WhoAmICommand_WhoAmICommand extends Command {
  constructor() {
    super();

    this.cmd = 'whoami';
    this.desc = 'Informs you of which emblem belongs to you, and thereby which cards you should control.';

    /**
     * @param {string} who - layer's human name
     * @param {string} playerId - reference of the player
     * @param {string[]} args - arguments for the command
     */
    // eslint-disable-next-line no-unused-vars
    this.help = (who, playerId, args) => {
      sendChat(
        'Mine Ball - Reset Player Help',
        `/w ${who} This will reset the players within the game.<br>⚠ Use with caution ⚠`,
      );
    };

    /**
     * @param {string} who - player's human name
     * @param {string} playerId - reference of the player
     * @returns {void}
     */
    this.func = (who, playerId) => {
      const gamePlayers = getPlayers();
      const playerExists = playerId in gamePlayers;
      if (!playerExists) {
        sendChat('The Referee',
          `/w ${who} You are not yet a player in the game. Use the <code>!${playerCommandId} help</code>
          command to understand how to join.`);
      } else {
        /** @type {Player} player */
        const player = gamePlayers[playerId];
        sendChat('', `/w ${who} You are <img width='30' src='${player.getEmblem().url}'>`);
      }
    };
  }
}

// CONCATENATED MODULE: ./src/Commands/ResetPlayersCommand.js


/**
 * @namespace App.Commands
 */



class ResetPlayersCommand_ResetPlayersCommand extends Command {
  constructor() {
    super();

    this.cmd = 'reset-players';
    this.desc = 'Clears the list of Mineball players from the Campaign';

    /**
     * @param {string} who - layer's human name
     * @param {string} playerId - reference of the player
     * @param {string[]} args - arguments for the command
     */
    // eslint-disable-next-line no-unused-vars
    this.help = (who, playerId, args) => {
      sendChat(
        'Mine Ball - Reset Player Help',
        `/w ${who} This will reset the players within the game.<br>⚠ Use with caution ⚠`,
      );
    };

    this.func = () => {
      setPlayers({});
      log('Players are reset');
    };
  }
}

// CONCATENATED MODULE: ./src/Graphics/Library.js
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
const getCleanImgsrc = (imgsrc) => {
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
function createTableGraphic(theName, theImage, theLeft, theTop, theHeight, theWidth, theLayer) {
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

  return newObj;
}

// CONCATENATED MODULE: ./src/Graphics/Loop.js
// -----
// This module was added by Mike Lakner to house the code supporting the Loop.
// -----


/**
 * @param {Roll20Object} theObj
 */
// eslint-disable-next-line no-unused-vars
function mbHandleLoopMove(theObj) {
  log(['Loop Move', { theObj }]);
}
/**
 *
 */
function mbPlaceLoop() {
  log('Place Loop.');
  // Remember state flage
  const wasBusy = state.mbBR549.AmBusy;
  const wasAllowDelete = state.mbBR549.AllowDelete;
  const wasManual = state.mbBR549.Manual;
  // Set the state flags
  state.mbBR549.AmBusy = true;
  state.mbBR549.AllowDelete = true;
  state.mbBR549.Manual = false;
  // Get the compass rose
  const theChars = findObjs({ _type: 'character', name: 'Loop' });
  log(['Loop', { theChars }]);
  // Place the graphic
  const theLoop = createTableGraphic(
    theChars[0].get('name'),
    theChars[0].get('avatar'),
    1050,
    1050,
    140,
    140,
    'objects',
  );
  handleGraphicChange(theLoop);
  // Bring it to the front
  toFront(theLoop);
  // Reset the flags
  state.mbBR549.AmBusy = wasBusy;
  state.mbBR549.AllowDelete = wasAllowDelete;
  state.mbBR549.Manual = wasManual;
}

// CONCATENATED MODULE: ./src/Graphics/Reticle.js
// -----
// This module was added by Mike Lakner to house the code supporting the Reticle.
// -----



/**
 * @param {Roll20Object} theObj
 */
// eslint-disable-next-line no-unused-vars
function mbHandleReticleMove(theObj) {
  log(['Reticle Move', { theObj }]);
}
/**
 *
 */
function mbPlaceReticle() {
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

// CONCATENATED MODULE: ./src/Graphics/Tokens.js
// -----
// This module was added by Mike Lakner to house the generic code supporting game tokens.
// -----





/**
 * @param {Roll20Object} obj
 * @param {*} prevObj
 */
function handleGraphicDestruction(obj, prevObj) {
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
function handleGraphicChange(obj) {
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
  const newGridLeft = Math.floor((obj.get('left') - 1) / mySize);
  const newGridTop = Math.floor((obj.get('top') - 1) / mySize);
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
}

/**
 *
 */
function TokenListeners() {
  // Handle the placement of new cards
  // Trigger on position change to ensure alignment even with {Alt} held down.
  on('change:graphic:left', handleGraphicChange);
  on('change:graphic:top', handleGraphicChange);
  on('change:graphic:rotation', handleGraphicChange);
  // Trigger on deletion of a graphic
  on('destroy:graphic', handleGraphicDestruction);
}

// CONCATENATED MODULE: ./src/modules/Board.js
// -----
// This module was added by Mike Lakner to house the code supporting what is happening on the game board.
// -----



/**
 * @param {number} theLeft
 * @param {number} theTop
 * @returns {boolean}
 */
function mbIsSomethingHere(theLeft, theTop) {
  // What are our sizes
  const mySize = 140;
  const halfHeight = mySize / 2;
  const halfWidth = mySize / 2;
  // Figure out what grid it should be on
  const newGridLeft = Math.floor(theLeft / mySize);
  const newGridTop = Math.floor(theTop / mySize);
  // Calculate the actual coordinates
  const newCoordLeft = (newGridLeft * mySize) + halfWidth;
  const newCoordTop = (newGridTop * mySize) + halfHeight;

  const theObj = findObjs({ _type: 'graphic', left: newCoordLeft, top: newCoordTop });
  // Return true if something is here else false
  return (theObj.length >= 1);
}


/**
 * @param {string} theType
 * @param {number} theLeft
 * @param {number} theTop
 * @param {string} theOwner
 */
function mbPlaceTerrain(theType, theLeft, theTop, theOwner) {
  log('Place Terrain.');
  // Remember state flage
  // eslint-disable-next-line no-unused-vars
  const wasBusy = state.mbBR549.AmBusy;
  // eslint-disable-next-line no-unused-vars
  const wasAllowDelete = state.mbBR549.AllowDelete;
  // eslint-disable-next-line no-unused-vars
  const wasManual = state.mbBR549.Manual;
  // Set the state flags
  state.mbBR549.AmBusy = true;
  state.mbBR549.AllowDelete = true;
  state.mbBR549.Manual = true;
  // Get the compass rose
  const theChars = findObjs({ _type: 'character', name: theType });
  log([theType, { theChars }]);
  // Place the graphic
  const theTerrain = createTableGraphic(
    theChars[0].get('name'),
    theChars[0].get('avatar'),
    theLeft,
    theTop,
    140,
    140,
    'map',
  );
  handleGraphicChange(theTerrain);
  // Bring it to the front
  toFront(theTerrain);
  // Add to the state and set the ownership
  state.mbBR549.TerrainCardsInPlay[theChars[0].get('name')] = { playerID: theOwner, inhand: false };
}

/**
 *
 */
function mbClearBoard() {
  log('Clear Board.');
  // Remember state flage
  const wasBusy = state.mbBR549.AmBusy;
  const wasAllowDelete = state.mbBR549.AllowDelete;
  const wasManual = state.mbBR549.Manual;
  // Set the state flags
  state.mbBR549.AmBusy = true;
  state.mbBR549.AllowDelete = true;
  state.mbBR549.Manual = true;
  // What is on the board
  const theBoard = findObjs({ _pageid: Campaign().get('playerpageid') });
  log(['On Board', { theBoard }]);
  theBoard.forEach((obj) => {
    log(['Clearing', { obj }]);
    obj.remove();
  });
  // Reset the flags
  state.mbBR549.AmBusy = wasBusy;
  state.mbBR549.AllowDelete = wasAllowDelete;
  state.mbBR549.Manual = wasManual;
}

/**
 *
 */
function mbResetBasicBoard() {
  log('Reset Basic Board.');
  // Remember the state flags
  const wasBusy = state.mbBR549.AmBusy;
  const wasAllowDelete = state.mbBR549.AllowDelete;
  const wasManual = state.mbBR549.Manual;
  // Set the state flags
  state.mbBR549.AmBusy = true;
  state.mbBR549.AllowDelete = true;
  state.mbBR549.Manual = true;
  // Make sure the basic page settings are correct
  const currentPageID = Campaign().get('playerpageid');
  const currentPage = getObj('page', currentPageID);
  currentPage.set('showgrid', true);
  currentPage.set('height', 30);
  currentPage.set('width', 30);
  currentPage.set('snapping_increment', 2);
  currentPage.set('grid_type', 'square');
  currentPage.set('scale_number', 1);
  currentPage.set('dynamic_lighting_enabled', false);
  currentPage.set('explorer_mode', 'off');
  // Put the background tile up
  const backgroundObj = findObjs({ _type: 'character', name: 'Background' });
  log(['Dump', { backgroundObj }]);
  const theBoard = createTableGraphic(
    'Background',
    backgroundObj[0].get('avatar'),
    1050,
    1050,
    2100,
    2100,
    'map',
  );
  handleGraphicChange(theBoard);
  // Reset the AmBusy flag
  state.mbBR549.AmBusy = wasBusy;
  state.mbBR549.AllowDelete = wasAllowDelete;
  state.mbBR549.Manual = wasManual;
}

// CONCATENATED MODULE: ./src/Graphics/CompassRose.js
// -----
// This module was added by Mike Lakner to house the code supporting the CompassRose.
// -----




/**
 *
 */
function mbPlaceCompassRose() {
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
  handleGraphicChange(theRose);
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

// CONCATENATED MODULE: ./src/modules/State.js
// -----
// This module was created by Mike Lakner to house the code supporting the state of the game play.
// -----

/**
 *
 */
function mbSetupGameState() {
  // Ensure the root exists
  if (typeof state.mbBR549 === 'undefined') state.mbBR549 = {};
  // List each default state below
  // Generally busy flag to help prevent recursive calls
  if (typeof state.mbBR549.AmBusy === 'undefined') state.mbBR549.AmBusy = false;
  // Setting Up Game
  if (typeof state.mbBR549.InSetup === 'undefined') state.mbBR549.InSetup = false;
  // Allow the deletion of Graphics
  if (typeof state.mbBR549.AllowDelete === 'undefined') state.mbBR549.AllowDelete = false;
  // Assume we are not ready to play
  if (typeof state.mbBR549.AmReady === 'undefined') state.mbBR549.AmReady = false;
  // Manual mode for human editing of map, disllows resizing and the like
  if (typeof state.mbBR549.Manual === 'undefined') state.mbBR549.Manual = false;
  // Set the initial number of terrain cards dealt to each player
  if (typeof state.mbBR549.InitialTerrainCards === 'undefined') state.mbBR549.InitialTerrainCards = 5;
  // Set the initial number of Mine Ball cards dealt to each player
  if (typeof state.mbBR549.InitialMineBallCards === 'undefined') state.mbBR549.InitialMineBallCards = 5;
  // Build an array of Terrain cards in play
  if (typeof state.mbBR549.TerrainCardsInPlay === 'undefined') state.mbBR549.TerrainCardsInPlay = {};
  // Build an array of MineBall cards in play
  if (typeof state.mbBR549.MineBallCardsInPlay === 'undefined') state.mbBR549.MineBallCardsInPlay = {};
  // Log the state
  log(['System State', { state }]);
}

/**
 *
 */
function mbResetGameState() {
  log(['Reset GameState', { state }]);
  delete state.mbBR549;
  mbSetupGameState();
}

/**
 *
 */
function mbShowGameState() {
  sendChat('Show', JSON.stringify(state));
  log(['Show GameState', { state }]);
}

// CONCATENATED MODULE: ./src/Play/Cards.js
// This file was designed by Mike Lakner
//
// Hande the movement of a card from player hand to the board.
// Card must be cloned to a graphic that is linked to a character (matching card name)
//   and then the original card removed from the table.





/**
 * @param {Roll20Object} obj
 * @param {Object} prevObj
 */
const handleAddCard = (obj, prevObj) => {
  // Return based on state switches
  if ((state.mbBR549.Manual === true) || (state.mbBR549.InSetup === true)) {
    log(['Handle Card Addition Aborted', { state }]);
    return;
  }
  // Log this
  log(['Add Card', { obj, prevObj }]);
  // Set up the objects
  const theCardID = obj.get('_cardid');
  const cardObj = getObj('card', theCardID);
  let cardName = cardObj.get('name');
  let theLayer = 'objects';
  log(['Card Name', { cardName }]);
  // Get the deck this card came from
  const nameCheck = cardName.substring(0, cardName.length - 1);
  let thePlayerID = '';
  if ('!Fire!Earth!Wind!Water!'.indexOf(nameCheck) !== -1) {
    // It's a terrain card
    // Figure out who played this by looking into the state to see who owns it
    thePlayerID = state.mbBR549.TerrainCardsInPlay[cardName].playerID;
    cardName = nameCheck;
    theLayer = 'map';
  } else {
    // It's a miniball card
    // Figure out who played this by looking into the state to see who owns it
    thePlayerID = state.mbBR549.MineBallCardsInPlay[cardName].playerID;
  }
  // Is there something here?
  log(`Drop Peek: ${obj.get('left')}/${obj.get('top')}`);
  if (mbIsSomethingHere(obj.get('left'), obj.get('top')) === true) {
    // Yes, so back out
    setTimeout(() => giveCardToPlayer(theCardID, thePlayerID), 1000);
    // Remove the actual card
    setTimeout(() => obj.remove(), 100);
    return;
  }
  // Change the state to reflect that it's no nonger inhand
  state.mbBR549.TerrainCardsInPlay[cardName].inhand = false;
  // Create the object
  const theCard = createTableGraphic(
    cardName,
    obj.get('imgsrc'),
    obj.get('left'),
    obj.get('top'),
    obj.get('height'),
    obj.get('width'),
    theLayer,
  );
  handleGraphicChange(theCard);
  // Remove the actual card
  setTimeout(() => obj.remove(), 100);
  // Link the card to the player
  // eslint-disable-next-line no-unused-vars
  // const playerID = linkCardToPlayer(obj);
  // Let players know who dropped this card.
  const thePlayer = getObj('player', thePlayerID);
  const displayName = thePlayer.get('displayname');
  sendChat('Mine Ball', `${displayName} placed ${cardName}.`);
};

/**
 * Handle the placement of new cards
 * Turn them into a graphic, assign to a player
 */
function CardAddInit() {
  // Trigger on newly placed cards
  on('add:card', handleAddCard);
}


/**
 * @param {number} theQty
 */
function mbDealMineBallCards(theQty) {
  log('Deal Punk cards.');

  // Get the players
  const thePlayers = findObjs({ _type: 'player' });
  log(['Players', { thePlayers }]);
  // Get the Terrain deck
  const theDecks = findObjs({ _type: 'deck', name: 'Mine Ball' });
  log(['Decks', { theDecks }]);
  thePlayers.forEach((playerObj) => {
    if (playerObj.get('_online')) {
      for (let i = 1; i <= theQty; i += 1) {
        // Draw a card
        const theCard = drawCard(theDecks[0].get('_id'));
        // Give it to the player
        giveCardToPlayer(theCard, playerObj.get('_id'));
        const cardObj = getObj('card', theCard);
        const cardName = cardObj.get('name');
        // Record it's ownership
        state.mbBR549.MineBallCardsInPlay[cardName] = { playerID: playerObj.get('_id'), inhand: true };
      }
    }
  });
}

/**
 * @param {number} theQty
 */
function mbDealTerrainCards(theQty) {
  log('Deal terrain cards.');

  // Get the players
  const thePlayers = findObjs({ _type: 'player' });
  log(['Players', { thePlayers }]);
  // Get the Terrain deck
  const theDecks = findObjs({ _type: 'deck', name: 'Terrain' });
  log(['Decks', { theDecks }]);
  thePlayers.forEach((playerObj) => {
    if (playerObj.get('_online')) {
      for (let i = 1; i <= theQty; i += 1) {
        // Draw a card
        const theCard = drawCard(theDecks[0].get('_id'));
        // Give it to the player
        giveCardToPlayer(theCard, playerObj.get('_id'));
        const cardObj = getObj('card', theCard);
        const cardName = cardObj.get('name');
        // Record it's ownership
        state.mbBR549.TerrainCardsInPlay[cardName] = { playerID: playerObj.get('_id'), inhand: true };
      }
    }
  });
}

// CONCATENATED MODULE: ./src/modules/Game.js
// -----
// This module was added by Mike Lakner to house the lions share of mechanics of the game play.
// -----







/**
 *
 */
function mbStartNewGame() {
  // Log it down
  log('Start new game.');
  // Reset the game state
  mbResetGameState();
  // Return based on state switches
  if (state.mbBR549.InSetup === true) {
    log(['Start New Game Aborted', { state }]);
    return;
  }
  // Flag as busy and in setuo
  state.mbBR549.AmBusy = true;
  state.mbBR549.InSetup = true;
  // Delete existing graphics
  mbClearBoard();
  // Recall all cards
  mbRecallCards();
  // Rebuild basic board
  mbResetBasicBoard();
  // Place the compassrose
  mbPlaceCompassRose();
  // Deal Terrain cards to player
  mbDealTerrainCards(state.mbBR549.InitialTerrainCards);
  // Deal Punk cards to player
  mbDealMineBallCards(state.mbBR549.InitialMineBallCards);
  // Place the targeting graphics
  mbPlaceReticle();
  mbPlaceLoop();
  // All done, set up back to ready
  state.mbBR549.AmBusy = false;
  state.mbBR549.InSetup = false;
  state.mbBR549.AmReady = true;
}

/**
 *
 */
function mbRecallCards() {
  log('Recall Cards.');
  // Remember state flage
  const wasBusy = state.mbBR549.AmBusy;
  const wasAllowDelete = state.mbBR549.AllowDelete;
  const wasManual = state.mbBR549.Manual;
  // Set the state flags
  state.mbBR549.AmBusy = true;
  state.mbBR549.AllowDelete = true;
  state.mbBR549.Manual = true;
  // Get the decks
  const theDecks = findObjs({ _type: 'deck' });
  log(['Decks', { theDecks }]);
  theDecks.forEach((obj) => {
    log(['Recalling', { obj }]);
    recallCards(obj.get('_id'));
    // hide the deck
    obj.set('shown', false);
    // SHuffle the deck
    shuffleDeck(obj.get('_id'), true);
  });
  // Reset the flags
  state.mbBR549.AmBusy = wasBusy;
  state.mbBR549.AllowDelete = wasAllowDelete;
  state.mbBR549.Manual = wasManual;
}

// CONCATENATED MODULE: ./src/Commands/StartCommand.js
/**
 * @namespace App.Commands
 */




class StartCommand_StartCommand extends Command {
  constructor() {
    super();

    this.cmd = 'start';
    this.desc = 'Start command for various game actions such as NewGame, SavedGame etc.';
    this.func = this.runSubCommand;
    /**
     * @param {string} who - layer's human name
     * @param {string} playerId - reference of the player
     * @param {string[]} args - arguments for the command
     */
    // eslint-disable-next-line no-unused-vars
    this.help = (who, playerId, args) => {
      sendChat(
        'Mine Ball Help',
        `/w ${who}
        <p>Start NewGame - Clear the board and start a new game.</p>
        <p>Start SavedGame - Start a previously saved game.</p>
        `,
      );
    };

    this.subCommands = {
      newgame: {
        gmOnly: false,
        internal: false,
        func: mbStartNewGame,
        paramList: [],
      },
      savedGame: {
        gmOnly: false,
        internal: false,
        func: log('*** SavedGame still needs to be implimented.'),
        paramList: [],
      },
    };
  }
}

// CONCATENATED MODULE: ./src/Cards/Object.js
/* harmony default export */ var Cards_Object = ({
  Candelaria: {
    rec: 1,
    title: '',
    name: 'Candelaria',
    actions: {
      forePort: { type: 'Attack', value: 'D4' }, foreStarboard: { type: 'Fly', value: 'R5' }, aftPort: { type: 'Attack', value: 'D3' }, aftStarboard: { type: 'Fly', value: 'R5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Fire',
    cardWeakness: 'Water',
    archEnemy: 'Ludivina',
    immunity: '',
    more: '',
    skill: 'Freemason',
    impact: 'Attact at +D2 vs Earth.',
  },
  Ezequiel: {
    rec: 2,
    title: '',
    name: 'Ezequiel',
    actions: {
      forePort: { type: 'Attack', value: 'D4' }, foreStarboard: { type: 'Defend', value: 'D5' }, aftPort: { type: 'Attack', value: 'D5' }, aftStarboard: { type: 'Defend', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: false, aftPort: false, port: true, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Earth',
    archEnemy: 'Gaynell',
    immunity: '',
    more: '',
    skill: 'Timekeeper',
    impact: 'No banked clock ticks may be spent wile this craft is deployed.',
  },
  Eldridge: {
    rec: 3,
    title: 'Sir',
    name: 'Eldridge',
    actions: {
      forePort: { type: 'Attack', value: 'D3' }, foreStarboard: { type: 'Defend', value: 'D3' }, aftPort: { type: 'Defend', value: 'D5' }, aftStarboard: { type: 'Fly', value: 'R4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: 'Harriette',
    immunity: 'Enchant',
    more: 'No adjacent craft may Launch.',
    skill: 'Submariner',
    impact: 'Can pass through Water while moving, cannot stop on Water.',
  },
  Lory: {
    rec: 4,
    title: 'Sir',
    name: 'Lory',
    actions: {
      forePort: { type: 'Defend', value: 'D3' }, foreStarboard: { type: 'Attack', value: 'D2' }, aftPort: { type: 'Attack', value: 'D3' }, aftStarboard: { type: 'Defend', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Olen',
    immunity: 'Enchant',
    more: '',
    skill: 'Chimney Sweep',
    impact: 'Cannot be launched over.',
  },
  Earleen: {
    rec: 5,
    title: '',
    name: 'Earleen',
    actions: {
      forePort: { type: 'Attack', value: 'D4' }, foreStarboard: { type: 'Attack', value: 'D4' }, aftPort: { type: 'Defend', value: 'D4' }, aftStarboard: { type: 'Enchant', value: 'D2 R1' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: false, aft: true, aftPort: true, port: false, forePort: false,
    },
    cardType: 'Fire ',
    cardWeakness: 'Water ',
    archEnemy: '',
    immunity: '',
    more: 'Always lose to fire.',
    skill: '',
    impact: '',
  },
  Cuc: {
    rec: 6,
    title: '',
    name: 'Cuc',
    actions: {
      forePort: { type: 'Defend', value: 'D3' }, foreStarboard: { type: 'Attack', value: 'D2' }, aftPort: { type: 'Attack', value: 'D3' }, aftStarboard: { type: 'Attack', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: false, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: 'Elva',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Natisha: {
    rec: 7,
    title: '',
    name: 'Natisha',
    actions: {
      forePort: { type: 'Defend', value: 'D5' }, foreStarboard: { type: 'Defend', value: 'D2' }, aftPort: { type: 'Defend', value: 'D4' }, aftStarboard: { type: 'Enchant', value: 'D4 R3' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: true, aft: true, aftPort: true, port: false, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: '',
    immunity: '',
    more: '',
    skill: 'Bird Hunter',
    impact: 'Attack at +D2 vs any craft with Fly.',
  },
  Molly: {
    rec: 8,
    title: '',
    name: 'Molly',
    actions: {
      forePort: { type: 'Attack', value: 'D5' }, foreStarboard: { type: 'Defend', value: 'D2' }, aftPort: { type: 'Enchant', value: 'D4 R3' }, aftStarboard: { type: 'Attack', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: false, aft: false, aftPort: false, port: true, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Hassie',
    immunity: '',
    more: 'Always defeat a General upon Attack of that General.',
    skill: 'Lycanthrop',
    impact: 'When a Clock Tick remains at end of turn, attack aft Punk on 2in6.',
  },
  Tonisha: {
    rec: 9,
    title: '',
    name: 'Tonisha',
    actions: {
      forePort: { type: 'Attack', value: 'D3' }, foreStarboard: { type: 'Fly', value: 'R5' }, aftPort: { type: 'Enchant', value: 'D1 R1' }, aftStarboard: { type: 'Defend', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: 'Chaya',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Oma: {
    rec: 10,
    title: '',
    name: 'Oma',
    actions: {
      forePort: { type: 'Fly', value: 'R5' }, foreStarboard: { type: 'Attack', value: 'D3' }, aftPort: { type: 'Enchant', value: 'D1 R1' }, aftStarboard: { type: 'Defend', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: false, aft: true, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: '',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Kristy: {
    rec: 11,
    title: '',
    name: 'Kristy',
    actions: {
      forePort: { type: 'Defend', value: 'D4' }, foreStarboard: { type: 'Fly', value: 'R3' }, aftPort: { type: 'Attack', value: 'D2' }, aftStarboard: { type: 'Attack', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: false, aftPort: false, port: true, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: 'Aurelio',
    immunity: '',
    more: 'Rotates opposing craft clockwise upon successful defend.',
    skill: '',
    impact: '',
  },
  Miss: {
    rec: 12,
    title: '',
    name: 'Miss',
    actions: {
      forePort: { type: 'Defend', value: 'D3' }, foreStarboard: { type: 'Attack', value: 'D2' }, aftPort: { type: 'Defend', value: 'D2' }, aftStarboard: { type: 'Defend', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: false, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Shantell',
    immunity: '',
    more: 'Defend at +D2 vs Punks with titles.',
    skill: 'Martyr',
    impact: 'All adjacent Punks destroyed upon defeat.',
  },
  Zena: {
    rec: 13,
    title: 'Lord',
    name: 'Zena',
    actions: {
      forePort: { type: 'Attack', value: 'D4' }, foreStarboard: { type: 'Defend', value: 'D4' }, aftPort: { type: 'Attack', value: 'D4' }, aftStarboard: { type: 'Defend', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: true, aft: true, aftPort: true, port: false, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: 'Jannet',
    immunity: 'Launch',
    more: 'Immune to Launch.',
    skill: '',
    impact: '',
  },
  Taryn: {
    rec: 14,
    title: '',
    name: 'Taryn',
    actions: {
      forePort: { type: 'Fly', value: 'R3' }, foreStarboard: { type: 'Defend', value: 'D5' }, aftPort: { type: 'Attack', value: 'D4' }, aftStarboard: { type: 'Attack', value: 'D3' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: false, aft: false, aftPort: false, port: false, forePort: false,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: 'Wai',
    immunity: '',
    more: 'Defend at -D1 vs Sir.',
    skill: 'Alchemist',
    impact: 'Change one adjacent terrain card from Water to Earth after move.',
  },
  Janene: {
    rec: 15,
    title: '',
    name: 'Janene',
    actions: {
      forePort: { type: 'Attack', value: 'D5' }, foreStarboard: { type: 'Attack', value: 'D3' }, aftPort: { type: 'Attack', value: 'D5' }, aftStarboard: { type: 'Defend', value: 'D3' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Kaylee',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Lloyd: {
    rec: 16,
    title: '',
    name: 'Lloyd',
    actions: {
      forePort: { type: 'Fly', value: 'R3' }, foreStarboard: { type: 'Attack', value: 'D5' }, aftPort: { type: 'Attack', value: 'D2' }, aftStarboard: { type: 'Attack', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: '',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Houston: {
    rec: 17,
    title: '',
    name: 'Houston',
    actions: {
      forePort: { type: 'Attack', value: 'D3' }, foreStarboard: { type: 'Fly', value: 'R5' }, aftPort: { type: 'Defend', value: 'D5' }, aftStarboard: { type: 'Defend', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: false, aft: false, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: 'Jacelyn',
    immunity: '',
    more: 'Attack at +D1 vs Duke.',
    skill: 'Lycanthrop',
    impact: 'When a Clock Tick remains at end of turn, attack aft Punk on 2in6.',
  },
  Milagro: {
    rec: 18,
    title: '',
    name: 'Milagro',
    actions: {
      forePort: { type: 'Attack', value: 'D2' }, foreStarboard: { type: 'Fly', value: 'R3' }, aftPort: { type: 'Attack', value: 'D3' }, aftStarboard: { type: 'Fly', value: 'R5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: false, forePort: false,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: '',
    immunity: '',
    more: '',
    skill: 'Miner',
    impact: 'Can pass through Earth while moving, cannot stop on Earth.',
  },
  Jaimee: {
    rec: 19,
    title: '',
    name: 'Jaimee',
    actions: {
      forePort: { type: 'Attack', value: 'D5' }, foreStarboard: { type: 'Defend', value: 'D2' }, aftPort: { type: 'Attack', value: 'D4' }, aftStarboard: { type: 'Defend', value: 'D3' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: '',
    immunity: '',
    more: 'Force opponent to swap one of their craft from the table with a craft from their Ready upon victory.',
    skill: '',
    impact: '',
  },
  Floretta: {
    rec: 20,
    title: '',
    name: 'Floretta',
    actions: {
      forePort: { type: 'Fly', value: 'R5' }, foreStarboard: { type: 'Defend', value: 'D3' }, aftPort: { type: 'Defend', value: 'D5' }, aftStarboard: { type: 'Fly', value: 'R5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: false, aft: false, aftPort: false, port: true, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Rachell',
    immunity: '',
    more: '',
    skill: 'Martyr',
    impact: 'All adjacent Punks destroyed upon defeat.',
  },
  Antione: {
    rec: 21,
    title: 'Esquire',
    name: 'Antione',
    actions: {
      forePort: { type: 'Attack', value: 'D5' }, foreStarboard: { type: 'Attack', value: 'D4' }, aftPort: { type: 'Attack', value: 'D4' }, aftStarboard: { type: 'Attack', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: false, aft: false, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: '',
    immunity: 'Shoot',
    more: 'Always defeat a General upon Attack of that General.',
    skill: 'Doctor',
    impact: 'May sacrafice self to repair allied Punk killed on current turn, excluding General.',
  },
  Ellsworth: {
    rec: 22,
    title: '',
    name: 'Ellsworth',
    actions: {
      forePort: { type: 'Attack', value: 'D5' }, foreStarboard: { type: 'Attack', value: 'D4' }, aftPort: { type: 'Defend', value: 'D3' }, aftStarboard: { type: 'Defend', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: '',
    immunity: '',
    more: '',
    skill: 'Alchemist',
    impact: 'Change adjacent terrain card from Eatch to Water.',
  },
  Maryjo: {
    rec: 23,
    title: '',
    name: 'Maryjo',
    actions: {
      forePort: { type: 'Fly', value: 'R4' }, foreStarboard: { type: 'Attack', value: 'D4' }, aftPort: { type: 'Defend', value: 'D4' }, aftStarboard: { type: 'Fly', value: 'R4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: '',
    immunity: '',
    more: 'All deployed craft rotate once counter clockwise upon defeat.',
    skill: '',
    impact: '',
  },
  Sharla: {
    rec: 24,
    title: 'Duke',
    name: 'Sharla',
    actions: {
      forePort: { type: 'Attack', value: 'D5' }, foreStarboard: { type: 'Fly', value: 'R3' }, aftPort: { type: 'Fly', value: 'R5' }, aftStarboard: { type: 'Attack', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: false, aft: true, aftPort: true, port: false, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: '',
    immunity: 'Vitiate',
    more: '',
    skill: 'Jungle Explorer',
    impact: 'Attack at +D2 vs Earth on 1in6.',
  },
  Pearline: {
    rec: 25,
    title: '',
    name: 'Pearline',
    actions: {
      forePort: { type: 'Fly', value: 'R3' }, foreStarboard: { type: 'Attack', value: 'D5' }, aftPort: { type: 'Attack', value: 'D5' }, aftStarboard: { type: 'Defend', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: '',
    immunity: '',
    more: 'Defend at +D1 vs Wind.',
    skill: 'Chimney Sweep',
    impact: 'Cannot be jumped over.',
  },
  Harrison: {
    rec: 26,
    title: '',
    name: 'Harrison',
    actions: {
      forePort: { type: 'Defend', value: 'D5' }, foreStarboard: { type: 'Defend', value: 'D3' }, aftPort: { type: 'Defend', value: 'D3' }, aftStarboard: { type: 'Defend', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: false, forePort: false,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Ema',
    immunity: '',
    more: 'Cannot be enchanted.',
    skill: '',
    impact: '',
  },
  Dulcie: {
    rec: 27,
    title: '',
    name: 'Dulcie',
    actions: {
      forePort: { type: 'Attack', value: 'D5' }, foreStarboard: { type: 'Enchant', value: 'D2 R1' }, aftPort: { type: 'Enchant', value: 'D2 R2' }, aftStarboard: { type: 'Enchant', value: 'D4 R2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: true, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: '',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Fatima: {
    rec: 28,
    title: '',
    name: 'Fatima',
    actions: {
      forePort: { type: 'Fly', value: 'R3' }, foreStarboard: { type: 'Defend', value: 'D4' }, aftPort: { type: 'Attack', value: 'D3' }, aftStarboard: { type: 'Fly', value: 'R5' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: false, aft: false, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Fire',
    cardWeakness: 'Water',
    archEnemy: '',
    immunity: '',
    more: '',
    skill: 'Butcher',
    impact: 'Defend at +D1 when adjacent to Barber.',
  },
  Roman: {
    rec: 29,
    title: '',
    name: 'Roman',
    actions: {
      forePort: { type: 'Enchant', value: 'D2 R1' }, foreStarboard: { type: 'Defend', value: 'D4' }, aftPort: { type: 'Attack', value: 'D2' }, aftStarboard: { type: 'Enchant', value: 'D3 R1' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Neomi',
    immunity: '',
    more: '',
    skill: 'Freemason',
    impact: 'Defend at +D2 vs Earth.',
  },
  Elane: {
    rec: 30,
    title: '',
    name: 'Elane',
    actions: {
      forePort: { type: 'Defend', value: 'D3' }, foreStarboard: { type: 'Attack', value: 'D5' }, aftPort: { type: 'Attack', value: 'D4' }, aftStarboard: { type: 'Attack', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: false, aft: false, aftPort: false, port: false, forePort: false,
    },
    cardType: 'Fire ',
    cardWeakness: 'Water ',
    archEnemy: '',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Sharonda: {
    rec: 31,
    title: 'Esquire',
    name: 'Sharonda',
    actions: {
      forePort: { type: 'Fly', value: 'R4' }, foreStarboard: { type: 'Attack', value: 'D5' }, aftPort: { type: 'Defend', value: 'D3' }, aftStarboard: { type: 'Defend', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: true, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: 'William',
    immunity: 'Shoot',
    more: '',
    skill: '',
    impact: '',
  },
  Earlie: {
    rec: 32,
    title: 'Duke',
    name: 'Earlie',
    actions: {
      forePort: { type: 'Enchant', value: 'D1 R1' }, foreStarboard: { type: 'Defend', value: 'D3' }, aftPort: { type: 'Attack', value: 'D4' }, aftStarboard: { type: 'Attack', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: false, forePort: false,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Lizabeth',
    immunity: 'Vitiate',
    more: 'Defend at +D1 vs Air.',
    skill: 'Freemason',
    impact: 'Attact at +D2 vs Earth.',
  },
  Hedwig: {
    rec: 33,
    title: 'Lord',
    name: 'Hedwig',
    actions: {
      forePort: { type: 'Defend', value: 'D2' }, foreStarboard: { type: 'Attack', value: 'D2' }, aftPort: { type: 'Defend', value: 'D5' }, aftStarboard: { type: 'Fly', value: 'R5' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: false, aft: false, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: 'Barrett',
    immunity: 'Launch',
    more: '',
    skill: 'Loyal Servant',
    impact: 'Sacrifice self to trade place with General.',
  },
  Sheila: {
    rec: 34,
    title: '',
    name: 'Sheila',
    actions: {
      forePort: { type: 'Defend', value: 'D5' }, foreStarboard: { type: 'Defend', value: 'D2' }, aftPort: { type: 'Enchant', value: 'D2 R3' }, aftStarboard: { type: 'Fly', value: 'R3' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Fire',
    cardWeakness: 'Water',
    archEnemy: '',
    immunity: '',
    more: 'Defend at +D1 vs Fire.',
    skill: '',
    impact: '',
  },
  Marcus: {
    rec: 35,
    title: 'Lord',
    name: 'Marcus',
    actions: {
      forePort: { type: 'Defend', value: 'D4' }, foreStarboard: { type: 'Attack', value: 'D5' }, aftPort: { type: 'Fly', value: 'R4' }, aftStarboard: { type: 'Enchant', value: 'D4 R2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: 'Melodee',
    immunity: 'Launch',
    more: '',
    skill: 'Spouse',
    impact: 'Time passes slowly, lose one clock tick on movement and +D2 attack ve same affinity..',
  },
  Alvin: {
    rec: 36,
    title: '',
    name: 'Alvin',
    actions: {
      forePort: { type: 'Attack', value: 'D4' }, foreStarboard: { type: 'Attack', value: 'D4' }, aftPort: { type: 'Defend', value: 'D3' }, aftStarboard: { type: 'Defend', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: false, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: 'Deshawn',
    immunity: '',
    more: 'Is hidden to Water.',
    skill: '',
    impact: '',
  },
  Jamika: {
    rec: 37,
    title: 'Esquire',
    name: 'Jamika',
    actions: {
      forePort: { type: 'Fly', value: 'R3' }, foreStarboard: { type: 'Defend', value: 'D2' }, aftPort: { type: 'Enchant', value: 'D1 R2' }, aftStarboard: { type: 'Defend', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: false, aft: false, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: '',
    immunity: 'Shoot',
    more: 'Discard a card (victors choice) from your ready upon defeat.',
    skill: 'Fire Fighter',
    impact: 'On move, change adjacent terrain cards from Fire to Earth on 3in6.',
  },
  Isreal: {
    rec: 38,
    title: '',
    name: 'Isreal',
    actions: {
      forePort: { type: 'Defend', value: 'D2' }, foreStarboard: { type: 'Attack', value: 'D4' }, aftPort: { type: 'Attack', value: 'D4' }, aftStarboard: { type: 'Attack', value: 'D3' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: 'Bryon',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Vivien: {
    rec: 39,
    title: 'Sir',
    name: 'Vivien',
    actions: {
      forePort: { type: 'Defend', value: 'D2' }, foreStarboard: { type: 'Defend', value: 'D2' }, aftPort: { type: 'Fly', value: 'R4' }, aftStarboard: { type: 'Attack', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: false, port: false, forePort: false,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: 'Ashli',
    immunity: 'Enchant',
    more: '',
    skill: 'Spotter',
    impact: 'Adjacent enemy craft are in range of Shoot or Launch regardless of the distance.',
  },
  Romaine: {
    rec: 40,
    title: '',
    name: 'Romaine',
    actions: {
      forePort: { type: 'Enchant', value: 'D1 R2' }, foreStarboard: { type: 'Defend', value: 'D4' }, aftPort: { type: 'Attack', value: 'D3' }, aftStarboard: { type: 'Fly', value: 'R5' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: '',
    immunity: '',
    more: 'Defend at +D1 vs Earth or Water.',
    skill: '',
    impact: '',
  },
  Beckie: {
    rec: 41,
    title: '',
    name: 'Beckie',
    actions: {
      forePort: { type: 'Attack', value: 'D4' }, foreStarboard: { type: 'Enchant', value: 'D4 R1' }, aftPort: { type: 'Defend', value: 'D5' }, aftStarboard: { type: 'Defend', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: '',
    immunity: '',
    more: 'Defend at -D2 vs Punks with titles.',
    skill: 'Oracle',
    impact: 'Upon defeat, look at top 4 cards of opponents stack.',
  },
  Leena: {
    rec: 42,
    title: '',
    name: 'Leena',
    actions: {
      forePort: { type: 'Defend', value: 'D3' }, foreStarboard: { type: 'Enchant', value: 'D3 R2' }, aftPort: { type: 'Defend', value: 'D5' }, aftStarboard: { type: 'Defend', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Ambrose',
    immunity: '',
    more: 'Defend at +D1 vs Fire or Air.',
    skill: 'Chimney Sweep',
    impact: 'Cannot be launched over.',
  },
  Lynwood: {
    rec: 43,
    title: 'Duke',
    name: 'Lynwood',
    actions: {
      forePort: { type: 'Defend', value: 'D3' }, foreStarboard: { type: 'Enchant', value: 'D1 R3' }, aftPort: { type: 'Attack', value: 'D3' }, aftStarboard: { type: 'Attack', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: true, aft: true, aftPort: true, port: false, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: '',
    immunity: 'Vitiate',
    more: 'No adjacent craft may rotate.',
    skill: '',
    impact: '',
  },
  Davina: {
    rec: 44,
    title: '',
    name: 'Davina',
    actions: {
      forePort: { type: 'Attack', value: 'D3' }, foreStarboard: { type: 'Defend', value: 'D4' }, aftPort: { type: 'Defend', value: 'D4' }, aftStarboard: { type: 'Defend', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: '',
    immunity: '',
    more: '',
    skill: 'Bird Hunter',
    impact: 'Attack at +D2 vs Wind on 3in6.',
  },
  Gertie: {
    rec: 45,
    title: 'Duke',
    name: 'Gertie',
    actions: {
      forePort: { type: 'Fly', value: 'R4' }, foreStarboard: { type: 'Attack', value: 'D3' }, aftPort: { type: 'Attack', value: 'D4' }, aftStarboard: { type: 'Attack', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: false, aft: false, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: '',
    immunity: 'Vitiate',
    more: '',
    skill: '',
    impact: '',
  },
  Brianne: {
    rec: 46,
    title: 'Lord',
    name: 'Brianne',
    actions: {
      forePort: { type: 'Defend', value: 'D3' }, foreStarboard: { type: 'Defend', value: 'D3' }, aftPort: { type: 'Fly', value: 'R4' }, aftStarboard: { type: 'Enchant', value: 'D2 R2' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: true, aft: true, aftPort: true, port: false, forePort: false,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: 'Derek',
    immunity: 'Launch',
    more: '',
    skill: '',
    impact: '',
  },
  China: {
    rec: 47,
    title: 'Esquire',
    name: 'China',
    actions: {
      forePort: { type: 'Enchant', value: 'D1 R3' }, foreStarboard: { type: 'Fly', value: 'R5' }, aftPort: { type: 'Fly', value: 'R3' }, aftStarboard: { type: 'Enchant', value: 'D4 R1' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Twana',
    immunity: 'Shoot',
    more: '',
    skill: '',
    impact: '',
  },
  Sally: {
    rec: 48,
    title: 'Esquire',
    name: 'Sally',
    actions: {
      forePort: { type: 'Attack', value: 'D5' }, foreStarboard: { type: 'Fly', value: 'R4' }, aftPort: { type: 'Defend', value: 'D3' }, aftStarboard: { type: 'Attack', value: 'D3' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: false, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Lin',
    immunity: 'Shoot',
    more: '',
    skill: '',
    impact: '',
  },
  Sue: {
    rec: 49,
    title: '',
    name: 'Sue',
    actions: {
      forePort: { type: 'Defend', value: 'D2' }, foreStarboard: { type: 'Fly', value: 'R3' }, aftPort: { type: 'Defend', value: 'D5' }, aftStarboard: { type: 'Attack', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: false, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Fire',
    cardWeakness: 'Water',
    archEnemy: 'Eilene',
    immunity: '',
    more: '',
    skill: 'Fire Fighter',
    impact: 'On move, change adjacent terrain cards from Fire to Earth on 3in6.',
  },
  Justin: {
    rec: 50,
    title: '',
    name: 'Justin',
    actions: {
      forePort: { type: 'Defend', value: 'D4' }, foreStarboard: { type: 'Defend', value: 'D4' }, aftPort: { type: 'Attack', value: 'D2' }, aftStarboard: { type: 'Attack', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: true, aft: true, aftPort: true, port: false, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Ernest',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Octavia: {
    rec: 51,
    title: 'Duke',
    name: 'Octavia',
    actions: {
      forePort: { type: 'Defend', value: 'D3' }, foreStarboard: { type: 'Attack', value: 'D3' }, aftPort: { type: 'Attack', value: 'D4' }, aftStarboard: { type: 'Attack', value: 'D3' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: '',
    immunity: 'Vitiate',
    more: '',
    skill: '',
    impact: '',
  },
  Eryn: {
    rec: 52,
    title: '',
    name: 'Eryn',
    actions: {
      forePort: { type: 'Enchant', value: 'D3 R3' }, foreStarboard: { type: 'Defend', value: 'D4' }, aftPort: { type: 'Fly', value: 'R5' }, aftStarboard: { type: 'Attack', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: '',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Charlotte: {
    rec: 53,
    title: '',
    name: 'Charlotte',
    actions: {
      forePort: { type: 'Defend', value: 'D5' }, foreStarboard: { type: 'Attack', value: 'D5' }, aftPort: { type: 'Enchant', value: 'D3 R3' }, aftStarboard: { type: 'Attack', value: 'D3' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: false, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: '',
    immunity: '',
    more: '',
    skill: 'Chimney Sweep',
    impact: 'Cannot be jumped over.',
  },
  Lavonna: {
    rec: 54,
    title: 'Esquire',
    name: 'Lavonna',
    actions: {
      forePort: { type: 'Fly', value: 'R4' }, foreStarboard: { type: 'Enchant', value: 'D3 R1' }, aftPort: { type: 'Defend', value: 'D3' }, aftStarboard: { type: 'Attack', value: 'D3' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: false, forePort: false,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: '',
    immunity: 'Shoot',
    more: '',
    skill: '',
    impact: '',
  },
  Bryon: {
    rec: 55,
    title: '',
    name: 'Bryon',
    actions: {
      forePort: { type: 'Attack', value: 'D2' }, foreStarboard: { type: 'Defend', value: 'D3' }, aftPort: { type: 'Attack', value: 'D5' }, aftStarboard: { type: 'Attack', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: 'Elroy',
    immunity: '',
    more: 'Defend at -D1 vs Air.',
    skill: 'Chimney Sweep',
    impact: 'Cannot be jumped over.',
  },
  Sachiko: {
    rec: 56,
    title: 'Lord',
    name: 'Sachiko',
    actions: {
      forePort: { type: 'Attack', value: 'D3' }, foreStarboard: { type: 'Fly', value: 'R4' }, aftPort: { type: 'Defend', value: 'D5' }, aftStarboard: { type: 'Fly', value: 'R3' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: true, aft: true, aftPort: true, port: false, forePort: false,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: 'Dennise',
    immunity: 'Launch',
    more: '',
    skill: 'Lycanthrop',
    impact: 'When a Clock Tick remains at end of turn, attack Punk to starboard on 5in6.',
  },
  Hildegard: {
    rec: 57,
    title: 'Lord',
    name: 'Hildegard',
    actions: {
      forePort: { type: 'Enchant', value: 'D2 R1' }, foreStarboard: { type: 'Attack', value: 'D4' }, aftPort: { type: 'Defend', value: 'D3' }, aftStarboard: { type: 'Fly', value: 'R3' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: 'India',
    immunity: 'Launch',
    more: 'Strip game of all banked clock ticks upon defeat.',
    skill: '',
    impact: '',
  },
  Keva: {
    rec: 58,
    title: 'Sir',
    name: 'Keva',
    actions: {
      forePort: { type: 'Fly', value: 'R5' }, foreStarboard: { type: 'Enchant', value: 'D1 R2' }, aftPort: { type: 'Fly', value: 'R5' }, aftStarboard: { type: 'Enchant', value: 'D4 R1' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: 'Consuela',
    immunity: 'Enchant',
    more: 'Opponent attacks craft upon a tie.',
    skill: '',
    impact: '',
  },
  Youlanda: {
    rec: 59,
    title: '',
    name: 'Youlanda',
    actions: {
      forePort: { type: 'Fly', value: 'R5' }, foreStarboard: { type: 'Enchant', value: 'D3 R1' }, aftPort: { type: 'Fly', value: 'R4' }, aftStarboard: { type: 'Defend', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: true, aft: true, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: 'Karoline',
    immunity: '',
    more: '',
    skill: 'Clergy',
    impact: 'Adjacent allied crafy immune to enchant on 3in6.',
  },
  Mo: {
    rec: 60,
    title: 'Esquire',
    name: 'Mo',
    actions: {
      forePort: { type: 'Attack', value: 'D2' }, foreStarboard: { type: 'Defend', value: 'D5' }, aftPort: { type: 'Attack', value: 'D3' }, aftStarboard: { type: 'Attack', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: false, aft: false, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: '',
    immunity: 'Shoot',
    more: 'Sacrafice this craft to block an enemy deployment for one turn.',
    skill: '',
    impact: '',
  },
  Toby: {
    rec: 61,
    title: 'Sir',
    name: 'Toby',
    actions: {
      forePort: { type: 'Attack', value: 'D3' }, foreStarboard: { type: 'Defend', value: 'D5' }, aftPort: { type: 'Defend', value: 'D5' }, aftStarboard: { type: 'Defend', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: 'Guadalupe',
    immunity: 'Enchant',
    more: 'Is hidden to Fire.',
    skill: '',
    impact: '',
  },
  Shae: {
    rec: 62,
    title: '',
    name: 'Shae',
    actions: {
      forePort: { type: 'Enchant', value: 'D1 R2' }, foreStarboard: { type: 'Attack', value: 'D4' }, aftPort: { type: 'Enchant', value: 'D4 R1' }, aftStarboard: { type: 'Defend', value: 'D3' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: '',
    immunity: '',
    more: '',
    skill: 'Traitor',
    impact: 'Upon defeat, show one opponent the contents of your hand.',
  },
  Landon: {
    rec: 63,
    title: '',
    name: 'Landon',
    actions: {
      forePort: { type: 'Fly', value: 'R5' }, foreStarboard: { type: 'Enchant', value: 'D1 R1' }, aftPort: { type: 'Attack', value: 'D5' }, aftStarboard: { type: 'Enchant', value: 'D3 R3' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: 'Dennis',
    immunity: '',
    more: 'Immune to Lycanthropy.',
    skill: '',
    impact: '',
  },
  Emiko: {
    rec: 64,
    title: 'Lord',
    name: 'Emiko',
    actions: {
      forePort: { type: 'Fly', value: 'R3' }, foreStarboard: { type: 'Fly', value: 'R5' }, aftPort: { type: 'Attack', value: 'D2' }, aftStarboard: { type: 'Attack', value: 'D3' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: true, aftPort: false, port: false, forePort: false,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: '',
    immunity: 'Launch',
    more: '',
    skill: '',
    impact: '',
  },
  Edmond: {
    rec: 65,
    title: '',
    name: 'Edmond',
    actions: {
      forePort: { type: 'Defend', value: 'D3' }, foreStarboard: { type: 'Attack', value: 'D3' }, aftPort: { type: 'Defend', value: 'D5' }, aftStarboard: { type: 'Defend', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: '',
    immunity: '',
    more: 'Cannot be enchanted.',
    skill: 'Alchemist',
    impact: 'Change adjacent terrain card from Eatch to Water.',
  },
  Elizabet: {
    rec: 66,
    title: '',
    name: 'Elizabet',
    actions: {
      forePort: { type: 'Enchant', value: 'D1 R2' }, foreStarboard: { type: 'Defend', value: 'D3' }, aftPort: { type: 'Enchant', value: 'D2 R1' }, aftStarboard: { type: 'Fly', value: 'R3' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: true, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: 'Darcie',
    immunity: '',
    more: '',
    skill: 'Herbalist',
    impact: 'Any adjacent craft gains +D2 defence vs Vitiate.',
  },
  Deirdre: {
    rec: 67,
    title: 'Esquire',
    name: 'Deirdre',
    actions: {
      forePort: { type: 'Attack', value: 'D2' }, foreStarboard: { type: 'Defend', value: 'D5' }, aftPort: { type: 'Defend', value: 'D2' }, aftStarboard: { type: 'Attack', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Fire',
    cardWeakness: 'Water',
    archEnemy: '',
    immunity: 'Shoot',
    more: '',
    skill: '',
    impact: '',
  },
  Francina: {
    rec: 68,
    title: '',
    name: 'Francina',
    actions: {
      forePort: { type: 'Attack', value: 'D3' }, foreStarboard: { type: 'Attack', value: 'D2' }, aftPort: { type: 'Attack', value: 'D5' }, aftStarboard: { type: 'Attack', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: false, aftPort: false, port: true, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Zulema',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Elvia: {
    rec: 69,
    title: '',
    name: 'Elvia',
    actions: {
      forePort: { type: 'Defend', value: 'D5' }, foreStarboard: { type: 'Defend', value: 'D5' }, aftPort: { type: 'Defend', value: 'D3' }, aftStarboard: { type: 'Defend', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: false, aft: false, aftPort: false, port: true, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: 'Morris',
    immunity: '',
    more: 'Defend at -D1 vs Sir.',
    skill: '',
    impact: '',
  },
  Basilia: {
    rec: 70,
    title: 'Lord',
    name: 'Basilia',
    actions: {
      forePort: { type: 'Defend', value: 'D5' }, foreStarboard: { type: 'Attack', value: 'D5' }, aftPort: { type: 'Attack', value: 'D5' }, aftStarboard: { type: 'Defend', value: 'D3' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: false, port: false, forePort: false,
    },
    cardType: 'Fire',
    cardWeakness: 'Water',
    archEnemy: 'Francina',
    immunity: 'Launch',
    more: 'Defend at +D1 vs Earth or Water.',
    skill: '',
    impact: '',
  },
  Celestine: {
    rec: 71,
    title: '',
    name: 'Celestine',
    actions: {
      forePort: { type: 'Attack', value: 'D2' }, foreStarboard: { type: 'Defend', value: 'D5' }, aftPort: { type: 'Defend', value: 'D3' }, aftStarboard: { type: 'Attack', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: 'Krysten',
    immunity: '',
    more: 'Opponent may attack again upon defeat.',
    skill: 'Witch Hunter',
    impact: 'Attack at +D2 vs any craft with Enchant.',
  },
  Saturnina: {
    rec: 72,
    title: '',
    name: 'Saturnina',
    actions: {
      forePort: { type: 'Defend', value: 'D4' }, foreStarboard: { type: 'Fly', value: 'R3' }, aftPort: { type: 'Attack', value: 'D5' }, aftStarboard: { type: 'Attack', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: false, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: '',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Josefa: {
    rec: 73,
    title: 'Esquire',
    name: 'Josefa',
    actions: {
      forePort: { type: 'Defend', value: 'D4' }, foreStarboard: { type: 'Attack', value: 'D4' }, aftPort: { type: 'Defend', value: 'D4' }, aftStarboard: { type: 'Enchant', value: 'D2 R2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Venetta',
    immunity: 'Shoot',
    more: 'Opponent may attack again upon defeat.',
    skill: '',
    impact: '',
  },
  Dominique: {
    rec: 74,
    title: '',
    name: 'Dominique',
    actions: {
      forePort: { type: 'Fly', value: 'R5' }, foreStarboard: { type: 'Fly', value: 'R5' }, aftPort: { type: 'Fly', value: 'R3' }, aftStarboard: { type: 'Defend', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: false, aftPort: false, port: true, forePort: true,
    },
    cardType: 'Fire',
    cardWeakness: 'Water',
    archEnemy: '',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Delois: {
    rec: 75,
    title: '',
    name: 'Delois',
    actions: {
      forePort: { type: 'Defend', value: 'D5' }, foreStarboard: { type: 'Attack', value: 'D4' }, aftPort: { type: 'Defend', value: 'D3' }, aftStarboard: { type: 'Defend', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: false, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Ofelia',
    immunity: '',
    more: 'Opponent attacks craft upon a tie.',
    skill: '',
    impact: '',
  },
  Kimberlie: {
    rec: 76,
    title: '',
    name: 'Kimberlie',
    actions: {
      forePort: { type: 'Defend', value: 'D5' }, foreStarboard: { type: 'Defend', value: 'D4' }, aftPort: { type: 'Defend', value: 'D3' }, aftStarboard: { type: 'Fly', value: 'R3' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: false, forePort: false,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: '',
    immunity: '',
    more: '',
    skill: 'Lycanthrop',
    impact: 'When a Clock Tick remains at end of turn, attack Punk to port on 3in6.',
  },
  Cecila: {
    rec: 77,
    title: 'Lord',
    name: 'Cecila',
    actions: {
      forePort: { type: 'Defend', value: 'D3' }, foreStarboard: { type: 'Attack', value: 'D4' }, aftPort: { type: 'Attack', value: 'D2' }, aftStarboard: { type: 'Defend', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: 'Kiana',
    immunity: 'Launch',
    more: '',
    skill: 'Professor',
    impact: 'All adjacent craft Attack & Defend at -D2.',
  },
  Yessenia: {
    rec: 78,
    title: 'Esquire',
    name: 'Yessenia',
    actions: {
      forePort: { type: 'Defend', value: 'D2' }, foreStarboard: { type: 'Attack', value: 'D3' }, aftPort: { type: 'Attack', value: 'D3' }, aftStarboard: { type: 'Fly', value: 'R5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: false, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Fire',
    cardWeakness: 'Water',
    archEnemy: '',
    immunity: 'Shoot',
    more: '',
    skill: '',
    impact: '',
  },
  Krystina: {
    rec: 79,
    title: 'Esquire',
    name: 'Krystina',
    actions: {
      forePort: { type: 'Attack', value: 'D5' }, foreStarboard: { type: 'Enchant', value: 'D4 R2' }, aftPort: { type: 'Defend', value: 'D4' }, aftStarboard: { type: 'Attack', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: true, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: '',
    immunity: 'Shoot',
    more: '',
    skill: '',
    impact: '',
  },
  Corie: {
    rec: 80,
    title: '',
    name: 'Corie',
    actions: {
      forePort: { type: 'Fly', value: 'R5' }, foreStarboard: { type: 'Enchant', value: 'D1 R3' }, aftPort: { type: 'Attack', value: 'D3' }, aftStarboard: { type: 'Defend', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: true, aft: true, aftPort: true, port: false, forePort: false,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: '',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Skye: {
    rec: 81,
    title: '',
    name: 'Skye',
    actions: {
      forePort: { type: 'Defend', value: 'D2' }, foreStarboard: { type: 'Defend', value: 'D2' }, aftPort: { type: 'Defend', value: 'D4' }, aftStarboard: { type: 'Defend', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: false, aftPort: false, port: false, forePort: false,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Keren',
    immunity: '',
    more: 'Cannot be enchanted.',
    skill: '',
    impact: '',
  },
  Clarita: {
    rec: 82,
    title: 'Sir',
    name: 'Clarita',
    actions: {
      forePort: { type: 'Fly', value: 'R3' }, foreStarboard: { type: 'Fly', value: 'R3' }, aftPort: { type: 'Attack', value: 'D4' }, aftStarboard: { type: 'Attack', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: true, aftPort: true, port: false, forePort: false,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: '',
    immunity: 'Enchant',
    more: 'Strip game of all banked clock ticks upon defeat.',
    skill: 'Professor',
    impact: 'All ordinally adjacent punk immune to Enchantment.',
  },
  Darnell: {
    rec: 83,
    title: '',
    name: 'Darnell',
    actions: {
      forePort: { type: 'Attack', value: 'D3' }, foreStarboard: { type: 'Attack', value: 'D5' }, aftPort: { type: 'Attack', value: 'D5' }, aftStarboard: { type: 'Fly', value: 'R3' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: '',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Shemeka: {
    rec: 84,
    title: 'Duke',
    name: 'Shemeka',
    actions: {
      forePort: { type: 'Defend', value: 'D5' }, foreStarboard: { type: 'Fly', value: 'R5' }, aftPort: { type: 'Attack', value: 'D5' }, aftStarboard: { type: 'Attack', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: false, aft: false, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Evelin',
    immunity: 'Vitiate',
    more: '',
    skill: '',
    impact: '',
  },
  Herminia: {
    rec: 85,
    title: 'Sir',
    name: 'Herminia',
    actions: {
      forePort: { type: 'Attack', value: 'D4' }, foreStarboard: { type: 'Defend', value: 'D3' }, aftPort: { type: 'Attack', value: 'D5' }, aftStarboard: { type: 'Fly', value: 'R5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: false, aft: false, aftPort: false, port: true, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: 'Karyn',
    immunity: 'Enchant',
    more: '',
    skill: 'Politician',
    impact: 'Upon successful attack, players general is replaced by first card on ready pile.',
  },
  Pa: {
    rec: 86,
    title: 'Esquire',
    name: 'Pa',
    actions: {
      forePort: { type: 'Defend', value: 'D3' }, foreStarboard: { type: 'Defend', value: 'D2' }, aftPort: { type: 'Attack', value: 'D2' }, aftStarboard: { type: 'Defend', value: 'D3' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: false, forePort: false,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: 'Takako',
    immunity: 'Shoot',
    more: '',
    skill: '',
    impact: '',
  },
  Ira: {
    rec: 87,
    title: '',
    name: 'Ira',
    actions: {
      forePort: { type: 'Defend', value: 'D5' }, foreStarboard: { type: 'Defend', value: 'D3' }, aftPort: { type: 'Defend', value: 'D2' }, aftStarboard: { type: 'Enchant', value: 'D2 R3' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: true, aft: true, aftPort: false, port: false, forePort: false,
    },
    cardType: 'Fire ',
    cardWeakness: 'Water ',
    archEnemy: '',
    immunity: '',
    more: '',
    skill: 'Spouse',
    impact: 'Time passes slowly, lose one clock tick on movement and +D2 attack ve same affinity..',
  },
  Cornelius: {
    rec: 88,
    title: '',
    name: 'Cornelius',
    actions: {
      forePort: { type: 'Attack', value: 'D2' }, foreStarboard: { type: 'Defend', value: 'D5' }, aftPort: { type: 'Defend', value: 'D4' }, aftStarboard: { type: 'Attack', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: '',
    immunity: '',
    more: '',
    skill: 'Lens Crafter',
    impact: 'Any adjacent allied craft gains +D2 defence vs Launch or Shoot.',
  },
  Kirstie: {
    rec: 89,
    title: '',
    name: 'Kirstie',
    actions: {
      forePort: { type: 'Attack', value: 'D2' }, foreStarboard: { type: 'Enchant', value: 'D1 R3' }, aftPort: { type: 'Defend', value: 'D3' }, aftStarboard: { type: 'Defend', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: true, aft: true, aftPort: true, port: false, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Arlie',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Magaret: {
    rec: 90,
    title: 'Esquire',
    name: 'Magaret',
    actions: {
      forePort: { type: 'Attack', value: 'D3' }, foreStarboard: { type: 'Fly', value: 'R5' }, aftPort: { type: 'Defend', value: 'D5' }, aftStarboard: { type: 'Defend', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: false, aft: false, aftPort: false, port: true, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: '',
    immunity: 'Shoot',
    more: 'Is hidden to Fire.',
    skill: '',
    impact: '',
  },
  Jonell: {
    rec: 91,
    title: '',
    name: 'Jonell',
    actions: {
      forePort: { type: 'Fly', value: 'R3' }, foreStarboard: { type: 'Fly', value: 'R5' }, aftPort: { type: 'Defend', value: 'D3' }, aftStarboard: { type: 'Defend', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: 'Caroyln',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Caprice: {
    rec: 92,
    title: 'Lord',
    name: 'Caprice',
    actions: {
      forePort: { type: 'Defend', value: 'D2' }, foreStarboard: { type: 'Fly', value: 'R3' }, aftPort: { type: 'Attack', value: 'D3' }, aftStarboard: { type: 'Defend', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: false, aft: false, aftPort: false, port: false, forePort: false,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: 'Alysa',
    immunity: 'Launch',
    more: '',
    skill: 'Time Lord',
    impact: 'Bank one clock tick for use as Punk chooses upon victory.',
  },
  Lorina: {
    rec: 93,
    title: '',
    name: 'Lorina',
    actions: {
      forePort: { type: 'Defend', value: 'D5' }, foreStarboard: { type: 'Attack', value: 'D5' }, aftPort: { type: 'Enchant', value: 'D3 R2' }, aftStarboard: { type: 'Defend', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: false, forePort: false,
    },
    cardType: 'Fire',
    cardWeakness: 'Water',
    archEnemy: '',
    immunity: '',
    more: 'Force opponent to swap one of their craft from the table with a craft from their Ready upon victory.',
    skill: 'Wizard',
    impact: 'Trade places with any other Punk at the cost of 2 click ticks and forfeit attack.',
  },
  Shala: {
    rec: 94,
    title: '',
    name: 'Shala',
    actions: {
      forePort: { type: 'Attack', value: 'D3' }, foreStarboard: { type: 'Attack', value: 'D2' }, aftPort: { type: 'Attack', value: 'D2' }, aftStarboard: { type: 'Enchant', value: 'D3 R3' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: true, aft: true, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: 'Justina',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Wava: {
    rec: 95,
    title: '',
    name: 'Wava',
    actions: {
      forePort: { type: 'Defend', value: 'D5' }, foreStarboard: { type: 'Defend', value: 'D5' }, aftPort: { type: 'Defend', value: 'D4' }, aftStarboard: { type: 'Attack', value: 'D3' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: true, aft: true, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Jill',
    immunity: '',
    more: 'Cannot attack fire.',
    skill: 'Map Maker',
    impact: 'On move, place a new terrain card on an adjacent empty space on 2in6.',
  },
  Junie: {
    rec: 96,
    title: '',
    name: 'Junie',
    actions: {
      forePort: { type: 'Defend', value: 'D4' }, foreStarboard: { type: 'Fly', value: 'R5' }, aftPort: { type: 'Attack', value: 'D3' }, aftStarboard: { type: 'Defend', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: false, forePort: false,
    },
    cardType: 'Fire',
    cardWeakness: 'Water',
    archEnemy: 'Bruno',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Racquel: {
    rec: 97,
    title: 'Sir',
    name: 'Racquel',
    actions: {
      forePort: { type: 'Attack', value: 'D5' }, foreStarboard: { type: 'Fly', value: 'R4' }, aftPort: { type: 'Attack', value: 'D5' }, aftStarboard: { type: 'Fly', value: 'R3' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Earline',
    immunity: 'Enchant',
    more: '',
    skill: 'Doctor',
    impact: 'Must sacrafice self to repair any Punk killed on current turn on 2in6.',
  },
  Season: {
    rec: 98,
    title: '',
    name: 'Season',
    actions: {
      forePort: { type: 'Defend', value: 'D3' }, foreStarboard: { type: 'Defend', value: 'D4' }, aftPort: { type: 'Attack', value: 'D4' }, aftStarboard: { type: 'Defend', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Christen',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Shirley: {
    rec: 99,
    title: 'Esquire',
    name: 'Shirley',
    actions: {
      forePort: { type: 'Enchant', value: 'D2 R2' }, foreStarboard: { type: 'Attack', value: 'D3' }, aftPort: { type: 'Fly', value: 'R5' }, aftStarboard: { type: 'Defend', value: 'D3' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: true, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: '',
    immunity: 'Shoot',
    more: '',
    skill: 'Clockmaker',
    impact: 'All adjacent Punk must rotate once clockwise when placed adjacent.',
  },
  Marni: {
    rec: 100,
    title: 'Sir',
    name: 'Marni',
    actions: {
      forePort: { type: 'Attack', value: 'D5' }, foreStarboard: { type: 'Defend', value: 'D2' }, aftPort: { type: 'Attack', value: 'D2' }, aftStarboard: { type: 'Defend', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Richelle',
    immunity: 'Enchant',
    more: 'Defend at +D1 vs Fire.',
    skill: '',
    impact: '',
  },
  Lucien: {
    rec: 101,
    title: '',
    name: 'Lucien',
    actions: {
      forePort: { type: 'Attack', value: 'D3' }, foreStarboard: { type: 'Fly', value: 'R5' }, aftPort: { type: 'Attack', value: 'D2' }, aftStarboard: { type: 'Attack', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Valentina',
    immunity: '',
    more: 'Play this card immediately upon drawing it or opponent can take control of any one of your cards but your general.',
    skill: 'Miner',
    impact: 'Can pass through Earth while moving, cannot stop on Earth.',
  },
  Sol: {
    rec: 102,
    title: '',
    name: 'Sol',
    actions: {
      forePort: { type: 'Fly', value: 'R4' }, foreStarboard: { type: 'Defend', value: 'D2' }, aftPort: { type: 'Fly', value: 'R4' }, aftStarboard: { type: 'Defend', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: '',
    immunity: '',
    more: 'Force opponent to swap one of their craft from the table with a craft from their Ready upon victory.',
    skill: '',
    impact: '',
  },
  Patty: {
    rec: 103,
    title: '',
    name: 'Patty',
    actions: {
      forePort: { type: 'Attack', value: 'D4' }, foreStarboard: { type: 'Defend', value: 'D4' }, aftPort: { type: 'Attack', value: 'D4' }, aftStarboard: { type: 'Attack', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: true, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: 'Taina',
    immunity: '',
    more: 'May rotate any card on the board once in lieu of turn.',
    skill: 'Doctor',
    impact: 'May sacrafice self to repair allied Punk killed on current turn, including General.',
  },
  Ruby: {
    rec: 104,
    title: 'Sir',
    name: 'Ruby',
    actions: {
      forePort: { type: 'Enchant', value: 'D3 R2' }, foreStarboard: { type: 'Defend', value: 'D3' }, aftPort: { type: 'Attack', value: 'D4' }, aftStarboard: { type: 'Defend', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: true, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: '',
    immunity: 'Enchant',
    more: '',
    skill: 'Physicist',
    impact: "Sacrafice self to add +D3 defence to any craft and +D2 attack to it's opponent.",
  },
  Aundrea: {
    rec: 105,
    title: 'Lord',
    name: 'Aundrea',
    actions: {
      forePort: { type: 'Attack', value: 'D2' }, foreStarboard: { type: 'Attack', value: 'D4' }, aftPort: { type: 'Attack', value: 'D5' }, aftStarboard: { type: 'Attack', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: false, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Earth ',
    cardWeakness: 'Fire ',
    archEnemy: 'Donte',
    immunity: 'Launch',
    more: '',
    skill: '',
    impact: '',
  },
  Ernest: {
    rec: 106,
    title: 'Sir',
    name: 'Ernest',
    actions: {
      forePort: { type: 'Attack', value: 'D2' }, foreStarboard: { type: 'Attack', value: 'D3' }, aftPort: { type: 'Defend', value: 'D5' }, aftStarboard: { type: 'Attack', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Elva',
    immunity: 'Enchant',
    more: '',
    skill: 'Blue-Bottle',
    impact: 'Sacrifices self to cancel adjacent combat, after the attack and defence rolls takes place.',
  },
  Arline: {
    rec: 107,
    title: 'Esquire',
    name: 'Arline',
    actions: {
      forePort: { type: 'Fly', value: 'R4' }, foreStarboard: { type: 'Defend', value: 'D4' }, aftPort: { type: 'Defend', value: 'D2' }, aftStarboard: { type: 'Fly', value: 'R4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: false, forePort: false,
    },
    cardType: 'Fire',
    cardWeakness: 'Water',
    archEnemy: 'Athena',
    immunity: 'Shoot',
    more: '',
    skill: '',
    impact: '',
  },
  Pilar: {
    rec: 108,
    title: '',
    name: 'Pilar',
    actions: {
      forePort: { type: 'Defend', value: 'D4' }, foreStarboard: { type: 'Defend', value: 'D3' }, aftPort: { type: 'Defend', value: 'D2' }, aftStarboard: { type: 'Enchant', value: 'D1 R2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: false, port: false, forePort: false,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: '',
    immunity: '',
    more: 'Defend at +D2 vs Duke.',
    skill: '',
    impact: '',
  },
  Gertrude: {
    rec: 109,
    title: 'Sir',
    name: 'Gertrude',
    actions: {
      forePort: { type: 'Attack', value: 'D3' }, foreStarboard: { type: 'Attack', value: 'D2' }, aftPort: { type: 'Defend', value: 'D4' }, aftStarboard: { type: 'Attack', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: 'Edna',
    immunity: 'Enchant',
    more: '',
    skill: 'Jungle Explorer',
    impact: 'Attack at +D2 vs Earth on 1in6.',
  },
  Jamila: {
    rec: 110,
    title: '',
    name: 'Jamila',
    actions: {
      forePort: { type: 'Defend', value: 'D5' }, foreStarboard: { type: 'Attack', value: 'D5' }, aftPort: { type: 'Attack', value: 'D5' }, aftStarboard: { type: 'Fly', value: 'R3' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: true, aft: true, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: 'Evita',
    immunity: '',
    more: '',
    skill: 'Chimney Sweep',
    impact: 'Cannot be launched over.',
  },
  Matilde: {
    rec: 111,
    title: '',
    name: 'Matilde',
    actions: {
      forePort: { type: 'Defend', value: 'D4' }, foreStarboard: { type: 'Attack', value: 'D3' }, aftPort: { type: 'Fly', value: 'R5' }, aftStarboard: { type: 'Defend', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Dolly',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Myrtie: {
    rec: 112,
    title: '',
    name: 'Myrtie',
    actions: {
      forePort: { type: 'Enchant', value: 'D1 R2' }, foreStarboard: { type: 'Attack', value: 'D4' }, aftPort: { type: 'Attack', value: 'D2' }, aftStarboard: { type: 'Attack', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: false, forePort: false,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: 'Johnathan',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Eladia: {
    rec: 113,
    title: 'Duke',
    name: 'Eladia',
    actions: {
      forePort: { type: 'Defend', value: 'D5' }, foreStarboard: { type: 'Defend', value: 'D4' }, aftPort: { type: 'Attack', value: 'D2' }, aftStarboard: { type: 'Attack', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: '',
    immunity: 'Vitiate',
    more: 'Take over attacking card upon defeat.',
    skill: 'Boxer',
    impact: 'Attack does no damage but rotates opponents 180 degrees.',
  },
  Brant: {
    rec: 114,
    title: 'Sir',
    name: 'Brant',
    actions: {
      forePort: { type: 'Enchant', value: 'D1 R3' }, foreStarboard: { type: 'Attack', value: 'D4' }, aftPort: { type: 'Defend', value: 'D2' }, aftStarboard: { type: 'Fly', value: 'R5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: false, aft: false, aftPort: false, port: false, forePort: false,
    },
    cardType: 'Fire',
    cardWeakness: 'Water',
    archEnemy: '',
    immunity: 'Enchant',
    more: '',
    skill: '',
    impact: '',
  },
  Kacey: {
    rec: 115,
    title: 'Esquire',
    name: 'Kacey',
    actions: {
      forePort: { type: 'Defend', value: 'D3' }, foreStarboard: { type: 'Defend', value: 'D4' }, aftPort: { type: 'Fly', value: 'R3' }, aftStarboard: { type: 'Defend', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: true, aftPort: true, port: false, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: '',
    immunity: 'Shoot',
    more: '',
    skill: 'Apothecary',
    impact: 'Immune to vitiate on 3in6.',
  },
  Kandis: {
    rec: 116,
    title: 'Esquire',
    name: 'Kandis',
    actions: {
      forePort: { type: 'Defend', value: 'D5' }, foreStarboard: { type: 'Fly', value: 'R4' }, aftPort: { type: 'Attack', value: 'D5' }, aftStarboard: { type: 'Attack', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Fire',
    cardWeakness: 'Water',
    archEnemy: 'Pansy',
    immunity: 'Shoot',
    more: 'Opponent loses next turn upon failed combat vs this craft.',
    skill: 'Alchemist',
    impact: 'Change adjacent terrain card from Eatch to Water.',
  },
  Macie: {
    rec: 117,
    title: '',
    name: 'Macie',
    actions: {
      forePort: { type: 'Attack', value: 'D3' }, foreStarboard: { type: 'Enchant', value: 'D2 R1' }, aftPort: { type: 'Attack', value: 'D4' }, aftStarboard: { type: 'Attack', value: 'D3' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: false, aft: false, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: '',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Jon: {
    rec: 118,
    title: '',
    name: 'Jon',
    actions: {
      forePort: { type: 'Defend', value: 'D5' }, foreStarboard: { type: 'Defend', value: 'D5' }, aftPort: { type: 'Attack', value: 'D3' }, aftStarboard: { type: 'Attack', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Fire',
    cardWeakness: 'Water',
    archEnemy: 'Jake',
    immunity: '',
    more: 'Take over attacking card upon defeat.',
    skill: 'Bird Hunter',
    impact: 'Attack at +D2 vs Wind on 3in6.',
  },
  Norine: {
    rec: 119,
    title: '',
    name: 'Norine',
    actions: {
      forePort: { type: 'Attack', value: 'D3' }, foreStarboard: { type: 'Attack', value: 'D2' }, aftPort: { type: 'Fly', value: 'R5' }, aftStarboard: { type: 'Defend', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: false, forePort: false,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: 'Verona',
    immunity: '',
    more: 'Cannot attack water.',
    skill: 'Jungle Explorer',
    impact: 'Attack at +D2 vs Earth on 1in6.',
  },
  Joel: {
    rec: 120,
    title: '',
    name: 'Joel',
    actions: {
      forePort: { type: 'Attack', value: 'D2' }, foreStarboard: { type: 'Defend', value: 'D2' }, aftPort: { type: 'Attack', value: 'D2' }, aftStarboard: { type: 'Attack', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: true, aft: true, aftPort: false, port: false, forePort: false,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: '',
    immunity: '',
    more: '',
    skill: 'Butcher',
    impact: 'Defend at +D2 when adjacent to Barber.',
  },
  Santina: {
    rec: 121,
    title: 'Sir',
    name: 'Santina',
    actions: {
      forePort: { type: 'Attack', value: 'D3' }, foreStarboard: { type: 'Enchant', value: 'D1 R3' }, aftPort: { type: 'Attack', value: 'D3' }, aftStarboard: { type: 'Defend', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: false, aft: false, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: '',
    immunity: 'Enchant',
    more: '',
    skill: 'Clockmaker',
    impact: 'All adjacent Punk must rotate once clockwise when placed adjacent.',
  },
  Raymundo: {
    rec: 122,
    title: '',
    name: 'Raymundo',
    actions: {
      forePort: { type: 'Defend', value: 'D3' }, foreStarboard: { type: 'Defend', value: 'D3' }, aftPort: { type: 'Attack', value: 'D5' }, aftStarboard: { type: 'Attack', value: 'D3' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: 'Margarette',
    immunity: '',
    more: 'Defend at +D1 vs Earth or Water.',
    skill: '',
    impact: '',
  },
  Shila: {
    rec: 123,
    title: '',
    name: 'Shila',
    actions: {
      forePort: { type: 'Fly', value: 'R3' }, foreStarboard: { type: 'Defend', value: 'D2' }, aftPort: { type: 'Defend', value: 'D4' }, aftStarboard: { type: 'Attack', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: '',
    immunity: '',
    more: 'Swap location with allied craft before attack.',
    skill: 'Clockmaker',
    impact: 'All adjacent Punk must rotate once counter clockwise when placed adjacent.',
  },
  Sibyl: {
    rec: 124,
    title: '',
    name: 'Sibyl',
    actions: {
      forePort: { type: 'Attack', value: 'D4' }, foreStarboard: { type: 'Defend', value: 'D4' }, aftPort: { type: 'Defend', value: 'D3' }, aftStarboard: { type: 'Attack', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: false, forePort: false,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: 'Magdalene',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Sharron: {
    rec: 125,
    title: '',
    name: 'Sharron',
    actions: {
      forePort: { type: 'Enchant', value: 'D1 R3' }, foreStarboard: { type: 'Attack', value: 'D4' }, aftPort: { type: 'Defend', value: 'D3' }, aftStarboard: { type: 'Attack', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Fire',
    cardWeakness: 'Water',
    archEnemy: '',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Avis: {
    rec: 126,
    title: 'Sir',
    name: 'Avis',
    actions: {
      forePort: { type: 'Attack', value: 'D4' }, foreStarboard: { type: 'Defend', value: 'D5' }, aftPort: { type: 'Attack', value: 'D3' }, aftStarboard: { type: 'Attack', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: '',
    immunity: 'Enchant',
    more: 'Defend at +D2 vs Punks with titles.',
    skill: '',
    impact: '',
  },
  Chaya: {
    rec: 127,
    title: 'Esquire',
    name: 'Chaya',
    actions: {
      forePort: { type: 'Enchant', value: 'D2 R3' }, foreStarboard: { type: 'Defend', value: 'D4' }, aftPort: { type: 'Attack', value: 'D2' }, aftStarboard: { type: 'Attack', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: false, forePort: false,
    },
    cardType: 'Fire',
    cardWeakness: 'Water',
    archEnemy: '',
    immunity: 'Shoot',
    more: '',
    skill: '',
    impact: '',
  },
  Lois: {
    rec: 128,
    title: 'Sir',
    name: 'Lois',
    actions: {
      forePort: { type: 'Defend', value: 'D3' }, foreStarboard: { type: 'Attack', value: 'D5' }, aftPort: { type: 'Enchant', value: 'D2 R1' }, aftStarboard: { type: 'Fly', value: 'R3' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: true, aft: true, aftPort: false, port: false, forePort: false,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: '',
    immunity: 'Enchant',
    more: 'Immune to Hide.',
    skill: 'Fire Fighter',
    impact: 'On move, change adjacent terrain cards from Fire to Earth on 3in6.',
  },
  Gemma: {
    rec: 129,
    title: '',
    name: 'Gemma',
    actions: {
      forePort: { type: 'Fly', value: 'R3' }, foreStarboard: { type: 'Defend', value: 'D2' }, aftPort: { type: 'Defend', value: 'D4' }, aftStarboard: { type: 'Defend', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: 'Nichol',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Ethel: {
    rec: 130,
    title: '',
    name: 'Ethel',
    actions: {
      forePort: { type: 'Attack', value: 'D2' }, foreStarboard: { type: 'Enchant', value: 'D4 R2' }, aftPort: { type: 'Fly', value: 'R5' }, aftStarboard: { type: 'Defend', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: true, aftPort: false, port: false, forePort: false,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: 'Eugenia',
    immunity: '',
    more: '',
    skill: 'Time Thief',
    impact: 'Upon victory collect banked clock ticks from any opponent.',
  },
  Maxwell: {
    rec: 131,
    title: '',
    name: 'Maxwell',
    actions: {
      forePort: { type: 'Defend', value: 'D2' }, foreStarboard: { type: 'Attack', value: 'D2' }, aftPort: { type: 'Attack', value: 'D2' }, aftStarboard: { type: 'Enchant', value: 'D3 R2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: false, forePort: false,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Farrah',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Gricelda: {
    rec: 132,
    title: '',
    name: 'Gricelda',
    actions: {
      forePort: { type: 'Defend', value: 'D5' }, foreStarboard: { type: 'Defend', value: 'D5' }, aftPort: { type: 'Attack', value: 'D2' }, aftStarboard: { type: 'Defend', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: true, aftPort: true, port: false, forePort: false,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Ha',
    immunity: '',
    more: '',
    skill: 'Barber',
    impact: 'Attack is +D3 when adjacent to Butcher.',
  },
  Esteban: {
    rec: 133,
    title: '',
    name: 'Esteban',
    actions: {
      forePort: { type: 'Defend', value: 'D2' }, foreStarboard: { type: 'Attack', value: 'D4' }, aftPort: { type: 'Defend', value: 'D5' }, aftStarboard: { type: 'Attack', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: true, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: 'Linh',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Sylvia: {
    rec: 134,
    title: 'Sir',
    name: 'Sylvia',
    actions: {
      forePort: { type: 'Defend', value: 'D5' }, foreStarboard: { type: 'Attack', value: 'D4' }, aftPort: { type: 'Fly', value: 'R5' }, aftStarboard: { type: 'Defend', value: 'D3' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: '',
    immunity: 'Enchant',
    more: 'Always defeat water.',
    skill: 'Submariner',
    impact: 'Can pass through Water while moving, cannot stop on Water.',
  },
  Inell: {
    rec: 135,
    title: '',
    name: 'Inell',
    actions: {
      forePort: { type: 'Fly', value: 'R3' }, foreStarboard: { type: 'Attack', value: 'D3' }, aftPort: { type: 'Defend', value: 'D3' }, aftStarboard: { type: 'Defend', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: false, forePort: false,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Karlyn',
    immunity: '',
    more: 'No ordinally adjacent craft may Repair.',
    skill: '',
    impact: '',
  },
  Jane: {
    rec: 136,
    title: '',
    name: 'Jane',
    actions: {
      forePort: { type: 'Fly', value: 'R3' }, foreStarboard: { type: 'Fly', value: 'R5' }, aftPort: { type: 'Attack', value: 'D5' }, aftStarboard: { type: 'Enchant', value: 'D4 R3' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: true, aft: true, aftPort: true, port: false, forePort: false,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Maida',
    immunity: '',
    more: '',
    skill: 'Berserker',
    impact: 'Attack at +D5 with penalty of -D3 to defense and dies after successful attack.',
  },
  Piper: {
    rec: 137,
    title: '',
    name: 'Piper',
    actions: {
      forePort: { type: 'Fly', value: 'R4' }, foreStarboard: { type: 'Defend', value: 'D5' }, aftPort: { type: 'Defend', value: 'D5' }, aftStarboard: { type: 'Defend', value: 'D3' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: '',
    immunity: '',
    more: '',
    skill: 'Sailor',
    impact: 'Can pass across Water while moving, cannot stop on Water.',
  },
  Kasha: {
    rec: 138,
    title: '',
    name: 'Kasha',
    actions: {
      forePort: { type: 'Fly', value: 'R3' }, foreStarboard: { type: 'Defend', value: 'D2' }, aftPort: { type: 'Attack', value: 'D5' }, aftStarboard: { type: 'Attack', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: false, forePort: false,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: '',
    immunity: '',
    more: 'All combat at +D1 vs Lord.',
    skill: '',
    impact: '',
  },
  Nohemi: {
    rec: 139,
    title: 'Esquire',
    name: 'Nohemi',
    actions: {
      forePort: { type: 'Attack', value: 'D2' }, foreStarboard: { type: 'Defend', value: 'D5' }, aftPort: { type: 'Defend', value: 'D5' }, aftStarboard: { type: 'Attack', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Vinnie',
    immunity: 'Shoot',
    more: 'Defend at +D2 vs Punks with titles.',
    skill: 'Spotter',
    impact: 'Adjacent enemy craft are in range of Shoot or Launch regardless of the distance.',
  },
  Felicia: {
    rec: 140,
    title: '',
    name: 'Felicia',
    actions: {
      forePort: { type: 'Fly', value: 'R4' }, foreStarboard: { type: 'Defend', value: 'D3' }, aftPort: { type: 'Defend', value: 'D4' }, aftStarboard: { type: 'Defend', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: '',
    immunity: '',
    more: 'Swap location with allied craft before attack.',
    skill: '',
    impact: '',
  },
  Karly: {
    rec: 141,
    title: 'Lord',
    name: 'Karly',
    actions: {
      forePort: { type: 'Defend', value: 'D2' }, foreStarboard: { type: 'Attack', value: 'D5' }, aftPort: { type: 'Defend', value: 'D2' }, aftStarboard: { type: 'Defend', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: false, aft: false, aftPort: false, port: true, forePort: true,
    },
    cardType: 'Fire',
    cardWeakness: 'Water',
    archEnemy: '',
    immunity: 'Launch',
    more: '',
    skill: 'Jungle Explorer',
    impact: 'Attack at +D2 vs Earth on 1in6.',
  },
  Laure: {
    rec: 142,
    title: '',
    name: 'Laure',
    actions: {
      forePort: { type: 'Enchant', value: 'D2 R1' }, foreStarboard: { type: 'Defend', value: 'D3' }, aftPort: { type: 'Attack', value: 'D5' }, aftStarboard: { type: 'Attack', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Fire',
    cardWeakness: 'Water',
    archEnemy: 'Maurine',
    immunity: '',
    more: '',
    skill: 'Clergy',
    impact: 'Adjacent allied crafy immune to enchant on 3in6.',
  },
  Daryl: {
    rec: 143,
    title: 'Lord',
    name: 'Daryl',
    actions: {
      forePort: { type: 'Defend', value: 'D3' }, foreStarboard: { type: 'Defend', value: 'D2' }, aftPort: { type: 'Fly', value: 'R4' }, aftStarboard: { type: 'Defend', value: 'D3' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: false, aft: false, aftPort: false, port: false, forePort: false,
    },
    cardType: 'Fire ',
    cardWeakness: 'Water ',
    archEnemy: '',
    immunity: 'Launch',
    more: 'Defend at -D3 vs Launch.',
    skill: 'Sailor',
    impact: 'Can pass across Water while moving, cannot stop on Water.',
  },
  Tifany: {
    rec: 144,
    title: 'Esquire',
    name: 'Tifany',
    actions: {
      forePort: { type: 'Attack', value: 'D3' }, foreStarboard: { type: 'Fly', value: 'R4' }, aftPort: { type: 'Defend', value: 'D5' }, aftStarboard: { type: 'Attack', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: false, aft: false, aftPort: false, port: false, forePort: false,
    },
    cardType: 'Fire ',
    cardWeakness: 'Water ',
    archEnemy: 'Janeen',
    immunity: 'Shoot',
    more: '',
    skill: 'Philanthropist',
    impact: 'Upon defeat, both opponents deploy two craft.',
  },
  Eddy: {
    rec: 145,
    title: '',
    name: 'Eddy',
    actions: {
      forePort: { type: 'Defend', value: 'D2' }, foreStarboard: { type: 'Defend', value: 'D5' }, aftPort: { type: 'Fly', value: 'R5' }, aftStarboard: { type: 'Defend', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: '',
    immunity: '',
    more: 'All combat at +D2 vs Sir.',
    skill: 'Barber',
    impact: 'Attack is +D3 when adjacent to Butcher.',
  },
  Doreatha: {
    rec: 146,
    title: '',
    name: 'Doreatha',
    actions: {
      forePort: { type: 'Attack', value: 'D3' }, foreStarboard: { type: 'Attack', value: 'D2' }, aftPort: { type: 'Attack', value: 'D2' }, aftStarboard: { type: 'Defend', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Fire',
    cardWeakness: 'Water',
    archEnemy: 'Tyler',
    immunity: '',
    more: 'Rotates opposing craft clockwise upon successful defend.',
    skill: '',
    impact: '',
  },
  Elsie: {
    rec: 147,
    title: 'Esquire',
    name: 'Elsie',
    actions: {
      forePort: { type: 'Defend', value: 'D5' }, foreStarboard: { type: 'Attack', value: 'D2' }, aftPort: { type: 'Defend', value: 'D5' }, aftStarboard: { type: 'Defend', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: false, aft: true, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: '',
    immunity: 'Shoot',
    more: '',
    skill: 'Energy Thief',
    impact: 'All adjacent craft cost an extra clock tick to move.',
  },
  Marianne: {
    rec: 148,
    title: 'Esquire',
    name: 'Marianne',
    actions: {
      forePort: { type: 'Attack', value: 'D4' }, foreStarboard: { type: 'Attack', value: 'D3' }, aftPort: { type: 'Defend', value: 'D5' }, aftStarboard: { type: 'Fly', value: 'R5' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: false, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: 'Abel',
    immunity: 'Shoot',
    more: '',
    skill: '',
    impact: '',
  },
  Lavonne: {
    rec: 149,
    title: '',
    name: 'Lavonne',
    actions: {
      forePort: { type: 'Attack', value: 'D2' }, foreStarboard: { type: 'Fly', value: 'R3' }, aftPort: { type: 'Defend', value: 'D3' }, aftStarboard: { type: 'Attack', value: 'D3' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: '',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Tianna: {
    rec: 150,
    title: '',
    name: 'Tianna',
    actions: {
      forePort: { type: 'Attack', value: 'D5' }, foreStarboard: { type: 'Defend', value: 'D3' }, aftPort: { type: 'Defend', value: 'D4' }, aftStarboard: { type: 'Fly', value: 'R4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: true, aft: true, aftPort: true, port: false, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: '',
    immunity: '',
    more: 'Always lose to fire.',
    skill: '',
    impact: '',
  },
  Troy: {
    rec: 151,
    title: 'Lord',
    name: 'Troy',
    actions: {
      forePort: { type: 'Defend', value: 'D2' }, foreStarboard: { type: 'Defend', value: 'D3' }, aftPort: { type: 'Defend', value: 'D4' }, aftStarboard: { type: 'Enchant', value: 'D3 R2' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: false, aft: false, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: 'Tish',
    immunity: 'Launch',
    more: 'Sacrafice this and one other allied craft you nullify an Enchant.',
    skill: '',
    impact: '',
  },
  Kenya: {
    rec: 152,
    title: '',
    name: 'Kenya',
    actions: {
      forePort: { type: 'Fly', value: 'R3' }, foreStarboard: { type: 'Fly', value: 'R4' }, aftPort: { type: 'Defend', value: 'D3' }, aftStarboard: { type: 'Attack', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: false, aftPort: false, port: false, forePort: false,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: 'Lucas',
    immunity: '',
    more: '',
    skill: 'Doctor',
    impact: 'Must sacrafice self to repair any Punk killed on current turn on 2in6.',
  },
  Michell: {
    rec: 153,
    title: '',
    name: 'Michell',
    actions: {
      forePort: { type: 'Defend', value: 'D4' }, foreStarboard: { type: 'Defend', value: 'D3' }, aftPort: { type: 'Defend', value: 'D3' }, aftStarboard: { type: 'Attack', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: false, aft: false, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Earth ',
    cardWeakness: 'Fire ',
    archEnemy: '',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Yasmine: {
    rec: 154,
    title: 'Sir',
    name: 'Yasmine',
    actions: {
      forePort: { type: 'Attack', value: 'D2' }, foreStarboard: { type: 'Enchant', value: 'D3 R3' }, aftPort: { type: 'Attack', value: 'D3' }, aftStarboard: { type: 'Defend', value: 'D3' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Harmony',
    immunity: 'Enchant',
    more: '',
    skill: '',
    impact: '',
  },
  Haley: {
    rec: 155,
    title: '',
    name: 'Haley',
    actions: {
      forePort: { type: 'Enchant', value: 'D2 R3' }, foreStarboard: { type: 'Attack', value: 'D4' }, aftPort: { type: 'Defend', value: 'D3' }, aftStarboard: { type: 'Attack', value: 'D3' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Mikaela',
    immunity: '',
    more: '',
    skill: 'Coward',
    impact: 'Will never move next to opponent with a title.',
  },
  Jose: {
    rec: 156,
    title: '',
    name: 'Jose',
    actions: {
      forePort: { type: 'Enchant', value: 'D2 R2' }, foreStarboard: { type: 'Defend', value: 'D4' }, aftPort: { type: 'Defend', value: 'D3' }, aftStarboard: { type: 'Defend', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: '',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Lorri: {
    rec: 157,
    title: 'Sir',
    name: 'Lorri',
    actions: {
      forePort: { type: 'Enchant', value: 'D3 R3' }, foreStarboard: { type: 'Defend', value: 'D2' }, aftPort: { type: 'Enchant', value: 'D1 R2' }, aftStarboard: { type: 'Attack', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Lina',
    immunity: 'Enchant',
    more: '',
    skill: '',
    impact: '',
  },
  Rosette: {
    rec: 158,
    title: 'Sir',
    name: 'Rosette',
    actions: {
      forePort: { type: 'Attack', value: 'D3' }, foreStarboard: { type: 'Defend', value: 'D3' }, aftPort: { type: 'Fly', value: 'R5' }, aftStarboard: { type: 'Attack', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: false, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: '',
    immunity: 'Enchant',
    more: '',
    skill: '',
    impact: '',
  },
  Ivelisse: {
    rec: 159,
    title: 'Esquire',
    name: 'Ivelisse',
    actions: {
      forePort: { type: 'Enchant', value: 'D1 R1' }, foreStarboard: { type: 'Fly', value: 'R4' }, aftPort: { type: 'Attack', value: 'D5' }, aftStarboard: { type: 'Attack', value: 'D3' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: '',
    immunity: 'Shoot',
    more: '',
    skill: '',
    impact: '',
  },
  Beatris: {
    rec: 160,
    title: '',
    name: 'Beatris',
    actions: {
      forePort: { type: 'Fly', value: 'R3' }, foreStarboard: { type: 'Attack', value: 'D5' }, aftPort: { type: 'Defend', value: 'D4' }, aftStarboard: { type: 'Defend', value: 'D3' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: false, forePort: false,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: 'Francis',
    immunity: '',
    more: 'Sacrafice this craft to block an enemy deployment for one turn.',
    skill: '',
    impact: '',
  },
  Marco: {
    rec: 161,
    title: 'Sir',
    name: 'Marco',
    actions: {
      forePort: { type: 'Enchant', value: 'D4 R2' }, foreStarboard: { type: 'Attack', value: 'D3' }, aftPort: { type: 'Defend', value: 'D4' }, aftStarboard: { type: 'Attack', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: true, aftPort: false, port: false, forePort: false,
    },
    cardType: 'Fire',
    cardWeakness: 'Water',
    archEnemy: 'Rose',
    immunity: 'Enchant',
    more: 'Defend at +D2 vs Duke.',
    skill: 'Martyr',
    impact: 'All adjacent Punks destroyed upon defeat.',
  },
  Theodora: {
    rec: 162,
    title: '',
    name: 'Theodora',
    actions: {
      forePort: { type: 'Defend', value: 'D2' }, foreStarboard: { type: 'Attack', value: 'D5' }, aftPort: { type: 'Defend', value: 'D3' }, aftStarboard: { type: 'Enchant', value: 'D3 R1' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: 'Gilbert',
    immunity: '',
    more: '',
    skill: 'Butcher',
    impact: 'Defend at +D2 when adjacent to Barber.',
  },
  Shameka: {
    rec: 163,
    title: 'Sir',
    name: 'Shameka',
    actions: {
      forePort: { type: 'Attack', value: 'D3' }, foreStarboard: { type: 'Defend', value: 'D2' }, aftPort: { type: 'Fly', value: 'R5' }, aftStarboard: { type: 'Attack', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Bo',
    immunity: 'Enchant',
    more: '',
    skill: '',
    impact: '',
  },
  Curtis: {
    rec: 164,
    title: '',
    name: 'Curtis',
    actions: {
      forePort: { type: 'Enchant', value: 'D2 R2' }, foreStarboard: { type: 'Attack', value: 'D3' }, aftPort: { type: 'Fly', value: 'R4' }, aftStarboard: { type: 'Defend', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: '',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Laverna: {
    rec: 165,
    title: '',
    name: 'Laverna',
    actions: {
      forePort: { type: 'Attack', value: 'D4' }, foreStarboard: { type: 'Attack', value: 'D2' }, aftPort: { type: 'Enchant', value: 'D2 R1' }, aftStarboard: { type: 'Fly', value: 'R4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: false, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: '',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Theresa: {
    rec: 166,
    title: '',
    name: 'Theresa',
    actions: {
      forePort: { type: 'Fly', value: 'R5' }, foreStarboard: { type: 'Fly', value: 'R5' }, aftPort: { type: 'Fly', value: 'R4' }, aftStarboard: { type: 'Fly', value: 'R5' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: true, aft: true, aftPort: false, port: false, forePort: false,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: 'Babara',
    immunity: '',
    more: 'Defend at +D1 vs Water.',
    skill: 'Air Bender',
    impact: 'Can swap position with adjacent air terrain.',
  },
  Lorette: {
    rec: 167,
    title: '',
    name: 'Lorette',
    actions: {
      forePort: { type: 'Defend', value: 'D2' }, foreStarboard: { type: 'Attack', value: 'D2' }, aftPort: { type: 'Defend', value: 'D4' }, aftStarboard: { type: 'Fly', value: 'R3' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: false, forePort: false,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: 'Nikita',
    immunity: '',
    more: 'Defend at -D1 vs Water.',
    skill: 'Clockmaker',
    impact: 'All adjacent Punk must rotate once clockwise when placed adjacent.',
  },
  Jonah: {
    rec: 168,
    title: '',
    name: 'Jonah',
    actions: {
      forePort: { type: 'Defend', value: 'D5' }, foreStarboard: { type: 'Enchant', value: 'D4 R1' }, aftPort: { type: 'Fly', value: 'R4' }, aftStarboard: { type: 'Defend', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: true, aftPort: false, port: false, forePort: false,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: 'Johnie',
    immunity: '',
    more: 'Play this card immediately upon drawing it or opponent can take control of any one of your cards but your general.',
    skill: '',
    impact: '',
  },
  Margaret: {
    rec: 169,
    title: '',
    name: 'Margaret',
    actions: {
      forePort: { type: 'Defend', value: 'D4' }, foreStarboard: { type: 'Attack', value: 'D5' }, aftPort: { type: 'Defend', value: 'D5' }, aftStarboard: { type: 'Fly', value: 'R4' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: false, forePort: false,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: 'Karey',
    immunity: '',
    more: 'Is hidden to Fire.',
    skill: 'Chimney Sweep',
    impact: 'Cannot be launched, jumped or flown over.',
  },
  Shawnta: {
    rec: 170,
    title: 'Esquire',
    name: 'Shawnta',
    actions: {
      forePort: { type: 'Fly', value: 'R3' }, foreStarboard: { type: 'Attack', value: 'D2' }, aftPort: { type: 'Attack', value: 'D2' }, aftStarboard: { type: 'Attack', value: 'D3' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: true, aft: true, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Frederick',
    immunity: 'Shoot',
    more: 'Defend at +D1 vs Air.',
    skill: 'Politician',
    impact: 'Upon defeat, players general is replaced by first card on ready pile.',
  },
  Walter: {
    rec: 171,
    title: 'Lord',
    name: 'Walter',
    actions: {
      forePort: { type: 'Enchant', value: 'D2 R3' }, foreStarboard: { type: 'Fly', value: 'R3' }, aftPort: { type: 'Attack', value: 'D4' }, aftStarboard: { type: 'Enchant', value: 'D2 R1' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: false, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: 'Hermina',
    immunity: 'Launch',
    more: 'Cannot be jumped.',
    skill: '',
    impact: '',
  },
  Corina: {
    rec: 172,
    title: '',
    name: 'Corina',
    actions: {
      forePort: { type: 'Defend', value: 'D3' }, foreStarboard: { type: 'Attack', value: 'D4' }, aftPort: { type: 'Attack', value: 'D3' }, aftStarboard: { type: 'Defend', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: true, aft: true, aftPort: false, port: false, forePort: false,
    },
    cardType: 'Fire',
    cardWeakness: 'Water',
    archEnemy: 'Errol',
    immunity: '',
    more: 'May rotate any card on the board once in lieu of turn.',
    skill: 'Water Bender',
    impact: 'Can swap position with adjacent water terrain.',
  },
  Jenae: {
    rec: 173,
    title: 'Sir',
    name: 'Jenae',
    actions: {
      forePort: { type: 'Defend', value: 'D5' }, foreStarboard: { type: 'Defend', value: 'D5' }, aftPort: { type: 'Attack', value: 'D3' }, aftStarboard: { type: 'Enchant', value: 'D4 R1' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Fire',
    cardWeakness: 'Water',
    archEnemy: '',
    immunity: 'Enchant',
    more: 'Cannot be enchanted.',
    skill: '',
    impact: '',
  },
  Vincent: {
    rec: 174,
    title: '',
    name: 'Vincent',
    actions: {
      forePort: { type: 'Attack', value: 'D4' }, foreStarboard: { type: 'Attack', value: 'D3' }, aftPort: { type: 'Attack', value: 'D4' }, aftStarboard: { type: 'Attack', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: false, aft: true, aftPort: true, port: false, forePort: false,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: 'Jovan',
    immunity: '',
    more: '',
    skill: 'Clergy',
    impact: 'Adjacent allied crafy immune to enchant on 3in6.',
  },
  Bernard: {
    rec: 175,
    title: 'Duke',
    name: 'Bernard',
    actions: {
      forePort: { type: 'Attack', value: 'D3' }, foreStarboard: { type: 'Fly', value: 'R3' }, aftPort: { type: 'Defend', value: 'D5' }, aftStarboard: { type: 'Defend', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: 'Tiffaney',
    immunity: 'Vitiate',
    more: '',
    skill: 'Energy Thief',
    impact: 'All adjacent craft cost an extra clock tick to move.',
  },
  Emelia: {
    rec: 176,
    title: '',
    name: 'Emelia',
    actions: {
      forePort: { type: 'Enchant', value: 'D3 R2' }, foreStarboard: { type: 'Enchant', value: 'D2 R2' }, aftPort: { type: 'Fly', value: 'R5' }, aftStarboard: { type: 'Attack', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: true, aft: true, aftPort: false, port: false, forePort: false,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: 'Freeman',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Lin: {
    rec: 177,
    title: '',
    name: 'Lin',
    actions: {
      forePort: { type: 'Enchant', value: 'D4 R2' }, foreStarboard: { type: 'Fly', value: 'R3' }, aftPort: { type: 'Fly', value: 'R4' }, aftStarboard: { type: 'Attack', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: '',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Lorenzo: {
    rec: 178,
    title: '',
    name: 'Lorenzo',
    actions: {
      forePort: { type: 'Fly', value: 'R5' }, foreStarboard: { type: 'Defend', value: 'D4' }, aftPort: { type: 'Defend', value: 'D2' }, aftStarboard: { type: 'Defend', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: true, aftPort: true, port: false, forePort: false,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: '',
    immunity: '',
    more: 'All combat at +D1 vs Lord.',
    skill: 'Marksman',
    impact: 'On rotate, shoot R3 D2 forward at enemy Punk on 4in6.',
  },
  Keiko: {
    rec: 179,
    title: '',
    name: 'Keiko',
    actions: {
      forePort: { type: 'Defend', value: 'D3' }, foreStarboard: { type: 'Attack', value: 'D4' }, aftPort: { type: 'Enchant', value: 'D3 R2' }, aftStarboard: { type: 'Defend', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: true, aftPort: true, port: false, forePort: false,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: 'Richie',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Enriqueta: {
    rec: 180,
    title: '',
    name: 'Enriqueta',
    actions: {
      forePort: { type: 'Attack', value: 'D4' }, foreStarboard: { type: 'Defend', value: 'D4' }, aftPort: { type: 'Attack', value: 'D2' }, aftStarboard: { type: 'Attack', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: 'Rosetta',
    immunity: '',
    more: 'Is hidden to Fire.',
    skill: 'Spouse',
    impact: 'Time passes slowly, lose one clock tick on movement and +D2 attack ve same affinity..',
  },
  Gwyneth: {
    rec: 181,
    title: '',
    name: 'Gwyneth',
    actions: {
      forePort: { type: 'Attack', value: 'D3' }, foreStarboard: { type: 'Defend', value: 'D5' }, aftPort: { type: 'Attack', value: 'D4' }, aftStarboard: { type: 'Attack', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: false, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: '',
    immunity: '',
    more: '',
    skill: 'Berserker',
    impact: 'Attack at +D5 with penalty of -D3 to defense and dies after successful attack.',
  },
  Arlena: {
    rec: 182,
    title: 'Esquire',
    name: 'Arlena',
    actions: {
      forePort: { type: 'Fly', value: 'R3' }, foreStarboard: { type: 'Defend', value: 'D2' }, aftPort: { type: 'Defend', value: 'D3' }, aftStarboard: { type: 'Fly', value: 'R3' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: true, aft: true, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Fire',
    cardWeakness: 'Water',
    archEnemy: '',
    immunity: 'Shoot',
    more: '',
    skill: '',
    impact: '',
  },
  Mayme: {
    rec: 183,
    title: '',
    name: 'Mayme',
    actions: {
      forePort: { type: 'Attack', value: 'D2' }, foreStarboard: { type: 'Attack', value: 'D2' }, aftPort: { type: 'Defend', value: 'D2' }, aftStarboard: { type: 'Fly', value: 'R5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: true, forePort: true,
    },
    cardType: 'Fire',
    cardWeakness: 'Water',
    archEnemy: '',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Lelia: {
    rec: 184,
    title: '',
    name: 'Lelia',
    actions: {
      forePort: { type: 'Attack', value: 'D3' }, foreStarboard: { type: 'Attack', value: 'D3' }, aftPort: { type: 'Enchant', value: 'D1 R1' }, aftStarboard: { type: 'Defend', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: false, aftPort: false, port: true, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: '',
    immunity: '',
    more: 'Rotate defender clockwise by 1 prior to attack on 1 in 6.',
    skill: '',
    impact: '',
  },
  Mirella: {
    rec: 185,
    title: '',
    name: 'Mirella',
    actions: {
      forePort: { type: 'Enchant', value: 'D1 R1' }, foreStarboard: { type: 'Fly', value: 'R4' }, aftPort: { type: 'Fly', value: 'R5' }, aftStarboard: { type: 'Fly', value: 'R3' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: false, forePort: false,
    },
    cardType: 'Fire',
    cardWeakness: 'Water',
    archEnemy: 'Ocie',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Luna: {
    rec: 186,
    title: '',
    name: 'Luna',
    actions: {
      forePort: { type: 'Attack', value: 'D3' }, foreStarboard: { type: 'Enchant', value: 'D4 R2' }, aftPort: { type: 'Attack', value: 'D2' }, aftStarboard: { type: 'Attack', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: false, forePort: true,
    },
    cardType: 'Fire ',
    cardWeakness: 'Water ',
    archEnemy: 'Lanie',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Katelin: {
    rec: 187,
    title: '',
    name: 'Katelin',
    actions: {
      forePort: { type: 'Fly', value: 'R4' }, foreStarboard: { type: 'Attack', value: 'D4' }, aftPort: { type: 'Defend', value: 'D5' }, aftStarboard: { type: 'Fly', value: 'R4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: 'Wade',
    immunity: '',
    more: 'Swap location with allied craft before attack.',
    skill: '',
    impact: '',
  },
  Karon: {
    rec: 188,
    title: 'Lord',
    name: 'Karon',
    actions: {
      forePort: { type: 'Fly', value: 'R4' }, foreStarboard: { type: 'Enchant', value: 'D1 R1' }, aftPort: { type: 'Defend', value: 'D2' }, aftStarboard: { type: 'Defend', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: 'Charmaine',
    immunity: 'Launch',
    more: 'Rotate defender clockwise by 1 prior to attack on 1 in 6.',
    skill: 'Lycanthrop',
    impact: 'When a Clock Tick remains at end of turn, attack Punk to starboard on 5in6.',
  },
  Ginny: {
    rec: 189,
    title: '',
    name: 'Ginny',
    actions: {
      forePort: { type: 'Defend', value: 'D2' }, foreStarboard: { type: 'Attack', value: 'D2' }, aftPort: { type: 'Attack', value: 'D2' }, aftStarboard: { type: 'Defend', value: 'D3' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: true, aft: true, aftPort: false, port: false, forePort: false,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: 'Laurie',
    immunity: '',
    more: '',
    skill: 'Miner',
    impact: 'Can pass through Earth while moving, cannot stop on Earth.',
  },
  Alton: {
    rec: 190,
    title: 'Duke',
    name: 'Alton',
    actions: {
      forePort: { type: 'Enchant', value: 'D4 R2' }, foreStarboard: { type: 'Attack', value: 'D4' }, aftPort: { type: 'Defend', value: 'D2' }, aftStarboard: { type: 'Attack', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: false, aft: false, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: '',
    immunity: 'Vitiate',
    more: '',
    skill: 'Time Lord',
    impact: 'Bank one clock tick for use as Punk chooses upon deployment.',
  },
  Theressa: {
    rec: 191,
    title: '',
    name: 'Theressa',
    actions: {
      forePort: { type: 'Defend', value: 'D4' }, foreStarboard: { type: 'Attack', value: 'D3' }, aftPort: { type: 'Enchant', value: 'D1 R3' }, aftStarboard: { type: 'Defend', value: 'D3' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: false, forePort: false,
    },
    cardType: 'Earth ',
    cardWeakness: 'Fire ',
    archEnemy: '',
    immunity: '',
    more: 'Opponent may attack again upon defeat.',
    skill: 'Philanthropist',
    impact: 'Upon defeat, both opponents deploy two craft.',
  },
  Iraida: {
    rec: 192,
    title: '',
    name: 'Iraida',
    actions: {
      forePort: { type: 'Fly', value: 'R4' }, foreStarboard: { type: 'Enchant', value: 'D3 R3' }, aftPort: { type: 'Defend', value: 'D4' }, aftStarboard: { type: 'Attack', value: 'D3' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: true, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: '',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Buford: {
    rec: 193,
    title: 'Sir',
    name: 'Buford',
    actions: {
      forePort: { type: 'Attack', value: 'D2' }, foreStarboard: { type: 'Attack', value: 'D5' }, aftPort: { type: 'Attack', value: 'D5' }, aftStarboard: { type: 'Attack', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: true, aftPort: true, port: false, forePort: false,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: 'Francis',
    immunity: 'Enchant',
    more: '',
    skill: 'Coward',
    impact: 'Will never move next to opponent with a title.',
  },
  Delmar: {
    rec: 194,
    title: '',
    name: 'Delmar',
    actions: {
      forePort: { type: 'Defend', value: 'D4' }, foreStarboard: { type: 'Defend', value: 'D2' }, aftPort: { type: 'Attack', value: 'D2' }, aftStarboard: { type: 'Fly', value: 'R3' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: true, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: '',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Onie: {
    rec: 195,
    title: 'Lord',
    name: 'Onie',
    actions: {
      forePort: { type: 'Attack', value: 'D2' }, foreStarboard: { type: 'Attack', value: 'D3' }, aftPort: { type: 'Defend', value: 'D3' }, aftStarboard: { type: 'Fly', value: 'R5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: false, aft: false, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: '',
    immunity: 'Launch',
    more: 'Adjacent opponent craft (opponents choice) destroyed upon failed attack.',
    skill: '',
    impact: '',
  },
  Doria: {
    rec: 196,
    title: 'Esquire',
    name: 'Doria',
    actions: {
      forePort: { type: 'Attack', value: 'D2' }, foreStarboard: { type: 'Fly', value: 'R5' }, aftPort: { type: 'Enchant', value: 'D2 R1' }, aftStarboard: { type: 'Attack', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: '',
    immunity: 'Shoot',
    more: 'No adjacent craft may rotate.',
    skill: 'Professor',
    impact: 'All ordinally adjacent punk immune to Enchantment.',
  },
  Tamara: {
    rec: 197,
    title: '',
    name: 'Tamara',
    actions: {
      forePort: { type: 'Defend', value: 'D4' }, foreStarboard: { type: 'Attack', value: 'D2' }, aftPort: { type: 'Defend', value: 'D2' }, aftStarboard: { type: 'Defend', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: false, aft: false, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: 'Kathey',
    immunity: '',
    more: 'Defend at -D1 vs Fire or Air.',
    skill: '',
    impact: '',
  },
  George: {
    rec: 198,
    title: 'Lord',
    name: 'George',
    actions: {
      forePort: { type: 'Defend', value: 'D3' }, foreStarboard: { type: 'Attack', value: 'D2' }, aftPort: { type: 'Attack', value: 'D4' }, aftStarboard: { type: 'Defend', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: false, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: '',
    immunity: 'Launch',
    more: '',
    skill: '',
    impact: '',
  },
  Shanon: {
    rec: 199,
    title: '',
    name: 'Shanon',
    actions: {
      forePort: { type: 'Enchant', value: 'D1 R3' }, foreStarboard: { type: 'Enchant', value: 'D3 R3' }, aftPort: { type: 'Defend', value: 'D3' }, aftStarboard: { type: 'Defend', value: 'D3' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: false, aft: true, aftPort: true, port: false, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Ivelisse',
    immunity: '',
    more: '',
    skill: 'Chimney Sweep',
    impact: 'Cannot be launched, jumped or flown over.',
  },
  Jaquelyn: {
    rec: 200,
    title: '',
    name: 'Jaquelyn',
    actions: {
      forePort: { type: 'Attack', value: 'D2' }, foreStarboard: { type: 'Defend', value: 'D4' }, aftPort: { type: 'Defend', value: 'D5' }, aftStarboard: { type: 'Defend', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: false, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: '',
    immunity: '',
    more: 'No adjacent craft may Launch.',
    skill: '',
    impact: '',
  },
  Sudie: {
    rec: 201,
    title: '',
    name: 'Sudie',
    actions: {
      forePort: { type: 'Attack', value: 'D3' }, foreStarboard: { type: 'Defend', value: 'D4' }, aftPort: { type: 'Defend', value: 'D3' }, aftStarboard: { type: 'Defend', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: 'Diana',
    immunity: '',
    more: '',
    skill: 'Map Maker',
    impact: 'On move, place a new terrain card on an adjacent empty space on 2in6.',
  },
  Bob: {
    rec: 202,
    title: '',
    name: 'Bob',
    actions: {
      forePort: { type: 'Defend', value: 'D2' }, foreStarboard: { type: 'Enchant', value: 'D1 R1' }, aftPort: { type: 'Defend', value: 'D3' }, aftStarboard: { type: 'Defend', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: false, aft: false, aftPort: false, port: true, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: '',
    immunity: '',
    more: '',
    skill: 'Physicist',
    impact: "Sacrafice self to add +D3 defence to any craft and +D2 attack to it's opponent.",
  },
  Reita: {
    rec: 203,
    title: 'Fellow',
    name: 'Reita',
    actions: {
      forePort: { type: 'Attack', value: 'D4' }, foreStarboard: { type: 'Defend', value: 'D5' }, aftPort: { type: 'Attack', value: 'D4' }, aftStarboard: { type: 'Defend', value: 'D3' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Fire',
    cardWeakness: 'Water',
    archEnemy: 'Justa',
    immunity: 'Hide',
    more: 'Defend at -D1 vs Fire or Air.',
    skill: '',
    impact: '',
  },
  Myrle: {
    rec: 204,
    title: '',
    name: 'Myrle',
    actions: {
      forePort: { type: 'Enchant', value: 'D1 R1' }, foreStarboard: { type: 'Defend', value: 'D4' }, aftPort: { type: 'Fly', value: 'R5' }, aftStarboard: { type: 'Defend', value: 'D3' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Eden',
    immunity: '',
    more: '',
    skill: 'Chimney Sweep',
    impact: 'Cannot be jumped over.',
  },
  Elicia: {
    rec: 205,
    title: '',
    name: 'Elicia',
    actions: {
      forePort: { type: 'Defend', value: 'D4' }, foreStarboard: { type: 'Defend', value: 'D4' }, aftPort: { type: 'Defend', value: 'D5' }, aftStarboard: { type: 'Enchant', value: 'D4 R1' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: '',
    immunity: '',
    more: '',
    skill: 'Spotter',
    impact: 'Adjacent enemy craft are in range of Shoot or Launch regardless of the distance.',
  },
  Keena: {
    rec: 206,
    title: '',
    name: 'Keena',
    actions: {
      forePort: { type: 'Attack', value: 'D5' }, foreStarboard: { type: 'Defend', value: 'D5' }, aftPort: { type: 'Enchant', value: 'D4 R3' }, aftStarboard: { type: 'Defend', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: false, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Fire',
    cardWeakness: 'Water',
    archEnemy: '',
    immunity: '',
    more: '',
    skill: 'Singer',
    impact: 'Sacrifice self at any time to reveal all hidden craft.',
  },
  Hunter: {
    rec: 207,
    title: 'Duke',
    name: 'Hunter',
    actions: {
      forePort: { type: 'Defend', value: 'D3' }, foreStarboard: { type: 'Attack', value: 'D2' }, aftPort: { type: 'Defend', value: 'D2' }, aftStarboard: { type: 'Defend', value: 'D3' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Fire',
    cardWeakness: 'Water',
    archEnemy: 'Britni',
    immunity: 'Vitiate',
    more: '',
    skill: 'Bird Hunter',
    impact: 'Attack at +D2 vs any craft with Fly.',
  },
  Denna: {
    rec: 208,
    title: '',
    name: 'Denna',
    actions: {
      forePort: { type: 'Defend', value: 'D4' }, foreStarboard: { type: 'Fly', value: 'R3' }, aftPort: { type: 'Defend', value: 'D3' }, aftStarboard: { type: 'Fly', value: 'R3' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: '',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Britta: {
    rec: 209,
    title: '',
    name: 'Britta',
    actions: {
      forePort: { type: 'Defend', value: 'D2' }, foreStarboard: { type: 'Defend', value: 'D5' }, aftPort: { type: 'Attack', value: 'D2' }, aftStarboard: { type: 'Attack', value: 'D3' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Fire',
    cardWeakness: 'Water',
    archEnemy: 'Jacqulyn',
    immunity: '',
    more: 'All combat at +D1 vs Lord.',
    skill: '',
    impact: '',
  },
  Stanley: {
    rec: 210,
    title: '',
    name: 'Stanley',
    actions: {
      forePort: { type: 'Defend', value: 'D2' }, foreStarboard: { type: 'Defend', value: 'D5' }, aftPort: { type: 'Enchant', value: 'D1 R2' }, aftStarboard: { type: 'Fly', value: 'R5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: false, port: false, forePort: false,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Shawn',
    immunity: '',
    more: '',
    skill: 'Martyr',
    impact: 'Redeployed as victors craft upon defeat.',
  },
  Ladonna: {
    rec: 211,
    title: '',
    name: 'Ladonna',
    actions: {
      forePort: { type: 'Attack', value: 'D2' }, foreStarboard: { type: 'Attack', value: 'D4' }, aftPort: { type: 'Attack', value: 'D5' }, aftStarboard: { type: 'Defend', value: 'D3' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Burton',
    immunity: '',
    more: 'No cardinally adjacent craft may Enchant.',
    skill: '',
    impact: '',
  },
  Lacy: {
    rec: 212,
    title: '',
    name: 'Lacy',
    actions: {
      forePort: { type: 'Defend', value: 'D5' }, foreStarboard: { type: 'Attack', value: 'D4' }, aftPort: { type: 'Attack', value: 'D4' }, aftStarboard: { type: 'Attack', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: true, aft: true, aftPort: true, port: false, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: '',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Tisa: {
    rec: 213,
    title: '',
    name: 'Tisa',
    actions: {
      forePort: { type: 'Defend', value: 'D4' }, foreStarboard: { type: 'Fly', value: 'R5' }, aftPort: { type: 'Enchant', value: 'D1 R1' }, aftStarboard: { type: 'Attack', value: 'D3' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: false, aft: false, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: '',
    immunity: '',
    more: 'Defend at +D1 vs Wind.',
    skill: '',
    impact: '',
  },
  Julienne: {
    rec: 214,
    title: '',
    name: 'Julienne',
    actions: {
      forePort: { type: 'Attack', value: 'D2' }, foreStarboard: { type: 'Defend', value: 'D3' }, aftPort: { type: 'Attack', value: 'D2' }, aftStarboard: { type: 'Attack', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: false, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: 'Ricarda',
    immunity: '',
    more: 'Strip game of all banked clock ticks upon defeat.',
    skill: '',
    impact: '',
  },
  Nathanial: {
    rec: 215,
    title: '',
    name: 'Nathanial',
    actions: {
      forePort: { type: 'Attack', value: 'D5' }, foreStarboard: { type: 'Fly', value: 'R3' }, aftPort: { type: 'Fly', value: 'R5' }, aftStarboard: { type: 'Defend', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: 'Lorri',
    immunity: '',
    more: '',
    skill: 'Clockmaker',
    impact: 'All adjacent Punk must rotate once clockwise when placed adjacent.',
  },
  Milan: {
    rec: 216,
    title: '',
    name: 'Milan',
    actions: {
      forePort: { type: 'Attack', value: 'D4' }, foreStarboard: { type: 'Attack', value: 'D2' }, aftPort: { type: 'Attack', value: 'D2' }, aftStarboard: { type: 'Defend', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: false, aft: false, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Fire ',
    cardWeakness: 'Water ',
    archEnemy: 'Kelly',
    immunity: '',
    more: 'May rotate any card on the board once in lieu of turn.',
    skill: '',
    impact: '',
  },
  Liz: {
    rec: 217,
    title: '',
    name: 'Liz',
    actions: {
      forePort: { type: 'Enchant', value: 'D3 R1' }, foreStarboard: { type: 'Attack', value: 'D2' }, aftPort: { type: 'Attack', value: 'D2' }, aftStarboard: { type: 'Attack', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: false, forePort: false,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: 'Dona',
    immunity: '',
    more: 'Adjacent opponent craft (opponents choice) destroyed upon failed attack.',
    skill: '',
    impact: '',
  },
  Linnea: {
    rec: 218,
    title: '',
    name: 'Linnea',
    actions: {
      forePort: { type: 'Attack', value: 'D3' }, foreStarboard: { type: 'Fly', value: 'R3' }, aftPort: { type: 'Defend', value: 'D5' }, aftStarboard: { type: 'Attack', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: '',
    immunity: '',
    more: 'Attack at +D2 vs Lord.',
    skill: 'Coward',
    impact: 'Will never move next to opponent with a title.',
  },
  Glenna: {
    rec: 219,
    title: 'Duke',
    name: 'Glenna',
    actions: {
      forePort: { type: 'Attack', value: 'D4' }, foreStarboard: { type: 'Fly', value: 'R4' }, aftPort: { type: 'Defend', value: 'D3' }, aftStarboard: { type: 'Defend', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: false, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: '',
    immunity: 'Vitiate',
    more: '',
    skill: 'Jungle Explorer',
    impact: 'Attack at +D2 vs Earth on 1in6.',
  },
  Barbie: {
    rec: 220,
    title: '',
    name: 'Barbie',
    actions: {
      forePort: { type: 'Attack', value: 'D3' }, foreStarboard: { type: 'Attack', value: 'D4' }, aftPort: { type: 'Defend', value: 'D3' }, aftStarboard: { type: 'Defend', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: false, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Jeromy',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Roselee: {
    rec: 221,
    title: '',
    name: 'Roselee',
    actions: {
      forePort: { type: 'Attack', value: 'D4' }, foreStarboard: { type: 'Attack', value: 'D4' }, aftPort: { type: 'Attack', value: 'D2' }, aftStarboard: { type: 'Attack', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: false, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: 'Marlys',
    immunity: '',
    more: 'Discard a card (your choice) from your ready upon defeat.',
    skill: 'Apothecary',
    impact: 'All adjacent allied Punks immune to vitiate on 3in6.',
  },
  Ebony: {
    rec: 222,
    title: '',
    name: 'Ebony',
    actions: {
      forePort: { type: 'Attack', value: 'D4' }, foreStarboard: { type: 'Defend', value: 'D3' }, aftPort: { type: 'Fly', value: 'R5' }, aftStarboard: { type: 'Attack', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: false, aft: false, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Fire',
    cardWeakness: 'Water',
    archEnemy: 'Stefany',
    immunity: '',
    more: '',
    skill: 'Sailor',
    impact: 'Can pass across Water while moving, cannot stop on Water.',
  },
  Luz: {
    rec: 223,
    title: 'Sir',
    name: 'Luz',
    actions: {
      forePort: { type: 'Defend', value: 'D3' }, foreStarboard: { type: 'Defend', value: 'D4' }, aftPort: { type: 'Attack', value: 'D3' }, aftStarboard: { type: 'Attack', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: false, aft: false, aftPort: false, port: true, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: 'Carlota',
    immunity: 'Enchant',
    more: 'Immune to Launch.',
    skill: '',
    impact: '',
  },
  Eartha: {
    rec: 224,
    title: 'Lord',
    name: 'Eartha',
    actions: {
      forePort: { type: 'Attack', value: 'D4' }, foreStarboard: { type: 'Fly', value: 'R5' }, aftPort: { type: 'Defend', value: 'D5' }, aftStarboard: { type: 'Attack', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Terra',
    immunity: 'Launch',
    more: '',
    skill: '',
    impact: '',
  },
  Elin: {
    rec: 225,
    title: '',
    name: 'Elin',
    actions: {
      forePort: { type: 'Fly', value: 'R3' }, foreStarboard: { type: 'Attack', value: 'D3' }, aftPort: { type: 'Attack', value: 'D5' }, aftStarboard: { type: 'Defend', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: true, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: '',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Maurita: {
    rec: 226,
    title: '',
    name: 'Maurita',
    actions: {
      forePort: { type: 'Attack', value: 'D3' }, foreStarboard: { type: 'Fly', value: 'R4' }, aftPort: { type: 'Fly', value: 'R3' }, aftStarboard: { type: 'Defend', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: false, forePort: false,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: '',
    immunity: '',
    more: 'Always lose to fire.',
    skill: '',
    impact: '',
  },
  Lashaunda: {
    rec: 227,
    title: '',
    name: 'Lashaunda',
    actions: {
      forePort: { type: 'Fly', value: 'R4' }, foreStarboard: { type: 'Defend', value: 'D2' }, aftPort: { type: 'Attack', value: 'D3' }, aftStarboard: { type: 'Defend', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: false, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Lesa',
    immunity: '',
    more: 'Defend at -D1 vs Fire.',
    skill: '',
    impact: '',
  },
  Su: {
    rec: 228,
    title: 'Fellow',
    name: 'Su',
    actions: {
      forePort: { type: 'Attack', value: 'D2' }, foreStarboard: { type: 'Fly', value: 'R4' }, aftPort: { type: 'Enchant', value: 'D2 R3' }, aftStarboard: { type: 'Defend', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: false, aftPort: false, port: true, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: '',
    immunity: 'Hide',
    more: 'Defend at -D1 vs Lord.',
    skill: '',
    impact: '',
  },
  Audria: {
    rec: 229,
    title: '',
    name: 'Audria',
    actions: {
      forePort: { type: 'Attack', value: 'D2' }, foreStarboard: { type: 'Fly', value: 'R3' }, aftPort: { type: 'Attack', value: 'D5' }, aftStarboard: { type: 'Fly', value: 'R5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: '',
    immunity: '',
    more: 'Show victorious opponent the cards in your Ready upon defeat.',
    skill: '',
    impact: '',
  },
  Annamarie: {
    rec: 230,
    title: 'Esquire',
    name: 'Annamarie',
    actions: {
      forePort: { type: 'Attack', value: 'D4' }, foreStarboard: { type: 'Enchant', value: 'D1 R3' }, aftPort: { type: 'Attack', value: 'D3' }, aftStarboard: { type: 'Defend', value: 'D3' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: false, forePort: false,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: 'Lorean',
    immunity: 'Shoot',
    more: '',
    skill: 'Coal miner',
    impact: 'Defend at +D2 vs Earth on 4in6.',
  },
  Camie: {
    rec: 231,
    title: '',
    name: 'Camie',
    actions: {
      forePort: { type: 'Defend', value: 'D5' }, foreStarboard: { type: 'Enchant', value: 'D1 R1' }, aftPort: { type: 'Defend', value: 'D2' }, aftStarboard: { type: 'Attack', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: false, forePort: false,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: '',
    immunity: '',
    more: 'Cannot attack a General.',
    skill: '',
    impact: '',
  },
  Conchita: {
    rec: 232,
    title: 'Lord',
    name: 'Conchita',
    actions: {
      forePort: { type: 'Attack', value: 'D2' }, foreStarboard: { type: 'Defend', value: 'D2' }, aftPort: { type: 'Attack', value: 'D3' }, aftStarboard: { type: 'Defend', value: 'D3' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: true, forePort: true,
    },
    cardType: 'Fire',
    cardWeakness: 'Water',
    archEnemy: 'Catrina',
    immunity: 'Launch',
    more: '',
    skill: '',
    impact: '',
  },
  Leighann: {
    rec: 233,
    title: '',
    name: 'Leighann',
    actions: {
      forePort: { type: 'Fly', value: 'R4' }, foreStarboard: { type: 'Attack', value: 'D5' }, aftPort: { type: 'Attack', value: 'D3' }, aftStarboard: { type: 'Fly', value: 'R5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: true, aftPort: false, port: false, forePort: false,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: '',
    immunity: '',
    more: 'Cannot attack fire.',
    skill: 'Professor',
    impact: 'All adjacent craft Attack & Defend at -D2.',
  },
  Stephanie: {
    rec: 234,
    title: '',
    name: 'Stephanie',
    actions: {
      forePort: { type: 'Fly', value: 'R4' }, foreStarboard: { type: 'Attack', value: 'D4' }, aftPort: { type: 'Fly', value: 'R4' }, aftStarboard: { type: 'Defend', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: false, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Steven',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Kerry: {
    rec: 235,
    title: '',
    name: 'Kerry',
    actions: {
      forePort: { type: 'Defend', value: 'D5' }, foreStarboard: { type: 'Fly', value: 'R3' }, aftPort: { type: 'Defend', value: 'D4' }, aftStarboard: { type: 'Attack', value: 'D3' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: false, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Fire',
    cardWeakness: 'Water',
    archEnemy: 'Tu',
    immunity: '',
    more: '',
    skill: 'Submariner',
    impact: 'Can pass through Water while moving, cannot stop on Water.',
  },
  Peg: {
    rec: 236,
    title: '',
    name: 'Peg',
    actions: {
      forePort: { type: 'Fly', value: 'R3' }, foreStarboard: { type: 'Fly', value: 'R4' }, aftPort: { type: 'Attack', value: 'D4' }, aftStarboard: { type: 'Attack', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: false, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Leta',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Ellie: {
    rec: 237,
    title: 'Duke',
    name: 'Ellie',
    actions: {
      forePort: { type: 'Fly', value: 'R3' }, foreStarboard: { type: 'Fly', value: 'R5' }, aftPort: { type: 'Fly', value: 'R5' }, aftStarboard: { type: 'Defend', value: 'D4' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: true, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: 'Dwight',
    immunity: 'Vitiate',
    more: 'Defend at +D2 vs Punks with titles.',
    skill: 'Spotter',
    impact: 'Adjacent enemy craft are in range of Shoot or Launch regardless of the distance.',
  },
  Mechelle: {
    rec: 238,
    title: '',
    name: 'Mechelle',
    actions: {
      forePort: { type: 'Defend', value: 'D4' }, foreStarboard: { type: 'Defend', value: 'D3' }, aftPort: { type: 'Fly', value: 'R3' }, aftStarboard: { type: 'Attack', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: 'Teddy',
    immunity: '',
    more: '',
    skill: 'Martyr',
    impact: 'All adjacent Punks destroyed upon defeat.',
  },
  Gertrudis: {
    rec: 239,
    title: 'Sir',
    name: 'Gertrudis',
    actions: {
      forePort: { type: 'Fly', value: 'R5' }, foreStarboard: { type: 'Attack', value: 'D4' }, aftPort: { type: 'Attack', value: 'D5' }, aftStarboard: { type: 'Defend', value: 'D3' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: '',
    immunity: 'Enchant',
    more: '',
    skill: '',
    impact: '',
  },
  Celena: {
    rec: 240,
    title: 'Duke',
    name: 'Celena',
    actions: {
      forePort: { type: 'Fly', value: 'R3' }, foreStarboard: { type: 'Defend', value: 'D4' }, aftPort: { type: 'Attack', value: 'D5' }, aftStarboard: { type: 'Defend', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Tamekia',
    immunity: 'Vitiate',
    more: '',
    skill: '',
    impact: '',
  },
  Lida: {
    rec: 241,
    title: 'Duke',
    name: 'Lida',
    actions: {
      forePort: { type: 'Attack', value: 'D2' }, foreStarboard: { type: 'Attack', value: 'D5' }, aftPort: { type: 'Defend', value: 'D5' }, aftStarboard: { type: 'Fly', value: 'R5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: '',
    immunity: 'Vitiate',
    more: '',
    skill: 'Singer',
    impact: 'Sacrifice self at any time to reveal all hidden craft.',
  },
  Mariel: {
    rec: 242,
    title: 'Esquire',
    name: 'Mariel',
    actions: {
      forePort: { type: 'Attack', value: 'D2' }, foreStarboard: { type: 'Fly', value: 'R5' }, aftPort: { type: 'Attack', value: 'D4' }, aftStarboard: { type: 'Attack', value: 'D3' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: 'Thomas',
    immunity: 'Shoot',
    more: 'Rotates opposing craft clockwise upon successful defend.',
    skill: '',
    impact: '',
  },
  Fredericka: {
    rec: 243,
    title: 'Duke',
    name: 'Fredericka',
    actions: {
      forePort: { type: 'Fly', value: 'R5' }, foreStarboard: { type: 'Enchant', value: 'D2 R3' }, aftPort: { type: 'Defend', value: 'D5' }, aftStarboard: { type: 'Fly', value: 'R4' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: false, forePort: false,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: '',
    immunity: 'Vitiate',
    more: '',
    skill: 'Mad Hatter',
    impact: 'Attack another of your players cards if adjacent on 1in6 with D1.',
  },
  Tran: {
    rec: 244,
    title: '',
    name: 'Tran',
    actions: {
      forePort: { type: 'Attack', value: 'D5' }, foreStarboard: { type: 'Fly', value: 'R3' }, aftPort: { type: 'Defend', value: 'D2' }, aftStarboard: { type: 'Attack', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: '',
    immunity: '',
    more: '',
    skill: 'Butcher',
    impact: 'Defend at +D2 when adjacent to Barber.',
  },
  Albert: {
    rec: 245,
    title: 'Esquire',
    name: 'Albert',
    actions: {
      forePort: { type: 'Defend', value: 'D3' }, foreStarboard: { type: 'Fly', value: 'R3' }, aftPort: { type: 'Defend', value: 'D2' }, aftStarboard: { type: 'Enchant', value: 'D2 R3' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: false, port: false, forePort: false,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: 'Wilber',
    immunity: 'Shoot',
    more: 'Cannot attack water.',
    skill: 'Politician',
    impact: 'Upon successful attack, players general is replaced by first card on ready pile.',
  },
  Jeanmarie: {
    rec: 246,
    title: '',
    name: 'Jeanmarie',
    actions: {
      forePort: { type: 'Fly', value: 'R3' }, foreStarboard: { type: 'Attack', value: 'D3' }, aftPort: { type: 'Defend', value: 'D2' }, aftStarboard: { type: 'Attack', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: '',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Illa: {
    rec: 247,
    title: '',
    name: 'Illa',
    actions: {
      forePort: { type: 'Defend', value: 'D2' }, foreStarboard: { type: 'Attack', value: 'D2' }, aftPort: { type: 'Fly', value: 'R4' }, aftStarboard: { type: 'Attack', value: 'D3' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: 'Quintin',
    immunity: '',
    more: 'Defend at +D1 vs Fire or Air.',
    skill: '',
    impact: '',
  },
  Kyra: {
    rec: 248,
    title: 'Sir',
    name: 'Kyra',
    actions: {
      forePort: { type: 'Defend', value: 'D5' }, foreStarboard: { type: 'Defend', value: 'D2' }, aftPort: { type: 'Defend', value: 'D2' }, aftStarboard: { type: 'Defend', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: false, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: 'Tessie',
    immunity: 'Enchant',
    more: '',
    skill: 'Physicist',
    impact: "Sacrafice self to add +D3 defence to any craft and +D2 attack to it's opponent.",
  },
  Samuel: {
    rec: 249,
    title: '',
    name: 'Samuel',
    actions: {
      forePort: { type: 'Defend', value: 'D5' }, foreStarboard: { type: 'Attack', value: 'D3' }, aftPort: { type: 'Attack', value: 'D2' }, aftStarboard: { type: 'Defend', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: true, aftPort: true, port: false, forePort: false,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: '',
    immunity: '',
    more: '',
    skill: 'Alchemist',
    impact: 'Change one adjacent terrain card from Water to Earth after move.',
  },
  Bonita: {
    rec: 250,
    title: '',
    name: 'Bonita',
    actions: {
      forePort: { type: 'Enchant', value: 'D1 R3' }, foreStarboard: { type: 'Attack', value: 'D4' }, aftPort: { type: 'Attack', value: 'D4' }, aftStarboard: { type: 'Attack', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: 'Odilia',
    immunity: '',
    more: '',
    skill: 'Lycanthrop',
    impact: 'When a Clock Tick remains at end of turn, attack Punk to port on 3in6.',
  },
  Alysha: {
    rec: 251,
    title: 'Esquire',
    name: 'Alysha',
    actions: {
      forePort: { type: 'Attack', value: 'D5' }, foreStarboard: { type: 'Attack', value: 'D4' }, aftPort: { type: 'Attack', value: 'D3' }, aftStarboard: { type: 'Enchant', value: 'D3 R2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: false, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: '',
    immunity: 'Shoot',
    more: '',
    skill: 'Blue-Bottle',
    impact: 'Sacrifices self to cancel adjacent combat, after the attack and defence rolls takes place.',
  },
  Shyla: {
    rec: 252,
    title: '',
    name: 'Shyla',
    actions: {
      forePort: { type: 'Attack', value: 'D2' }, foreStarboard: { type: 'Defend', value: 'D2' }, aftPort: { type: 'Attack', value: 'D4' }, aftStarboard: { type: 'Defend', value: 'D5' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: true, aft: false, aftPort: true, port: true, forePort: true,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: 'Jeri',
    immunity: '',
    more: 'No ordinally adjacent craft may Repair.',
    skill: '',
    impact: '',
  },
  Freddie: {
    rec: 253,
    title: '',
    name: 'Freddie',
    actions: {
      forePort: { type: 'Attack', value: 'D5' }, foreStarboard: { type: 'Attack', value: 'D5' }, aftPort: { type: 'Defend', value: 'D4' }, aftStarboard: { type: 'Defend', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: false, forePort: false,
    },
    cardType: 'Water',
    cardWeakness: 'Wind',
    archEnemy: 'Andree',
    immunity: '',
    more: '',
    skill: 'Fanatic',
    impact: 'Upon Defeat, all adjacent cards are defeated with the exception of Generals.',
  },
  Tomas: {
    rec: 254,
    title: '',
    name: 'Tomas',
    actions: {
      forePort: { type: 'Fly', value: 'R5' }, foreStarboard: { type: 'Attack', value: 'D5' }, aftPort: { type: 'Enchant', value: 'D4 R3' }, aftStarboard: { type: 'Defend', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: false, starboard: false, aftStarboard: false, aft: false, aftPort: false, port: false, forePort: true,
    },
    cardType: 'Earth',
    cardWeakness: 'Fire',
    archEnemy: '',
    immunity: '',
    more: '',
    skill: '',
    impact: '',
  },
  Delicia: {
    rec: 255,
    title: '',
    name: 'Delicia',
    actions: {
      forePort: { type: 'Attack', value: 'D4' }, foreStarboard: { type: 'Defend', value: 'D3' }, aftPort: { type: 'Attack', value: 'D4' }, aftStarboard: { type: 'Attack', value: 'D2' },
    },
    movement: {
      fore: true, foreStarboard: true, starboard: true, aftStarboard: false, aft: false, aftPort: false, port: true, forePort: true,
    },
    cardType: 'Wind',
    cardWeakness: 'Earth',
    archEnemy: 'Palmira',
    immunity: '',
    more: 'Remove card from board upon defeat.',
    skill: '',
    impact: '',
  },
});

// CONCATENATED MODULE: ./src/Cards/CardObjectType.js
/**
 * @typedef {Object} CardJson
 * @property {number} rec
 * @property {string} title
 * @property {string} name
 * @property {Object} actions
 * @property {Object} actions.forePort
 * @property {string} actions.forePort.type
 * @property {string} actions.forePort.value
 * @property {Object} actions.foreStarboard
 * @property {string} actions.foreStarboard.type
 * @property {string} actions.foreStarboard.value
 * @property {Object} actions.aftPort
 * @property {string} actions.aftPort.type
 * @property {string} actions.aftPort.value
 * @property {Object} actions.aftStarboard
 * @property {string} actions.aftStarboard.type
 * @property {string} actions.aftStarboard.value
 * @property {Object} movement
 * @property {boolean} movement.fore
 * @property {boolean} movement.foreStarboard
 * @property {boolean} movement.starboard
 * @property {boolean} movement.aftStarboard
 * @property {boolean} movement.aft
 * @property {boolean} movement.aftPort
 * @property {boolean} movement.port
 * @property {boolean} movement.forePort
 * @property {string} cardType
 * @property {string} cardWeakness
 * @property {string} archEnemy
 * @property {string} immunity
 * @property {string} more
 * @property {string} skill
 * @property {string} impact
 */

/* harmony default export */ var CardObjectType = ({});

// CONCATENATED MODULE: ./src/modules/CharacterSheets.js
// This file was designed by Mike Lakner


// eslint-disable-next-line no-unused-vars


/** @typedef {import('Cards/CardObjectType').CardJson} CardJson */

// eslint-disable-next-line max-len
const defaultGraphic = 'https://s3.amazonaws.com/files.d20.io/images/141291438/6TAoheVCteGgoN4BW3tmzA/original.png?15914477175';

/**
 * @returns {void}
 */
function mbRebuildAllCharacterSheets() {
  const cardCount = Object.keys(Cards_Object).length;
  sendChat('API !-mb', '/w gm Start: mbRebuildAllCharacterSheets()');
  sendChat('API !-mb', `/w gm Building ${cardCount} cards.`);

  Object.values(Cards_Object).forEach((/** @type {CardJson} */card) => {
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
  let allCardActions = Object.keys(actions).map((direction) => actions[direction].type);

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
function mbPurgeAllCharacterSheets() {
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

// CONCATENATED MODULE: ./src/Commands/InitCommand.js
/**
 * @namespace App.Commands
 */





class InitCommand_InitCommand extends Command {
  constructor() {
    super();

    this.cmd = 'init';
    this.desc = 'Init command for various game systems such as State.';
    this.func = this.runSubCommand;
    /**
     * @param {string} who - layer's human name
     * @param {string} playerId - reference of the player
     * @param {string[]} args - arguments for the command
     */
    // eslint-disable-next-line no-unused-vars
    this.help = (who, playerId, args) => {
      sendChat(
        'Mine Ball Help',
        `/w ${who}
        <p>Init GameState - Initializes the game state to it's initial values.</p>
        <p>Init Cards - Rebuilds the game cards.</p>
        `,
      );
    };

    this.subCommands = {
      gamestate: {
        gmOnly: false,
        internal: false,
        func: mbResetGameState,
        paramList: [],
      },
      cards: {
        gmOnly: false,
        internal: false,
        func: mbRebuildAllCharacterSheets,
        paramList: [],
      },
    };
  }
}

// CONCATENATED MODULE: ./src/Commands/ShowCommand.js
/**
 * @namespace App.Commands
 */




class ShowCommand_ShowCommand extends Command {
  constructor() {
    super();

    this.cmd = 'show';
    this.desc = 'Show command for various game data such as state.';
    this.func = this.runSubCommand;
    /**
     * @param {string} who - layer's human name
     * @param {string} playerId - reference of the player
     * @param {string[]} args - arguments for the command
     */
    // eslint-disable-next-line no-unused-vars
    this.help = (who, playerId, args) => {
      sendChat(
        'Mine Ball Help',
        `/w ${who}
        <p>Show GameState - Dump the game state to the chat window.</p>
        <p>Show SavedGames - Show all of the previously saved games.</p>
        `,
      );
    };

    this.subCommands = {
      gamestate: {
        gmOnly: false,
        internal: false,
        func: mbShowGameState,
        paramList: [],
      },
      savedgames: {
        gmOnly: false,
        internal: false,
        func: log('*** SavedGames still needs to be implimented.'),
        paramList: [],
      },
    };
  }
}

// CONCATENATED MODULE: ./src/Commands/Library.js









/** @type {Object.<string, Command>} */
const commandList = {};

const helpCommand = new HelpCommand_HelpCommand(commandList);
commandList[helpCommand.cmd] = helpCommand;
const emblemCommand = new EmblemCommand_EmblemCommand();
commandList[emblemCommand.cmd] = emblemCommand;
const whoAmICommand = new WhoAmICommand_WhoAmICommand();
commandList[whoAmICommand.cmd] = whoAmICommand;
const resetPlayersCommand = new ResetPlayersCommand_ResetPlayersCommand();
commandList[resetPlayersCommand.cmd] = resetPlayersCommand;
const startCommand = new StartCommand_StartCommand();
commandList[startCommand.cmd] = startCommand;
const initCommand = new InitCommand_InitCommand();
commandList[initCommand.cmd] = initCommand;
const showCommand = new ShowCommand_ShowCommand();
commandList[showCommand.cmd] = showCommand;

/**
 * @param {string} pluginCommandRef
 * @param {string} command
 * @param {string[]} args
 * @param {string} who
 * @param {string} playerId
 */
function RunCommand(pluginCommandRef, command, args, who, playerId) {
  switch (command) {
    case emblemCommand.cmd:
      // We'll want to overwrite the players, in case there were any changes
      emblemCommand.func(who, playerId, args);
      break;
    case whoAmICommand.cmd:
      whoAmICommand.func(who, playerId);
      break;
    case resetPlayersCommand.cmd:
      if (pluginCommandRef !== apiCommandId) {
        return;
      }
      resetPlayersCommand.func();
      break;
    case startCommand.cmd:
      startCommand.func(who, playerId, args);
      break;
    case initCommand.cmd:
      initCommand.func(who, playerId, args);
      break;
    case showCommand.cmd:
      showCommand.func(who, playerId, args);
      break;
    case helpCommand.cmd:
    default:
      helpCommand.func(who);
  }
}

// CONCATENATED MODULE: ./src/MineBall.js






// import { CommandDispatchInit } from 'App/Temp/CommandDispatch';


/** @type {Object.<string, Graphic>} */
const cardsEnteringTheBoard = {};

/**
 * @param {ChatEventData} msg - Roll20 defined object
 * @returns {void}
 */
function handleInput(msg) {
  if (msg.type !== 'api') {
    return;
  }

  /** @type {Array} */
  const args = msg.content.split(/\s+/);

  const pluginCommand = args.shift();
  const isMineballCommand = pluginCommand === `!${playerCommandId}` || pluginCommand === `!${apiCommandId}`;
  // Check if this is a MineBall directed command
  if (!isMineballCommand || args.length === 0) {
    return;
  }

  /** @type {string} */
  const who = (getObj('player', msg.playerid) || { get: () => 'API' }).get('_displayname');
  /** @type {string} */
  const playerId = msg.playerid;

  const cmdRef = args.shift().toLowerCase();
  RunCommand(pluginCommand, cmdRef, args, who, playerId, msg);
}

/**
 * @param {Graphic} token - current state of the token. Protected, so require `.get` and such.
 * @param {Object} previousState - previous state of the token. Unprotected, so can directly access properties
 * @returns {void}
 */
// eslint-disable-next-line no-unused-vars
function handleTokenMovement(token, previousState) {}

/**
 * @param {Graphic} token - current state of the token. Protected, so require `.get` and such.
 * @param {Object} previousState - previous state of the token. Unprotected, so can directly access properties
 * @returns {void}
 */
// eslint-disable-next-line no-unused-vars
function handleCardMovement(token, previousState) {}

/**
 * @param {Roll20Object} card - current state of the token. Protected, so require `.get` and such.
 * @returns {void}
 */
function handleNewCard(card) {
  const cardId = card.get('_cardid');
  /** @type {Graphic} */
  const roll20Card = findObjs({ type: 'card', id: cardId })[0];

  if (cardId && typeof roll20Card !== 'undefined') {
    if (!(cardId in cardsEnteringTheBoard)) {
      cardsEnteringTheBoard[cardId] = roll20Card;
      log(['In the Handle New Card', roll20Card]);
    }
  }
}

/**
 * @param {Roll20Object} obj - Current state of the player's hand
 * @param {Object} prev - Previous state of the player's hand
 * @returns {void}
 */
function handleHandChange(obj, prev) {
  // if card was played to table, set owner and remove reference, else add to cardPlayers
  const previousHandState = prev.currentHand.split(/,/);
  const currentHandState = obj.get('currentHand').split(/,/);
  // Look for the card that did exist the previous state, but not the current state
  const cardId = previousHandState.find((id) => !currentHandState.includes(id));

  if (cardId && typeof cardsEnteringTheBoard[cardId] !== 'undefined') {
    const playerId = obj.get('parentid');
    const roll20Card = cardsEnteringTheBoard[cardId];
    const players = getPlayers();
    delete cardsEnteringTheBoard[cardId];

    if (typeof players[playerId] !== 'undefined') {
      // eslint-disable-next-line no-unused-vars
      const player = players[String(playerId)];
      const cardName = roll20Card.get('_name');
      /** @type {Character} */
      const roll20Chars = findObjs({ _type: 'character', name: cardName });
      log(['In the Player Section', roll20Chars]);

      if (roll20Chars.length > 0) {
        const charId = roll20Chars[0].get('_id');
        const tokens = findObjs({ type: 'graphic', subtype: 'token' })
          .filter((token) => (token.get('represents') === charId));
        log(['In the Token Section', tokens]);

        if (tokens.length > 0) {
          const token = tokens[0];
          log(['Found the token: ', token]);

          // Set the emblem on to token, for the given player
          token.set('statusmarkers', [player.getEmblem().name]);
        }

        createObj('attribute', {
          characterid: charId,
          name: 'player_id',
          current: playerId,
        });
      }
    }
  }
}

on('ready', () => {
  if (typeof state.MineBall === 'undefined') {
    const players = getPlayers();
    state.MineBall = {
      version: 1.0,
      players,
    };
  } else {
    deserializePlayerObject(state.MineBall.players || {});
  }

  mbSetupGameState();
  TokenListeners();
  CardAddInit();
  // CommandDispatchInit();
  EmblemBuildInit();

  on('chat:message', handleInput);
  on('change:graphic', handleTokenMovement);
  on('change:card', handleCardMovement);
  on('add:card', handleNewCard);
  on('change:hand', handleHandChange);
});


/***/ })
/******/ ]);