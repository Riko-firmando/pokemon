import React from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Table,
  Badge,
  Button,
  ProgressBar,
} from "react-bootstrap";

export default function ListData() {
  const location = useLocation();
  const { pokemon, color, idx } = location?.state;
  console.log(location?.state.pokemon);
  const _color = ["danger", "warning", "primary", "success"];
  return (
    <div>
      <div style={{ display: "flex" }} className="detail-name-mobile">
        <h1>{pokemon.forms[0].name}</h1>
        <h6 style={{ marginTop: 5 }}>#00{idx + 1}</h6>
      </div>
      <div className="detail-container">
        <div className="detail-img">
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt=""
            height={350}
            width={350}
          />
        </div>
        <div className="detail-inform">
          <div style={{ display: "flex" }} className="detail-name">
            <h1>{pokemon.forms[0].name}</h1>
            <h6 style={{ marginTop: 5 }}>#00{idx + 1}</h6>
          </div>
          <div className="detail-abjility">
            {pokemon.abilities.map((ability, idx) => (
              <>
                <Badge bg={_color[idx]}>{ability.ability.name}</Badge>{" "}
              </>
            ))}
          </div>
          <div className="inform">
            <h6>Attack</h6>
            <ProgressBar
              label={pokemon.stats[1].base_stat + "%"}
              variant={
                pokemon.stats[1].base_stat < 30
                  ? "danger"
                  : pokemon.stats[1].base_stat < 50
                  ? "warning"
                  : pokemon.stats[1].base_stat < 70
                  ? "success"
                  : "primary"
              }
              now={pokemon.stats[1].base_stat}
              style={{ backgroundColor: "rgb(207, 205, 205)" }}
            />
            <h6>HP</h6>
            <ProgressBar
              label={pokemon.stats[0].base_stat + "%"}
              variant={
                pokemon.stats[0].base_stat < 30
                  ? "danger"
                  : pokemon.stats[0].base_stat < 50
                  ? "warning"
                  : pokemon.stats[0].base_stat < 70
                  ? "success"
                  : "primary"
              }
              now={pokemon.stats[0].base_stat}
              style={{ backgroundColor: "rgb(207, 205, 205)" }}
            />
            <h6>Defense</h6>
            <ProgressBar
              label={pokemon.stats[2].base_stat + "%"}
              variant={
                pokemon.stats[2].base_stat < 30
                  ? "danger"
                  : pokemon.stats[2].base_stat < 50
                  ? "warning"
                  : pokemon.stats[2].base_stat < 70
                  ? "success"
                  : "primary"
              }
              now={pokemon.stats[2].base_stat}
              style={{ backgroundColor: "rgb(207, 205, 205)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
