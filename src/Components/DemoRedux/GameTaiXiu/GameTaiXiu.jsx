import React, { Component } from 'react'
import {connect} from 'react-redux'
import KetQua  from './KetQua'
import style from '../../../assets/styles/components/BaiTapGameXucXac.module.css'
import XucXac from './XucXac'
 class GameTaiXiu extends Component {
  render() {
    return (
      <div className={`${style['bg-game']} m-0 p-0`}>
          <h3 className='text-center display-4 pd-5'>Bài Tập Xúc Xắc</h3>
          <XucXac/>
          <KetQua/>
      </div>
    )
  }
}
const mapStateToProps = (rootReducer) =>{

}

export default connect(mapStateToProps)(GameTaiXiu)
