import {combineReducers, createStore} from 'redux'
import { gioHangReducer } from './reducers/gioHangReducer';
import { stateNumber } from './reducers/numberReducer';
import { stateImgCar } from './reducers/stateImgCarReducer';
import { xemChiTietReducer } from './reducers/xemChiTietReducer';
import { gameXucXacReducer }  from './reducers/gameXucXacReducer'
const rootReducer = combineReducers({
    //các state dự án sẽ dc khai báo tại đây

    stateNumber: stateNumber,

    stateImgCar: stateImgCar,

    gioHangReducer: gioHangReducer,

    xemChiTietReducer: xemChiTietReducer,


    gameXucXacReducer: gameXucXacReducer,


});


export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());