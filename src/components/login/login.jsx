import "./login.css";
import { useState } from "react";

export function Login(){

    
   const [title, setTitle] =  useState('User Login');
   const [userName, setUserName] =  useState('John');

    return(
        <div className="container">
          <form className="form-login alert alert-warning alert-dismissible">
            <h3 className="bi bi-person-fill">{title}</h3>
            <button data-bs-dismiss="alert" className="btn btn-close"></button>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" value={userName} className="form-control" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" className="form-control"/></dd>
                </dl>
                <button className="btn btn-warning w-100">Login</button>
          </form>
        </div>
    )

}