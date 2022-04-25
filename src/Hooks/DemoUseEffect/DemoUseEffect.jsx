import React, { useEffect, useState } from 'react'
const arrDiaDiem =[
    {
        id: "HCM",
        name:"TP HCM",
        arrQuanHuyen:[
            {id: "01", name: "Quận 1"},
            {id: "02", name: "Quận 2"},
            {id: "03", name: "Quận 3"}
        ]
    },
    {
        id: "HN",
        name:"Hà Nội",
        arrQuanHuyen:[
            {id: "04", name: "Quận Hai BA Trung"},
            {id: "05", name: "Quận Ba Đình"},
            {id: "06", name: "Quận Hoàng Kiếm"}
        ]
    }
]

let timeOut = {};


export default function DemoUseEffect() {
    const [number,setNumber] = useState(1)

    const [idThanhPho, setIdThanhPho] = useState("")

    const [arrQH, setArrQuanHuyen] = useState([]) 

    const renderQuanHuyen = () =>{
        if(arrQH.length ==0){
            return <option>Hãy chọn thành Phố</option>
        }else{
            return arrQH.map((quanHuyen, index) =>{
                return <option key={index} value={quanHuyen.id}>{quanHuyen.name}</option>
            })
        }

    }

    // useEffect(() =>{
    //     // hàm chạy sau khi giao diện render và sau khi state update
    //     console.log('ComponentDidMount');
    //     console.log('ComponentDidUpdate');
    // })

    // useEffect(() =>{
    //     //chạy lần đầu tiên sau khi giao diện render
    //     // console.log("componentDidMount");
    //     // thường dùng để call API hoac chèn thư viện

    // },[])
    
    useEffect(() =>{
        // khi tham só 2 thay đổi thì gọi hàm này (tuong tự componentDidUpdate)
        //Dua vào state idThanhPho => de tìm ra duoc object thành phố
        if(idThanhPho !== ""){
            let thongTinThanhPho = arrDiaDiem.find(tp => tp.id === idThanhPho)
            let newArrQuanHuyen = thongTinThanhPho.arrQuanHuyen;
            setArrQuanHuyen(newArrQuanHuyen)
        }
    }, [idThanhPho])
    
    useEffect(() =>{
        timeOut = setInterval(() =>{
            console.log("call api");
        }, 1000)
        return() =>{
            // hàm này sẽ thực thi trước khi component mất khỏi giao diện, thưởng dùng đẻ clear các service chạy ngầm (giống component will unmount)
            clearInterval(timeOut)
        }
    },[])
  return (
    <div className='container'>
        Demo useEffect
        <h3>Number : {number}</h3>
        <button className="btn btn-success" onClick={() =>{
            setNumber(number + 1)
        }}>+</button>
        <div className="form-group">
            <p>Chọn Thành Phố</p>
            <select onChange={(event) =>{
                let{value} = event.target
                setIdThanhPho(value)

            }} value={idThanhPho} className='form-control w-25'>
                <option value={""}>Chọn Thành phố</option>
                <option value={'HCM'}>Hồ Chí Minh</option>
                <option value={'HN'}>Hà Nội</option>
            </select>
        </div>
        <div className="form-group">
            <p>Chọn Quận huyện</p>
            <select className='form-control w-25'>
               {renderQuanHuyen()}
            </select>
        </div>
    </div>
  )
}
