import React from "react";
import Card from "./Card.js";

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.letter = 101;
    this.newNote = {};
    this.state = {
      arr: [],
      letter: 100,
    };
    this.delete = this.delete.bind(this);
  }
  delete(id) {
    let newState = this.state.arr.filter((el) => {
      return el.id !== id;
    });
    this.setState({ arr: newState });
    localStorage.setItem("cards", JSON.stringify(newState));
  }
  getLocal() {
    const saved = JSON.parse(localStorage.getItem("cards"));
    return saved;
  }
  componentDidMount() {
    if (!this.getLocal()) return;
    this.setState({ arr: this.getLocal() });
  }
  render() {
    return (
      <>
        <div className="main">
          <li className="card current-card">
            <textarea
              className="input-note crt-input"
              placeholder="type here"
              onChange={(e) => {
                let change = 100 - e.target.value.length;

                this.newNote = {
                  text: e.target.value,
                };
                this.setState({ letter: change });
              }}
            ></textarea>
            <div className="card-info">
              <p className="card-date">{this.state.letter}</p>
              <p>
                <button
                  className="saver-btn btn-primary"
                  onClick={() => {
                    let inn = document.querySelector(".crt-input");
                    if (inn.value) {
                      this.newNote = {
                        ...this.newNote,
                        date: new Date().toISOString(),
                        id: new Date().getTime(),
                      };

                      let newItem = [this.newNote, ...this.state.arr];

                      this.setState({ arr: newItem, letter: 100 });
                      localStorage.setItem("cards", JSON.stringify(newItem));
                      inn.value = "";
                    } else {
                      alert("note cant be empty. Please type something");
                    }
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
          {this.state.arr.map((el) => {
            return <Card key={el.id} value={el} func={this.delete} />;
          })}
        </div>
      </>
    );
  }
}

export default Cards;
