import React from "react";
import ReactDOM from "react-dom/client";
export class SaveComponent {
  infoGetter() {
    let note = document.querySelector("input-note").value;
    console.log(note);
  }
  render() {
    return (
      <div className="card">
        <textarea className="input-note"></textarea>
        <div className="card-info">
          <p className="card-date">03/11/2021</p>
          <p>
            <button
              className="saver-btn btn-primary"
              onClick={this.infoGetter()}
            >
              Save
            </button>
            <span className="material-symbols-outlined hidden">
              delete_forever
            </span>
          </p>
        </div>
      </div>
    );
  }
}
