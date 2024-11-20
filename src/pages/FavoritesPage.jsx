import React from "react";
import Favorites from "../components/Favorites";

export default function FavoritesPage({ favorites, toggleFavorite }) {
  return (
    <div className="container">
      <h1 style={{ color: "#fff", margin: "30px 0" }}>Favoritos</h1>
      <Favorites favorites={favorites} toggleFavorite={toggleFavorite} />
    </div>
  );
}
