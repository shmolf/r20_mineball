import RunCommand from 'App/Commands/Library';
import { playerCommandId, apiCommandId } from 'Commands/Command';

/**
 * @param {ChatEventData} msg - Roll20 defined object
 * @returns {void}
 */
export default (msg) => {
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
};
