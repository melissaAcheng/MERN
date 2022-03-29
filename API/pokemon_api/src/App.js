import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

const App = () => {
  const [state, setState] = useState(0);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {
        setState(response.data.results);
        console.log(response.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <ul>
        {state
          ? state.map((pokemon, index) => {
              return <li key={index}>{pokemon.name}</li>;
            })
          : null}
      </ul>
    </div>
  );
};

export default App;
