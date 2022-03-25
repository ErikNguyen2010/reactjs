import React, { Component } from "react";

export default class DataBinding extends Component {
  product = {
    id: 1,
    name: "iphone",
    price: 1000,
    img: "https://i.pravatar.cc?u=77",
  };
  renderMessage = () => {
    return "heello";
  };

  renderCard = () => {
    return (
      <div className="card w-25">
        <img src={this.product.img} alt="..." />
        <div className="card-body">
          <p>{this.product.name}</p>
          <p>{this.product.price}</p>
          <button className="btn btn-success">Add to cart</button>
        </div>
      </div>
    );
  };

  render() {
    let title = "cybersoft";
    return (
      <div className="container">
        <p id="title">ten trung tam: {title}</p>
        {this.renderCard()}
        <p>lời chào: {this.renderMessage()}</p>
      </div>
    );
  }
}
