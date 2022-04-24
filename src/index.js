import React from "react";
import ReactDOM from "react-dom/client";
import Cards from "./Components/Cards";
import "./index.css";
const App = function () {
  return (
    <div className="container">
      <div className="title">
        <h1 className="heading">
          <span>Magic</span> Notes
        </h1>
        <button
          className="toogle-btn btn-primary"
          onClick={(e) => {
            console.log(e.target.closest(".container").classList);
            document.body.classList.toggle("dark");
          }}
        >
          Toogle Mode
        </button>
      </div>
      <div className="search-box">
        <form>
          <button type="submit" className="search-btn">
            <span className="material-symbols-outlined"> search </span>
          </button>
          <input
            type="text"
            placeholder="Search for your notes..."
            className="search-input"
          />
        </form>
      </div>
      <Cards />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
