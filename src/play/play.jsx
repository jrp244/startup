import React from 'react';
import axios from 'axios'; // Import Axios for HTTP requests

import { Players } from './players';
import { SimonGame } from './simonGame';

function PokemonForm() {
  const [pokemonData, setPokemonData] = React.useState({});

  const handlePokemonSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const pokemon = {
      // Extract string inputs
      name: formData.get('pokemonName'),
      heldItem: formData.get('heldItem'),
      ability: formData.get('ability'),
      // Validate and extract integer inputs
      hp: parseInt(formData.get('hp')) || 0,
      attack: parseInt(formData.get('attack')) || 0,
      defense: parseInt(formData.get('defense')) || 0,
      specialAttack: parseInt(formData.get('specialAttack')) || 0,
      specialDefense: parseInt(formData.get('specialDefense')) || 0,
      speed: parseInt(formData.get('speed')) || 0,
    };

    // Basic validation for positive integers
    const invalidValues = Object.values(pokemon).filter((value) => isNaN(value) || value <= 0);
    if (invalidValues.length > 0) {
      // Show generic error message
      alert('Please enter valid values for all fields.');
      return;
    }

    // Submit pokemon data to your backend API (replace with your actual logic)
    try {
      const response = await axios.post('/api/pokemon', pokemon);
      if (response.ok) {
        // Successful submission, update local state
        setPokemonData(pokemon);
        // Add optional success message or UI update
      } else {
        // Handle API error with generic message
        alert('An error occurred. Please try again later.');
      }
    } catch (error) {
      // Handle any internal errors with generic message
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <form onSubmit={handlePokemonSubmit}>
      <label htmlFor="pokemonName">Name:</label>
      <input type="text" id="pokemonName" name="pokemonName" required />
      <br />
      <label htmlFor="hp">HP:</label>
      <input type="number" min={1} id="hp" name="hp" required />
      <br />
      <label htmlFor="attack">Attack:</label>
      <input type="number" min={1} id="attack" name="attack" required />
      <br />
      <label htmlFor="defense">Defense:</label>
      <input type="number" min={1} id="defense" name="defense" required />
      <br />
      <label htmlFor="specialAttack">Special Attack:</label>
      <input type="number" min={1} id="specialAttack" name="specialAttack" required />
      <br />
      <label htmlFor="specialDefense">Special Defense:</label>
      <input type="number" min={1} id="specialDefense" name="specialDefense" required />
      <br />
      <label htmlFor="speed">Speed:</label>
      <input type="number" min={1} id="speed" name="speed" required />
      <br />
      <label htmlFor="heldItem">Held Item:</label>
      <input type="text" id="heldItem" name="heldItem" />
      <br />
      <label htmlFor="ability">Ability:</label>
      <input type="text" id="ability" name="ability" />
      <br />
      <button type="submit">Submit Pokemon</button>
    </form>
  );
}

export default PokemonForm;



export { PokemonForm, Play };


export function Play(props) {
  const [pokemonData, setPokemonData] = React.useState([]);

  return (
    <main className="bg-secondary">
      <Players userName={props.userName} />
      <PokemonForm setPokemonData={setPokemonData} />
      {pokemonData.length > 0 && (
        <div className="pokemon-stats">
          <h2>Pokemon Stats:</h2>
          {pokemonData.map((pokemon) => (
            <div key={pokemon.name} className="pokemon">
              <p>Name: {pokemon.name}</p>
              <p>HP: {pokemon.hp}</p>
              <p>Attack: {pokemon.attack}</p>
              <p>Defense: {pokemon.defense}</p>
              <p>Special Attack: {pokemon.specialAttack}</p>
              <p>Special Defense: {pokemon.specialDefense}</p>
              <p>Speed: {pokemon.speed}</p>
              <p>Moves: {pokemon.moves.join(", ")}</p>
              <p>Held Item: {pokemon.heldItem}</p>
              <p>Ability: {pokemon.ability}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

