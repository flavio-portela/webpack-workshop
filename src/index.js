import React from "react";
import ReactDOM from "react-dom";
import NyanImg from "./images/nyan.gif";
import "./index.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>My Awesome app!!!</h2>
        <img className="nyan" src={NyanImg} alt="nyan" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
