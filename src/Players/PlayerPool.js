import Player from 'Players/Player';
import Emblem from 'Lib/Emblem';

/** @type {Object.<string, Player>} */
let players = {};

/**
 * @returns {Object.<string, Player>}
 */
export function getPlayers() {
  return players;
}

/**
 * @param {Object.<string, Player>} newPlayerList
 * @returns {void}
 */
export function setPlayers(newPlayerList) {
  players = newPlayerList;
  state.MineBall.players = players;
}


/**
 * Restores `players` from the JSON loaded from FireBase, into Player instances
 *
 * @param {Object.<string, Object>} playerData
 * @returns {void}
 */
export function deserializePlayerObject(playerData) {
  const playerIds = Object.keys(playerData);
  const rebuiltPlayers = {};

  playerIds.forEach((cachedPlayerId) => {
    /** @type {import('Lib/Emblem').EmblemJson} */
    const playerEmblemData = playerData[cachedPlayerId].emblem;
    const restoredPlayer = new Player(cachedPlayerId);

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
