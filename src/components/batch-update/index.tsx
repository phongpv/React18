import React from "react";

export const BatchUpdate = () => {
  const [count, setCount] = React.useState(0);
  const [flag, setFlag] = React.useState(false);

  function fetchSomething() {
    return new Promise((resolve) => setTimeout(resolve, 100));
  }
  console.log("render");

  function handleClick() {
    console.log("=== click ===");
    fetchSomething().then(() => {
      setCount((c) => c + 1);
      setFlag((f) => !f);
    });
  }

  return (
    <div>
      <button onClick={handleClick}>Next</button>
      <h1 style={{ color: flag ? "blue" : "black" }}>{count}</h1>
    </div>
  );
};
