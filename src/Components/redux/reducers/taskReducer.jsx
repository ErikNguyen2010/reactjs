const stateDefault = {
    data: [],
    isLoading: false, // dùng để hiển thị loading khi đang gọi API
    error: null, // hiển thị lỗi khi API bị fail
}


export const taskReducer = (state = stateDefault, action) =>{
    switch(action.type){
        case "GET_TASKS_FULFILLED":{
            return{
                ...state,
                isLoading: false,
                error: null,
                data: action.data
            }
        }
        case "GET_TASKS_PENDING":{
            return{
                ...state,
                isLoading: true,
                error:null,
            }
        }
        case "GET_TASKS_REJECTED":{
            return{
                ...state,
                isLoading:false,
                error: action.error
            }
        }
        default: return state
    }
}