import React, { useState } from "react";
import "./App.css";
import {  useNavigate } from "react-router-dom";

function App() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  function hadlerButton() {
    if (value == "Адилет") {
      navigate("/Adilet");
    }
  }
  return (
    <>
      <div className="blood-background">
        <h1 className="blood-title">Как твое имя воин</h1>
        <div className="contained">
          <input
            type="text"
            className="blood-input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="blood-button" onClick={hadlerButton}>
            Искать свое имя
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
