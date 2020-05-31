
/**
 * @param {object} sourceToken - Token initiating the attack
 * @param {object} targetToken - The defending token
 * @returns {boolean}
 */
function actionAttack(sourceToken, targetToken) {
  return { sourceToken, targetToken };
}

export default {
  attach: actionAttack,
};
