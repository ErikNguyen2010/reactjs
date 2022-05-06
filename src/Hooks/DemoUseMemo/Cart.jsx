import React, { memo } from 'react'

function Cart(props) {
    console.log("cart");
  return (
    <div>
        <table className="table">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>price</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.cart.map((item, key) =>{
                        return <tr key={key}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}



export default memo(Cart)
