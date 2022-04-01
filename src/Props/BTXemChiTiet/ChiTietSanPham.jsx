import React, { Component } from 'react'

export default class ChiTietSanPham extends Component {
  render() {
    let{maSP, tenSP, manHinh,giaBan, heDieuHanh, cameraTruoc, cameraSau, ram, rom, hinhAnh} = this.props.spChiTiet;
    return (
      <div>
           <div className="row mt-5">
                    <div className="col-4">
                        <h1>
                            {tenSP}
                        </h1>
                        <div>
                            <img src={hinhAnh} alt="..." width={300}  />
                        </div>
                    </div>
                    <div className="col-8">
                    <h3>thong số kỹ thuật</h3>
                        <table className="table">
                            <tbody>
                                    <tr>
                                    <th>màn hình</th>
                                    <th>{manHinh}</th>
                                    </tr>
                                    <tr>
                                    <th>he dieu hanh</th>
                                    <th>{heDieuHanh}</th>
                                    </tr>
                                    <tr>
                                    <th>cam truoc</th>
                                    <th>{cameraTruoc}</th>
                                    </tr>
                                    <tr>
                                    <th>cam sau</th>
                                    <th>{cameraSau}</th>
                                    </tr>
                                    <tr>
                                    <th>ram</th>
                                    <th>{ram}</th>
                                    </tr>
                                    <tr>
                                    <th>rom</th>
                                    <th>{rom}</th>
                                    </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
      </div>
    )
  }
}
