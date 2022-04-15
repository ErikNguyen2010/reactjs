import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Profile extends Component {
  render() {
    if(!localStorage.getItem('username')){
      alert("ban chua dang nhap")
      return <Redirect to="/login"/>
    }
    return (
      <div>
          s
      </div>
    )
  }
}
