import React, {useState, useEffect} from 'react'
import axios from 'axios'
export default function DemoApiRFC() {
  const [tasks, setStask] = useState([]);
  const [search, setSearch] = useState("")



  useEffect(() =>{
    async function getTask(){
      try{
        const result = await axios({
          url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
          method: "GET",

        })
        setStask(result.data)
      }catch(error){
        console.log(error);
      }
    }
    getTask()
  },[])


  const handleSearch = async () =>{
    try{
      const result = await axios({
        url: `http://svcy.myclass.vn/api/ToDoList/GetTask?taskName=${search}`,
        method: "GET",
      })
      setStask([result.data])
    }catch(error){

    }
  }

  return (
    <div>
      <div className='container'>
          <h3 className="text-center display-4">To do list</h3>
          <div className="form-inline text-center">
            <label htmlFor="">Search</label>
            <input onChange={(event) =>{
              setSearch(event.target.value)
            }} type="text" className='form-control' id='search' value={search} />
            <button onClick={handleSearch} className="btn btn-success">Search</button>
          </div>
          <div className="d-flex justify-content-center ">
              <table className="table w-50 text-center">
                <tbody>
                  {tasks.map((task,key) =>{
                    return  <tr key={key}>
                    <td>{task.taskName}</td>
                    <td>
                      <span className="badge badge-danger">Incomplete</span>
                      <span className="fa fa-check text-success ml-2" style={{fontSize: 25}}></span>
                    </td>
                  </tr>
                  })}
                  
                </tbody>
              </table>
          </div>
      </div>
    </div>
  )
}
