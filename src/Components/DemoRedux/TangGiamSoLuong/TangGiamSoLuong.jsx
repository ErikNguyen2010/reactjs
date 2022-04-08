import React, { Component } from 'react'
import {connect} from 'react-redux';
class TangGiamSoLuong extends Component {
  render() {
      console.log(this.props);
    return (
      <div className='container'>
          <p>{this.props.number}</p>
          <button onClick={() =>{
              this.props.tangGiamSoLuong(1);
          }}>+</button>
          <button onClick={() =>{
              this.props.tangGiamSoLuong(-1);
          }}>-</button>
      </div>
    )
  }
}

const mapStateToProps = (rootReducer) =>{
    return {
        number: rootReducer.stateNumber
    }
}

// định nghĩa 1 hàm mapDispatchtoProps => nhiem vu: tạo ra các props cho component là hàm
const mapDispatchToProps = (dispatch) =>{
    return {
        tangGiamSoLuong: (soLuong) =>{
            const action = {
                type: "TANG_GIAM_SO_LUONG",
                soLuong: soLuong,
            }
            dispatch(action)
        }
      
    }
}


// cú pháp ket noi giữa react component và redux

export default connect(mapStateToProps, mapDispatchToProps)(TangGiamSoLuong)