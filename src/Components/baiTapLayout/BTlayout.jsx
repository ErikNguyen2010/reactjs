import React, { Component } from 'react'
import BTcontent from './BTcontent'
import BTfooter from './BTfooter'
import BTheader from './BTheader'
import BTsidebar from './BTsidebar'

export default class BTlayout extends Component {
  render() {
    return (
    <div className='container-fluid'>
        <div className="row">
            <div className="p-0 col-12">
                <BTheader />
            </div>
        </div>
        <div className='row'>
            <div className="p-0 col-4">
                <BTsidebar/>
            </div>
            <div className="p-0 col-8">
                <BTcontent/>
            </div>
        </div>
        <div className='row'>
            <div className=" p-0 col-12">
                <BTfooter/>
            </div>
        </div>
    </div>
    )
  }
}
