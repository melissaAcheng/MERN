import "./App.css";
import React, { useState, useEffect } from "react";

const App = () => {
  const [state, setState] = useState(0);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setState({
          name: response.results,
        });
      });
  }, []);
  return (
    <div>
      <ul>
        {state.name
          ? state.name.map((item, index) => {
              return <li key={index}>{item.name}</li>;
            })
          : null}
      </ul>
    </div>
  );
};

export default App;
