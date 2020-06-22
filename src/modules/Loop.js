// Handle all things Loop

/**
 * @param {Roll20Object} theObj
 */
// eslint-disable-next-line no-unused-vars
function mbHandleLoopMove(theObj) {
  log(['Loop Move',{theObj}]);
}


/**
 *
 */
function mbPlaceLoop() {
    log('Place Loop.');
    // Remember state flage
    const wasBusy = state.mbBR549.AmBusy;
    const wasAllowDelete = state.mbBR549.AllowDelete;
    const wasManual = state.mbBR549.Manual;
    // Set the state flags
    state.mbBR549.AmBusy = true;
    state.mbBR549.AllowDelete = true;
    state.mbBR549.Manual = false;
    // Get the compass rose
    const theChars = findObjs({ _type: 'character', name: 'Loop' });
    log(['Loop', { theChars }]);
    // Place the graphic
    const theLoop = createTableGraphic(
      theChars[0].get('name'),
      theChars[0].get('avatar'),
      1050,
      1050,
      140,
      140,
      'objects',
    );
    // Bring it to the front
    toFront(theLoop);
    // Reset the flags
    state.mbBR549.AmBusy = wasBusy;
    state.mbBR549.AllowDelete = wasAllowDelete;
    state.mbBR549.Manual = wasManual;
  }
  