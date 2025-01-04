import { useEffect, useReducer } from "react";
import { useCookies } from "react-cookie";

let initialState  = {likesCount: 0};

function reducer(state, action){
    switch(action.type){
        case 'addLike':
            return {likesCount: state.likesCount+1}
        case 'addDisLike':
            return {likesCount: state.likesCount-1}
    }
     
}

export function ReducerDemo() {
    const [state,dispatch] = useReducer(reducer, initialState)
    const [cookies, setCookie, removeCookie] = useCookies(['username'])

    useEffect( () =>{
        console.log(cookies['username'])
    },[])

    function handleLikeClick(){
        dispatch({type: 'addLike'})
    }
    function handleSubmit(){
        removeCookie('username')
        alert('Signed out Successfully..')
    }
    return(
        <div className="container-fluid">
            <h2><button onClick={handleSubmit} className="btn btn-click">Sign Out</button></h2>
             <iframe width="400" height="300" src="https://youtube.com/embed/_mhtfJQ5lxU" title="some text"></iframe>
             <div className="my-2">
                <button onClick={handleLikeClick} className="btn btn-primary bi bi-hand-thumbs-up"></button>
                <span>{state.likesCount} Likes</span>
             </div>
        </div>
    )
}