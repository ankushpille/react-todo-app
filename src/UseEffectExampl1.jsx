import { useState, useEffect } from "react";
export default function UseEffectExample1() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setdata(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);

  return (
    <>
      <h1>Hello world</h1>
      {data.map((list) => (
        <ul>
          <li key={list.id}>{list.name}</li>
        </ul>
      ))}
    </>
  );
}
