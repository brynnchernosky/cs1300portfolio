import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="webpage">
      <div className="homepage">
        <header className="homepageHeader">
          <div>
            <h1>Jane Doe</h1>
            <p>
              Frontend developer creating streamlined solutions for any business
            </p>
          </div>
          <nav className="homepageNavigation">
            <a href="" className="navBarElement">
              Work
            </a>
            <a href="" className="navBarElement">
              About
            </a>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default App;
