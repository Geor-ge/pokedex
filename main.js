class Trainer {
  constructor(gym, trainer) {
    this.gym = gym,
    this.trainer = trainer,
    this.pokemon = [];
    console.log(`${this.trainer} is the Gym Leader`);
  }
  all() {
    console.log(`${this.trainer}'s Pokemon`);
    console.log(this.pokemon);
    // document.getElementById("allPokemon").innerHTML = allPokemon;
  }
  get(name) {
    let input = name.toLowerCase();
    for (let i=0; i<this.pokemon.length;) {
      if(input === this.pokemon[i]["name"]) {
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
      gymLeader.pokemon.splice(0,0,hitmonlee);;
      console.log("Hitmonlee added to pokemon");
    }
  };
  xhttp.open("GET","https://fizal.me/pokeapi/api/v2/name/hitmonlee.json", true);
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
        gymLeader.pokemon.splice(1,0,sawk);;
        console.log("Sawk added to pokemon");
    }
  };
  xhttp.open("GET","https://fizal.me/pokeapi/api/v2/name/sawk.json", true);
  xhttp.send();
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
      console.log("Snorlax added to pokemon");
    }
  };
  xhttp.open("GET","https://fizal.me/pokeapi/api/v2/name/snorlax.json", true);
  xhttp.send();
}

document.addEventListener("onload",  gymLeader = new Trainer("The Dojo", "Bruce Leeroy"), getSnorlax(), getSawk(), getHit());


var leftButton = document.getElementById("left-btn");
var rightButton = document.getElementById("right-btn");
var aButton = document.getElementById("a-btn");
var bButton = document.getElementById("b-btn");
var startButton = document.getElementById("start-btn");
var pageNumber = 1;

leftButton.addEventListener("click", pressLeft());
rightButton.addEventListener("click", pressRight());
aButton.addEventListener("click", pressA());
// bButton.addEventListener("click", pressB());
startButton.addEventListener("click", pressStart());

if (pageNumber == 1){
  document.getElementById("left-btn").style.opacity = ".3";
}else{

}


// const selectButton = document.getElementById("selectButton");


function pressRight() {
  if (pageNumber == 1 && rightButton.click) {
    document.getElementById("page1").style.display = "none";
    document.getElementById("left-btn").style.opacity = "1";
    pageNumber ++;
    console.log(`You are on page: ${pageNumber}`);
  }else if(pageNumber == 2 && rightButton.click) {
    document.getElementById("page2").style.display = "none";
    pageNumber ++;
    console.log(`You are on page: ${pageNumber}`);
  }else if (pageNumber == 3 && rightButton.click) {
    document.getElementById("page3").style.display = "none";
    pageNumber ++;
    console.log(`You are on page: ${pageNumber}`)
  }else if (pageNumber == 4 && rightButton.click) {
    document.getElementById("page4").style.display = "none";
    document.getElementById("right-btn").style.opacity = ".3";
    pageNumber ++;
    console.log(`You are on page: ${pageNumber}`);
  }else {
  }
}

function pressLeft() {
  if (pageNumber == 5 && leftButton.click) {
    document.getElementById("right-btn").style.opacity = "1";
    document.getElementById("page4").style.display = "block";
    pageNumber --;
    console.log(`You are on page: ${pageNumber}`);
  }else if (pageNumber == 4 && leftButton.click) {
    document.getElementById("page3").style.display = "block";
    pageNumber --;
    console.log(`You are on page: ${pageNumber}`);
  }else if(pageNumber == 3 && leftButton.click) {
    document.getElementById("page2").style.display = "block";
    pageNumber --;
    console.log(`You are on page: ${pageNumber}`);
  }else if (pageNumber == 2 && leftButton.click) {
    document.getElementById("page1").style.display = "block";
    document.getElementById("left-btn").style.opacity = ".3";
    pageNumber --;
    console.log(`You are on page: ${pageNumber}`);
  }else {
  }
}

function pressA() {
  if (pageNumber == 3 && aButton.click) {
    document.getElementById("page3a").style.visibility = "visible";
    console.log("a button pressed")
  }else if (pageNumber == 4 && aButton.click) {
    document.getElementById("page4a").style.visibility = "visible";
    console.log("a button pressed")
  }else if(pageNumber == 5 && aButton.click) {
    document.getElementById("page5a").style.visibility = "visible";
    console.log("a button pressed")
  }else{
  }
}

function pressB() {
  if (pageNumber == 3 && bButton.click) {
    document.getElementById("page3a").style.visibility = "hidden";
    console.log("b button pressed")
  }else if (pageNumber == 4 && bButton.click) {
    document.getElementById("page4a").style.visibility = "hidden";
    console.log("b button pressed")
  }else if(pageNumber == 5 && bButton.click) {
    document.getElementById("page5a").style.visibility = "hidden";
    console.log("b button pressed")
  }else{

  }
}

function pressStart() {
  pageNumber = 1;
  console.log(`You are on page: ${pageNumber}`)
  let homepage = document.getElementsByClassName("start-over");
  document.getElementById("left-btn").style.opacity = ".3";
  document.getElementById("right-btn").style.opacity = "1";
  for (i=0; i<homepage.length; i++){
    homepage[i].style.display = "block";
  }

}
