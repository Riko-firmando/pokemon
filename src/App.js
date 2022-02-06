import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [pokemons, setPokemons] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
      setPokemons(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(pokemons);

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Home pokemons={pokemons} />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
