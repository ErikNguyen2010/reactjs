import React, { Component } from 'react'
import ThayDoiMauSac from '../../Components/StateDemo/ThayDoiMauSac'
import ChiTietSanPham from './ChiTietSanPham'
import GioHang from './GioHang'
import Phone from './Phone'


export default class BTXemChiTiet extends Component {

    arrDienThoai = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]

    renderProduct = () =>{
        return this.arrDienThoai.map((product, key) =>{
            return <div className="col-4" key={key}>
                    <Phone product={product} newPhone ={this.newPhone} themGioHang ={this.themGioHang}/>
                </div>
        })

    }
    
  state ={
      phoneDetail:  { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },


      gioHang:[
      ],
  }
  newPhone =(sanPhamMoi) =>{
      this.setState({
          phoneDetail: sanPhamMoi
      })
  }
 
  themGioHang = (sanPhamClick) =>{
      let sanPham = {...sanPhamClick, soLuong:1};
      let gioHang = this.state.gioHang;
      let sanPhamGioHang = gioHang.find(sanPham => sanPham.maSP == sanPhamClick.maSP)
      if(sanPhamGioHang){
          sanPhamGioHang.soLuong +=1
      }else{
          gioHang.push(sanPham)
      }
      this.setState({
          gioHang: gioHang
      })
  }
  xoaGioHang = (maSPClick) =>{
      let gioHang = this.state.gioHang;
      if(window.confirm('mun1 xoa ko')){
          gioHang = gioHang.filter(sanPham => sanPham.maSP !== maSPClick)
      }
      console.log(gioHang);
      this.setState({
          gioHang: gioHang
      })
  }
  tangGiamSoLuong = (maSPClick, soLuong) =>{
    let gioHang = this.state.gioHang;
    let result = gioHang.find(sanPham => sanPham.maSP == maSPClick)
    if(result){
            result.soLuong += soLuong
            if(result.soLuong < 1){
                if(window.confirm("mun xoa ko")){
                    gioHang = gioHang.filter(sp =>sp.maSP !== maSPClick)
                }
                result.soLuong -= soLuong;
            }
    }

    this.setState({
        gioHang: gioHang
    })
  }

  render() {
      let{maSP, tenSP, manHinh,giaBan, heDieuHanh, cameraTruoc, cameraSau, ram, rom, hinhAnh} = this.state.phoneDetail;
    return (
      <div>
          <div className="container-fluid">
              <h3  className="mt-5 text-center">giỏ hàng</h3>
              <GioHang gioHang = {this.state.gioHang} xoaPhone={this.xoaGioHang} tangGiamSoLuong ={this.tangGiamSoLuong}/>
              <h3 className='text-center mb-5'>danh sách sản phẩm</h3>
                <div className="row">
                    {this.renderProduct()}
                </div>
               <ChiTietSanPham  spChiTiet={this.state.phoneDetail}/>
          </div>


      </div>



    )
  }
}
