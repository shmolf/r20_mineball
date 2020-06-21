// This file was designed by Mike Lakner

/* eslint-disable */

// Setup the default state values
on("ready",function(){
  mbSetupGameState();
});
// -----
function mbSetupGameState()
{
  // Ensure the root exists
  if(!state.hasOwnProperty('mbBR549')) state.mbBR549 = {};
  // List each default state below
  // Generally busy flag to help prevent recursive calls
  if(!state.mbBR549.hasOwnProperty('AmBusy')) state.mbBR549.AmBusy = false;
  // Setting Up Game
  if(!state.mbBR549.hasOwnProperty('InSetup')) state.mbBR549.InSetup = false;
  // Allow the deletion of Graphics
  if(!state.mbBR549.hasOwnProperty('AllowDelete')) state.mbBR549.AllowDelete = false;
  // Assume we are not ready to play
  if(!state.mbBR549.hasOwnProperty('AmReady')) state.mbBR549.AmReady = false;
  // Manual mode for human editing of map, disllows resizing and the like
  if(!state.mbBR549.hasOwnProperty('Manual')) state.mbBR549.Manual = false;
  // Set the initial number of terrain cards dealt to each player
  if(!state.mbBR549.hasOwnProperty('InitialTerrainCards')) state.mbBR549.InitialTerrainCards = 5;
  // Set the initial number of Mine Ball cards dealt to each player
  if(!state.mbBR549.hasOwnProperty('InitialMineBallCards')) state.mbBR549.InitialMineBallCards = 5;
  // Build an array of Terrain cards in play
  if(!state.mbBR549.hasOwnProperty('TerrainCardsInPlay')) state.mbBR549.TerrainCardsInPlay = {};
  // Build an array of MineBall cards in play
  if(!state.mbBR549.hasOwnProperty('MineBallCardsInPlay')) state.mbBR549.MineBallCardsInPlay = {};
  // Log the state
  log(['System State',{state}]);
}
// -----
function mbResetGameState()
{
  log(['Reset GameState',{state}])
  delete state.mbBR549;
  mbSetupGameState();
}
