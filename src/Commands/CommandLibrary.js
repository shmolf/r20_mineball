import Command from 'Commands/Command';
import EmblemCommand from 'Commands/EmblemCommand';
import HelpCommand from 'Commands/HelpCommand';
import WhoAmICommand from 'Commands/WhoAmICommand';
import ResetPlayersCommand from 'Commands/ResetPlayersCommand';

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

/**
 * @param {string} command
 * @param {string[]} args
 * @param {string} who
 * @param {string} playerId
 */
export default function RunCommand(command, args, who, playerId) {
  switch (command) {
    case emblemCommand.cmd:
      // We'll want to overwrite the players, in case there were any changes
      emblemCommand.func(who, playerId, args);
      break;
    case whoAmICommand.cmd:
      whoAmICommand.func(who, playerId);
      break;
    case resetPlayersCommand.cmd:
      resetPlayersCommand.func();
      break;
    case helpCommand.cmd:
    default:
      helpCommand.func(who);
  }
}
