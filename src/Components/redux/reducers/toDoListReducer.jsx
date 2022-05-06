const stateDefault = {
    tasks: []
}

export const toDoListReducer = (state = stateDefault, action) =>{
    switch(action.type){
        case "GET_TASK_TO_DO":{
            state.tasks = action.data
            return {...state}
        }
        default: return state;
    }
}