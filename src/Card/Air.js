import Card from 'Card/Base';

export default class AirCard extends Card {
  constructor(name) {
    super(name);
    this.type = 'Air';
  }
}
