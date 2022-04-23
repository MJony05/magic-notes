import React from "react";
import ReactDOM from "react-dom/client";
import Exem from "./Exem";
import "./index.css";
import { SaveComponent } from "./SaveComponent.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
const btnSaver = document.querySelector(".saver-btn");

const App = () => {
  return (
    <>
      <Exem />
    </>
  );
};
root.render(<App />);
