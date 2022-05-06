import axios from "axios";

export const getTaskApiAction = async (dispatch2) =>{
    try{
        const result = await axios({
          url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
          method: "GET",

        })
        dispatch2({
          type:"GET_TASK_TO_DO",
          data: result.data
        })
      }catch(error){
        console.log(error);
      }
}