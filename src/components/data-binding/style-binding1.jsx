import { useState } from "react";
export function StyleBinding1(){
    const [styleObj, setStyleObj] = useState({position:'', top:'', left:''})
    function GetPosition(e){
        setStyleObj({position:'fixed', top: e.clientY+'px', left: e.clientX+'px'})
    }
  return(
    <div onMouseMove={GetPosition} class="container-fluid">
          <div style={{height:'1000px'}}>
             <p>move mouse pointer to test</p>
           </div>
           <img style={styleObj} src="flag.gif" width="50" height="50" alt="text"/>
    </div>
  )
}