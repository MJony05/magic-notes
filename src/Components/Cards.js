import React from "react";
import Card from "./Card.js";

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.letter = 100;
    this.newNote = {};
    this.state = {
      arr: [],
      letter: 100,
    };
  }
  render() {
    return (
      <>
        <div className="main">
          {this.state.arr.map((el) => {
            return <Card key={el.id.toString()} value={el} />;
          })}
          <li className="card">
            <textarea
              className="input-note"
              placeholder="type here"
              onChange={(e) => {
                let change = 100 - e.target.value.length;
                this.setState({ letter: change });

                this.newNote = {
                  text: e.target.value,
                };
              }}
            ></textarea>
            <div className="card-info">
              <p className="card-date">{this.state.letter}</p>
              <p>
                <button
                  className="saver-btn btn-primary"
                  onClick={() => {
                    this.newNote = {
                      ...this.newNote,
                      date: new Date().toISOString(),
                      id: new Date().getTime(),
                    };

                    let newItem = [...this.state.arr, this.newNote];

                    this.setState({ arr: newItem, letter: 100 });
                    let crt = document.querySelectorAll(".input-note");
                    crt.forEach((element) => {
                      if (!element.id) {
                        element.value = "";
                      }
                    });
                  }}
                >
                  Save
                </button>
                <span className="material-symbols-outlined hidden">
                  delete_forever
                </span>
              </p>
            </div>
          </li>
        </div>
      </>
    );
  }
}

export default Cards;
