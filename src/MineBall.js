import Player from 'Players/Player';
import Command from 'Commands/Command';
import EmblemCommand from 'Commands/EmblemCommand';
import HelpCommand from './Commands/HelpCommand';
import WhoAmICommand from './Commands/WhoAmICommand';

/** @type {object.<string, Player>}} */
let players = {};

/** @type {{String: Command}} */
const commandList = {};

const helpCommand = new HelpCommand(commandList);
commandList[helpCommand.cmd] = helpCommand;
const emblemCommand = new EmblemCommand(players);
commandList[emblemCommand.cmd] = emblemCommand;
const whoAmICommand = new WhoAmICommand(players);
commandList[whoAmICommand.cmd] = whoAmICommand;

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

  switch (cmdRef) {
    case emblemCommand.cmd:
      players = commandList[cmdRef].func(msg, who, playerId, args);
      break;
    case whoAmICommand.cmd:
      commandList[cmdRef].func(msg, who, playerId, args);
      break;
    case helpCommand.cmd:
    default:
      helpCommand.func(msg, who, playerId, args);
  }
};

on('ready', () => {
  on('chat:message', handleInput);
});
