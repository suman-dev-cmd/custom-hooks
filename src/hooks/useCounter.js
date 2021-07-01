import {useState} from 'react'

const useCounter = () => {
    const [count, setcount] = useState(0);
    const increse =()=>{
        setcount(prevcount=>prevcount+1);
    }
    const decrese =()=>{
        setcount(prevcount=>prevcount-1);
    }
    const reset =()=>{
        setcount(0);
    }
    return [count,increse,decrese,reset]
}

export default useCounter
