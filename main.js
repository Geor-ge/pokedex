class Trainer {
  constructor(gym, trainer) {
    this.gym = gym,
    this.trainer = trainer,
    this.pokemon = [];

    console.log("new trainer added");
  }
  all() {
    for (let i=0; i<this.pokemon.length; i++) {
      let pokedex = Object.entries(this.pokemon[i]);
      console.log(this.pokemon[i]);
      document.getElementById("pokedex").innerHTML = pokedex;

    }

    console.log(`${this.trainer}'s Pokedex`);
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
    this.abilities = abilities
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
      return console.log("Snorlax added to pokedex");

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
        return console.log("Sawk added to pokedex");


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
        return console.log("Hitmonlee added to pokedex");

    }
  };
  xhttp.open("GET","https://fizal.me/pokeapi/api/v2/name/hitmonlee.json", true);
  xhttp.send();
}
// const aButton = document.getElementById("a button");
// aButton.addEventListener("click", pressA());



const aButton = document.getElementById("aButton");
aButton.addEventListener("click", pressA());
var count = 0;

function pressA() {

    if (count == 0 && aButton.click) {
      document.getElementById("poke1").style.visibility = "hidden";
      count += 1;
      console.log(count);
    }else if(count == 1 && aButton.click) {
      document.getElementById("poke2").style.visibility = "hidden";
      count ++
      console.log(count);
    }else if (count == 2 && aButton.click) {
      document.getElementById("poke3").style.visibility = "hidden";
      count ++
      console.log(count);
    }else {
      return count;
    }
  }



document.addEventListener("onload",  gymLeader = new Trainer("The Dojo", "Bruce Leeroy"), getSnorlax(), getSawk(), getHit());
