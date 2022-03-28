import React, { Component } from 'react'

export default class ThayDoiMauSac extends Component {
    state ={
        color: "green",
    }


    handleChangeColor = (newColor) =>{
        this.setState({
            color:newColor
        })
    }
  render() {
    return (
      <div className='container'>
          <h3>thay doi màu sắc ngôi nhà</h3>
          <i className='fa fa-home' style={{fontSize:150, color:this.state.color}}></i>
          <button onClick={() =>{
              this.handleChangeColor("green");
          }} className='btn btn-success'>Green</button>
          <button onClick={() =>{
              this.handleChangeColor("blue");
          }} className='btn btn-primary ml-2'>Blue</button>
          <button onClick={() =>{
              this.handleChangeColor('red')
          }} className='btn btn-danger ml-2'>Red</button>
      </div>
    )
  }
}
