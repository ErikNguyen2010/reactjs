import React, { Component } from 'react'
import axios from "axios"
export default class DemoApiRCC extends Component {
  state = {
    arrTask : []
  }

  getAllTaskApi = async () =>{
    // let promise = axios({
    //   url : "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
    //   method: "GET"
    // })

    // promise.then(result =>{
    //   console.log('result', result.data);
    //   console.table(result.data)
    //   this.setState({
    //     arrTask: result.data
    //   })
    // })
    // promise.catch(err =>{
    //   console.log(err);
    // })
    try{
      let result = await axios({
          url : "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
          method: "GET"
      });
      console.log(result.data);
      console.log(123);
      this.setState({
        arrTask: result.data
      })
    }catch(err){
      console.log({err});
    }

  }
  componentDidMount(){
    this.getAllTaskApi()
  }
  render() {
    return (
      <div className='container'>
          <button onClick={() =>{
            this.getAllTaskApi()
          }} className="btn btn-success">Get all task</button>
          <h3 className="text-center display-4">To do list</h3>
          <div className="d-flex justify-content-center ">
              <table className="table w-50 text-center">
                <tbody>
                  {this.state.arrTask.filter(task => task.status === false).map((task,index) =>{
                    return <tr key={index}>
                      <td>{task.taskName}</td>
                      <td>
                        <span className="badge badge-danger">Incomplete</span>
                        <span className="fa fa-check text-success ml-2" style={{fontSize: 25}}></span>
                      </td>
                    </tr>
                  })}
                </tbody>
                <tfoot>
                {this.state.arrTask.filter(task => task.status === true).map((task,index) =>{
                    return <tr key={index}>
                      <td>{task.taskName}</td>
                      <td>
                        <span className="badge badge-success">Complete</span>
                      </td>
                    </tr>
                  })}
                </tfoot>
              </table>
          </div>
      </div>
    )
  }
}
