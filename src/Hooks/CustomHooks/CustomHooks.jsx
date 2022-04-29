import React, {useState, useEffect} from 'react'
import useForm from './useForm'
import useCounter from './useCounter'
import useAxios from './useAxios'

export default function CustomHooks() {
  // const [values, setValues] = useState({
  //   userName: "", 
  //   email: "", 
  //   password: ""
  // })

  // const handleChange = (event) =>{
  //   let {name,value} = event.target
  //   setValues({
  //     ...values,
  //     [name]: value
  //   })
    
  // }
  const {values, handleChange} = useForm({
    username:"",
    email: "",
    password: "",
  })
  const {count, increase, decrease} = useCounter()
  const result = useAxios({
    url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
    method: "GET",
  })
  console.log(result.data);

  
  return (
    <div className='container'>
      <p>{count}</p>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text"  className='form-control' name='username' value={values.username} onChange={handleChange} id='username'/>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email"  className='form-control' name='email' value={values.email} onChange={handleChange} id='email'/>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password"  className='form-control' name='password' value={values.password} onChange={handleChange} id='password'/>
      </div>
    </div>
  )
}
