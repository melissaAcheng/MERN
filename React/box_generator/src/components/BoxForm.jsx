import React, { useState } from "react";

const BoxForm = (props) => {
  const [color, setColor] = useState("");

  const handleChange = (e) => setColor(e.target.value);

  const handleNewColor = (e) => {
    e.preventDefault();
    console.log(color);
    props.handleSubmit(color);
    setColor("");
  };

  return (
    <form onSubmit={handleNewColor}>
      <div>
        <label>Color:</label>
        <input type="text" onChange={handleChange} value={color} />
        <input type="submit" value="Add" />
      </div>
    </form>
  );
};

export default BoxForm;
