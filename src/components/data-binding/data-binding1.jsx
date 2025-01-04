import { useEffect, useState } from "react";

export function DataBinding1(){
    const [val, setVal] = useState();
    const [title] = useState('Data Bidning')

    const [uname, setUname] = useState(prompt('Enter Name'))

    useEffect(()=> {
         setVal('bg-dark p-2');
    }, [])

    return (
        <div className="container-fluid">
            <h2 className={`text-center text-warning ${val}`}> {title.toUpperCase()}</h2>
            <br/>
            {(uname == null) ? 'Please provide  name' : uname}
            {(uname === undefined) ? 'Please provide a name' : uname}
        </div>
    )
}