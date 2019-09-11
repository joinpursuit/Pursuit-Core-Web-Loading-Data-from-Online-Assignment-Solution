// ESLint used to adhere to following style guide: https://github.com/airbnb/javascript

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomInt = function getRandomInt(min, max) {
  const mathMin = Math.ceil(min);
  const mathMax = Math.floor(max);
  // The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (mathMax - mathMin)) + mathMin;
};

const displayMove = function displayMove(moveURL, container) {
  const moveNode = document.createElement('h5');
  fetch(moveURL)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Network Problem');
    })
    .then((data) => {
      moveNode.innerText = `${data.name} PP: ${data.pp}`;
      container.appendChild(moveNode);
    })
    .catch(() => {});
};

const displaySprite = function displaySprite(sprite, container) {
  const spriteNode = document.createElement('img');
  spriteNode.setAttribute('src', sprite);
  spriteNode.setAttribute('height', '100');
  spriteNode.setAttribute('width', '100');
  container.appendChild(spriteNode);
};

const battlePokemon = function fightPokemon() {
  const dataArea = document.querySelector('.data');
  const pokemon = dataArea.querySelectorAll('div');
  const winner = getRandomInt(0, 2);
  const winningPokemon = pokemon[winner].querySelector('h3').innerText;
  const losingPokemon = pokemon[(winner + 1) % 2].querySelector('h3').innerText;
  const battleHistory = document.querySelector('.battleHistory');
  const titleNode = document.createElement('h5');
  // TODO (mauricio) Bonus: use stats + moves to decide winning pokemon
  titleNode.innerText = `${winningPokemon} defeated ${losingPokemon}`;
  battleHistory.appendChild(titleNode);
};

const displayPokemon = function displayRandomPokemon(newData, float) {
  // TODO (mauricio) Ensure pokemon IDs are unique.
  const pokemonID = getRandomInt(1, 800);
  const topLevel = document.querySelector('body');
  const container = document.createElement('div');
  const nameNode = document.createElement('h3');
  const hpNode = document.createElement('h5');
  const moveTitleNode = document.createElement('h5');
  const dataArea = document.querySelector('.data');
  const moveIterations = [1, 2, 3, 4];
  let moveNum;
  let moveURL;
  nameNode.id = pokemonID;

  // Set the sprite to float on left or right. https://www.w3schools.com/jsref/prop_style_cssfloat.asp
  container.style.cssFloat = float;

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Network Problem');
    })
    .then((data) => {
      // Display name of pokemon
      nameNode.innerText = data.name;
      container.appendChild(nameNode);

      // Display sprite of pokemon
      displaySprite(data.sprites.front_default, container);

      // Display hp
      hpNode.innerText = `HP: ${data.stats[5].base_stat}`;
      container.appendChild(hpNode);

      // Display four moves
      moveTitleNode.innerText = 'Moves:';
      container.appendChild(moveTitleNode);

      moveIterations.forEach(() => {
        // TODO (mauricio) Ensure moves are unique.
        moveNum = getRandomInt(0, data.moves.length);
        moveURL = data.moves[moveNum].move.url;
        displayMove(moveURL, container);
      });

      newData.appendChild(container);
      topLevel.replaceChild(newData, dataArea);
    })
    .catch(() => {});
};

const getPokemon = function getRandomPokemon() {
  const newData = document.createElement('div');
  newData.classList.add('data');
  displayPokemon(newData, 'left');
  displayPokemon(newData, 'right');
};
