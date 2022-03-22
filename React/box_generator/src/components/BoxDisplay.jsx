import React from "react";

const BoxDisplay = (props) => {
  // const boxStyle = {
  //   height: "10rem",
  //   width: "10rem",
  //   backgroundColor: color,
  // };
  console.log("DISPLAY BOX");

  return (
    <div>
      {props.boxes.map((box, index) => {
        return (
          <div
            key={index}
            style={{
              display: "inline-block",
              margin: "0.5rem",
              height: box.size + "rem",
              width: box.size + "rem",
              backgroundColor: box.color,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default BoxDisplay;
