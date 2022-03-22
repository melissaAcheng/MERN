import React, { useState } from "react";

const BoxForm = (props) => {
  const [color, setColor] = useState("");
  const [size, setSize] = useState(10);

  const handleColor = (e) => setColor(e.target.value);
  const handleSize = (e) => setSize(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBox = {
      color,
      size,
    };
    props.onNewBox(newBox);
    console.log(newBox);
    setColor("");
    setSize(10);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Color:</label>
        <input type="text" onChange={handleColor} value={color} />
        <label>Size:</label>
        <input type="text" onChange={handleSize} value={size} />
        <input type="submit" value="Add" />
      </div>
    </form>
  );
};

export default BoxForm;
