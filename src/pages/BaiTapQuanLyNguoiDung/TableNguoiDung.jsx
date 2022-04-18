import React, { Component } from 'react'
import{connect} from 'react-redux'
class TableNguoiDung extends Component {
  render() {
    return (
      <table className='table'>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tài khoản</th>
              <th>Họ tên</th>
              <th>Ảnh đại diện</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Loại người dùng</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
           {this.props.stateNguoiDung.mangNguoiDung.map((nguoiDung,key) =>{
             return  <tr key={key}>
             <td>{key + 1}</td>
             <td>{nguoiDung.taiKhoan}</td>
             <td>{nguoiDung.hoTen}</td>
             <td>
               <img src={`https://i.pravatar.cc?u=${nguoiDung.hoTen}`} alt="..." width={50} height={50} />
             </td>
             <td>{nguoiDung.email}</td>
             <td>{nguoiDung.soDienThoai}</td>
             <td>{nguoiDung.loaiNguoiDung}</td>
             <td>
               <button onClick={() =>{
                 this.props.xoaNguoiDung(nguoiDung.taiKhoan)
               }} className="btn btn-danger mr-2">Xóa</button>
               <button onClick={() =>{
                 const action ={
                   type : "SUA_NGUOI_DUNG",
                   nguoiDung
                 }
               }} className="btn btn-primary ml-2">Sửa</button>
             </td>
           </tr>
           })}
          </tbody>
      </table>
    )
  }
}




const mapStateToProps =(rootReducer) =>{
  return{
    stateNguoiDung: rootReducer.quanLyNguoiDungReducer
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
      xoaNguoiDung: (taiKhoan) =>{
        const action ={
          type: "XOA_NGUOI_DUNG",
          taiKhoan
        }
        dispatch(action)
      }   
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableNguoiDung)