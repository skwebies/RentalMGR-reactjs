import React, { Component } from "react";
import "./App.css";
import Header from "./shared/header";
import RentalList from "./components/rental/rentalList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <RentalList />
        </div>
      </div>
    );
  }
}

export default App;
