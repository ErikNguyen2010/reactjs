import React, { Component } from 'react'
import TangGiamFontSize from './TangGiamFontSize';
import ThayDoiMauSac from './ThayDoiMauSac';
import ThayDoiMauXe from './ThayDoiMauXe';

export default class StateDemo extends Component {
    /*
        this.state: là thuộc tính có sẵn dc kế thừa từ react class component. dùng để chứa các giá trị thay đổi trên giao diện khi ng dùng thao tác (handle event);

    */
    state = {
        login: false
    }
    userName = "cybersoft"

    renderLogin = () =>{
        if(this.state.login){
            return <div className='text-light font-weight-bold nav-item'>Hello! {this.userName}</div>; 
        }
        return <button onClick={() =>{
            this.handleLogin();
        }} type='button' className='btn btn-success'>Đăng nhập</button>      
    }

    handleLogin = () =>{
        // this.state.login = true; // ko thay đổi giá trị state theo cách gán giá trị trực típ
        /*
            + this.setState: là phuong thức có sẵn của RCC, dùng để thay đổi giá trị state và xử lý render lại giao diện. setState là phương thức bất đồng bộ
            setState nhận vào 2 tham số: state mới (là object state chứa giá trị mới)
        */
        this.setState({
            login:true
        });
    }



    
  render() {
    return (
      <div>
         <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                    <div className="dropdown-menu" aria-labelledby="dropdownId">
                    <a className="dropdown-item" href="#">Action 1</a>
                    <a className="dropdown-item" href="#">Action 2</a>
                    </div>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    {this.renderLogin()}
                </form>
            </div>
        </nav>
        <hr/>
        <hr/>
        <TangGiamFontSize/>
        <ThayDoiMauSac/>
        <ThayDoiMauXe/>
      </div>
    )
  }
}

