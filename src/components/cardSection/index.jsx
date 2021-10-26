import React from "react";
import "./style.css";
import Card from "../Card";

const CardSection = () => {
  return (
    <div className="cardSection">
      <div className="cardSection_top">
        <div className="cardSection_title">
          <h2>Categories</h2>
        </div>
        <div className="cardSection_more">
          <h2>More</h2>
        </div>
      </div>

      <div className="cardSection_bottom">
        <div className="card_holder">
          <Card />
        </div>
        <div className="card_holder">
          <Card />
        </div>
        <div className="card_holder">
          <Card />
        </div>
        <div className="card_holder">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default CardSection;
