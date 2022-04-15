import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
    return (
      <div>
          <h3>detail</h3>
          <p>Param url: {this.props.match.params.postid}</p>
          <img className='w-25' src={`https://i.pravatar.cc?u=${this.props.match.params.postid}`} alt="..." />
      </div>
    )
  }
}
