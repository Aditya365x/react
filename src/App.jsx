// import React, { useState, useEffect } from "react";

// import "./App.css";


// function App() {
//   let [counterVisible, setCounterVisible] = useState(true);
//   const intervalId = useEffect(function(){
//     setInterval(function(){
//       setCounterVisible( c =>!c)
//       //c =>!c means function(c){
//       //return !c;} its a short hand form
//     },5000);
//     return ()=>{clearInterval(intervalId);}
//   },[])

//   return <div>
//     hi

//     {counterVisible ? <Counter> </Counter>: null}  
//     hello
//     </div>
//     // if the counterVisible is true then show the Counter otherwise show the null
 

// }
// function Counter(){
//   const [count, setcount] = useState(0);

//   // gaurd our setInterval from re-renders
  
// useEffect(function () {
//   console.log("on mount");
//   const intervalId = setInterval(function () {
//     console.log("from inside setInterval");
//     setcount(c => c+1);
//   }, 1000);

// //the clearInterval stops running the itervalId twice

//   return function () {
//     clearInterval(intervalId);
//   };
// }, []);
  
// function increaseCount() {
//   setcount(count + 1 );
// }
//   function decreaseCount() {
//     setcount(count - 1);
//   }
//   function resetCount() {
//     setcount(0);
//   }
//   return (
//     <div>
//       <h1>{count}</h1>
//       {<button onClick={increaseCount}>IncreaseCount</button>}
//       <button onClick={decreaseCount}>DecreaseCount</button>
//       <button onClick={resetCount}>resetCount</button>
//     </div>
//   );
// }

// export default App;



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