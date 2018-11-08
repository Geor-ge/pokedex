
class Trainer {
  constructor() {
    this.name = "Bruce Leeroy",
    this.gym = "The Dojo",
    this.pokemon = [];

    console.log("new trainer added");
  }
  all() {
    return this.pokemon;
  }
  get(name) {
    for (i=0; i<pokemon;) {
      if(name === pokemon[i]["name"]) {
        return pokemon[i];
      }else {
        i ++;
      }
    }
  }
}

class Pokemon {
  constructor (name, hp, attack, defense, abilities) {
    this.name = name,
    this.hp = hp,
    this.attack = attack,
    this.defense = defense,
    this.abilities = []
  }
}

function getSnorlax() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText);
      let snorlax = new Pokemon (
        data["name"],
        data["stats"]["5"]["base_stat"],
        data["stats"]["4"]["base_stat"],
        data["stats"]["3"]["base_stat"],
        [
          data["abilities"]["0"]["ability"]["name"],
          data["abilities"]["1"]["ability"]["name"],
          data["abilities"]["2"]["ability"]["name"]
        ]
      );
        gymLeader.pokemon.push(snorlax);
        return console.log("snorlax added to pokedex")

    }
  };
  xhttp.open("GET","https://fizal.me/pokeapi/api/v2/name/snorlax.json", true);
  xhttp.send();
}

document.addEventListener("onload",  gymLeader = new Trainer(), getSnorlax())


// addPokemon (name,hp,atk,def,abilities) {
  //   //bracket notation pulls name from function input and sets it as key
  //   this.pokedex.push({[name]:{
  //     "hp":hp,"atk":atk,"def":def,"abilities":[abilities]}});
  //     console.log(`${name} added to pokedex`);
  //   }
  // }
