import { useState } from "react";
import PokemonCard from "../components/PokemonCard";
import SearchBar from "../components/SearchBar";
import { FaChevronDown } from "react-icons/fa";

export default function Home({ pokemons, toggleFavorite }) {
  const [visibleCount, setVisibleCount] = useState(9);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 9);
  };

  return (
    <div className="container">
      <h1 style={{ color: "#fff", margin: "40px 0" }}>Pokémons</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="row" style={{ margin: "50px 0" }}>
        {filteredPokemons.slice(0, visibleCount).map((pokemon) => (
          <div className="col-md-4" key={pokemon.name}>
            <PokemonCard pokemon={pokemon} toggleFavorite={toggleFavorite} />
          </div>
        ))}
      </div>
      {visibleCount < filteredPokemons.length && (
        <button
          onClick={handleShowMore}
          className="btn btn-primary mt-3"
          style={{ display: "block", margin: "0 auto" }}
        >
          Ver mais Pokémons <FaChevronDown />
        </button>
      )}
    </div>
  );
}
