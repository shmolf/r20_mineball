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

  /**
   * This function is mostly likely not needed
   *
   * @returns {EmblemJson}
   */
  toJSON() {
    return {
      id: this.id,
      url: this.url,
      name: this.name,
      tag: this.tag,
    };
  }

  /**
   * This function is mostly likely not needed
   *
   * @param {EmblemJson|string} json
   * @returns {Emblem}
   */
  fromJSON(json) {
    /** @type {EmblemJson} */
    const obj = typeof json === 'string' ? JSON.parse(json) : json;

    this.id = obj.id;
    this.url = obj.url;
    this.name = obj.name;
    this.tag = obj.tag;

    return this;
  }
}

/**
 * This function is mostly likely not needed
 *
 * @param {EmblemJson|string} json
 * @returns {Emblem}
 */
Emblem.revive = (json) => {
  /** @type {EmblemJson} */
  const obj = typeof json === 'string' ? JSON.parse(json) : json;

  return new Emblem(obj.id, obj.url, obj.name, obj.tag);
};

/**
 * @typedef {Object} EmblemJson
 * @property {number} id
 * @property {string} url
 * @property {string} name
 * @property {string} tag
 */
