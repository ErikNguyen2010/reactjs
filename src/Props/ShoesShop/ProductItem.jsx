import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
      //phan biệt giữa props và state
      //giống nhau: đây là 2 thuoc tính có sẵn cũa react class component để binding dữ liệu lên giao diện
      /*khác nhau: 
            State dùng đề chứa dữ liệu thay đổi trên giao diện từ 1 event(xử lý từ ng dùng).state có thể gán lại giá trị thông qua setState
            Props là thuộc tính chứa giá trị từ component cha truyền vào,this.props ko thể thay đổi giá trị (read only)
       */
      let {prod} = this.props
    return (
      <div className='card'>
          <div className="d-flex justify-content-center">
          <img src={prod.image} alt="..." width={200} />

          </div>
          <div className="card-body">
              <p>{prod.name}</p>
              <p>{prod.price}</p>
              <button className="bg-dark text-white btn">+ Add to carts</button>
          </div>
      </div>
    )
  }
}
