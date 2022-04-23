import React from "react";
import Card from "./Card.js";

const Cards = function () {
  let state = [
    {
      text: "salom",
      date: "12/123/124",
      id: 123,
    },
  ];

  return (
    <>
      <div className="main">
        {state.map((el) => {
          return <Card key={el.id.toString()} value={el} />;
        })}

        <li className="card">
          <textarea className="input-note"></textarea>
          <div className="card-info">
            <p className="card-date"></p>
            <p>
              <button className="saver-btn btn-primary">Save</button>
              <span className="material-symbols-outlined hidden">
                delete_forever
              </span>
            </p>
          </div>
        </li>
      </div>
    </>
  );
};

export default Cards;
