import React, { Component } from 'react'
import {connect} from 'react-redux'
class GioHangRedux extends Component {
    tinhTong = () =>{
        let tongSoLuong = this.props.stateGioHang.reduce ((soLuong, spGH) =>{
            return soLuong + spGH.soLuong
            
        }, 0)

        let tongTien = this.props.stateGioHang.reduce((tt, spGH) =>{
            let tong = spGH.giaBan * spGH.soLuong;
            return tt+ tong
        }, 0) 
        return `${tongSoLuong}  -  ${tongTien.toLocaleString()} VND`
    }
  render() {
    return (
      <div>
          <h2 className='text-center'>Giỏ hàng</h2>
          <div className="text-right">
              <span className="text-danger font-weight-bold">giỏ hàng ({this.tinhTong()})</span>
          </div>
          <table className="table">
              <thead>
                  <tr>
                      <th>mã sản phẩm</th>
                      <th>tên sản phẩm</th>
                      <th>hình ảnh</th>
                      <th>số lượng</th>
                      <th>giá bán</th>
                      <th>tổng tiền</th>
                      <th></th>
                  </tr>
              </thead>
              <tbody>
                   {this.props.stateGioHang.map((product, key) =>{
                       return  <tr key={key}>
                       <td>{product.maSP}</td>
                       <td>{product.tenSP}</td>
                       <td>
                           <img src={product.hinhAnh} alt="..." width={50} height={50} />
                       </td>
                       <td>
                           <button onClick ={() =>{
                               this.props.tangGiamSoLuong(product.maSP, 1)
                           }} className="btn btn-primary mr-2">+</button>
                           {product.soLuong}
                           <button onClick ={() =>{
                               this.props.tangGiamSoLuong(product.maSP, -1)
                           }} className="btn btn-primary ml-2">-</button>
                       </td>
                       <td>
                           {product.giaBan}
                       </td>
                       <td>
                           {product.soLuong * product.giaBan}
                       </td>
                       <td>
                           <button  onClick={() =>{
                               this.props.xoaGioHang(product.maSP)
                           }} className="btn btn-danger">xóa</button>
                       </td>
                   </tr>
                   })}


                </tbody>

          </table>
      </div>
    )
  }
}
const mapStateToProps = (rootReducer) =>{
    return {
        stateGioHang: rootReducer.gioHangReducer
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        xoaGioHang: (maSPClick) =>{
            const action = {
                type: "XOA_GIO_HANG",
                maSPClick
            }
            dispatch(action);
        },

        tangGiamSoLuong: (maSanPham, soLuong) =>{
            const action = {
                type: "TANG_GIAM_SO_LUONG",
                maSanPham,soLuong
            }
            dispatch(action);
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps )(GioHangRedux);
