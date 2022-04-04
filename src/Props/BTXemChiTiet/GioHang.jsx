import React, { Component } from 'react'

export default class GioHang extends Component {
    renderTableGioHang  = () => {
        let {gioHang} = this.props
        return gioHang.map ((product, key) =>{
            return  <tr key={key}>
                    <td>{product.maSP}</td>
                    <td>{product.tenSP}</td>
                    <td>
                        <img src={product.hinhAnh} alt="..." width={50} height={50} />
                    </td>
                    <td>
                        <button onClick={() =>{
                            this.props.tangGiamSoLuong(product.maSP, 1)
                        }} className="btn btn-primary mr-2">+</button>
                        {product.soLuong}
                        <button onClick={() =>{
                            this.props.tangGiamSoLuong(product.maSP, -1)
                        }} className="btn btn-danger ml-2">-</button>
                    </td>
                    <td>{product.giaBan}</td>
                    <td>{product.soLuong * product.giaBan}</td>
                    <td>
                        <button onClick={() =>{
                            this.props.xoaPhone(product.maSP);
                        }} className="btn btn-danger">xóa</button>
                    </td>
                </tr>
        })
    }
  render() {
      let {gioHang} = this.props.gioHang;
    return (
      <div>
          <div className="text-right">
              <span style={{cursor: "pointer"}}>
              <i className="fa fa-cart-arrow-down mr-2"></i>
                giỏ hàng (0)
              </span>
          </div>
          <table className="table">
                <thead>
                    <tr>
                        <th>Mã sản phẩm</th>
                        <th>tên sản phẩm</th>
                        <th>Hình ảnh</th>
                        <th>So luong</th>
                        <th>Gia ban</th>
                        <th>Thành tiền</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                      {this.renderTableGioHang()}
                </tbody>
          </table>
      </div>
    )
  }
}
