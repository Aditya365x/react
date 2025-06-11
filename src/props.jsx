import { useState, useEffect } from "react";

// useEffect, dependency array, cleanups
export default function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function increase() {
    setCount((c) => c + 1);
  }

  function decrease() {
    setCount2((c) => c - 1);
  }

  return (
    <div>
      <Counter count={count} count2={count2} />
      <button onClick={increase}>Home</button>
      <button onClick={decrease}>Notifications</button>
    </div>
  );
}

// mounting, re-rendering, unmounting
function Counter(props) {
  useEffect(function () {
    console.log("mount");
    return function () {
      console.log("unmount");
    };
  }, []);

  useEffect(
    function () {
      console.log("count has changed");

      return function () {
        console.log("cleanup inside second effect");
      };
    },
    [props.count]
  );

  return (
    <div>
      Counter1 {props.count} <br />
      Counter2 {props.count2} <br />
    </div>
  );
}


