// -----
// This module was created by Mike Lakner to house the code supporting the state of the game play.
// -----

/**
 *
 */
export function mbSetupGameState() {
  // Ensure the root exists
  if (typeof state.mbBR549 === 'undefined') state.mbBR549 = {};
  // List each default state below
  // Generally busy flag to help prevent recursive calls
  if (typeof state.mbBR549.AmBusy === 'undefined') state.mbBR549.AmBusy = false;
  // Setting Up Game
  if (typeof state.mbBR549.InSetup === 'undefined') state.mbBR549.InSetup = false;
  // Allow the deletion of Graphics
  if (typeof state.mbBR549.AllowDelete === 'undefined') state.mbBR549.AllowDelete = false;
  // Assume we are not ready to play
  if (typeof state.mbBR549.AmReady === 'undefined') state.mbBR549.AmReady = false;
  // Manual mode for human editing of map, disllows resizing and the like
  if (typeof state.mbBR549.Manual === 'undefined') state.mbBR549.Manual = false;
  // Set the initial number of terrain cards dealt to each player
  if (typeof state.mbBR549.InitialTerrainCards === 'undefined') state.mbBR549.InitialTerrainCards = 5;
  // Set the initial number of Mine Ball cards dealt to each player
  if (typeof state.mbBR549.InitialMineBallCards === 'undefined') state.mbBR549.InitialMineBallCards = 5;
  // Build an array of Terrain cards in play
  if (typeof state.mbBR549.TerrainCardsInPlay === 'undefined') state.mbBR549.TerrainCardsInPlay = {};
  // Build an array of MineBall cards in play
  if (typeof state.mbBR549.MineBallCardsInPlay === 'undefined') state.mbBR549.MineBallCardsInPlay = {};
  // Log the state
  log(['System State', { state }]);
}

/**
 *
 */
export function mbResetGameState() {
  log(['Reset GameState', { state }]);
  delete state.mbBR549;
  mbSetupGameState();
}

/**
 *
 */
export function mbShowGameState() {
  sendChat('Show', `<pre>${JSON.stringify(state)}</pre>`);
  log(['Show GameState', { state }]);
}
