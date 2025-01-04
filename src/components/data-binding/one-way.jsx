import { useState } from "react";
export function OneWay(){
    const [userName, setUserName] = useState('John');
    function handleNameChange(event){
        setUserName(event.target.value)
    }
    return(
        <div className="container-fluid">
            <h2>One Way Binding</h2>
            <label>Username</label>
            <input type="text" value={userName} onChange={handleNameChange}/>
            <h3> Hello! {userName}</h3>
        </div>
    )
}