import { useRef, useState } from "react";
import React from "react";
import reactLogo from "./assets/react.svg";
import "./assets/box.css";

function App() {
  const tittle = useRef("titulo")

  const staticTittle = () => {
    alert(tittle.current.value)
  }
  
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center">Static</h1>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="inputGroup-sizing-sm">
            Tittle:
          </span>
          <input type="text" ref={tittle} className="form-control"></input>
        <button onClick={staticTittle} className="btn bt"></button>
        </div>

        <div className="row">
          <div className="col output_box">
            <span>Resultado</span>
            </div>
        </div>



      </div>
    </div>
  );
}

export default App;
