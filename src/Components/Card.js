import React from "react";
import "./style/card.css";
const Card = function (props) {
  return (
    <>
      <li className="card" key={props.value.id}>
        <textarea
          id={props.value.id}
          className="input-note"
          readOnly={true}
          defaultValue={props.value.text}
        ></textarea>
        <div className="card-info">
          <p className="card-date">{props.value.date}</p>
          <p>
            <button className="saver-btn btn-primary  hidden">Save</button>
            <span className="material-symbols-outlined">delete_forever</span>
          </p>
        </div>
      </li>
    </>
  );
};
export default Card;
