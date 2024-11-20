import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FavoritesPage from "./pages/FavoritesPage";

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=100"
      );
      setPokemons(response.data.results);
    };
    fetchPokemons();
  }, []);

  const toggleFavorite = (pokemon) => {
    if (favorites.includes(pokemon)) {
      setFavorites(favorites.filter((fav) => fav !== pokemon));
    } else {
      setFavorites([...favorites, pokemon]);
    }
  };

  return (
    <Router>
      <div
        style={{
          backgroundColor: "#242424",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route
              path="/"
              element={
                <Home pokemons={pokemons} toggleFavorite={toggleFavorite} />
              }
            />
            <Route
              path="/favorites"
              element={
                <FavoritesPage
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                />
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
