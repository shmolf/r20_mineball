// -----
// This module was added by Mike Lakner to house the lions share of mechanics of the game play.
// -----

/**
 *
 */
export function mbStartNewGame() {
    // Log it down
    log('Start new game.');
    // Return based on state switches
    if (state.mbBR549.InSetup === true) {
      log(['Start New Game Aborted', { state }]);
      return;
    }
    // Flag as busy and in setuo
    state.mbBR549.AmBusy = true;
    state.mbBR549.InSetup = true;
    // Delete existing graphics
    mbClearBoard();
    // Recall all cards
    mbRecallCards();
    // Rebuild basic board
    mbResetBasicBoard();
    // Place the compassrose
    mbPlaceCompassRose();
    // Deal Terrain cards to player
    mbDealTerrainCards(state.mbBR549.InitialTerrainCards);
    // Deal Punk cards to player
    mbDealMineBallCards(state.mbBR549.InitialMineBallCards);
    // Place the targeting graphics
    mbPlaceReticle();
    mbPlaceLoop();
    // All done, set up back to ready
    state.mbBR549.AmBusy = false;
    state.mbBR549.InSetup = false;
    state.mbBR549.AmReady = true;
  }
  
  /**
   *
   */
  function mbRecallCards() {
    log('Recall Cards.');
    // Remember state flage
    const wasBusy = state.mbBR549.AmBusy;
    const wasAllowDelete = state.mbBR549.AllowDelete;
    const wasManual = state.mbBR549.Manual;
    // Set the state flags
    state.mbBR549.AmBusy = true;
    state.mbBR549.AllowDelete = true;
    state.mbBR549.Manual = true;
    // Get the decks
    const theDecks = findObjs({ _type: 'deck' });
    log(['Decks', { theDecks }]);
    theDecks.forEach((obj) => {
      log(['Recalling', { obj }]);
      recallCards(obj.get('_id'));
      // hide the deck
      obj.set('shown', false);
      // SHuffle the deck
      shuffleDeck(obj.get('_id'), true);
    });
    // Reset the flags
    state.mbBR549.AmBusy = wasBusy;
    state.mbBR549.AllowDelete = wasAllowDelete;
    state.mbBR549.Manual = wasManual;
  }
  