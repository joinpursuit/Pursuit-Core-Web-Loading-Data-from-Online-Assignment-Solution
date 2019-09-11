const getRandomInt = function getRandomInt(min, max) {
  const mathMin = Math.ceil(min);
  const mathMax = Math.floor(max);
  // The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (mathMax - mathMin)) + mathMin;
};

const displayMove = function displayMove(moveNode, moveURL, container) {
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

const fightPokemon = function fightPokemon() {
  const dataArea = document.querySelector('.data');
  const pokemon = dataArea.querySelectorAll('div');
  const winner = getRandomInt(0, 2);
  const winningPokemon = pokemon[winner].querySelector('h3').innerText;
  const losingPokemon = pokemon[(winner + 1) % 2].querySelector('h3').innerText;
  const fightHistory = document.querySelector('.fightHistory');
  const titleNode = document.createElement('h5');
  // TODO (mauricio) Bonus: use stats + moves to decide winning pokemon
  titleNode.innerText = `${winningPokemon} defeated ${losingPokemon}`;
  fightHistory.appendChild(titleNode);
};

const displayPokemon = function displayRandomPokemon(newData) {
  // TODO (mauricio) Ensure pokemon IDs are unique.
  const pokemonID = getRandomInt(1, 800);
  const topLevel = document.querySelector('body');
  const container = document.createElement('div');
  const nameNode = document.createElement('h3');
  const spriteNode = document.createElement('img');
  const hpNode = document.createElement('h5');
  const moveTitleNode = document.createElement('h5');
  const dataArea = document.querySelector('.data');
  const moveIterations = [1, 2, 3, 4];
  let moveNum;
  let moveNode;
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
      spriteNode.setAttribute('src', data.sprites.front_default);
      spriteNode.setAttribute('height', '200');
      spriteNode.setAttribute('width', '200');
      container.appendChild(spriteNode);

      // Display hp
      hpNode.innerText = `HP: ${data.stats[5].base_stat}`;
      container.appendChild(hpNode);

      // Display four moves
      moveTitleNode.innerText = 'Moves:';
      container.appendChild(moveTitleNode);

      moveIterations.forEach(() => {
        // TODO (mauricio) Ensure moves are unique.
        moveNum = getRandomInt(0, data.moves.length);
        moveNode = document.createElement('h5');
        const moveURL = data.moves[moveNum].move.url;
        displayMove(moveNode, moveURL, container);
        // moveNode.innerText = data.moves[moveNum].move.name;
        // container.appendChild(moveNode);
      });

      newData.appendChild(container);
      topLevel.replaceChild(newData, dataArea);
    })
    .catch(() => {});
};

const getRandomPokemon = function getRandomPokemon() {
  const newData = document.createElement('div');
  newData.classList.add('data');
  displayPokemon(newData);
  displayPokemon(newData);
};
