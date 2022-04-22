import React, { Component } from 'react'
import {connect} from 'react-redux'

class FormDangKy extends Component {
  state = {
    value :{
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDienThoai: "",
      hoTen: "",
      loaiNguoiDung: "NguoiDung ",
    },
    error:{
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDienThoai: "",
      hoTen: "",
    }
  }

  handleChange =(event) =>{
    let{id,className,name,value} = event.target;
    let dataType = event.target.getAttribute('data-type')
    let newValue ={...this.state.value};
    newValue[id] = value


    let newError ={...this.state.error};
    let messError = '';
    if(value === ''){
      messError = `${id}  ko dc bo trong`
    }
    if(dataType === "email"){
      let regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if(!regexEmail.test(value)){
        messError = "email ko dung dinh dạng"
      }
    }

    newError[id] = messError
    this.setState({
      value: newValue,
      error: newError
    })
  }
  handleSubmit = (event) =>{
    event.preventDefault()
    let {value,error} = this.state;
    for(let key in error){
      if(error[key] !== ""){
        alert(key + "chua hop le")
        return;
      }
    }
    for(let key in value){
      if(value[key] === ""){
        alert(key + "ko hop le")
        return
      }
    }
    const action ={
      type:"DANG_KY",
      nguoiDung: this.state.value
    }
    this.props.dispatch(action)
  }
  // hướng giải quyết: thay vì dữ liệu follow từ props => chuyễn dư liệu sang state.value
  // static getDerivedStateFromProps(newProps, currenState){
  //   // lấy props từ redux về gán cho state trước khi render
  //   if(currenState.value.taiKhoan !== newProps.stateNguoiDungSua.nguoiDungSua.taiKhoan){
  //     currenState.value = {...newProps.stateNguoiDungSua.nguoiDungSua}
  //   }
  //   return currenState;

  // }
  componentWillReceiveProps(newProps){
    this.setState({
      value:newProps.stateNguoiDungSua.nguoiDungSua
    })
  }
  render() {
    let{taiKhoan, matKhau, email, hoTen, soDienThoai, loaiNguoiDung} = this.state.value;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="card">
          <div className="card-header bg-dark text-white">
            <h3 className=" text-center">thong tin nguoi dùng</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                  <div className="form-group">
                    <p>Tài khoản</p>
                    <input onChange={this.handleChange} name='taiKhoan' value={taiKhoan} className="form-control" id="taiKhoan" />
                    <p className="text text-danger">{this.state.error.taiKhoan}</p>
                  </div>
                  <div className="form-group">
                    <p>Họ tên</p>
                    <input name='hoTen' onChange={this.handleChange} value={hoTen} className="form-control" id="hoTen" />
                    <p className="text text-danger">{this.state.error.hoTen}</p>
                  </div>
                  <div className="form-group">
                    <p>Email</p>
                    <input data-type="email" name='email' onChange={this.handleChange} value={email} className="form-control" id="email" />
                    <p className="text text-danger">{this.state.error.email}</p>
                  </div>
              </div>
              <div className="col-6">
                  <div className="form-group">
                    <p>Mật khẩu</p>
                    <input type={'password'} name='matKhau' onChange={this.handleChange} value={matKhau} className="form-control" id="matKhau" />
                    <p className="text text-danger">{this.state.error.matKhau}</p>
                    
                  </div>
                  <div className="form-group">
                    <p>Số điện thoại</p>
                    <input data-type="phone" name='soDienThoai' onChange={this.handleChange} value={soDienThoai} className="form-control" id="soDienThoai" />
                    <p className="text text-danger">{this.state.error.soDienThoai}</p>

                  </div>
                  <div className="form-group">
                    <p>Loại người dùng</p>
                    <select onChange={this.handleChange} name='loaiNguoiDung' value={loaiNguoiDung} className="form-control" id="loaiNguoiDung">
                      <option value={'NguoiDung'}>Người dùng</option>
                      <option value={'QuanTri'}>Quản trị</option>
                    </select>
                  </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button type='submit' className="btn btn-success">Đăng ký</button>
            <button type='button' className="btn btn-primary" onClick={() =>{
              const action ={
                type: "CAP_NHAT_THONG_TIN",
                nguoiDungCapNhat: this.state.value
              }
              this.props.dispatch(action)
            }}>Cap nhat</button>
          </div>
        </div>
      </form>
    )
  }
}
const mapStateToProps = (rootReducer) =>{
  return{
    stateNguoiDungSua : rootReducer.quanLyNguoiDungReducer
  }
}

export default connect (mapStateToProps)(FormDangKy)