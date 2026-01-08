import { useState } from "react";
import "./App.css";

export function TodoList1() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAddTodo = () => {
    if (editIndex !== null) {
      const updateTodos = [...todos];
      updateTodos[editIndex] = inputValue;
      setTodos(updateTodos);
      setEditIndex(null);
      setInputValue("");
    } else {
      if (inputValue.trim() === "") return;
      setTodos([...todos, inputValue]);
    }
    setInputValue("");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleEditTodo = (index) => {
    setInputValue(todos[index]);
    setEditIndex(index);
  };

  const handleDeleteTodo = (index) => {
      
  }
  return (
    <>
      <div className="parent-container">
        <div className="todo-container">
          Todo List 1
          <input
            type="text"
            placeholder="Enter a text"
            value={inputValue}
            onChange={handleInputChange}
            className="todoInput"
          />
          <button onClick={handleAddTodo} className="AddTodoButton">
            {" "}
            {editIndex !== null ? "save todo" : "add todo"}{" "}
          </button>
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>
                {todo}{" "}
                <button
                  className="EditButton"
                  onClick={() => handleEditTodo(index)}
                >
                  Edit
                </button>
                <button onClick = {() => {
                  handleDeleteTodo(index);
                }} className="deletebutton">Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
