
/**
 * @param {object} sourceToken - Token initiating the attack
 * @param {object} targetToken - The defending token
 * @returns {boolean}
 */
function attack(sourceToken, targetToken) {
  return { sourceToken, targetToken };
}

export default {
  attack,
};
