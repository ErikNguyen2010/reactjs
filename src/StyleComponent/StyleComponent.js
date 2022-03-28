import React, { Component } from 'react'
// cách 1: import đường dẫn css => ảnh hưởng toàn bộ ứng dụng
// import './Style.css'

// cách 2 : import module css => ảnh hưởng tại nơi import module vào code
import style from "./Style.module.css"


// cách 3: import css cho từng thẻ
export default class StyleComponent extends Component {
  render() {
    let status = false;
    let classStyle = status ? 'text-green' : 'text-red';



    return (
      <div>
          <h3>style Component</h3>
          <p className={`${style[classStyle]} bg-dark p-5`}>hello cybersoft</p>
          <p style={{backgroundColor: '#000', color:'green', padding: "15px"}}>hello bc23</p>
      </div>
    )
  }
}
