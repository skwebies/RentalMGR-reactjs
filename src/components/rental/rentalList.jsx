import React, { Component } from "react";
import RentalCard from "./rentalCard";

class RentalList extends Component {
  constructor() {
    super();
    this.state = {
      rentals: [1, 2, 3]
    };
  }

  renderRentals() {
    debugger;
    return this.state.rentals.map(rental => {
      debugger;
      return <RentalCard key={rental} />;
    });
  }

  render() {
    debugger;
    return (
      <section id="rentalListing">
        <h1 className="page-title">Your Home All Around the World</h1>
        <div className="row">{this.renderRentals()}</div>
      </section>
    );
  }
}

export default RentalList;
