/**
 * @namespace App.Lib
 */

export default class Emblem {
  /**
   * @param {number} id - string id of the emblem
   * @param {string} url - url of the image for the emblem
   * @param {string} name - human-friendly name of the emblem
   * @param {string} tag - tags associated with the emblem
   */
  constructor(id, url, name, tag) {
    this.id = id;
    this.url = url;
    this.name = name;
    this.tag = tag;
  }
}
