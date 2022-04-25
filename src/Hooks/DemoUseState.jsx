import React, {useState} from 'react'
import TangGiamPhongChu from './TangGiamPhongChu'

export default function DemoUseState(props) {
    const [number, setNumber] = useState(1)
    const [imgSrc, setImgSrc] = useState(`https://i.pravatar.cc?u=1`)
    return (
        <div className='container'>
        <h3>number: {number}</h3>
        <button className="btn btn-success mr-2" onClick={() =>{
            setNumber(number + 1)
        }}>+</button>
        <button className="btn btn-success mr-2" onClick={() =>{
            setNumber(number - 1)
        }}>-</button>
        <h3>Tinder</h3>
        <div className="card w-25">
            <img src={imgSrc} alt="..." className='w-100' />
            <div className="card-body">
                <button onClick={() =>{
                    let result = Math.floor(Math.random() * 100)
                    let newLink = `https://i.pravatar.cc?u=${result}`
                    setImgSrc(newLink)
                }} className="btn btn-outline-danger">random</button>
            </div>
        </div>
                <TangGiamPhongChu/>
    </div>
  )
}
