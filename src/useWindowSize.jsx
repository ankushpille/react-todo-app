import { useEffect, useState } from "react";

function UseWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handlereSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handlereSize);

    return () => {
      window.removeEventListener("resize", handlereSize);
    };
  }, []);
  return size;
}

function WindowSizeDisplay() {
  const { width, height } = UseWindowSize();

  return (
    <>
      <p>
        Window size {width} * {height}
      </p>
    </>
  );
}

export default WindowSizeDisplay;
