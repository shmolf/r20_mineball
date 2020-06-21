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

class Command {
  constructor() {
    this.helpParam = '--help';
    this.subCommands = {};
  }
}

// CONCATENATED MODULE: ./src/Commands/EmblemCommand.js
/**
 * @namespace App.Commands
 */






/** @type {Emblem[]} */
let emblems = null;

/** @type {Object.<string, Emblem>} */
const usedEmblems = {};

class EmblemCommand_EmblemCommand extends Command {
  constructor() {
    super();

    this.cmd = 'emblem';
    this.desc = `Command is used to join the game, and declare/change what emblem will represent you as a player.
      The emblem will be represented on all of your cards. (${this.helpParam} avail)`;
    this.paramList = ['emblemName'];
    this.func = SetPlayerEmblem;
  }
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


/**
 * Explains how to use the Emblem command
 *
 * @param {string} who - user to whisper back to
 * @returns {void}
 */
function EmblemHelp(who) {
  // Let's filter out the used emblems, and for the ones that remain, create a button list
  const emblemList = emblems
    .filter((emblem) => !(emblem.name in usedEmblems))
    .map((/** @type {Emblem} */emblem) => {
      const { name, url } = emblem;
      return `<p><a href='!mineball emblem ${name}'><img width='30' src='${url}' /> ${name}</a></p>`;
    })
    .join('');

  sendChat('Mine Ball Help',
    `/w ${who} <p>Choose from one of the available emblems below.</p>
    <p>You cannot choose an emblem if another player has already selected it.</p>
    <p>Click the emblem you'd like to choose to represent you.</p>
    ${emblemList}`);
}

/**
 * @param {Object} msg - oll20 defined
 * @param {string} who - layer's human name
 * @param {string} playerId - reference of the player
 * @param {string[]} args - arguments for the command
 * @returns {void}
 */
function SetPlayerEmblem(msg, who, playerId, args) {
  // Player just needs help with the command
  if (args.includes(this.helpParam)) {
    populateUsedEmblems();
    EmblemHelp(who);
  }

  const emblemChoice = args.shift();
  const emblemNameList = emblems.map((emblem) => emblem.name);
  const emblemIndex = emblemNameList.indexOf(emblemChoice);

  // Player provided an invalid emblem reference
  if (emblemChoice === undefined || emblemIndex === -1) {
    sendChat('Mine Ball Error', `/w ${who} Need to provide a valid Emblem choice.`);
    EmblemHelp(who);
  }

  const gamePlayers = getPlayers();
  const playerExists = playerId in gamePlayers;

  if (!playerExists) {
    // Player not yet part of the game
    gamePlayers[playerId] = new Player_Player(playerId);
  }

  /** @type {Player} player */
  const player = gamePlayers[playerId];
  log(`player type: ${typeof player}`);
  player.setEmblem(emblems[emblemIndex]);

  sendChat('Emblem Choosen', `/w ${who} You are now <img width='30' src='${player.getEmblem().url}'>`);

  setPlayers(gamePlayers);
}

on('ready', () => {
  emblems = JSON.parse(Campaign().get('token_markers'))
    .map((emblem) => new Emblem(emblem.id, emblem.url, emblem.name, emblem.tag));
});

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
    this.paramList = [];

    /**
     * @param {Object} msg - oll20 defined
     * @param {string} who - layer's human name
     * @param {string} playerId - reference of the player
     * @param {string[]} args - arguments for the command
     * @returns {void}
     */
    this.func = (msg, who, playerId, args) => { // eslint-disable-line no-unused-vars
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
        return `<hr><pre>!mineball ${commandInstance.cmd} ${paramExample}</pre><p>${commandInstance.desc}</p>`;
      }

      const commandKeyList = Object.keys(gameCommands);
      const commandDescriptions = commandKeyList.map((commandKey) => commandPreHtml(gameCommands[commandKey])).join('');

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
    this.paramList = [];

    /**
     * @param {Object} msg - oll20 defined
     * @param {string} who - player's human name
     * @param {string} playerId - reference of the player
     * @param {string[]} args - arguments for the command
     * @returns {void}
     */
    this.func = (msg, who, playerId, args) => { // eslint-disable-line no-unused-vars
      const gamePlayers = getPlayers();
      const playerExists = playerId in gamePlayers;
      if (!playerExists) {
        sendChat('the Referee',
          `/w ${who} You are not yet a player in the game. Use the <code>!mineball help</code>
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
  /**
   * @param {Object.<string, Player>} gamePlayers - players registered in the game
   */
  // eslint-disable-next-line no-unused-vars
  constructor(gamePlayers) {
    super();

    this.cmd = 'reset-players';
    this.desc = 'Clears the list of Mineball players from the Campaign';
    this.paramList = [];

    this.func = () => { // eslint-disable-line no-unused-vars
      setPlayers({});
      log('Players are reset');
    };
  }
}

// CONCATENATED MODULE: ./src/MineBall.js








/** @type {Object.<string, Command>} */
const commandList = {};

/** @type {Object.<string, Graphic>} */
const cardsEnteringTheBoard = {};

const helpCommand = new HelpCommand_HelpCommand(commandList);
commandList[helpCommand.cmd] = helpCommand;
const emblemCommand = new EmblemCommand_EmblemCommand();
commandList[emblemCommand.cmd] = emblemCommand;
const whoAmICommand = new WhoAmICommand_WhoAmICommand();
commandList[whoAmICommand.cmd] = whoAmICommand;
const resetPlayersCommand = new ResetPlayersCommand_ResetPlayersCommand();
commandList[resetPlayersCommand.cmd] = resetPlayersCommand;

/**
 * @param {ChatEventData} msg - Roll20 defined object
 * @returns {void}
 */
function handleInput(msg) {
  if (msg.type !== 'api') {
    return;
  }

  /** @type {string} */
  const who = (getObj('player', msg.playerid) || { get: () => 'API' }).get('_displayname');
  /** @type {string} */
  const playerId = msg.playerid;
  /** @type {Array} */
  const args = msg.content.split(/\s+/);

  if (args.shift() !== '!mineball' || args.length === 0) {
    return;
  }

  const cmdRef = args.shift().toLowerCase();
  const players = getPlayers();

  switch (cmdRef) {
    case emblemCommand.cmd:
      // We'll want to overwrite the players, in case there were any changes
      Object.assign(players, emblemCommand.func(msg, who, playerId, args));
      setPlayers(players);

      break;
    case whoAmICommand.cmd:
      whoAmICommand.func(msg, who, playerId, args);
      break;
    case resetPlayersCommand.cmd:
      resetPlayersCommand.func();
      break;
    case helpCommand.cmd:
    default:
      helpCommand.func(msg, who, playerId, args);
  }
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
  log(['In the Handle Hand Change', cardId, typeof cardsEnteringTheBoard[cardId] !== 'undefined']);

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
        const tokens = findObjs({ type: 'graphic', subtype: 'token' });
        //  .filter((token) => (token.get('represents') === charId));
        log(['In the Token Section', tokens]);

        if (tokens.length > 0) {
          const token = tokens[0];
          log(['Found the token: ', token]);

          /*
          // Set the emblem on to token, for the given player
          token.set('statusmarkers', [player.getEmblem().name]);
          */
        }

        /*
        createObj('attribute', {
          characterid: charId,
          name: 'player_id',
          current: playerId,
        });
        */
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
    deserializePlayerObject(state.MineBall.players);
  }

  on('chat:message', handleInput);
  on('change:graphic', handleTokenMovement);
  on('change:card', handleCardMovement);
  on('add:card', handleNewCard);
  on('change:hand', handleHandChange);
  // mineballDeck = findObjs({ type: 'deck', name: 'Mine Ball' });
});


/***/ })
/******/ ]);