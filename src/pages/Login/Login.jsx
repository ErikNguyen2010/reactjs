import React, { Component } from 'react'

export default class Login extends Component {
  handleLogin = () =>{
    let userName  = document.querySelector("#username").value
    let passWord  = document.querySelector("#password").value
    console.log(this.props.history);
    if(userName === "cybersoft" && passWord === "cybersoft"){
      // this.props.history.push('/profile')
      this.props.history.replace('/profile')
      localStorage.setItem('username', userName)
    }else{
      alert("sai mk")
    }

  }
  render() {
    return (
      <div className='container'>
          <h3>Login</h3>
          <div className="form-group">
            <p>user name</p>
            <input  className="form-control" id='username' name='username' />
          </div>
          <div className="form-group">
            <p>Password</p>
            <input  type="password" text="password" className="form-control" id='password' name='password' />
          </div>
          <div className="form-group">
            <button className="btn btn-success" onClick={() =>{
              this.handleLogin()
            }}>Login</button>
          </div>
          <button className="btn btn-danger mt-2" onClick={() =>{
            this.props.history.goBack()
          }}>Tro ve</button>
      </div>
    )
  }
}
