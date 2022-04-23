import React from "react";
const Card = function () {
  return (
    <>
      <div class="card">
        <textarea class="input-note"></textarea>
        <div class="card-info">
          <p class="card-date">03/11/2021</p>
          <p>
            <button class="saver-btn btn-primary">Save</button>
            <span class="material-symbols-outlined hidden">delete_forever</span>
          </p>
        </div>
      </div>
    </>
  );
};
export default Card;
