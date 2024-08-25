import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StudySpace from "./Pages/Study-Space/StudySpace";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*
    <App />
    */}
    <StudySpace />
  </React.StrictMode>
);
