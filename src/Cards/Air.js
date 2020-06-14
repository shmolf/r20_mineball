import Card from 'Cards/Base';

export default class AirCard extends Card {
  constructor(name) {
    super(name);
    this.type = 'Air';
  }
}
