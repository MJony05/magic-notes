import { useState, React } from "react";
const Exem = () => {
  const [element, setElement] = useState([]);

  const addElement = () => {
    const textArea = document.querySelector(".input-note").value;
    let element = element.concat([{ text: textArea, newDate: "03/11/2021" }]);
    setElement(element);
    console.log(element);
  };
  element.forEach((card) => {
    let html = (
      <div className="card">
        <textarea className="input-note"></textarea>
        <div className="card-info">
          <p className="card-date">{}</p>
          <p>
            <button className="saver-btn btn-primary" onClick={addElement}>
              Save
            </button>
            <span className="material-symbols-outlined hidden">
              delete_forever
            </span>
          </p>
        </div>
      </div>
    );
  });
  return (
    <div className="card">
      <textarea className="input-note"></textarea>
      <div className="card-info">
        <p className="card-date">03/11/2021</p>
        <p>
          <button className="saver-btn btn-primary" onClick={addElement}>
            Save
          </button>
          <span className="material-symbols-outlined hidden">
            delete_forever
          </span>
        </p>
      </div>
    </div>
  );
};
export default Exem;
