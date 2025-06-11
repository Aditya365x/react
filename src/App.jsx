import React, { useState } from "react";

import "./App.css";

function App() {
  return <div>
    <Counter> </Counter>
  </div>

}
function Counter(){
  const [count,setcount] = useState(0);
  
  function increaseCount(){
    setcount(count+1);
  }
  function decreaseCount() {
    setcount(count - 1);
  }
  function resetCount(){
    setcount(0)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>IncreaseCount</button>
      <button onClick={decreaseCount}>DecreaseCount</button>
      <button onClick={resetCount}>resetCount</button>
    </div>
  );
}

export default App;
