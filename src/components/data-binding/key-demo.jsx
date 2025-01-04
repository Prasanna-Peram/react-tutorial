import axios from "axios";
import { useEffect, useState } from "react"

export function KeyDemo() {
    const [users, setUsers] = useState([{UserId:''}])
    const [userError, setUserError] = useState('');
    const [pwdError, setPwdError] = useState('');
    const [errorClass, setErrorClass] = useState('');
    const [pwdStrength, setPwdStrength] = useState({width:''});
    const [bgClass, setBgClass] = useState('');
    const [codeError, setCodeError] = useState('d-none');
    useEffect(()=>{
      axios.get('users.json')
      .then(response=>{
        setUsers(response.data)
      })
    },[])
    function VerifyUserId(e){
         var userid = e.target.value;
         for(var user of users) {
            if(user.UserId === userid){
                setUserError('UserId Taken - Try Another');
                setErrorClass('text-danger');
                break;
            }
            else {
                setUserError('UserId Available')
                setErrorClass('text-success')
            }
         }
    }
    function VerifyPassword(e) {
        var pwd = e.target.value;
        if(pwd.match(/(?=.*[A-Z])\w{4,15}/)) {
            setPwdError('Strong Password')
            setErrorClass('text-success')
            setPwdStrength({width:'100%'})
            setBgClass('bg-success')
        } else {
            if(pwd.length<4){
                setPwdError('Poor Password')
                setErrorClass('text-danger')
                setPwdStrength({width:'30%'})
                setBgClass('bg-danger')
            } else {
                setPwdError('Weak Password')
                setErrorClass('text-warning')
                setPwdStrength({width:'60%'})
                setBgClass('bg-warning')
            }
        }
    }
    function VerifyCode(e){
        if(e.which>=65 && e.which<=90){
            setCodeError('d-block');
        } else {
           setCodeError('d-none');
        }
    }

    return (
        <div className="container-fluid">
        <h2>Register User</h2>
            <dl className="w-25"></dl>
            <dt>User Id</dt>
            <dd><input type="text" className="form-control" onKeyUp={VerifyUserId} /></dd>
            <dd className={errorClass}> {userError}</dd>
            <dt>Password</dt>
            <dd><input type="password" className="form-control" onKeyUp={VerifyPassword} /></dd>
            <dd>
                <div className="progress">
                    <div style={pwdStrength} className={`progress-bar progress-bar-animated progress-bar-striped ${bgClass}`}>
                        {pwdError}
                    </div>
                </div>
            </dd>
            <dd className={errorClass}>{pwdError}</dd>
            <dt>Verify Code</dt>
            <dd><input type="text" onKeyPress={VerifyCode} className="form-control" placeholder="Lowercase Code Only" /></dd>
            <dd className={codeError}>
                    <div className="text-warning">
                    <span className="bi bi-exclamation-triangle-fill"></span> Warning  Caps ON
                    </div>
                </dd>
        </div>
    )
}