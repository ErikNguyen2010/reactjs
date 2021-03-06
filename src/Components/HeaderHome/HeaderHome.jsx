import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class HeaderHome extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">
          Cybersoft
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <NavLink activeStyle={{borderRadius: "10px"}} activeClassName="bg-white text-dark" className="nav-link" to="/home">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink activeStyle={{borderRadius: "10px"}} activeClassName="bg-white text-dark" className="nav-link" to="/about">
                About <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink activeStyle={{borderRadius: "10px"}} activeClassName="bg-white text-dark" className="nav-link" to="/contact">
                Contact <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink activeStyle={{borderRadius: "10px"}} activeClassName="bg-white text-dark" className="nav-link" to="/login">
                Login <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink activeStyle={{borderRadius: "10px"}} activeClassName="bg-white text-dark" className="nav-link" to="/register">
                Register <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink activeStyle={{borderRadius: "10px"}} activeClassName="bg-white text-dark" className="nav-link" to="/btqlnd">
                react form <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Redux thunk middleware
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink className="dropdown-item" to="/todolistapp">
                  To do list app
                </NavLink>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Lifecycle - Hooks
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink className="dropdown-item" to="/lifecycle">
                  Lifecycle
                </NavLink>
                <NavLink className="dropdown-item" to="/usestate">
                  useState
                </NavLink>
                <NavLink className="dropdown-item" to="/useeffect">
                  useEffect
                </NavLink>
                <NavLink className="dropdown-item" to="/apirfc">
                  To do Api RFC
                </NavLink>
                <NavLink className="dropdown-item" to="/apircc">
                  To do Api RCC
                </NavLink>
                <NavLink className="dropdown-item" to="/customhooks">
                Custom Hooks
                </NavLink>
                <NavLink className="dropdown-item" to="/reduxhook">
                Redux Hook
                </NavLink>
                <NavLink className="dropdown-item" to="/apireduxhook">
                Api redux hook
                </NavLink>
                <NavLink className="dropdown-item" to="/usecallback">
                Use Callback
                </NavLink>
                <NavLink className="dropdown-item" to="/usememo">
                Use Memo
                </NavLink>
                <NavLink className="dropdown-item" to="/useref">
                Use Ref
                </NavLink>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}
