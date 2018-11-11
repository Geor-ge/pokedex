class Trainer {
  constructor(gym, trainer) {
    this.gym = gym,
    this.trainer = trainer,
    this.pokemon = [];
    console.log("new trainer added");
  }
  all() {
    console.log(this.pokemon);
    // document.getElementById("allPokemon").innerHTML = allPokemon;
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
      console.log("Snorlax added to pokedex");
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
        console.log("Sawk added to pokedex");
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
        console.log("Hitmonlee added to pokedex");
    }
  };
  xhttp.open("GET","https://fizal.me/pokeapi/api/v2/name/hitmonlee.json", true);
  xhttp.send();
}


const aButton = document.getElementById("aButton");
aButton.addEventListener("click", pressA());
var countA = 0;

// const bButton = document.getElementById("bButton");
// bButton.addEventListener("click", pressB());
// var countB = 0;
//
const startButton = document.getElementById("startButton");
startButton.addEventListener("click", pressStart());


// const selectButton = document.getElementById("selectButton");
// selectButton.addEventListener("click", pressSelect());
// var countSelect = 0;

function pressA() {

  if (countA == 0 && aButton.click) {
    document.getElementById("poke1").style.display = "none";
    countA ++;
    console.log(countA);
  }else if(countA == 1 && aButton.click) {
    document.getElementById("poke2").style.display = "none";
    countA ++;
    console.log(countA);
  }else if (countA == 2 && aButton.click) {
    document.getElementById("poke3").style.display = "none";
    countA ++;
    console.log(countA);
  }else {
  }
}

function pressStart() {
  countA = 0;
  let homepage = document.getElementsByClassName("hide");
  for (i=0; i<homepage.length; i++){
    homepage[i].style.display = "block";
  }

}


document.addEventListener("onload",  gymLeader = new Trainer("The Dojo", "Bruce Leeroy"), getSnorlax(), getSawk(), getHit());
