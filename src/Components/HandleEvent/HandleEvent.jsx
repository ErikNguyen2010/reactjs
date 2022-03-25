import React, { Component } from 'react'

export default class HandleEvent extends Component {
    showMess = () =>{
        alert("hello")
    }
    sayHello = (name) => {
        alert("heello" + name) 
    }
  render() {
    return (
      <div className='container'>
          <button onClick={this.showMess}>Click me!</button>
          <button onClick={() =>{
                alert("hello")
            }}>Click me!</button>
            <button onClick={this.sayHello.bind(this, 'Loc')}>say hello</button>
            <button onClick={() =>{
                this.sayHello("loc 123");
            }}>say hello</button>
      </div>
    )
  }
}

