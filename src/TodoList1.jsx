import { useState } from "react";
import "./App.css";

export function TodoList1() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    setTodos([...todos, inputValue]);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <>
      <div className="todo-container">Todo List 1
      <input
        type="text"
        placeholder="Enter a text"
        onChange={handleInputChange}
        className="todoInput"
      />
      <button onClick={handleAddTodo} className="AddTodo"> Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
        </div>
    </>
  );
}
