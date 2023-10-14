let pokemonData = [];

document.getElementById('pokemonForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const pokemon = {
    name: document.getElementById('pokemonName').value,
    hp: document.getElementById('hp').value,
    attack: document.getElementById('attack').value,
    defense: document.getElementById('defense').value,
    specialAttack: document.getElementById('specialAttack').value,
    specialDefense: document.getElementById('specialDefense').value,
    speed: document.getElementById('speed').value,
    moves: document.getElementById('moves').value.split(',').map(move => move.trim()),
    heldItem: document.getElementById('heldItem').value,
    ability: document.getElementById('ability').value
  };

  pokemonData.push(pokemon);

  displayPokemonData();
});

function displayPokemonData() {
  const outputContent = document.getElementById('outputContent');
  outputContent.innerHTML = '';

  for (let i = 0; i < pokemonData.length; i++) {
    outputContent.innerHTML += `
      <div class="pokemon">
        <h2>${pokemonData[i].name}</h2>
        <p>HP: ${pokemonData[i].hp}</p>
        <p>Attack: ${pokemonData[i].attack}</p>
        <p>Defense: ${pokemonData[i].defense}</p>
        <p>Special Attack: ${pokemonData[i].specialAttack}</p>
        <p>Special Defense: ${pokemonData[i].specialDefense}</p>
        <p>Speed: ${pokemonData[i].speed}</p>
        <p>Moves: ${pokemonData[i].moves.join(', ')}</p>
        <p>Held Item: ${pokemonData[i].heldItem}</p>
        <p>Ability: ${pokemonData[i].ability}</p>
      </div>
    `;
  }
}
