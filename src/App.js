import { React, useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    const num = e.target.textContent;
    // console.log(num);
    setValue(value + num);
    console.log(value);
  };

  const clear =()=>{
setValue('')
  }
  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="main">
        <input
          value={value}
          className="inp"
          placeholder="Enter Number... "
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="btns">
          <button className="btn" onClick={handleClick}>
            1
          </button>
          <button className="btn" onClick={handleClick}>
            2
          </button>
          <button className="btn" onClick={handleClick}>
            3
          </button>
          <button className="btn" onClick={handleClick}>
            *
          </button>
          <button className="btn" onClick={handleClick}>
            4
          </button>
          <button className="btn" onClick={handleClick}>
            5
          </button>
          <button className="btn" onClick={handleClick}>
            6
          </button>
          <button className="btn" onClick={handleClick}>
            -
          </button>
          <button className="btn" onClick={handleClick}>
            7
          </button>
          <button className="btn" onClick={handleClick}>
            8
          </button>
          <button className="btn" onClick={handleClick}>
            9
          </button>
          <button className="btn" onClick={handleClick}>
            /
          </button>
          <button className="btn" onClick={()=>clear()}>
            C
          </button>
          <button className="btn" onClick={handleClick}>
            0
          </button>
          <button className="btn" onClick={() => setValue(eval(value))}>
            =
          </button>
          <button className="btn" onClick={handleClick}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
