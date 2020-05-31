/**
 * @namespace App.Lib
 */

export default class Command {
  /**
   * @param {string} cmd - The string representation of the command.
   * @param {Function} func - Actual callback function for the command.
   * @param {string} desc - Description of the command's purpose.
   * @param {string[]} paramList - list of parameter references of what the command might expect.
   */
  constructor(cmd, func, desc, paramList) {
    this.cmd = cmd;
    this.func = func;
    this.desc = desc;
    this.paramList = paramList;
  }
}
