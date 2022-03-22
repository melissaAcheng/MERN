import { useState } from "react";
import "./App.css";
import BoxDisplay from "./components/BoxDisplay";
import BoxForm from "./components/BoxForm";

const App = () => {
  const [boxArray, setBoxArray] = useState([]);

  // const box = (newBox) => {
  //   setBoxArray(newBox);
  // };

  const handleAddBox = (newBox) => {
    const newBoxArray = [...boxArray, newBox];
    setBoxArray(newBoxArray);
    console.log(newBoxArray);
  };

  const divStyle = {
    display: "flex",
    justifyContent: "space-evenly",
    margin: "50px",
  };

  return (
    <div className="App">
      <BoxForm onNewBox={handleAddBox} />
      <BoxDisplay boxes={boxArray} />
      {/* <div style={divStyle}>
        {boxArray.map((color, size, index) => (
          <BoxDisplay color={color} size={size} key={index} />
        ))}
      </div> */}
    </div>
  );
};

export default App;
