import {useState} from 'react'

const useInput = (initailValue) => {
   const [value, setValue] = useState(initailValue)
   const reset = ()=>{
       setValue(initailValue);
   }
   const bind ={
       value,
       onChange:e=>{
           setValue(e.target.value)
       }
   }
   return [value,bind,reset]
}

export default useInput
