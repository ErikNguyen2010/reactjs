import React, { Component } from 'react'

export default class CardProduct extends Component {
    
  render() {
    let {product} = this.props
    return (
        // this.props: là thuộc tính có sẵn của component để nhận giá trị từ component cha truyền vào(là component nào đang sử dụng thẻ này render)
        
      <div className='card'>
          <img src={product.img} alt="..." />
          <div className="card-body">
              <p>{product.name}</p>
              <p>{product.price}</p>
              <button className='btn btn-success'> dat mua</button>
          </div>
      </div>
    )
  }
}
