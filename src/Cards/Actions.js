
/**
 * @param {Object} sourceToken - Token initiating the attack
 * @param {Object} targetToken - The defending token
 * @returns {boolean}
 */
function attack(sourceToken, targetToken) {
  return { sourceToken, targetToken };
}

export default {
  attack,
};
