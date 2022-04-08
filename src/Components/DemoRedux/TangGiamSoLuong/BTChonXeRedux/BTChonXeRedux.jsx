import React, { Component } from 'react'
import {connect} from 'react-redux';
 class BTChonXeRedux extends Component {
  render() {
    return (
      <div className='container'>
          <h3>chọn xe bài tập</h3>
          <div className="row">
              <div className="col-6">
                <img src={this.props.imgSrc} alt="..." className='w-100' />
              </div>
              <div className="col-6">
                <div className="row">
                    <div className="col-2">
                        <button onClick={() =>{
                            this.props.thayDoiImg("./img/products/products/steel-car.jpg")
                        }} className="btn btn-danger">red</button>
                    </div>
                    <div className="col-2">
                        <button onClick={() =>{
                            this.props.thayDoiImg("./img/products/products/red-car.jpg")
                        }} className="btn btn-main">black</button>
                    </div>
                    <div className="col-2">
                        <button onClick={() =>{
                            this.props.thayDoiImg("./img/products/products/black-car.jpg")
                        }} className="btn btn-primary">steel</button>
                    </div>
                    <div className="col-2">
                        <button onClick={() =>{
                            this.props.thayDoiImg("./img/products/products/silver-car.jpg")
                        }} className="btn btn-success">silver</button>
                    </div>
                </div>
              </div>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (rootReducer) =>{
    return {
        imgSrc: rootReducer.stateImgCar
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        thayDoiImg: (newSrc) =>{
            const action = {
                type: "THAY_DOI_IMG",
                newSrc: newSrc
            }
            dispatch(action)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BTChonXeRedux)
