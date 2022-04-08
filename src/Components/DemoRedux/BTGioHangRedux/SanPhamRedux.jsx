import React, { Component } from 'react'
import {connect} from 'react-redux'
class SanPhamRedux extends Component {
  render() {
      let {sanPham} = this.props
    return (
      <div>
                <div className="card">
                    <img src={sanPham.hinhAnh} alt="..." height={350} />
                    <div className="card-body">
                        <p>{sanPham.tenSP}</p>
                        <p>{sanPham.giaBan}</p>
                        <button className='btn btn-primary'>xem chi tiết</button>
                        <button onClick={() =>{
                            this.props.themGioHang(sanPham)
                        }} className="btn btn-danger ml-3  ">thêm giỏ hàng</button>
                        
                    </div>
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        themGioHang: (sanPhamClick) =>{
            let sanPham = {...sanPhamClick,soLuong:1}
            const action = {
                type: "THEM_GIO_HANG",
                sanPham
            };
            dispatch(action)
        }
    }
}

export default connect(null, mapDispatchToProps)(SanPhamRedux)