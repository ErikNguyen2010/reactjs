import {useState} from 'react'
// custom hook ko return ve giao dien, chỉ return về data
export default function useForm(initialValues) {
    const [values, setValues] = useState(initialValues)
    const handleChange = (event) =>{
        let {name,value} = event.target
        setValues({
          ...values,
          [name]: value
        })
        
      }
  return {values, handleChange};
}

//  const {} = useForm({
//     userName: "", 
//     email: "", 
//     password: ""
// })