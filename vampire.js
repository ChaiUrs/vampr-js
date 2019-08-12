
class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    vampire.creator = this;
    this.offspring.push(vampire);
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    let familyLength = this.offspring.length;
    return familyLength;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let currentVamp = this;
    let vampCount = 0;
    while (currentVamp.creator) {
      currentVamp = currentVamp.creator;
      vampCount++;
    }
    return vampCount;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    for(let i = 0; i < this.numberOfOffspring; i++) {
      if(vampire.name === this.offspring[i].name) {
        return true;
      }
    }
    return false;
  }

  /** Tree Traversal methods **/

   // Returns the vampire object with that name, or null if no vampire exists with that name
   vampireWithName(name) {
     if (name === this.name) {
       return this;
      }
      for (let vampChild of this.offspring) {
      let searchVampName = vampChild.vampireWithName(name);
      if(searchVampName) {
        return searchVampName;
      }
    }
    return null;
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    let vampTotal = 0;
    for (let vampChild of this.offspring) {
      vampTotal += vampChild.totalDescendents + 1;
    } 
    return vampTotal;
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    let millenialVamps = [];
    if (this.yearConverted > 1980) {
      millenialVamps.push(this);
    }
    for (let vampChild of this.offspring) {
      millenialVamps = millenialVamps.concat(vampChild.allMillennialVampires);
    }
    return millenialVamps;
  }
  
  
  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }
}

module.exports = Vampire;

