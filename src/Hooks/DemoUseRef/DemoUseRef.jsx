import React, { useRef, useState } from 'react'

export default function DemoUseRef(props) {
    // const [state, setState] = useState({
    //     username: '',
    //     password: '',
    // })
    const userLoginRef = useRef({username: '',password: ''})
    const userNameRef = useRef({})
    const userPassRef = useRef({})
    const handleChange = (event) =>{
        let{value, name} = event.target
        userLoginRef.current[name] = value;
    }
    const handleSubmit =(event) =>{
        event.preventDefault()
        console.log(userLoginRef.current);
        console.log("username", userNameRef.current.value);
        console.log("password", userPassRef.current.value);
        userNameRef.current.style.color = "red"

    }
  return (
    <form onSubmit={handleSubmit} className='container'>
        <h3>Login</h3>
        <div className="form-group">
            <p>Username</p>
            <input ref={userNameRef} name='username' className="form-control" onChange={handleChange} />
        </div>
        <div className="form-group">
            <p>password</p>
            <input ref={userPassRef} name='password' className="form-control" onChange={handleChange} />
        </div>
        <div className="form-group">
            <button className='btn btn-success'  type='submit'>Login</button>
        </div>
        
    </form>
  )
}
