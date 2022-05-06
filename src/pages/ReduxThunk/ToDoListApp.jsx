import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import { getTaskApiAction } from '../../Components/redux/actions/toDoListActions';
export default function ToDoListApp() {
  const {tasks} = useSelector(state => state.toDoListReducer)
const dispatch = useDispatch()
  useEffect(() =>{
      const action2 = getTaskApiAction
        
        dispatch(action2)
  },[])

  return (
    <div>
      <div className='container'>
          <h3 className="text-center display-4">To do list</h3>
          <div className="d-flex justify-content-center ">
              <table className="table w-50 text-center">
                <tbody>
                  {tasks.map((task,key) =>{
                    return  <tr key={key}>
                    <td>{task.taskName}</td>
                    <td>
                      <span className="badge badge-danger">Incomplete</span>
                      <span className="fa fa-check text-success ml-2" style={{fontSize: 25}}></span>
                    </td>
                  </tr>
                  })}
                  
                </tbody>
              </table>
          </div>
      </div>
    </div>
  )
}
