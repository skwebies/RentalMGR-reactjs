import React from "react";

const RentalCard = () => {
  return (
    <div className="col-md-3 col-xs-6">
      <div className="card bwm-card">
        <img
          src="http://via.placeholder.com/350x250"
          alt=""
          className="card-img-top"
        />
        <div className="card-block">
          <h6 className="card-subtitle">Whole Apartment &#183; New Yorks</h6>
          <h4 className="card-title">Some nice apartments</h4>
          <p className="card-text">$240 per night &#183; Free Cancelation</p>
          <a href="/" className="card-link">
            More Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default RentalCard;
