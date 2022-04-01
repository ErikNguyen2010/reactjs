import React, { Component } from 'react'
import CardProduct from './CardProduct'

export default class DemoProps extends Component {
    product1 = {
        id:1,
        name: "iphone",
        price:1000,
        img:  "https://picsum.photos/id/1/200",
    }
    product2 = {
        id:2,
        name: "samsung",
        price:345000,
        img:  "https://picsum.photos/id/124/200",
    }
  render() {
    return (
      <div>
          <div className="container">
              <div className="d-flex">
                <div className="w-25">
                    <CardProduct product={this.product1}/>
                </div>
                <div className="w-25 ml-5">
                    <CardProduct product={this.product2}/>
                </div>
              </div>
          </div>
      </div>
    )
  }
}

