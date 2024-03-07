import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const addCount = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  const removeCount = () => {
    if (count>0) {
      setCount(count-1)
      
    }
  };

  return (
    <>
      <div>
      {count}

       <div>
        <button onClick={addCount}>add</button>
        <button onClick={removeCount}> removeValue</button>
       </div>
      </div>
    </>
  );
}

export default App;
