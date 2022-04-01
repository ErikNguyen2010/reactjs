import React, { Component } from 'react'
import ChiTietSanPham from './ChiTietSanPham'
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
                    <Phone product={product} newPhone ={this.newPhone}/>
                </div>
        })

    }
    
  state ={
      phoneDetail:  { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
  }
  newPhone =(sanPhamMoi) =>{
      this.setState({
          phoneDetail: sanPhamMoi
      })
  }
  render() {
      let{maSP, tenSP, manHinh,giaBan, heDieuHanh, cameraTruoc, cameraSau, ram, rom, hinhAnh} = this.state.phoneDetail;
    return (
      <div>
          <div className="container-fluid">
                <div className="row">
                    {this.renderProduct()}
                </div>
               <ChiTietSanPham spChiTiet={this.state.phoneDetail}/>
          </div>


      </div>



    )
  }
}
