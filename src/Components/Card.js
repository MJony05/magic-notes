import React from "react";
import "./style/card.css";
const Card = function (props) {
  console.log(props);
  return (
    <>
      <li className="card" key={props.value.id}>
        <textarea
          className="input-note"
          defaultValue={props.value.text}
        ></textarea>
        <div className="card-info">
          <p className="card-date">{props.value.date}</p>
          <p>
            <button className="saver-btn btn-primary">Save</button>
            <span className="material-symbols-outlined hidden">
              delete_forever
            </span>
          </p>
        </div>
      </li>
    </>
  );
};
export default Card;
