import React from "react";
import PokemonCard from "./PokemonCard";

export default function Favorites({ favorites, toggleFavorite }) {
  return (
    <div className="row">
      {favorites.length > 0 ? (
        favorites.map((pokemon) => (
          <div className="col-md-4" key={pokemon}>
            <PokemonCard
              pokemon={{ name: pokemon }}
              toggleFavorite={toggleFavorite}
              isFavorite={true}
            />
          </div>
        ))
      ) : (
        <p style={{ color: "#fff" }}>Nenhum Pokémon favorito encontrado.</p>
      )}
    </div>
  );
}
