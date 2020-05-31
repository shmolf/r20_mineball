/**
 * @typedef Roll20
 * @type {object}
 * @property {string} id - Reference to the object instance
 * @property {GetFunction} get @inheritdoc
 * @property {SetFunction} set @inheritdoc
 * @memberof Roll20
 */

/**
 * @typedef GetFunction
 * @type {Function}
 * @name Roll20.get
 * @description Get the value of the given property, and return directly, or pass into a callback function.
 * @param {string} propertyName
 * @param {?Function} callback
 * @returns {*|void} - If no callback parameter is passed int, returns the value directly.
 *     Otherwise, the return is passed to the callback function.
 */

/**
 * @typedef SetFunction
 * @type {Function}
 * @name Roll20.set
 * @description Set the give property of the given name(s) with the new value(s)
 * @param {string|object.<string, *>} propertyName
 *      - Can either pass an object of key-values, or a string of a single property
 * @param {?*} propertyValue - Only needed if passing in a string in the first parameter, for a single property
 * @returns {void}
 */

/**
 * @typedef sendChat
 * @type {Function}
 * @param {string} speakingAs - Who should be presented as the sender of the message.
 *      Acceptable inputs: player|player_id, character|character_id, empty string - which will send as the GM
 *      - Can either pass an object of key-values, or a string of a single property
 * @param {string} message - message to be send. Can be HTML, with limited styling.
 * @param {?Function} callback - If specified, the message will be passed to the function, instead of the chat.
 *      - Paramter to the callback will be an array of message objects
 * @param {?object} options - Is not applicable if a callback parameter is specified.
 * @returns {void}
 * @memberof Roll20
 */

export default {};
