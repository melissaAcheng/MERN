import React from "react";

const mainStyle = {
  backgroundColor: "#e06666",
  height: "400px",
  width: "70%",
  border: "1px solid black",
  display: "flex",
  flexWrap: "wrap",
  margin: "5px",
  justifyContent: "space-evenly",
};

const Main = (props) => {
  return <div style={mainStyle}>{props.children}</div>;
};

export default Main;
