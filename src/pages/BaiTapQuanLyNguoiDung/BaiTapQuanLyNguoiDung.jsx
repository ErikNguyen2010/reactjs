import React, { Component } from 'react'
import FormDangKy from './FormDangKy'
import TableNguoiDung from './TableNguoiDung'
export default class BaiTapQuanLyNguoiDung extends Component {
  render() {
    return (
      <div className='container-fluid'>
          <h3 className="text-center">bài tập quản lý nguoi dùng</h3>
          <FormDangKy/>
          <TableNguoiDung/>
      </div>
    )
  }
}
