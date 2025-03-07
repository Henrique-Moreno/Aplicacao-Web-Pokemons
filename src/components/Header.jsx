import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <h1>Pokedex</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favoritos</Link>
      </nav>
    </header>
  );
}
