import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import Display from "./components/Display";

const App = () => {
  const [todoText, setTodoText] = useState("");
  const [todoArray, setTodoArray] = useState([]);

  return (
    <div>
      <Form todoText={todoText} setTodoText={setTodoText} todoArray={todoArray} setTodoArray={setTodoArray} />
      <Display todoArray={todoArray} setTodoArray={setTodoArray} />
    </div>
  );
};

export default App;
