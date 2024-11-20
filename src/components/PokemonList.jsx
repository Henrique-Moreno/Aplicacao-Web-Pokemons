import React from "react";
import PokemonCard from "./PokemonCard";

export default function PokemonList({ pokemons, toggleFavorite }) {
  return (
    <div className="row">
      {pokemons.map((pokemon) => (
        <div className="col-md-4" key={pokemon.name}>
          <PokemonCard pokemon={pokemon} toggleFavorite={toggleFavorite} />
        </div>
      ))}
    </div>
  );
}
