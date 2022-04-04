import React, { Component } from 'react'
import {connect} from 'react-redux';
class TangGiamSoLuong extends Component {
  render() {
      console.log(this.props);
    return (
      <div className='container'>
          <p>{this.props.number}</p>
          <button onClick={() =>{

          }}>+</button>
          <button onClick={() =>{

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

const mapDispatchToProps = (dispatch) =>{
    return{
        tangGiamSoLuong: () =>{
            TangGiamSoLuong
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TangGiamSoLuong)