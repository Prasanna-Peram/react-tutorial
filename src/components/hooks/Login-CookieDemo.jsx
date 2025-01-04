import "../login/login.css"
import { useState } from "react"
import { useCaptcha } from "./usecaptcha";
import { useCookies } from "react-cookie";

export function LoginCookieDemo(){
    const [title, setTitle] =  useState('User Login');
    const [userName, setUserName] = useState('');
    const code = useCaptcha();
 
    const [cookies, setCookie, removeCookie] = useCookies(['username']);

    function handleChange(e){
        setUserName(e.target.value)
    }
    function handleLoginClick(e){
        setCookie('username', userName)
        alert('Cookie Created')
    }

    return(
        <div className="container">
            <div>
                <form className="form-login alert alert-warning alert-dismissible">
                    <h3 className="bi bi-person-fill">{title}</h3>
                    <button data-bs-dismiss="alert" className="btn btn-close"></button>
                     <dl>
                        <dt>User Name</dt>
                        <dd><input type="text" onChange={handleChange} className="form-control"></input></dd>
                        <dt>Password</dt>
                        <dd><input type="password" className="form-control" /></dd>
                        <dt>Verify Code</dt>
                        <dd>{code}</dd>
                     </dl>
                     <button type="button" onClick={handleLoginClick} className="btn btn-warning w-100">Login</button>
                </form>
            </div>
        </div>
    )
}