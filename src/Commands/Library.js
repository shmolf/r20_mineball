import Command, { apiCommandId } from 'Commands/Command';
import EmblemCommand from 'Commands/EmblemCommand';
import HelpCommand from 'Commands/HelpCommand';
import WhoAmICommand from 'Commands/WhoAmICommand';
import ResetPlayersCommand from 'Commands/ResetPlayersCommand';
import StartCommand from 'Commands/StartCommand';
import InitCommand from 'Commands/InitCommand';
import ShowCommand from 'Commands/ShowCommand';

/** @type {Object.<string, Command>} */
const commandList = {};

const helpCommand = new HelpCommand(commandList);
commandList[helpCommand.cmd] = helpCommand;
const emblemCommand = new EmblemCommand();
commandList[emblemCommand.cmd] = emblemCommand;
const whoAmICommand = new WhoAmICommand();
commandList[whoAmICommand.cmd] = whoAmICommand;
const resetPlayersCommand = new ResetPlayersCommand();
commandList[resetPlayersCommand.cmd] = resetPlayersCommand;
const startCommand = new StartCommand();
commandList[startCommand.cmd] = startCommand;
const initCommand = new InitCommand();
commandList[initCommand.cmd] = initCommand;

/**
 * @param {string} pluginCommandRef
 * @param {string} command
 * @param {string[]} args
 * @param {string} who
 * @param {string} playerId
 */
export default function RunCommand(pluginCommandRef, command, args, who, playerId) {
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
      InitCommand.func(who, playerId, args);
      break;
    case showCommand.cmd:
      ShowCommand.func(who, playerId, args);
      break;
      case helpCommand.cmd:
    default:
      helpCommand.func(who);
  }
}
