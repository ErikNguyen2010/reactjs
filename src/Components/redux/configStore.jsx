import {combineReducers, createStore, compose, applyMiddleware} from 'redux'
import { gioHangReducer } from './reducers/gioHangReducer';
import { stateNumber } from './reducers/numberReducer';
import { stateImgCar } from './reducers/stateImgCarReducer';
import { xemChiTietReducer } from './reducers/xemChiTietReducer';
import { gameXucXacReducer }  from './reducers/gameXucXacReducer'
import {quanLyNguoiDungReducer} from './reducers/QuanLyNguoiDungReducer'
import {taskReducer} from './reducers/taskReducer'
import {toDoListReducer} from './reducers/toDoListReducer'
import thunk from 'redux-thunk'
import{composeWithDevTools} from 'redux-devtools-extension'
const rootReducer = combineReducers({
    //các state dự án sẽ dc khai báo tại đây

    stateNumber: stateNumber,

    stateImgCar: stateImgCar,

    gioHangReducer: gioHangReducer,

    xemChiTietReducer: xemChiTietReducer,


    gameXucXacReducer: gameXucXacReducer,


    quanLyNguoiDungReducer,quanLyNguoiDungReducer,

    taskReducer,
    toDoListReducer,


});

const middleware = [
    thunk,
];
export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...middleware)));