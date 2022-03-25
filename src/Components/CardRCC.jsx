//rcc: cú pháp tạo nhanh 1 react class component

import React, { Component } from 'react'


export default class CardRCC extends Component {


    // phương thức render sẽ là phương thức định nghĩa giao diện của thẻ này
    // noi dung component tạo ra phải dc bao phủ bởi 1 thẻ

  render() {
    return (
      <div className='card w-25'>
          <img src="https://i.pravatar.cc?u=1" alt="..." />
          <div className="card-body">
              <p>Iphone</p>
              <p>1.000</p>
              <button className="btn btn-success">Add to cart</button>
          </div>
      </div>
    )
  }
}
