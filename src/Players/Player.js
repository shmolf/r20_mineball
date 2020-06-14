import Emblem from 'Lib/Emblem'; // eslint-disable-line no-unused-vars

export default class Player {
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
Player.revive = (json) => {
  /** @type {PlayerJson} */
  const obj = typeof json === 'string' ? JSON.parse(json) : json;
  const emblem = Emblem.revive(obj.emblem);
  const player = new Player(obj.id);
  player.setEmblem(emblem);

  return player;
};

/**
 * @typedef {object} PlayerJson
 * @property {string} id
 * @property {import('Lib/Emblem').EmblemJson} emblem
 */
