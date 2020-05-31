import Player from 'Player/Player';
import Command from 'Lib/Command';
import Emblem from 'Lib/Emblem';

const helpParam = '--help';

/** @type {object.<string, Player>}} */
const players = {};

/** @type {{String: Command}} */
const commandList = {};

/** @type {Emblem[]} */
let emblems = null;

/**
 * @param {object} msg - Roll20 defined
 * @param {string} who - Player's human name
 * @param {string} playerId - reference of the player
 * @param {string[]} args - arguments for the command
 * @returns {void}
 */
const helpCmd = (msg, who, playerId, args) => { // eslint-disable-line no-unused-vars
  // Let's iterate over each command, extracting the description and such into html.
  const commandPreHtml = (/** @type {Command} */command) => {
    // Let's grab a list of all param examples, and join them with spaces.
    /** @type {string} */
    const paramExample = command.paramList.join(' ');
    return `<hr><pre>!mineball ${command.cmd} ${paramExample}</pre><p>${command.desc}</p>`;
  };

  const commandKeyList = Object.keys(commandList);
  const commandDescriptions = commandKeyList.map((commandKey) => commandPreHtml(commandList[commandKey])).join('');

  sendChat('Mine Ball Help',
    `<p>Below is a list of commands available to you for this game.</p>
    <p>If you provide \`${helpParam}\` after some commands, it will provide additional details. Example:</p>
    <pre>!minecraft emblem ${helpParam}</pre>
    ${commandDescriptions}`);
};
commandList.help = new Command(
  'help',
  helpCmd,
  '<p>Provides general help, and a list of all commands.',
  [],
);

/**
 * @param {string} who - Player's human name
 */
const showHelpEmblem = (who) => { // eslint-disable-line no-unused-vars
  const emblemItem = (emblem) => `<p><img width='30' src='${emblem.url}'>
    <code style='border-radius: 0.25em; user-select: all; border: solid black 1px;'>${emblem.name}</code></p>`;
  const emblemList = emblems.map((emblem) => emblemItem(emblem)).join('');

  sendChat('Mine Ball Help',
    `<p>Choose from one of the available emblems below.</p>
    <p>You cannot choose an emblem if another player has already selected it.</p>
    <p>To select an emblem, type
      <code style='background: #F5F5DC'>!mineball emblem &lt;your selection&gt;</code> in the messages. Example:</p>
    <pre style='background: #F5F5DC; user-select: all; -webkit-user-select: all'>!mineball emblem three-leaves</pre>
    ${emblemList}`);
};

/**
 * @param {object} msg - Roll20 defined
 * @param {string} who - Player's human name
 * @param {string} playerId - reference of the player
 * @param {string[]} args - arguments for the command
 * @returns {void}
 */
const emblemCmd = (msg, who, playerId, args) => {
  // Player just needs help with the command
  if (args.includes(helpParam)) {
    showHelpEmblem(who);
    return;
  }
  const emblemChoice = args.shift();
  const emblemNameList = emblems.map((emblem) => emblem.name);
  const emblemIndex = emblemNameList.indexOf(emblemChoice);

  // Player provided an invalid emblem reference
  if (emblemChoice === undefined || emblemIndex === -1) {
    sendChat(who, 'Need to provide a valid Emblem choice.');
    showHelpEmblem(who);
    return;
  }

  const playerExists = playerId in players;

  if (!playerExists) {
    // Player not yet part of the game
    players[playerId] = new Player(playerId);
  }

  /** @type {Player} player */
  const player = players[playerId];
  player.setEmblem(emblems[emblemIndex]);

  sendChat(who, `You are now <img width='30' src='${player.getEmblem().url}'>`);

  // log(`Player, ${who}, now has the emblem ${player.getEmblem().name}`);
};
commandList.emblem = new Command(
  'emblem',
  emblemCmd,
  `Command is used to join the game, and declare/change what emblem will represent you as a player.
    The emblem will be represented on all of your cards. (${helpParam} avail)`,
  ['emblemName'],
);


/**
 * @param {object} msg - Roll20 defined
 * @param {string} who - Player's human name
 * @param {string} playerId - reference of the player
 * @param {string[]} args - arguments for the command
 * @returns {void}
 */
const whoAmICmd = (msg, who, playerId, args) => { // eslint-disable-line no-unused-vars
  const playerExists = playerId in players;
  if (!playerExists) {
    sendChat(who,
      'You are not yet a player in the game. Use the <code>!mineball help</code> command to understand how to join.');
  } else {
    /** @type {Player} player */
    const player = players[playerId];
    sendChat(who, `You are <img width='30' src='${player.getEmblem().url}'>`);
  }
};
commandList.whoami = new Command(
  'whoami',
  whoAmICmd,
  'Informs you of which emblem belongs to you, and thereby which cards you should control.',
  [],
);

/**
 * @param {object} msg - Roll20 defined object
 */
const handleInput = (msg) => {
  if (msg.type !== 'api') {
    return;
  }

  /** @type {string} */
  const who = (getObj('player', msg.playerid) || { get: () => 'API' }).get('_displayname');
  /** @type {number} */
  const playerId = msg.playerid;
  /** @type {Array} */
  const args = msg.content.split(/\s+/);

  if (args.shift() !== '!mineball' || args.length === 0) {
    return;
  }

  const cmdRef = args.shift();
  const command = cmdRef in commandList ? commandList[cmdRef] : commandList.help;

  command.func(msg, who, playerId, args);
};

on('ready', () => {
  emblems = JSON.parse(Campaign().get('token_markers'))
    .forEach((emblem) => new Emblem(emblem.id, emblem.url, emblem.name, emblem.tag));
  on('chat:message', handleInput);
});
