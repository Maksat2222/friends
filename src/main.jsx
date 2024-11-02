import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Adilet } from "./friends/Adilet";
import { Aika } from "./friends/Aika";
import { Baikal } from "./friends/Baikal";
import { Dasha } from "./friends/Dasha";
import { Gela } from "./friends/Gela";
import { Samash } from "./friends/Samash";
import { Maks } from "./friends/Maks";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Adilet" element={<Adilet />} />
        <Route path="/Aika" element={<Aika />} />
        <Route path="/Baikal" element={<Baikal />} />
        <Route path="/Dasha" element={<Dasha />} />
        <Route path="/Gela" element={<Gela />} />
        <Route path="/Maks" element={<Maks />} />
        <Route path="/Samash" element={<Samash />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
