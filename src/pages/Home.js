import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/card";
import { Link } from "react-router-dom";

export default function Home({ pokemons }) {
  const color = [
    "#2ecc71",
    "#2ecc71",
    "#2ecc71",
    "#e74c3c",
    "#e74c3c",
    "#e74c3c",
    "#3498db",
    "#3498db",
    "#3498db",
    "#27ae60",
    "#27ae60",
    "#f39c12",
    "#f39c12",
    "#f39c12",
    "#f39c12",
    "#bdc3c7",
    "#bdc3c7",
    "#bdc3c7",
    "#9b59b6",
    "#9b59b6",
  ];
  return (
    <div className="home-container">
      <h1>POKEDEX</h1>
      <div className="card-container">
        {pokemons.map((pokemon, idx) => (
          <div key={idx}>
            <Card _pokemon={pokemon} color={color[idx]} idx={idx} />
          </div>
        ))}
      </div>
      <div style={{ height: 100 }}></div>
    </div>
  );
}
