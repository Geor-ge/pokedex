pokemon = [];

class Trainer {
  constructor(name, gym) {
    this.name = name,
    this.gym = gym,
    this.pokedex = [];

    console.log("new trainer added");
  }
  all() {
    return this.pokemon;
  }
}

class Pokemon {
  constructor (name, hp, attack, defense, abilities) {
    this.name = name,
    this.hp = hp,
    this.attack = attack,
    this.defense = defense,
    this.abilities = abilities
  }
}

function getSnorlax() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.responseText);
      let snorlax = new Pokemon (
        data["name"],
        data["stats"]["5"]["base_stat"],
        data["stats"]["4"]["base_stat"],
        data["stats"]["3"]["base_stat"],
        [data["abilities"]["0"]["ability"]["name"],
         data["abilities"]["1"]["ability"]["name"],
         data["abilities"]["2"]["ability"]["name"]]);
      pokemon.push(snorlax);
      // document.getElementById("snorlax").innerHTML = pokemon;
      console.log(snorlax);
    }else {
      return console.log("snorlax added to pokedex")
    }
  };
  xhttp.open("GET","http://fizal.me/pokeapi/api/v2/name/snorlax.json", true);
  xhttp.send();
}



// addPokemon (name,hp,atk,def,abilities) {
  //   //bracket notation pulls name from function input and sets it as key
  //   this.pokedex.push({[name]:{
  //     "hp":hp,"atk":atk,"def":def,"abilities":[abilities]}});
  //     console.log(`${name} added to pokedex`);
  //   }
  // }
