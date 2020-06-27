import BaseCard from 'Cards/Card';

export default class AirCard extends BaseCard {
  constructor(name) {
    super(name);
    this.type = 'Air';
  }
}
