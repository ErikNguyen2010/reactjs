import React, { Component, PureComponent } from 'react'

export default class Child extends PureComponent {
  // pure component giong component tuy nhiên ko có lifecycle shouldcomponentupdate(vì react sẽ tự xử lý nhận biết props thay đổi hay ko giúp mình)
  // lưu ý: sự nhận biết các props của purecomponent chỉ ở mức shallow compare(nhận biết props trước khi thay đổi và sau khi thay đổi có giống nhau ko ở kiểu dữ liệu primitive value (number,string, boolean, null, undefined))
  constructor(props){
    super(props);
    this.state={

    }
    console.log('constructor child');
  }
  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps child");
    return currentState
  }
  // shouldComponentUpdate(newProps, newState){
  //   console.log("this.props", this.props);
  //   // this.props là props hien tại của component
  //   // newProps là props mới nhận của component truoc khi render
  //   console.log("this.props.number" ,this.props.number);
  //   console.log("newProps", newProps.number);
  //   if(this.props.number !== newProps.number){
  //     return true;
  //   }
  //   return false;
  //   console.log('shouldComponentUpdate child');
  // }
  render() {
    console.log("render child");

    return (
      <div>
        Child Component
        <h3>number props: {this.props.object.number}</h3>
      </div>
    )
  }
  timeout={};
  componentDidMount(){
    console.log("componentDidMount child");
    this.timeout = setInterval(() =>{
           console.log("hiss");
    }, 3000)
  }
  componentDidUpdate(){
    console.log("componentDidUpdate child");
  }
  componentWillUnmount(){
    //hàm gọi trước khi component mất khỏi giao diện
    // lifecycle dùng để clear các service chạy ngầm của component
    clearInterval(this.timeout)
  }
}
