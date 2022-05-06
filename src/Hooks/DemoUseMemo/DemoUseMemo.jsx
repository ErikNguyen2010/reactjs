import React, { useMemo, useState } from 'react'
import Cart from './Cart'

export default function DemoUseMemo(props) {
    const [like, setLike] = useState(1)
    let cart = [
        {id: "1", name: "iphone", price: 1000},
        {id: "2", name: "iphone2", price: 2000},
        {id: "3", name: "iphone3", price: 3000},
    ]
    const cartMemo = useMemo(() =>cart, [])
  return (
    <div className='m-5'>
        Like: {like} tim
        <br/>
        <span style={{cursor: "pointer", color:"red", fontSize:35}} onClick={() =>{
            setLike(like + 1)
        }}>tim</span>
        <br/>
        <br/>
        <Cart cart={cartMemo}/>
    </div>
  )
}
