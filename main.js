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

document.addEventListener("onload",  gymLeader = new Trainer("The Dojo", "Bruce Leeroy"), getSnorlax(), getSawk(), getHit());


var aButton = document.getElementById("aButton");
var bButton = document.getElementById("bButton");
var startButton = document.getElementById("startButton");

aButton.addEventListener("click", pressA());
bButton.addEventListener("click", pressB());
startButton.addEventListener("click", pressStart());
var pageCount = 1;


// const selectButton = document.getElementById("selectButton");
// selectButton.addEventListener("click", pressSelect());
// var countSelect = 0;

function pressA() {
  if (pageCount == 1 && aButton.click) {
    document.getElementById("page1").style.display = "none";
    console.log(pageCount);
    pageCount ++;
  }else if(pageCount == 2 && aButton.click) {
    document.getElementById("page2").style.display = "none";
    console.log(pageCount);
    pageCount ++;
  }else if (pageCount == 3 && aButton.click) {
    document.getElementById("page3").style.display = "none";
    console.log(pageCount);
    pageCount ++;
  }else {
  }
}

function pressB() {
  if (pageCount == 4 && bButton.click) {
    document.getElementById("page3").style.display = "block";
    console.log(pageCount);
    pageCount --;
  }else if(pageCount == 3 && bButton.click) {
    document.getElementById("page2").style.display = "block";
    console.log(pageCount);
    pageCount --;
  }else if (pageCount == 2 && aButton.click) {
    document.getElementById("page1").style.display = "block";
    console.log(pageCount);
    pageCount --;
  }else {
  }
}


function pressStart() {
  pageCount = 1;
  let homepage = document.getElementsByClassName("hide");
  for (i=0; i<homepage.length; i++){
    homepage[i].style.display = "block";
  }

}
