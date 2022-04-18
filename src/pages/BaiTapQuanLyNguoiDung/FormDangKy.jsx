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
    console.log(dataType);
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
  render() {
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
                    <input onChange={this.handleChange} name='taiKhoan' className="form-control" id="taiKhoan" />
                    <p className="text text-danger">{this.state.error.taiKhoan}</p>
                  </div>
                  <div className="form-group">
                    <p>Họ tên</p>
                    <input name='hoTen' onChange={this.handleChange} className="form-control" id="hoTen" />
                    <p className="text text-danger">{this.state.error.hoTen}</p>
                  </div>
                  <div className="form-group">
                    <p>Email</p>
                    <input data-type="email" name='email' onChange={this.handleChange} className="form-control" id="email" />
                    <p className="text text-danger">{this.state.error.email}</p>
                  </div>
              </div>
              <div className="col-6">
                  <div className="form-group">
                    <p>Mật khẩu</p>
                    <input type={'password'} name='matKhau' onChange={this.handleChange} className="form-control" id="matKhau" />
                    <p className="text text-danger">{this.state.error.matKhau}</p>
                    
                  </div>
                  <div className="form-group">
                    <p>Số điện thoại</p>
                    <input data-type="phone" name='soDienThoai' onChange={this.handleChange} className="form-control" id="soDienThoai" />
                    <p className="text text-danger">{this.state.error.soDienThoai}</p>

                  </div>
                  <div className="form-group">
                    <p>Loại người dùng</p>
                    <select onChange={this.handleChange} name='loaiNguoiDung' className="form-control" id="loaiNguoiDung">
                      <option value={'NguoiDung'}>Người dùng</option>
                      <option value={'QuanTri'}>Quản trị</option>
                    </select>
                  </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button type='submit' className="btn btn-success">Đăng ký</button>
          </div>
        </div>
      </form>
    )
  }
}


export default connect ()(FormDangKy)