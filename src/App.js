import React, { Component } from "react";
import "./App.css";
import PigPen from "./components/PigPen.js";

class App extends Component {
  componentDidMount() {
    return <span></span>;
  }
  render() {
    return (
      <div className="App">
        <PigPen />
      </div>
    );
  }
}

export default App;
