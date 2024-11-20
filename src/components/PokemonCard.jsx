import React from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

export default function PokemonCard({ pokemon, toggleFavorite, isFavorite }) {
  return (
    <div
      className="card mb-3"
      style={{ backgroundColor: "#1a1a1a", color: "#fff" }}
    >
      <img
        src={`https://img.pokemondb.net/sprites/home/normal/${pokemon.name}.png`}
        alt={pokemon.name}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{pokemon.name}</h5>
        {isFavorite ? (
          <button
            onClick={() => toggleFavorite(pokemon.name)}
            className="btn btn-danger"
          >
            Remover dos Favoritos <FaTrash />
          </button>
        ) : (
          <button
            onClick={() => toggleFavorite(pokemon.name)}
            className="btn btn-success"
          >
            Adicionar aos Favoritos <FaPlus />
          </button>
        )}
      </div>
    </div>
  );
}
