import { useState } from "react";
import "./App.css";
import BoxDisplay from "./components/BoxDisplay";
import BoxForm from "./components/BoxForm";

const App = () => {
  const [curColor, setCurColor] = useState([]);

  const boxColor = (newColor) => {
    setCurColor(newColor);
  };

  const handleAddColor = (newColor) => {
    const newColorArray = [...curColor, newColor];
    setCurColor(newColorArray);
    console.log(newColorArray);
  };

  console.log(curColor);

  const divStyle = {
    display: "flex",
    justifyContent: "space-evenly",
    margin: "50px",
  };

  return (
    <div className="App">
      <BoxForm newColor={boxColor} handleSubmit={handleAddColor} />
      {/* <BoxDisplay colorArray={curColor} /> */}
      <div style={divStyle}>
        {curColor.map((color, index) => (
          <BoxDisplay color={color} key={index} />
        ))}
      </div>
    </div>
  );
};

export default App;
