export default class Player {
  /**
   * @param {string} id
   */
  contructor(id) {
    this.id = id;
    this.emblem = null;
  }

  /**
   * @return {string}
   */
  getId() {
    return this.id;
  }

  /**
   * @return {Emblem}
   */
  getEmblem() {
    return this.emblem;
  }

  /**
   * @param {Emblem} emblem
   */
  setEmblem(emblem) {
    this.emblem = emblem;
  }
}
