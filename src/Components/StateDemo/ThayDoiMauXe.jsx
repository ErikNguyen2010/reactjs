import React, { Component } from 'react'

export default class ThayDoiMauXe extends Component {

  state ={
    imgSrc: "./img/products/products/red-car.jpg"
  }

  changeSource = (newSource) =>{
    this.setState({
      imgSrc:newSource
    })
  }

  render() {
    return (
      <div className='container'>
          <div className="row">
              <div className="col-6">
                    <img src= {this.state.imgSrc} alt="..." className='w-100' />
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col-3">
                      <button onClick={() =>{
                        this.changeSource("./img/products/products/red-car.jpg")
                      }} className='btn btn-danger'>red car</button>
                  </div>
                  <div className="col-3">
                    <button onClick={() =>{
                      this.changeSource("./img/products/products/silver-car.jpg")
                    }} className='btn btn-primary'>silver car</button>
                  </div>
                  <div className="col-3">
                    <button onClick={() =>{
                      this.changeSource("./img/products/products/black-car.jpg")
                    }} className='btn btn-main'>black car</button>
                  </div>
                  <div className="col-3">
                    <button onClick={() =>{
                      this.changeSource("./img/products/products/steel-car.jpg")
                    }} className='btn btn-danger'>steel car</button>
                  </div>
                </div>
              </div>
          </div>
      </div>
    )
  }
}
