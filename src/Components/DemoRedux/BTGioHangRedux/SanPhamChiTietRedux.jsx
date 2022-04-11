import React, { Component } from 'react'
import {connect} from 'react-redux'
class SanPhamChiTietRedux extends Component {
  render() {
    return (
      <div>
          <div className="col-6">
                    <h3 className='text-center'>{this.props.stateChiTiet.tenSP}</h3>
                    <img src={this.props.stateChiTiet.hinhAnh} alt="..." className='w-100' />
              </div>
              <div className="col-6">
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>màn hình</th>
                                <th>{this.props.stateChiTiet.manHinh}</th>
                            </tr>
                            <tr>
                                <th>he dieu hành</th>
                                <th>{this.props.stateChiTiet.heDieuHanh}</th>
                            </tr>
                            <tr>
                                <th>màn hình</th>
                                <th>màn hình</th>
                            </tr>
                        </tbody>
                    </table>
              </div>
      </div>
    )
  }
}

const mapStateToProps = (rootReducer) =>{
    return {
        stateChiTiet: rootReducer.xemChiTietReducer
    }
}

export default connect (mapStateToProps)(SanPhamChiTietRedux)
