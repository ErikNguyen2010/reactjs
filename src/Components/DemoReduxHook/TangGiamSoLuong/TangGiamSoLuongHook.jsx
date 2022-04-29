import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

//useSelector la 1 hook giúp ket nối với redux store và lấy state về cho component

//useDispatch là 1 hook giúp dispatch 1 redux action lên redux store
export default function TangGiamSoLuongHook() {
    const stateNumber = useSelector(rootReducer => rootReducer.stateNumber)
    const dispatch = useDispatch()

    const tangGiamSoLuong = (soLuong) =>{
        const action ={
            type: "TANG_GIAM_SO_LUONG",
            soLuong
        }
        dispatch(action)
    }
  return (
    <div>
        <p>stateNumber: {stateNumber}</p>
        <button onClick={() =>{
            tangGiamSoLuong(1)
        }}>+</button>
        <button onClick={() =>{
            tangGiamSoLuong(-1)
        }}>-</button>
    </div>
  )
}
