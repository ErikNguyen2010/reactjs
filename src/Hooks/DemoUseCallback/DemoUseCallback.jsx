import React, { useCallback, useState } from 'react'
import Comment from './Comment'

export default function DemoUseCallback(props) {
    const [like, setLike] = useState(1)
    const [number, setNumber] = useState(1)
    const renderNotify = () =>{
        return `ban da tha ${like} tim`
    }
    const renderNotifyCallback = useCallback(renderNotify,[like])
  return (
    <div className='m-5'>
        <p>number:{number}</p>
        <button onClick={() =>{
            setNumber(number + 1)
        }}>+</button>

        Like: {like} tim
        <br/>
        <span style={{cursor: "pointer", color:"red", fontSize:35}} onClick={() =>{
            setLike(like + 1)
        }}>tim</span>
        <br/>
        <br/>
        <Comment renderNotify={renderNotifyCallback}/>
    </div>
  )
}
