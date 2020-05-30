class Card {
    constructor(name) {
        this.name = name;
    }
}

class FireCard extends Card {
    constructor(name) {
        super(name);
        this.type = 'Fire';
    }
}

class WaterCard extends Card {
    constructor(name) {
        super(name);
        this.type = 'Water';
    }
}

class EarthCard extends Card {
    constructor(name) {
        super(name);
        this.type = 'Earth';
    }
}

class AirCard extends Card {
    constructor(name) {
        super(name);
        this.type = 'Air';
    }
}