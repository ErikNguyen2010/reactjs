import React, { Component } from 'react'
import Child from './Child';

export default class LifeCycle extends Component {

  constructor(props){
    super(props);
    this.state={
      number: 1,
      like: 1,
      object:{
        number: 1
      }
    }
    console.log('constructor');
  }

  static getDerivedStateFromProps(newProps, currentState) {
    // day là hàm dung de tiền xủ lý các giá trị state và props truoc khi render
    console.log("getDerivedStateFromProps");
    return currentState; // return về state mới của components
  }
  shouldComponentUpdate(newProps, newState){

    console.log('shouldComponentUpdate');
    return true
  }
  render() {
    console.log("render");
    return (
      <div>
          <h3>lifecycle</h3>
          <div className="p-5 bg-dark text-white">
            <h3>Parent Component</h3>
            <p> number: {this.state.object.number}</p>
            <button onClick={() =>{
              let newObject = {...this.state.object}
              newObject.number += 1
               this.setState({
                object: newObject
              })
            }} className="mr-2 btn-primary">+</button>
            <button onClick={() =>{
              this.setState({
                number:this.state.number -1
              })
            }} className="mr-2 btn-primary">-</button>
            <h3>Like: {this.state.like}</h3>
            <button onClick={() =>{
              this.setState({
                like: this.state.like + 1
              })
            }} className="btn btn-danger">Like</button>
            <div className="bg-success p-5 mt-2">
              <Child object={this.state.object}/>
            </div>
          </div>
      </div>
    )
  }
  componentDidMount(){
    // đây thường gọi các hàm thực thi thư viện hoặc call api
    console.log("componentDidMount");
  }
}
