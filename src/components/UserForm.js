import React,{useState} from 'react'
import useInput from '../hooks/useInput';
const UserForm = () => {
    const[firstName,bindfirstName,resetfirstName] = useInput('');
    const[lastName,bindlastName,resetlastName] = useInput('');
    const submitHamdler =(e)=>{
        e.preventDefault();
        alert(`hello ${firstName} ${lastName}`);
        resetfirstName()
        resetlastName()
    }
    return (
        <form onSubmit={submitHamdler}>
            <div>
                <label>First Name</label>
                <input type="text" {...bindfirstName}/>
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" {...bindlastName}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default UserForm
