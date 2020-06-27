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
    const subCmdRef = args.shift().toLowerCase();
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

// CONCATENATED MODULE: ./src/Commands/CommandLibrary.js






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
    case helpCommand.cmd:
    default:
      helpCommand.func(who);
  }
}

// CONCATENATED MODULE: ./src/Graphics/Lib.js

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

  // Now ensure it looks and is where we want.
  // handleGraphicChange(newObj);
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
    'objects',
  );
    // Bring it to the front
  toFront(theReticle);
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
  createTableGraphic(
    obj.get('name'),
    obj.get('imgsrc'),
    obj.get('left'),
    obj.get('top'),
    obj.get('height'),
    obj.get('width'),
    'objects',
  );
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
 */
function mbPlaceTerrain(theType, theLeft, theTop) {
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
    // Bring it to the front
  toFront(theTerrain);
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
  createTableGraphic(
    'Background',
    backgroundObj[0].get('avatar'),
    1050,
    1050,
    2100,
    2100,
    'map',
  );
  // Reset the AmBusy flag
  state.mbBR549.AmBusy = wasBusy;
  state.mbBR549.AllowDelete = wasAllowDelete;
  state.mbBR549.Manual = wasManual;
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
  // Create the object
  createTableGraphic(
    cardName,
    obj.get('imgsrc'),
    obj.get('left'),
    obj.get('top'),
    obj.get('height'),
    obj.get('width'),
    theLayer,
  );
  // Remove the actual card
  setTimeout(() => obj.remove(), 100);
  // Link the card to the player
  // eslint-disable-next-line no-unused-vars
  // const playerID = linkCardToPlayer(obj);
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