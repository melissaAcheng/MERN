import React from "react";

const BoxDisplay = ({ color, index }) => {
  const boxStyle = {
    height: "10rem",
    width: "10rem",
    backgroundColor: color,
  };

  return <div style={boxStyle}></div>;
};

export default BoxDisplay;
