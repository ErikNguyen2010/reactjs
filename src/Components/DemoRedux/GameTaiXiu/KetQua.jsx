import React, { Component } from 'react'
import { connect } from 'react-redux'

 class KetQua extends Component {
  render() {
      let{banChon, soBanThang, tongSoBanChoi} = this.props.stateXucXac;
    return (
      <div className='container text-center'>
          <div>
              <p className='display-4'>
                  Bạn chọn: <span className='text-warning'>{banChon ? "Tài" : "Xỉu"}</span>
              </p>
          </div>
          <div>
              <p className='display-4'>
                  Tổng số bàn thắng: <span className='text-success'>{soBanThang}</span>
              </p>
          </div>
          <div>
              <p className='display-4'>
                  Tổng số bàn chơi: <span className='text-primary'>{tongSoBanChoi}</span>
              </p>
          </div>
          <div>
              <button className='btn btn-success'>
                  <div className="p-3 display-4 bg-success text-white" onClick={() =>{
                    const action ={
                        type: "PLAY_GAME",
                    }
                    this.props.dispatch(action)


                  }}>play game</div>
              </button>
          </div>

      </div>
    )
  }
}

const mapStateToProps = (rootReducer) => {
    return{
        stateXucXac : rootReducer.gameXucXacReducer
    }
}



export default connect(mapStateToProps)(KetQua)