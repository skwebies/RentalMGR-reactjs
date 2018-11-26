import React, { Component } from "react";
import "./App.css";
import Header from "./shared/header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1>I am a app component</h1>
      </div>
    );
  }
}

export default App;
