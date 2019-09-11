// return random int
function getRandomInt(min, max) {
  const mathMin = Math.ceil(min);
  const mathMax = Math.floor(max);
  // The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (mathMax - mathMin)) + mathMin;
}

function fightPokemon() {
  const dataArea = document.querySelector('.data');
  const pokemon = dataArea.querySelectorAll('div');
  const winner = getRandomInt(0, 2);
  const winningPokemon = pokemon[winner].querySelector('h3').innerText;
  const losingPokemon = pokemon[(winner + 1) % 2].querySelector('h3').innerText;
  const fightHistory = document.querySelector('.fightHistory');
  const titleNode = document.createElement('h5');
  titleNode.innerText = `${winningPokemon} defeated ${losingPokemon}`;
  fightHistory.appendChild(titleNode);
}

function displayRandomPokemon(pokemonID, newData) {
  const topLevel = document.querySelector('body');
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Network Problem');
    })
    .then((data) => {
      const container = document.createElement('div');
      const titleNode = document.createElement('h3');
      // Display name of pokemon
      titleNode.innerText = data.name;
      // Display sprite of pokemon
      const elem = document.createElement('img');
      elem.setAttribute('src', data.sprites.front_default);
      elem.setAttribute('height', '200');
      elem.setAttribute('width', '200');
      container.appendChild(titleNode);
      container.appendChild(elem);
      newData.appendChild(container);
      const dataArea = document.querySelector('.data');
      topLevel.replaceChild(newData, dataArea);
    })
    .catch(() => {});
}

// return body of random pokemon
function getRandomPokemon() {
  const topLevel = document.querySelector('body');
  const newData = document.createElement('div');
  newData.classList.add('data');
  let pokemonID = getRandomInt(1, 800);
  displayRandomPokemon(pokemonID, newData);
  pokemonID = getRandomInt(1, 800);
  displayRandomPokemon(pokemonID, newData);
}
