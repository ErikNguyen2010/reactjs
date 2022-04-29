import {useState} from 'react'

export default function useCounter(inititalValue = 0) {
    const [count, setCount] = useState(inititalValue);
    const increase = () =>{
        setCount(count + 1)
    }
    const decrease = () =>{
        setCount(count - 1)
    }
  return {count, increase, decrease}
}
