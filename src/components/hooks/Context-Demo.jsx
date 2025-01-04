import { createContext, useContext, useState } from "react";
let UserContext = createContext(null);
export function Level1Component(){
    let context = useContext(UserContext);
    return(
        <div className="bg-warning text-danger p-4 m-3">
            <h2>Level-1 Component - {context}</h2>
            <Level2Component />
        </div>
    )
}
export function Level2Component(){
    let context = useContext(UserContext)
    return(
        <div className="bg-danger text-white p-4 m-3">
            <h2>Level-2 Component - {context}</h2>
        </div>
    )
}

export function ContextDemo(){
    const [username, setUserName] = useState();
    function handleNameChange(e){
        setUserName(e.target.value)
    }
    return(
        <div className="container-fluid p-4 bg-dark text-white">
            <div className="my-3">
                <input type="text" placeholder="User Name" onChange={handleNameChange}/>
            </div>
            <UserContext.Provider value={username}>
                <h2>Context Demo - {username}</h2>
                <Level1Component />
            </UserContext.Provider>
        </div>
    )
}