class Trainer {
  constructor(gym, trainer, pokemon) {
    this.gym = gym,
    this.trainer = trainer,
    this.pokemon = [];

    console.log("new trainer added");
  }
  all() {
    return this.pokemon;
  }
  get(name) {
    for (let i=0; i<this.pokemon.length;) {
      if(name === this.pokemon[i]["name"]) {
        return this.pokemon[i];
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
    this.abilities = abilities,
    this.gym = gymLeader.gym,
    this.trainer = gymLeader.trainer
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
      return console.log("Snorlax added to pokedex")

    }
  };
  xhttp.open("GET","https://fizal.me/pokeapi/api/v2/name/snorlax.json", true);
  xhttp.send();
}

function getSawk() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText);
      let sawk = new Pokemon (
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
        gymLeader.pokemon.push(sawk);
        return console.log("Sawk added to pokedex")

    }
  };
  xhttp.open("GET","https://fizal.me/pokeapi/api/v2/name/sawk.json", true);
  xhttp.send();
}

function getHit() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText);
      let hitmonlee = new Pokemon (
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
        gymLeader.pokemon.push(hitmonlee);
        return console.log("Hitmonlee added to pokedex")

    }
  };
  xhttp.open("GET","https://fizal.me/pokeapi/api/v2/name/hitmonlee.json", true);
  xhttp.send();
}

document.addEventListener("onload",  gymLeader = new Trainer("The Dojo", "Bruce Leeroy"), getSnorlax(), getSawk(), getHit());
