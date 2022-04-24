import React from "react";
import ReactDOM from "react-dom/client";
import Cards from "./Components/Cards";
import "./index.css";
const App = function () {
  return (
    <>
      <div className="container">
        <div className="title">
          <h1 className="heading">
            <span>Magic</span> Notes
          </h1>
          <button
            className="toogle-btn btn-primary"
            onClick={(e) => {
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
      <footer class="site-footer">
        <div className="container">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">
              Copyright &copy; 2022 All Rights Reserved by
              <a href="https://github.com/MJony05">Jonibek</a>.
            </p>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li>
                <a
                  class="facebook"
                  href="https://www.facebook.com/profile.php?id=100062535840237"
                >
                  <i class="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a class="twitter" href="https://t.me/Jony_0504">
                  <i class="fa-brands fa-telegram"></i>
                </a>
              </li>
              <li>
                <a class="linkedin" href="https://www.linkedin.com/in/jonibek/">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a class="linkedin" href="https://github.com/MJony05">
                  <i class="fa-brands fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
