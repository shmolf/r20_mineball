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

// CONCATENATED MODULE: ./src/modules/Loop.js
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

// CONCATENATED MODULE: ./src/modules/Reticle.js
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

// CONCATENATED MODULE: ./src/modules/Graphics.js

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

const handleGraphicChange = (obj) => {
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
  const newGridLeft = Math.floor(obj.get('left') / mySize);
  const newGridTop = Math.floor(obj.get('top') / mySize);
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
function Graphics_createTableGraphic(theName, theImage, theLeft, theTop, theHeight, theWidth, theLayer) {
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

// CONCATENATED MODULE: ./src/modules/Tokens.js
// -----
// This module was added by Mike Lakner to house the generic code supporting game tokens.
// -----



const handleGraphicDestruction = (obj, prevObj) => {
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
  log(`Peek${obj.get('left')}/${obj.get('top')}`);
  if (mbIsSomethingHere(obj.get('left'), obj.get('top')) === true) {
    // Yes, so back out
    setTimeout(() => giveCardToPlayer(theCardID, thePlayerID), 1000);
    // Remove the actual card
    setTimeout(() => obj.remove(), 100);
    return;
  }
  // Create the object
  Graphics_createTableGraphic(
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

// CONCATENATED MODULE: ./src/Cards/Library.js
/* eslint-disable max-len */
// Set up the virgin card data object.
/* harmony default export */ var Library = ({
  mbCARDDATA:
  [
    [
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
    ],
    [
      1,
      7573,
      'Candelaria',
      'Y',
      'Attack',
      'D4',
      'Fly',
      'R5',
      'Attack',
      'D3',
      'Fly',
      'R5',
      'Y',
      'Y',
      'N',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Fire',
      'Water',
      'Ludivina',
      '',
      '',
      '',
      'Freemason',
      'Attact at +D2 vs Earth.',
    ],
    [
      2,
      2631,
      'Ezequiel',
      'Y',
      'Attack',
      'D4',
      'Defend',
      'D5',
      'Attack',
      'D5',
      'Defend',
      'D5',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'Water',
      'Earth',
      'Gaynell',
      '',
      '',
      '',
      'Timekeeper',
      'No banked clock ticks may be spent wile this craft is deployed.',
    ],
    [
      3,
      1046,
      'Eldridge',
      'Y',
      'Attack',
      'D3',
      'Defend',
      'D3',
      'Defend',
      'D5',
      'Fly',
      'R4',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Wind',
      'Earth',
      'Harriette',
      'Sir',
      'Enchant',
      'No adjacent craft may Launch.',
      'Submariner',
      'Can pass through Water while moving, cannot stop on Water.',
    ],
    [
      4,
      9630,
      'Lory',
      'Y',
      'Defend',
      'D3',
      'Attack',
      'D2',
      'Attack',
      'D3',
      'Defend',
      'D4',
      'Y',
      'Y',
      'N',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Earth',
      'Fire',
      'Olen',
      'Sir',
      'Enchant',
      '',
      'Chimney Sweep',
      'Cannot be launched over.',
    ],
    [
      5,
      3709,
      'Earleen',
      'Y',
      'Attack',
      'D4',
      'Attack',
      'D4',
      'Defend',
      'D4',
      'Enchant',
      'D2 R1',
      'Y',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'N',
      'N',
      'Fire ',
      'Water ',
      '',
      '',
      '',
      'Always lose to fire.',
      '',
      '',
    ],
    [
      6,
      1922,
      'Cuc',
      'Y',
      'Defend',
      'D3',
      'Attack',
      'D2',
      'Attack',
      'D3',
      'Attack',
      'D5',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'Y',
      'Water',
      'Wind',
      'Elva',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      7,
      1436,
      'Natisha',
      'Y',
      'Defend',
      'D5',
      'Defend',
      'D2',
      'Defend',
      'D4',
      'Enchant',
      'D4 R3',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'N',
      'Y',
      'Water',
      'Wind',
      '',
      '',
      '',
      '',
      'Bird Hunter',
      'Attack at +D2 vs any craft with Fly.',
    ],
    [
      8,
      726,
      'Molly',
      'Y',
      'Attack',
      'D5',
      'Defend',
      'D2',
      'Enchant',
      'D4 R3',
      'Attack',
      'D5',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'Earth',
      'Fire',
      'Hassie',
      '',
      '',
      'Always defeat a General upon Attack of that General.',
      'Lycanthrop',
      'When a Clock Tick remains at end of turn, attack aft Punk on 2in6.',
    ],
    [
      9,
      1385,
      'Tonisha',
      'Y',
      'Attack',
      'D3',
      'Fly',
      'R5',
      'Enchant',
      'D1 R1',
      'Defend',
      'D4',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'Wind',
      'Earth',
      'Chaya',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      10,
      4117,
      'Oma',
      'Y',
      'Fly',
      'R5',
      'Attack',
      'D3',
      'Enchant',
      'D1 R1',
      'Defend',
      'D4',
      'Y',
      'N',
      'N',
      'N',
      'Y',
      'N',
      'N',
      'Y',
      'Wind',
      'Earth',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      11,
      6103,
      'Kristy',
      'Y',
      'Defend',
      'D4',
      'Fly',
      'R3',
      'Attack',
      'D2',
      'Attack',
      'D4',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'Wind',
      'Earth',
      'Aurelio',
      '',
      '',
      'Rotates opposing craft clockwise upon successful defend.',
      '',
      '',
    ],
    [
      12,
      2312,
      'Miss',
      'Y',
      'Defend',
      'D3',
      'Attack',
      'D2',
      'Defend',
      'D2',
      'Defend',
      'D4',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'Y',
      'Y',
      'Y',
      'Earth',
      'Fire',
      'Shantell',
      '',
      '',
      'Defend at +D2 vs Punks with titles.',
      'Martyr',
      'All adjacent Punks destroyed upon defeat.',
    ],
    [
      13,
      3441,
      'Zena',
      'Y',
      'Attack',
      'D4',
      'Defend',
      'D4',
      'Attack',
      'D4',
      'Defend',
      'D5',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'N',
      'Y',
      'Water',
      'Wind',
      'Jannet',
      'Lord',
      'Launch',
      'Immune to Launch.',
      '',
      '',
    ],
    [
      14,
      3755,
      'Taryn',
      'Y',
      'Fly',
      'R3',
      'Defend',
      'D5',
      'Attack',
      'D4',
      'Attack',
      'D3',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'N',
      'Wind',
      'Earth',
      'Wai',
      '',
      '',
      'Defend at -D1 vs Sir.',
      'Alchemist',
      'Change one adjacent terrain card from Water to Earth after move.',
    ],
    [
      15,
      3761,
      'Janene',
      'Y',
      'Attack',
      'D5',
      'Attack',
      'D3',
      'Attack',
      'D5',
      'Defend',
      'D3',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'N',
      'Y',
      'Earth',
      'Fire',
      'Kaylee',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      16,
      6480,
      'Lloyd',
      'Y',
      'Fly',
      'R3',
      'Attack',
      'D5',
      'Attack',
      'D2',
      'Attack',
      'D2',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'N',
      'N',
      'Y',
      'Earth',
      'Fire',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      17,
      3883,
      'Houston',
      'Y',
      'Attack',
      'D3',
      'Fly',
      'R5',
      'Defend',
      'D5',
      'Defend',
      'D2',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Water',
      'Wind',
      'Jacelyn',
      '',
      '',
      'Attack at +D1 vs Duke.',
      'Lycanthrop',
      'When a Clock Tick remains at end of turn, attack aft Punk on 2in6.',
    ],
    [
      18,
      5330,
      'Milagro',
      'Y',
      'Attack',
      'D2',
      'Fly',
      'R3',
      'Attack',
      'D3',
      'Fly',
      'R5',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'Wind',
      'Earth',
      '',
      '',
      '',
      '',
      'Miner',
      'Can pass through Earth while moving, cannot stop on Earth.',
    ],
    [
      19,
      1147,
      'Jaimee',
      'Y',
      'Attack',
      'D5',
      'Defend',
      'D2',
      'Attack',
      'D4',
      'Defend',
      'D3',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Wind',
      'Earth',
      '',
      '',
      '',
      'Force opponent to swap one of their craft from the table with a craft from their Ready upon victory.',
      '',
      '',
    ],
    [
      20,
      685,
      'Floretta',
      'Y',
      'Fly',
      'R5',
      'Defend',
      'D3',
      'Defend',
      'D5',
      'Fly',
      'R5',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'Earth',
      'Fire',
      'Rachell',
      '',
      '',
      '',
      'Martyr',
      'All adjacent Punks destroyed upon defeat.',
    ],
    [
      21,
      9102,
      'Antione',
      'Y',
      'Attack',
      'D5',
      'Attack',
      'D4',
      'Attack',
      'D4',
      'Attack',
      'D2',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'Y',
      'Wind',
      'Earth',
      '',
      'Esquire',
      'Shoot',
      'Always defeat a General upon Attack of that General.',
      'Doctor',
      'May sacrafice self to repair allied Punk killed on current turn, excluding General.',
    ],
    [
      22,
      1703,
      'Ellsworth',
      'Y',
      'Attack',
      'D5',
      'Attack',
      'D4',
      'Defend',
      'D3',
      'Defend',
      'D5',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Water',
      'Wind',
      '',
      '',
      '',
      '',
      'Alchemist',
      'Change adjacent terrain card from Eatch to Water.',
    ],
    [
      23,
      2698,
      'Maryjo',
      'Y',
      'Fly',
      'R4',
      'Attack',
      'D4',
      'Defend',
      'D4',
      'Fly',
      'R4',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Earth',
      'Fire',
      '',
      '',
      '',
      'All deployed craft rotate once counter clockwise upon defeat.',
      '',
      '',
    ],
    [
      24,
      9417,
      'Sharla',
      'Y',
      'Attack',
      'D5',
      'Fly',
      'R3',
      'Fly',
      'R5',
      'Attack',
      'D4',
      'Y',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'N',
      'Y',
      'Wind',
      'Earth',
      '',
      'Duke',
      'Vitiate',
      '',
      'Jungle Explorer',
      'Attack at +D2 vs Earth on 1in6.',
    ],
    [
      25,
      3876,
      'Pearline',
      'Y',
      'Fly',
      'R3',
      'Attack',
      'D5',
      'Attack',
      'D5',
      'Defend',
      'D4',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Water',
      'Wind',
      '',
      '',
      '',
      'Defend at +D1 vs Wind.',
      'Chimney Sweep',
      'Cannot be jumped over.',
    ],
    [
      26,
      1405,
      'Harrison',
      'Y',
      'Defend',
      'D5',
      'Defend',
      'D3',
      'Defend',
      'D3',
      'Defend',
      'D5',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'Earth',
      'Fire',
      'Ema',
      '',
      '',
      'Cannot be enchanted.',
      '',
      '',
    ],
    [
      27,
      5559,
      'Dulcie',
      'Y',
      'Attack',
      'D5',
      'Enchant',
      'D2 R1',
      'Enchant',
      'D2 R2',
      'Enchant',
      'D4 R2',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'Water',
      'Wind',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      28,
      5222,
      'Fatima',
      'Y',
      'Fly',
      'R3',
      'Defend',
      'D4',
      'Attack',
      'D3',
      'Fly',
      'R5',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Fire',
      'Water',
      '',
      '',
      '',
      '',
      'Butcher',
      'Defend at +D1 when adjacent to Barber.',
    ],
    [
      29,
      4865,
      'Roman',
      'Y',
      'Enchant',
      'D2 R1',
      'Defend',
      'D4',
      'Attack',
      'D2',
      'Enchant',
      'D3 R1',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'N',
      'Y',
      'Earth',
      'Fire',
      'Neomi',
      '',
      '',
      '',
      'Freemason',
      'Defend at +D2 vs Earth.',
    ],
    [
      30,
      6948,
      'Elane',
      'Y',
      'Defend',
      'D3',
      'Attack',
      'D5',
      'Attack',
      'D4',
      'Attack',
      'D4',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'N',
      'Fire ',
      'Water ',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      31,
      6277,
      'Sharonda',
      'Y',
      'Fly',
      'R4',
      'Attack',
      'D5',
      'Defend',
      'D3',
      'Defend',
      'D4',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'Water',
      'Wind',
      'William',
      'Esquire',
      'Shoot',
      '',
      '',
      '',
    ],
    [
      32,
      8742,
      'Earlie',
      'Y',
      'Enchant',
      'D1 R1',
      'Defend',
      'D3',
      'Attack',
      'D4',
      'Attack',
      'D2',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'N',
      'N',
      'N',
      'Earth',
      'Fire',
      'Lizabeth',
      'Duke',
      'Vitiate',
      'Defend at +D1 vs Air.',
      'Freemason',
      'Attact at +D2 vs Earth.',
    ],
    [
      33,
      4901,
      'Hedwig',
      'Y',
      'Defend',
      'D2',
      'Attack',
      'D2',
      'Defend',
      'D5',
      'Fly',
      'R5',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Water',
      'Wind',
      'Barrett',
      'Lord',
      'Launch',
      '',
      'Loyal Servant',
      'Sacrifice self to trade place with General.',
    ],
    [
      34,
      829,
      'Sheila',
      'Y',
      'Defend',
      'D5',
      'Defend',
      'D2',
      'Enchant',
      'D2 R3',
      'Fly',
      'R3',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Fire',
      'Water',
      '',
      '',
      '',
      'Defend at +D1 vs Fire.',
      '',
      '',
    ],
    [
      35,
      1512,
      'Marcus',
      'Y',
      'Defend',
      'D4',
      'Attack',
      'D5',
      'Fly',
      'R4',
      'Enchant',
      'D4 R2',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Wind',
      'Earth',
      'Melodee',
      'Lord',
      'Launch',
      '',
      'Spouse',
      'Time passes slowly, lose one clock tick on movement and +D2 attack ve same affinity..',
    ],
    [
      36,
      6106,
      'Alvin',
      'Y',
      'Attack',
      'D4',
      'Attack',
      'D4',
      'Defend',
      'D3',
      'Defend',
      'D4',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Wind',
      'Earth',
      'Deshawn',
      '',
      '',
      'Is hidden to Water.',
      '',
      '',
    ],
    [
      37,
      1331,
      'Jamika',
      'Y',
      'Fly',
      'R3',
      'Defend',
      'D2',
      'Enchant',
      'D1 R2',
      'Defend',
      'D2',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Earth',
      'Fire',
      '',
      'Esquire',
      'Shoot',
      'Discard a card (victors choice) from your ready upon defeat.',
      'Fire Fighter',
      'On move, change adjacent terrain cards from Fire to Earth on 3in6.',
    ],
    [
      38,
      7128,
      'Isreal',
      'Y',
      'Defend',
      'D2',
      'Attack',
      'D4',
      'Attack',
      'D4',
      'Attack',
      'D3',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'Wind',
      'Earth',
      'Bryon',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      39,
      1140,
      'Vivien',
      'Y',
      'Defend',
      'D2',
      'Defend',
      'D2',
      'Fly',
      'R4',
      'Attack',
      'D2',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'Wind',
      'Earth',
      'Ashli',
      'Sir',
      'Enchant',
      '',
      'Spotter',
      'Adjacent enemy craft are in range of Shoot or Launch regardless of the distance.',
    ],
    [
      40,
      5757,
      'Romaine',
      'Y',
      'Enchant',
      'D1 R2',
      'Defend',
      'D4',
      'Attack',
      'D3',
      'Fly',
      'R5',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'N',
      'N',
      'Y',
      'Wind',
      'Earth',
      '',
      '',
      '',
      'Defend at +D1 vs Earth or Water.',
      '',
      '',
    ],
    [
      41,
      2046,
      'Beckie',
      'Y',
      'Attack',
      'D4',
      'Enchant',
      'D4 R1',
      'Defend',
      'D5',
      'Defend',
      'D4',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Water',
      'Wind',
      '',
      '',
      '',
      'Defend at -D2 vs Punks with titles.',
      'Oracle',
      'Upon defeat, look at top 4 cards of opponents stack.',
    ],
    [
      42,
      5794,
      'Leena',
      'Y',
      'Defend',
      'D3',
      'Enchant',
      'D3 R2',
      'Defend',
      'D5',
      'Defend',
      'D5',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'Earth',
      'Fire',
      'Ambrose',
      '',
      '',
      'Defend at +D1 vs Fire or Air.',
      'Chimney Sweep',
      'Cannot be launched over.',
    ],
    [
      43,
      2669,
      'Lynwood',
      'Y',
      'Defend',
      'D3',
      'Enchant',
      'D1 R3',
      'Attack',
      'D3',
      'Attack',
      'D4',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'N',
      'Y',
      'Wind',
      'Earth',
      '',
      'Duke',
      'Vitiate',
      'No adjacent craft may rotate.',
      '',
      '',
    ],
    [
      44,
      6974,
      'Davina',
      'Y',
      'Attack',
      'D3',
      'Defend',
      'D4',
      'Defend',
      'D4',
      'Defend',
      'D5',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Earth',
      'Fire',
      '',
      '',
      '',
      '',
      'Bird Hunter',
      'Attack at +D2 vs Wind on 3in6.',
    ],
    [
      45,
      3270,
      'Gertie',
      'Y',
      'Fly',
      'R4',
      'Attack',
      'D3',
      'Attack',
      'D4',
      'Attack',
      'D5',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Wind',
      'Earth',
      '',
      'Duke',
      'Vitiate',
      '',
      '',
      '',
    ],
    [
      46,
      2849,
      'Brianne',
      'Y',
      'Defend',
      'D3',
      'Defend',
      'D3',
      'Fly',
      'R4',
      'Enchant',
      'D2 R2',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'Wind',
      'Earth',
      'Derek',
      'Lord',
      'Launch',
      '',
      '',
      '',
    ],
    [
      47,
      8445,
      'China',
      'Y',
      'Enchant',
      'D1 R3',
      'Fly',
      'R5',
      'Fly',
      'R3',
      'Enchant',
      'D4 R1',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Earth',
      'Fire',
      'Twana',
      'Esquire',
      'Shoot',
      '',
      '',
      '',
    ],
    [
      48,
      4955,
      'Sally',
      'Y',
      'Attack',
      'D5',
      'Fly',
      'R4',
      'Defend',
      'D3',
      'Attack',
      'D3',
      'Y',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Y',
      'Earth',
      'Fire',
      'Lin',
      'Esquire',
      'Shoot',
      '',
      '',
      '',
    ],
    [
      49,
      9756,
      'Sue',
      'Y',
      'Defend',
      'D2',
      'Fly',
      'R3',
      'Defend',
      'D5',
      'Attack',
      'D2',
      'Y',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Y',
      'Fire',
      'Water',
      'Eilene',
      '',
      '',
      '',
      'Fire Fighter',
      'On move, change adjacent terrain cards from Fire to Earth on 3in6.',
    ],
    [
      50,
      6745,
      'Justin',
      'Y',
      'Defend',
      'D4',
      'Defend',
      'D4',
      'Attack',
      'D2',
      'Attack',
      'D4',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'N',
      'Y',
      'Earth',
      'Fire',
      'Ernest',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      51,
      6263,
      'Octavia',
      'Y',
      'Defend',
      'D3',
      'Attack',
      'D3',
      'Attack',
      'D4',
      'Attack',
      'D3',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Wind',
      'Earth',
      '',
      'Duke',
      'Vitiate',
      '',
      '',
      '',
    ],
    [
      52,
      6450,
      'Eryn',
      'Y',
      'Enchant',
      'D3 R3',
      'Defend',
      'D4',
      'Fly',
      'R5',
      'Attack',
      'D2',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Earth',
      'Fire',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      53,
      4226,
      'Charlotte',
      'Y',
      'Defend',
      'D5',
      'Attack',
      'D5',
      'Enchant',
      'D3 R3',
      'Attack',
      'D3',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Water',
      'Wind',
      '',
      '',
      '',
      '',
      'Chimney Sweep',
      'Cannot be jumped over.',
    ],
    [
      54,
      1862,
      'Lavonna',
      'Y',
      'Fly',
      'R4',
      'Enchant',
      'D3 R1',
      'Defend',
      'D3',
      'Attack',
      'D3',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'Wind',
      'Earth',
      '',
      'Esquire',
      'Shoot',
      '',
      '',
      '',
    ],
    [
      55,
      5190,
      'Bryon',
      'Y',
      'Attack',
      'D2',
      'Defend',
      'D3',
      'Attack',
      'D5',
      'Attack',
      'D5',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Water',
      'Wind',
      'Elroy',
      '',
      '',
      'Defend at -D1 vs Air.',
      'Chimney Sweep',
      'Cannot be jumped over.',
    ],
    [
      56,
      3255,
      'Sachiko',
      'Y',
      'Attack',
      'D3',
      'Fly',
      'R4',
      'Defend',
      'D5',
      'Fly',
      'R3',
      'Y',
      'Y',
      'N',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'Water',
      'Wind',
      'Dennise',
      'Lord',
      'Launch',
      '',
      'Lycanthrop',
      'When a Clock Tick remains at end of turn, attack Punk to starboard on 5in6.',
    ],
    [
      57,
      3213,
      'Hildegard',
      'Y',
      'Enchant',
      'D2 R1',
      'Attack',
      'D4',
      'Defend',
      'D3',
      'Fly',
      'R3',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Water',
      'Wind',
      'India',
      'Lord',
      'Launch',
      'Strip game of all banked clock ticks upon defeat.',
      '',
      '',
    ],
    [
      58,
      9923,
      'Keva',
      'Y',
      'Fly',
      'R5',
      'Enchant',
      'D1 R2',
      'Fly',
      'R5',
      'Enchant',
      'D4 R1',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Wind',
      'Earth',
      'Consuela',
      'Sir',
      'Enchant',
      'Opponent attacks craft upon a tie.',
      '',
      '',
    ],
    [
      59,
      7508,
      'Youlanda',
      'Y',
      'Fly',
      'R5',
      'Enchant',
      'D3 R1',
      'Fly',
      'R4',
      'Defend',
      'D4',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'Wind',
      'Earth',
      'Karoline',
      '',
      '',
      '',
      'Clergy',
      'Adjacent allied crafy immune to enchant on 3in6.',
    ],
    [
      60,
      1958,
      'Mo',
      'Y',
      'Attack',
      'D2',
      'Defend',
      'D5',
      'Attack',
      'D3',
      'Attack',
      'D5',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Wind',
      'Earth',
      '',
      'Esquire',
      'Shoot',
      'Sacrafice this craft to block an enemy deployment for one turn.',
      '',
      '',
    ],
    [
      61,
      6456,
      'Toby',
      'Y',
      'Attack',
      'D3',
      'Defend',
      'D5',
      'Defend',
      'D5',
      'Defend',
      'D4',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'N',
      'Y',
      'Water',
      'Wind',
      'Guadalupe',
      'Sir',
      'Enchant',
      'Is hidden to Fire.',
      '',
      '',
    ],
    [
      62,
      1875,
      'Shae',
      'Y',
      'Enchant',
      'D1 R2',
      'Attack',
      'D4',
      'Enchant',
      'D4 R1',
      'Defend',
      'D3',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'N',
      'Y',
      'Water',
      'Wind',
      '',
      '',
      '',
      '',
      'Traitor',
      'Upon defeat, show one opponent the contents of your hand.',
    ],
    [
      63,
      7974,
      'Landon',
      'Y',
      'Fly',
      'R5',
      'Enchant',
      'D1 R1',
      'Attack',
      'D5',
      'Enchant',
      'D3 R3',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'N',
      'N',
      'Y',
      'Wind',
      'Earth',
      'Dennis',
      '',
      '',
      'Immune to Lycanthropy.',
      '',
      '',
    ],
    [
      64,
      243,
      'Emiko',
      'Y',
      'Fly',
      'R3',
      'Fly',
      'R5',
      'Attack',
      'D2',
      'Attack',
      'D3',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'N',
      'N',
      'N',
      'Wind',
      'Earth',
      '',
      'Lord',
      'Launch',
      '',
      '',
      '',
    ],
    [
      65,
      8317,
      'Edmond',
      'Y',
      'Defend',
      'D3',
      'Attack',
      'D3',
      'Defend',
      'D5',
      'Defend',
      'D5',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Water',
      'Wind',
      '',
      '',
      '',
      'Cannot be enchanted.',
      'Alchemist',
      'Change adjacent terrain card from Eatch to Water.',
    ],
    [
      66,
      8387,
      'Elizabet',
      'Y',
      'Enchant',
      'D1 R2',
      'Defend',
      'D3',
      'Enchant',
      'D2 R1',
      'Fly',
      'R3',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'Water',
      'Wind',
      'Darcie',
      '',
      '',
      '',
      'Herbalist',
      'Any adjacent craft gains +D2 defence vs Vitiate.',
    ],
    [
      67,
      4666,
      'Deirdre',
      'Y',
      'Attack',
      'D2',
      'Defend',
      'D5',
      'Defend',
      'D2',
      'Attack',
      'D2',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Fire',
      'Water',
      '',
      'Esquire',
      'Shoot',
      '',
      '',
      '',
    ],
    [
      68,
      2409,
      'Francina',
      'Y',
      'Attack',
      'D3',
      'Attack',
      'D2',
      'Attack',
      'D5',
      'Attack',
      'D5',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'Earth',
      'Fire',
      'Zulema',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      69,
      3553,
      'Elvia',
      'Y',
      'Defend',
      'D5',
      'Defend',
      'D5',
      'Defend',
      'D3',
      'Defend',
      'D2',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'Water',
      'Wind',
      'Morris',
      '',
      '',
      'Defend at -D1 vs Sir.',
      '',
      '',
    ],
    [
      70,
      3996,
      'Basilia',
      'Y',
      'Defend',
      'D5',
      'Attack',
      'D5',
      'Attack',
      'D5',
      'Defend',
      'D3',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'Fire',
      'Water',
      'Francina',
      'Lord',
      'Launch',
      'Defend at +D1 vs Earth or Water.',
      '',
      '',
    ],
    [
      71,
      4417,
      'Celestine',
      'Y',
      'Attack',
      'D2',
      'Defend',
      'D5',
      'Defend',
      'D3',
      'Attack',
      'D5',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Water',
      'Wind',
      'Krysten',
      '',
      '',
      'Opponent may attack again upon defeat.',
      'Witch Hunter',
      'Attack at +D2 vs any craft with Enchant.',
    ],
    [
      72,
      8138,
      'Saturnina',
      'Y',
      'Defend',
      'D4',
      'Fly',
      'R3',
      'Attack',
      'D5',
      'Attack',
      'D5',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'Y',
      'Y',
      'Y',
      'Wind',
      'Earth',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      73,
      5692,
      'Josefa',
      'Y',
      'Defend',
      'D4',
      'Attack',
      'D4',
      'Defend',
      'D4',
      'Enchant',
      'D2 R2',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Earth',
      'Fire',
      'Venetta',
      'Esquire',
      'Shoot',
      'Opponent may attack again upon defeat.',
      '',
      '',
    ],
    [
      74,
      8889,
      'Dominique',
      'Y',
      'Fly',
      'R5',
      'Fly',
      'R5',
      'Fly',
      'R3',
      'Defend',
      'D4',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'Fire',
      'Water',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      75,
      5642,
      'Delois',
      'Y',
      'Defend',
      'D5',
      'Attack',
      'D4',
      'Defend',
      'D3',
      'Defend',
      'D2',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Earth',
      'Fire',
      'Ofelia',
      '',
      '',
      'Opponent attacks craft upon a tie.',
      '',
      '',
    ],
    [
      76,
      8052,
      'Kimberlie',
      'Y',
      'Defend',
      'D5',
      'Defend',
      'D4',
      'Defend',
      'D3',
      'Fly',
      'R3',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'Wind',
      'Earth',
      '',
      '',
      '',
      '',
      'Lycanthrop',
      'When a Clock Tick remains at end of turn, attack Punk to port on 3in6.',
    ],
    [
      77,
      8558,
      'Cecila',
      'Y',
      'Defend',
      'D3',
      'Attack',
      'D4',
      'Attack',
      'D2',
      'Defend',
      'D4',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Wind',
      'Earth',
      'Kiana',
      'Lord',
      'Launch',
      '',
      'Professor',
      'All adjacent craft Attack & Defend at -D2.',
    ],
    [
      78,
      591,
      'Yessenia',
      'Y',
      'Defend',
      'D2',
      'Attack',
      'D3',
      'Attack',
      'D3',
      'Fly',
      'R5',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Fire',
      'Water',
      '',
      'Esquire',
      'Shoot',
      '',
      '',
      '',
    ],
    [
      79,
      3960,
      'Krystina',
      'Y',
      'Attack',
      'D5',
      'Enchant',
      'D4 R2',
      'Defend',
      'D4',
      'Attack',
      'D4',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'Earth',
      'Fire',
      '',
      'Esquire',
      'Shoot',
      '',
      '',
      '',
    ],
    [
      80,
      8051,
      'Corie',
      'Y',
      'Fly',
      'R5',
      'Enchant',
      'D1 R3',
      'Attack',
      'D3',
      'Defend',
      'D5',
      'Y',
      'Y',
      'N',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'Wind',
      'Earth',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      81,
      9474,
      'Skye',
      'Y',
      'Defend',
      'D2',
      'Defend',
      'D2',
      'Defend',
      'D4',
      'Defend',
      'D4',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'Earth',
      'Fire',
      'Keren',
      '',
      '',
      'Cannot be enchanted.',
      '',
      '',
    ],
    [
      82,
      6504,
      'Clarita',
      'Y',
      'Fly',
      'R3',
      'Fly',
      'R3',
      'Attack',
      'D4',
      'Attack',
      'D4',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'N',
      'N',
      'Wind',
      'Earth',
      '',
      'Sir',
      'Enchant',
      'Strip game of all banked clock ticks upon defeat.',
      'Professor',
      'All ordinally adjacent punk immune to Enchantment.',
    ],
    [
      83,
      5697,
      'Darnell',
      'Y',
      'Attack',
      'D3',
      'Attack',
      'D5',
      'Attack',
      'D5',
      'Fly',
      'R3',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Wind',
      'Earth',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      84,
      8444,
      'Shemeka',
      'Y',
      'Defend',
      'D5',
      'Fly',
      'R5',
      'Attack',
      'D5',
      'Attack',
      'D5',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Earth',
      'Fire',
      'Evelin',
      'Duke',
      'Vitiate',
      '',
      '',
      '',
    ],
    [
      85,
      4142,
      'Herminia',
      'Y',
      'Attack',
      'D4',
      'Defend',
      'D3',
      'Attack',
      'D5',
      'Fly',
      'R5',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'Water',
      'Wind',
      'Karyn',
      'Sir',
      'Enchant',
      '',
      'Politician',
      'Upon successful attack, players general is replaced by first card on ready pile.',
    ],
    [
      86,
      6870,
      'Pa',
      'Y',
      'Defend',
      'D3',
      'Defend',
      'D2',
      'Attack',
      'D2',
      'Defend',
      'D3',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'N',
      'N',
      'N',
      'Wind',
      'Earth',
      'Takako',
      'Esquire',
      'Shoot',
      '',
      '',
      '',
    ],
    [
      87,
      294,
      'Ira',
      'Y',
      'Defend',
      'D5',
      'Defend',
      'D3',
      'Defend',
      'D2',
      'Enchant',
      'D2 R3',
      'Y',
      'Y',
      'N',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'Fire ',
      'Water ',
      '',
      '',
      '',
      '',
      'Spouse',
      'Time passes slowly, lose one clock tick on movement and +D2 attack ve same affinity..',
    ],
    [
      88,
      2682,
      'Cornelius',
      'Y',
      'Attack',
      'D2',
      'Defend',
      'D5',
      'Defend',
      'D4',
      'Attack',
      'D4',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Water',
      'Wind',
      '',
      '',
      '',
      '',
      'Lens Crafter',
      'Any adjacent allied craft gains +D2 defence vs Launch or Shoot.',
    ],
    [
      89,
      9058,
      'Kirstie',
      'Y',
      'Attack',
      'D2',
      'Enchant',
      'D1 R3',
      'Defend',
      'D3',
      'Defend',
      'D2',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'N',
      'Y',
      'Earth',
      'Fire',
      'Arlie',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      90,
      6620,
      'Magaret',
      'Y',
      'Attack',
      'D3',
      'Fly',
      'R5',
      'Defend',
      'D5',
      'Defend',
      'D4',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'Wind',
      'Earth',
      '',
      'Esquire',
      'Shoot',
      'Is hidden to Fire.',
      '',
      '',
    ],
    [
      91,
      4417,
      'Jonell',
      'Y',
      'Fly',
      'R3',
      'Fly',
      'R5',
      'Defend',
      'D3',
      'Defend',
      'D5',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Water',
      'Wind',
      'Caroyln',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      92,
      2655,
      'Caprice',
      'Y',
      'Defend',
      'D2',
      'Fly',
      'R3',
      'Attack',
      'D3',
      'Defend',
      'D4',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'N',
      'Wind',
      'Earth',
      'Alysa',
      'Lord',
      'Launch',
      '',
      'Time Lord',
      'Bank one clock tick for use as Punk chooses upon victory.',
    ],
    [
      93,
      5960,
      'Lorina',
      'Y',
      'Defend',
      'D5',
      'Attack',
      'D5',
      'Enchant',
      'D3 R2',
      'Defend',
      'D2',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'N',
      'N',
      'N',
      'Fire',
      'Water',
      '',
      '',
      '',
      'Force opponent to swap one of their craft from the table with a craft from their Ready upon victory.',
      'Wizard',
      'Trade places with any other Punk at the cost of 2 click ticks and forfeit attack.',
    ],
    [
      94,
      366,
      'Shala',
      'Y',
      'Attack',
      'D3',
      'Attack',
      'D2',
      'Attack',
      'D2',
      'Enchant',
      'D3 R3',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'Wind',
      'Earth',
      'Justina',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      95,
      880,
      'Wava',
      'Y',
      'Defend',
      'D5',
      'Defend',
      'D5',
      'Defend',
      'D4',
      'Attack',
      'D3',
      'Y',
      'Y',
      'N',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'Earth',
      'Fire',
      'Jill',
      '',
      '',
      'Cannot attack fire.',
      'Map Maker',
      'On move, place a new terrain card on an adjacent empty space on 2in6.',
    ],
    [
      96,
      2478,
      'Junie',
      'Y',
      'Defend',
      'D4',
      'Fly',
      'R5',
      'Attack',
      'D3',
      'Defend',
      'D5',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'N',
      'N',
      'Fire',
      'Water',
      'Bruno',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      97,
      4747,
      'Racquel',
      'Y',
      'Attack',
      'D5',
      'Fly',
      'R4',
      'Attack',
      'D5',
      'Fly',
      'R3',
      'Y',
      'Y',
      'N',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Earth',
      'Fire',
      'Earline',
      'Sir',
      'Enchant',
      '',
      'Doctor',
      'Must sacrafice self to repair any Punk killed on current turn on 2in6.',
    ],
    [
      98,
      8427,
      'Season',
      'Y',
      'Defend',
      'D3',
      'Defend',
      'D4',
      'Attack',
      'D4',
      'Defend',
      'D2',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'Earth',
      'Fire',
      'Christen',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      99,
      5789,
      'Shirley',
      'Y',
      'Enchant',
      'D2 R2',
      'Attack',
      'D3',
      'Fly',
      'R5',
      'Defend',
      'D3',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'Wind',
      'Earth',
      '',
      'Esquire',
      'Shoot',
      '',
      'Clockmaker',
      'All adjacent Punk must rotate once clockwise when placed adjacent.',
    ],
    [
      100,
      5151,
      'Marni',
      'Y',
      'Attack',
      'D5',
      'Defend',
      'D2',
      'Attack',
      'D2',
      'Defend',
      'D4',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Y',
      'Earth',
      'Fire',
      'Richelle',
      'Sir',
      'Enchant',
      'Defend at +D1 vs Fire.',
      '',
      '',
    ],
    [
      101,
      2147,
      'Lucien',
      'Y',
      'Attack',
      'D3',
      'Fly',
      'R5',
      'Attack',
      'D2',
      'Attack',
      'D5',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Earth',
      'Fire',
      'Valentina',
      '',
      '',
      'Play this card immediately upon drawing it or opponent can take control of any one of your cards but your general.',
      'Miner',
      'Can pass through Earth while moving, cannot stop on Earth.',
    ],
    [
      102,
      8583,
      'Sol',
      'Y',
      'Fly',
      'R4',
      'Defend',
      'D2',
      'Fly',
      'R4',
      'Defend',
      'D4',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Earth',
      'Fire',
      '',
      '',
      '',
      'Force opponent to swap one of their craft from the table with a craft from their Ready upon victory.',
      '',
      '',
    ],
    [
      103,
      3457,
      'Patty',
      'Y',
      'Attack',
      'D4',
      'Defend',
      'D4',
      'Attack',
      'D4',
      'Attack',
      'D4',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'Water',
      'Wind',
      'Taina',
      '',
      '',
      'May rotate any card on the board once in lieu of turn.',
      'Doctor',
      'May sacrafice self to repair allied Punk killed on current turn, including General.',
    ],
    [
      104,
      9438,
      'Ruby',
      'Y',
      'Enchant',
      'D3 R2',
      'Defend',
      'D3',
      'Attack',
      'D4',
      'Defend',
      'D5',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'Earth',
      'Fire',
      '',
      'Sir',
      'Enchant',
      '',
      'Physicist',
      'Sacrafice self to add +D3 defence to any craft and +D2 attack to it\'s opponent.',
    ],
    [
      105,
      9259,
      'Aundrea',
      'Y',
      'Attack',
      'D2',
      'Attack',
      'D4',
      'Attack',
      'D5',
      'Attack',
      'D4',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Earth ',
      'Fire ',
      'Donte',
      'Lord',
      'Launch',
      '',
      '',
      '',
    ],
    [
      106,
      6001,
      'Ernest',
      'Y',
      'Attack',
      'D2',
      'Attack',
      'D3',
      'Defend',
      'D5',
      'Attack',
      'D4',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Y',
      'Earth',
      'Fire',
      'Elva',
      'Sir',
      'Enchant',
      '',
      'Blue-Bottle',
      'Sacrifices self to cancel adjacent combat, after the attack and defence rolls takes place.',
    ],
    [
      107,
      8837,
      'Arline',
      'Y',
      'Fly',
      'R4',
      'Defend',
      'D4',
      'Defend',
      'D2',
      'Fly',
      'R4',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'Fire',
      'Water',
      'Athena',
      'Esquire',
      'Shoot',
      '',
      '',
      '',
    ],
    [
      108,
      3290,
      'Pilar',
      'Y',
      'Defend',
      'D4',
      'Defend',
      'D3',
      'Defend',
      'D2',
      'Enchant',
      'D1 R2',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'Water',
      'Wind',
      '',
      '',
      '',
      'Defend at +D2 vs Duke.',
      '',
      '',
    ],
    [
      109,
      2869,
      'Gertrude',
      'Y',
      'Attack',
      'D3',
      'Attack',
      'D2',
      'Defend',
      'D4',
      'Attack',
      'D4',
      'Y',
      'Y',
      'N',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Water',
      'Wind',
      'Edna',
      'Sir',
      'Enchant',
      '',
      'Jungle Explorer',
      'Attack at +D2 vs Earth on 1in6.',
    ],
    [
      110,
      492,
      'Jamila',
      'Y',
      'Defend',
      'D5',
      'Attack',
      'D5',
      'Attack',
      'D5',
      'Fly',
      'R3',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'Wind',
      'Earth',
      'Evita',
      '',
      '',
      '',
      'Chimney Sweep',
      'Cannot be launched over.',
    ],
    [
      111,
      6255,
      'Matilde',
      'Y',
      'Defend',
      'D4',
      'Attack',
      'D3',
      'Fly',
      'R5',
      'Defend',
      'D5',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'N',
      'Y',
      'Earth',
      'Fire',
      'Dolly',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      112,
      3120,
      'Myrtie',
      'Y',
      'Enchant',
      'D1 R2',
      'Attack',
      'D4',
      'Attack',
      'D2',
      'Attack',
      'D5',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'Wind',
      'Earth',
      'Johnathan',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      113,
      4026,
      'Eladia',
      'Y',
      'Defend',
      'D5',
      'Defend',
      'D4',
      'Attack',
      'D2',
      'Attack',
      'D4',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'Wind',
      'Earth',
      '',
      'Duke',
      'Vitiate',
      'Take over attacking card upon defeat.',
      'Boxer',
      'Attack does no damage but rotates opponents 180 degrees.',
    ],
    [
      114,
      1809,
      'Brant',
      'Y',
      'Enchant',
      'D1 R3',
      'Attack',
      'D4',
      'Defend',
      'D2',
      'Fly',
      'R5',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'N',
      'Fire',
      'Water',
      '',
      'Sir',
      'Enchant',
      '',
      '',
      '',
    ],
    [
      115,
      7805,
      'Kacey',
      'Y',
      'Defend',
      'D3',
      'Defend',
      'D4',
      'Fly',
      'R3',
      'Defend',
      'D4',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'N',
      'Y',
      'Wind',
      'Earth',
      '',
      'Esquire',
      'Shoot',
      '',
      'Apothecary',
      'Immune to vitiate on 3in6.',
    ],
    [
      116,
      7072,
      'Kandis',
      'Y',
      'Defend',
      'D5',
      'Fly',
      'R4',
      'Attack',
      'D5',
      'Attack',
      'D5',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Fire',
      'Water',
      'Pansy',
      'Esquire',
      'Shoot',
      'Opponent loses next turn upon failed combat vs this craft.',
      'Alchemist',
      'Change adjacent terrain card from Eatch to Water.',
    ],
    [
      117,
      2070,
      'Macie',
      'Y',
      'Attack',
      'D3',
      'Enchant',
      'D2 R1',
      'Attack',
      'D4',
      'Attack',
      'D3',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Wind',
      'Earth',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      118,
      5152,
      'Jon',
      'Y',
      'Defend',
      'D5',
      'Defend',
      'D5',
      'Attack',
      'D3',
      'Attack',
      'D4',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Fire',
      'Water',
      'Jake',
      '',
      '',
      'Take over attacking card upon defeat.',
      'Bird Hunter',
      'Attack at +D2 vs Wind on 3in6.',
    ],
    [
      119,
      2917,
      'Norine',
      'Y',
      'Attack',
      'D3',
      'Attack',
      'D2',
      'Fly',
      'R5',
      'Defend',
      'D5',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'Wind',
      'Earth',
      'Verona',
      '',
      '',
      'Cannot attack water.',
      'Jungle Explorer',
      'Attack at +D2 vs Earth on 1in6.',
    ],
    [
      120,
      9837,
      'Joel',
      'Y',
      'Attack',
      'D2',
      'Defend',
      'D2',
      'Attack',
      'D2',
      'Attack',
      'D5',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'Wind',
      'Earth',
      '',
      '',
      '',
      '',
      'Butcher',
      'Defend at +D2 when adjacent to Barber.',
    ],
    [
      121,
      721,
      'Santina',
      'Y',
      'Attack',
      'D3',
      'Enchant',
      'D1 R3',
      'Attack',
      'D3',
      'Defend',
      'D4',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'Y',
      'Earth',
      'Fire',
      '',
      'Sir',
      'Enchant',
      '',
      'Clockmaker',
      'All adjacent Punk must rotate once clockwise when placed adjacent.',
    ],
    [
      122,
      9463,
      'Raymundo',
      'Y',
      'Defend',
      'D3',
      'Defend',
      'D3',
      'Attack',
      'D5',
      'Attack',
      'D3',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Water',
      'Wind',
      'Margarette',
      '',
      '',
      'Defend at +D1 vs Earth or Water.',
      '',
      '',
    ],
    [
      123,
      5466,
      'Shila',
      'Y',
      'Fly',
      'R3',
      'Defend',
      'D2',
      'Defend',
      'D4',
      'Attack',
      'D4',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Y',
      'Wind',
      'Earth',
      '',
      '',
      '',
      'Swap location with allied craft before attack.',
      'Clockmaker',
      'All adjacent Punk must rotate once counter clockwise when placed adjacent.',
    ],
    [
      124,
      6474,
      'Sibyl',
      'Y',
      'Attack',
      'D4',
      'Defend',
      'D4',
      'Defend',
      'D3',
      'Attack',
      'D2',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'N',
      'N',
      'Wind',
      'Earth',
      'Magdalene',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      125,
      3397,
      'Sharron',
      'Y',
      'Enchant',
      'D1 R3',
      'Attack',
      'D4',
      'Defend',
      'D3',
      'Attack',
      'D2',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Fire',
      'Water',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      126,
      98,
      'Avis',
      'Y',
      'Attack',
      'D4',
      'Defend',
      'D5',
      'Attack',
      'D3',
      'Attack',
      'D5',
      'Y',
      'Y',
      'N',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Water',
      'Wind',
      '',
      'Sir',
      'Enchant',
      'Defend at +D2 vs Punks with titles.',
      '',
      '',
    ],
    [
      127,
      1984,
      'Chaya',
      'Y',
      'Enchant',
      'D2 R3',
      'Defend',
      'D4',
      'Attack',
      'D2',
      'Attack',
      'D5',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'N',
      'N',
      'N',
      'Fire',
      'Water',
      '',
      'Esquire',
      'Shoot',
      '',
      '',
      '',
    ],
    [
      128,
      2139,
      'Lois',
      'Y',
      'Defend',
      'D3',
      'Attack',
      'D5',
      'Enchant',
      'D2 R1',
      'Fly',
      'R3',
      'Y',
      'Y',
      'N',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'Earth',
      'Fire',
      '',
      'Sir',
      'Enchant',
      'Immune to Hide.',
      'Fire Fighter',
      'On move, change adjacent terrain cards from Fire to Earth on 3in6.',
    ],
    [
      129,
      5090,
      'Gemma',
      'Y',
      'Fly',
      'R3',
      'Defend',
      'D2',
      'Defend',
      'D4',
      'Defend',
      'D2',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Y',
      'Wind',
      'Earth',
      'Nichol',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      130,
      5714,
      'Ethel',
      'Y',
      'Attack',
      'D2',
      'Enchant',
      'D4 R2',
      'Fly',
      'R5',
      'Defend',
      'D4',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'N',
      'N',
      'N',
      'Wind',
      'Earth',
      'Eugenia',
      '',
      '',
      '',
      'Time Thief',
      'Upon victory collect banked clock ticks from any opponent.',
    ],
    [
      131,
      7071,
      'Maxwell',
      'Y',
      'Defend',
      'D2',
      'Attack',
      'D2',
      'Attack',
      'D2',
      'Enchant',
      'D3 R2',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'N',
      'N',
      'Earth',
      'Fire',
      'Farrah',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      132,
      2300,
      'Gricelda',
      'Y',
      'Defend',
      'D5',
      'Defend',
      'D5',
      'Attack',
      'D2',
      'Defend',
      'D4',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'N',
      'N',
      'Earth',
      'Fire',
      'Ha',
      '',
      '',
      '',
      'Barber',
      'Attack is +D3 when adjacent to Butcher.',
    ],
    [
      133,
      2150,
      'Esteban',
      'Y',
      'Defend',
      'D2',
      'Attack',
      'D4',
      'Defend',
      'D5',
      'Attack',
      'D4',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'Wind',
      'Earth',
      'Linh',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      134,
      5320,
      'Sylvia',
      'Y',
      'Defend',
      'D5',
      'Attack',
      'D4',
      'Fly',
      'R5',
      'Defend',
      'D3',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Y',
      'Wind',
      'Earth',
      '',
      'Sir',
      'Enchant',
      'Always defeat water.',
      'Submariner',
      'Can pass through Water while moving, cannot stop on Water.',
    ],
    [
      135,
      1272,
      'Inell',
      'Y',
      'Fly',
      'R3',
      'Attack',
      'D3',
      'Defend',
      'D3',
      'Defend',
      'D2',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'Earth',
      'Fire',
      'Karlyn',
      '',
      '',
      'No ordinally adjacent craft may Repair.',
      '',
      '',
    ],
    [
      136,
      8964,
      'Jane',
      'Y',
      'Fly',
      'R3',
      'Fly',
      'R5',
      'Attack',
      'D5',
      'Enchant',
      'D4 R3',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'Earth',
      'Fire',
      'Maida',
      '',
      '',
      '',
      'Berserker',
      'Attack at +D5 with penalty of -D3 to defense and dies after successful attack.',
    ],
    [
      137,
      4389,
      'Piper',
      'Y',
      'Fly',
      'R4',
      'Defend',
      'D5',
      'Defend',
      'D5',
      'Defend',
      'D3',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Earth',
      'Fire',
      '',
      '',
      '',
      '',
      'Sailor',
      'Can pass across Water while moving, cannot stop on Water.',
    ],
    [
      138,
      1778,
      'Kasha',
      'Y',
      'Fly',
      'R3',
      'Defend',
      'D2',
      'Attack',
      'D5',
      'Attack',
      'D5',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'N',
      'N',
      'N',
      'Water',
      'Wind',
      '',
      '',
      '',
      'All combat at +D1 vs Lord.',
      '',
      '',
    ],
    [
      139,
      2955,
      'Nohemi',
      'Y',
      'Attack',
      'D2',
      'Defend',
      'D5',
      'Defend',
      'D5',
      'Attack',
      'D5',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'N',
      'N',
      'Y',
      'Earth',
      'Fire',
      'Vinnie',
      'Esquire',
      'Shoot',
      'Defend at +D2 vs Punks with titles.',
      'Spotter',
      'Adjacent enemy craft are in range of Shoot or Launch regardless of the distance.',
    ],
    [
      140,
      1660,
      'Felicia',
      'Y',
      'Fly',
      'R4',
      'Defend',
      'D3',
      'Defend',
      'D4',
      'Defend',
      'D2',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Water',
      'Wind',
      '',
      '',
      '',
      'Swap location with allied craft before attack.',
      '',
      '',
    ],
    [
      141,
      207,
      'Karly',
      'Y',
      'Defend',
      'D2',
      'Attack',
      'D5',
      'Defend',
      'D2',
      'Defend',
      'D2',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'Fire',
      'Water',
      '',
      'Lord',
      'Launch',
      '',
      'Jungle Explorer',
      'Attack at +D2 vs Earth on 1in6.',
    ],
    [
      142,
      6769,
      'Laure',
      'Y',
      'Enchant',
      'D2 R1',
      'Defend',
      'D3',
      'Attack',
      'D5',
      'Attack',
      'D5',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Fire',
      'Water',
      'Maurine',
      '',
      '',
      '',
      'Clergy',
      'Adjacent allied crafy immune to enchant on 3in6.',
    ],
    [
      143,
      5841,
      'Daryl',
      'Y',
      'Defend',
      'D3',
      'Defend',
      'D2',
      'Fly',
      'R4',
      'Defend',
      'D3',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'N',
      'Fire ',
      'Water ',
      '',
      'Lord',
      'Launch',
      'Defend at -D3 vs Launch.',
      'Sailor',
      'Can pass across Water while moving, cannot stop on Water.',
    ],
    [
      144,
      4227,
      'Tifany',
      'Y',
      'Attack',
      'D3',
      'Fly',
      'R4',
      'Defend',
      'D5',
      'Attack',
      'D2',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'N',
      'Fire ',
      'Water ',
      'Janeen',
      'Esquire',
      'Shoot',
      '',
      'Philanthropist',
      'Upon defeat, both opponents deploy two craft.',
    ],
    [
      145,
      5557,
      'Eddy',
      'Y',
      'Defend',
      'D2',
      'Defend',
      'D5',
      'Fly',
      'R5',
      'Defend',
      'D5',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'N',
      'Y',
      'Wind',
      'Earth',
      '',
      '',
      '',
      'All combat at +D2 vs Sir.',
      'Barber',
      'Attack is +D3 when adjacent to Butcher.',
    ],
    [
      146,
      1960,
      'Doreatha',
      'Y',
      'Attack',
      'D3',
      'Attack',
      'D2',
      'Attack',
      'D2',
      'Defend',
      'D5',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'N',
      'Y',
      'Fire',
      'Water',
      'Tyler',
      '',
      '',
      'Rotates opposing craft clockwise upon successful defend.',
      '',
      '',
    ],
    [
      147,
      9731,
      'Elsie',
      'Y',
      'Defend',
      'D5',
      'Attack',
      'D2',
      'Defend',
      'D5',
      'Defend',
      'D5',
      'Y',
      'N',
      'N',
      'N',
      'Y',
      'N',
      'N',
      'Y',
      'Earth',
      'Fire',
      '',
      'Esquire',
      'Shoot',
      '',
      'Energy Thief',
      'All adjacent craft cost an extra clock tick to move.',
    ],
    [
      148,
      4309,
      'Marianne',
      'Y',
      'Attack',
      'D4',
      'Attack',
      'D3',
      'Defend',
      'D5',
      'Fly',
      'R5',
      'Y',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Y',
      'Wind',
      'Earth',
      'Abel',
      'Esquire',
      'Shoot',
      '',
      '',
      '',
    ],
    [
      149,
      5278,
      'Lavonne',
      'Y',
      'Attack',
      'D2',
      'Fly',
      'R3',
      'Defend',
      'D3',
      'Attack',
      'D3',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'Water',
      'Wind',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      150,
      8141,
      'Tianna',
      'Y',
      'Attack',
      'D5',
      'Defend',
      'D3',
      'Defend',
      'D4',
      'Fly',
      'R4',
      'Y',
      'Y',
      'N',
      'Y',
      'Y',
      'Y',
      'N',
      'Y',
      'Water',
      'Wind',
      '',
      '',
      '',
      'Always lose to fire.',
      '',
      '',
    ],
    [
      151,
      3833,
      'Troy',
      'Y',
      'Defend',
      'D2',
      'Defend',
      'D3',
      'Defend',
      'D4',
      'Enchant',
      'D3 R2',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Wind',
      'Earth',
      'Tish',
      'Lord',
      'Launch',
      'Sacrafice this and one other allied craft you nullify an Enchant.',
      '',
      '',
    ],
    [
      152,
      3382,
      'Kenya',
      'Y',
      'Fly',
      'R3',
      'Fly',
      'R4',
      'Defend',
      'D3',
      'Attack',
      'D4',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'Water',
      'Wind',
      'Lucas',
      '',
      '',
      '',
      'Doctor',
      'Must sacrafice self to repair any Punk killed on current turn on 2in6.',
    ],
    [
      153,
      8115,
      'Michell',
      'Y',
      'Defend',
      'D4',
      'Defend',
      'D3',
      'Defend',
      'D3',
      'Attack',
      'D4',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'Y',
      'Earth ',
      'Fire ',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      154,
      9262,
      'Yasmine',
      'Y',
      'Attack',
      'D2',
      'Enchant',
      'D3 R3',
      'Attack',
      'D3',
      'Defend',
      'D3',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'N',
      'N',
      'Y',
      'Earth',
      'Fire',
      'Harmony',
      'Sir',
      'Enchant',
      '',
      '',
      '',
    ],
    [
      155,
      2265,
      'Haley',
      'Y',
      'Enchant',
      'D2 R3',
      'Attack',
      'D4',
      'Defend',
      'D3',
      'Attack',
      'D3',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Earth',
      'Fire',
      'Mikaela',
      '',
      '',
      '',
      'Coward',
      'Will never move next to opponent with a title.',
    ],
    [
      156,
      5866,
      'Jose',
      'Y',
      'Enchant',
      'D2 R2',
      'Defend',
      'D4',
      'Defend',
      'D3',
      'Defend',
      'D2',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Water',
      'Wind',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      157,
      9748,
      'Lorri',
      'Y',
      'Enchant',
      'D3 R3',
      'Defend',
      'D2',
      'Enchant',
      'D1 R2',
      'Attack',
      'D5',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'N',
      'N',
      'Y',
      'Earth',
      'Fire',
      'Lina',
      'Sir',
      'Enchant',
      '',
      '',
      '',
    ],
    [
      158,
      8154,
      'Rosette',
      'Y',
      'Attack',
      'D3',
      'Defend',
      'D3',
      'Fly',
      'R5',
      'Attack',
      'D5',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'Y',
      'Earth',
      'Fire',
      '',
      'Sir',
      'Enchant',
      '',
      '',
      '',
    ],
    [
      159,
      6419,
      'Ivelisse',
      'Y',
      'Enchant',
      'D1 R1',
      'Fly',
      'R4',
      'Attack',
      'D5',
      'Attack',
      'D3',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'N',
      'N',
      'Y',
      'Earth',
      'Fire',
      '',
      'Esquire',
      'Shoot',
      '',
      '',
      '',
    ],
    [
      160,
      2021,
      'Beatris',
      'Y',
      'Fly',
      'R3',
      'Attack',
      'D5',
      'Defend',
      'D4',
      'Defend',
      'D3',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'N',
      'N',
      'Water',
      'Wind',
      'Francis',
      '',
      '',
      'Sacrafice this craft to block an enemy deployment for one turn.',
      '',
      '',
    ],
    [
      161,
      5630,
      'Marco',
      'Y',
      'Enchant',
      'D4 R2',
      'Attack',
      'D3',
      'Defend',
      'D4',
      'Attack',
      'D2',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'N',
      'N',
      'N',
      'Fire',
      'Water',
      'Rose',
      'Sir',
      'Enchant',
      'Defend at +D2 vs Duke.',
      'Martyr',
      'All adjacent Punks destroyed upon defeat.',
    ],
    [
      162,
      7913,
      'Theodora',
      'Y',
      'Defend',
      'D2',
      'Attack',
      'D5',
      'Defend',
      'D3',
      'Enchant',
      'D3 R1',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Y',
      'Wind',
      'Earth',
      'Gilbert',
      '',
      '',
      '',
      'Butcher',
      'Defend at +D2 when adjacent to Barber.',
    ],
    [
      163,
      3951,
      'Shameka',
      'Y',
      'Attack',
      'D3',
      'Defend',
      'D2',
      'Fly',
      'R5',
      'Attack',
      'D2',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Earth',
      'Fire',
      'Bo',
      'Sir',
      'Enchant',
      '',
      '',
      '',
    ],
    [
      164,
      3224,
      'Curtis',
      'Y',
      'Enchant',
      'D2 R2',
      'Attack',
      'D3',
      'Fly',
      'R4',
      'Defend',
      'D2',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Wind',
      'Earth',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      165,
      8701,
      'Laverna',
      'Y',
      'Attack',
      'D4',
      'Attack',
      'D2',
      'Enchant',
      'D2 R1',
      'Fly',
      'R4',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'Y',
      'Earth',
      'Fire',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      166,
      7824,
      'Theresa',
      'Y',
      'Fly',
      'R5',
      'Fly',
      'R5',
      'Fly',
      'R4',
      'Fly',
      'R5',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'Water',
      'Wind',
      'Babara',
      '',
      '',
      'Defend at +D1 vs Water.',
      'Air Bender',
      'Can swap position with adjacent air terrain.',
    ],
    [
      167,
      8551,
      'Lorette',
      'Y',
      'Defend',
      'D2',
      'Attack',
      'D2',
      'Defend',
      'D4',
      'Fly',
      'R3',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'N',
      'N',
      'Wind',
      'Earth',
      'Nikita',
      '',
      '',
      'Defend at -D1 vs Water.',
      'Clockmaker',
      'All adjacent Punk must rotate once clockwise when placed adjacent.',
    ],
    [
      168,
      8694,
      'Jonah',
      'Y',
      'Defend',
      'D5',
      'Enchant',
      'D4 R1',
      'Fly',
      'R4',
      'Defend',
      'D2',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'N',
      'N',
      'N',
      'Water',
      'Wind',
      'Johnie',
      '',
      '',
      'Play this card immediately upon drawing it or opponent can take control of any one of your cards but your general.',
      '',
      '',
    ],
    [
      169,
      4466,
      'Margaret',
      'Y',
      'Defend',
      'D4',
      'Attack',
      'D5',
      'Defend',
      'D5',
      'Fly',
      'R4',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'N',
      'N',
      'N',
      'Water',
      'Wind',
      'Karey',
      '',
      '',
      'Is hidden to Fire.',
      'Chimney Sweep',
      'Cannot be launched, jumped or flown over.',
    ],
    [
      170,
      9462,
      'Shawnta',
      'Y',
      'Fly',
      'R3',
      'Attack',
      'D2',
      'Attack',
      'D2',
      'Attack',
      'D3',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'Earth',
      'Fire',
      'Frederick',
      'Esquire',
      'Shoot',
      'Defend at +D1 vs Air.',
      'Politician',
      'Upon defeat, players general is replaced by first card on ready pile.',
    ],
    [
      171,
      8942,
      'Walter',
      'Y',
      'Enchant',
      'D2 R3',
      'Fly',
      'R3',
      'Attack',
      'D4',
      'Enchant',
      'D2 R1',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'Y',
      'Water',
      'Wind',
      'Hermina',
      'Lord',
      'Launch',
      'Cannot be jumped.',
      '',
      '',
    ],
    [
      172,
      4206,
      'Corina',
      'Y',
      'Defend',
      'D3',
      'Attack',
      'D4',
      'Attack',
      'D3',
      'Defend',
      'D4',
      'Y',
      'Y',
      'N',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'Fire',
      'Water',
      'Errol',
      '',
      '',
      'May rotate any card on the board once in lieu of turn.',
      'Water Bender',
      'Can swap position with adjacent water terrain.',
    ],
    [
      173,
      6598,
      'Jenae',
      'Y',
      'Defend',
      'D5',
      'Defend',
      'D5',
      'Attack',
      'D3',
      'Enchant',
      'D4 R1',
      'Y',
      'Y',
      'N',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Fire',
      'Water',
      '',
      'Sir',
      'Enchant',
      'Cannot be enchanted.',
      '',
      '',
    ],
    [
      174,
      1932,
      'Vincent',
      'Y',
      'Attack',
      'D4',
      'Attack',
      'D3',
      'Attack',
      'D4',
      'Attack',
      'D4',
      'Y',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'N',
      'N',
      'Water',
      'Wind',
      'Jovan',
      '',
      '',
      '',
      'Clergy',
      'Adjacent allied crafy immune to enchant on 3in6.',
    ],
    [
      175,
      307,
      'Bernard',
      'Y',
      'Attack',
      'D3',
      'Fly',
      'R3',
      'Defend',
      'D5',
      'Defend',
      'D2',
      'Y',
      'Y',
      'N',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Water',
      'Wind',
      'Tiffaney',
      'Duke',
      'Vitiate',
      '',
      'Energy Thief',
      'All adjacent craft cost an extra clock tick to move.',
    ],
    [
      176,
      3137,
      'Emelia',
      'Y',
      'Enchant',
      'D3 R2',
      'Enchant',
      'D2 R2',
      'Fly',
      'R5',
      'Attack',
      'D2',
      'Y',
      'Y',
      'N',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'Wind',
      'Earth',
      'Freeman',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      177,
      1035,
      'Lin',
      'Y',
      'Enchant',
      'D4 R2',
      'Fly',
      'R3',
      'Fly',
      'R4',
      'Attack',
      'D5',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'N',
      'N',
      'Y',
      'Water',
      'Wind',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      178,
      4976,
      'Lorenzo',
      'Y',
      'Fly',
      'R5',
      'Defend',
      'D4',
      'Defend',
      'D2',
      'Defend',
      'D2',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'N',
      'N',
      'Water',
      'Wind',
      '',
      '',
      '',
      'All combat at +D1 vs Lord.',
      'Marksman',
      'On rotate, shoot R3 D2 forward at enemy Punk on 4in6.',
    ],
    [
      179,
      8619,
      'Keiko',
      'Y',
      'Defend',
      'D3',
      'Attack',
      'D4',
      'Enchant',
      'D3 R2',
      'Defend',
      'D2',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'N',
      'N',
      'Wind',
      'Earth',
      'Richie',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      180,
      6304,
      'Enriqueta',
      'Y',
      'Attack',
      'D4',
      'Defend',
      'D4',
      'Attack',
      'D2',
      'Attack',
      'D4',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Wind',
      'Earth',
      'Rosetta',
      '',
      '',
      'Is hidden to Fire.',
      'Spouse',
      'Time passes slowly, lose one clock tick on movement and +D2 attack ve same affinity..',
    ],
    [
      181,
      8739,
      'Gwyneth',
      'Y',
      'Attack',
      'D3',
      'Defend',
      'D5',
      'Attack',
      'D4',
      'Attack',
      'D5',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'Y',
      'Earth',
      'Fire',
      '',
      '',
      '',
      '',
      'Berserker',
      'Attack at +D5 with penalty of -D3 to defense and dies after successful attack.',
    ],
    [
      182,
      2829,
      'Arlena',
      'Y',
      'Fly',
      'R3',
      'Defend',
      'D2',
      'Defend',
      'D3',
      'Fly',
      'R3',
      'Y',
      'Y',
      'N',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'Fire',
      'Water',
      '',
      'Esquire',
      'Shoot',
      '',
      '',
      '',
    ],
    [
      183,
      6449,
      'Mayme',
      'Y',
      'Attack',
      'D2',
      'Attack',
      'D2',
      'Defend',
      'D2',
      'Fly',
      'R5',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'Fire',
      'Water',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      184,
      2675,
      'Lelia',
      'Y',
      'Attack',
      'D3',
      'Attack',
      'D3',
      'Enchant',
      'D1 R1',
      'Defend',
      'D4',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'Water',
      'Wind',
      '',
      '',
      '',
      'Rotate defender clockwise by 1 prior to attack on 1 in 6.',
      '',
      '',
    ],
    [
      185,
      6595,
      'Mirella',
      'Y',
      'Enchant',
      'D1 R1',
      'Fly',
      'R4',
      'Fly',
      'R5',
      'Fly',
      'R3',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'N',
      'N',
      'Fire',
      'Water',
      'Ocie',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      186,
      6910,
      'Luna',
      'Y',
      'Attack',
      'D3',
      'Enchant',
      'D4 R2',
      'Attack',
      'D2',
      'Attack',
      'D5',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'Y',
      'Fire ',
      'Water ',
      'Lanie',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      187,
      2517,
      'Katelin',
      'Y',
      'Fly',
      'R4',
      'Attack',
      'D4',
      'Defend',
      'D5',
      'Fly',
      'R4',
      'Y',
      'Y',
      'N',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Water',
      'Wind',
      'Wade',
      '',
      '',
      'Swap location with allied craft before attack.',
      '',
      '',
    ],
    [
      188,
      9877,
      'Karon',
      'Y',
      'Fly',
      'R4',
      'Enchant',
      'D1 R1',
      'Defend',
      'D2',
      'Defend',
      'D5',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'Water',
      'Wind',
      'Charmaine',
      'Lord',
      'Launch',
      'Rotate defender clockwise by 1 prior to attack on 1 in 6.',
      'Lycanthrop',
      'When a Clock Tick remains at end of turn, attack Punk to starboard on 5in6.',
    ],
    [
      189,
      806,
      'Ginny',
      'Y',
      'Defend',
      'D2',
      'Attack',
      'D2',
      'Attack',
      'D2',
      'Defend',
      'D3',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'Wind',
      'Earth',
      'Laurie',
      '',
      '',
      '',
      'Miner',
      'Can pass through Earth while moving, cannot stop on Earth.',
    ],
    [
      190,
      7666,
      'Alton',
      'Y',
      'Enchant',
      'D4 R2',
      'Attack',
      'D4',
      'Defend',
      'D2',
      'Attack',
      'D4',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Wind',
      'Earth',
      '',
      'Duke',
      'Vitiate',
      '',
      'Time Lord',
      'Bank one clock tick for use as Punk chooses upon deployment.',
    ],
    [
      191,
      885,
      'Theressa',
      'Y',
      'Defend',
      'D4',
      'Attack',
      'D3',
      'Enchant',
      'D1 R3',
      'Defend',
      'D3',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'N',
      'N',
      'Earth ',
      'Fire ',
      '',
      '',
      '',
      'Opponent may attack again upon defeat.',
      'Philanthropist',
      'Upon defeat, both opponents deploy two craft.',
    ],
    [
      192,
      3174,
      'Iraida',
      'Y',
      'Fly',
      'R4',
      'Enchant',
      'D3 R3',
      'Defend',
      'D4',
      'Attack',
      'D3',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'N',
      'N',
      'Y',
      'Earth',
      'Fire',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      193,
      2828,
      'Buford',
      'Y',
      'Attack',
      'D2',
      'Attack',
      'D5',
      'Attack',
      'D5',
      'Attack',
      'D2',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'N',
      'N',
      'Wind',
      'Earth',
      'Francis',
      'Sir',
      'Enchant',
      '',
      'Coward',
      'Will never move next to opponent with a title.',
    ],
    [
      194,
      1042,
      'Delmar',
      'Y',
      'Defend',
      'D4',
      'Defend',
      'D2',
      'Attack',
      'D2',
      'Fly',
      'R3',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'Earth',
      'Fire',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      195,
      7100,
      'Onie',
      'Y',
      'Attack',
      'D2',
      'Attack',
      'D3',
      'Defend',
      'D3',
      'Fly',
      'R5',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Earth',
      'Fire',
      '',
      'Lord',
      'Launch',
      'Adjacent opponent craft (opponents choice) destroyed upon failed attack.',
      '',
      '',
    ],
    [
      196,
      2274,
      'Doria',
      'Y',
      'Attack',
      'D2',
      'Fly',
      'R5',
      'Enchant',
      'D2 R1',
      'Attack',
      'D4',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Y',
      'Water',
      'Wind',
      '',
      'Esquire',
      'Shoot',
      'No adjacent craft may rotate.',
      'Professor',
      'All ordinally adjacent punk immune to Enchantment.',
    ],
    [
      197,
      2994,
      'Tamara',
      'Y',
      'Defend',
      'D4',
      'Attack',
      'D2',
      'Defend',
      'D2',
      'Defend',
      'D4',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Water',
      'Wind',
      'Kathey',
      '',
      '',
      'Defend at -D1 vs Fire or Air.',
      '',
      '',
    ],
    [
      198,
      626,
      'George',
      'Y',
      'Defend',
      'D3',
      'Attack',
      'D2',
      'Attack',
      'D4',
      'Defend',
      'D4',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'Y',
      'Earth',
      'Fire',
      '',
      'Lord',
      'Launch',
      '',
      '',
      '',
    ],
    [
      199,
      6750,
      'Shanon',
      'Y',
      'Enchant',
      'D1 R3',
      'Enchant',
      'D3 R3',
      'Defend',
      'D3',
      'Defend',
      'D3',
      'Y',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'N',
      'Y',
      'Earth',
      'Fire',
      'Ivelisse',
      '',
      '',
      '',
      'Chimney Sweep',
      'Cannot be launched, jumped or flown over.',
    ],
    [
      200,
      1239,
      'Jaquelyn',
      'Y',
      'Attack',
      'D2',
      'Defend',
      'D4',
      'Defend',
      'D5',
      'Defend',
      'D2',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Wind',
      'Earth',
      '',
      '',
      '',
      'No adjacent craft may Launch.',
      '',
      '',
    ],
    [
      201,
      2843,
      'Sudie',
      'Y',
      'Attack',
      'D3',
      'Defend',
      'D4',
      'Defend',
      'D3',
      'Defend',
      'D4',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'Water',
      'Wind',
      'Diana',
      '',
      '',
      '',
      'Map Maker',
      'On move, place a new terrain card on an adjacent empty space on 2in6.',
    ],
    [
      202,
      6673,
      'Bob',
      'Y',
      'Defend',
      'D2',
      'Enchant',
      'D1 R1',
      'Defend',
      'D3',
      'Defend',
      'D2',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'Wind',
      'Earth',
      '',
      '',
      '',
      '',
      'Physicist',
      'Sacrafice self to add +D3 defence to any craft and +D2 attack to it\'s opponent.',
    ],
    [
      203,
      4082,
      'Reita',
      'Y',
      'Attack',
      'D4',
      'Defend',
      'D5',
      'Attack',
      'D4',
      'Defend',
      'D3',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Fire',
      'Water',
      'Justa',
      'Fellow',
      'Hide',
      'Defend at -D1 vs Fire or Air.',
      '',
      '',
    ],
    [
      204,
      7361,
      'Myrle',
      'Y',
      'Enchant',
      'D1 R1',
      'Defend',
      'D4',
      'Fly',
      'R5',
      'Defend',
      'D3',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Earth',
      'Fire',
      'Eden',
      '',
      '',
      '',
      'Chimney Sweep',
      'Cannot be jumped over.',
    ],
    [
      205,
      4515,
      'Elicia',
      'Y',
      'Defend',
      'D4',
      'Defend',
      'D4',
      'Defend',
      'D5',
      'Enchant',
      'D4 R1',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Earth',
      'Fire',
      '',
      '',
      '',
      '',
      'Spotter',
      'Adjacent enemy craft are in range of Shoot or Launch regardless of the distance.',
    ],
    [
      206,
      1303,
      'Keena',
      'Y',
      'Attack',
      'D5',
      'Defend',
      'D5',
      'Enchant',
      'D4 R3',
      'Defend',
      'D4',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'Y',
      'Fire',
      'Water',
      '',
      '',
      '',
      '',
      'Singer',
      'Sacrifice self at any time to reveal all hidden craft.',
    ],
    [
      207,
      9172,
      'Hunter',
      'Y',
      'Defend',
      'D3',
      'Attack',
      'D2',
      'Defend',
      'D2',
      'Defend',
      'D3',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Fire',
      'Water',
      'Britni',
      'Duke',
      'Vitiate',
      '',
      'Bird Hunter',
      'Attack at +D2 vs any craft with Fly.',
    ],
    [
      208,
      8166,
      'Denna',
      'Y',
      'Defend',
      'D4',
      'Fly',
      'R3',
      'Defend',
      'D3',
      'Fly',
      'R3',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'Water',
      'Wind',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      209,
      7187,
      'Britta',
      'Y',
      'Defend',
      'D2',
      'Defend',
      'D5',
      'Attack',
      'D2',
      'Attack',
      'D3',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Fire',
      'Water',
      'Jacqulyn',
      '',
      '',
      'All combat at +D1 vs Lord.',
      '',
      '',
    ],
    [
      210,
      8406,
      'Stanley',
      'Y',
      'Defend',
      'D2',
      'Defend',
      'D5',
      'Enchant',
      'D1 R2',
      'Fly',
      'R5',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'Earth',
      'Fire',
      'Shawn',
      '',
      '',
      '',
      'Martyr',
      'Redeployed as victors craft upon defeat.',
    ],
    [
      211,
      3942,
      'Ladonna',
      'Y',
      'Attack',
      'D2',
      'Attack',
      'D4',
      'Attack',
      'D5',
      'Defend',
      'D3',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Earth',
      'Fire',
      'Burton',
      '',
      '',
      'No cardinally adjacent craft may Enchant.',
      '',
      '',
    ],
    [
      212,
      3391,
      'Lacy',
      'Y',
      'Defend',
      'D5',
      'Attack',
      'D4',
      'Attack',
      'D4',
      'Attack',
      'D5',
      'Y',
      'Y',
      'N',
      'Y',
      'Y',
      'Y',
      'N',
      'Y',
      'Earth',
      'Fire',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      213,
      9517,
      'Tisa',
      'Y',
      'Defend',
      'D4',
      'Fly',
      'R5',
      'Enchant',
      'D1 R1',
      'Attack',
      'D3',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Water',
      'Wind',
      '',
      '',
      '',
      'Defend at +D1 vs Wind.',
      '',
      '',
    ],
    [
      214,
      7769,
      'Julienne',
      'Y',
      'Attack',
      'D2',
      'Defend',
      'D3',
      'Attack',
      'D2',
      'Attack',
      'D5',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Wind',
      'Earth',
      'Ricarda',
      '',
      '',
      'Strip game of all banked clock ticks upon defeat.',
      '',
      '',
    ],
    [
      215,
      5817,
      'Nathanial',
      'Y',
      'Attack',
      'D5',
      'Fly',
      'R3',
      'Fly',
      'R5',
      'Defend',
      'D2',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Wind',
      'Earth',
      'Lorri',
      '',
      '',
      '',
      'Clockmaker',
      'All adjacent Punk must rotate once clockwise when placed adjacent.',
    ],
    [
      216,
      4149,
      'Milan',
      'Y',
      'Attack',
      'D4',
      'Attack',
      'D2',
      'Attack',
      'D2',
      'Defend',
      'D5',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Fire ',
      'Water ',
      'Kelly',
      '',
      '',
      'May rotate any card on the board once in lieu of turn.',
      '',
      '',
    ],
    [
      217,
      5813,
      'Liz',
      'Y',
      'Enchant',
      'D3 R1',
      'Attack',
      'D2',
      'Attack',
      'D2',
      'Attack',
      'D5',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'Water',
      'Wind',
      'Dona',
      '',
      '',
      'Adjacent opponent craft (opponents choice) destroyed upon failed attack.',
      '',
      '',
    ],
    [
      218,
      4772,
      'Linnea',
      'Y',
      'Attack',
      'D3',
      'Fly',
      'R3',
      'Defend',
      'D5',
      'Attack',
      'D4',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Water',
      'Wind',
      '',
      '',
      '',
      'Attack at +D2 vs Lord.',
      'Coward',
      'Will never move next to opponent with a title.',
    ],
    [
      219,
      3729,
      'Glenna',
      'Y',
      'Attack',
      'D4',
      'Fly',
      'R4',
      'Defend',
      'D3',
      'Defend',
      'D4',
      'Y',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Y',
      'Water',
      'Wind',
      '',
      'Duke',
      'Vitiate',
      '',
      'Jungle Explorer',
      'Attack at +D2 vs Earth on 1in6.',
    ],
    [
      220,
      4928,
      'Barbie',
      'Y',
      'Attack',
      'D3',
      'Attack',
      'D4',
      'Defend',
      'D3',
      'Defend',
      'D2',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'Y',
      'Earth',
      'Fire',
      'Jeromy',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      221,
      6859,
      'Roselee',
      'Y',
      'Attack',
      'D4',
      'Attack',
      'D4',
      'Attack',
      'D2',
      'Attack',
      'D2',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'Y',
      'Wind',
      'Earth',
      'Marlys',
      '',
      '',
      'Discard a card (your choice) from your ready upon defeat.',
      'Apothecary',
      'All adjacent allied Punks immune to vitiate on 3in6.',
    ],
    [
      222,
      863,
      'Ebony',
      'Y',
      'Attack',
      'D4',
      'Defend',
      'D3',
      'Fly',
      'R5',
      'Attack',
      'D5',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'Y',
      'Fire',
      'Water',
      'Stefany',
      '',
      '',
      '',
      'Sailor',
      'Can pass across Water while moving, cannot stop on Water.',
    ],
    [
      223,
      6830,
      'Luz',
      'Y',
      'Defend',
      'D3',
      'Defend',
      'D4',
      'Attack',
      'D3',
      'Attack',
      'D2',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'Water',
      'Wind',
      'Carlota',
      'Sir',
      'Enchant',
      'Immune to Launch.',
      '',
      '',
    ],
    [
      224,
      9387,
      'Eartha',
      'Y',
      'Attack',
      'D4',
      'Fly',
      'R5',
      'Defend',
      'D5',
      'Attack',
      'D2',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Earth',
      'Fire',
      'Terra',
      'Lord',
      'Launch',
      '',
      '',
      '',
    ],
    [
      225,
      3200,
      'Elin',
      'Y',
      'Fly',
      'R3',
      'Attack',
      'D3',
      'Attack',
      'D5',
      'Defend',
      'D2',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'N',
      'N',
      'Y',
      'Wind',
      'Earth',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      226,
      406,
      'Maurita',
      'Y',
      'Attack',
      'D3',
      'Fly',
      'R4',
      'Fly',
      'R3',
      'Defend',
      'D2',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'N',
      'N',
      'Wind',
      'Earth',
      '',
      '',
      '',
      'Always lose to fire.',
      '',
      '',
    ],
    [
      227,
      1134,
      'Lashaunda',
      'Y',
      'Fly',
      'R4',
      'Defend',
      'D2',
      'Attack',
      'D3',
      'Defend',
      'D5',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'Y',
      'Earth',
      'Fire',
      'Lesa',
      '',
      '',
      'Defend at -D1 vs Fire.',
      '',
      '',
    ],
    [
      228,
      1767,
      'Su',
      'Y',
      'Attack',
      'D2',
      'Fly',
      'R4',
      'Enchant',
      'D2 R3',
      'Defend',
      'D5',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'Water',
      'Wind',
      '',
      'Fellow',
      'Hide',
      'Defend at -D1 vs Lord.',
      '',
      '',
    ],
    [
      229,
      7963,
      'Audria',
      'Y',
      'Attack',
      'D2',
      'Fly',
      'R3',
      'Attack',
      'D5',
      'Fly',
      'R5',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Wind',
      'Earth',
      '',
      '',
      '',
      'Show victorious opponent the cards in your Ready upon defeat.',
      '',
      '',
    ],
    [
      230,
      6923,
      'Annamarie',
      'Y',
      'Attack',
      'D4',
      'Enchant',
      'D1 R3',
      'Attack',
      'D3',
      'Defend',
      'D3',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'N',
      'N',
      'N',
      'Water',
      'Wind',
      'Lorean',
      'Esquire',
      'Shoot',
      '',
      'Coal miner',
      'Defend at +D2 vs Earth on 4in6.',
    ],
    [
      231,
      8821,
      'Camie',
      'Y',
      'Defend',
      'D5',
      'Enchant',
      'D1 R1',
      'Defend',
      'D2',
      'Attack',
      'D2',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'Water',
      'Wind',
      '',
      '',
      '',
      'Cannot attack a General.',
      '',
      '',
    ],
    [
      232,
      8630,
      'Conchita',
      'Y',
      'Attack',
      'D2',
      'Defend',
      'D2',
      'Attack',
      'D3',
      'Defend',
      'D3',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'Fire',
      'Water',
      'Catrina',
      'Lord',
      'Launch',
      '',
      '',
      '',
    ],
    [
      233,
      5454,
      'Leighann',
      'Y',
      'Fly',
      'R4',
      'Attack',
      'D5',
      'Attack',
      'D3',
      'Fly',
      'R5',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'N',
      'N',
      'N',
      'Wind',
      'Earth',
      '',
      '',
      '',
      'Cannot attack fire.',
      'Professor',
      'All adjacent craft Attack & Defend at -D2.',
    ],
    [
      234,
      8686,
      'Stephanie',
      'Y',
      'Fly',
      'R4',
      'Attack',
      'D4',
      'Fly',
      'R4',
      'Defend',
      'D2',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Earth',
      'Fire',
      'Steven',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      235,
      1139,
      'Kerry',
      'Y',
      'Defend',
      'D5',
      'Fly',
      'R3',
      'Defend',
      'D4',
      'Attack',
      'D3',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'Y',
      'Fire',
      'Water',
      'Tu',
      '',
      '',
      '',
      'Submariner',
      'Can pass through Water while moving, cannot stop on Water.',
    ],
    [
      236,
      6358,
      'Peg',
      'Y',
      'Fly',
      'R3',
      'Fly',
      'R4',
      'Attack',
      'D4',
      'Attack',
      'D5',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'Y',
      'Y',
      'Y',
      'Earth',
      'Fire',
      'Leta',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      237,
      3580,
      'Ellie',
      'Y',
      'Fly',
      'R3',
      'Fly',
      'R5',
      'Fly',
      'R5',
      'Defend',
      'D4',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'Water',
      'Wind',
      'Dwight',
      'Duke',
      'Vitiate',
      'Defend at +D2 vs Punks with titles.',
      'Spotter',
      'Adjacent enemy craft are in range of Shoot or Launch regardless of the distance.',
    ],
    [
      238,
      5516,
      'Mechelle',
      'Y',
      'Defend',
      'D4',
      'Defend',
      'D3',
      'Fly',
      'R3',
      'Attack',
      'D5',
      'Y',
      'Y',
      'N',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Water',
      'Wind',
      'Teddy',
      '',
      '',
      '',
      'Martyr',
      'All adjacent Punks destroyed upon defeat.',
    ],
    [
      239,
      1135,
      'Gertrudis',
      'Y',
      'Fly',
      'R5',
      'Attack',
      'D4',
      'Attack',
      'D5',
      'Defend',
      'D3',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Water',
      'Wind',
      '',
      'Sir',
      'Enchant',
      '',
      '',
      '',
    ],
    [
      240,
      7103,
      'Celena',
      'Y',
      'Fly',
      'R3',
      'Defend',
      'D4',
      'Attack',
      'D5',
      'Defend',
      'D2',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Earth',
      'Fire',
      'Tamekia',
      'Duke',
      'Vitiate',
      '',
      '',
      '',
    ],
    [
      241,
      3575,
      'Lida',
      'Y',
      'Attack',
      'D2',
      'Attack',
      'D5',
      'Defend',
      'D5',
      'Fly',
      'R5',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Earth',
      'Fire',
      '',
      'Duke',
      'Vitiate',
      '',
      'Singer',
      'Sacrifice self at any time to reveal all hidden craft.',
    ],
    [
      242,
      8616,
      'Mariel',
      'Y',
      'Attack',
      'D2',
      'Fly',
      'R5',
      'Attack',
      'D4',
      'Attack',
      'D3',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'Y',
      'Earth',
      'Fire',
      'Thomas',
      'Esquire',
      'Shoot',
      'Rotates opposing craft clockwise upon successful defend.',
      '',
      '',
    ],
    [
      243,
      1341,
      'Fredericka',
      'Y',
      'Fly',
      'R5',
      'Enchant',
      'D2 R3',
      'Defend',
      'D5',
      'Fly',
      'R4',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'N',
      'N',
      'N',
      'Earth',
      'Fire',
      '',
      'Duke',
      'Vitiate',
      '',
      'Mad Hatter',
      'Attack another of your players cards if adjacent on 1in6 with D1.',
    ],
    [
      244,
      5269,
      'Tran',
      'Y',
      'Attack',
      'D5',
      'Fly',
      'R3',
      'Defend',
      'D2',
      'Attack',
      'D2',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Water',
      'Wind',
      '',
      '',
      '',
      '',
      'Butcher',
      'Defend at +D2 when adjacent to Barber.',
    ],
    [
      245,
      2611,
      'Albert',
      'Y',
      'Defend',
      'D3',
      'Fly',
      'R3',
      'Defend',
      'D2',
      'Enchant',
      'D2 R3',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'Water',
      'Wind',
      'Wilber',
      'Esquire',
      'Shoot',
      'Cannot attack water.',
      'Politician',
      'Upon successful attack, players general is replaced by first card on ready pile.',
    ],
    [
      246,
      2662,
      'Jeanmarie',
      'Y',
      'Fly',
      'R3',
      'Attack',
      'D3',
      'Defend',
      'D2',
      'Attack',
      'D2',
      'Y',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Water',
      'Wind',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      247,
      4724,
      'Illa',
      'Y',
      'Defend',
      'D2',
      'Attack',
      'D2',
      'Fly',
      'R4',
      'Attack',
      'D3',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Water',
      'Wind',
      'Quintin',
      '',
      '',
      'Defend at +D1 vs Fire or Air.',
      '',
      '',
    ],
    [
      248,
      5627,
      'Kyra',
      'Y',
      'Defend',
      'D5',
      'Defend',
      'D2',
      'Defend',
      'D2',
      'Defend',
      'D2',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'Y',
      'Water',
      'Wind',
      'Tessie',
      'Sir',
      'Enchant',
      '',
      'Physicist',
      'Sacrafice self to add +D3 defence to any craft and +D2 attack to it\'s opponent.',
    ],
    [
      249,
      7366,
      'Samuel',
      'Y',
      'Defend',
      'D5',
      'Attack',
      'D3',
      'Attack',
      'D2',
      'Defend',
      'D2',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'Earth',
      'Fire',
      '',
      '',
      '',
      '',
      'Alchemist',
      'Change one adjacent terrain card from Water to Earth after move.',
    ],
    [
      250,
      219,
      'Bonita',
      'Y',
      'Enchant',
      'D1 R3',
      'Attack',
      'D4',
      'Attack',
      'D4',
      'Attack',
      'D5',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'N',
      'Y',
      'Wind',
      'Earth',
      'Odilia',
      '',
      '',
      '',
      'Lycanthrop',
      'When a Clock Tick remains at end of turn, attack Punk to port on 3in6.',
    ],
    [
      251,
      8399,
      'Alysha',
      'Y',
      'Attack',
      'D5',
      'Attack',
      'D4',
      'Attack',
      'D3',
      'Enchant',
      'D3 R2',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Wind',
      'Earth',
      '',
      'Esquire',
      'Shoot',
      '',
      'Blue-Bottle',
      'Sacrifices self to cancel adjacent combat, after the attack and defence rolls takes place.',
    ],
    [
      252,
      7386,
      'Shyla',
      'Y',
      'Attack',
      'D2',
      'Defend',
      'D2',
      'Attack',
      'D4',
      'Defend',
      'D5',
      'Y',
      'Y',
      'Y',
      'Y',
      'N',
      'Y',
      'Y',
      'Y',
      'Water',
      'Wind',
      'Jeri',
      '',
      '',
      'No ordinally adjacent craft may Repair.',
      '',
      '',
    ],
    [
      253,
      8912,
      'Freddie',
      'Y',
      'Attack',
      'D5',
      'Attack',
      'D5',
      'Defend',
      'D4',
      'Defend',
      'D2',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'N',
      'N',
      'Water',
      'Wind',
      'Andree',
      '',
      '',
      '',
      'Fanatic',
      'Upon Defeat, all adjacent cards are defeated with the exception of Generals.',
    ],
    [
      254,
      1233,
      'Tomas',
      'Y',
      'Fly',
      'R5',
      'Attack',
      'D5',
      'Enchant',
      'D4 R3',
      'Defend',
      'D2',
      'Y',
      'N',
      'N',
      'N',
      'N',
      'N',
      'N',
      'Y',
      'Earth',
      'Fire',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
    [
      255,
      6007,
      'Delicia',
      'Y',
      'Attack',
      'D4',
      'Defend',
      'D3',
      'Attack',
      'D4',
      'Attack',
      'D2',
      'Y',
      'Y',
      'Y',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'Wind',
      'Earth',
      'Palmira',
      '',
      '',
      'Remove card from board upon defeat.',
      '',
      '',
    ],
    [
      256,
      9603,
      'Ami',
      'Y',
      'Defend',
      'D4',
      'Attack',
      'D5',
      'Fly',
      'R4',
      'Defend',
      'D3',
      'Y',
      'N',
      'N',
      'N',
      'Y',
      'Y',
      'Y',
      'Y',
      'Fire ',
      'Water ',
      'Nicholle',
      '',
      '',
      'Discard a card (your choice) from your ready upon defeat.',
      '',
      '',
    ],
  ],
});

// CONCATENATED MODULE: ./src/modules/CharacterSheets.js
// This file was designed by Mike Lakner



/**
 * @returns {void}
 */
function mbRebuildAllCharacterSheets() {
  // eslint-disable-next-line max-len
  const defaultGraphic = 'https://s3.amazonaws.com/files.d20.io/images/141291438/6TAoheVCteGgoN4BW3tmzA/original.png?15914477175';
  sendChat('API !-mb', '/w gm Start: mbRebuildAllCharacterSheets()');
  sendChat('API !-mb', `/w gm Building ${Library.length - 1} cards.`);

  for (let i = 1; i <= (Library.length - 1); i += 1) {
    // Create the character sheet
    const x = createObj(
      'character',
      {
        name: Library[i][2],
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
        const thisID = Library[0][j].replace(/\s/g, '');
        // Create the attribute and attach it to the character sheet
        createObj('attribute', { name: thisID.toLowerCase(), current: Library[i][j], characterid: x.id });
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
    if (Library[i][13] === 'Y') {
      createObj('ability', {
        name: '⇗', action: '!-mb doMFS', characterid: x.id, istokenaction: true,
      });
    }
    if (Library[i][14] === 'Y') {
      createObj('ability', {
        name: '⇒', action: '!-mb doMS', characterid: x.id, istokenaction: true,
      });
    }
    if (Library[i][15] === 'Y') {
      createObj('ability', {
        name: '⇘', action: '!-mb doMAS', characterid: x.id, istokenaction: true,
      });
    }
    if (Library[i][16] === 'Y') {
      createObj('ability', {
        name: '⇓', action: '!-mb doMA', characterid: x.id, istokenaction: true,
      });
    }
    if (Library[i][17] === 'Y') {
      createObj('ability', {
        name: '⇙', action: '!-mb doMAP', characterid: x.id, istokenaction: true,
      });
    }
    if (Library[i][18] === 'Y') {
      createObj('ability', {
        name: '⇐', action: '!-mb doMP', characterid: x.id, istokenaction: true,
      });
    }
    if (Library[i][19] === 'Y') {
      createObj('ability', {
        name: '⇖', action: '!-mb doMFP', characterid: x.id, istokenaction: true,
      });
    }
    // Create action buttons
    let didThis = '';
    for (let j = 4; j <= 10; j += 2) {
      if ((Library[i][j] !== 'Nothing') && (Library[i][j] !== 'Defend')) {
        // Only add one button for each
        if (didThis.indexOf(Library[i][j]) === -1) {
          createObj('ability', {
            name: Library[i][j], action: `!-mb do${Library[i][j]}`, characterid: x.id, istokenaction: true,
          });
          didThis += Library[i][j];
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

// CONCATENATED MODULE: ./src/modules/CompassRose.js
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
  // Now place one of each terrains arround CompassRose
  switch (theRose.get('rotation')) {
    case 0:
      mbPlaceTerrain('Earth', 1050 - 140, 1050 - 140);
      mbPlaceTerrain('Wind', 1050 + 140, 1050 - 140);
      mbPlaceTerrain('Fire', 1050 + 140, 1050 + 140);
      mbPlaceTerrain('Water', 1050 - 140, 1050 + 140);
      break;
    case 90:
      mbPlaceTerrain('Earth', 1050 + 140, 1050 - 140);
      mbPlaceTerrain('Wind', 1050 + 140, 1050 + 140);
      mbPlaceTerrain('Fire', 1050 - 140, 1050 + 140);
      mbPlaceTerrain('Water', 1050 - 140, 1050 - 140);
      break;
    case 180:
      mbPlaceTerrain('Earth', 1050 + 140, 1050 + 140);
      mbPlaceTerrain('Wind', 1050 - 140, 1050 + 140);
      mbPlaceTerrain('Fire', 1050 - 140, 1050 - 140);
      mbPlaceTerrain('Water', 1050 + 140, 1050 - 140);
      break;
    default:
      mbPlaceTerrain('Earth', 1050 - 140, 1050 + 140);
      mbPlaceTerrain('Wind', 1050 - 140, 1050 - 140);
      mbPlaceTerrain('Fire', 1050 + 140, 1050 - 140);
      mbPlaceTerrain('Water', 1050 + 140, 1050 + 140);
  }
  // Reset the flags
  state.mbBR549.AmBusy = wasBusy;
  state.mbBR549.AllowDelete = wasAllowDelete;
  state.mbBR549.Manual = wasManual;
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

// CONCATENATED MODULE: ./src/Temp/CommandDispatch.js
// This file was designed by Mike Lakner





/**
 *
 */
function TestThis() {
  giveCardToPlayer('-M9-0uy6dgDNUpGjFpIc', '-M7wGcomWC36lTQKqg82');
}

/**
 *
 */
function CommandDispatchInit() {
  // usage - !-mb [args]
  on('chat:message', (msg) => {
    // log(['!-mb: ',{'Command ':msg}]);
    if (msg.type === 'api' && msg.content.indexOf('!-mb') === 0) {
      const args = msg.content.split(' ');
      // Send all !--mb command text to GM for review
      log(`Fm: ${msg.who} Msg: ${msg.content}`);
      // Is this player a GM?
      if (playerIsGM(msg.playerid)) {
        // GM only commands go here
        switch (args[1].toLowerCase()) {
          case 'start': // Start a new game
            if (args[2].toLowerCase() === 'newgame') {
              mbResetGameState();
              mbStartNewGame();
            } else sendChat('Start', 'Was it \'NewGame\' that you wanted?');
            return;
          case 'rebuildallcharactersheets': // Rebuild all character sheets
            mbPurgeAllCharacterSheets();
            mbRebuildAllCharacterSheets();
            return;
          case 'purgeAllcharactersheets': // Purge all characters with the is_mbc attribute set to true
            mbPurgeAllCharacterSheets();
            return;
          case 'show':
            if (args[2].toLowerCase() === 'gamestate') sendChat('Show', JSON.stringify(state));
            else sendChat('Show', 'Was it \'GameState\' that you wanted?');
            return;
          case 'manual':
            if (args[2].toLowerCase() === 'on') {
              // Allow manual editing of the board
              state.mbBR549.Manual = true;
            } else if (args[2].toLowerCase() === 'off') {
              // Disallow manual editing of the board
              state.mbBR549.Manual = false;
            } else {
              sendChat('Manual', 'On or Off, you need to pick one.');
            }
            return;
          case 'reset': // Start a new game
            if (args[2].toLowerCase() === 'gamestate') mbResetGameState();
            else sendChat('Start', 'Was it \'GameState\' that you wanted?');
            return;
          case 'allowdelete':
            if (args[2].toLowerCase() === 'delete') {
              if (args[3].toLowerCase() === 'on') {
                // Allow the deleting of graphics
                state.mbBR549.AllowDelete = true;
              } else if (args[2].toLowerCase() === 'off') {
                // Disallow the deleting of graphics
                state.mbBR549.AllowDelete = false;
              } else {
                sendChat('Manual', 'On or Off, you need to pick one.');
              }
            }
            return;
          case 'testthis': // A way to call a function you want to test
            TestThis();
            return;
          case '--help':
          case '--?':
            sendChat('GM Command', 'GM Commands:');
            sendChat('GM Command', '&nbsp;Manual On/Off');
            sendChat('GM Command', '&nbsp;Reset GameState');
            sendChat('GM Command', '&nbsp;AllowDelete On/Off');
            sendChat('GM Command', '&nbsp;TestThis');
            sendChat('GM Command', '&nbsp;RebuildAllCharacterSheets');
            sendChat('GM Command', '&nbsp;PurgeAllCharacterSheets');
            break;
          default:
            break;
        }
      }
      // Commands that are GM agnostic go here
      switch (args[1]) {
        case 'TimeSlip':
          sendChat('API !-mb', 'A TimeSlip is a bit of a mind trip.');
          return;
        case 'doMFP':
          // mbMoveForwardPort(args);
          return;
        case 'doMFS':
          // mbMoveForwardStarboard(args);
          return;
        case '--Help':
        case '--?':
        default:
          sendChat('Command', 'General Commands:');
          sendChat('Command', '&nbsp;This');
          sendChat('Command', '&nbsp;That');
      }
    }
  });
}

// CONCATENATED MODULE: ./src/MineBall.js









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
  CommandDispatchInit();
  EmblemBuildInit();

  on('chat:message', handleInput);
  on('change:graphic', handleTokenMovement);
  on('change:card', handleCardMovement);
  on('add:card', handleNewCard);
  on('change:hand', handleHandChange);
});


/***/ })
/******/ ]);