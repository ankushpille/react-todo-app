import "./App.css";
import { useState, useEffect, useRef } from "react";

export default function TodoList() {
  const [text, setText] = useState("");
  const [inputValue, setInputvalue] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const inputref = useRef(null);

  useEffect(() => {
    if (editIndex !== null && inputref.current) {
      inputref.current.focus();
    }
  }, [editIndex]);
  const handlechange = (e) => {
    setText(e.target.value);
  };

  const handleEdit = (index) => {
    console.log("inputvalue[index]", inputValue[index]);
    setText(inputValue[index]);
    setEditIndex(index);
  };

  const handleOnclick = () => {
    if (editIndex !== null) {
      const updated = [...inputValue];
      updated[editIndex] = text;
      setInputvalue(updated);
      setEditIndex(null);
    } else {
      setInputvalue([...inputValue, text]);
    }
    setText("");
  };

  const handleDelete = (index) => {
    const updated = [...inputValue];
    updated.splice(index, 1);
    setInputvalue(updated);
    setText("");
  };

  return (
    <>
      <div className="container">
        <h1>TodoList</h1>
        <input type="text" value={text} ref={inputref} onChange={handlechange} />
        <button id="addButton" onClick={handleOnclick}>
          {editIndex !== null ? "update" : "Add"}
        </button>
        <ul>
          {inputValue.map((text, index) => (
            <li key={index} className="todo-item">
              <span>{text}</span>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
