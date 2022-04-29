import React,{useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import axios from "axios"
export default function DemoApiReduxHook() {
    const stateTask = useSelector(rootReducer => rootReducer.taskReducer)
    console.log(stateTask);
    const dispatch = useDispatch()

    useEffect(() =>{
        const getTask = async () =>{
            try{
                dispatch({
                    type: "GET_TASKS_PENDING",

                })
                const result = await axios({
                    url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
                    method: "GET"
                })
                const action = {
                    type: "GET_TASKS_FULFILLED",
                    data: result.data
                }
                dispatch(action)
            }catch(error){
                console.log(error);
                dispatch({
                    type:"GET_TASK_REJECTED",
                    error: error.response.data
                })
            }
        }
        getTask()
    },[])
    if(stateTask.isLoading){
        return <p>Loading...</p>
    }
    if(stateTask.error){
        return <p>error</p>
    }
  return (
    <div>
        {stateTask.data.map((item,key) =>{
            return <p key={key}>{item.taskName}</p>
        })}
    </div>
  )
}
