import { useState } from "react"
export function ClassBinding(){
    const [theme,setTheme] = useState('border border-1 p-4')
    const [btnTheme, setBtnTheme] = useState('btn btn-dark w-100')
    function ToggleTheme(e){
        if(e.target.checked){
            setTheme('border border-1 p-4 bg-dark text-white');
            setBtnTheme('btn btn-warning w-100');
        }else {
            setTheme('border border-1 p-4')
            setBtnTheme('btn btn-dark w-100')
        }

    }
    return (
     <div className="container-fluid">
        <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
           <form className={theme}>
            <div className="form-switch">
            <input onChange={ToggleTheme} className="form-check-input" type="checkbox" /> <label> Dark Theme</label>
            </div>
           <h3 className="bi bi-person-fill">User Login</h3>
                    <dl>
                        <dt>User Name</dt>
                        <dd><input type="text" className="form-control"/></dd>
                        <dt>Password</dt>
                        <dd><input type="password" className="form-control" /></dd>
                    </dl>
                    <button className={btnTheme}>Login</button>
           </form>
        </div>

     </div>
    )
      
}