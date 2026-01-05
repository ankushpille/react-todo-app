import { useState } from "react";

function Counter1() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <h2>Counter App</h2>
      <p>{count}: ***Count***</p>

      <button onClick={handleIncrement}>+ increment</button>
      <button onClick={handleDecrement}>- Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}


export default Counter1;