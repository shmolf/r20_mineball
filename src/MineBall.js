import { getPlayers, deserializePlayerObject } from 'Players/PlayerPool';
import TokenListeners from 'Graphics/Tokens';
import { mbSetupGameState } from 'Lib/State';
import CardAddInit from 'App/Play/Cards';
// import { CommandDispatchInit } from 'App/Temp/CommandDispatch';
import { EmblemBuildInit } from 'Commands/EmblemCommand';
import { newCard as newCardHandler } from 'Handlers/Card';
import handChangeHandler from 'Handlers/Hand';
import inputHandler from 'Handlers/Input';

on('ready', () => {
  if (typeof state.MineBall === 'undefined') {
    const players = getPlayers();
    state.MineBall = {
      version: 1.0,
      players,
    };
  } else {
    deserializePlayerObject(state.MineBall.players || {});
  }

  mbSetupGameState();
  TokenListeners();
  CardAddInit();
  // CommandDispatchInit();
  EmblemBuildInit();

  on('chat:message', inputHandler);
  on('add:card', newCardHandler);
  on('change:hand', handChangeHandler);
});
