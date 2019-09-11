function fightPokemon() {
    let topLevel = document.querySelector("body");
    let dataArea = document.querySelector(".data");
    let pokemons = dataArea.querySelectorAll("div");
    winner = getRandomInt(0, 2);
    winningPokemon = pokemons[winner].querySelector("h3").innerText;
    losingPokemon = pokemons[(winner + 1) % 2].querySelector("h3").innerText;
    fightLog = winningPokemon + " defeated " + losingPokemon;
    let fightHistory = document.querySelector(".fightHistory");
    let titleNode = document.createElement("h5");
    titleNode.innerText = fightLog;
    fightHistory.appendChild(titleNode);
}

// return body of random pokemon
function getRandomPokemon() {
    let topLevel = document.querySelector("body");
    let newData = document.createElement("div");
    newData.classList.add("data");

    var pokemonID = getRandomInt(1, 800);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("Network Problem");
          }
        })
        .then(data => {
            container = document.createElement("div");
            let titleNode = document.createElement("h3");
            // Display name of pokemon
            titleNode.innerText = data.name;
            // Display sprite of pokemon
            var elem = document.createElement("img");
            elem.setAttribute("src", data.sprites.front_default);
            elem.setAttribute("height", "200");
            elem.setAttribute("width", "200");
            container.appendChild(titleNode);
            container.appendChild(elem);
            newData.appendChild(container);
            let dataArea = document.querySelector(".data");
            topLevel.replaceChild(newData, dataArea);
        })
        .catch(err => {
          console.log(err);
        });
    pokemonID = getRandomInt(1, 800);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("Network Problem");
          }
        })
        .then(data => {
            container = document.createElement("div");
            let titleNode = document.createElement("h3");
            // Display name of pokemon
            titleNode.innerText = data.name;
            // Display sprite of pokemon
            var elem = document.createElement("img");
            elem.setAttribute("src", data.sprites.front_default);
            elem.setAttribute("height", "200");
            elem.setAttribute("width", "200");
            container.appendChild(titleNode);
            container.appendChild(elem);
            newData.appendChild(container);
            let dataArea = document.querySelector(".data");
            topLevel.replaceChild(newData, dataArea);
        })
        .catch(err => {
          console.log(err);
        });
}

// return random int
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
