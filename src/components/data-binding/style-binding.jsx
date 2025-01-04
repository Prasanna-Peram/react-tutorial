import { useState } from "react";
export function StyleBinding(){
   const [textColor, setTextColor] = useState({color:'black'})
   function GetColor(color){
      setTextColor({color:color})
   }
   function ResetColor(){
    setTextColor({color:'black'})
   }
   return (
    <div className="container-fluid">
         <h2>Style Binding</h2>
         <div className="d-flex">
            <div onMouseOver={()=>GetColor('red')} onMouseOut={ResetColor} style={{backgroundColor:'red', height:'30px', width:'50px'}}></div>
            <div onMouseOver={()=>GetColor('green')} onMouseOut={ResetColor} style={{backgroundColor:'green', height:'30px', width:'50px'}}></div>
            <div onMouseOver={()=>GetColor('blue')} onMouseOut={ResetColor} style={{backgroundColor:'blue', height:'30px', width:'50px'}}></div>
         </div>
         <div>
            <h1 style={textColor}>Sample Text</h1>
         </div>

    </div>
   )
}