// This file was designed by Mike Lakner

/* eslint-disable */

function TestThis() {
  giveCardToPlayer('-M9-0uy6dgDNUpGjFpIc', '-M7wGcomWC36lTQKqg82');
}

// usage - !-mb [args]
on('ready', () => {
  on('chat:message', (msg) => {
    // log(['!-mb: ',{'Command ':msg}]);
    if (msg.type == 'api' && msg.content.indexOf('!-mb') == 0) {
      const args = msg.content.split(' ');
      // Send all !--mb command text to GM for review
      log(`Fm: ${msg.who} Msg: ${msg.content}`);
      // Is this player a GM?
      if (playerIsGM(msg.playerid)) {
        // GM only commands go here
        switch (args[1].toLowerCase()) {
          case 'start': // Start a new game
            if (args[2].toLowerCase() == 'newgame') {
              mbResetGameState();
              mbStartNewGame();
            } else sendChat('Start', 'Was it \'NewGame\' that you wanted?');
            return;
          case 'rebuildallcharactersheets': // Rebuild all character sheets
            mbPurgeAllCharacterSheets();
            mbRebuildAllCharacterSheets();
            return;
          case 'purgeAllcharactersheets': // Purge all characters with the is_mbc attribute set to true
            mbPurgeAllCharacterSheets();
            return;
          case 'show':
            if (args[2].toLowerCase() == 'gamestate') sendChat('Show', JSON.stringify(state));
            else sendChat('Show', 'Was it \'GameState\' that you wanted?');
            return;
          case 'manual':
            if (args[2].toLowerCase() == 'on') state.mbBR549.Manual = true; // Allow manual editing of the board
            else if (args[2].toLowerCase() == 'off') state.mbBR549.Manual = false; // Disallow manual editing of the board
            else sendChat('Manual', 'On or Off, you need to pick one.');
            return;
          case 'reset': // Start a new game
            if (args[2].toLowerCase() == 'gamestate') mbResetGameState();
            else sendChat('Start', 'Was it \'GameState\' that you wanted?');
            return;
          case 'allowdelete':
            if (args[2].toLowerCase() == 'delete') {
              if (args[3].toLowerCase() == 'on') state.mbBR549.AllowDelete = true; // Allow the deleting of graphics
              else if (args[2].toLowerCase() == 'off') state.mbBR549.AllowDelete = false; // Disallow the deleting of graphics
              else sendChat('Manual', 'On or Off, you need to pick one.');
            }
            return;
          case 'testthis': // A way to call a function you want to test
            TestThis();
            return;
          case '--help':
          case '--?':
            sendChat('GM Command', 'GM Commands:');
            sendChat('GM Command', '&nbsp;Manual On/Off');
            sendChat('GM Command', '&nbsp;Reset GameState');
            sendChat('GM Command', '&nbsp;AllowDelete On/Off');
            sendChat('GM Command', '&nbsp;TestThis');
            sendChat('GM Command', '&nbsp;RebuildAllCharacterSheets');
            sendChat('GM Command', '&nbsp;PurgeAllCharacterSheets');
            break;
          default:
            break;
        }
      }
      // Commands that are GM agnostic go here
      switch (args[1]) {
        case 'TimeSlip':
          sendChat('API !-mb', 'A TimeSlip is a bit of a mind trip.');
          return;
        case 'doMFP':
          mbMoveForwardPort(args);
          return;
        case 'doMFS':
          mbMoveForwardStarboard(args);
          return;
        case '--Help':
        case '--?':
        case '--Help':
        case '--?':
          sendChat('Command', 'General Commands:');
          sendChat('Command', '&nbsp;This');
          sendChat('Command', '&nbsp;That');
      }
    }
  });
});
