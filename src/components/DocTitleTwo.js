import React,{useState,useEffect} from 'react'
import useDocumenttitle from '../hooks/useDocumenttitle';

const DocTitleTwo = () => {
    const [count, setCount] = useState(0);
    useDocumenttitle(count);
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Count - {count}</button>
        </div>
    )
}

export default DocTitleTwo
