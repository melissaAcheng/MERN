import React from "react";

const Display = ({todoArray, setTodoArray }) => {
  const deleteTodo = (id) => {
    const newList = todoArray.filter((todo, index) => todo.id !== id);
    setTodoArray(newList);
  };

  const completeTodo = (id) => {
    const updateTodo = [...todoArray].filter((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }
      return todo;
    });

    console.log("FIND THE ARRAY", updateTodo);

    setTodoArray(updateTodo);
  };

  const styled = (complete) => {
    if (complete === true) {
      console.log("completed");
      return "completed";
    } else {
      console.log("notCompleted");
      return "notCompleted";
    }
  };

  return (
    <div>
      <ul>
        {todoArray.map((todo, index) => {
          return (
            <li key={index}>
              <span className={styled(todo.complete)}>{todo.text}</span>
              <input type="checkbox" checked={todo.complete} onChange={() => completeTodo(todo.id)} />
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Display;
