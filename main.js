class Trainer {
  constructor(name, gym) {
    this.name = name,
    this.gym = gym,
    this.pokemon = [];
    console.log("new trainer added");
  }
  addPokemon (name) {
    this.pokemon.push({"name":name})
  }
}

// class Pokemon {
//   constructor(name,hp,atk,def,abilities) {
//     this.name = name,
//     this.hp = hp,
//     this.atk = atk,
//     this.def = def,
//     this.abilities = []
//     trainer.pokemon.push(this);
//     console.log("new pokemon added");
//   }
//
//
// }
