import React,{useState} from 'react'
import useCounter from '../hooks/useCounter';

const CounterOne = () => {
    const [count,increse,decrese,reset] = useCounter();
    return (
        <div>
            <span>Count = {count}</span>
            <br/>
            <button onClick={increse}>Increse</button>
            <button onClick={decrese}>Decrese</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterOne;
