import { useEffect, useState } from "react";

export function Login(){

    useEffect(()=>{
        console.log("Login Component Mounted")
        return ()=>{
            console.log("Login Component unmounted")
        }
    },[])
    return(
        <div>
            <h2>Login</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" /></dd>
            </dl>
        </div>
    )
}
export function Register(){
    useEffect(()=>{
        console.log('Register Component Mounted');

        return ()=>{
            console.log('Register Component Unmounted');
        }

    },[])
    return(
        <div>
            <h2>Register</h2>
        </div>
    )
}

export function  EffectDemo(){
    const [component,setComponent] = useState('')

    function handleLoginClick(){
        setComponent(<Login/>)
    }
    function handleRegisterClick(){
              setComponent(<Register/>)  
    }
     
    return(
        <div className="container-fluid">
            <h3>Home</h3>
            <button onClick={handleLoginClick}>Login</button>
            <button onClick={handleRegisterClick}>Register</button>
            <hr />
            {component}
        </div>
    )
}
