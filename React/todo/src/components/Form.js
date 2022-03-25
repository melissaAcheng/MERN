import React from "react";

const Form = ({ todoText, setTodoText, todoArray, setTodoArray }) => {
  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      text: todoText,
      complete: false,
      id: Math.floor(Math.random() * 1000000).toString(),
    };
    setTodoArray([...todoArray, newTodo]);
    setTodoText("");
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <label>Add to list: </label>
        <input type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
