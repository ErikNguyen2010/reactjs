import React, { Component } from 'react'
import { connect } from 'react-redux'

 class XucXac extends Component {


    renderKetQua = () =>{
        let tongDiem = 0;
        let ketQua = "";
        for(let xucXac of this.props.mangXucXac){
            tongDiem += xucXac.diem;
        }
        ketQua = tongDiem > 11 ?"Tài" : "Xỉu";
        return `${tongDiem} điểm ${ketQua}`
    }

  render() {

    return (
      <div className='container'>
          <div className="row text-center mt-5">
              <div className="col-4">
                    <button className="btn btn-success">
                        <div onClick={() =>{
                            const action ={
                                type: "DAT_CUOC",
                                banChon: true
                            };
                            this.props.dispatch(action);
                        }} className="display-4 p-5 text-white bg-success">Tài</div>
                    </button>
              </div>
              <div className="col-4">
                    {this.props.mangXucXac.map((xucXac, key) =>{
                        return <img key={key} src={xucXac.hinhAnh} alt="..." width={50} height={50} className="ml-2"/>
                    })}
                    <br/>
                    <div className="text-danger display-4 mt-5">
                        <p>{this.renderKetQua()}</p>
                    </div>
              </div>
              <div className="col-4">
                    <button className="btn btn-success">
                        <div onClick={() =>{
                            const action = {
                                type: "DAT_CUOC",
                                banChon:false
                            };
                            this.props.dispatch(action);
                        }} className="display-4 p-5 text-white bg-success">Xỉu</div>
                    </button>
              </div>
          </div>

      </div>
    )
  }
}

const mapStateToProps = (rootReducer) => {
    return {
        mangXucXac: rootReducer.gameXucXacReducer.mangXucXac
    }
}



export default connect(mapStateToProps)(XucXac)