import Emblem from 'Lib/Emblem'; // eslint-disable-line no-unused-vars

export default class Player {
  /**
   * @param {string} id - Roll20-defined player Id
   */
  contructor(id) {
    this.id = id;
    this.emblem = null;
  }

  /**
   * @returns {string} - Roll20-defined player Id
   */
  getId() {
    return this.id;
  }

  /**
   * @returns {Emblem} - Emblem representing the player
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
}
