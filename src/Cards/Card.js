import Actions from 'Cards/Actions';

export default class Card {
  constructor(name) {
    this.name = name;
    this.playerEmblem = null;
    this.actions = Actions;
  }
}
