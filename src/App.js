import React from "react";
import "./style.css";
import { useState } from 'react';

export default function App() {
  const [count,setcount] = useState(0);
  function handleclick(){
    setcount(count + 1);
  }
  return (
    <div>
      <MyButton count={count} onClick={handleclick}/>
      <MyButton count={count} onClick={handleclick}/>
    </div>
  );
}

function MyButton({count,onClick}) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}
