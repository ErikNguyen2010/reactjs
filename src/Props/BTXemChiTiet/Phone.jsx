import React, { Component } from 'react'

export default class Phone extends Component {
  render() {
      let{product} = this.props
    return (
      <div>
           <div className="card">
                        <img src={product.hinhAnh} alt="..." className='w-full' height={300} />
                        <div className="card-body">
                            <p>{product.tenSP}</p>
                            <p>{product.giaBan.toLocaleString()}</p>
                            <button onClick={() =>{
                                this.props.newPhone(product)
                            }} className="btn btn-success">xem chi tiet</button>
                        </div>
             </div>

      </div>
    )
  }
}
