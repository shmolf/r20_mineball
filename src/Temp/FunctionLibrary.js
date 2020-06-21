// This file was designed by Mike Lakner

/* eslint-disable */

// ---------------------
// Suggested and offered by Aaron to avoid an error when placing card
// ---------------------
const getCleanImgsrc = (imgsrc) => {
  let parts = imgsrc.match(/(.*\/images\/.*)(thumb|med|original|max)([^?]*)(\?[^?]+)?$/);
  if(parts) {
    return parts[1]+'thumb'+parts[3]+(parts[4]?parts[4]:`?${Math.round(Math.random()*9999999)}`);
  }
  return;
};
// ---------------------
function createTableGraphic(theName,theImage,theLeft,theTop,theHeight,theWidth,theLayer)
{
  log(['Create Table Graphic',{theName,theImage,theLeft,theTop,theHeight,theWidth}]);
  // Find the character
  var charObj = findObjs({_type: "character",  name: theName});
  var charID = charObj[0].get("_id");
  // Build the object
  var newObj = createObj
  (
      'graphic',
      {
          name:  theName,
          top: theTop,
          left: theLeft,
          imgsrc: getCleanImgsrc(theImage),
          width: theWidth,
          height: theHeight,
          layer: theLayer,
          pageid: Campaign().get('playerpageid'),
          isdrawing: true,
          represents: charID
      }
  );
  // Now ensure it looks and is where we want.
 handleGraphicChange(newObj);
 return newObj;
}
// -----
function mbStartNewGame()
{
  // Log it down
  log('Start new game.');
  // Return based on state switches
  if(state.mbBR549.InSetup == true)
  {
      log(['Start New Game Aborted',{state}]);
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
// -----
function mbDealMineBallCards(theQty)
{
  log('Deal Punk cards.');

  // Get the players
  var thePlayers = findObjs({_type: "player"});
  log(['Players',{thePlayers}]);
  // Get the Terrain deck
  var theDecks = findObjs({_type:'deck',name: 'Mine Ball'});
  log(['Decks',{theDecks}]);
  thePlayers.forEach(function(playerObj)
  {
      if(playerObj.get('_online'))
      {
          for(var i=1; i<=theQty; i++)
          {
              // Draw a card
              var theCard = drawCard(theDecks[0].get('_id'));
              // Give it to the player
              giveCardToPlayer(theCard,playerObj.get('_id'));
              var cardObj = getObj("card", theCard);
              var cardName = cardObj.get('name');
              // Record it's ownership
              state.mbBR549.MineBallCardsInPlay[cardName]={playerID: playerObj.get('_id'), inhand: true};
          }
      }
  });
}
// -----
function mbDealTerrainCards(theQty)
{
  log('Deal terrain cards.');

  // Get the players
  var thePlayers = findObjs({_type: "player"});
  log(['Players',{thePlayers}]);
  // Get the Terrain deck
  var theDecks = findObjs({_type:'deck',name: 'Terrain'});
  log(['Decks',{theDecks}]);
  thePlayers.forEach(function(playerObj)
  {
      if(playerObj.get('_online'))
      {
          for(var i=1; i<=theQty; i++)
          {
              // Draw a card
              var theCard = drawCard(theDecks[0].get('_id'));
              // Give it to the player
              giveCardToPlayer(theCard,playerObj.get('_id'));
              var cardObj = getObj("card", theCard);
              var cardName = cardObj.get('name');
              // Record it's ownership
              state.mbBR549.TerrainCardsInPlay[cardName]={playerID: playerObj.get('_id'), inhand: true};
          }
      }
  });
}
// -----
function mbPlaceLoop()
{
  log('Place Loop.');
  // Remember state flage
  var wasBusy = state.mbBR549.AmBusy;
  var wasAllowDelete = state.mbBR549.AllowDelete;
  var wasManual = state.mbBR549.Manual;
  // Set the state flags
  state.mbBR549.AmBusy = true;
  state.mbBR549.AllowDelete = true;
  state.mbBR549.Manual = false;
  // Get the compass rose
  var theChars = findObjs({_type:'character',name:'Loop'});
  log(['Loop',{theChars}]);
  //Place the graphic
  var theLoop = createTableGraphic
  (
      theChars[0].get('name'),
      theChars[0].get('avatar'),
      1050,
      1050,
      140,
      140,
      'objects'
  );
  // Bring it to the front
  toFront(theLoop);
  //Reset the flags
  state.mbBR549.AmBusy = wasBusy;
  state.mbBR549.AllowDelete = wasAllowDelete;
  state.mbBR549.Manual = wasManual;
}
// -----
function mbPlaceReticle()
{
  log('Place Loop.');
  // Remember state flage
  var wasBusy = state.mbBR549.AmBusy;
  var wasAllowDelete = state.mbBR549.AllowDelete;
  var wasManual = state.mbBR549.Manual;
  // Set the state flags
  state.mbBR549.AmBusy = true;
  state.mbBR549.AllowDelete = true;
  state.mbBR549.Manual = false;
  // Get the compass rose
  var theChars = findObjs({_type:'character',name:'Reticle'});
  log(['Loop',{theChars}]);
  //Place the graphic
  var theReticle = createTableGraphic
  (
      theChars[0].get('name'),
      theChars[0].get('avatar'),
      1050,
      1050,
      140,
      140,
      'objects'
  );
  // Bring it to the front
  toFront(theReticle);
  //Reset the flags
  state.mbBR549.AmBusy = wasBusy;
  state.mbBR549.AllowDelete = wasAllowDelete;
  state.mbBR549.Manual = wasManual;
}
// -----
function mbPlaceCompassRose()
{
  log('Place CompassRose.');
  // Remember state flage
  var wasBusy = state.mbBR549.AmBusy;
  var wasAllowDelete = state.mbBR549.AllowDelete;
  var wasManual = state.mbBR549.Manual;
  // Set the state flags
  state.mbBR549.AmBusy = true;
  state.mbBR549.AllowDelete = true;
  state.mbBR549.Manual = true;
  // Get the compass rose
  var theChars = findObjs({_type:'character',name:'CompassRose'});
  log(['CompassRose',{theChars}]);
  //Place the graphic
  var theRose = createTableGraphic
  (
      theChars[0].get('name'),
      theChars[0].get('avatar'),
      1050,
      1050,
      140,
      140,
      'map'
  );
  // Bring it to the front
  toFront(theRose);
  // Now rotate it random times
  var theTurns = randomInteger(20);
  for(var i = 1; i<= theTurns; i++)
  {
      switch (theRose.get('rotation'))
      {
          case 0:
              theRose.set('rotation',90);
              break;
          case 90:
              theRose.set('rotation',180);
              break;
          case 180:
              theRose.set('rotation',270);
              break;
          default:
              theRose.set('rotation',0);
      }
  }
  // Now place one of each terrains arround CompassRose
  switch (theRose.get('rotation'))
  {
      case 0:
          mbPlaceTerrain('Earth',1050-140,1050-140);
          mbPlaceTerrain('Wind',1050+140,1050-140);
          mbPlaceTerrain('Fire',1050+140,1050+140);
          mbPlaceTerrain('Water',1050-140,1050+140);
          break;
      case 90:
          mbPlaceTerrain('Earth',1050+140,1050-140);
          mbPlaceTerrain('Wind',1050+140,1050+140);
          mbPlaceTerrain('Fire',1050-140,1050+140);
          mbPlaceTerrain('Water',1050-140,1050-140);
          break;
      case 180:
          mbPlaceTerrain('Earth',1050+140,1050+140);
          mbPlaceTerrain('Wind',1050-140,1050+140);
          mbPlaceTerrain('Fire',1050-140,1050-140);
          mbPlaceTerrain('Water',1050+140,1050-140);
          break;
      default:
          mbPlaceTerrain('Earth',1050-140,1050+140);
          mbPlaceTerrain('Wind',1050-140,1050-140);
          mbPlaceTerrain('Fire',1050+140,1050-140);
          mbPlaceTerrain('Water',1050+140,1050+140);
  }
  //Reset the flags
  state.mbBR549.AmBusy = wasBusy;
  state.mbBR549.AllowDelete = wasAllowDelete;
  state.mbBR549.Manual = wasManual;
}
// -----
function mbPlaceTerrain(theType, theLeft, theTop)
{
  log('Place Terrain.');
  // Remember state flage
  var wasBusy = state.mbBR549.AmBusy;
  var wasAllowDelete = state.mbBR549.AllowDelete;
  var wasManual = state.mbBR549.Manual;
  // Set the state flags
  state.mbBR549.AmBusy = true;
  state.mbBR549.AllowDelete = true;
  state.mbBR549.Manual = true;
  // Get the compass rose
  var theChars = findObjs({_type:'character',name: theType});
  log([theType,{theChars}]);
  //Place the graphic
  var theTerrain = createTableGraphic
  (
      theChars[0].get('name'),
      theChars[0].get('avatar'),
      theLeft,
      theTop,
      140,
      140,
      'map'
  );
  // Bring it to the front
  toFront(theTerrain);
}
// -----
function mbRecallCards()
{
  log('Recall Cards.');
  // Remember state flage
  var wasBusy = state.mbBR549.AmBusy;
  var wasAllowDelete = state.mbBR549.AllowDelete;
  var wasManual = state.mbBR549.Manual;
  // Set the state flags
  state.mbBR549.AmBusy = true;
  state.mbBR549.AllowDelete = true;
  state.mbBR549.Manual = true;
  // Get the decks
  var theDecks = findObjs({_type:'deck'});
  log(['Decks',{theDecks}]);
  theDecks.forEach(function(obj)
  {
      log(['Recalling',{obj}]);
      recallCards(obj.get('_id'));
      // hide the deck
      obj.set('shown',false);
      // SHuffle the deck
      shuffleDeck(obj.get('_id'), true);
  });
  //Reset the flags
  state.mbBR549.AmBusy = wasBusy;
  state.mbBR549.AllowDelete = wasAllowDelete;
  state.mbBR549.Manual = wasManual;
}
// -----
function mbClearBoard()
{
  log('Clear Board.');
  // Remember state flage
  var wasBusy = state.mbBR549.AmBusy;
  var wasAllowDelete = state.mbBR549.AllowDelete;
  var wasManual = state.mbBR549.Manual;
  // Set the state flags
  state.mbBR549.AmBusy = true;
  state.mbBR549.AllowDelete = true;
  state.mbBR549.Manual = true;
  // What is on the board
  var theBoard = findObjs({_pageid: Campaign().get('playerpageid')});
  log(['On Board',{theBoard}]);
  theBoard.forEach(function(obj)
  {
      log(['Clearing',{obj}]);
      obj.remove();
  });
  //Reset the flags
  state.mbBR549.AmBusy = wasBusy;
  state.mbBR549.AllowDelete = wasAllowDelete;
  state.mbBR549.Manual = wasManual;
}
// -----
function mbResetBasicBoard()
{
  log('Reset Basic Board.');
  // Remember the state flags
  var wasBusy = state.mbBR549.AmBusy;
  var wasAllowDelete = state.mbBR549.AllowDelete;
  var wasManual = state.mbBR549.Manual;
  // Set the state flags
  state.mbBR549.AmBusy = true;
  state.mbBR549.AllowDelete = true;
  state.mbBR549.Manual = true;
  // Make sure the basic page settings are correct
  var currentPageID = Campaign().get('playerpageid');
  var currentPage = getObj('page', currentPageID);
  currentPage.set('showgrid',true);
  currentPage.set('height',30);
  currentPage.set('width',30);
  currentPage.set('snapping_increment',2);
  currentPage.set('grid_type','square');
  currentPage.set('scale_number',1);
  currentPage.set('dynamic_lighting_enabled',false);
  currentPage.set('explorer_mode','off');
  // Put the background tile up
  var backgroundObj = findObjs({_type: "character", name: "Background"});
  log(['Dump',{backgroundObj}]);
  createTableGraphic
  (
      'Background',
      backgroundObj[0].get('avatar'),
      1050,
      1050,
      2100,
      2100,
      'map'
  );
  //Reset the AmBusy flag
  state.mbBR549.AmBusy = wasBusy;
  state.mbBR549.AllowDelete = wasAllowDelete;
  state.mbBR549.Manual = wasManual;
}
// -----
function mbIsSomethingHere(theLeft,theTop)
{
  // What are our sizes
  var mySize = 140;
  var halfHeight = mySize / 2;
  var halfWidth = mySize / 2;
  // Figure out what grid it should be on
  var newGridLeft = Math.floor(theLeft / mySize);
  var newGridTop = Math.floor(theTop/ mySize);
  // Calculate the actual coordinates
  var newCoordLeft = (newGridLeft * mySize) + halfWidth;
  var newCoordTop = (newGridTop * mySize) + halfHeight;

  var theObj = findObjs({_type: "graphic", left: newCoordLeft, top: newCoordTop});
  // Return true if something is here else false
  return (theObj.length >=1);
}
