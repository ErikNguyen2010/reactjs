import React, { Component } from 'react'

export default class TangGiamFontSize extends Component {

  state = {
    fSize : 15 // state fsize là number
  }

  changeFontSize = (newFontSize) =>{
    this.setState({
      fSize: this.state.fSize + newFontSize
    })
  }




  render() {
    return (
      <div className='container'>
          <h3>bài tập tăng giảm font-size</h3>
          <p style={{fontSize:`${this.state.fSize}px`}}>hoc lap trình</p>
          <button className='btn btn-primary' onClick={()=>{
            this.changeFontSize(5);
          }}>+</button>
          <button className='btn btn-primary ml-2' onClick={() =>{
            this.changeFontSize(-5)
          }}>-</button>
      </div>
    )
  }
}


