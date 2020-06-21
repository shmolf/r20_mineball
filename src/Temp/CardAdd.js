// This file was designed by Mike Lakner

/* eslint-disable */

// Handle the placement of new cards
// Turn them into a graphic, assign to a player
on("ready",function(){
  // Trigger on newly placed cards
   on('add:card', handleAddCard);
});
// -----
var handleAddCard = function(obj,prevObj)
{
  // Return based on state switches
  if((state.mbBR549.Manual == true) || (state.mbBR549.InSetup == true))
  {
      log(['Handle Card Addition Aborted',{state}]);
      return;
  }
  // Log this
  log(['Add Card',{obj,prevObj}]);
  // Set up the objects
  var theCardID = obj.get("_cardid");
  var cardObj = getObj("card", theCardID);
  var cardName = cardObj.get('name');
  var theLayer = 'objects';
  log(['Card Name',{cardName}]);
  // Get the deck this card came from
  var nameCheck = cardName.substring(0, cardName.length - 1);
  if('!Fire!Earth!Wind!Water!'.indexOf(nameCheck)!=-1)
  {
      // It's a terrain card
      // Figure out who played this by looking into the state to see who owns it
      thePlayerID = state.mbBR549.TerrainCardsInPlay[cardName].playerID;
      cardName = nameCheck;
      theLayer = 'map';
  }
  else
  {
      // It's a miniball card
      // Figure out who played this by looking into the state to see who owns it
      thePlayerID = state.mbBR549.MineBallCardsInPlay[cardName].playerID;
  }
  // Is there something here?
  log('Peek'+obj.get('left')+"/"+obj.get('top'));
  if(mbIsSomethingHere(obj.get('left'),obj.get('top'))==true)
  {
      // Yes, so back out
      setTimeout(()=> giveCardToPlayer(theCardID, thePlayerID),1000);
      // Remove the actual card
      setTimeout(()=>obj.remove(),100);
      return;
  }
  // Create the object
  createTableGraphic
  (
      cardName,
      obj.get('imgsrc'),
      obj.get('left'),
      obj.get('top'),
      obj.get('height'),
      obj.get('width'),
      theLayer
  );
  // Remove the actual card
  setTimeout(()=>obj.remove(),100);
  // Link the card to the player
  var playerID = linkCardToPlayer(obj);
}
