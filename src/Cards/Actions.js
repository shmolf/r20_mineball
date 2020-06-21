
/* ----- Attack Start ----- */

/**
 * @param {Object} sourceToken - Token initiating the attack
 * @param {Object} targetToken - The defending token
 * @returns {boolean}
 */
function Enchant(sourceToken, targetToken) {
  return { sourceToken, targetToken };
}

/**
 * @param {Object} sourceToken - Token initiating the attack
 * @param {Object} targetToken - The defending token
 * @returns {boolean}
 */
function Launch(sourceToken, targetToken) {
  return { sourceToken, targetToken };
}

/**
 * @param {Object} sourceToken - Token initiating the attack
 * @param {Object} targetToken - The defending token
 * @returns {boolean}
 */
function Shoot(sourceToken, targetToken) {
  return { sourceToken, targetToken };
}

/**
 * @param {Object} sourceToken - Token initiating the attack
 * @param {Object} targetToken - The defending token
 * @returns {boolean}
 */
function Simple(sourceToken, targetToken) {
  return { sourceToken, targetToken };
}

/* ----- Attack End ----- */

/* ----- Movement Start ----- */

/**
 * @param {Object} sourceToken - Token initiating the attack
 * @param {Object} targetToken - The defending token
 * @returns {boolean}
 */
function Fly(sourceToken, targetToken) {
  return { sourceToken, targetToken };
}

/**
 * @param {Object} sourceToken - Token initiating the attack
 * @param {Object} targetToken - The defending token
 * @returns {boolean}
 */
function Jump(sourceToken, targetToken) {
  return { sourceToken, targetToken };
}

/**
 * @param {Object} sourceToken - Token initiating the attack
 * @param {Object} targetToken - The defending token
 * @returns {boolean}
 */
function Swap(sourceToken, targetToken) {
  return { sourceToken, targetToken };
}

/* ----- Movement End ----- */

/* ----- Utility Start ----- */

/**
 * @param {Object} sourceToken - Token initiating the attack
 * @param {Object} targetToken - The defending token
 * @returns {boolean}
 */
function Repair(sourceToken, targetToken) {
  return { sourceToken, targetToken };
}

/**
 * @param {Object} sourceToken - Token initiating the attack
 * @param {Object} targetToken - The defending token
 * @returns {boolean}
 */
function Vitiate(sourceToken, targetToken) {
  return { sourceToken, targetToken };
}

/**
 * @param {Object} sourceToken - Token initiating the attack
 * @param {Object} targetToken - The defending token
 * @returns {boolean}
 */
function Hide(sourceToken, targetToken) {
  return { sourceToken, targetToken };
}

/* ----- Utility End ----- */


export default {
  attack: {
    Enchant,
    Launch,
    Shoot,
    Simple,
  },
  movement: {
    Fly,
    Jump,
    Swap,
  },
  utility: {
    Repair,
    Vitiate,
    Hide,
  },
};
