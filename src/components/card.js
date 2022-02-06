import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Card({ _pokemon, color, idx }) {
  const navigate = useNavigate();
  const [pokemon, setpokemon] = useState();

  const getPokemon = async () => {
    try {
      const response = await axios.get(_pokemon.url);
      setpokemon(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div
      className="card"
      style={{ backgroundColor: color }}
      onClick={() => navigate("/detail", { state: { pokemon, color, idx } })}
    >
      <div style={{ textAlign: "end" }}>
        <h6>#00{idx + 1}</h6>
      </div>
      <h4>{pokemon?.forms[0].name}</h4>
      <img src={pokemon?.sprites.other.dream_world.front_default} alt="" />
      {/* <div className="card-abilities">
        {pokemon?.abilities.map((ability, idx) => (
          <div key={idx} className="card-ability">
            <span>{ability.ability.name}</span>
          </div>
        ))}
      </div> */}
    </div>
  );
}
