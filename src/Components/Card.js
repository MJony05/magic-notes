import React from "react";
import "./style/card.css";
const Card = function (props) {
  return (
    <>
      <li className="card" key={props.value.id} id={props.value.id}>
        <textarea
          className="input-note"
          readOnly={true}
          defaultValue={props.value.text}
        ></textarea>
        <div className="card-info">
          <p className="card-date">{props.value.date}</p>
          <p
            className="delete-note-btn"
            onClick={(e) => {
              props.func(e.target.closest(".card").id);
            }}
          >
            <span className="material-symbols-outlined">delete_forever</span>
          </p>
        </div>
      </li>
    </>
  );
};
export default Card;
