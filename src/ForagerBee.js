class ForagerBee extends Bee {
  // TODO..
  constructor () {
    super ();

    this.age = 10;
    this.job = 'find pollen';
    this.honeyPot = 0;
    this.canFly = true;
    this.treasureChest  = [];
  }

  forage () {
    this.treasureChest.push('treasure');
  }

};
