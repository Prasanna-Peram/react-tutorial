import {  useRef, useState } from "react";
export function StateEventUseRef(){
    const [msg,setMsg] = useState('');
    let m1 = useRef(null);
    function Msg1(){
        setMsg('Hello !');
    }
    function Msg2(){
        setMsg('How are you?');
    }
    function Msg3(){
        setMsg('Welcome to React !')
    }
    function handleShowClick(){
        setTimeout(Msg1,1000)
        m1.current = setTimeout(Msg2,6000)
       setTimeout(Msg3,10000)
    }
    function handleCancelClick(){
        clearTimeout(m1.current)
    }
    return (
        <div className="container-fluid">
            <button onClick={handleShowClick}>Show Msgs</button>
            <button onClick={handleCancelClick}>Cancel 2nd Message</button>
            <p className="mt-4 h1">{msg}</p>
        </div>
    )
}