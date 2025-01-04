import { useState } from "react"
export function StateEventDemo(){
    const [msg, setMsg] = useState('')
    const [code,setCode] = useState('')
    function handleKeyUp(e){
      setCode(e.target.value.toUpperCase())
    }
    function handleBlur(){
        setMsg('')
    }   
    function handleFocus(){
        setMsg('IFSC Code: SBINOOOOHY, HDFOOOOTN')
    }
    return (
        <div className="container-fluid">
             <h2>State Events</h2>
             <dl>
               <dt>Bank IFSC Code</dt>
               <dd><input type="text" onChange={handleKeyUp} value={code} onBlur={handleBlur} onFocus={handleFocus}/></dd>
               <dd className="text-danger">{msg}</dd>
             </dl>
        </div>
    )
}