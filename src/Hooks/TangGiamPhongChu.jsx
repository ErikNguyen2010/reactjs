import React, {useState} from 'react'

export default function TangGiamPhongChu() {

    const [chuMacDinh, tangGiam] = useState(10)

  return (
    <div>
        <p style={{fontSize: `${chuMacDinh}px`}}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem voluptatibus molestiae aliquam ullam ut, doloribus magnam natus veritatis assumenda similique! Quas excepturi libero tempore ad culpa ex officia quis blanditiis.
        </p>
        <button onClick={() =>{
            tangGiam(chuMacDinh + 1)
        }} className="btn btn-primary">+</button>
        <button onClick={() =>{
            tangGiam(chuMacDinh - 1)
        }} className="btn btn-primary ml-2">-</button>
    </div>
  )
}
